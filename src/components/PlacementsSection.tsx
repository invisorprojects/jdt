import React from 'react';
import { Briefcase, TrendingUp, Award, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface PlacementsSectionProps {
  onOpenApply: () => void;
}

export const PlacementsSection: React.FC<PlacementsSectionProps> = ({ onOpenApply }) => {
  const topSectors = [
    { title: "Information Technology & Software", roles: "Software Dev, UI/UX, QA, Web Architecture", companies: ["Cognizant", "TCS", "Wipro", "Infosys", "UST Global"] },
    { title: "Banking, Finance & Co-operatives", roles: "Financial Analyst, Audit Associate, Credit Officer", companies: ["HDFC Bank", "Federal Bank", "Kerala Bank", "EY", "South Indian Bank"] },
    { title: "Media, Film & Advertising Agencies", roles: "Motion Designer, Video Editor, Copywriter, Content Strategist", companies: ["Dentsu", "Malayalam Media Networks", "Ad Agencies", "Digital Studios"] },
    { title: "Biotech & Quality Assurance", roles: "Lab Analyst, Food Quality Executive, Production Trainee", companies: ["Milma", "Modern Food Industries", "Biotech Research Labs", "Pharma QA"] }
  ];

  return (
    <section id="placements" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Career Guidance & Placements
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-900 tracking-tight leading-tight">
            Bridging Academic Rigor with Industry Leadership.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            The dedicated Placement & Training Cell at JDTICAS runs systematic capacity-building modules starting from the second year, equipping students with aptitude, communication, and technical interview readiness.
          </p>
        </div>

        {/* 4 Key Placement Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          <div className="p-6 bg-[#FAF9F5] border border-stone-200 rounded-xl">
            <span className="block text-3xl font-bold font-cinzel text-slate-900 tabular-nums mb-1">100%</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-2">Placement Support</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Active campus recruitment drives, off-campus referrals, and continuous job alerts throughout graduation.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] border border-stone-200 rounded-xl">
            <span className="block text-3xl font-bold font-cinzel text-slate-900 tabular-nums mb-1">45+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-2">Recruiting Partners</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Corporate entities across IT, Banking, Media, Healthcare, and FMCG sectors visiting the campus.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] border border-stone-200 rounded-xl">
            <span className="block text-3xl font-bold font-cinzel text-slate-900 tabular-nums mb-1">6+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-2">Skill Bootcamps</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Workshops on Python, Tally ERP, Video Editing, Resume Building, and Group Discussion simulations.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] border border-stone-200 rounded-xl">
            <span className="block text-3xl font-bold font-cinzel text-slate-900 tabular-nums mb-1">1,200+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-2">Alumni Network</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Global alumni across the GCC countries, UK, Europe, and major Indian metropolitan hubs mentoring juniors.
            </p>
          </div>
        </div>

        {/* Sectors & Corporate Recruitment Pathways */}
        <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs mb-10">
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <div>
              <h3 className="text-base font-bold font-cinzel text-white">
                Major Employment & Industry Verticals
              </h3>
              <p className="text-xs text-slate-400">
                Where JDT Islam College of Arts and Science graduates forge impactful careers
              </p>
            </div>
            <button
              onClick={onOpenApply}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer self-start sm:self-auto"
            >
              Join Next Batch →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 bg-white">
            {topSectors.map((sector, i) => (
              <div key={i} className="p-6 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600" />
                  <h4 className="text-sm font-bold text-slate-900 font-cinzel">{sector.title}</h4>
                </div>
                <div className="text-xs text-slate-600 mb-3">
                  <strong className="text-slate-800">Typical Profiles:</strong> {sector.roles}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sector.companies.map((c, idx) => (
                    <span key={idx} className="text-xs text-slate-700 bg-stone-100 px-2 py-1 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
