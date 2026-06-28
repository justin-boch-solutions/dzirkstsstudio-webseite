export const siteConfig = {
  name: "Dzirksts Studio",
  legalName: "Dzirksts Studio, SIA",
  url: "https://dzirkstsstudio.com",
  email: "kontakti@dzirkstsstudio.com",
  phone: "+371 694696",
  whatsapp: "371694696",
  location: "Rīga, Latvija",
  address: {
    street: "Ģertrūdes iela 53 – 7",
    postalCode: "LV-1011",
    city: "Rīga",
    country: "Latvija",
  },
  legal: {
    registrationNumber: "40203737146",
    registeredAt: "10.04.2026",
    register: "Latvijas Republikas Uzņēmumu reģistrs (Komercreģistrs)",
    registerUrl:
      "https://info.ur.gov.lv/#/legal-entity/40203737146",
    shareCapital: "50,00 EUR",
    vatId: "LV40203737146",
    vatRegisteredAt: "23.04.2026",
    sepaId: "LV91ZZZ40203737146",
    nace: "43.21 – Elektroinstalācijas ierīkošana",
    representativeFullName: "Luca Masin",
    representativeRole: "valdes loceklis",
    representativeRights: "tiesības pārstāvēt sabiedrību atsevišķi",
  },
  processors: {
    hosting: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, ASV",
      privacyUrl: "https://vercel.com/legal/privacy-policy",
    },
    email: {
      name: "Brevo SAS",
      address: "106 boulevard Haussmann, 75008 Parīze, Francija",
      privacyUrl: "https://www.brevo.com/legal/privacypolicy/",
      dpaUrl: "https://www.brevo.com/legal/data-processing-agreement/",
    },
    captcha: {
      name: "Cloudflare, Inc. (Turnstile)",
      address: "101 Townsend St, San Francisco, CA 94107, ASV",
      privacyUrl: "https://www.cloudflare.com/privacypolicy/",
    },
  },
  instagram: "https://www.instagram.com/dzirkstsvisuals/",
  portraitSrc: "/portrait-new.png",
  portraitAlt: "Dzirksts Studio",
} as const;

export function formatLegalAddress(): string {
  const { street, postalCode, city, country } = siteConfig.address;
  return `${street}, ${postalCode} ${city}, ${country}`;
}

export type SiteArea = "gateway" | "agentur" | "elektro";
