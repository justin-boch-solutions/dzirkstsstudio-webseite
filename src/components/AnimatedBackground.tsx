"use client";

import { motion } from "framer-motion";

type Variant = "neutral" | "creative" | "elektro";

interface AnimatedBackgroundProps {
  variant?: Variant;
}

export default function AnimatedBackground({
  variant = "neutral",
}: AnimatedBackgroundProps) {
  const accent =
    variant === "creative"
      ? "rgba(245, 158, 11, 0.35)"
      : variant === "elektro"
        ? "rgba(56, 189, 248, 0.3)"
        : "rgba(255, 255, 255, 0.25)";

  const accent2 =
    variant === "creative"
      ? "rgba(244, 63, 94, 0.2)"
      : variant === "elektro"
        ? "rgba(250, 204, 21, 0.22)"
        : "rgba(17, 17, 17, 0.15)";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[55vh] w-[55vw] rounded-full blur-2xl md:blur-[100px]"
        style={{ background: accent }}
        animate={{ x: [0, 80, -40, 0], y: [0, 50, -30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[50vh] w-[50vw] rounded-full blur-2xl md:blur-[120px]"
        style={{ background: accent2 }}
        animate={{ x: [0, -70, 40, 0], y: [0, -60, 30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 hidden h-[40vh] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] opacity-60 md:block"
        style={{ background: "rgba(255,255,255,0.12)" }}
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0 hidden opacity-[0.04] md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.12)_100%)]" />
    </div>
  );
}
