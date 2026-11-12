import React, { useState, useEffect } from 'react';
import { CrestLogo } from './CrestLogo';
import { Phone, Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenProspectus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenProspectus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus & Labs', href: '#campus' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Operational Utility Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none text-[11px] sm:text-xs">
            <span className="font-semibold text-amber-400">Admissions Open {COLLEGE_INFO.admissionsOpenYear}</span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300 hidden md:inline">{COLLEGE_INFO.affiliation}</span>
            <span className="text-slate-600 hidden md:inline" aria-hidden="true">·</span>
            <span className="text-slate-400">JDT Islam Campus, Kozhikode</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs shrink-0">
            <a
              href={`tel:${COLLEGE_INFO.phonePrimary}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COLLEGE_INFO.phonePrimary}</span>
            </a>
            <span className="text-slate-700" aria-hidden="true">|</span>
            <button
              onClick={onOpenProspectus}
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
            >
              Prospectus PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark with crest */}
            <a href="#" className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md">
              <CrestLogo size={42} />
              <div className="flex flex-col text-left">
                <span className="text-base sm:text-lg font-bold tracking-tight font-cinzel text-slate-900 leading-none">
                  JDT ISLAM
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-amber-700 uppercase mt-0.5">
                  College of Arts & Science
                </span>
              </div>
            </a>

            {/* Zone 2: 4-6 clean single-line navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-amber-600/40"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action + mobile toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenApply}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0 group border border-slate-800"
              >
                <span>Apply Online</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[110px] bg-white border-b border-slate-200 shadow-xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Campus Navigation
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-amber-700 py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 text-white font-medium text-sm rounded-lg hover:bg-slate-800 shadow-sm cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Apply for Admission {COLLEGE_INFO.admissionsOpenYear}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProspectus();
                  }}
                  className="w-full py-2.5 px-4 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Download Prospectus PDF
                </button>
                <div className="pt-2 text-center text-xs text-slate-500">
                  Direct Helpline: <a href={`tel:${COLLEGE_INFO.phonePrimary}`} className="text-amber-700 font-semibold">{COLLEGE_INFO.phonePrimary}</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
