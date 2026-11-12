import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/collegeData';
import { Maximize2, Check, ArrowRight, Shield, Award, Sparkles, Building2, Book, Monitor, Users } from 'lucide-react';

interface FacilitiesGalleryProps {
  onOpenApply: () => void;
}

export const FacilitiesGallery: React.FC<FacilitiesGalleryProps> = ({ onOpenApply }) => {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activeFacility = CAMPUS_FACILITIES[selectedFacilityIndex];

  return (
    <section id="campus" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Campus & Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-900 tracking-tight leading-tight">
              An Inspiring Habitat for Inquiry and Creation.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Situated atop the serene heights of Jamiath Hill in Marikunnu, Kozhikode, our campus blends modern high-tech facilities with the tranquility required for serious scholarly pursuit.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenApply}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all cursor-pointer whitespace-nowrap"
            >
              Book Campus Visit
            </button>
          </div>
        </div>

        {/* Master Showcase Box */}
        <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl overflow-hidden shadow-sm mb-12">
          
          {/* Facility Selection Tabs */}
          <div className="flex border-b border-stone-200 overflow-x-auto scrollbar-none bg-stone-100/60 p-1.5 gap-1.5">
            {CAMPUS_FACILITIES.map((facility, index) => (
              <button
                key={facility.title}
                onClick={() => setSelectedFacilityIndex(index)}
                className={`px-4 py-2.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 ${
                  selectedFacilityIndex === index
                    ? 'bg-white text-slate-900 font-bold shadow-xs border border-stone-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {index === 0 && <Building2 className="w-3.5 h-3.5 text-amber-700" />}
                {index === 1 && <Book className="w-3.5 h-3.5 text-amber-700" />}
                {index === 2 && <Monitor className="w-3.5 h-3.5 text-amber-700" />}
                {index === 3 && <Users className="w-3.5 h-3.5 text-amber-700" />}
                <span>{facility.title}</span>
              </button>
            ))}
          </div>

          {/* Active Facility Display */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Visual asset */}
            <div className="lg:col-span-7 relative group rounded-xl overflow-hidden border border-stone-200 shadow-md bg-stone-900">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-102 transition-transform duration-500 cursor-pointer"
                onClick={() => setLightboxImage(activeFacility.image)}
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setLightboxImage(activeFacility.image)}
                aria-label="Enlarge image"
                className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-lg backdrop-blur-sm transition-all cursor-pointer opacity-90 group-hover:opacity-100"
              >
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </button>
              <div className="absolute bottom-2 left-2 text-[11px] text-white/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs font-mono">
                Click to expand view
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-2">
                  {activeFacility.category}
                </span>
                <h3 className="text-2xl font-bold font-cinzel text-slate-900 mb-4 leading-tight">
                  {activeFacility.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeFacility.description}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Key Specifications
                </h4>
                <div className="space-y-2.5 mb-8">
                  {activeFacility.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-slate-500">
                <span>Location: Jamiath Hill Campus</span>
                <span className="font-medium text-slate-800">Calicut, Kerala</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column Secondary Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-5 rounded-xl border border-stone-200 bg-white">
            <h4 className="text-sm font-bold text-slate-900 font-cinzel mb-1">Boys & Girls Hostels</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Safe on-campus residential accommodation with hygienic canteen, study recreation rooms, and round-the-clock warden supervision.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white">
            <h4 className="text-sm font-bold text-slate-900 font-cinzel mb-1">Biotech & Food Tech Labs</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Specialized microbiology, analytical biochemistry, and food preservation research suites compliant with Calicut University curriculum.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white">
            <h4 className="text-sm font-bold text-slate-900 font-cinzel mb-1">Auditorium & Seminar Halls</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Air-conditioned multipurpose auditorium and audio-visual seminar halls for academic symposiums, guest lectures, and cultural events.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white">
            <h4 className="text-sm font-bold text-slate-900 font-cinzel mb-1">Sports & Athletics</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated sports ground for football, cricket pitches, badminton courts, and indoor games facilitating physical wellness and team spirit.
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={lightboxImage}
              alt="Campus facility enlarged view"
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain border border-stone-800"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 text-sm font-semibold cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
