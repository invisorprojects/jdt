import React from 'react';
import { COLLEGE_INFO } from '../data/collegeData';
import { ShieldCheck, BookOpen, HeartHandshake, Compass, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Institutional Legacy & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-900 tracking-tight leading-tight">
            Rooted in a Century of Service, Inspiring Future Leaders.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Established in 2005, JDT Islam College of Arts and Science (JDTICAS) operates under the aegis of the legendary 
            JDT Islam Orphanage Committee—founded in 1922. For over a century, the society has dedicated itself to human 
            empowerment, education of marginalized youth, and high moral integrity.
          </p>
        </div>

        {/* 2-Column Split: Principal's Word & Core Institutional Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Principal's Desk Card */}
          <div className="lg:col-span-5 bg-[#FAF9F5] border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-cinzel font-bold text-lg">
                  TM
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{COLLEGE_INFO.principal}</h3>
                  <p className="text-xs font-medium text-amber-800 uppercase tracking-wide">Principal, JDTICAS</p>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed relative pl-4 border-l-2 border-amber-600 mb-6">
                "Our guiding philosophy is to blend rigorous intellectual training with compassionate character development. 
                At JDT Islam College of Arts and Science, education transcends textbooks—it prepares each student to face a rapidly 
                evolving world with technical mastery, creative clarity, and unwavering civic responsibility."
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under the academic supervision of the University of Calicut, our faculty members prioritize practical projects, 
                seminars, field research, and student-centric mentoring, helping undergraduates and postgraduates transition seamlessly into high-value careers.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>JDT Islam Educational Complex</span>
              <span className="font-semibold text-slate-700">Kozhikode, Kerala</span>
            </div>
          </div>

          {/* Institutional Values & Vision/Mission */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-300 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-cinzel text-slate-900 mb-2">Our Vision</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To be a premier institution that fosters lifelong learning, compassion, ethical leadership, and proficient knowledge, enabling graduates to flourish in personal and professional realms.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-300 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-cinzel text-slate-900 mb-2">Our Mission</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To provide interdisciplinary, job-oriented education that enhances critical thinking, nurturing creative minds to contribute responsibly to knowledge and society.
                </p>
              </div>
            </div>

            {/* Why Choose JDT List */}
            <div className="p-6 bg-slate-900 text-white rounded-xl shadow-md">
              <h4 className="text-base font-bold font-cinzel text-white mb-4 flex items-center gap-2">
                <span>The JDT Advantage</span>
                <span className="text-xs font-sans font-medium text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800/40">
                  University of Calicut
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Fully equipped Computer, Multimedia, and Applied Biotech laboratories</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Proactive IEDC startup incubation and Kerala Startup Mission linkages</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Inclusive educational welfare and scholarship guidance for deserving students</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Central research library with 18,000+ volumes and DELNET e-journal access</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
