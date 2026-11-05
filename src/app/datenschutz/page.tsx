"use client";

import { formatLegalAddress, siteConfig } from "@/lib/config";
import { partnerConfig } from "@/lib/partner";
import { useLanguage } from "@/context/LanguageContext";

export default function DatenschutzPage() {
  const { t } = useLanguage();
  const { legal, processors } = siteConfig;

  return (
    <main className="min-h-screen section-light pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-4">
          {t("datenschutz.badge")}
        </p>
        <h1 className="text-4xl font-black mb-8">{t("datenschutz.title")}</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s1.heading")}</h2>
            <p>
              {t("datenschutz.s1.body", { legalName: siteConfig.legalName, url: siteConfig.url })}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s2.heading")}</h2>
            <p>{t("datenschutz.s2.intro")}</p>
            <p className="mt-3 border-l-2 border-black/15 pl-4">
              {siteConfig.legalName}
              <br />
              {legal.representativeFullName}, {t("impressum.repRole")}
              <br />
              {formatLegalAddress()}
              <br />
              {t("impressum.email")}:{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-foreground">
                {siteConfig.email}
              </a>
              <br />
              {t("impressum.phone")}: {siteConfig.phone}
              <br />
              {t("datenschutz.regNr")}: {legal.registrationNumber}
            </p>
            <p className="mt-3">{t("datenschutz.s2.outro")}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s3.heading")}</h2>
            <p>
              {t("datenschutz.s3.body", {
                hostingName: processors.hosting.name,
                hostingAddress: processors.hosting.address,
              })}
            </p>
            <p className="mt-3">
              <strong>{t("datenschutz.legalBasis")}</strong> {t("datenschutz.s3.legalBasis")}
            </p>
            <p className="mt-3">
              {t("datenschutz.moreInfo")}{" "}
              <a
                href={processors.hosting.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {t("datenschutz.privacyPolicyOf", { name: processors.hosting.name })}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s4.heading")}</h2>
            <p>{t("datenschutz.s4.p1")}</p>
            <p className="mt-3">
              {t("datenschutz.s4.p2", {
                emailName: processors.email.name,
                emailAddress: processors.email.address,
                email: siteConfig.email,
              })}
            </p>
            <p className="mt-3">{t("datenschutz.s4.p3")}</p>
            <p className="mt-3">
              {t("datenschutz.s4.p4", { captchaName: processors.captcha.name })}
            </p>
            <p className="mt-3">
              <strong>{t("datenschutz.legalBasis")}</strong> {t("datenschutz.s4.legalBasis")}
            </p>
            <p className="mt-3">
              <strong>{t("datenschutz.retention")}</strong> {t("datenschutz.s4.retention")}
            </p>
            <p className="mt-3">
              {t("datenschutz.moreInfo")}{" "}
              <a
                href={processors.email.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {t("datenschutz.privacyPolicyOf", { name: processors.email.name })}
              </a>
              ,{" "}
              <a
                href={processors.email.dpaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {t("datenschutz.dpa")}
              </a>
              ,{" "}
              <a
                href={processors.captcha.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {t("datenschutz.cloudflarePrivacy")}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s5.heading")}</h2>
            <p>{t("datenschutz.s5.body")}</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-black/10 text-left">
                    <th className="py-2 pr-4 font-bold text-foreground">{t("datenschutz.table.name")}</th>
                    <th className="py-2 pr-4 font-bold text-foreground">{t("datenschutz.table.type")}</th>
                    <th className="py-2 pr-4 font-bold text-foreground">{t("datenschutz.table.purpose")}</th>
                    <th className="py-2 font-bold text-foreground">{t("datenschutz.table.duration")}</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">
                      <code>cookie-consent</code>
                    </td>
                    <td className="py-3 pr-4">localStorage</td>
                    <td className="py-3 pr-4">{t("datenschutz.row1.purpose")}</td>
                    <td className="py-3">{t("datenschutz.months12")}</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">
                      <code>app_lang</code>, <code>lang_manual</code>
                    </td>
                    <td className="py-3 pr-4">localStorage</td>
                    <td className="py-3 pr-4">{t("datenschutz.row2.purpose")}</td>
                    <td className="py-3">{t("datenschutz.months12")}</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Turnstile (Cloudflare)</td>
                    <td className="py-3 pr-4">{t("datenschutz.row3.type")}</td>
                    <td className="py-3 pr-4">{t("datenschutz.row3.purpose")}</td>
                    <td className="py-3">{t("datenschutz.row3.duration")}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      <code>_ga</code>, <code>_gid</code>, <code>_gat</code>
                    </td>
                    <td className="py-3 pr-4">{t("datenschutz.row4.type")}</td>
                    <td className="py-3 pr-4">{t("datenschutz.row4.purpose")}</td>
                    <td className="py-3">{t("datenschutz.row4.duration")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">{t("datenschutz.s5.legalBasis")}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s6.heading")}</h2>
            <p>
              {t("datenschutz.s6.p1before")}
              <a
                href={partnerConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {partnerConfig.name}
              </a>{" "}
              ({partnerConfig.url.replace(/^https:\/\//, "")}). {t("datenschutz.s6.p1after")}
            </p>
            <p className="mt-3 text-sm">
              {t("datenschutz.s6.p2", { partnerName: partnerConfig.name })}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s7.heading")}</h2>
            <p>{t("datenschutz.s7.p1")}</p>
            <p className="mt-3">
              <strong>{t("datenschutz.legalBasis")}</strong> {t("datenschutz.s7.legalBasis")}
            </p>
            <p className="mt-3">
              {t("datenschutz.moreInfo")}{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {t("datenschutz.googlePrivacy")}
              </a>
              ,{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {t("datenschutz.googleOptOut")}
              </a>
              .
            </p>
            <p className="mt-3">{t("datenschutz.s7.p3")}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s8.heading")}</h2>
            <p>
              {t("datenschutz.s8.p1", {
                hostingName: processors.hosting.name,
                captchaName: processors.captcha.name,
              })}
            </p>
            <p className="mt-3">
              {t("datenschutz.s8.p2", { emailName: processors.email.name })}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s9.heading")}</h2>
            <p>{t("datenschutz.s9.intro")}</p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>{t("datenschutz.s9.li1", { hostingName: processors.hosting.name })}</li>
              <li>{t("datenschutz.s9.li2", { emailName: processors.email.name })}</li>
              <li>{t("datenschutz.s9.li3", { captchaName: processors.captcha.name })}</li>
              <li>{t("datenschutz.s9.li4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s10.heading")}</h2>
            <p>{t("datenschutz.s10.intro")}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>{t("datenschutz.s10.li1")};</li>
              <li>{t("datenschutz.s10.li2")};</li>
              <li>{t("datenschutz.s10.li3")};</li>
              <li>{t("datenschutz.s10.li4")};</li>
              <li>{t("datenschutz.s10.li5")};</li>
              <li>{t("datenschutz.s10.li6")};</li>
              <li>{t("datenschutz.s10.li7")}.</li>
            </ul>
            <p className="mt-3">{t("datenschutz.s10.outro")}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s11.heading")}</h2>
            <div className="bg-black/[0.04] border border-black/10 rounded-2xl p-5 text-sm">
              <p>{t("datenschutz.s11.p1")}</p>
              <p className="mt-3">{t("datenschutz.s11.p2")}</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s12.heading")}</h2>
            <p>{t("datenschutz.s12.intro")}</p>
            <p className="mt-3 border-l-2 border-black/15 pl-4">
              <strong>Datu valsts inspekcija (DVI)</strong>
              <br />
              Elijas iela 17, Rīga, LV-1050, Latvija
              <br />
              {t("datenschutz.website")}:{" "}
              <a
                href="https://www.dvi.gov.lv"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                www.dvi.gov.lv
              </a>
              <br />
              {t("datenschutz.email")}:{" "}
              <a href="mailto:dpd@dvi.gov.lv" className="underline hover:text-foreground">
                dpd@dvi.gov.lv
              </a>
            </p>
            <p className="mt-3">{t("datenschutz.s12.outro")}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s13.heading")}</h2>
            <p>{t("datenschutz.s13.body")}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">{t("datenschutz.s14.heading")}</h2>
            <p>{t("datenschutz.s14.body")}</p>
          </section>

          <p className="text-sm pt-4 border-t border-black/10">{t("datenschutz.footer")}</p>
        </div>
      </div>
    </main>
  );
}
