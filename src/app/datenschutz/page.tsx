import type { Metadata } from "next";
import { formatLegalAddress, siteConfig } from "@/lib/config";
import { partnerConfig } from "@/lib/partner";

export const metadata: Metadata = {
  title: "Privātuma politika | Dzirksts Studio",
  description:
    "SIA Dzirksts Studio privātuma politika – informācija par personas datu apstrādi saskaņā ar VDAR un Latvijas normatīvajiem aktiem.",
  alternates: {
    canonical: `${siteConfig.url}/datenschutz`,
  },
};

export default function DatenschutzPage() {
  const { legal, processors } = siteConfig;

  return (
    <main className="min-h-screen section-light pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-4">
          Personas datu aizsardzība
        </p>
        <h1 className="text-4xl font-black mb-8">Privātuma politika</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">1. Vispārīga informācija</h2>
            <p>
              Šī privātuma politika skaidro, kā {siteConfig.legalName} (turpmāk – „mēs“,
              „Pārzinis“) apstrādā jūsu personas datus, apmeklējot tīmekļa vietni{" "}
              {siteConfig.url}. Mēs apstrādājam personas datus saskaņā ar Eiropas Parlamenta
              un Padomes Regulu (ES) 2016/679 (Vispārīgā datu aizsardzības regula – VDAR) un
              Latvijas Republikas Fizisko personu datu apstrādes likumu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">2. Pārzinis</h2>
            <p>Personas datu apstrādes pārzinis ir:</p>
            <p className="mt-3 border-l-2 border-black/15 pl-4">
              {siteConfig.legalName}
              <br />
              {legal.representativeFullName}, {legal.representativeRole}
              <br />
              {formatLegalAddress()}
              <br />
              E-pasts:{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-foreground">
                {siteConfig.email}
              </a>
              <br />
              Tālrunis: {siteConfig.phone}
              <br />
              Reģ. Nr.: {legal.registrationNumber}
            </p>
            <p className="mt-3">
              Jautājumos par personas datu apstrādi varat sazināties, izmantojot augstāk
              norādīto e-pasta adresi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              3. Vietnes mitināšana (hostings)
            </h2>
            <p>
              Tīmekļa vietne tiek mitināta pie{" "}
              <strong>{processors.hosting.name}</strong>, {processors.hosting.address}.
              Apmeklējot vietni, servera žurnālos var tikt apstrādāti tehniskie dati, piemēram,
              IP adrese, pārlūkprogrammas tips, piekļuves laiks un pieprasītā lapa, lai
              nodrošinātu vietnes drošību un darbību.
            </p>
            <p className="mt-3">
              <strong>Tiesiskais pamats:</strong> VDAR 6. panta 1. punkta f) apakšpunkts
              (leģitīmās intereses – drošas un funkcionālas tīmekļa vietnes nodrošināšana).
            </p>
            <p className="mt-3">
              Vairāk informācijas:{" "}
              <a
                href={processors.hosting.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {processors.hosting.name} privātuma politika
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              4. Kontaktforma un e-pasta apstrāde
            </h2>
            <p>
              Ja izmantojat kontaktformu, mēs apstrādājam jūsu norādītos datus: vārds, e-pasta
              adrese, pēc izvēles tālrunis, ziņojuma saturs, kā arī izvēlēto sadaļu (Aģentūra
              vai Elektro), lai atbildētu uz jūsu pieprasījumu.
            </p>
            <p className="mt-3">
              Ziņojuma nosūtīšanai izmantojam e-pasta pakalpojumu sniedzēju{" "}
              <strong>{processors.email.name}</strong>, {processors.email.address}. Brevo
              apstrādā datus kā datu apstrādātājs mūsu uzdevumā un nosūta ziņu uz mūsu e-pasta
              adresi {siteConfig.email}. Brevo ir reģistrēts Francijā (ES/EEZ).
            </p>
            <p className="mt-3">
              Pēc formas iesniegšanas uz jūsu norādīto e-pasta adresi automātiski nosūtām
              apstiprinājuma e-pastu jūsu izvēlētajā valodā (latviešu, vācu vai angļu). Tas
              satur jūsu iesniegto informācijas kopsavilkumu un kalpo kā apliecinājums, ka
              pieprasījums ir saņemts.
            </p>
            <p className="mt-3">
              Lai aizsargātu formu no ļaunprātīgas izmantošanas, mēs īslaicīgi apstrādājam jūsu
              IP adresi, lai ierobežotu pieprasījumu skaitu (maksimums 3 iesniegumi stundā no
              vienas IP adreses). Papildus, ja iespējots, tiek izmantots botu pārbaudes rīks{" "}
              <strong>{processors.captcha.name}</strong>, lai apstiprinātu, ka iesniegumu veic
              persona, nevis automatizēts process.
            </p>
            <p className="mt-3">
              <strong>Tiesiskais pamats:</strong> VDAR 6. panta 1. punkta b) apakšpunkts
              (pieprasījuma apstrāde) un f) apakšpunkts (leģitīmās intereses – formas drošība
              un ļaunprātīgas izmantošanas novēršana).
            </p>
            <p className="mt-3">
              <strong>Glabāšanas termiņš:</strong> datus glabājam tik ilgi, cik nepieciešams
              pieprasījuma apstrādei, bet ne ilgāk, nekā to pieļauj piemērojamie normatīvie
              akti (piemēram, grāmatvedības un nodokļu uzskaites prasības).
            </p>
            <p className="mt-3">
              Vairāk informācijas:{" "}
              <a
                href={processors.email.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {processors.email.name} privātuma politika
              </a>
              ,{" "}
              <a
                href={processors.email.dpaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                datu apstrādes līgums (DPA)
              </a>
              ,{" "}
              <a
                href={processors.captcha.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Cloudflare privātuma politika
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              5. Sīkdatnes un lokālā atmiņa
            </h2>
            <p>
              Tīmekļa vietnē izmantojam sīkdatnes (cookies) un pārlūkprogrammas lokālo
              atmiņu (<code className="text-sm">localStorage</code>), lai nodrošinātu
              pamatfunkcijas, saglabātu jūsu izvēles un – tikai ar jūsu piekrišanu –
              analītiku. Pirmā apmeklējuma laikā parādās sīkdatņu banneris; izvēli varat
              mainīt jebkurā brīdī, izmantojot saiti „Sīkdatņu iestatījumi“ kājenē.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-black/10 text-left">
                    <th className="py-2 pr-4 font-bold text-foreground">Nosaukums</th>
                    <th className="py-2 pr-4 font-bold text-foreground">Veids</th>
                    <th className="py-2 pr-4 font-bold text-foreground">Mērķis</th>
                    <th className="py-2 font-bold text-foreground">Termiņš</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">
                      <code>cookie-consent</code>
                    </td>
                    <td className="py-3 pr-4">localStorage</td>
                    <td className="py-3 pr-4">Saglabā jūsu sīkdatņu izvēli</td>
                    <td className="py-3">12 mēneši</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">
                      <code>app_lang</code>, <code>lang_manual</code>
                    </td>
                    <td className="py-3 pr-4">localStorage</td>
                    <td className="py-3 pr-4">
                      Manuāli izvēlētā valoda (latviešu, vācu, angļu) – tikai ar
                      piekrišanu kategorijai „Komforts / valoda“
                    </td>
                    <td className="py-3">12 mēneši</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Turnstile (Cloudflare)</td>
                    <td className="py-3 pr-4">Sīkdatne / localStorage</td>
                    <td className="py-3 pr-4">
                      Botu pārbaude kontaktformā (drošība, ļaunprātīgas izmantošanas
                      novēršana)
                    </td>
                    <td className="py-3">Atkarīgs no Cloudflare</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      <code>_ga</code>, <code>_gid</code>, <code>_gat</code>
                    </td>
                    <td className="py-3 pr-4">Sīkdatne (Google)</td>
                    <td className="py-3 pr-4">
                      Google Analytics – tikai ar piekrišanu kategorijai „Statistika“
                    </td>
                    <td className="py-3">Līdz 24 mēnešiem</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              <strong>Tiesiskais pamats:</strong> nepieciešamās sīkdatnes – VDAR 6. panta 1.
              punkta f) apakšpunkts (leģitīmās intereses); komforta un analītikas sīkdatnes –
              VDAR 6. panta 1. punkta a) apakšpunkts (piekrišana), ko sniedzat sīkdatņu
              bannerī.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              6. Ārējās saites un trešo personu pakalpojumi
            </h2>
            <p>
              Vietnē ir saites uz ārējiem pakalpojumiem, tostarp{" "}
              <strong>WhatsApp</strong> un <strong>Instagram</strong> (Meta Platforms), kā arī
              uz mūsu tehnoloģiju partnera{" "}
              <a
                href={partnerConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {partnerConfig.name}
              </a>{" "}
              ({partnerConfig.url.replace(/^https:\/\//, "")}). Aktivizējot šīs saites,
              attiecīgais pakalpojumu sniedzējs var apstrādāt jūsu personas datus saskaņā ar
              savu privātuma politiku. Par šo pakalpojumu sniedzēju datu apstrādi mēs
              neuzņemamies atbildību.
            </p>
            <p className="mt-3 text-sm">
              {partnerConfig.name} ir iesaistīts šīs tīmekļa vietnes izstrādē, uzturēšanā un
              digitālajā infrastruktūrā. Partneris nav personas datu apstrādātājs kontaktformas
              vai analītikas jomā, ja vien nav tieši norādīts citādi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              7. Analītika (Google Analytics)
            </h2>
            <p>
              Ja piekrītat statistikas sīkdatnēm, varam izmantot{" "}
              <strong>Google Analytics</strong> (Google Ireland Limited / Google LLC), lai
              analizētu, kā apmeklētāji lieto vietni (piemēram, apmeklētās lapas, ierīces
              tips, aptuvenā reģions). IP adreses var tikt saīsinātas (
              <em>anonymize_ip</em>). Google Analytics netiek ielādēts, ja statistikas
              sīkdatnes neesat aktivizējis sīkdatņu iestatījumos.
            </p>
            <p className="mt-3">
              <strong>Tiesiskais pamats:</strong> VDAR 6. panta 1. punkta a) apakšpunkts
              (piekrišana). Jūs varat jebkurā brīdī atsaukt piekrišanu, mainot sīkdatņu
              iestatījumus.
            </p>
            <p className="mt-3">
              Vairāk informācijas:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Google privātuma politika
              </a>
              ,{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Google Analytics atteikšanās paplašinājums
              </a>
              .
            </p>
            <p className="mt-3">
              <strong>Mārketinga sīkdatnes</strong> (piemēram, remarketing) pašlaik netiek
              izmantotas. Ja nākotnē tiks aktivizētas, tās darbosies tikai ar jūsu atsevišķu
              piekrišanu bannerī.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              8. Datu nodošana uz trešām valstīm
            </h2>
            <p>
              Daži mūsu pakalpojumu sniedzēji atrodas ārpus ES/EEZ, īpaši mitināšanas pakalpojums{" "}
              ({processors.hosting.name}, ASV), botu pārbaude ({processors.captcha.name}, ASV)
              un – ja piekrītat statistikai – Google Analytics (ASV). Personas datu nodošana uz
              ASV notiek, pamatojoties uz Eiropas Komisijas apstiprinātajām standarta līguma
              klauzulām (SCC) un attiecīgo pakalpojumu sniedzēju datu apstrādes līgumiem saskaņā
              ar VDAR 46. pantu.
            </p>
            <p className="mt-3">
              E-pasta piegādei izmantotais {processors.email.name} ir reģistrēts Francijā (ES/EEZ).
              Šim apstrādātājam dati parasti tiek apstrādāti Eiropas Savienībā.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              9. Datu apstrādātāji
            </h2>
            <p>
              Mēs sadarbojamies ar uzticamiem datu apstrādātājiem, kas apstrādā personas datus
              tikai pēc mūsu norādījumiem un saskaņā ar datu apstrādes līgumiem:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>{processors.hosting.name} – tīmekļa vietnes mitināšana</li>
              <li>{processors.email.name} – kontaktformu e-pasta piegāde (ES/EEZ)</li>
              <li>{processors.captcha.name} – botu pārbaude kontaktformā</li>
              <li>
                Google LLC / Google Ireland Limited – Google Analytics (tikai ar jūsu piekrišanu)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              10. Jūsu tiesības
            </h2>
            <p>Saskaņā ar VDAR jums ir šādas tiesības:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>piekļūt saviem datiem (datu piekļuves tiesības);</li>
              <li>prasīt datu labošanu;</li>
              <li>prasīt datu dzēšanu („tiesības tikt aizmirstam“);</li>
              <li>ierobežot datu apstrādi;</li>
              <li>datu pārnesamība;</li>
              <li>iebilst pret datu apstrādi;</li>
              <li>atcelt piekrišanu, ja apstrāde balstīta uz piekrišanu.</li>
            </ul>
            <p className="mt-3">
              Lai izmantotu savas tiesības, sazinieties ar mums, izmantojot kontaktinformāciju
              2. sadaļā.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              11. Iebildums pret datu apstrādi (VDAR 21. pants)
            </h2>
            <div className="bg-black/[0.04] border border-black/10 rounded-2xl p-5 text-sm">
              <p>
                Ja jūsu personas dati tiek apstrādāti, pamatojoties uz VDAR 6. panta 1. punkta
                e) vai f) apakšpunktu, jums ir tiesības jebkurā brīdī iebilst pret šādu datu
                apstrādi, iesniedzot mums attiecīgu pieprasījumu. Pēc iebilduma mēs vairs
                neapstrādāsim jūsu personas datus attiecīgajiem nolūkiem, ja vien nevarēsim
                pierādīt pārliecinošus likumīgus pamatus, kas ir svarīgāki par jūsu interesēm,
                tiesībām un brīvībām.
              </p>
              <p className="mt-3">
                Ja dati tiek apstrādāti tiešā mārketinga nolūkos, jums ir tiesības jebkurā brīdī
                iebilst pret šādu apstrādi. Pašlaik mēs neveicam tiešo mārketingu, izmantojot
                personas datus no šīs vietnes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              12. Sūdzības iesniegšana
            </h2>
            <p>
              Ja uzskatāt, ka jūsu personas datu apstrāde pārkāpj VDAR, jums ir tiesības
              iesniegt sūdzību uzraudzības iestādei:
            </p>
            <p className="mt-3 border-l-2 border-black/15 pl-4">
              <strong>Datu valsts inspekcija (DVI)</strong>
              <br />
              Elijas iela 17, Rīga, LV-1050, Latvija
              <br />
              Tīmekļa vietne:{" "}
              <a
                href="https://www.dvi.gov.lv"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                www.dvi.gov.lv
              </a>
              <br />
              E-pasts:{" "}
              <a href="mailto:dpd@dvi.gov.lv" className="underline hover:text-foreground">
                dpd@dvi.gov.lv
              </a>
            </p>
            <p className="mt-3">
              ES/EEZ iedzīvotāji var iesniegt sūdzību arī savas dzīvesvietas valsts
              uzraudzības iestādei.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              13. Datu drošība un šifrēšana
            </h2>
            <p>
              Vietne izmanto SSL/TLS šifrēšanu, lai aizsargātu datu pārsūtīšanu internetā.
              Šifrētu savienojumu varat atpazīt pēc slēdzenes simbola pārlūkprogrammas
              adreses joslā.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              14. Politikas izmaiņas
            </h2>
            <p>
              Mēs varam periodiski atjaunināt šo privātuma politiku, lai tā atspoguļotu
              izmaiņas mūsu pakalpojumos vai normatīvajos aktos. Aktuālā versija vienmēr ir
              pieejama šajā lapā.
            </p>
          </section>

          <p className="text-sm pt-4 border-t border-black/10">
            Spēkā: 2026. gada jūnijs
          </p>
        </div>
      </div>
    </main>
  );
}
