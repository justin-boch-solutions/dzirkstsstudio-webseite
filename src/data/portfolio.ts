export interface PortfolioImage {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface PortfolioAlbum {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  description?: string;
  images: PortfolioImage[];
}

export const portfolioAlbums: PortfolioAlbum[] = [
  {
    slug: "drift-grand-opening",
    title: "Drift Grand Opening",
    date: "Mai 2026",
    coverImage: "https://images.unsplash.com/photo-1547464019-b5bf0421e428?q=80&w=2670&auto=format&fit=crop",
    description: "Actiongeladene Highlights vom Saisonauftakt mit qualmenden Reifen und maximaler Drift-Action.",
    images: [
      { id: "d1", url: "https://images.unsplash.com/photo-1620803521360-1e564bd9c504?q=80&w=1800&auto=format&fit=crop", width: 1200, height: 800, alt: "Drift action" },
      { id: "d2", url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop", width: 800, height: 1200, alt: "Car detail" },
      { id: "d3", url: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1600&auto=format&fit=crop", width: 800, height: 1200, alt: "Driver portrait" },
      { id: "d4", url: "https://images.unsplash.com/photo-1611015150463-689900ba24e5?q=80&w=1800&auto=format&fit=crop", width: 1200, height: 800, alt: "Night drift" },
      { id: "d5", url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop", width: 800, height: 1200, alt: "Sportscar" },
      { id: "d6", url: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1800&auto=format&fit=crop", width: 1200, height: 800, alt: "Action shot" },
    ]
  },
  {
    slug: "urban-portraits",
    title: "Urban Portraits",
    date: "April 2026",
    coverImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2670&auto=format&fit=crop",
    description: "Street-Style Portraitaufnahmen in den Straßen der Stadt.",
    images: [
      { id: "u1", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop", width: 800, height: 1200, alt: "Portrait 1" },
      { id: "u2", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop", width: 800, height: 1200, alt: "Portrait 2" },
      { id: "u3", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1800&auto=format&fit=crop", width: 1200, height: 800, alt: "Portrait 3" },
      { id: "u4", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1600&auto=format&fit=crop", width: 800, height: 1200, alt: "Portrait 4" },
    ]
  }
];

export function getAlbumBySlug(slug: string): PortfolioAlbum | undefined {
  return portfolioAlbums.find(a => a.slug === slug);
}
