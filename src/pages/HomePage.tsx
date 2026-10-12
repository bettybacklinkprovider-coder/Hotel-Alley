import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Sparkles,
  Compass,
  HeartHandshake,
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle2,
  MapPin,
  Eye,
  BedDouble,
  Users,
} from 'lucide-react';
import {
  HOTEL_INFO,
  FEATURED_ROOMS,
  HOTEL_EXPERIENCES,
  HUA_HIN_HIGHLIGHTS,
  RoomCategory,
} from '../data/hotelData';
import { RoomModal } from '../components/RoomModal';

export const HomePage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);

  const scrollToSection2 = () => {
    const el = document.getElementById('welcome-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F7FA]">
      {/* =========================================================================
          SECTION 1: LUXURY HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Cinematic Real Background Image with dark blue + red overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
            alt="Hotel Alley Hua Hin Luxury Exterior at Twilight"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-100"
          />
          {/* Dark Blue Overlay with Subtle Red Ambient Lighting */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071426]/80 via-[#071426]/65 to-[#071426]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C6283D]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#102844]/60 rounded-full blur-[90px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          {/* Subtle Top Luxury Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0B1D35]/80 border border-[#C6283D]/50 shadow-lg mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E63946] animate-ping" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F5F7FA]">
              Hua Hin District • Thailand
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] uppercase text-white mb-6 drop-shadow-xl">
            WELCOME TO <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#F5F7FA] to-[#B7C2D0] bg-clip-text text-transparent">
              HOTEL ALLEY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif-lux italic text-lg sm:text-2xl text-[#E2E8F0] max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow">
            “Discover Comfort, Experience Luxury, Enjoy Hua Hin.”
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/rooms"
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white bg-transparent hover:bg-[#102844] border-2 border-[#263A52] hover:border-[#E63946] rounded-sm transition-all duration-300 shadow-lg shadow-black/40 hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-4 h-4 ml-2.5 text-[#E63946]" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] border border-[#E63946]/50 rounded-sm shadow-xl shadow-[#C6283D]/30 hover:shadow-[#E63946]/50 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2.5" />
              <span>Book Your Stay</span>
            </Link>
          </div>
        </div>

        {/* Scroll-down animation indicator */}
        <button
          type="button"
          onClick={scrollToSection2}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#B7C2D0] hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll down to welcome section"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase mb-1 opacity-75 group-hover:opacity-100">
            Scroll
          </span>
          <div className="w-5 h-9 rounded-full border border-[#263A52] flex items-start justify-center p-1 group-hover:border-[#E63946] transition-colors">
            <div className="w-1.5 h-2 bg-[#E63946] rounded-full animate-bounce" />
          </div>
        </button>
      </section>

      {/* =========================================================================
          SECTION 2: WELCOME TO HOTEL ALLEY
          ========================================================================= */}
      <section id="welcome-section" className="py-24 bg-[#0B1D35] relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C6283D]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Column 1: Beautiful Interior Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden border border-[#263A52] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Hotel Alley Hua Hin Welcoming Pool Courtyard"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#071426]/85 backdrop-blur-md border border-[#263A52]/80">
                  <p className="text-xs uppercase tracking-widest text-[#E63946] font-semibold">
                    Hua Hin District, Thailand
                  </p>
                  <p className="text-sm font-display text-white mt-0.5">
                    Thoughtfully designed boutique spaces for quiet relaxation
                  </p>
                </div>
              </div>

              {/* Decorative Red Corner Accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#C6283D] pointer-events-none hidden sm:block" />
            </div>

            {/* Column 2: Welcoming Introduction Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#E63946]">
                <span className="w-6 h-[1.5px] bg-[#E63946]" />
                <span>Welcome to Hotel Alley</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Your Perfect Stay in <span className="text-[#F5F7FA]">Hua Hin</span>
              </h2>

              <p className="text-base text-[#B7C2D0] leading-relaxed">
                Nestled in the celebrated coastal retreat of Hua Hin, Hotel Alley invites you to discover genuine calm, tasteful modern architecture, and warm hospitality. Our spaces are curated to offer an intimate sanctuary where you can recharge after days spent exploring Thailand’s renowned seaside province.
              </p>

              <p className="text-sm text-[#B7C2D0]/90 leading-relaxed">
                Enjoy stylish surroundings, thoughtful guest accommodation, and effortless access to Hua Hin’s serene beaches, morning markets, and cultural attractions. We focus on understated elegance, seamless service, and providing an authentic haven for every traveller.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-[#071426] border border-[#263A52]">
                  <p className="font-display text-lg font-bold text-white">Quiet Luxury</p>
                  <p className="text-xs text-[#B7C2D0] mt-1">Peaceful guest rooms with mood lighting</p>
                </div>
                <div className="p-4 rounded bg-[#071426] border border-[#263A52]">
                  <p className="font-display text-lg font-bold text-white">Central Access</p>
                  <p className="text-xs text-[#B7C2D0] mt-1">Minutes away from coast & night bazaars</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/rooms"
                  className="inline-flex items-center px-7 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-lg shadow-[#C6283D]/25 border border-[#E63946]/40 transition-all duration-300"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED ROOMS & SUITES
          ========================================================================= */}
      <section className="py-24 bg-[#071426] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#E63946] mb-3">
              <span className="w-6 h-[1.5px] bg-[#E63946]" />
              <span>Sample Accommodations</span>
              <span className="w-6 h-[1.5px] bg-[#E63946]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Featured Rooms & Suites
            </h2>
            <p className="text-sm sm:text-base text-[#B7C2D0] leading-relaxed">
              Explore our curated sample room categories. Each space is designed with refined dark blue textures, tasteful red accents, and serene comfort for your Hua Hin holiday.
            </p>
          </div>

          {/* 3 Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_ROOMS.map((room) => (
              <div
                key={room.id}
                className="group bg-[#0B1D35] rounded-sm border border-[#263A52] hover:border-[#C6283D]/80 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Room Image with Zoom & Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#071426]/90 border border-[#263A52] text-[#B7C2D0] rounded-sm">
                        {room.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#E63946] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#E63946] font-medium tracking-wide mt-1">
                      {room.tagline}
                    </p>
                    <p className="text-sm text-[#B7C2D0] mt-3 leading-relaxed line-clamp-3">
                      {room.shortDescription}
                    </p>

                    {/* Room Specs Highlights */}
                    <div className="mt-4 pt-4 border-t border-[#263A52]/70 flex items-center justify-between text-xs text-[#B7C2D0]">
                      <span className="flex items-center">
                        <BedDouble className="w-3.5 h-3.5 text-[#E63946] mr-1.5" />
                        {room.viewType}
                      </span>
                      <span className="text-[#8E9EAF]">{room.approxSize}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="w-full py-3 px-4 text-xs font-semibold tracking-widest uppercase text-white bg-[#102844] hover:bg-[#C6283D] border border-[#263A52] hover:border-[#E63946] rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Rooms Button */}
          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-white bg-transparent hover:bg-[#102844] border-2 border-[#263A52] hover:border-[#E63946] rounded-sm transition-all duration-300 shadow-md"
            >
              <span>View All Rooms & Suites</span>
              <ArrowRight className="w-4 h-4 ml-2.5 text-[#E63946]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE HOTEL EXPERIENCE
          ========================================================================= */}
      <section className="py-24 bg-[#0B1D35] relative overflow-hidden">
        {/* Real Authentic Hua Hin Scenery Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
            alt="Real Hua Hin Coastal Atmosphere Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071426] via-[#0B1D35]/85 to-[#071426]" />
        </div>

        {/* Ambient lighting accents */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6283D]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#E63946] mb-3">
              <span className="w-6 h-[1.5px] bg-[#E63946]" />
              <span>Guest Atmosphere</span>
              <span className="w-6 h-[1.5px] bg-[#E63946]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              The Hotel Experience
            </h2>
            <p className="text-sm sm:text-base text-[#B7C2D0] leading-relaxed">
              Every dimension of your visit is shaped to nurture rest, inspire curiosity, and cultivate lasting memories along Thailand’s royal coast.
            </p>
          </div>

          {/* 3 Experience Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOTEL_EXPERIENCES.map((exp, index) => {
              const IconComponent =
                index === 0
                  ? Sparkles
                  : index === 1
                  ? Compass
                  : HeartHandshake;

              return (
                <div
                  key={exp.title}
                  className="bg-[#071426] rounded-sm border border-[#263A52] hover:border-[#E63946]/80 transition-all duration-500 shadow-xl hover:-translate-y-1 relative group overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Feature Image with Zoom and Red Overlay */}
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/40 to-transparent" />

                      {/* Floating Icon Badge */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-sm bg-[#071426]/90 backdrop-blur-md border border-[#263A52] group-hover:border-[#E63946] flex items-center justify-center text-[#E63946] group-hover:scale-105 transition-all duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E63946] block mb-1">
                        {exp.highlight}
                      </span>

                      <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#F5F7FA] transition-colors">
                        {exp.title}
                      </h3>

                      <p className="text-sm text-[#B7C2D0] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                    <Link
                      to={exp.link || '/contact'}
                      className="pt-4 border-t border-[#263A52]/60 flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#E63946] transition-colors"
                    >
                      <span>Learn more with our hosts</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HUA HIN DESTINATION
          ========================================================================= */}
      <section className="py-24 bg-[#071426] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#E63946] mb-3">
              <span className="w-6 h-[1.5px] bg-[#E63946]" />
              <span>Thailand’s Historic Royal Riviera</span>
              <span className="w-6 h-[1.5px] bg-[#E63946]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Discover the Beauty of Hua Hin
            </h2>
            <p className="text-sm sm:text-base text-[#B7C2D0] leading-relaxed">
              From dawn horseback rides on gentle sandy shorelines to twilight street feasts and quiet seaside temples, explore why Hua Hin remains Thailand’s premier coastal sanctuary.
            </p>
          </div>

          {/* Destination Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HUA_HIN_HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-sm overflow-hidden border border-[#263A52] hover:border-[#E63946]/70 shadow-xl transition-all duration-500"
              >
                <div className="h-72 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E63946] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B7C2D0] mt-1.5 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore Gallery CTA */}
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-lg shadow-[#C6283D]/25 border border-[#E63946]/40 transition-all duration-300"
            >
              <span>Explore Our Gallery</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & BOOKING CALL TO ACTION
          ========================================================================= */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#071426] via-[#102844] to-[#071426]">
        {/* Real Hua Hin Sunset Coastal Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=85"
            alt="Real Hua Hin Coastal Sunset"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-20 filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071426]/90 via-[#071426]/75 to-[#071426]" />
        </div>

        {/* Deep Red Gradient Glow Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C6283D]/20 via-transparent to-[#C6283D]/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C6283D]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-14 rounded-md bg-[#0B1D35]/90 border border-[#263A52] backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Top red edge line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />

            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#E63946] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Reserve Your Coastal Escape</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Your Hua Hin Stay Starts Here
            </h2>

            {/* Hotel Information Box */}
            <div className="max-w-xl mx-auto mb-8 p-5 bg-[#071426]/80 rounded border border-[#263A52] text-center space-y-2">
              <p className="font-display text-xl font-bold text-white tracking-widest">
                {HOTEL_INFO.name}
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-[#F5F7FA]">
                <Phone className="w-4 h-4 text-[#E63946]" />
                <a
                  href={`tel:${HOTEL_INFO.phoneTel}`}
                  className="hover:text-[#E63946] transition-colors font-medium tracking-wider"
                >
                  Phone: {HOTEL_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-[#B7C2D0]">
                <MapPin className="w-3.5 h-3.5 text-[#E63946] flex-shrink-0" />
                <span>{HOTEL_INFO.address}</span>
              </div>
            </div>

            {/* Action Buttons: Call Now and Contact & Booking */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={`tel:${HOTEL_INFO.phoneTel}`}
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white bg-[#071426] hover:bg-[#102844] border-2 border-[#263A52] hover:border-[#E63946] rounded-sm transition-all duration-300 shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="w-4 h-4 text-[#E63946] mr-2" />
                <span>Call Now</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-xl shadow-[#C6283D]/30 border border-[#E63946]/50 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Contact & Booking</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Modal */}
      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </div>
  );
};
