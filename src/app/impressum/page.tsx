import type { Metadata } from "next";
import { formatLegalAddress, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impresums | Dzirksts Studio",
  description:
    "Juridiskā informācija par SIA Dzirksts Studio – reģistrācijas dati, kontakti un pārstāvības tiesības.",
  alternates: {
    canonical: `${siteConfig.url}/impressum`,
  },
};

export default function ImpressumPage() {
  const { legal } = siteConfig;

  return (
    <main className="min-h-screen section-light pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-4">
          Juridiskā informācija
        </p>
        <h1 className="text-4xl font-black mb-4">Impresums</h1>
        <p className="text-sm text-muted mb-10 leading-relaxed">
          Saskaņā ar Latvijas Republikas Informācijas sabiedrības pakalpojumu likumu
          un Patērētāju tiesību aizsardzības likumu sniedzam obligāto informāciju par
          pakalpojumu sniedzēju.
        </p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              1. Pakalpojumu sniedzējs
            </h2>
            <p className="border-l-2 border-black/15 pl-4">
              <strong>{siteConfig.legalName}</strong>
              <br />
              Tiesiskā forma: sabiedrība ar ierobežotu atbildību (SIA)
              <br />
              Juridiskā adrese: {formatLegalAddress()}
              <br />
              Reģistrācijas numurs: {legal.registrationNumber}
              <br />
              Reģistrēts: {legal.registeredAt} ({legal.register})
              <br />
              Pamatkapitāls: {legal.shareCapital}
              <br />
              SEPA identifikators: {legal.sepaId}
            </p>
            <p className="mt-3 text-sm">
              Publiskais ieraksts Uzņēmumu reģistrā:{" "}
              <a
                href={legal.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                info.ur.gov.lv
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              2. Kontaktinformācija
            </h2>
            <p>
              E-pasts:{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-foreground">
                {siteConfig.email}
              </a>
              <br />
              Tālrunis:{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="underline hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
              <br />
              Tīmekļa vietne:{" "}
              <a href={siteConfig.url} className="underline hover:text-foreground">
                {siteConfig.url.replace(/^https:\/\//, "")}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              3. PVN maksātājs
            </h2>
            <p>
              PVN maksātāja numurs: <strong>{legal.vatId}</strong>
              <br />
              Reģistrēts PVN maksātāju reģistrā: {legal.vatRegisteredAt}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              4. Reģistrētā darbība
            </h2>
            <p>
              Reģistrētais darbības veids (NACE): {legal.nace}
              <br />
              Papildu pakalpojumi šajā tīmekļa vietnē (piemēram, fotogrāfija un sociālo
              mediju pakalpojumi) tiek piedāvāti, ja tie ir atļauti sabiedrības statūtos un
              piemērojamajos normatīvajos aktos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              5. Pārstāvības tiesības
            </h2>
            <p>
              <strong>{legal.representativeFullName}</strong> – {legal.representativeRole},{" "}
              {legal.representativeRights}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              6. Par saturu atbildīgā persona
            </h2>
            <p>
              Par šīs tīmekļa vietnes saturu atbild {legal.representativeFullName},{" "}
              {legal.representativeRole}, {siteConfig.legalName},{" "}
              {formatLegalAddress()}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              7. Atbildība par saturu
            </h2>
            <p>
              {siteConfig.legalName} ir atbildīga par pašu radīto saturu šajā tīmekļa
              vietnē saskaņā ar Latvijas Republikas normatīvajiem aktiem. Mēs neesam
              pienākumā uzraudzīt trešo personu nosūtīto vai saglabāto informāciju, ja
              nav zināms par nelikumīgu darbību. Pienākums dzēst vai bloķēt nelikumīgas
              informācijas izmantošanu paliek spēkā saskaņā ar vispārējiem tiesību aktiem.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              8. Atbildība par saitēm
            </h2>
            <p>
              Vietnē ir saites uz ārējām tīmekļa vietnēm (piemēram, sociālie tīkli).
              Mums nav ietekmes uz šo vietņu saturu, tādēļ par to saturu mēs neuzņemamies
              atbildību. Par ārējās saites saturu atbild attiecīgais pakalpojumu sniedzējs
              vai operators.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">9. Autortiesības</h2>
            <p>
              Vietnē publicētie teksti, attēli, dizains un citi materiāli ir aizsargāti ar
              autortiesībām. Jebkāda to izmantošana bez {siteConfig.legalName} vai attiecīgo
              tiesību subjektu iepriekšējas rakstiskas piekrišanas ir aizliegta, izņemot
              gadījumus, ko pieļauj normatīvie akti.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              10. Strīdu risināšana patērētājiem
            </h2>
            <p>
              Eiropas Komisija nodrošina tiešsaistes strīdu risināšanas platformu (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Mēs neesam pienākumā un nevaram piedalīties strīdu risināšanas procesā
              patērētāju šķīrējtiesā.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              11. Piemērojamie tiesību akti
            </h2>
            <p>
              Uz attiecībām attiecas Latvijas Republikas normatīvie akti un Eiropas Savienības
              tiesību akti. Strīdu gadījumā strīds vispirms risināms sarunu ceļā; ja vienošanās
              netiek panākta, strīds tiek risināts Latvijas Republikas kompetentajā tiesā.
            </p>
          </section>

          <p className="text-sm pt-4 border-t border-black/10">
            Spēkā: 2026. gada jūnijs · Dati atbilst publiskajam ierakstam Uzņēmumu reģistrā
          </p>
        </div>
      </div>
    </main>
  );
}
