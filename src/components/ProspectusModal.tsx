import React from 'react';
import { CrestLogo } from './CrestLogo';
import { COLLEGE_INFO, COURSES } from '../data/collegeData';
import { X, Printer, Download, Check, MapPin, Phone, Mail } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-stone-300 my-6 text-left relative max-h-[92vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Hidden on Print) */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6 print:hidden">
          <div className="text-xs text-slate-500 font-medium">
            Academic Information Document · Year {COLLEGE_INFO.admissionsOpenYear}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-stone-100 cursor-pointer"
              aria-label="Close prospectus"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Prospectus Content */}
        <div className="space-y-8">
          
          {/* Header Lockup */}
          <div className="text-center pb-6 border-b-2 border-slate-900">
            <div className="flex justify-center mb-3">
              <CrestLogo size={64} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-slate-900 tracking-tight">
              {COLLEGE_INFO.name}
            </h2>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mt-1">
              Affiliated to University of Calicut · Approved by Govt. of Kerala
            </p>
            <p className="text-xs text-slate-500 mt-1 max-w-xl mx-auto">
              Run by JDT Islam Orphanage & Educational Institutions (Established 1922)
              <br />
              {COLLEGE_INFO.address}
            </p>
            <div className="mt-3 inline-block bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded">
              Information Brochure & Prospectus {COLLEGE_INFO.admissionsOpenYear}
            </div>
          </div>

          {/* Institutional Background */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 font-cinzel">
              1. Institutional Heritage
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              JDT Islam Orphanage & Educational Institutions, established in 1922, has been pioneering educational and humanitarian welfare in Kerala for over a century. 
              The JDT Islam College of Arts and Science (JDTICAS), established in 2005, continues this profound commitment by offering value-based, job-oriented education to students from all segments of society with state-of-the-art facilities and dedicated academic mentors.
            </p>
          </div>

          {/* Academic Degrees Offered Table */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 font-cinzel">
              2. Programs of Study Offered
            </h3>
            <div className="border border-stone-200 rounded-lg overflow-hidden text-xs">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-slate-800 font-semibold border-b border-stone-200 text-left">
                    <th className="p-2.5">Program</th>
                    <th className="p-2.5">Degree</th>
                    <th className="p-2.5">Duration</th>
                    <th className="p-2.5">Sanctioned Seats</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {COURSES.map((c) => (
                    <tr key={c.id} className="hover:bg-stone-50">
                      <td className="p-2.5 font-medium text-slate-900">{c.name}</td>
                      <td className="p-2.5 text-slate-600">{c.degree}</td>
                      <td className="p-2.5 text-slate-600">{c.duration}</td>
                      <td className="p-2.5 text-slate-600 tabular-nums">{c.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Campus Amenities & Key Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 font-cinzel">
              3. Campus Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Central Library with 18,000+ volumes and DELNET e-consortium</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Advanced Computer Laboratories with high-speed fiber internet</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Specialized Chroma Studio, Audio Post-Production & Animation Labs</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Biotechnology, Food Technology & Psychology analytical labs</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Hostel facilities for boys and girls on campus</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Active IEDC startup incubation cell and campus placement training</span>
              </div>
            </div>
          </div>

          {/* Admission & Contact Guidelines */}
          <div className="pt-4 border-t border-stone-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 font-cinzel">
              4. Admissions & Inquiries
            </h3>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Admissions are conducted in accordance with University of Calicut guidelines for both Centralized Allotment Process (CAP) and Institutional Management Quota seats. 
              Deserving candidates and orphan students are provided special welfare concessions.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-slate-700 flex flex-wrap gap-x-6 gap-y-2">
              <span><strong>Phone:</strong> {COLLEGE_INFO.phonePrimary} / {COLLEGE_INFO.phoneMobile}</span>
              <span><strong>Email:</strong> {COLLEGE_INFO.email}</span>
              <span><strong>Location:</strong> Jamiath Hill, Kozhikode</span>
            </div>
          </div>

        </div>

        {/* Action Footers (Hidden on Print) */}
        <div className="mt-8 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close Prospectus
          </button>

          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
          >
            Proceed to Admission Inquiry →
          </button>
        </div>

      </div>
    </div>
  );
};
