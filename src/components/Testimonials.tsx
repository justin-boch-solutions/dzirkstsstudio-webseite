"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Dzirksts Studio hat unsere komplette Social Media Präsenz revolutioniert. Die Qualität der Fotografie und das strategische Verständnis für B2B-Märkte ist absolut beeindruckend.",
      author: "Michael R.",
      role: "CEO, Tech Solutions GmbH"
    },
    {
      text: "Durch die authentische Mitarbeitergewinnung über Social Media konnten wir unsere offenen Stellen in Rekordzeit mit absoluten Top-Talenten besetzen. Eine Investition, die sich sofort ausgezahlt hat.",
      author: "Sarah L.",
      role: "HR Director, Innovation Group"
    },
    {
      text: "Die Eventfotografie ist schlichtweg atemberaubend. Jedes wichtige Detail wurde eingefangen, und die Bilder strahlen genau die Professionalität aus, für die unser Unternehmen steht.",
      author: "Thomas K.",
      role: "Head of Marketing, Premium Events"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-black/5 rounded-[100%] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6"
          >
            <Star className="w-4 h-4 text-foreground/80" />
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/80">Kundenstimmen</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Vertrauen, das man <span className="text-foreground/50">sehen kann.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 font-light"
          >
            Erfolgreiche Partnerschaften basieren auf echten Resultaten. Das sagen unsere Kunden über die Zusammenarbeit mit Dzirksts Studio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-black/[0.02] border border-black/10 p-8 rounded-3xl hover:bg-black/[0.04] transition-colors group relative shadow-lg shadow-black/5"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-black/5 group-hover:text-black/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground/80 text-foreground/80" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 font-light relative z-10">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/50">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
