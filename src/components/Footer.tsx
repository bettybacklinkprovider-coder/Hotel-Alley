import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050E1B] text-[#B7C2D0] border-t border-[#263A52] relative overflow-hidden">
      {/* Decorative top red subtle accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6283D] to-transparent opacity-80" />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C6283D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C6283D] to-[#102844] flex items-center justify-center border border-[#E63946]/40 shadow-md">
                <span className="font-display text-lg font-bold text-white tracking-wider">HA</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-[0.2em] text-[#F5F7FA]">
                  HOTEL ALLEY
                </span>
                <p className="text-[11px] tracking-[0.25em] text-[#B7C2D0] uppercase">
                  Hua Hin • Thailand
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#B7C2D0] max-w-md">
              A bespoke retreat crafted with dark coastal luxury, quiet refinement, and sincere hospitality. Experience Hua Hin’s vibrant culture and coastal charm from an intimate sanctuary.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center px-3 py-1 rounded bg-[#0B1D35] border border-[#263A52] text-[#F5F7FA]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E63946] mr-1.5" />
                Verified Contact Details
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded bg-[#0B1D35] border border-[#263A52] text-[#F5F7FA]">
                <Clock className="w-3.5 h-3.5 text-[#E63946] mr-1.5" />
                Check-in 14:00 • Check-out 12:00
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#263A52]/60 inline-block">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center text-[#B7C2D0]"
                >
                  <ArrowRight className="w-3 h-3 text-[#C6283D] mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center text-[#B7C2D0]"
                >
                  <ArrowRight className="w-3 h-3 text-[#C6283D] mr-2" />
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center text-[#B7C2D0]"
                >
                  <ArrowRight className="w-3 h-3 text-[#C6283D] mr-2" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center text-[#B7C2D0]"
                >
                  <ArrowRight className="w-3 h-3 text-[#C6283D] mr-2" />
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#263A52]/60 inline-block">
              Hotel Information
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">{HOTEL_INFO.name}</p>
                  <p className="text-xs text-[#B7C2D0] leading-relaxed">{HOTEL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#E63946] flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${HOTEL_INFO.phoneTel}`}
                    className="text-white hover:text-[#E63946] transition-colors font-medium text-sm"
                  >
                    {HOTEL_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#B7C2D0]">Direct Telephone Enquiry</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#E63946] flex-shrink-0" />
                <div>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-white hover:text-[#E63946] transition-colors font-medium text-sm"
                  >
                    {HOTEL_INFO.email}
                  </a>
                  <p className="text-[11px] text-[#B7C2D0]">General Enquiries</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded text-xs font-semibold tracking-widest uppercase text-white bg-[#102844] hover:bg-[#C6283D] border border-[#263A52] hover:border-[#E63946] transition-all duration-300"
              >
                Send Direct Stay Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="mt-12 pt-6 border-t border-[#263A52]/60 text-xs text-[#8E9EAF] leading-relaxed">
          <p>
            <strong className="text-[#B7C2D0]">Notice:</strong> Room categories, sizes, and amenities shown represent sample configurations for enquiry planning and stay discovery. To confirm specific room allocations, real-time availability, or special requests, please submit an enquiry or call our desk at{' '}
            <a href={`tel:${HOTEL_INFO.phoneTel}`} className="text-[#E63946] underline hover:text-white">
              {HOTEL_INFO.phoneDisplay}
            </a>
            .
          </p>
        </div>

        {/* Copyright bar */}
        <div className="mt-6 pt-6 border-t border-[#263A52]/40 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E9EAF]">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center">
            Designed for luxury hospitality in Hua Hin, Thailand
            <Heart className="w-3 h-3 text-[#C6283D] ml-1.5 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
