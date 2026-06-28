import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <main className="min-h-screen section-light flex flex-col items-center justify-center px-6 text-center pt-24 pb-16">
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-black mb-4">Lapa nav atrasta</h1>
      <p className="text-muted max-w-md mb-10 leading-relaxed">
        Šī adrese neeksistē vai ir pārvietota. Atgriezies uz sākumlapu un izvēlies savu jomu.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 font-bold hover:scale-105 transition-transform"
      >
        Uz sākumu
      </Link>
      <p className="text-sm text-muted mt-8">{siteConfig.name}</p>
    </main>
  );
}
