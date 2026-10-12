import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, Compass, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact & Booking', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071426]/95 backdrop-blur-md py-3 border-b border-[#263A52]/80 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-[#071426]/90 via-[#071426]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C6283D] to-[#102844] flex items-center justify-center border border-[#E63946]/40 shadow-md group-hover:border-[#E63946] transition-all duration-300">
                <span className="font-display text-lg font-bold text-white tracking-widest">HA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F5F7FA] group-hover:text-white transition-colors">
                  HOTEL ALLEY
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#B7C2D0] uppercase font-light">
                  Hua Hin • Thailand
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative py-1 text-sm tracking-widest font-medium uppercase transition-colors duration-200 ${
                      active
                        ? 'text-white'
                        : 'text-[#B7C2D0] hover:text-[#F5F7FA]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6283D] to-transparent shadow-[0_0_8px_#E63946]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${HOTEL_INFO.phoneTel}`}
                className="flex items-center space-x-2 text-xs tracking-wider text-[#B7C2D0] hover:text-white transition-colors py-2 px-3 rounded border border-transparent hover:border-[#263A52]"
                title="Call Hotel Alley directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                <span>{HOTEL_INFO.phoneDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-lg shadow-[#C6283D]/25 hover:shadow-[#E63946]/40 transition-all duration-300 border border-[#E63946]/40 hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                <span>Book Your Stay</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              <a
                href={`tel:${HOTEL_INFO.phoneTel}`}
                className="p-2 text-[#E63946] hover:text-white bg-[#0B1D35] border border-[#263A52] rounded-sm"
                aria-label="Call Hotel Alley"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F5F7FA] hover:text-white bg-[#0B1D35] border border-[#263A52] rounded-sm focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#0B1D35] border-l border-[#263A52] p-6 shadow-2xl flex flex-col justify-between z-50 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#263A52]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#C6283D] to-[#102844] flex items-center justify-center border border-[#E63946]/50">
                    <span className="font-display text-sm font-bold text-white">HA</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold tracking-widest text-white">
                      HOTEL ALLEY
                    </p>
                    <p className="text-[10px] tracking-wider text-[#B7C2D0]">Hua Hin, Thailand</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#B7C2D0] hover:text-white rounded"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-8 space-y-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded text-sm tracking-widest uppercase transition-all ${
                        active
                          ? 'bg-[#102844] text-white border-l-4 border-[#C6283D] font-semibold'
                          : 'text-[#B7C2D0] hover:bg-[#102844]/50 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && <Sparkles className="w-4 h-4 text-[#E63946]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact actions in mobile drawer */}
            <div className="pt-6 mt-8 border-t border-[#263A52] space-y-3">
              <a
                href={`tel:${HOTEL_INFO.phoneTel}`}
                className="flex items-center justify-center w-full py-3 px-4 rounded text-xs font-semibold tracking-wider text-white bg-[#102844] border border-[#263A52] hover:border-[#E63946]/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E63946] mr-2" />
                <span>Call {HOTEL_INFO.phoneDisplay}</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 px-4 rounded text-xs font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] shadow-lg shadow-[#C6283D]/30 border border-[#E63946]/40"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Your Stay</span>
              </Link>

              <div className="pt-4 text-center">
                <p className="text-[11px] text-[#B7C2D0] flex items-center justify-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>Prachuap Khiri Khan 77110</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
