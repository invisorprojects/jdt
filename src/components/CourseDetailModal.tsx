import React from 'react';
import { Course } from '../data/collegeData';
import { X, CheckCircle, Clock, Users, Award, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onApply,
}) => {
  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 my-8 text-left relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <span className="font-semibold text-amber-800 uppercase tracking-wider">{course.degree} Program</span>
          <span aria-hidden="true">·</span>
          <span>Affiliated to University of Calicut</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-slate-900 pr-8 mb-4">
          {course.name}
        </h3>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#FAF9F5] border border-stone-200 rounded-xl mb-6 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Duration</span>
            <span className="font-semibold text-slate-800">{course.duration}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Seat Intake</span>
            <span className="font-semibold text-slate-800">{course.seats} Seats (CAP + Mgt)</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-slate-400 block text-[11px]">Degree Level</span>
            <span className="font-semibold text-slate-800">CBCSS Semester Pattern</span>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-5 text-xs sm:text-sm text-slate-700">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Program Overview</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-700" />
              <span>Eligibility Criteria</span>
            </h4>
            <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg text-slate-800 leading-relaxed text-xs">
              {course.eligibility}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Key Subjects & Curriculum Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {course.keySubjects.map((sub, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-stone-50 rounded border border-stone-200">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="text-slate-800">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Career Trajectories & Higher Education
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.careerPaths.map((cp, idx) => (
                <span key={idx} className="bg-stone-100 text-slate-800 px-2.5 py-1 rounded text-xs">
                  {cp}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
              University Syllabus Framework
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {course.syllabusOverview}
            </p>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer text-center"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              onApply(course);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Inquire for {course.name.split('(')[0]}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </div>
  );
};
