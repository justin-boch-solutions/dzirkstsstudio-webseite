"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const delta = latest - previous;
    
    // Glassmorphism aktivieren
    setScrolled(latest > 50);

    // Ganz oben immer anzeigen (verhindert Bounces am oberen Rand)
    if (latest < 150) {
      setHidden(false);
      return;
    }

    // Hoher Threshold, um Trackpad-Zittern komplett auszublenden
    if (Math.abs(delta) < 30) return;
    
    if (delta > 0) {
      setHidden(true); // Runterscrollen -> verstecken
    } else if (delta < 0) {
      setHidden(false); // Hochscrollen -> anzeigen
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-black/5 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center shrink-0">
          <Image
            src="/logo.svg"
            alt="Dzirksts Studio Logo"
            width={300}
            height={200}
            className="w-24 md:w-32 h-auto drop-shadow-sm"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#leistungen" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Leistungen
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="#prozess" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Prozess
          </Link>
          
          <div className="flex items-center gap-4 border-l border-black/10 pl-8">
            <a href="https://www.instagram.com/dzirkstsstudiolv/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <Link 
              href="#kontakt" 
              className="text-sm font-medium bg-foreground text-background px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-10 text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-black/5 p-6 flex flex-col gap-6 md:hidden"
        >
          <Link href="#leistungen" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">Leistungen</Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">Portfolio</Link>
          <Link href="#prozess" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">Prozess</Link>
          <Link href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium bg-foreground text-background text-center py-3 rounded-full">
            Kontakt
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
