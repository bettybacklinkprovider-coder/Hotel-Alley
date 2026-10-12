import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Maximize2,
  Filter,
  Calendar,
  ArrowRight,
  Info,
  Camera,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hotelData';
import { GalleryLightbox } from '../components/GalleryLightbox';

type CategoryFilter =
  | 'All'
  | 'Hotel Interiors'
  | 'Rooms & Suites'
  | 'Hotel Atmosphere'
  | 'Hua Hin Destination';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Hotel Interiors',
    'Rooms & Suites',
    'Hotel Atmosphere',
    'Hua Hin Destination',
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F7FA] pt-24 pb-20">
      {/* =========================================================================
          PAGE HEADER
          ========================================================================= */}
      <section className="relative overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0B1D35] border border-[#C6283D]/50 shadow-lg mb-4">
            <Camera className="w-3.5 h-3.5 text-[#E63946]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F5F7FA]">
              Visual Showcase
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-md mb-4">
            Explore Our Gallery
          </h1>

          <p className="font-serif-lux italic text-base sm:text-xl text-[#B7C2D0] max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Immerse yourself in the ambient textures, serene spaces, and coastal allure of Hotel Alley and Hua Hin, Thailand.
          </p>

          {/* Photo Authenticity & Descriptive Notice */}
          <div className="max-w-2xl mx-auto p-3.5 rounded bg-[#0B1D35]/80 border border-[#263A52] flex items-center justify-center text-xs text-[#B7C2D0]">
            <Info className="w-4 h-4 text-[#E63946] flex-shrink-0 mr-2" />
            <span>
              Curated photography showcasing inspirational hotel aesthetics, interior spaces, and surrounding Hua Hin highlights.
            </span>
          </div>
        </div>

        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#C6283D]/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* =========================================================================
          CATEGORY FILTER TABS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C6283D] to-[#A21B2D] text-white shadow-lg shadow-[#C6283D]/30 border border-[#E63946]'
                    : 'bg-[#0B1D35] text-[#B7C2D0] hover:text-white border border-[#263A52] hover:border-[#C6283D]/50'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/30 text-white' : 'bg-[#071426] text-[#8E9EAF]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          GALLERY GRID (12+ VISUALLY DISTINCT IMAGES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-sm overflow-hidden border border-[#263A52] hover:border-[#E63946] bg-[#0B1D35] cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container with aspect ratio */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Subtle Red Overlay Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/30 to-transparent opacity-60 group-hover:opacity-85 group-hover:bg-[#C6283D]/10 transition-all duration-300" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#071426]/90 border border-[#263A52] text-[#F5F7FA] rounded-sm backdrop-blur-sm group-hover:border-[#E63946] transition-colors">
                    {item.category}
                  </span>
                </div>

                {/* Enlarge Icon Badge */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-[#C6283D] text-white shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Caption & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#F5F7FA] transition-colors drop-shadow">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B7C2D0] mt-1 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            CALL TO ACTION: PLAN YOUR STAY
            ========================================================================= */}
        <div className="mt-20 p-8 sm:p-12 rounded bg-gradient-to-r from-[#0B1D35] via-[#102844] to-[#0B1D35] border border-[#263A52] text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E63946]">
              Experience It In Person
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready to Experience Hotel Alley?
            </h3>
            <p className="text-sm text-[#B7C2D0] leading-relaxed">
              Allow our team in Hua Hin to curate your retreat with peaceful accommodation and warm hospitality.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-xl shadow-[#C6283D]/30 border border-[#E63946]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Plan Your Stay</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Fullscreen viewing with prev/next */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
