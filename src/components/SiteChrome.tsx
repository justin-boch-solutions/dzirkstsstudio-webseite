"use client";

import AnalyticsLoader from "@/components/AnalyticsLoader";
import CookieBanner from "@/components/CookieBanner";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingContact from "@/components/FloatingContact";
import CursorGlow from "@/components/CursorGlow";

export default function SiteChrome() {
  return (
    <>
      <ScrollProgress />
      <FloatingContact />
      <CursorGlow />
      <CookieBanner />
      <AnalyticsLoader />
    </>
  );
}
