"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { detectLanguageFromBrowser, type AppLanguage } from "@/lib/detect-language";
import { hasFunctionalConsent } from "@/lib/cookie-consent";
import { extraTranslations } from "@/lib/extra-translations";

type Language = AppLanguage;

interface Translations {
  [key: string]: {
    de: string;
    en: string;
    lv: string;
  };
}

const translations: Translations = {
  "nav.back": { de: "Zur Startseite", en: "Back to home", lv: "Uz sākumu" },
  "nav.services": { de: "Leistungen", en: "Services", lv: "Pakalpojumi" },
  "nav.process": { de: "Ablauf", en: "Process", lv: "Process" },
  "nav.about": { de: "Über mich", en: "About", lv: "Par mani" },
  "nav.contact": { de: "Kontakt", en: "Contact", lv: "Kontakti" },

  "brand.slogan": {
    de: "Kreativ. Präzise. Handwerklich.",
    en: "Creative. Precise. Crafted.",
    lv: "Radoši. Precīzi. Meistarīgi.",
  },
  "brand.slogan.sub": {
    de: "Aus Lettland – für Bild & Strom",
    en: "From Latvia – for visuals & power",
    lv: "No Latvijas – attēliem un strāvai",
  },

  "gateway.badge": {
    de: "Präzision & Kreativität",
    en: "Precision & Creativity",
    lv: "Precizitāte & Radošums",
  },
  "gateway.title.part1": {
    de: "Zwei Welten.",
    en: "Two Worlds.",
    lv: "Divas Pasaules.",
  },
  "gateway.title.part2": {
    de: "Eine Plattform.",
    en: "One Platform.",
    lv: "Viena Platforma.",
  },
  "gateway.description": {
    de: "Warum findest du hier Social Media Management und Elektrotechnik auf derselben Seite? Weil ich in beiden Bereichen professionell arbeite. In Deutschland habe ich Elektrotechnik gelernt – in Lettland setze ich heute Fotografie, Social Media und Elektrotechnik um. Statt zwei getrennte Webseiten zu pflegen, habe ich alles unter Dzirksts Studio zusammengeführt. Wähle einfach den Bereich, für den du heute hier bist.",
    en: "Why do you find social media management and electrical work on the same website? Because I work professionally in both fields. I trained as an electrician in Germany and now deliver photography, social media and electrical services in Latvia. Instead of maintaining two separate websites, everything lives under Dzirksts Studio. Simply choose the area you need today.",
    lv: "Kāpēc vienā vietnē ir sociālo mediju vadība un elektrotehnika? Jo es profesionāli strādāju abās jomās. Vācijā esmu apguvis elektrotehniku – Latvijā šodien nodrošinu fotogrāfiju, sociālos medijus un elektrotehniku. Tā vietā, lai uzturētu divas atsevišķas vietnes, viss ir apvienots zem Dzirksts Studio. Vienkārši izvēlies jomu, kas tev šodien ir aktuāla.",
  },
  "gateway.card.media.label": {
    de: "01 · Kreativ",
    en: "01 · Creative",
    lv: "01 · Radošs",
  },
  "gateway.card.media.title": {
    de: "Social Media & Fotografie",
    en: "Social Media & Photography",
    lv: "Sociālie Mediji & Fotogrāfija",
  },
  "gateway.card.media.desc": {
    de: "Content, Strategie und Bildsprache für deine Marke.",
    en: "Content, strategy and visual language for your brand.",
    lv: "Saturs, stratēģija un vizuālā valoda tavam zīmolam.",
  },
  "gateway.card.elektro.label": {
    de: "02 · Handwerk",
    en: "02 · Craft",
    lv: "02 · Amats",
  },
  "gateway.card.elektro.title": {
    de: "Elektrotechnik",
    en: "Electrical Services",
    lv: "Elektrotehnika",
  },
  "gateway.card.elektro.desc": {
    de: "Sichere Installationen mit handwerklicher Präzision.",
    en: "Safe installations with craft precision.",
    lv: "Drošas instalācijas ar meistarības precizitāti.",
  },

  "agency.badge": {
    de: "Dzirksts Studio · Agentur",
    en: "Dzirksts Studio · Agency",
    lv: "Dzirksts Studio · Aģentūra",
  },
  "agency.hero.title.part1": {
    de: "Sichtbar werden.",
    en: "Get visible.",
    lv: "Kļūt redzamam.",
  },
  "agency.hero.title.part2": {
    de: "Mit System.",
    en: "With a system.",
    lv: "Ar sistēmu.",
  },
  "agency.hero.desc": {
    de: "Ich helfe dir, online professionell aufzutreten – von der Social-Media-Strategie über Content-Produktion bis zur Fotografie, die zu deiner Marke passt.",
    en: "I help you show up professionally online – from social media strategy and content production to photography that fits your brand.",
    lv: "Es palīdzu profesionāli parādīties tiešsaistē – no sociālo mediju stratēģijas un satura veidošanas līdz fotogrāfijai, kas atbilst tavam zīmolam.",
  },
  "agency.hero.cta": {
    de: "Erstgespräch vereinbaren",
    en: "Book a consultation",
    lv: "Pieteikt konsultāciju",
  },
  "agency.services.title": {
    de: "Leistungen",
    en: "Services",
    lv: "Pakalpojumi",
  },
  "agency.services.social.title": {
    de: "Social Media Management",
    en: "Social Media Management",
    lv: "Sociālo Mediju Vadība",
  },
  "agency.services.social.desc": {
    de: "Strategie, Redaktionsplan, Community und regelmäßiger Content für Instagram, TikTok, LinkedIn & Co.",
    en: "Strategy, editorial planning, community management and regular content for Instagram, TikTok, LinkedIn and more.",
    lv: "Stratēģija, satura plāns, kopienas vadība un regulārs saturs Instagram, TikTok, LinkedIn u.c.",
  },
  "agency.services.photo.title": {
    de: "Fotografie",
    en: "Photography",
    lv: "Fotogrāfija",
  },
  "agency.services.photo.desc": {
    de: "Portraits, Events, Produkte und authentische Bilder für deine Kanäle.",
    en: "Portraits, events, products and authentic images for your channels.",
    lv: "Portreti, pasākumi, produkti un autentiski attēli taviem kanāliem.",
  },
  "agency.services.content.title": {
    de: "Content & Storytelling",
    en: "Content & Storytelling",
    lv: "Saturs & Stāstījums",
  },
  "agency.services.content.desc": {
    de: "Reels, Karussells und visuelle Konzepte, die deine Zielgruppe erreichen.",
    en: "Reels, carousels and visual concepts that reach your audience.",
    lv: "Reels, karuseļi un vizuālie koncepti, kas sasniedz tavu auditoriju.",
  },
  "agency.about.title": {
    de: "Warum mit mir?",
    en: "Why work with me?",
    lv: "Kāpēc ar mani?",
  },
  "agency.about.desc": {
    de: "Ich kombiniere kreative Bildsprache mit einem strukturierten Workflow. Kein Agentur-Overhead – direkter Kontakt, klare Absprachen, Ergebnisse die du wirklich nutzen kannst.",
    en: "I combine creative visual language with a structured workflow. No agency overhead – direct contact, clear agreements, results you can actually use.",
    lv: "Es apvienoju radošu vizuālo valodu ar strukturētu darba plūsmu. Bez aģentūras pārslodzes – tiešs kontakts, skaidri noteikumi, rezultāti, ko vari patiešām izmantot.",
  },
  "agency.process.title": {
    de: "So läuft die Zusammenarbeit",
    en: "How we work together",
    lv: "Kā notiek sadarbība",
  },
  "agency.process.desc": {
    de: "Du siehst vorher genau, wie ich arbeite und was du bekommst.",
    en: "You'll see exactly how I work and what you get before we start.",
    lv: "Tu redzēsi, kā es strādāju un ko saņemsi pirms sākuma.",
  },
  "agency.process.step1.title": {
    de: "Kennenlernen",
    en: "Discovery call",
    lv: "Iepazīšanās",
  },
  "agency.process.step1.desc": {
    de: "Kur stehst du gerade? Was soll Social Media für dich leisten? Kurzes Gespräch, unverbindlich.",
    en: "Where are you now? What should social media do for you? A short, no-obligation conversation.",
    lv: "Kur tu šobrīd esi? Ko sociālie mediji tev jāsniedz? Īsa, neuzspiestu saruna.",
  },
  "agency.process.step2.title": {
    de: "Konzept",
    en: "Concept",
    lv: "Koncepts",
  },
  "agency.process.step2.desc": {
    de: "Kanäle, Tonality, Content-Plan und ein klares Angebot – bevor es losgeht.",
    en: "Channels, tone, content plan and a clear proposal – before anything starts.",
    lv: "Kanāli, tonis, satura plāns un skaidrs piedāvājums – pirms darba sākuma.",
  },
  "agency.process.step3.title": {
    de: "Produktion",
    en: "Production",
    lv: "Ražošana",
  },
  "agency.process.step3.desc": {
    de: "Shootings, Reels, Posts – alles abgestimmt auf deine Marke, nicht auf eine Agentur-Vorlage.",
    en: "Shoots, reels, posts – all tailored to your brand, not an agency template.",
    lv: "Foto, reels, ieraksti – viss pielāgots tavam zīmolam, ne aģentūras veidnei.",
  },
  "agency.process.step4.title": {
    de: "Betreuung",
    en: "Ongoing support",
    lv: "Uzturēšana",
  },
  "agency.process.step4.desc": {
    de: "Regelmäßiger Content, Anpassungen und Feedback – damit dein Auftritt wächst.",
    en: "Regular content, adjustments and feedback – so your presence keeps growing.",
    lv: "Regulārs saturs, korekcijas un atgriezeniskā saite – lai tava klātbūtne aug.",
  },
  "agency.deliverables.title": {
    de: "Was du konkret bekommst",
    en: "What you actually get",
    lv: "Ko tu konkrēti saņem",
  },
  "agency.deliverables.item1": {
    de: "Individueller Content-Plan für deine Zielgruppe",
    en: "Custom content plan for your audience",
    lv: "Individuāls satura plāns tavai auditorijai",
  },
  "agency.deliverables.item2": {
    de: "Professionelle Fotos & Videos für deine Kanäle",
    en: "Professional photos and videos for your channels",
    lv: "Profesionālas fotogrāfijas un video taviem kanāliem",
  },
  "agency.deliverables.item3": {
    de: "Einheitlicher Look über alle Plattformen",
    en: "Consistent look across all platforms",
    lv: "Vienots izskats visās platformās",
  },
  "agency.deliverables.item4": {
    de: "Direkter Ansprechpartner – keine Warteschleife",
    en: "Direct contact – no waiting in line",
    lv: "Tiešs kontakts – bez rindas gaidīšanas",
  },
  "agency.early.title": {
    de: "Ein Ansprechpartner. Alles aus einer Hand.",
    en: "One contact. Everything covered.",
    lv: "Viens kontakts. Viss no vienas rokas.",
  },
  "agency.early.desc": {
    de: "Strategie, Content und Fotografie kommen bei mir nicht aus der Agentur-Schublade, sondern aus einem klaren Plan – mit direktem Kontakt von der ersten Idee bis zum fertigen Post.",
    en: "Strategy, content and photography don't come from an agency template – they come from a clear plan, with direct contact from the first idea to the finished post.",
    lv: "Stratēģija, saturs un fotogrāfija nāk ne no aģentūras veidnes, bet no skaidra plāna – ar tiešu kontaktu no pirmās idejas līdz gatavam ierakstam.",
  },
  "agency.early.cta": {
    de: "Projekt besprechen",
    en: "Discuss your project",
    lv: "Apspriest projektu",
  },

  "elektro.badge": {
    de: "Dzirksts Studio · Elektro",
    en: "Dzirksts Studio · Electrical",
    lv: "Dzirksts Studio · Elektro",
  },
  "elektro.hero.title.part1": {
    de: "Sichere Elektrik.",
    en: "Safe electrics.",
    lv: "Droša elektroinstalācija.",
  },
  "elektro.hero.title.part2": {
    de: "Sauber gemacht.",
    en: "Done properly.",
    lv: "Kvalitatīvi izpildīts.",
  },
  "elektro.hero.desc": {
    de: "Ausgebildeter Elektriker aus Deutschland – jetzt in Lettland für private und gewerbliche Aufträge. Installation, Fehlerbehebung und Modernisierung mit klarem Ablauf und fairer Kommunikation.",
    en: "Certified electrician from Germany – now in Latvia for private and commercial jobs. Installation, troubleshooting and modernization with a clear process and fair communication.",
    lv: "Vācijā apmācīts elektriķis – tagad Latvijā privātiem un komerciāliem darbiem. Instalācija, kļūdu novēršana un modernizācija ar skaidru procesu un godīgu komunikāciju.",
  },
  "elektro.hero.cta": {
    de: "Anfrage senden",
    en: "Send inquiry",
    lv: "Nosūtīt pieprasījumu",
  },
  "elektro.hero.chip1": {
    de: "DE-Ausbildung",
    en: "German training",
    lv: "Vācu izglītība",
  },
  "elektro.hero.chip2": {
    de: "Latvija",
    en: "Latvia",
    lv: "Latvija",
  },
  "elektro.hero.chip3": {
    de: "Privat & Gewerbe",
    en: "Private & commercial",
    lv: "Privāti & komerciāli",
  },
  "elektro.services.title": {
    de: "Leistungen",
    en: "Services",
    lv: "Pakalpojumi",
  },
  "elektro.services.install.title": {
    de: "Elektroinstallation",
    en: "Electrical installation",
    lv: "Elektroinstalācija",
  },
  "elektro.services.install.desc": {
    de: "Neuinstallation, Erweiterungen und Anpassungen für Wohnung, Haus und Gewerbe.",
    en: "New installations, extensions and adjustments for apartments, houses and businesses.",
    lv: "Jaunas instalācijas, paplašinājumi un pielāgojumi dzīvokļiem, mājām un komercobjektiem.",
  },
  "elektro.services.repair.title": {
    de: "Reparatur & Fehlerbehebung",
    en: "Repair & troubleshooting",
    lv: "Remonts & kļūdu novēršana",
  },
  "elektro.services.repair.desc": {
    de: "Schnelle Diagnose bei Stromausfall, defekten Leitungen oder Sicherungsproblemen.",
    en: "Fast diagnosis for power outages, faulty wiring or fuse issues.",
    lv: "Ātra diagnostika strāvas padeves traucējumiem, bojātām ķēdēm vai drošinātāju problēmām.",
  },
  "elektro.services.modern.title": {
    de: "Modernisierung",
    en: "Modernization",
    lv: "Modernizācija",
  },
  "elektro.services.modern.desc": {
    de: "Erneuerung alter Anlagen, zusätzliche Steckdosen, Beleuchtungskonzepte und smarte Lösungen.",
    en: "Upgrading old systems, additional outlets, lighting concepts and smart solutions.",
    lv: "Vecu sistēmu atjaunošana, papildu kontaktligzdas, apgaismojuma koncepti un viedie risinājumi.",
  },
  "elektro.trust.title": {
    de: "Handwerk mit Hintergrund",
    en: "Craft with background",
    lv: "Amats ar pieredzi",
  },
  "elektro.trust.desc": {
    de: "Deutsche Ausbildung, saubere Arbeitsweise und transparente Absprachen. Du weißt vorher, was gemacht wird – und danach, dass es sicher ist.",
    en: "German training, clean workmanship and transparent agreements. You know what will be done beforehand – and that it's safe afterwards.",
    lv: "Vācu izglītība, kvalitatīvs darbs un caurspīdīgas vienošanās. Tu zini, kas tiks darīts – un pēc tam, ka viss ir droši.",
  },

  "contact.title": {
    de: "Lass uns sprechen",
    en: "Let's talk",
    lv: "Parunāsim",
  },
  "contact.desc": {
    de: "Schreib mir eine Nachricht – ich melde mich zeitnah zurück.",
    en: "Send me a message – I'll get back to you soon.",
    lv: "Uzraksti man – atbildēšu pēc iespējas ātrāk.",
  },

  "footer.tagline": {
    de: "Fotografie, Social Media und Elektrotechnik – unter einem Dach in Lettland.",
    en: "Photography, social media and electrical work – under one roof in Latvia.",
    lv: "Fotogrāfija, sociālie mediji un elektrotehnika – zem viena jumta Latvijā.",
  },
  "footer.areas": { de: "Bereiche", en: "Areas", lv: "Jomas" },
  "footer.legal": { de: "Rechtliches", en: "Legal", lv: "Juridiski" },
  "footer.impressum": { de: "Impressum", en: "Imprint", lv: "Impresums" },
  "footer.privacy": {
    de: "Datenschutz",
    en: "Privacy policy",
    lv: "Privātuma politika",
  },
  "footer.cookies": {
    de: "Cookie-Einstellungen",
    en: "Cookie settings",
    lv: "Sīkdatņu iestatījumi",
  },
  "footer.rights": {
    de: "Alle Rechte vorbehalten.",
    en: "All rights reserved.",
    lv: "Visas tiesības aizsargātas.",
  },
  ...extraTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("lv");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function applyLanguage() {
      const canPersist = hasFunctionalConsent();
      const manual =
        canPersist && localStorage.getItem("lang_manual") === "true";
      const savedLang = localStorage.getItem("app_lang") as Language;

      if (
        manual &&
        savedLang &&
        ["de", "en", "lv"].includes(savedLang)
      ) {
        setLanguageState(savedLang);
        return;
      }

      const detected = detectLanguageFromBrowser();
      setLanguageState(detected);

      if (canPersist) {
        localStorage.setItem("app_lang", detected);
      }
    }

    applyLanguage();
    setMounted(true);

    window.addEventListener("cookie-consent-updated", applyLanguage);
    return () =>
      window.removeEventListener("cookie-consent-updated", applyLanguage);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    if (hasFunctionalConsent()) {
      localStorage.setItem("app_lang", lang);
      localStorage.setItem("lang_manual", "true");
    }
  };

  const t = (key: string): string => {
    if (!mounted) return translations[key]?.lv || translations[key]?.de || key;
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
