import type { ContactPayload } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/config";

const AREA_LABELS: Record<ContactPayload["area"], string> = {
  agentur: "Agentur (Social Media & Fotografie)",
  elektro: "Elektrotechnik",
};

const TOPIC_LABELS: Record<ContactPayload["topic"], string> = {
  "social-media": "Social Media Management",
  photography: "Fotografie",
  "social-photo": "Social Media & Fotografie",
  installation: "Installation",
  repair: "Reparatur / Fehlerbehebung",
  modernization: "Modernisierung / Upgrade",
  consultation: "Beratung / Kostenschätzung",
  other: "Sonstiges",
};

const CONTACT_VIA_LABELS: Record<ContactPayload["contactVia"], string> = {
  email: "E-Mail",
  phone: "Telefon",
  whatsapp: "WhatsApp",
};

const TIMELINE_LABELS: Record<NonNullable<ContactPayload["timeline"]>, string> = {
  asap: "So schnell wie möglich",
  soon: "In den nächsten 2–4 Wochen",
  flexible: "Flexibel / noch unklar",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatOptional(value: string | undefined, fallback = "–"): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export function buildContactEmail(data: ContactPayload) {
  const areaLabel = AREA_LABELS[data.area];
  const topicLabel = TOPIC_LABELS[data.topic];
  const contactViaLabel = CONTACT_VIA_LABELS[data.contactVia];
  const timelineLabel = data.timeline ? TIMELINE_LABELS[data.timeline] : "–";
  const company = formatOptional(data.company);
  const phone = formatOptional(data.phone);

  const subject = `[Dzirksts Studio] Neue Anfrage (${areaLabel}) – ${data.name}`;

  const text = [
    "Neue Kontaktanfrage über dzirkstsstudio.com",
    "",
    `Bereich: ${areaLabel}`,
    `Anliegen: ${topicLabel}`,
    "",
    `Name: ${data.name}`,
    `Unternehmen: ${company}`,
    `E-Mail: ${data.email}`,
    `Telefon: ${phone}`,
    `Bevorzugter Kontakt: ${contactViaLabel}`,
    `Zeitrahmen: ${timelineLabel}`,
    "",
    "Nachricht:",
    data.message,
    "",
    `— Gesendet über ${siteConfig.url}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background:#a6a6a6;padding:28px 32px;">
              <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.82);">Dzirksts Studio</p>
              <h1 style="margin:0;font-size:24px;line-height:1.2;color:#ffffff;">Neue Kontaktanfrage</h1>
              <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.9);">${escapeHtml(areaLabel)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;width:38%;">Anliegen</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:700;">${escapeHtml(topicLabel)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;">Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;">Unternehmen</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">${escapeHtml(company)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;">E-Mail</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color:#111827;text-decoration:none;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;">Telefon</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">${escapeHtml(phone)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;">Bevorzugter Kontakt</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">${escapeHtml(contactViaLabel)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;">Zeitrahmen</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">${escapeHtml(timelineLabel)}</td>
                </tr>
              </table>

              <div style="margin-top:24px;padding:20px;background:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;">
                <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">Nachricht</p>
                <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap;color:#111827;">${escapeHtml(data.message)}</p>
              </div>

              <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">
                Gesendet über <a href="${siteConfig.url}" style="color:#64748b;">${siteConfig.url.replace(/^https:\/\//, "")}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
