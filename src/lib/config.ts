export const siteConfig = {
  name: "Dzirksts Studio",
  email: "hello@dzirksts-studio.com",
  phone: "+371 ...",
  location: "Lettland",
  instagram: "https://www.instagram.com/dzirkstsstudiolv/",
  /** Ersetze durch echtes Portrait unter public/portrait.jpg */
  portraitSrc:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop",
  portraitAlt: "Portrait",
} as const;

export type SiteArea = "gateway" | "agentur" | "elektro";
