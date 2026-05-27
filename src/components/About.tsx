"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const benefits = [
    "Maßgeschneiderte Social Media Strategien",
    "High-End Event- & Werbefotografie",
    "Datengetriebene Mitarbeitergewinnung",
    "Premium Branding & Content Creation",
  ];

  return (
    <section id="agentur" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-black/10 shadow-[0_0_40px_rgba(0,0,0,0.05)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent z-10" />
              <Image 
                src="/hero.png" 
                alt="Dzirksts Studio Team" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-8 bg-background border border-black/10 p-6 rounded-2xl shadow-2xl backdrop-blur-md z-20"
            >
              <p className="text-4xl font-bold text-foreground mb-1">100<span className="text-foreground/50">+</span></p>
              <p className="text-sm text-foreground/60 font-medium">Erfolgreiche Projekte</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6 w-fit">
              <span className="text-xs font-semibold tracking-widest uppercase text-foreground/80">Die Agentur</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Wir transformieren <br />
              <span className="text-foreground/50">Sichtbarkeit in Erfolg.</span>
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-light">
              Dzirksts Studio ist mehr als nur eine Agentur. Wir sind der strategische Partner an Ihrer Seite, wenn es darum geht, Ihre Marke in der digitalen Welt unübersehbar zu machen. Mit einem tiefen Verständnis für Ästhetik und Performance schaffen wir Content, der nicht nur gut aussieht, sondern messbare Ergebnisse liefert.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-foreground/40" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-foreground text-background hover:bg-foreground/90 transition-colors w-fit shadow-lg shadow-black/5"
            >
              Lernen Sie uns kennen
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
