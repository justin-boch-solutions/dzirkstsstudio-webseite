import { NextResponse } from "next/server";
import { getBrevoMailConfig, sendViaBrevo } from "@/lib/brevo";
import { buildCustomerConfirmationEmail } from "@/lib/contact-confirmation-email";
import { buildContactEmail } from "@/lib/contact-email";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/config";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const { success: allowed } = rateLimit.check(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "rate_limit", message: "Too many requests" },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "validation", message: "Invalid data" },
        { status: 400 },
      );
    }

    const captchaValid = await verifyTurnstile(parsed.data.token);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "captcha", message: "Captcha verification failed" },
        { status: 403 },
      );
    }

    const { subject, text, html } = buildContactEmail(parsed.data);
    const mailConfig = getBrevoMailConfig();
    const result = await sendViaBrevo({
      ...mailConfig,
      replyTo: parsed.data.email,
      subject,
      text,
      html,
    });

    if (!result.ok) {
      if (result.reason === "missing_key" && process.env.NODE_ENV === "development") {
        console.log("Contact form (no BREVO_API_KEY):\n", text);
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json({ error: "Send failed" }, { status: 500 });
    }

    const confirmation = buildCustomerConfirmationEmail(
      parsed.data,
      parsed.data.language,
    );
    const confirmationResult = await sendViaBrevo({
      ...mailConfig,
      to: parsed.data.email,
      replyTo: siteConfig.email,
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    });

    if (!confirmationResult.ok) {
      console.error("Customer confirmation email failed:", confirmationResult.reason);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
