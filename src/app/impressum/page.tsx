"use client";

import { formatLegalAddress, siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpressumPage() {
  const { t } = useLanguage();
  const { legal } = siteConfig;

  return (
    <main className="min-h-screen section-light pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-4">
          {t("impressum.badge")}
        </p>
        <h1 className="text-4xl font-black mb-4">{t("impressum.title")}</h1>
        <p className="text-sm text-muted mb-10 leading-relaxed">{t("impressum.intro")}</p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s1.heading")}</h2>
            <p className="border-l-2 border-black/15 pl-4">
              <strong>{siteConfig.legalName}</strong>
              <br />
              {t("impressum.legalForm")}
              <br />
              {t("impressum.address")}: {formatLegalAddress()}
              <br />
              {t("impressum.regNumber")}: {legal.registrationNumber}
              <br />
              {t("impressum.registeredAt")}: {legal.registeredAt} ({legal.register})
              <br />
              {t("impressum.shareCapital")}: {legal.shareCapital}
              <br />
              {t("impressum.sepaId")}: {legal.sepaId}
            </p>
            <p className="mt-3 text-sm">
              {t("impressum.registerEntry")}{" "}
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
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s2.heading")}</h2>
            <p>
              {t("impressum.email")}:{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-foreground">
                {siteConfig.email}
              </a>
              <br />
              {t("impressum.phone")}:{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="underline hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
              <br />
              {t("impressum.website")}:{" "}
              <a href={siteConfig.url} className="underline hover:text-foreground">
                {siteConfig.url.replace(/^https:\/\//, "")}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s3.heading")}</h2>
            <p>
              {t("impressum.vatId")}: <strong>{legal.vatId}</strong>
              <br />
              {t("impressum.vatRegisteredAt")}: {legal.vatRegisteredAt}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s4.heading")}</h2>
            <p>
              {t("impressum.nace")}: {legal.nace}
              <br />
              {t("impressum.s4.body")}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s5.heading")}</h2>
            <p>
              <strong>{legal.representativeFullName}</strong> – {t("impressum.repRole")},{" "}
              {t("impressum.repRights")}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s6.heading")}</h2>
            <p>
              {t("impressum.s6.body", {
                name: legal.representativeFullName,
                role: t("impressum.repRole"),
                legalName: siteConfig.legalName,
                address: formatLegalAddress(),
              })}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s7.heading")}</h2>
            <p>{t("impressum.s7.body", { legalName: siteConfig.legalName })}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s8.heading")}</h2>
            <p>{t("impressum.s8.body")}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s9.heading")}</h2>
            <p>{t("impressum.s9.body", { legalName: siteConfig.legalName })}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s10.heading")}</h2>
            <p>
              {t("impressum.s10.body")}{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . {t("impressum.s10.body2")}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("impressum.s11.heading")}</h2>
            <p>{t("impressum.s11.body")}</p>
          </section>

          <p className="text-sm pt-4 border-t border-black/10">{t("impressum.footer")}</p>
        </div>
      </div>
    </main>
  );
}
