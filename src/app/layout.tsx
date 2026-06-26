import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dzirksts Studio | Fotografie, Social Media & Elektrotechnik",
  description:
    "Dzirksts Studio in Lettland – Social Media Management, Fotografie und Elektrotechnik unter einem Dach.",
};

import { LanguageProvider } from "@/context/LanguageContext";
import HtmlLang from "@/components/HtmlLang";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground overflow-x-hidden selection:bg-accent-warm selection:text-white">
        <LanguageProvider>
          <HtmlLang />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
