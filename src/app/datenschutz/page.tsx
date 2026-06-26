import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Dzirksts Studio",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 container mx-auto px-6 md:px-12 max-w-3xl">
      <h1 className="text-4xl font-black mb-8">Datenschutz</h1>
      <p className="text-foreground/70 leading-relaxed">
        Platzhalter – hier kommt die Datenschutzerklärung hin (Hosting,
        Kontaktformular, Analytics falls genutzt).
      </p>
    </main>
  );
}
