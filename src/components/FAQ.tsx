"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Wie läuft eine Zusammenarbeit mit Dzirksts Studio ab?",
      answer: "Nach einem kostenlosen Erstgespräch analysieren wir Ihren Bedarf und entwickeln eine maßgeschneiderte Strategie. Anschließend gehen wir in die Content-Produktion (Foto/Video) und übernehmen das fortlaufende Management Ihrer Kanäle. Wir arbeiten transparent und datengetrieben."
    },
    {
      question: "Für welche Branchen arbeiten Sie hauptsächlich?",
      answer: "Unsere Expertise liegt im B2B-Sektor. Wir arbeiten branchenübergreifend für Unternehmen, die Premium-Kunden ansprechen oder hochqualifizierte Fachkräfte gewinnen möchten – von Tech-Startups bis hin zum etablierten Mittelstand."
    },
    {
      question: "Bieten Sie auch einmalige Eventfotografie an?",
      answer: "Ja, wir begleiten Corporate Events, Messen und Firmenfeiern mit High-End Fotografie. Unser Ziel ist es, die Atmosphäre und Professionalität Ihres Events perfekt einzufangen, damit Sie das Material optimal für PR und Social Media nutzen können."
    },
    {
      question: "Wie messen Sie den Erfolg von Social Media Kampagnen?",
      answer: "Wir definieren vorab klare KPIs (Key Performance Indicators) wie Reichweite, Engagement-Rate oder generierte Leads. Sie erhalten von uns regelmäßige, transparente Reportings, damit Sie genau sehen, welchen ROI unsere Arbeit liefert."
    }
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6"
          >
            <MessageCircleQuestion className="w-4 h-4 text-foreground/80" />
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/80">FAQ</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Häufig gestellte <span className="text-foreground/50">Fragen.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-black/10 rounded-2xl overflow-hidden bg-black/[0.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-black/[0.02] transition-colors"
              >
                <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-foreground">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-foreground/70 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
