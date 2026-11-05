export interface LegalTranslation {
  de: string;
  en: string;
  lv: string;
}

export const impressumTranslations: Record<string, LegalTranslation> = {
  "impressum.badge": {
    de: "Rechtliche Informationen",
    en: "Legal Information",
    lv: "Juridiskā informācija",
  },
  "impressum.title": {
    de: "Impressum",
    en: "Legal Notice",
    lv: "Impresums",
  },
  "impressum.intro": {
    de: "Gemäß dem lettischen Gesetz über Dienste der Informationsgesellschaft und dem Verbraucherschutzgesetz stellen wir hier die gesetzlich vorgeschriebenen Angaben zum Diensteanbieter bereit.",
    en: "In accordance with the Latvian Law on Information Society Services and the Consumer Rights Protection Law, we provide the legally required information about the service provider below.",
    lv: "Saskaņā ar Latvijas Republikas Informācijas sabiedrības pakalpojumu likumu un Patērētāju tiesību aizsardzības likumu sniedzam obligāto informāciju par pakalpojumu sniedzēju.",
  },

  "impressum.s1.heading": {
    de: "1. Diensteanbieter",
    en: "1. Service Provider",
    lv: "1. Pakalpojumu sniedzējs",
  },
  "impressum.legalForm": {
    de: "Rechtsform: Gesellschaft mit beschränkter Haftung (SIA, lettisches Äquivalent der GmbH)",
    en: "Legal form: limited liability company (SIA, Latvian equivalent of an LLC)",
    lv: "Tiesiskā forma: sabiedrība ar ierobežotu atbildību (SIA)",
  },
  "impressum.address": { de: "Eingetragener Sitz", en: "Registered address", lv: "Juridiskā adrese" },
  "impressum.regNumber": { de: "Registernummer", en: "Registration number", lv: "Reģistrācijas numurs" },
  "impressum.registeredAt": { de: "Eingetragen am", en: "Registered on", lv: "Reģistrēts" },
  "impressum.shareCapital": { de: "Stammkapital", en: "Share capital", lv: "Pamatkapitāls" },
  "impressum.sepaId": { de: "SEPA-Gläubiger-ID", en: "SEPA identifier", lv: "SEPA identifikators" },
  "impressum.registerEntry": {
    de: "Öffentlicher Eintrag im Unternehmensregister:",
    en: "Public entry in the Commercial Register:",
    lv: "Publiskais ieraksts Uzņēmumu reģistrā:",
  },

  "impressum.s2.heading": { de: "2. Kontakt", en: "2. Contact", lv: "2. Kontaktinformācija" },
  "impressum.email": { de: "E-Mail", en: "Email", lv: "E-pasts" },
  "impressum.phone": { de: "Telefon", en: "Phone", lv: "Tālrunis" },
  "impressum.website": { de: "Webseite", en: "Website", lv: "Tīmekļa vietne" },

  "impressum.s3.heading": { de: "3. Umsatzsteuer", en: "3. VAT", lv: "3. PVN maksātājs" },
  "impressum.vatId": { de: "USt-IdNr.", en: "VAT ID", lv: "PVN maksātāja numurs" },
  "impressum.vatRegisteredAt": {
    de: "Registriert im USt-Register am",
    en: "Registered in the VAT register on",
    lv: "Reģistrēts PVN maksātāju reģistrā",
  },

  "impressum.s4.heading": {
    de: "4. Eingetragene Geschäftstätigkeit",
    en: "4. Registered Business Activity",
    lv: "4. Reģistrētā darbība",
  },
  "impressum.nace": { de: "Registrierte Tätigkeit (NACE)", en: "Registered activity (NACE)", lv: "Reģistrētais darbības veids (NACE)" },
  "impressum.s4.body": {
    de: "Weitere auf dieser Webseite angebotene Leistungen (z. B. Fotografie und Social-Media-Dienstleistungen) werden erbracht, sofern sie durch die Satzung der Gesellschaft und die anwendbaren gesetzlichen Vorschriften gedeckt sind.",
    en: "Additional services offered on this website (e.g. photography and social media services) are provided insofar as they are covered by the company's articles of association and applicable law.",
    lv: "Papildu pakalpojumi šajā tīmekļa vietnē (piemēram, fotogrāfija un sociālo mediju pakalpojumi) tiek piedāvāti, ja tie ir atļauti sabiedrības statūtos un piemērojamajos normatīvajos aktos.",
  },

  "impressum.s5.heading": {
    de: "5. Vertretungsberechtigung",
    en: "5. Right of Representation",
    lv: "5. Pārstāvības tiesības",
  },
  "impressum.repRole": { de: "Vorstandsmitglied", en: "member of the board", lv: "valdes loceklis" },
  "impressum.repRights": {
    de: "einzelvertretungsberechtigt",
    en: "entitled to represent the company individually",
    lv: "tiesības pārstāvēt sabiedrību atsevišķi",
  },

  "impressum.s6.heading": {
    de: "6. Inhaltlich Verantwortlicher",
    en: "6. Person Responsible for Content",
    lv: "6. Par saturu atbildīgā persona",
  },
  "impressum.s6.body": {
    de: "Für den Inhalt dieser Webseite verantwortlich: {{name}}, {{role}}, {{legalName}}, {{address}}.",
    en: "Responsible for the content of this website: {{name}}, {{role}}, {{legalName}}, {{address}}.",
    lv: "Par šīs tīmekļa vietnes saturu atbild {{name}}, {{role}}, {{legalName}}, {{address}}.",
  },

  "impressum.s7.heading": { de: "7. Haftung für Inhalte", en: "7. Liability for Content", lv: "7. Atbildība par saturu" },
  "impressum.s7.body": {
    de: "{{legalName}} ist gemäß den gesetzlichen Vorschriften der Republik Lettland für eigene Inhalte auf dieser Webseite verantwortlich. Wir sind nicht verpflichtet, von Dritten übermittelte oder gespeicherte Informationen zu überwachen, solange keine Anhaltspunkte für eine rechtswidrige Tätigkeit vorliegen. Die Pflicht zur Entfernung oder Sperrung rechtswidriger Inhalte nach den allgemeinen Gesetzen bleibt hiervon unberührt.",
    en: "{{legalName}} is responsible for its own content on this website in accordance with the laws of the Republic of Latvia. We are not obliged to monitor information transmitted or stored by third parties unless there are indications of unlawful activity. The obligation to remove or block unlawful content under general law remains unaffected.",
    lv: "{{legalName}} ir atbildīga par pašu radīto saturu šajā tīmekļa vietnē saskaņā ar Latvijas Republikas normatīvajiem aktiem. Mēs neesam pienākumā uzraudzīt trešo personu nosūtīto vai saglabāto informāciju, ja nav zināms par nelikumīgu darbību. Pienākums dzēst vai bloķēt nelikumīgas informācijas izmantošanu paliek spēkā saskaņā ar vispārējiem tiesību aktiem.",
  },

  "impressum.s8.heading": { de: "8. Haftung für Links", en: "8. Liability for Links", lv: "8. Atbildība par saitēm" },
  "impressum.s8.body": {
    de: "Diese Webseite enthält Links zu externen Webseiten (z. B. sozialen Netzwerken). Auf deren Inhalte haben wir keinen Einfluss und übernehmen daher keine Haftung dafür. Für den Inhalt der verlinkten Seiten ist der jeweilige Anbieter oder Betreiber verantwortlich.",
    en: "This website contains links to external websites (e.g. social networks). We have no influence on their content and therefore accept no liability for it. The respective provider or operator is responsible for the content of the linked pages.",
    lv: "Vietnē ir saites uz ārējām tīmekļa vietnēm (piemēram, sociālie tīkli). Mums nav ietekmes uz šo vietņu saturu, tādēļ par to saturu mēs neuzņemamies atbildību. Par ārējās saites saturu atbild attiecīgais pakalpojumu sniedzējs vai operators.",
  },

  "impressum.s9.heading": { de: "9. Urheberrecht", en: "9. Copyright", lv: "9. Autortiesības" },
  "impressum.s9.body": {
    de: "Die auf dieser Webseite veröffentlichten Texte, Bilder, Designs und sonstigen Inhalte sind urheberrechtlich geschützt. Jede Nutzung ohne vorherige schriftliche Zustimmung von {{legalName}} oder der jeweiligen Rechteinhaber ist untersagt, soweit gesetzlich nichts anderes zugelassen ist.",
    en: "The texts, images, designs and other materials published on this website are protected by copyright. Any use without the prior written consent of {{legalName}} or the respective rights holders is prohibited, except where permitted by law.",
    lv: "Vietnē publicētie teksti, attēli, dizains un citi materiāli ir aizsargāti ar autortiesībām. Jebkāda to izmantošana bez {{legalName}} vai attiecīgo tiesību subjektu iepriekšējas rakstiskas piekrišanas ir aizliegta, izņemot gadījumus, ko pieļauj normatīvie akti.",
  },

  "impressum.s10.heading": {
    de: "10. Streitbeilegung für Verbraucher",
    en: "10. Consumer Dispute Resolution",
    lv: "10. Strīdu risināšana patērētājiem",
  },
  "impressum.s10.body": {
    de: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
    en: "The European Commission provides an online dispute resolution (ODR) platform:",
    lv: "Eiropas Komisija nodrošina tiešsaistes strīdu risināšanas platformu (ODR):",
  },
  "impressum.s10.body2": {
    de: "Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    en: "We are not obliged and unable to participate in dispute resolution proceedings before a consumer arbitration board.",
    lv: "Mēs neesam pienākumā un nevaram piedalīties strīdu risināšanas procesā patērētāju šķīrējtiesā.",
  },

  "impressum.s11.heading": { de: "11. Anwendbares Recht", en: "11. Applicable Law", lv: "11. Piemērojamie tiesību akti" },
  "impressum.s11.body": {
    de: "Es gelten die gesetzlichen Vorschriften der Republik Lettland sowie das Recht der Europäischen Union. Im Streitfall wird zunächst eine einvernehmliche Lösung angestrebt; kommt keine Einigung zustande, wird der Streit vor dem zuständigen Gericht der Republik Lettland entschieden.",
    en: "These relationships are governed by the laws of the Republic of Latvia and European Union law. In the event of a dispute, the parties will first seek an amicable resolution through negotiation; if no agreement is reached, the dispute will be resolved before the competent court of the Republic of Latvia.",
    lv: "Uz attiecībām attiecas Latvijas Republikas normatīvie akti un Eiropas Savienības tiesību akti. Strīdu gadījumā strīds vispirms risināms sarunu ceļā; ja vienošanās netiek panākta, strīds tiek risināts Latvijas Republikas kompetentajā tiesā.",
  },

  "impressum.footer": {
    de: "Gültig ab: Juni 2026 · Angaben entsprechen dem öffentlichen Eintrag im Unternehmensregister",
    en: "Effective: June 2026 · Details correspond to the public entry in the Commercial Register",
    lv: "Spēkā: 2026. gada jūnijs · Dati atbilst publiskajam ierakstam Uzņēmumu reģistrā",
  },
};
