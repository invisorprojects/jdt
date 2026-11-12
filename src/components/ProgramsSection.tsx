import React, { useState, useMemo } from 'react';
import { COURSES, Course } from '../data/collegeData';
import { Search, Sparkles, Clock, Users, ArrowRight, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectCourse: (course: Course) => void;
  onApplyForCourse: (course: Course) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectCourse,
  onApplyForCourse,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'computer' | 'commerce' | 'media' | 'science'>('all');
  const [activeDegree, setActiveDegree] = useState<'all' | 'UG' | 'PG'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [streamFilter, setStreamFilter] = useState<'all' | 'science' | 'commerce' | 'humanities'>('all');

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Category filter
      if (activeCategory !== 'all' && course.category !== activeCategory) {
        return false;
      }
      // Degree filter
      if (activeDegree !== 'all' && course.degree !== activeDegree) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = course.name.toLowerCase().includes(query);
        const matchDesc = course.description.toLowerCase().includes(query);
        const matchCareers = course.careerPaths.some((c) => c.toLowerCase().includes(query));
        const matchSubjects = course.keySubjects.some((s) => s.toLowerCase().includes(query));
        if (!matchName && !matchDesc && !matchCareers && !matchSubjects) {
          return false;
        }
      }
      // Stream helper filter
      if (streamFilter === 'science') {
        const canTake = ['bsc-cs', 'bca', 'bsc-biotech', 'bsc-food-tech', 'bsc-psychology', 'ba-multimedia', 'bba', 'bcom-finance', 'bcom-ca', 'ba-english', 'ba-travel'];
        if (!canTake.includes(course.id)) return false;
      } else if (streamFilter === 'commerce') {
        const canTake = ['bcom-finance', 'bcom-ca', 'bcom-coop', 'bba', 'bca', 'ba-multimedia', 'ba-english', 'ba-travel', 'bsc-psychology'];
        if (!canTake.includes(course.id)) return false;
      } else if (streamFilter === 'humanities') {
        const canTake = ['ba-multimedia', 'ba-english', 'ba-travel', 'bba', 'bsc-psychology', 'bcom-coop'];
        if (!canTake.includes(course.id)) return false;
      }

      return true;
    });
  }, [activeCategory, activeDegree, searchQuery, streamFilter]);

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#FBFBFA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Academic Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-900 tracking-tight leading-tight">
              Undergraduate & Postgraduate Degree Programs
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              University of Calicut affiliated syllabi combining deep conceptual mastery, laboratory practice, and high-growth industry competencies.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 text-xs text-slate-500 bg-white p-3 rounded-lg border border-stone-200 shadow-sm shrink-0">
            <div>
              <span className="block font-bold text-slate-900 text-base font-cinzel tabular-nums">14</span>
              <span>Total Degrees</span>
            </div>
            <div className="h-7 w-px bg-stone-200" />
            <div>
              <span className="block font-bold text-slate-900 text-base font-cinzel tabular-nums">UG & PG</span>
              <span>Calicut Affiliated</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm mb-10 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Programs ({COURSES.length})
              </button>
              <button
                onClick={() => setActiveCategory('computer')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === 'computer'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Computer & IT
              </button>
              <button
                onClick={() => setActiveCategory('commerce')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === 'commerce'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Commerce & Management
              </button>
              <button
                onClick={() => setActiveCategory('media')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === 'media'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Media & Humanities
              </button>
              <button
                onClick={() => setActiveCategory('science')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === 'science'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Applied Sciences
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by degree, career, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600 focus:bg-white transition-all"
              />
            </div>

          </div>

          {/* Secondary Sub-Filters: Degree Type & Stream Matcher */}
          <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* UG / PG Filter */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Level:</span>
              <div className="inline-flex rounded-md p-0.5 bg-stone-100">
                <button
                  onClick={() => setActiveDegree('all')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    activeDegree === 'all' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveDegree('UG')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    activeDegree === 'UG' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600'
                  }`}
                >
                  UG (Undergraduate)
                </button>
                <button
                  onClick={() => setActiveDegree('PG')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    activeDegree === 'PG' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600'
                  }`}
                >
                  PG (Postgraduate)
                </button>
              </div>
            </div>

            {/* Stream Matcher */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">+2 Stream Matcher:</span>
              <select
                value={streamFilter}
                onChange={(e) => setStreamFilter(e.target.value as any)}
                className="bg-stone-50 border border-stone-200 text-slate-700 py-1 px-2.5 rounded-md focus:outline-none focus:border-amber-600 text-xs cursor-pointer"
              >
                <option value="all">Show All Courses</option>
                <option value="science">Eligible for Science Stream</option>
                <option value="commerce">Eligible for Commerce Stream</option>
                <option value="humanities">Eligible for Humanities / Arts Stream</option>
              </select>
            </div>

          </div>

        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-stone-200">
            <p className="text-slate-600 font-medium text-sm">No courses found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveDegree('all');
                setSearchQuery('');
                setStreamFilter('all');
              }}
              className="mt-3 text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-stone-200 hover:border-amber-400/80 rounded-2xl p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Quiet unboxed metadata line */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-amber-800 uppercase tracking-wider">{course.degree}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {course.duration}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span>{course.seats} Seats</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug mb-3">
                    {course.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Key subjects / tracks */}
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Core Subjects & Labs
                    </span>
                    <div className="text-xs text-slate-700 leading-relaxed">
                      {course.keySubjects.slice(0, 3).join(' · ')}
                    </div>
                  </div>
                </div>

                {/* Card Action Footers */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="text-xs font-semibold text-slate-700 hover:text-amber-800 flex items-center gap-1 transition-colors cursor-pointer py-1"
                  >
                    <span>Syllabus & Info</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onApplyForCourse(course)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 rounded-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
