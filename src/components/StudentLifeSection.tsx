import React from 'react';
import { STUDENT_CLUBS, TESTIMONIALS } from '../data/collegeData';
import { Rocket, Leaf, BookOpen, Heart, Film, Trophy, Quote, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
};

export const StudentLifeSection: React.FC = () => {
  return (
    <section id="student-life" className="py-16 sm:py-24 bg-[#FBFBFA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Campus Ecosystem & Activities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-900 tracking-tight leading-tight">
            Cultivating Creativity, Civic Action & Leadership.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Education at JDT extends far beyond lecture halls. From state-level hackathons and youth festivals to environmental conservation initiatives, students discover their voice and build lifelong camaraderie.
          </p>
        </div>

        {/* Clubs & Associations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 text-left">
          {STUDENT_CLUBS.map((club) => (
            <div
              key={club.name}
              className="p-6 bg-white rounded-2xl border border-stone-200 hover:border-amber-400/80 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                  {iconMap[club.icon] || <Sparkles className="w-5 h-5" />}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                  {club.focus}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-cinzel">
                  {club.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {club.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-xs text-slate-500 font-medium">
                Open to all enrolled students
              </div>
            </div>
          ))}
        </div>

        {/* Attributable Student Testimonials (Adhering to Social Proof & Quantitative Rigor) */}
        <div>
          <div className="mb-10 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
              Alumni Voices & Career Trajectories
            </span>
            <h3 className="text-2xl font-bold font-cinzel text-slate-900">
              Reflections from JDTICAS Graduates
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-stone-300 transition-colors"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-600/60 mb-4" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-amber-800 font-medium">{t.degree}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
