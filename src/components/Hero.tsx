"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-40 md:pt-48 pb-20 overflow-hidden bg-background text-foreground flex flex-col justify-center">
      {/* Background Effects - Clean Light Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#b3b3b3] via-background to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 -ml-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-foreground/80">Premium B2B Media Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]"
          >
            Wir machen Unternehmen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">unübersehbar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-foreground/70 mb-12 max-w-xl leading-relaxed"
          >
            Hochwertiges Social Media Management, authentische Mitarbeitergewinnung und Eventfotografie, die Vertrauen schafft und konvertiert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#leistungen"
              className="group relative inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-xl shadow-black/10"
            >
              <span className="relative z-10">Leistungen entdecken</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-foreground border border-black/10 hover:bg-black/5 transition-colors"
            >
              Kostenloses Erstgespräch
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[650px] rounded-3xl overflow-hidden glass border border-black/5 shadow-2xl shadow-black/20 group"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 z-10" />
          <Image
            src="/hero.png"
            alt="Dzirksts Studio Agency"
            fill
            className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
