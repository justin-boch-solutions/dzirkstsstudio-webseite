import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Dzirksts Studio",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 container mx-auto px-6 md:px-12 max-w-3xl">
      <h1 className="text-4xl font-black mb-8">Impressum</h1>
      <p className="text-foreground/70 leading-relaxed">
        Platzhalter – bitte mit den rechtlichen Angaben deines Kumpels ergänzen
        (Name, Adresse in Lettland, Kontakt, ggf. USt-ID).
      </p>
    </main>
  );
}
