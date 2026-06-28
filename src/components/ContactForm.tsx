"use client";

import { useMemo, useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";
import {
  agenturTopicOptions,
  elektroTopicOptions,
} from "@/lib/contact-schema";

type Area = "agentur" | "elektro";

interface ContactFormProps {
  area: Area;
}

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm({ area }: ContactFormProps) {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "rate_limit" | "captcha"
  >("idle");
  const [contactVia, setContactVia] = useState<"email" | "phone" | "whatsapp">("email");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const topicOptions = useMemo(
    () => (area === "agentur" ? agenturTopicOptions : elektroTopicOptions),
    [area],
  );

  const phoneRequired = contactVia === "phone" || contactVia === "whatsapp";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("captcha");
      return;
    }

    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    const timeline = data.get("timeline")?.toString().trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          topic: data.get("topic"),
          contactVia: data.get("contactVia"),
          timeline: timeline || undefined,
          message: data.get("message"),
          area,
          language,
          token: turnstileToken ?? "dev-bypass",
        }),
      });

      if (res.status === 429) {
        setStatus("rate_limit");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      if (res.status === 403) {
        setStatus("captcha");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      if (!res.ok) throw new Error("failed");

      setStatus("success");
      form.reset();
      setContactVia("email");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch {
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  const submitDisabled =
    status === "loading" || Boolean(turnstileSiteKey && !turnstileToken);

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left space-y-4">
      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-white/70 mb-1">
          {t("form.topic")}
        </label>
        <select id="topic" name="topic" required className={selectClass} defaultValue="">
          <option value="" disabled>
            —
          </option>
          {topicOptions.map((option) => (
            <option key={option} value={option} className="text-black">
              {t(`form.topic.${option}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
            {t("form.name")}
          </label>
          <input id="name" name="name" required minLength={2} className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1">
            {t("form.company")}
          </label>
          <input id="company" name="company" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
            {t("form.email")}
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1">
            {t("form.phone")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required={phoneRequired}
            className={inputClass}
          />
          <p className="mt-1 text-xs text-white/45">{t("form.phoneHint")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contactVia" className="block text-sm font-medium text-white/70 mb-1">
            {t("form.contactVia")}
          </label>
          <select
            id="contactVia"
            name="contactVia"
            required
            className={selectClass}
            value={contactVia}
            onChange={(e) =>
              setContactVia(e.target.value as "email" | "phone" | "whatsapp")
            }
          >
            <option value="email" className="text-black">
              {t("form.contactVia.email")}
            </option>
            <option value="phone" className="text-black">
              {t("form.contactVia.phone")}
            </option>
            <option value="whatsapp" className="text-black">
              {t("form.contactVia.whatsapp")}
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-white/70 mb-1">
            {t("form.timeline")}
          </label>
          <select id="timeline" name="timeline" className={selectClass} defaultValue="">
            <option value="" className="text-black">
              {t("form.timeline.placeholder")}
            </option>
            <option value="asap" className="text-black">
              {t("form.timeline.asap")}
            </option>
            <option value="soon" className="text-black">
              {t("form.timeline.soon")}
            </option>
            <option value="flexible" className="text-black">
              {t("form.timeline.flexible")}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
          {t("form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder={t("form.messageHint")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {turnstileSiteKey ? (
        <div className="flex justify-start">
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken(null)}
            onError={() => setTurnstileToken(null)}
            options={{ theme: "dark", size: "normal" }}
          />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitDisabled}
        className="btn-glow w-full sm:w-auto bg-white text-foreground px-8 py-4 rounded-full font-bold hover:scale-[1.02] transition-transform disabled:opacity-60"
      >
        {status === "loading" ? t("form.sending") : t("form.submit")}
      </button>

      {status === "success" && (
        <p className="text-emerald-300 text-sm font-medium">{t("form.success")}</p>
      )}
      {status === "rate_limit" && (
        <p className="text-amber-300 text-sm">{t("form.errorRateLimit")}</p>
      )}
      {status === "captcha" && (
        <p className="text-amber-300 text-sm">{t("form.errorCaptcha")}</p>
      )}
      {status === "error" && (
        <p className="text-red-300 text-sm">
          {t("form.error")}{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
        </p>
      )}
    </form>
  );
}
