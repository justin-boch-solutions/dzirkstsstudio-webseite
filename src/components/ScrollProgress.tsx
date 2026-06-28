"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const color =
    pathname.startsWith("/elektro")
      ? "bg-accent-cool"
      : pathname.startsWith("/agentur")
        ? "bg-accent-warm"
        : "bg-foreground";

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 origin-left z-[60] ${color}`}
      style={{ scaleX }}
    />
  );
}
