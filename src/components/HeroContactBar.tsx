"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/lib/config";

interface HeroContactBarProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function HeroContactBar({
  variant = "light",
  className = "",
}: HeroContactBarProps) {
  const isDark = variant === "dark";

  const chipClass = isDark
    ? "border-white/15 bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
    : "border-black/10 bg-white/40 text-foreground/70 hover:bg-white/60 hover:text-foreground";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={`mailto:${siteConfig.email}`}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${chipClass}`}
      >
        <Mail size={15} />
        {siteConfig.email}
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${chipClass}`}
      >
        <Phone size={15} />
        {siteConfig.phone}
      </a>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${chipClass}`}
      >
        <MapPin size={15} />
        {siteConfig.location}
      </span>
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${chipClass}`}
      >
        <InstagramIcon size={15} />
        Instagram
      </a>
    </div>
  );
}
