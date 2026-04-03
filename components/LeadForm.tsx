'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LeadForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    playerName: '',
    birthYear: '',
    program: 'Not Sure',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Create the formatted HTML string for n8n/Gmail
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0a192f; padding: 20px; text-align: center;">
          <h2 style="color: #D4AF37; margin: 0;">New Website Lead - Bilu Soccer Academy</h2>
        </div>
        <div style="padding: 20px; background-color: #ffffff; color: #333333;">
          <p style="margin-bottom: 10px;"><strong>Parent/Guardian Name:</strong> ${formData.parentName}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${formData.email}</p>
          <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${formData.phone}</p>
          <p style="margin-bottom: 10px;"><strong>Player Name:</strong> ${formData.playerName}</p>
          <p style="margin-bottom: 10px;"><strong>Birth Year:</strong> ${formData.birthYear}</p>
          <p style="margin-bottom: 10px;"><strong>Program of Interest:</strong> ${formData.program}</p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 4px; border: 1px solid #eee;">${formData.message}</p>
          </div>
        </div>
        <div style="background-color: #f3f4f6; padding: 10px 20px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>Submitted from: ${window.location.href}</p>
        </div>
      </div>
    `;

    try {
      const response = await fetch('https://n8n.infra-remakingautomacoes.cloud/webhook-test/formsite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          html: htmlContent,
          data: formData,
          sourceUrl: window.location.href
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          playerName: '',
          birthYear: '',
          program: 'Not Sure',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-bisa-navy relative overflow-hidden" id="lead-form">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bisa-gold to-transparent opacity-50"></div>
      <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-bisa-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-bisa-white uppercase tracking-tighter mb-4">
            {t('form.title') || 'Get in Touch'}
          </h2>
          <p className="text-lg text-bisa-white/70 max-w-2xl mx-auto">
            {t('form.subtitle') || 'Interested in joining Bilu Soccer Academy? Fill out the form below and our team will get back to you.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bisa-navy-dark border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
              </motion.div>
              <h3 className="text-3xl font-black text-bisa-white uppercase tracking-tight mb-2">
                {t('form.success.title') || 'Message Sent!'}
              </h3>
              <p className="text-bisa-white/70 text-lg">
                {t('form.success.message') || 'Thank you for reaching out. We will contact you shortly.'}
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-bisa-gold font-bold hover:text-white transition-colors"
              >
                {t('form.success.button') || 'Send another message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div className="space-y-2">
                  <label htmlFor="parentName" className="block text-sm font-bold text-bisa-white/80 uppercase tracking-wider">
                    {t('form.parentName') || 'Parent/Guardian Name'} *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-bisa-white focus:outline-none focus:border-bisa-gold focus:ring-1 focus:ring-bisa-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-bisa-white/80 uppercase tracking-wider">
                    {t('form.email') || 'Email Address'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-bisa-white focus:outline-none focus:border-bisa-gold focus:ring-1 focus:ring-bisa-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-bisa-white/80 uppercase tracking-wider">
                    {t('form.phone') || 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-bisa-white focus:outline-none focus:border-bisa-gold focus:ring-1 focus:ring-bisa-gold transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Player Name */}
                <div className="space-y-2">
                  <label htmlFor="playerName" className="block text-sm font-bold text-bisa-white/80 uppercase tracking-wider">
                    {t('form.playerName') || 'Player Name'}
                  </label>
                  <input
                    type="text"
                    id="playerName"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-bisa-white focus:outline-none focus:border-bisa-gold focus:ring-1 focus:ring-bisa-gold transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Birth Year */}
                <div className="space-y-2">
                  <label htmlFor="birthYear" className="block text-sm font-bold text-bisa-white/80 uppercase tracking-wider">
                    {t('form.birthYear') || 'Player Birth Year'}
                  </label>
                  <input
                    type="text"
                    id="birthYear"
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-bisa-white focus:outline-none focus:border-bisa-gold focus:ring-1 focus:ring-bisa-gold transition-colors"
                    placeholder="e.g. 2012"
                  />
                </div>

                {/* Program */}
                <div className="space-y-2">
                  <label htmlFor="program" className="block text-sm font-bold text-bisa-white/80 uppercase tracking-wider">
                    {t('form.program') || 'Program of Interest'}
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-bisa-white focus:outline-none focus:border-bisa-gold focus:ring-1 focus:ring-bisa-gold transition-colors appearance-none"
                  >
                    <option value="Not Sure" className="bg-bisa-navy-dark">{t('form.program.notSure') || 'Not Sure Yet'}</option>
                    <option value="Junior Academy" className="bg-bisa-navy-dark">Junior Academy</option>
                    <option value="Select" className="bg-bisa-navy-dark">Select</option>
                    <option value="Elite" className="bg-bisa-navy-dark">Elite</option>
                    <option value="Futsal" className="bg-bisa-navy-dark">Futsal</option>
                    <option value="Summer Camps" className="bg-bisa-navy-dark">Summer Camps</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-bisa-white/80 uppercase tracking-wider">
                  {t('form.message') || 'Message / Questions'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-bisa-white focus:outline-none focus:border-bisa-gold focus:ring-1 focus:ring-bisa-gold transition-colors resize-none"
                  placeholder={t('form.messagePlaceholder') || 'How can we help you?'}
                ></textarea>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{t('form.error') || 'There was an error sending your message. Please try again later.'}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-bisa-gold text-bisa-navy px-8 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-bisa-navy border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    {t('form.submit') || 'Send Message'}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
