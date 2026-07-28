import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import HtmlLang from "@/components/HtmlLang";
import SiteChrome from "@/components/SiteChrome";
import MotionProvider from "@/components/MotionProvider";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dzirksts Studio | Fotografie, Social Media & Elektrotechnik",
    template: "%s | Dzirksts Studio",
  },
  description:
    "Dzirksts Studio in Lettland – Social Media Management, Fotografie und Elektrotechnik. Kreativ. Präzise. Handwerklich.",
  openGraph: {
    title: "Dzirksts Studio",
    description: "Kreativ. Präzise. Handwerklich. – Social Media, Fotografie & Elektro aus Lettland.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "lv_LV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzirksts Studio",
    description: "Social Media, Fotografie & Elektrotechnik aus Lettland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="lv"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground overflow-x-hidden selection:bg-accent-warm selection:text-white">
        <LanguageProvider>
          <HtmlLang />
          <MotionProvider>
            <SiteChrome />
            {children}
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
