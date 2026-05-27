import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAlbumBySlug, portfolioAlbums } from "@/data/portfolio";

export async function generateStaticParams() {
  return portfolioAlbums.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) return {};

  return {
    title: `${album.title} | Dzirksts Studio Portfolio`,
    description: album.description || `View the ${album.title} gallery.`,
  };
}

export default async function PortfolioGalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) notFound();

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Fullscreen Hero Cover */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <Image 
          src={album.coverImage}
          alt={album.title}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-sm md:text-base tracking-[0.3em] uppercase text-zinc-300 mb-6 block">
            {album.date}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white drop-shadow-xl">
            {album.title}
          </h1>
          {album.description && (
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto drop-shadow-md">
              {album.description}
            </p>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <span className="text-xs tracking-[0.2em] uppercase text-white/70 mb-2">Scroll</span>
          <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {album.images.map((img) => (
            <div key={img.id} className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-zinc-900 rounded-sm">
              <Image 
                src={img.url}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Optional Hover Overlay for Lightbox cue */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer Back Link */}
      <section className="py-24 text-center">
        <a href="/portfolio" className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-lg tracking-wide">
          <span className="text-2xl leading-none">←</span> Back to Portfolio
        </a>
      </section>

    </main>
  );
}
