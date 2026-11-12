import React from 'react';
import { ArrowDown, GraduationCap, MapPin, Award, BookOpen, Compass, Sparkles } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface HeroProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onOpenTour }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF9F5] to-white border-b border-stone-200">
      {/* Subtle geometric background motif */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Narrative & Mission */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-4">
              <span>JDT Islam Educational Complex</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Estd. 1922</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Kozhikode, Kerala</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] font-cinzel text-balance mb-6">
              Empowering Youth Through Quality Education & Ethical Leadership.
            </h1>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Affiliated with the <strong className="text-slate-800 font-semibold">University of Calicut</strong> and approved by the Government of Kerala, JDT Islam College of Arts & Science provides transformative undergraduate and postgraduate education in Computer Science, Multimedia, Commerce, Management, and Applied Sciences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 text-white font-medium text-sm rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <GraduationCap className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>Admission Inquiry {COLLEGE_INFO.admissionsOpenYear}</span>
              </button>

              <button
                onClick={onOpenTour}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-slate-800 border border-slate-300 font-medium text-sm rounded-lg hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-700" />
                <span>Virtual Campus Tour</span>
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 py-2 sm:px-2 flex items-center justify-center gap-1 transition-colors"
              >
                <span>View All 14+ Courses</span>
                <ArrowDown className="w-3.5 h-3.5 text-amber-600" />
              </a>
            </div>

            {/* Highlights Row */}
            <div className="w-full pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <span className="block text-2xl font-bold text-slate-900 font-cinzel tabular-nums">100+</span>
                <span className="text-xs text-slate-500 font-medium leading-tight">Years Legacy (1922)</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900 font-cinzel tabular-nums">14+</span>
                <span className="text-xs text-slate-500 font-medium leading-tight">UG & PG Programs</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900 font-cinzel tabular-nums">UoC</span>
                <span className="text-xs text-slate-500 font-medium leading-tight">Calicut University</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900 font-cinzel tabular-nums">100%</span>
                <span className="text-xs text-slate-500 font-medium leading-tight">Placement Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-100 group">
              <img
                src="/src/assets/images/jdt_campus_main_building_1794473281326.jpg"
                alt="JDT Islam College of Arts and Science Main Campus Building, Kozhikode"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Location Tag & Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Jamiath Hill, Marikunnu, Kozhikode</span>
                </div>
                <h3 className="text-lg font-bold font-cinzel text-white leading-snug">
                  Modern Academic & Technology Block
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  Housing smart lecture theatres, advanced computing labs, multimedia production studios, and departmental faculties.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 px-3.5 py-1.5 rounded-md shadow-md text-xs font-semibold flex items-center gap-1.5 border border-white/60">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Affiliated to University of Calicut</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
