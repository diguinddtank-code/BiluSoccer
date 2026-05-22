'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  User, Mail, Phone, Calendar, MapPin, Award, 
  Briefcase, CheckCircle, ShieldAlert
} from 'lucide-react';
import Image from 'next/image';

export default function CoachOnboardingPage() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-bisa-white focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors placeholder:text-white/30";
  const labelClasses = "block text-sm font-bold text-white/70 mb-2 uppercase tracking-wide";
  const iconClasses = "absolute left-5 top-4 w-5 h-5 text-white/40 group-focus-within:text-[#CCFF00] transition-colors";
  const radioLabelClasses = "flex items-center space-x-3 cursor-pointer text-white/80 hover:text-white";
  const checkboxLabelClasses = "flex items-center space-x-3 cursor-pointer text-white/80 hover:text-white";

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#060913] text-bisa-white flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#0a0f1d] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#CCFF00] to-green-400" />
          <div className="w-20 h-20 bg-[#CCFF00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#CCFF00]" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">{t('coach.form.success.title')}</h2>
          <p className="text-white/60 text-lg leading-relaxed">{t('coach.form.success.desc')}</p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#060913] text-bisa-white pb-24 selection:bg-[#CCFF00] selection:text-black">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[60vh] bg-gradient-to-b from-[#0a0f1d] via-[#060913] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CCFF00]/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* Header */}
      <header className="relative pt-32 md:pt-40 pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
             <div className="relative w-5 h-5 shrink-0">
               <Image src="https://i.imgur.com/mHzuZgK.png" alt="BISA" fill className="object-contain" unoptimized />
             </div>
             <span className="text-xs font-bold uppercase tracking-widest text-[#CCFF00]">Internal Workflow</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
            {t('coach.form.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-medium">
            {t('coach.form.subtitle')}
          </p>
        </motion.div>
      </header>

      {/* Form Container */}
      <section className="relative px-4 sm:px-6 lg:px-8 w-full max-w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto bg-[#0a0f1d] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-16">
            
            {/* Section 1: Personal Info */}
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-4 mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-wide text-[#CCFF00] flex items-center gap-3">
                  <User className="w-6 h-6" />
                  {t('coach.form.section.personal')}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className={labelClasses}>{t('coach.form.legalName')}</label>
                  <input type="text" required className={inputClasses} placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className={labelClasses}>{t('coach.form.prefName')}</label>
                  <input type="text" className={inputClasses} placeholder="Johnny" />
                </div>
                <div className="group">
                  <label className={labelClasses}>{t('coach.form.dob')}</label>
                  <input type="date" required className={`${inputClasses} [&::-webkit-calendar-picker-indicator]:invert`} />
                </div>
              </div>
            </div>

            {/* Section 2: Contact Info */}
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-4 mb-8 pt-6">
                <h3 className="text-2xl font-bold uppercase tracking-wide text-[#CCFF00] flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  {t('coach.form.section.contact')}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className={labelClasses}>{t('coach.form.email')}</label>
                  <div className="relative">
                    <Mail className={iconClasses} />
                    <input type="email" required className={`${inputClasses} pl-14`} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses}>{t('coach.form.phone')}</label>
                  <div className="relative">
                    <Phone className={iconClasses} />
                    <input type="tel" required className={`${inputClasses} pl-14`} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <label className={labelClasses}>{t('coach.form.address')}</label>
                  <div className="relative">
                    <MapPin className={iconClasses} />
                    <input type="text" required className={`${inputClasses} pl-14`} placeholder="Street, City, State/Province, Zip/Postal Code, Country" />
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <label className={labelClasses}>{t('coach.form.ssn')}</label>
                  <div className="relative">
                    <ShieldAlert className={iconClasses} />
                    <input type="text" required className={`${inputClasses} pl-14`} placeholder="XXX-XX-XXXX" />
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses}>{t('coach.form.emergencyName')}</label>
                  <input type="text" required className={inputClasses} placeholder="Jane Doe" />
                </div>
                
                <div className="group">
                  <label className={labelClasses}>{t('coach.form.emergencyRel')}</label>
                  <input type="text" required className={inputClasses} placeholder="Spouse" />
                </div>
                
                <div className="group md:col-span-2">
                  <label className={labelClasses}>{t('coach.form.emergencyPhone')}</label>
                  <div className="relative">
                    <Phone className={iconClasses} />
                    <input type="tel" required className={`${inputClasses} pl-14`} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Professional Details */}
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-4 mb-8 pt-6">
                <h3 className="text-2xl font-bold uppercase tracking-wide text-[#CCFF00] flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  {t('coach.form.section.professional')}
                </h3>
              </div>
              
              <div className="space-y-8">
                <div className="group">
                  <label className={labelClasses}>{t('coach.form.license')}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {['Grassroots (4v4, 7v7, 9v9, 11v11)', 'D License', 'C License', 'B License', 'A License', 'Pro License', 'None'].map(lic => (
                      <label key={lic} className={checkboxLabelClasses}>
                        <div className="relative flex items-center justify-center w-5 h-5 rounded border border-white/20 bg-white/5 shrink-0">
                          <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={lic} />
                          <CheckCircle className="w-3 h-3 text-[#CCFF00] opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm select-none">{lic}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses}>{t('coach.form.licenseExp')}</label>
                  <div className="relative max-w-sm">
                    <input type="date" className={`${inputClasses} [&::-webkit-calendar-picker-indicator]:invert`} />
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses}>{t('coach.form.cpr')}</label>
                  <div className="flex space-x-6 mt-4">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className={radioLabelClasses}>
                        <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5 shrink-0">
                          <input type="radio" name="cpr" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={opt} required />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm select-none">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses}>{t('coach.form.background')}</label>
                  <div className="flex flex-col space-y-4 mt-4">
                    {['Yes', 'No', 'Not Applicable/Will Complete Upon Hire'].map(opt => (
                      <label key={opt} className={radioLabelClasses}>
                        <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5 shrink-0">
                          <input type="radio" name="bgcheck" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={opt} required />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm select-none">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses}>{t('coach.form.experience')}</label>
                  <div className="relative max-w-xs">
                    <Briefcase className={iconClasses} />
                    <input type="number" required min="0" className={`${inputClasses} pl-14`} placeholder="e.g. 5" />
                  </div>
                </div>
                
                <div className="group w-full overflow-x-auto pb-4">
                  <label className={labelClasses}>{t('coach.form.familiarity')}</label>
                  <div className="flex items-center justify-between min-w-[300px] w-full max-w-md mt-6 px-4">
                    <span className="text-sm text-white/50 font-medium shrink-0">Beginner</span>
                    <div className="flex space-x-4 sm:space-x-8 px-4">
                       {[1,2,3,4,5].map(num => (
                         <label key={num} className="flex flex-col items-center space-y-2 cursor-pointer">
                           <span className="text-xs text-white/70">{num}</span>
                           <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-white/20 bg-white/5 shrink-0">
                             <input type="radio" name="familiarity" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={num} required />
                             <div className="w-3 h-3 rounded-full bg-[#CCFF00] opacity-0 peer-checked:opacity-100 transition-opacity" />
                           </div>
                         </label>
                       ))}
                    </div>
                    <span className="text-sm text-white/50 font-medium shrink-0">Expert</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 4: Preferences */}
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-4 mb-8 pt-6">
                <h3 className="text-2xl font-bold uppercase tracking-wide text-[#CCFF00] flex items-center gap-3">
                  <Briefcase className="w-6 h-6" />
                  {t('coach.form.section.preferences')}
                </h3>
              </div>
              
              <div className="space-y-8">
                
                <div className="group">
                  <label className={labelClasses}>{t('coach.form.ageGroups')}</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {['U6 (Ages 5-6)', 'U8 (Ages 7-8)', 'U10 (Ages 9-10)', 'U12 (Ages 11-12)', 'U14 (Ages 13-14)', 'High School (Ages 15-18)'].map(age => (
                      <label key={age} className={checkboxLabelClasses}>
                        <div className="relative flex items-center justify-center w-5 h-5 rounded border border-white/20 bg-white/5 shrink-0">
                          <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={age} />
                          <CheckCircle className="w-3 h-3 text-[#CCFF00] opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm select-none">{age}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="group w-full overflow-x-auto pb-4">
                  <label className={labelClasses}>{t('coach.form.availability')}</label>
                  <div className="mt-6 min-w-[500px]">
                    <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-white/10 text-white/50 text-xs sm:text-sm font-bold uppercase">
                      <div></div>
                      <div className="text-center px-2">{t('coach.form.availability.mornings')}</div>
                      <div className="text-center px-2">{t('coach.form.availability.afternoons')}</div>
                      <div className="text-center px-2">{t('coach.form.availability.evenings')}</div>
                    </div>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                       <div key={day} className="grid grid-cols-4 gap-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                          <div className="font-medium text-white pl-4 text-sm sm:text-base">{day}</div>
                          {['morning', 'afternoon', 'evening'].map(time => (
                             <div key={time} className="flex justify-center">
                               <label className="relative flex items-center justify-center w-6 h-6 rounded border border-white/20 bg-white/5 shrink-0 cursor-pointer hover:border-white/50 transition-colors">
                                 <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                                 <CheckCircle className="w-4 h-4 text-[#CCFF00] opacity-0 peer-checked:opacity-100 transition-opacity" />
                               </label>
                             </div>
                          ))}
                       </div>
                    ))}
                  </div>
                </div>

                <div className="group w-full overflow-x-auto pb-4">
                  <label className={labelClasses}>{t('coach.form.confidence')}</label>
                  <div className="flex items-center justify-between min-w-[300px] w-full max-w-md mt-6 px-4">
                    <span className="text-sm text-white/50 font-medium text-center w-20 shrink-0">Not confident</span>
                    <div className="flex space-x-4 sm:space-x-8 px-4">
                       {[1,2,3,4,5].map(num => (
                         <label key={`conf-${num}`} className="flex flex-col items-center space-y-2 cursor-pointer">
                           <span className="text-xs text-white/70">{num}</span>
                           <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-white/20 bg-white/5 shrink-0">
                             <input type="radio" name="confidence" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={num} required />
                             <div className="w-3 h-3 rounded-full bg-[#CCFF00] opacity-0 peer-checked:opacity-100 transition-opacity" />
                           </div>
                         </label>
                       ))}
                    </div>
                    <span className="text-sm text-white/50 font-medium text-center w-20 shrink-0">Highly confident</span>
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses}>{t('coach.form.philosophy')}</label>
                  <textarea 
                    required 
                    className={`${inputClasses} min-h-[150px] resize-y py-4`} 
                    placeholder="Describe your coaching philosophy here..." 
                  />
                </div>

              </div>
            </div>

            {/* Submit */}
            <div className="pt-8 border-t border-white/10 flex justify-end">
              <button 
                type="submit"
                className="w-full md:w-auto px-10 py-5 bg-[#CCFF00] text-black font-bold uppercase tracking-wider rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
              >
                {t('coach.form.submit')}
              </button>
            </div>

          </form>
        </motion.div>
      </section>
    </main>
  );
}
