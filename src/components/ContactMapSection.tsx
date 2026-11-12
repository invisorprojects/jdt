import React, { useState } from 'react';
import { COLLEGE_INFO, FAQS } from '../data/collegeData';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Navigation, Train, Plane, Bus } from 'lucide-react';

export const ContactMapSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Location & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-900 tracking-tight leading-tight">
            Connect With Our Campus in Kozhikode.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We welcome prospective students, parents, and academic delegates to experience the serenity and high-tech infrastructure at JDT Islam College of Arts and Science.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20 text-left">
          
          {/* Left Column: Direct Address & Travel Distance */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-2">
                  Campus Address
                </span>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-cinzel">
                      {COLLEGE_INFO.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      JDT Islam Educational Complex, Jamiath Hill, Marikunnu P.O., Kozhikode (Calicut) - 673012, Kerala, India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/80 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <span className="text-slate-500 text-xs block">Telephone</span>
                    <a href={`tel:${COLLEGE_INFO.phonePrimary}`} className="font-semibold text-slate-900 hover:text-amber-800">
                      {COLLEGE_INFO.phonePrimary} / {COLLEGE_INFO.phoneMobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <span className="text-slate-500 text-xs block">Official Email</span>
                    <a href={`mailto:${COLLEGE_INFO.email}`} className="font-semibold text-slate-900 hover:text-amber-800">
                      {COLLEGE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <span className="text-slate-500 text-xs block">Administrative Working Hours</span>
                    <span className="font-medium text-slate-800">{COLLEGE_INFO.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Transit Directions */}
              <div className="pt-4 border-t border-stone-200/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                  Connectivity & Transit
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                    <Train className="w-4 h-4 text-slate-700 mx-auto mb-1" />
                    <span className="block font-bold text-slate-900">7 km</span>
                    <span className="text-[10px] text-slate-500">Calicut Railway</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                    <Bus className="w-4 h-4 text-slate-700 mx-auto mb-1" />
                    <span className="block font-bold text-slate-900">6.5 km</span>
                    <span className="text-[10px] text-slate-500">KSRTC Stand</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                    <Plane className="w-4 h-4 text-slate-700 mx-auto mb-1" />
                    <span className="block font-bold text-slate-900">32 km</span>
                    <span className="text-[10px] text-slate-500">CCJ Airport</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Location Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-200 shadow-sm min-h-[380px] flex flex-col bg-stone-100">
            <iframe
              title="JDT Islam College of Arts and Science Campus Map Location"
              src="https://maps.google.com/maps?q=JDT+Islam+College+of+Arts+and+Science+Kozhikode+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full flex-1 border-0 min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-slate-900 text-white p-3 px-4 text-xs flex items-center justify-between">
              <span className="text-slate-300">GPS Coordinates: Jamiath Hill, Marikunnu, Calicut</span>
              <a
                href="https://maps.google.com/?q=JDT+Islam+College+of+Arts+and+Science+Kozhikode"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
              Common Inquiries
            </span>
            <h3 className="text-2xl font-bold font-cinzel text-slate-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 hover:text-amber-800 transition-colors cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-amber-800">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded bg-stone-100 text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-8 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
