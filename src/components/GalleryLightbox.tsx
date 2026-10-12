import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Tag, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../data/hotelData';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && items[currentIndex] !== undefined;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
      {/* Top Bar Controls */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center space-x-3">
          <span className="px-2.5 py-1 text-xs font-semibold tracking-wider uppercase bg-[#C6283D] text-white rounded-sm shadow-md">
            {currentItem.category}
          </span>
          <span className="text-xs text-[#B7C2D0] hidden sm:inline-block">
            Photo {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white bg-[#0B1D35]/80 hover:bg-[#C6283D] border border-[#263A52] rounded-full transition-colors cursor-pointer"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 sm:left-6 z-50 p-3 sm:p-4 text-white/80 hover:text-white bg-[#071426]/70 hover:bg-[#C6283D] border border-[#263A52] hover:border-[#E63946] rounded-full transition-all cursor-pointer backdrop-blur-sm -translate-y-1/2 top-1/2"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 sm:right-6 z-50 p-3 sm:p-4 text-white/80 hover:text-white bg-[#071426]/70 hover:bg-[#C6283D] border border-[#263A52] hover:border-[#E63946] rounded-full transition-all cursor-pointer backdrop-blur-sm -translate-y-1/2 top-1/2"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div
        className="max-w-6xl max-h-[85vh] mx-auto px-4 sm:px-16 flex flex-col items-center justify-center relative z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-md border border-[#263A52] shadow-2xl max-h-[70vh] flex items-center justify-center bg-[#071426]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="w-auto h-auto max-w-full max-h-[70vh] object-contain select-none"
          />
        </div>

        <div className="mt-4 text-center max-w-2xl">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wider">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#B7C2D0] mt-1 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
