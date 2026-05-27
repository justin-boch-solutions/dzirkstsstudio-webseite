"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="kontakt" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-accent/20 rounded-full blur-[150px] opacity-40 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-20 text-center border border-foreground/10 relative overflow-hidden"
        >
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-center mix-blend-overlay" />

          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto relative z-10">
            Lassen Sie uns darüber sprechen, wie wir Ihre Unternehmensgeschichte visuell so erzählen, dass sie Ihre Wunschkunden und Top-Talente anzieht.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="mailto:hallo@dzirksts-studio.de"
              className="group relative inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10">Jetzt anfragen</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="mt-8 text-sm text-foreground/50 relative z-10">
            Unverbindliches Erstgespräch. Keine versteckten Kosten.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
