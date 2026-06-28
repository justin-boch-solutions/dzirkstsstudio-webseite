import type { AppLanguage } from "@/lib/detect-language";
import type { ContactPayload } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/config";

type Copy = {
  subject: string;
  headline: string;
  greeting: (name: string) => string;
  intro: string;
  summaryTitle: string;
  labels: {
    area: string;
    topic: string;
    contactVia: string;
    timeline: string;
    message: string;
  };
  footer: string;
  contactLine: string;
};

const COPY: Record<AppLanguage, Copy> = {
  de: {
    subject: "Deine Anfrage bei Dzirksts Studio – wir melden uns bald",
    headline: "Anfrage erhalten",
    greeting: (name) => `Hallo ${name},`,
    intro:
      "vielen Dank für deine Nachricht. Wir haben deine Anfrage erhalten und melden uns so schnell wie möglich bei dir.",
    summaryTitle: "Deine Angaben",
    labels: {
      area: "Bereich",
      topic: "Anliegen",
      contactVia: "Bevorzugter Kontakt",
      timeline: "Zeitrahmen",
      message: "Nachricht",
    },
    footer: "Falls du noch etwas ergänzen möchtest, antworte einfach auf diese E-Mail.",
    contactLine: "Dzirksts Studio · dzirkstsstudio.com",
  },
  en: {
    subject: "Your inquiry at Dzirksts Studio – we'll be in touch soon",
    headline: "Inquiry received",
    greeting: (name) => `Hi ${name},`,
    intro:
      "thank you for reaching out. We've received your inquiry and will get back to you as soon as possible.",
    summaryTitle: "Your details",
    labels: {
      area: "Area",
      topic: "Topic",
      contactVia: "Preferred contact",
      timeline: "Timeline",
      message: "Message",
    },
    footer: "If you'd like to add anything, simply reply to this email.",
    contactLine: "Dzirksts Studio · dzirkstsstudio.com",
  },
  lv: {
    subject: "Tavs pieprasījums Dzirksts Studio – drīz sazināsimies",
    headline: "Pieprasījums saņemts",
    greeting: (name) => `Sveiki, ${name}!`,
    intro:
      "paldies par ziņu. Esam saņēmuši tavu pieprasījumu un sazināsimies ar tevi pēc iespējas ātrāk.",
    summaryTitle: "Tavi dati",
    labels: {
      area: "Joma",
      topic: "Temats",
      contactVia: "Vēlamā saziņa",
      timeline: "Laika posms",
      message: "Ziņojums",
    },
    footer: "Ja vēlies kaut ko pievienot, vienkārši atbildi uz šo e-pastu.",
    contactLine: "Dzirksts Studio · dzirkstsstudio.com",
  },
};

const AREA_LABELS: Record<AppLanguage, Record<ContactPayload["area"], string>> = {
  de: {
    agentur: "Agentur (Social Media & Fotografie)",
    elektro: "Elektrotechnik",
  },
  en: {
    agentur: "Agency (Social Media & Photography)",
    elektro: "Electrical services",
  },
  lv: {
    agentur: "Aģentūra (sociālie mediji un fotogrāfija)",
    elektro: "Elektrotehnika",
  },
};

const TOPIC_LABELS: Record<
  AppLanguage,
  Record<ContactPayload["topic"], string>
> = {
  de: {
    "social-media": "Social Media Management",
    photography: "Fotografie",
    "social-photo": "Social Media & Fotografie",
    installation: "Installation",
    repair: "Reparatur / Fehlerbehebung",
    modernization: "Modernisierung / Upgrade",
    consultation: "Beratung / Kostenschätzung",
    other: "Sonstiges",
  },
  en: {
    "social-media": "Social media management",
    photography: "Photography",
    "social-photo": "Social media & photography",
    installation: "Installation",
    repair: "Repair / troubleshooting",
    modernization: "Modernization / upgrade",
    consultation: "Consultation / estimate",
    other: "Other",
  },
  lv: {
    "social-media": "Sociālo mediju vadība",
    photography: "Fotogrāfija",
    "social-photo": "Sociālie mediji un fotogrāfija",
    installation: "Instalācija",
    repair: "Remonts / kļūdu novēršana",
    modernization: "Modernizācija",
    consultation: "Konsultācija / izmaksu aprēķins",
    other: "Cits",
  },
};

const CONTACT_VIA_LABELS: Record<
  AppLanguage,
  Record<ContactPayload["contactVia"], string>
> = {
  de: { email: "E-Mail", phone: "Telefon", whatsapp: "WhatsApp" },
  en: { email: "Email", phone: "Phone", whatsapp: "WhatsApp" },
  lv: { email: "E-pasts", phone: "Tālrunis", whatsapp: "WhatsApp" },
};

const TIMELINE_LABELS: Record<
  AppLanguage,
  Record<NonNullable<ContactPayload["timeline"]>, string>
> = {
  de: {
    asap: "So schnell wie möglich",
    soon: "In den nächsten 2–4 Wochen",
    flexible: "Flexibel / noch unklar",
  },
  en: {
    asap: "As soon as possible",
    soon: "Within the next 2–4 weeks",
    flexible: "Flexible / not sure yet",
  },
  lv: {
    asap: "Pēc iespējas ātrāk",
    soon: "2–4 nedēļu laikā",
    flexible: "Elastīgi / vēl nezinu",
  },
};

const FALLBACK = "–";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;width:38%;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

export function buildCustomerConfirmationEmail(
  data: ContactPayload,
  language: AppLanguage,
) {
  const copy = COPY[language];
  const areaLabel = AREA_LABELS[language][data.area];
  const topicLabel = TOPIC_LABELS[language][data.topic];
  const contactViaLabel = CONTACT_VIA_LABELS[language][data.contactVia];
  const timelineLabel = data.timeline
    ? TIMELINE_LABELS[language][data.timeline]
    : FALLBACK;

  const text = [
    copy.greeting(data.name),
    "",
    copy.intro,
    "",
    copy.summaryTitle,
    `${copy.labels.area}: ${areaLabel}`,
    `${copy.labels.topic}: ${topicLabel}`,
    `${copy.labels.contactVia}: ${contactViaLabel}`,
    `${copy.labels.timeline}: ${timelineLabel}`,
    "",
    `${copy.labels.message}:`,
    data.message,
    "",
    copy.footer,
    siteConfig.email,
    siteConfig.phone,
    copy.contactLine,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(copy.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background:#a6a6a6;padding:28px 32px;">
              <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.82);">Dzirksts Studio</p>
              <h1 style="margin:0;font-size:24px;line-height:1.2;color:#ffffff;">${escapeHtml(copy.headline)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 12px;font-size:16px;line-height:1.5;">${escapeHtml(copy.greeting(data.name))}</p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#475569;">${escapeHtml(copy.intro)}</p>

              <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">${escapeHtml(copy.summaryTitle)}</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                ${row(copy.labels.area, areaLabel)}
                ${row(copy.labels.topic, topicLabel)}
                ${row(copy.labels.contactVia, contactViaLabel)}
                ${row(copy.labels.timeline, timelineLabel)}
              </table>

              <div style="margin-top:24px;padding:20px;background:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;">
                <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">${escapeHtml(copy.labels.message)}</p>
                <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap;color:#111827;">${escapeHtml(data.message)}</p>
              </div>

              <p style="margin:24px 0 12px;font-size:14px;line-height:1.6;color:#475569;">${escapeHtml(copy.footer)}</p>
              <p style="margin:0;font-size:14px;line-height:1.8;color:#64748b;">
                <a href="mailto:${siteConfig.email}" style="color:#111827;text-decoration:none;">${siteConfig.email}</a><br />
                ${escapeHtml(siteConfig.phone)}<br />
                <a href="${siteConfig.url}" style="color:#64748b;">${copy.contactLine}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject: copy.subject, text, html };
}
