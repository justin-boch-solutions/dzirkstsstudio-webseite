import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { portfolioAlbums } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Dzirksts Studio",
  description: "Entdecken Sie unsere Foto-Kollektionen und aktuellen Shootings.",
};

export default function PortfolioOverviewPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Our <span className="text-zinc-500">Portfolio</span>
          </h1>
          <p className="text-lg text-zinc-400">
            A selection of our latest photo collections and stories.
          </p>
        </div>

        {/* Album Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioAlbums.map((album) => (
            <Link 
              key={album.slug} 
              href={`/portfolio/${album.slug}`}
              className="group block relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-square lg:aspect-[4/3]"
            >
              {/* Cover Image */}
              <Image 
                src={album.coverImage} 
                alt={album.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-medium tracking-widest uppercase text-zinc-400 mb-2 block">
                  {album.date}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {album.title}
                </h2>
                <div className="w-12 h-1 bg-white mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                <span className="text-sm font-medium text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  View Gallery <span className="text-xl leading-none">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
