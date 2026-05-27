"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  // Placeholders for now, since we don't have the actual portfolio images
  const items = [
    { id: 1, type: "video", title: "Recruiting Kampagne", client: "Tech AG", span: "md:col-span-2 md:row-span-2" },
    { id: 2, type: "photo", title: "Corporate Event", client: "Startup Summit", span: "col-span-1" },
    { id: 3, type: "photo", title: "Business Portraits", client: "Consulting Group", span: "col-span-1" },
    { id: 4, type: "video", title: "Social Media Reels", client: "Fitness Brand", span: "col-span-1 md:col-span-2" },
  ];

  return (
    <section id="portfolio" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Arbeiten, die <span className="text-foreground/50">im Kopf bleiben.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground/70"
            >
              Ein kleiner Einblick in unsere jüngsten Projekte aus den Bereichen Fotografie, Video und Employer Branding.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="text-foreground font-medium border-b border-foreground/30 pb-1 hover:text-foreground/70 hover:border-foreground/70 transition-colors inline-block"
          >
            Gesamtes Portfolio ansehen
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 ${item.span}`}
            >
              {/* Placeholder for actual image/video */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-foreground/20 group-hover:scale-105 transition-transform duration-700">
                {item.type === "video" ? "Video Placeholder" : "Image Placeholder"}
              </div>

              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">
                  {item.client}
                </span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
