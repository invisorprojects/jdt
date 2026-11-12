import React, { useState } from 'react';
import { COURSES, COLLEGE_INFO, Course } from '../data/collegeData';
import { GraduationCap, FileText, CheckCircle, Phone, HelpCircle, ArrowRight, Clock, AlertCircle } from 'lucide-react';

interface AdmissionsSectionProps {
  preselectedCourse?: Course | null;
  onOpenProspectus: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  preselectedCourse,
  onOpenProspectus,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guardianName: '',
    qualifyingExam: 'Plus Two (+2 / HSE / CBSE)',
    percentageMarks: '',
    selectedCourseId: preselectedCourse ? preselectedCourse.id : 'bca',
    quotaType: 'General / Merit',
    district: 'Kozhikode',
    queries: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Sync if preselected course changes
  React.useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, selectedCourseId: preselectedCourse.id }));
    }
  }, [preselectedCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setFormError('Please enter your full name, phone number, and email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `JDT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(generatedRef);
    }, 600);
  };

  const selectedCourseObj = COURSES.find((c) => c.id === formData.selectedCourseId);

  return (
    <section id="admissions" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Admissions Desk {COLLEGE_INFO.admissionsOpenYear}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-900 tracking-tight leading-tight">
            Begin Your Academic Journey at JDTICAS.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Admissions for Undergraduate (UG) and Postgraduate (PG) programs are now underway under the University of Calicut norms. 
            Submit your pre-admission inquiry below for priority counseling, seat availability, and fee details.
          </p>
        </div>

        {/* 4-Step Process Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 text-left">
          <div className="p-5 bg-white border border-stone-200 rounded-xl">
            <span className="text-xs font-bold font-mono text-amber-800 block mb-1">STEP 01</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Select Program</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Browse our 14+ degree programs and verify eligibility guidelines.
            </p>
          </div>
          <div className="p-5 bg-white border border-stone-200 rounded-xl">
            <span className="text-xs font-bold font-mono text-amber-800 block mb-1">STEP 02</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Submit Inquiry</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fill out the preliminary registration or apply via Calicut University CAP.
            </p>
          </div>
          <div className="p-5 bg-white border border-stone-200 rounded-xl">
            <span className="text-xs font-bold font-mono text-amber-800 block mb-1">STEP 03</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Merit Verification</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Admission committee reviews academic marks & certificates.
            </p>
          </div>
          <div className="p-5 bg-white border border-stone-200 rounded-xl">
            <span className="text-xs font-bold font-mono text-amber-800 block mb-1">STEP 04</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Enrollment & Hostel</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fee confirmation, orientation day attendance, and hostel booking.
            </p>
          </div>
        </div>

        {/* Form & Assistance 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inquiry Application Form */}
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-stone-100 gap-3">
              <div>
                <h3 className="text-xl font-bold font-cinzel text-slate-900">
                  Online Admission Inquiry & Registration
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Academic Year {COLLEGE_INFO.admissionsOpenYear} · Direct Admission Office Review
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenProspectus}
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
              >
                <FileText className="w-4 h-4 text-amber-700" />
                <span>View Prospectus PDF</span>
              </button>
            </div>

            {submittedRef ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-cinzel text-emerald-950">
                  Inquiry Successfully Registered!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto">
                  Thank you, <strong className="font-semibold">{formData.fullName}</strong>. Your inquiry for{' '}
                  <strong className="font-semibold">{selectedCourseObj?.name}</strong> has been received by the JDT Islam College Admissions Desk.
                </p>
                <div className="p-3 bg-white border border-emerald-300 rounded-lg inline-block text-xs font-mono text-emerald-900">
                  Application Reference ID: <span className="font-bold">{submittedRef}</span>
                </div>
                <p className="text-xs text-slate-600">
                  Our academic counselors will reach you at <span className="font-semibold">{formData.phone}</span> or <span className="font-semibold">{formData.email}</span> within 24 working hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        guardianName: '',
                        qualifyingExam: 'Plus Two (+2 / HSE / CBSE)',
                        percentageMarks: '',
                        selectedCourseId: 'bca',
                        quotaType: 'General / Merit',
                        district: 'Kozhikode',
                        queries: '',
                      });
                    }}
                    className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul C. / Aisha Farhan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. K. Varma / K. Mohammed"
                      value={formData.guardianName}
                      onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                      className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Contact Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Qualifying Examination
                    </label>
                    <select
                      value={formData.qualifyingExam}
                      onChange={(e) => setFormData({ ...formData, qualifyingExam: e.target.value })}
                      className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none cursor-pointer"
                    >
                      <option value="Plus Two (+2 / HSE / CBSE)">Plus Two (+2 / HSE / CBSE)</option>
                      <option value="VHSE / Polytechnic">VHSE / Polytechnic Diploma</option>
                      <option value="Undergraduate Degree (for PG courses)">UG Degree (For M.Com / MA)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Marks / Percentage Obtained
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 88% or 1120/1200"
                      value={formData.percentageMarks}
                      onChange={(e) => setFormData({ ...formData, percentageMarks: e.target.value })}
                      className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      District / State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kozhikode, Malappuram, Wayanad"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Select Preferred Course *
                  </label>
                  <select
                    value={formData.selectedCourseId}
                    onChange={(e) => setFormData({ ...formData, selectedCourseId: e.target.value })}
                    className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none cursor-pointer font-medium"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.id}>
                        [{c.degree}] {c.name} - {c.duration}
                      </option>
                    ))}
                  </select>
                  {selectedCourseObj && (
                    <p className="text-[11px] text-amber-800 mt-1.5 font-medium">
                      Eligibility: {selectedCourseObj.eligibility}
                    </p>
                  )}
                </div>

                {/* Additional Queries */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Specific Inquiries (Hostel accommodation, transport, scholarship, etc.)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any additional details or questions for our counseling team..."
                    value={formData.queries}
                    onChange={(e) => setFormData({ ...formData, queries: e.target.value })}
                    className="w-full text-xs text-slate-800 bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:bg-white focus:border-amber-600 focus:outline-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-500">
                    * No registration fee required for preliminary online inquiry.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-800 active:scale-95 transition-all shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Registering...' : 'Submit Admission Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Admission Assistance & Helpline Card */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl shadow-md">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Admissions Cell
              </div>
              <h4 className="text-lg font-bold font-cinzel text-white mb-3">
                Need Direct Guidance?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Our academic counselors are available on campus and over the phone to assist you with program selection, eligibility verification, and quota allotment.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="block text-slate-400 text-[11px] uppercase">College Office Helpline</span>
                  <a href={`tel:${COLLEGE_INFO.phonePrimary}`} className="text-sm font-bold text-white hover:text-amber-300 transition-colors">
                    {COLLEGE_INFO.phonePrimary}
                  </a>
                </div>
                <div>
                  <span className="block text-slate-400 text-[11px] uppercase">Admissions In-Charge Mobile</span>
                  <a href={`tel:${COLLEGE_INFO.phoneMobile}`} className="text-sm font-bold text-white hover:text-amber-300 transition-colors">
                    {COLLEGE_INFO.phoneMobile}
                  </a>
                </div>
                <div>
                  <span className="block text-slate-400 text-[11px] uppercase">Official Admissions Email</span>
                  <a href={`mailto:${COLLEGE_INFO.email}`} className="text-xs font-medium text-amber-400 hover:underline">
                    {COLLEGE_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="block text-slate-400 text-[11px] uppercase">Campus Office Hours</span>
                  <span className="text-xs text-slate-300">{COLLEGE_INFO.officeHours}</span>
                </div>
              </div>
            </div>

            {/* Quota & Welfare Info */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Scholarships & Orphanage Welfare
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                In honoring the founding vision of JDT Islam (1922), special merit scholarships, fee waivers, and hostel accommodations are extended to orphans and underprivileged students.
              </p>
              <span className="text-[11px] text-amber-800 font-semibold block">
                Contact the Welfare Desk for details.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
