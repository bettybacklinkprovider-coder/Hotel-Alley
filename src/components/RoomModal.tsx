import React, { useEffect } from 'react';
import { X, Check, Users, Maximize, Compass, Calendar, ArrowRight, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RoomCategory } from '../data/hotelData';

interface RoomModalProps {
  room: RoomCategory | null;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!room) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [room, onClose]);

  if (!room) return null;

  const handleEnquire = () => {
    onClose();
    navigate(`/contact?room=${encodeURIComponent(room.name)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Background click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      <div
        className="relative bg-[#0B1D35] border border-[#263A52] rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl z-10 my-8 text-[#F5F7FA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-[#071426]/80 hover:bg-[#C6283D] border border-[#263A52] rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35] via-[#0B1D35]/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#C6283D] text-white rounded-sm inline-block mb-2">
              Sample Category
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {room.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#B7C2D0] italic mt-0.5">{room.tagline}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Quick Stats */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-[#071426] border border-[#263A52] rounded-md text-center">
            <div className="flex flex-col items-center">
              <Users className="w-4 h-4 text-[#E63946] mb-1" />
              <span className="text-[11px] text-[#B7C2D0]">Capacity</span>
              <span className="text-xs font-semibold text-white">{room.capacity}</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#263A52]">
              <Maximize className="w-4 h-4 text-[#E63946] mb-1" />
              <span className="text-[11px] text-[#B7C2D0]">Approx. Space</span>
              <span className="text-xs font-semibold text-white">{room.approxSize}</span>
            </div>
            <div className="flex flex-col items-center">
              <Compass className="w-4 h-4 text-[#E63946] mb-1" />
              <span className="text-[11px] text-[#B7C2D0]">Orientation</span>
              <span className="text-xs font-semibold text-white">{room.viewType}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider uppercase text-white mb-2">
              Room Overview
            </h3>
            <p className="text-sm text-[#B7C2D0] leading-relaxed">
              {room.fullDescription}
            </p>
          </div>

          {/* Sample Amenities */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider uppercase text-white mb-3">
              Sample In-Room Appointments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.sampleAmenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-xs text-[#B7C2D0] bg-[#102844]/60 px-3 py-2 rounded border border-[#263A52]/80"
                >
                  <Check className="w-3.5 h-3.5 text-[#E63946] mr-2 flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Disclaimer */}
          <div className="flex items-start p-3 bg-[#102844]/30 border border-[#263A52] rounded text-xs text-[#8E9EAF]">
            <ShieldAlert className="w-4 h-4 text-[#E63946] flex-shrink-0 mr-2 mt-0.5" />
            <span>
              Room appointments, dimensions, and configurations are sample representations until your stay dates and exact requirements are verified with the hotel desk.
            </span>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#263A52]">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#B7C2D0] hover:text-white bg-transparent hover:bg-[#102844] rounded border border-[#263A52] transition-colors"
            >
              Close
            </button>

            <button
              type="button"
              onClick={handleEnquire}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#C6283D] to-[#A21B2D] hover:from-[#E63946] hover:to-[#C6283D] rounded shadow-lg shadow-[#C6283D]/25 transition-all inline-flex items-center justify-center border border-[#E63946]/40"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              <span>Enquire For {room.name}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
