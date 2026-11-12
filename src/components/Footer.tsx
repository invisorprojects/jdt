import React from 'react';
import { CrestLogo } from './CrestLogo';
import { COLLEGE_INFO } from '../data/collegeData';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Brand & Crest Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <CrestLogo size={46} variant="dark" />
              <div>
                <span className="block text-lg font-bold font-cinzel text-white leading-none">
                  JDT ISLAM
                </span>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mt-1">
                  College of Arts & Science
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md pt-2">
              Established in 2005 under the visionary umbrella of the JDT Islam Orphanage & Educational Institutions (Estd. 1922). 
              Affiliated to the University of Calicut and recognized by the Government of Kerala.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Jamiath Hill, Marikunnu P.O., Kozhikode - 673012, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>0495 2730055 / +91 9447615660</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>jdticas@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Academic Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Key Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#programs" className="hover:text-white transition-colors">BCA (Computer Applications)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">B.Sc Computer Science</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">BA Multimedia & M.A. Multimedia</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">B.Com (Finance, CA, Co-operation)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">BBA (Business Administration)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">B.Sc Biotechnology & Food Technology</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">B.Sc Psychology</a></li>
            </ul>
          </div>

          {/* Statutory Cells & Committees */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Governance & Cells
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white cursor-pointer transition-colors">Anti-Ragging Cell</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Internal Complaints (ICC)</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Grievance Redressal</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">IEDC Startup Cell</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">NSS Unit</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Right to Information (RTI)</span></li>
            </ul>
          </div>

          {/* Sister Institutions & Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              JDT Group
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="https://www.jdtislam.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">JDT Islam Orphanage</a></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">JDT Polytechnic College</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">JDT College of Nursing</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">JDT College of Pharmacy</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">JDT College of Physiotherapy</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COLLEGE_INFO.name}. All rights reserved. Affiliated to University of Calicut.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
