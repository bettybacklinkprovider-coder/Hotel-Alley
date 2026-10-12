import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  User,
  Users,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Printer,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';
import { HOTEL_INFO, ALL_ROOMS } from '../data/hotelData';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  guests: string;
  roomPreference: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get('room') || '';

  // Get current date strings for default values
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkInDate: todayStr,
    checkOutDate: tomorrowStr,
    guests: '2 Guests',
    roomPreference: preselectedRoom || 'Deluxe Room',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    referenceId: string;
    submittedAt: string;
    data: BookingFormData;
  } | null>(null);

  // Update room preference if query param changes
  useEffect(() => {
    if (preselectedRoom) {
      setFormData((prev) => ({
        ...prev,
        roomPreference: preselectedRoom,
      }));
    }
  }, [preselectedRoom]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.trim().length < 6) {
      errs.phone = 'Please provide a valid phone number.';
    }

    if (!formData.checkInDate) {
      errs.checkInDate = 'Check-in date is required.';
    }

    if (!formData.checkOutDate) {
      errs.checkOutDate = 'Check-out date is required.';
    } else if (
      formData.checkInDate &&
      new Date(formData.checkOutDate) <= new Date(formData.checkInDate)
    ) {
      errs.checkOutDate = 'Check-out date must be later than check-in date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission for responsiveness
    setTimeout(() => {
      setIsSubmitting(false);
      const refId = `HA-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedReceipt({
        referenceId: refId,
        submittedAt: new Date().toLocaleString(),
        data: { ...formData },
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      checkInDate: todayStr,
      checkOutDate: tomorrowStr,
      guests: '2 Guests',
      roomPreference: 'Deluxe Room',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F7FA] pt-24 pb-20">
      {/* =========================================================================
          PAGE HEADER
          ========================================================================= */}
      <section className="relative overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0B1D35] border border-[#C6283D]/50 shadow-lg mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F5F7FA]">
              Stay Enquiries & Reservations
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-md mb-4">
            Contact & Booking
          </h1>

          <p className="font-serif-lux italic text-base sm:text-xl text-[#B7C2D0] max-w-2xl mx-auto font-light leading-relaxed mb-6">
            We are here to assist with your stay in Hua Hin. Send an enquiry below or call directly.
          </p>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-[#C6283D]/10 rounded-full blur-[130px] pointer-events-none" />
      </section>

      {/* =========================================================================
          MAIN CONTACT & ENQUIRY SECTION (2 COLUMNS ON DESKTOP, 1 ON MOBILE)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* =====================================================================
              COLUMN 1: HOTEL CONTACT DETAILS & MAP (5 COLS)
              ===================================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Hotel Info Card */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#0B1D35] border border-[#263A52] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6283D] via-[#E63946] to-transparent" />

              <h2 className="font-display text-2xl font-bold text-white tracking-wide mb-1">
                {HOTEL_INFO.name}
              </h2>
              <p className="text-xs text-[#E63946] uppercase tracking-widest font-semibold mb-6">
                Hua Hin, Thailand
              </p>

              <div className="space-y-5 text-sm">
                {/* Telephone */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded bg-[#071426] border border-[#263A52]/80">
                  <div className="p-2 rounded bg-[#102844] text-[#E63946] mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8E9EAF] uppercase tracking-wider block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneTel}`}
                      className="text-white hover:text-[#E63946] transition-colors font-bold text-base tracking-wider"
                    >
                      {HOTEL_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-[#B7C2D0] mt-0.5">
                      Click to call directly for instant stay assistance
                    </p>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded bg-[#071426] border border-[#263A52]/80">
                  <div className="p-2 rounded bg-[#102844] text-[#E63946] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8E9EAF] uppercase tracking-wider block">
                      Address
                    </span>
                    <p className="text-white font-medium text-xs sm:text-sm leading-relaxed mt-0.5">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded bg-[#071426] border border-[#263A52]/80">
                  <div className="p-2 rounded bg-[#102844] text-[#E63946] mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8E9EAF] uppercase tracking-wider block">
                      Email Enquiries
                    </span>
                    <a
                      href={`mailto:${HOTEL_INFO.email}`}
                      className="text-white hover:text-[#E63946] transition-colors font-medium text-xs sm:text-sm mt-0.5 block"
                    >
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded bg-[#071426] border border-[#263A52]/80">
                  <div className="p-2 rounded bg-[#102844] text-[#E63946] mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8E9EAF] uppercase tracking-wider block">
                      Hotel Timings
                    </span>
                    <p className="text-white text-xs mt-0.5">
                      Check-in: <strong className="text-white">{HOTEL_INFO.checkInTime}</strong>
                    </p>
                    <p className="text-white text-xs">
                      Check-out: <strong className="text-white">{HOTEL_INFO.checkOutTime}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Section */}
            <div className="rounded-sm bg-[#0B1D35] border border-[#263A52] shadow-xl overflow-hidden">
              <div className="p-4 bg-[#102844] border-b border-[#263A52] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#E63946]" />
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
                    Hua Hin Location Map
                  </span>
                </div>
                <a
                  href={HOTEL_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B7C2D0] hover:text-white flex items-center space-x-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#E63946]" />
                </a>
              </div>

              <div className="h-64 sm:h-72 w-full relative bg-[#071426]">
                <iframe
                  title="Hotel Alley Hua Hin Google Map Location"
                  src={HOTEL_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(0.9)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-[#071426] text-[11px] text-[#B7C2D0] flex items-center justify-between">
                <span>Hua Hin District, Prachuap Khiri Khan</span>
                <a
                  href={HOTEL_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E63946] hover:underline font-medium"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================================
              COLUMN 2: BOOKING ENQUIRY FORM & SIMULATION (7 COLS)
              ===================================================================== */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B1D35] rounded-sm border border-[#263A52] p-6 sm:p-10 shadow-2xl relative">
              {/* Form Title & Demo Notice */}
              <div className="mb-6">
                <div className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider uppercase text-[#E63946] mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Stay Planning</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Booking Enquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-[#B7C2D0] mt-1 leading-relaxed">
                  Provide your preferred dates and travel details. Our team will verify room allocations and respond with personal assistance.
                </p>

                {/* Explicit Demo Notice as requested by instructions */}
                <div className="mt-4 p-3.5 rounded bg-[#071426] border border-[#263A52] flex items-start space-x-2 text-xs text-[#B7C2D0]">
                  <ShieldAlert className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Demo Notice:</strong> This website provides a booking enquiry simulation. Submitting this form produces an enquiry preview receipt and does not charge your card or finalize a legally binding reservation without hotel desk verification.
                  </div>
                </div>
              </div>

              {/* Receipt Modal / In-place Display after Submission */}
              {submittedReceipt ? (
                <div className="p-6 sm:p-8 rounded bg-[#071426] border-2 border-[#C6283D] shadow-2xl space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-[#263A52]">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#C6283D]/20 border border-[#E63946] flex items-center justify-center text-[#E63946]">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          Enquiry Received (Preview)
                        </h3>
                        <p className="text-xs text-[#B7C2D0]">Reference: {submittedReceipt.referenceId}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="p-2 text-[#B7C2D0] hover:text-white bg-[#102844] rounded border border-[#263A52]"
                      title="Print Enquiry Receipt"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded bg-[#0B1D35] border border-[#263A52]">
                      <span className="text-[#8E9EAF] block">Guest Name</span>
                      <span className="font-semibold text-white text-sm">{submittedReceipt.data.fullName}</span>
                    </div>
                    <div className="p-3 rounded bg-[#0B1D35] border border-[#263A52]">
                      <span className="text-[#8E9EAF] block">Contact Email & Phone</span>
                      <span className="font-semibold text-white">{submittedReceipt.data.email}</span>
                      <span className="text-[#B7C2D0] block">{submittedReceipt.data.phone}</span>
                    </div>
                    <div className="p-3 rounded bg-[#0B1D35] border border-[#263A52]">
                      <span className="text-[#8E9EAF] block">Check-in / Check-out</span>
                      <span className="font-semibold text-white">
                        {submittedReceipt.data.checkInDate} → {submittedReceipt.data.checkOutDate}
                      </span>
                    </div>
                    <div className="p-3 rounded bg-[#0B1D35] border border-[#263A52]">
                      <span className="text-[#8E9EAF] block">Room Preference & Party</span>
                      <span className="font-semibold text-[#E63946]">
                        {submittedReceipt.data.roomPreference}
                      </span>
                      <span className="text-[#B7C2D0] block">({submittedReceipt.data.guests})</span>
                    </div>
                  </div>

                  {submittedReceipt.data.message && (
                    <div className="p-3 rounded bg-[#0B1D35] border border-[#263A52] text-xs">
                      <span className="text-[#8E9EAF] block mb-1">Additional Message / Note</span>
                      <p className="text-white italic">“{submittedReceipt.data.message}”</p>
                    </div>
                  )}

                  <div className="p-3 rounded bg-[#102844]/60 border border-[#263A52] text-xs text-[#B7C2D0]">
                    <p className="font-semibold text-white mb-1">Next Step with Hotel Alley:</p>
                    <p>
                      Our front office in Hua Hin will review this request. For urgent confirmation, please call{' '}
                      <a href={`tel:${HOTEL_INFO.phoneTel}`} className="text-[#E63946] font-bold underline">
                        {HOTEL_INFO.phoneDisplay}
                      </a>
                      .
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full py-3 px-4 text-xs font-semibold tracking-widest uppercase text-white bg-[#102844] hover:bg-[#C6283D] border border-[#263A52] rounded transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={`tel:${HOTEL_INFO.phoneTel}`}
                      className="w-full py-3 px-4 text-xs font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] rounded shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Hotel Desk Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* The Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                      Full Name <span className="text-[#E63946]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8E9EAF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full pl-10 pr-4 py-3 bg-[#071426] border text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors placeholder:text-[#526377] ${
                          errors.fullName ? 'border-[#E63946]' : 'border-[#263A52]'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-[#E63946] mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                        Email Address <span className="text-[#E63946]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#8E9EAF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="name@example.com"
                          className={`w-full pl-10 pr-4 py-3 bg-[#071426] border text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors placeholder:text-[#526377] ${
                            errors.email ? 'border-[#E63946]' : 'border-[#263A52]'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-[#E63946] mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                        Phone Number <span className="text-[#E63946]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#8E9EAF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="+66..."
                          className={`w-full pl-10 pr-4 py-3 bg-[#071426] border text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors placeholder:text-[#526377] ${
                            errors.phone ? 'border-[#E63946]' : 'border-[#263A52]'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-[#E63946] mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dates Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Check-in Date */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                        Check-in Date <span className="text-[#E63946]">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#8E9EAF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.checkInDate}
                          onChange={(e) => {
                            setFormData({ ...formData, checkInDate: e.target.value });
                            if (errors.checkInDate) setErrors({ ...errors, checkInDate: undefined });
                          }}
                          className={`w-full pl-10 pr-4 py-3 bg-[#071426] border text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors ${
                            errors.checkInDate ? 'border-[#E63946]' : 'border-[#263A52]'
                          }`}
                        />
                      </div>
                      {errors.checkInDate && (
                        <p className="text-xs text-[#E63946] mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.checkInDate}
                        </p>
                      )}
                    </div>

                    {/* Check-out Date */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                        Check-out Date <span className="text-[#E63946]">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#8E9EAF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.checkOutDate}
                          onChange={(e) => {
                            setFormData({ ...formData, checkOutDate: e.target.value });
                            if (errors.checkOutDate) setErrors({ ...errors, checkOutDate: undefined });
                          }}
                          className={`w-full pl-10 pr-4 py-3 bg-[#071426] border text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors ${
                            errors.checkOutDate ? 'border-[#E63946]' : 'border-[#263A52]'
                          }`}
                        />
                      </div>
                      {errors.checkOutDate && (
                        <p className="text-xs text-[#E63946] mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.checkOutDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Guests & Room Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Number of Guests */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-[#8E9EAF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-[#071426] border border-[#263A52] text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors cursor-pointer appearance-none"
                        >
                          <option value="1 Guest">1 Guest</option>
                          <option value="2 Guests">2 Guests</option>
                          <option value="3 Guests">3 Guests</option>
                          <option value="4 Guests">4 Guests</option>
                          <option value="5+ Guests">5+ Guests (Group)</option>
                        </select>
                      </div>
                    </div>

                    {/* Room Preference */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                        Room Preference
                      </label>
                      <select
                        value={formData.roomPreference}
                        onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                        className="w-full px-4 py-3 bg-[#071426] border border-[#263A52] text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors cursor-pointer appearance-none"
                      >
                        {ALL_ROOMS.map((r) => (
                          <option key={r.id} value={r.name}>
                            {r.name}
                          </option>
                        ))}
                        <option value="Any Available Room">Any Available Room</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                      Additional Message or Requests
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-[#8E9EAF] absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Arrival time, quiet floor request, bedding preferences, or queries..."
                        className="w-full pl-10 pr-4 py-3 bg-[#071426] border border-[#263A52] text-sm text-white rounded-sm focus:outline-none focus:border-[#E63946] transition-colors placeholder:text-[#526377]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded-sm shadow-xl shadow-[#C6283D]/30 border border-[#E63946]/50 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Submit Booking Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
