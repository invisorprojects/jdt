import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FacilitiesGallery } from './components/FacilitiesGallery';
import { StudentLifeSection } from './components/StudentLifeSection';
import { PlacementsSection } from './components/PlacementsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ContactMapSection } from './components/ContactMapSection';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { ProspectusModal } from './components/ProspectusModal';
import { Course, COLLEGE_INFO } from './data/collegeData';
import { Phone, GraduationCap } from 'lucide-react';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [preselectedCourseForApply, setPreselectedCourseForApply] = useState<Course | null>(null);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);

  const scrollToAdmissions = () => {
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCampus = () => {
    const el = document.getElementById('campus');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForCourse = (course: Course) => {
    setPreselectedCourseForApply(course);
    scrollToAdmissions();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation Bar */}
      <Navbar
        onOpenApply={scrollToAdmissions}
        onOpenProspectus={() => setIsProspectusOpen(true)}
      />

      {/* Main Single-Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenApply={scrollToAdmissions}
          onOpenTour={scrollToCampus}
        />

        {/* Institutional Heritage & Leadership */}
        <AboutSection />

        {/* Academic Degree Programs with Filters */}
        <ProgramsSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          onApplyForCourse={handleApplyForCourse}
        />

        {/* Campus Facilities & Labs Showcase */}
        <FacilitiesGallery
          onOpenApply={scrollToAdmissions}
        />

        {/* Student Life, Clubs & Testimonials */}
        <StudentLifeSection />

        {/* Placements & Industry Collaboration */}
        <PlacementsSection
          onOpenApply={scrollToAdmissions}
        />

        {/* Admissions Desk & Working Application Inquiry */}
        <AdmissionsSection
          preselectedCourse={preselectedCourseForApply}
          onOpenProspectus={() => setIsProspectusOpen(true)}
        />

        {/* Contact, Campus Map & FAQs */}
        <ContactMapSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onApply={handleApplyForCourse}
      />

      {/* Official Prospectus Modal */}
      <ProspectusModal
        isOpen={isProspectusOpen}
        onClose={() => setIsProspectusOpen(false)}
        onApply={() => {
          setIsProspectusOpen(false);
          scrollToAdmissions();
        }}
      />

      {/* Mobile Sticky Action Bar (strictly under 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`tel:${COLLEGE_INFO.phonePrimary}`}
          className="flex-1 py-2 px-3 bg-stone-100 text-slate-800 font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 border border-stone-200"
        >
          <Phone className="w-3.5 h-3.5 text-amber-700" />
          <span>Call Office</span>
        </a>
        <button
          onClick={scrollToAdmissions}
          className="flex-1 py-2 px-3 bg-slate-900 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
        >
          <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
          <span>Apply Online</span>
        </button>
      </div>
    </div>
  );
}
