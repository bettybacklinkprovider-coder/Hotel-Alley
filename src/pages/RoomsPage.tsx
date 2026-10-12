import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Maximize,
  Check,
  Calendar,
  Eye,
  Info,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Phone,
} from 'lucide-react';
import { ALL_ROOMS, HOTEL_INFO, RoomCategory } from '../data/hotelData';
import { RoomModal } from '../components/RoomModal';

export const RoomsPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const displayedRooms =
    activeFilter === 'featured'
      ? ALL_ROOMS.filter((r) => r.isFeatured)
      : ALL_ROOMS;

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F7FA] pt-24 pb-20">
      {/* =========================================================================
          PAGE HEADER & LUXURY BANNER
          ========================================================================= */}
      <section className="relative overflow-hidden mb-16">
        {/* Banner Image with dark blue + red gradient overlay */}
        <div className="relative h-[380px] sm:h-[480px] w-full">
          <img
            src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2000&q=85"
            alt="Hotel Alley Luxury Rooms Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/75 to-[#071426]/60" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#C6283D]/20 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Header Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-48 sm:-mt-64 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0B1D35]/90 border border-[#C6283D]/50 shadow-lg mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F5F7FA]">
              Bespoke Accommodation
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-lg mb-4">
            Rooms & Suites
          </h1>

          <p className="font-serif-lux italic text-base sm:text-xl text-[#B7C2D0] max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Discover a harmonious fusion of tranquil coastal warmth, dark luxury aesthetics, and quiet relaxation in Hua Hin.
          </p>

          {/* Sample Information Notice Banner */}
          <div className="max-w-2xl mx-auto p-3.5 rounded bg-[#0B1D35]/90 border border-[#263A52] flex items-center justify-center text-xs text-[#B7C2D0] backdrop-blur-sm shadow-md">
            <Info className="w-4 h-4 text-[#E63946] flex-shrink-0 mr-2" />
            <span>
              Sample room categories, layouts, and amenities shown for preview & stay discovery. Final details verified upon enquiry.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROOM CATEGORIES GALLERY & PRESENTATION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1 bg-[#0B1D35] rounded border border-[#263A52]">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C6283D] text-white shadow-md'
                  : 'text-[#B7C2D0] hover:text-white'
              }`}
            >
              All Accommodations ({ALL_ROOMS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('featured')}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-colors cursor-pointer ${
                activeFilter === 'featured'
                  ? 'bg-[#C6283D] text-white shadow-md'
                  : 'text-[#B7C2D0] hover:text-white'
              }`}
            >
              Signature Suites ({ALL_ROOMS.filter((r) => r.isFeatured).length})
            </button>
          </div>
        </div>

        {/* Room List - Spacious, Detailed Cards */}
        <div className="space-y-12">
          {displayedRooms.map((room, index) => (
            <div
              key={room.id}
              className={`bg-[#0B1D35] rounded-sm border border-[#263A52] hover:border-[#C6283D]/80 transition-all duration-500 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column (5 cols) */}
              <div
                className={`lg:col-span-5 relative h-72 lg:h-auto min-h-[320px] overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35]/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#071426]/90 border border-[#263A52] text-[#F5F7FA] rounded-sm shadow">
                    {room.name}
                  </span>
                </div>
              </div>

              {/* Details Column (7 cols) */}
              <div
                className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E63946]">
                      {room.tagline}
                    </span>
                    <span className="text-xs text-[#8E9EAF] px-2.5 py-0.5 rounded bg-[#071426] border border-[#263A52]">
                      Sample Category
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E63946] transition-colors">
                    {room.name}
                  </h2>

                  <p className="text-sm text-[#B7C2D0] mt-3 leading-relaxed">
                    {room.fullDescription}
                  </p>

                  {/* Room Specs & Key Amenities */}
                  <div className="mt-6 pt-6 border-t border-[#263A52]/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="flex items-center text-[#B7C2D0]">
                      <Users className="w-3.5 h-3.5 text-[#E63946] mr-2 flex-shrink-0" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center text-[#B7C2D0]">
                      <Maximize className="w-3.5 h-3.5 text-[#E63946] mr-2 flex-shrink-0" />
                      <span>{room.approxSize}</span>
                    </div>
                    <div className="flex items-center text-[#B7C2D0]">
                      <Sparkles className="w-3.5 h-3.5 text-[#E63946] mr-2 flex-shrink-0" />
                      <span>{room.viewType}</span>
                    </div>
                  </div>

                  {/* Sample Amenities Pills */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                      Sample Amenities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.sampleAmenities.slice(0, 4).map((amenity, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-center text-xs text-[#B7C2D0] bg-[#071426]/70 px-2.5 py-1.5 rounded border border-[#263A52]/60"
                        >
                          <Check className="w-3 h-3 text-[#E63946] mr-2 flex-shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-6 border-t border-[#263A52] flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#071426] hover:bg-[#102844] border border-[#263A52] hover:border-[#E63946] rounded-sm transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 mr-2" />
                    <span>View Full Details</span>
                  </button>

                  <Link
                    to={`/contact?room=${encodeURIComponent(room.name)}`}
                    className="w-full sm:w-auto px-7 py-3 text-xs font-bold tracking-[0.15em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-lg shadow-[#C6283D]/25 border border-[#E63946]/40 transition-all flex items-center justify-center"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    <span>Enquire About a Stay</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom CTA for Rooms Page */}
        <div className="mt-20 p-8 sm:p-12 rounded bg-gradient-to-r from-[#0B1D35] via-[#102844] to-[#0B1D35] border border-[#263A52] text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Have Specific Dates or Special Preferences?
            </h3>
            <p className="text-sm text-[#B7C2D0] leading-relaxed">
              Our hospitality team in Hua Hin is ready to assist you directly with room availability, tailored arrangements, or group enquiries.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${HOTEL_INFO.phoneTel}`}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#071426] hover:bg-[#102844] border border-[#263A52] hover:border-[#E63946] rounded-sm transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#E63946]" />
                <span>Call {HOTEL_INFO.phoneDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-xl shadow-[#C6283D]/30 border border-[#E63946]/40 transition-all inline-flex items-center justify-center"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                <span>Enquire About a Stay</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Room Modal */}
      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </div>
  );
};
