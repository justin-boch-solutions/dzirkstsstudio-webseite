import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-black/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6">
              <Image
                src="/logo.svg"
                alt="Dzirksts Studio Logo"
                width={120}
                height={120}
                className="w-32 h-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Premium B2B Media Agency. Wir machen Ihr Unternehmen durch hochwertiges Social Media Management, Mitarbeitergewinnung und Eventfotografie unübersehbar.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dzirkstsstudiolv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-foreground/70 hover:bg-black/10 hover:text-foreground transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-foreground/70 hover:bg-black/10 hover:text-foreground transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#leistungen" className="text-foreground/60 hover:text-foreground transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-foreground/60 hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#prozess" className="text-foreground/60 hover:text-foreground transition-colors">
                  Prozess
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/60">
                <MapPin size={20} className="shrink-0 mt-0.5 text-accent" />
                <span>Musterstraße 123<br />12345 Musterstadt</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60">
                <Phone size={20} className="shrink-0 text-accent" />
                <a href="tel:+49123456789" className="hover:text-foreground transition-colors">+49 (0) 123 456 789</a>
              </li>
              <li className="flex items-center gap-3 text-foreground/60">
                <Mail size={20} className="shrink-0 text-accent" />
                <a href="mailto:hallo@dzirksts-studio.de" className="hover:text-foreground transition-colors">hallo@dzirksts-studio.de</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Rechtliches</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/impressum" className="text-foreground/60 hover:text-foreground transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-foreground/60 hover:text-foreground transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-foreground/60 hover:text-foreground transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} Dzirksts Studio. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-foreground/40 flex items-center gap-1">
            Made with <span className="text-accent">&hearts;</span> by Justin Boch Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
