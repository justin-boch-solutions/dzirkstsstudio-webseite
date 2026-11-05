import type { LegalTranslation } from "./impressum";

export const datenschutzTranslations: Record<string, LegalTranslation> = {
  "datenschutz.badge": { de: "Datenschutz", en: "Data Protection", lv: "Personas datu aizsardzība" },
  "datenschutz.title": { de: "Datenschutzerklärung", en: "Privacy Policy", lv: "Privātuma politika" },

  "datenschutz.s1.heading": { de: "1. Allgemeine Informationen", en: "1. General Information", lv: "1. Vispārīga informācija" },
  "datenschutz.s1.body": {
    de: "Diese Datenschutzerklärung erläutert, wie {{legalName}} (nachfolgend „wir“, „Verantwortlicher“) Ihre personenbezogenen Daten beim Besuch der Webseite {{url}} verarbeitet. Wir verarbeiten personenbezogene Daten gemäß der Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates (Datenschutz-Grundverordnung – DSGVO) sowie dem lettischen Gesetz über die Verarbeitung personenbezogener Daten natürlicher Personen.",
    en: "This privacy policy explains how {{legalName}} (hereinafter “we”, “controller”) processes your personal data when you visit the website {{url}}. We process personal data in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation – GDPR) and the Latvian Law on the Processing of Personal Data of Natural Persons.",
    lv: "Šī privātuma politika skaidro, kā {{legalName}} (turpmāk – „mēs“, „Pārzinis“) apstrādā jūsu personas datus, apmeklējot tīmekļa vietni {{url}}. Mēs apstrādājam personas datus saskaņā ar Eiropas Parlamenta un Padomes Regulu (ES) 2016/679 (Vispārīgā datu aizsardzības regula – VDAR) un Latvijas Republikas Fizisko personu datu apstrādes likumu.",
  },

  "datenschutz.s2.heading": { de: "2. Verantwortlicher", en: "2. Controller", lv: "2. Pārzinis" },
  "datenschutz.s2.intro": {
    de: "Verantwortlicher für die Datenverarbeitung ist:",
    en: "The controller responsible for data processing is:",
    lv: "Personas datu apstrādes pārzinis ir:",
  },
  "datenschutz.regNr": { de: "Reg.-Nr.", en: "Reg. No.", lv: "Reģ. Nr." },
  "datenschutz.s2.outro": {
    de: "Bei Fragen zur Verarbeitung personenbezogener Daten können Sie uns über die oben genannte E-Mail-Adresse kontaktieren.",
    en: "For questions about the processing of personal data, you can contact us using the email address stated above.",
    lv: "Jautājumos par personas datu apstrādi varat sazināties, izmantojot augstāk norādīto e-pasta adresi.",
  },

  "datenschutz.s3.heading": { de: "3. Hosting der Webseite", en: "3. Website Hosting", lv: "3. Vietnes mitināšana (hostings)" },
  "datenschutz.s3.body": {
    de: "Diese Webseite wird bei {{hostingName}}, {{hostingAddress}} gehostet. Beim Besuch der Webseite können in den Server-Logs technische Daten wie IP-Adresse, Browsertyp, Zugriffszeit und die angeforderte Seite verarbeitet werden, um die Sicherheit und den Betrieb der Webseite zu gewährleisten.",
    en: "This website is hosted by {{hostingName}}, {{hostingAddress}}. When you visit the website, technical data such as IP address, browser type, access time and the requested page may be processed in server logs to ensure the security and operation of the website.",
    lv: "Tīmekļa vietne tiek mitināta pie {{hostingName}}, {{hostingAddress}}. Apmeklējot vietni, servera žurnālos var tikt apstrādāti tehniskie dati, piemēram, IP adrese, pārlūkprogrammas tips, piekļuves laiks un pieprasītā lapa, lai nodrošinātu vietnes drošību un darbību.",
  },
  "datenschutz.legalBasis": { de: "Rechtsgrundlage:", en: "Legal basis:", lv: "Tiesiskais pamats:" },
  "datenschutz.s3.legalBasis": {
    de: "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse – Gewährleistung einer sicheren und funktionsfähigen Webseite).",
    en: "Art. 6(1)(f) GDPR (legitimate interest – ensuring a secure and functional website).",
    lv: "VDAR 6. panta 1. punkta f) apakšpunkts (leģitīmās intereses – drošas un funkcionālas tīmekļa vietnes nodrošināšana).",
  },
  "datenschutz.moreInfo": { de: "Weitere Informationen:", en: "More information:", lv: "Vairāk informācijas:" },
  "datenschutz.privacyPolicyOf": {
    de: "Datenschutzerklärung von {{name}}",
    en: "{{name}} privacy policy",
    lv: "{{name}} privātuma politika",
  },

  "datenschutz.s4.heading": {
    de: "4. Kontaktformular und E-Mail-Verarbeitung",
    en: "4. Contact Form and Email Processing",
    lv: "4. Kontaktforma un e-pasta apstrāde",
  },
  "datenschutz.s4.p1": {
    de: "Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen angegebenen Daten: Name, E-Mail-Adresse, optional Telefonnummer, Nachrichteninhalt sowie den gewählten Bereich (Agentur oder Elektro), um Ihre Anfrage zu beantworten.",
    en: "If you use the contact form, we process the data you provide: name, email address, optionally a phone number, message content, and the selected area (Agency or Electrical), in order to respond to your inquiry.",
    lv: "Ja izmantojat kontaktformu, mēs apstrādājam jūsu norādītos datus: vārds, e-pasta adrese, pēc izvēles tālrunis, ziņojuma saturs, kā arī izvēlēto sadaļu (Aģentūra vai Elektro), lai atbildētu uz jūsu pieprasījumu.",
  },
  "datenschutz.s4.p2": {
    de: "Zum Versand der Nachricht nutzen wir den E-Mail-Dienstleister {{emailName}}, {{emailAddress}}. Brevo verarbeitet die Daten als Auftragsverarbeiter in unserem Auftrag und leitet die Nachricht an unsere E-Mail-Adresse {{email}} weiter. Brevo hat seinen Sitz in Frankreich (EU/EWR).",
    en: "To send the message, we use the email service provider {{emailName}}, {{emailAddress}}. Brevo processes the data as a processor on our behalf and forwards the message to our email address {{email}}. Brevo is registered in France (EU/EEA).",
    lv: "Ziņojuma nosūtīšanai izmantojam e-pasta pakalpojumu sniedzēju {{emailName}}, {{emailAddress}}. Brevo apstrādā datus kā datu apstrādātājs mūsu uzdevumā un nosūta ziņu uz mūsu e-pasta adresi {{email}}. Brevo ir reģistrēts Francijā (ES/EEZ).",
  },
  "datenschutz.s4.p3": {
    de: "Nach dem Absenden des Formulars senden wir automatisch eine Bestätigungs-E-Mail an die von Ihnen angegebene Adresse, in der von Ihnen gewählten Sprache (Lettisch, Deutsch oder Englisch). Diese enthält eine Zusammenfassung Ihrer Angaben und dient als Bestätigung des Eingangs Ihrer Anfrage.",
    en: "After submitting the form, we automatically send a confirmation email to the address you provided, in your chosen language (Latvian, German or English). It contains a summary of the information you submitted and serves as confirmation that your request has been received.",
    lv: "Pēc formas iesniegšanas uz jūsu norādīto e-pasta adresi automātiski nosūtām apstiprinājuma e-pastu jūsu izvēlētajā valodā (latviešu, vācu vai angļu). Tas satur jūsu iesniegto informācijas kopsavilkumu un kalpo kā apliecinājums, ka pieprasījums ir saņemts.",
  },
  "datenschutz.s4.p4": {
    de: "Zum Schutz des Formulars vor Missbrauch verarbeiten wir Ihre IP-Adresse vorübergehend, um die Anzahl der Einreichungen zu begrenzen (maximal 3 Einreichungen pro Stunde von derselben IP-Adresse). Zusätzlich wird, sofern aktiviert, der Bot-Erkennungsdienst {{captchaName}} eingesetzt, um zu bestätigen, dass die Einreichung von einer Person und nicht von einem automatisierten Prozess stammt.",
    en: "To protect the form from abuse, we temporarily process your IP address to limit the number of submissions (maximum 3 submissions per hour from the same IP address). In addition, where enabled, the bot-detection tool {{captchaName}} is used to confirm that the submission is made by a human rather than an automated process.",
    lv: "Lai aizsargātu formu no ļaunprātīgas izmantošanas, mēs īslaicīgi apstrādājam jūsu IP adresi, lai ierobežotu pieprasījumu skaitu (maksimums 3 iesniegumi stundā no vienas IP adreses). Papildus, ja iespējots, tiek izmantots botu pārbaudes rīks {{captchaName}}, lai apstiprinātu, ka iesniegumu veic persona, nevis automatizēts process.",
  },
  "datenschutz.s4.legalBasis": {
    de: "Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung der Anfrage) sowie lit. f (berechtigtes Interesse – Sicherheit des Formulars und Missbrauchsprävention).",
    en: "Art. 6(1)(b) GDPR (processing the request) and lit. f (legitimate interest – form security and abuse prevention).",
    lv: "VDAR 6. panta 1. punkta b) apakšpunkts (pieprasījuma apstrāde) un f) apakšpunkts (leģitīmās intereses – formas drošība un ļaunprātīgas izmantošanas novēršana).",
  },
  "datenschutz.retention": { de: "Speicherdauer:", en: "Retention period:", lv: "Glabāšanas termiņš:" },
  "datenschutz.s4.retention": {
    de: "Wir speichern die Daten so lange, wie es für die Bearbeitung der Anfrage erforderlich ist, längstens jedoch, soweit dies nach geltendem Recht zulässig ist (z. B. buchhaltungs- und steuerrechtliche Aufbewahrungspflichten).",
    en: "We store the data for as long as necessary to process the request, but no longer than permitted under applicable law (e.g. accounting and tax record-keeping requirements).",
    lv: "datus glabājam tik ilgi, cik nepieciešams pieprasījuma apstrādei, bet ne ilgāk, nekā to pieļauj piemērojamie normatīvie akti (piemēram, grāmatvedības un nodokļu uzskaites prasības).",
  },
  "datenschutz.dpa": { de: "Auftragsverarbeitungsvertrag (DPA)", en: "data processing agreement (DPA)", lv: "datu apstrādes līgums (DPA)" },
  "datenschutz.cloudflarePrivacy": {
    de: "Datenschutzerklärung von Cloudflare",
    en: "Cloudflare privacy policy",
    lv: "Cloudflare privātuma politika",
  },

  "datenschutz.s5.heading": {
    de: "5. Cookies und lokaler Speicher",
    en: "5. Cookies and Local Storage",
    lv: "5. Sīkdatnes un lokālā atmiņa",
  },
  "datenschutz.s5.body": {
    de: "Auf dieser Webseite verwenden wir Cookies und den lokalen Speicher des Browsers (localStorage), um Grundfunktionen bereitzustellen, Ihre Auswahl zu speichern und – nur mit Ihrer Einwilligung – Statistiken zu erstellen. Beim ersten Besuch erscheint ein Cookie-Banner; Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen“ im Footer ändern.",
    en: "On this website we use cookies and the browser's local storage (localStorage) to provide core functionality, remember your choices and – only with your consent – for analytics. A cookie banner appears on your first visit; you can change your choice at any time via the “Cookie settings” link in the footer.",
    lv: "Tīmekļa vietnē izmantojam sīkdatnes (cookies) un pārlūkprogrammas lokālo atmiņu (localStorage), lai nodrošinātu pamatfunkcijas, saglabātu jūsu izvēles un – tikai ar jūsu piekrišanu – analītiku. Pirmā apmeklējuma laikā parādās sīkdatņu banneris; izvēli varat mainīt jebkurā brīdī, izmantojot saiti „Sīkdatņu iestatījumi“ kājenē.",
  },
  "datenschutz.table.name": { de: "Name", en: "Name", lv: "Nosaukums" },
  "datenschutz.table.type": { de: "Art", en: "Type", lv: "Veids" },
  "datenschutz.table.purpose": { de: "Zweck", en: "Purpose", lv: "Mērķis" },
  "datenschutz.table.duration": { de: "Dauer", en: "Duration", lv: "Termiņš" },
  "datenschutz.row1.purpose": {
    de: "Speichert Ihre Cookie-Auswahl",
    en: "Stores your cookie choice",
    lv: "Saglabā jūsu sīkdatņu izvēli",
  },
  "datenschutz.months12": { de: "12 Monate", en: "12 months", lv: "12 mēneši" },
  "datenschutz.row2.purpose": {
    de: "Manuell gewählte Sprache (Lettisch, Deutsch, Englisch) – nur mit Einwilligung zur Kategorie „Komfort / Sprache“",
    en: "Manually selected language (Latvian, German, English) – only with consent to the “Comfort / language” category",
    lv: "Manuāli izvēlētā valoda (latviešu, vācu, angļu) – tikai ar piekrišanu kategorijai „Komforts / valoda“",
  },
  "datenschutz.row3.type": { de: "Cookie / localStorage", en: "Cookie / localStorage", lv: "Sīkdatne / localStorage" },
  "datenschutz.row3.purpose": {
    de: "Bot-Prüfung im Kontaktformular (Sicherheit, Missbrauchsprävention)",
    en: "Bot check in the contact form (security, abuse prevention)",
    lv: "Botu pārbaude kontaktformā (drošība, ļaunprātīgas izmantošanas novēršana)",
  },
  "datenschutz.row3.duration": { de: "Abhängig von Cloudflare", en: "Depends on Cloudflare", lv: "Atkarīgs no Cloudflare" },
  "datenschutz.row4.type": { de: "Cookie (Google)", en: "Cookie (Google)", lv: "Sīkdatne (Google)" },
  "datenschutz.row4.purpose": {
    de: "Google Analytics – nur mit Einwilligung zur Kategorie „Statistik“",
    en: "Google Analytics – only with consent to the “Statistics” category",
    lv: "Google Analytics – tikai ar piekrišanu kategorijai „Statistika“",
  },
  "datenschutz.row4.duration": { de: "Bis zu 24 Monate", en: "Up to 24 months", lv: "Līdz 24 mēnešiem" },
  "datenschutz.s5.legalBasis": {
    de: "Rechtsgrundlage: notwendige Cookies – Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse); Komfort- und Statistik-Cookies – Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), die Sie über den Cookie-Banner erteilen.",
    en: "Legal basis: necessary cookies – Art. 6(1)(f) GDPR (legitimate interest); comfort and analytics cookies – Art. 6(1)(a) GDPR (consent), which you give via the cookie banner.",
    lv: "Tiesiskais pamats: nepieciešamās sīkdatnes – VDAR 6. panta 1. punkta f) apakšpunkts (leģitīmās intereses); komforta un analītikas sīkdatnes – VDAR 6. panta 1. punkta a) apakšpunkts (piekrišana), ko sniedzat sīkdatņu bannerī.",
  },

  "datenschutz.s6.heading": {
    de: "6. Externe Links und Dienste Dritter",
    en: "6. External Links and Third-Party Services",
    lv: "6. Ārējās saites un trešo personu pakalpojumi",
  },
  "datenschutz.s6.p1before": {
    de: "Die Webseite enthält Links zu externen Diensten, darunter WhatsApp und Instagram (Meta Platforms), sowie zu unserem Technologiepartner ",
    en: "The website contains links to external services, including WhatsApp and Instagram (Meta Platforms), as well as to our technology partner ",
    lv: "Vietnē ir saites uz ārējiem pakalpojumiem, tostarp WhatsApp un Instagram (Meta Platforms), kā arī uz mūsu tehnoloģiju partnera ",
  },
  "datenschutz.s6.p1after": {
    de: "Beim Aktivieren dieser Links kann der jeweilige Anbieter Ihre personenbezogenen Daten gemäß seiner eigenen Datenschutzerklärung verarbeiten. Für die Datenverarbeitung dieser Anbieter übernehmen wir keine Verantwortung.",
    en: "By activating these links, the respective provider may process your personal data in accordance with its own privacy policy. We accept no responsibility for the data processing carried out by these providers.",
    lv: "Aktivizējot šīs saites, attiecīgais pakalpojumu sniedzējs var apstrādāt jūsu personas datus saskaņā ar savu privātuma politiku. Par šo pakalpojumu sniedzēju datu apstrādi mēs neuzņemamies atbildību.",
  },
  "datenschutz.s6.p2": {
    de: "{{partnerName}} ist an der Entwicklung, Wartung und digitalen Infrastruktur dieser Webseite beteiligt. Der Partner ist kein Auftragsverarbeiter für das Kontaktformular oder die Analyse, sofern nicht ausdrücklich anders angegeben.",
    en: "{{partnerName}} is involved in the development, maintenance and digital infrastructure of this website. The partner is not a data processor for the contact form or analytics unless explicitly stated otherwise.",
    lv: "{{partnerName}} ir iesaistīts šīs tīmekļa vietnes izstrādē, uzturēšanā un digitālajā infrastruktūrā. Partneris nav personas datu apstrādātājs kontaktformas vai analītikas jomā, ja vien nav tieši norādīts citādi.",
  },

  "datenschutz.s7.heading": { de: "7. Analyse (Google Analytics)", en: "7. Analytics (Google Analytics)", lv: "7. Analītika (Google Analytics)" },
  "datenschutz.s7.p1": {
    de: "Wenn Sie den Statistik-Cookies zustimmen, können wir Google Analytics (Google Ireland Limited / Google LLC) einsetzen, um zu analysieren, wie Besucher die Webseite nutzen (z. B. besuchte Seiten, Gerätetyp, ungefähre Region). IP-Adressen können gekürzt werden (anonymize_ip). Google Analytics wird nicht geladen, solange Sie die Statistik-Cookies nicht in den Cookie-Einstellungen aktiviert haben.",
    en: "If you consent to statistics cookies, we may use Google Analytics (Google Ireland Limited / Google LLC) to analyze how visitors use the website (e.g. pages visited, device type, approximate region). IP addresses may be shortened (anonymize_ip). Google Analytics is not loaded unless you have activated statistics cookies in the cookie settings.",
    lv: "Ja piekrītat statistikas sīkdatnēm, varam izmantot Google Analytics (Google Ireland Limited / Google LLC), lai analizētu, kā apmeklētāji lieto vietni (piemēram, apmeklētās lapas, ierīces tips, aptuvenā reģions). IP adreses var tikt saīsinātas (anonymize_ip). Google Analytics netiek ielādēts, ja statistikas sīkdatnes neesat aktivizējis sīkdatņu iestatījumos.",
  },
  "datenschutz.s7.legalBasis": {
    de: "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen ändern.",
    en: "Art. 6(1)(a) GDPR (consent). You can withdraw your consent at any time by changing the cookie settings.",
    lv: "VDAR 6. panta 1. punkta a) apakšpunkts (piekrišana). Jūs varat jebkurā brīdī atsaukt piekrišanu, mainot sīkdatņu iestatījumus.",
  },
  "datenschutz.googlePrivacy": { de: "Datenschutzerklärung von Google", en: "Google privacy policy", lv: "Google privātuma politika" },
  "datenschutz.googleOptOut": {
    de: "Google-Analytics-Deaktivierungs-Add-on",
    en: "Google Analytics opt-out browser add-on",
    lv: "Google Analytics atteikšanās paplašinājums",
  },
  "datenschutz.s7.p3": {
    de: "Marketing-Cookies (z. B. Remarketing) werden derzeit nicht eingesetzt. Sollten sie künftig aktiviert werden, geschieht dies ausschließlich mit Ihrer gesonderten Einwilligung über den Banner.",
    en: "Marketing cookies (e.g. remarketing) are not currently used. Should they be activated in the future, this will only happen with your separate consent via the banner.",
    lv: "Mārketinga sīkdatnes (piemēram, remarketing) pašlaik netiek izmantotas. Ja nākotnē tiks aktivizētas, tās darbosies tikai ar jūsu atsevišķu piekrišanu bannerī.",
  },

  "datenschutz.s8.heading": {
    de: "8. Datenübermittlung in Drittländer",
    en: "8. Data Transfers to Third Countries",
    lv: "8. Datu nodošana uz trešām valstīm",
  },
  "datenschutz.s8.p1": {
    de: "Einige unserer Dienstleister befinden sich außerhalb der EU/des EWR, insbesondere der Hosting-Dienst ({{hostingName}}, USA), die Bot-Prüfung ({{captchaName}}, USA) und – bei Ihrer Einwilligung zu Statistik-Cookies – Google Analytics (USA). Die Übermittlung personenbezogener Daten in die USA erfolgt auf Grundlage der von der Europäischen Kommission genehmigten Standardvertragsklauseln (SCC) sowie der Auftragsverarbeitungsverträge der jeweiligen Anbieter gemäß Art. 46 DSGVO.",
    en: "Some of our service providers are located outside the EU/EEA, in particular the hosting service ({{hostingName}}, USA), the bot-detection service ({{captchaName}}, USA), and – if you consent to statistics cookies – Google Analytics (USA). The transfer of personal data to the USA is based on the Standard Contractual Clauses (SCC) approved by the European Commission and the respective providers' data processing agreements in accordance with Art. 46 GDPR.",
    lv: "Daži mūsu pakalpojumu sniedzēji atrodas ārpus ES/EEZ, īpaši mitināšanas pakalpojums ({{hostingName}}, ASV), botu pārbaude ({{captchaName}}, ASV) un – ja piekrītat statistikai – Google Analytics (ASV). Personas datu nodošana uz ASV notiek, pamatojoties uz Eiropas Komisijas apstiprinātajām standarta līguma klauzulām (SCC) un attiecīgo pakalpojumu sniedzēju datu apstrādes līgumiem saskaņā ar VDAR 46. pantu.",
  },
  "datenschutz.s8.p2": {
    de: "Der für den E-Mail-Versand genutzte Dienst {{emailName}} hat seinen Sitz in Frankreich (EU/EWR). Bei diesem Auftragsverarbeiter werden die Daten in der Regel innerhalb der Europäischen Union verarbeitet.",
    en: "The email delivery service {{emailName}} we use is registered in France (EU/EEA). For this processor, data is generally processed within the European Union.",
    lv: "E-pasta piegādei izmantotais {{emailName}} ir reģistrēts Francijā (ES/EEZ). Šim apstrādātājam dati parasti tiek apstrādāti Eiropas Savienībā.",
  },

  "datenschutz.s9.heading": { de: "9. Auftragsverarbeiter", en: "9. Data Processors", lv: "9. Datu apstrādātāji" },
  "datenschutz.s9.intro": {
    de: "Wir arbeiten mit vertrauenswürdigen Auftragsverarbeitern zusammen, die personenbezogene Daten ausschließlich nach unseren Weisungen und gemäß Auftragsverarbeitungsverträgen verarbeiten:",
    en: "We work with trustworthy data processors who process personal data only on our instructions and in accordance with data processing agreements:",
    lv: "Mēs sadarbojamies ar uzticamiem datu apstrādātājiem, kas apstrādā personas datus tikai pēc mūsu norādījumiem un saskaņā ar datu apstrādes līgumiem:",
  },
  "datenschutz.s9.li1": {
    de: "{{hostingName}} – Webseiten-Hosting",
    en: "{{hostingName}} – website hosting",
    lv: "{{hostingName}} – tīmekļa vietnes mitināšana",
  },
  "datenschutz.s9.li2": {
    de: "{{emailName}} – E-Mail-Zustellung für Kontaktformulare (EU/EWR)",
    en: "{{emailName}} – contact form email delivery (EU/EEA)",
    lv: "{{emailName}} – kontaktformu e-pasta piegāde (ES/EEZ)",
  },
  "datenschutz.s9.li3": {
    de: "{{captchaName}} – Bot-Prüfung im Kontaktformular",
    en: "{{captchaName}} – bot check in the contact form",
    lv: "{{captchaName}} – botu pārbaude kontaktformā",
  },
  "datenschutz.s9.li4": {
    de: "Google LLC / Google Ireland Limited – Google Analytics (nur mit Ihrer Einwilligung)",
    en: "Google LLC / Google Ireland Limited – Google Analytics (only with your consent)",
    lv: "Google LLC / Google Ireland Limited – Google Analytics (tikai ar jūsu piekrišanu)",
  },

  "datenschutz.s10.heading": { de: "10. Ihre Rechte", en: "10. Your Rights", lv: "10. Jūsu tiesības" },
  "datenschutz.s10.intro": {
    de: "Gemäß der DSGVO haben Sie folgende Rechte:",
    en: "Under the GDPR, you have the following rights:",
    lv: "Saskaņā ar VDAR jums ir šādas tiesības:",
  },
  "datenschutz.s10.li1": { de: "Auskunft über Ihre Daten (Recht auf Auskunft)", en: "access to your data (right of access)", lv: "piekļūt saviem datiem (datu piekļuves tiesības)" },
  "datenschutz.s10.li2": { de: "Berichtigung Ihrer Daten zu verlangen", en: "request rectification of your data", lv: "prasīt datu labošanu" },
  "datenschutz.s10.li3": { de: "Löschung Ihrer Daten zu verlangen („Recht auf Vergessenwerden“)", en: "request erasure of your data (“right to be forgotten”)", lv: "prasīt datu dzēšanu („tiesības tikt aizmirstam“)" },
  "datenschutz.s10.li4": { de: "die Einschränkung der Verarbeitung zu verlangen", en: "restrict the processing of your data", lv: "ierobežot datu apstrādi" },
  "datenschutz.s10.li5": { de: "Datenübertragbarkeit", en: "data portability", lv: "datu pārnesamība" },
  "datenschutz.s10.li6": { de: "der Verarbeitung zu widersprechen", en: "object to the processing of your data", lv: "iebilst pret datu apstrādi" },
  "datenschutz.s10.li7": {
    de: "eine erteilte Einwilligung zu widerrufen, sofern die Verarbeitung auf Einwilligung beruht",
    en: "withdraw consent where processing is based on consent",
    lv: "atcelt piekrišanu, ja apstrāde balstīta uz piekrišanu",
  },
  "datenschutz.s10.outro": {
    de: "Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte über die in Abschnitt 2 genannten Kontaktdaten.",
    en: "To exercise your rights, please contact us using the contact details in section 2.",
    lv: "Lai izmantotu savas tiesības, sazinieties ar mums, izmantojot kontaktinformāciju 2. sadaļā.",
  },

  "datenschutz.s11.heading": {
    de: "11. Widerspruchsrecht (Art. 21 DSGVO)",
    en: "11. Right to Object (Art. 21 GDPR)",
    lv: "11. Iebildums pret datu apstrādi (VDAR 21. pants)",
  },
  "datenschutz.s11.p1": {
    de: "Werden Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO verarbeitet, haben Sie das Recht, jederzeit gegen diese Verarbeitung Widerspruch einzulegen, indem Sie uns eine entsprechende Anfrage senden. Nach Ihrem Widerspruch verarbeiten wir Ihre personenbezogenen Daten für die betreffenden Zwecke nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen.",
    en: "If your personal data is processed on the basis of Art. 6(1)(e) or (f) GDPR, you have the right to object to such processing at any time by submitting a request to us. Following your objection, we will no longer process your personal data for the purposes concerned, unless we can demonstrate compelling legitimate grounds that override your interests, rights and freedoms.",
    lv: "Ja jūsu personas dati tiek apstrādāti, pamatojoties uz VDAR 6. panta 1. punkta e) vai f) apakšpunktu, jums ir tiesības jebkurā brīdī iebilst pret šādu datu apstrādi, iesniedzot mums attiecīgu pieprasījumu. Pēc iebilduma mēs vairs neapstrādāsim jūsu personas datus attiecīgajiem nolūkiem, ja vien nevarēsim pierādīt pārliecinošus likumīgus pamatus, kas ir svarīgāki par jūsu interesēm, tiesībām un brīvībām.",
  },
  "datenschutz.s11.p2": {
    de: "Werden Daten zu Zwecken der Direktwerbung verarbeitet, haben Sie das Recht, jederzeit gegen eine solche Verarbeitung Widerspruch einzulegen. Derzeit betreiben wir keine Direktwerbung unter Verwendung personenbezogener Daten von dieser Webseite.",
    en: "If data is processed for direct marketing purposes, you have the right to object to such processing at any time. We currently do not carry out direct marketing using personal data from this website.",
    lv: "Ja dati tiek apstrādāti tiešā mārketinga nolūkos, jums ir tiesības jebkurā brīdī iebilst pret šādu apstrādi. Pašlaik mēs neveicam tiešo mārketingu, izmantojot personas datus no šīs vietnes.",
  },

  "datenschutz.s12.heading": { de: "12. Beschwerderecht", en: "12. Right to Lodge a Complaint", lv: "12. Sūdzības iesniegšana" },
  "datenschutz.s12.intro": {
    de: "Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt, haben Sie das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen:",
    en: "If you believe that the processing of your personal data violates the GDPR, you have the right to lodge a complaint with a supervisory authority:",
    lv: "Ja uzskatāt, ka jūsu personas datu apstrāde pārkāpj VDAR, jums ir tiesības iesniegt sūdzību uzraudzības iestādei:",
  },
  "datenschutz.website": { de: "Webseite", en: "Website", lv: "Tīmekļa vietne" },
  "datenschutz.email": { de: "E-Mail", en: "Email", lv: "E-pasts" },
  "datenschutz.s12.outro": {
    de: "Einwohner der EU/des EWR können eine Beschwerde auch bei der Aufsichtsbehörde ihres Wohnsitzlandes einreichen.",
    en: "Residents of the EU/EEA may also lodge a complaint with the supervisory authority of their country of residence.",
    lv: "ES/EEZ iedzīvotāji var iesniegt sūdzību arī savas dzīvesvietas valsts uzraudzības iestādei.",
  },

  "datenschutz.s13.heading": {
    de: "13. Datensicherheit und Verschlüsselung",
    en: "13. Data Security and Encryption",
    lv: "13. Datu drošība un šifrēšana",
  },
  "datenschutz.s13.body": {
    de: "Diese Webseite nutzt SSL/TLS-Verschlüsselung, um die Datenübertragung im Internet zu schützen. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol in der Adressleiste Ihres Browsers.",
    en: "This website uses SSL/TLS encryption to protect data transmission over the internet. You can recognize an encrypted connection by the lock symbol in your browser's address bar.",
    lv: "Vietne izmanto SSL/TLS šifrēšanu, lai aizsargātu datu pārsūtīšanu internetā. Šifrētu savienojumu varat atpazīt pēc slēdzenes simbola pārlūkprogrammas adreses joslā.",
  },

  "datenschutz.s14.heading": {
    de: "14. Änderungen dieser Datenschutzerklärung",
    en: "14. Changes to this Policy",
    lv: "14. Politikas izmaiņas",
  },
  "datenschutz.s14.body": {
    de: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen unserer Dienstleistungen oder der Rechtslage widerzuspiegeln. Die jeweils aktuelle Fassung ist stets auf dieser Seite abrufbar.",
    en: "We may update this privacy policy from time to time to reflect changes to our services or the legal situation. The current version is always available on this page.",
    lv: "Mēs varam periodiski atjaunināt šo privātuma politiku, lai tā atspoguļotu izmaiņas mūsu pakalpojumos vai normatīvajos aktos. Aktuālā versija vienmēr ir pieejama šajā lapā.",
  },

  "datenschutz.footer": { de: "Gültig ab: Juni 2026", en: "Effective: June 2026", lv: "Spēkā: 2026. gada jūnijs" },
};
