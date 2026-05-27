"use client";

import { motion } from "framer-motion";
import { Camera, Users, Share2, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Wir übernehmen Ihre komplette Social Media Präsenz. Von der Strategie über die Content-Produktion (Foto & Kurzvideo) bis hin zum Community Management.",
    icon: Share2,
    color: "from-blue-500/20 to-purple-500/0",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "recruiting",
    title: "Mitarbeitergewinnung",
    description: "Authentisches Employer Branding. Wir fangen Ihre Firmenkultur in hochwertigen Videos und Interviews ein, um die besten Talente anzuziehen.",
    icon: Users,
    color: "from-accent/20 to-orange-500/0",
    border: "group-hover:border-accent/50"
  },
  {
    id: "events",
    title: "Eventfotografie & Video",
    description: "Professionelle Begleitung Ihrer Firmenfeiern, Messen und Kongresse. Schnelle Lieferung für PR und Social Media.",
    icon: Camera,
    color: "from-emerald-500/20 to-teal-500/0",
    border: "group-hover:border-emerald-500/50"
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Unsere <span className="text-foreground/50">Expertise.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            Wir sind nicht nur Fotografen. Wir sind Ihr strategischer Partner für visuelle Kommunikation im B2B-Bereich.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative p-8 rounded-3xl glass border border-foreground/10 transition-all duration-500 hover:-translate-y-2 ${service.border} overflow-hidden`}
            >
              {/* Hover Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 border border-foreground/10 group-hover:bg-foreground/10 transition-colors">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <a href="#kontakt" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/50 group-hover:text-foreground transition-colors">
                  Mehr erfahren <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
