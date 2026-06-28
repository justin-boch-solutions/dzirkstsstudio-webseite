import { siteConfig } from "@/lib/config";

type SendEmailInput = {
  to: string;
  fromEmail: string;
  fromName: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendViaBrevo(input: SendEmailInput) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { ok: false as const, reason: "missing_key" as const };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: input.fromName, email: input.fromEmail },
      to: [{ email: input.to }],
      replyTo: { email: input.replyTo },
      subject: input.subject,
      textContent: input.text,
      htmlContent: input.html,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Brevo error:", err);
    return { ok: false as const, reason: "send_failed" as const };
  }

  return { ok: true as const };
}

export function getBrevoMailConfig() {
  return {
    to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
    fromEmail: process.env.BREVO_FROM_EMAIL || siteConfig.email,
    fromName: process.env.BREVO_FROM_NAME || siteConfig.name,
  };
}
