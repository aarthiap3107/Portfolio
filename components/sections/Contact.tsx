'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, Loader } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, HackerRankIcon } from '@/components/ui/SocialIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'apaarthi3107@gmail.com', href: 'mailto:apaarthi3107@gmail.com', color: '#7C3AED' },
  { icon: Phone, label: 'Phone', value: '7550205289', href: 'tel:7550205289', color: '#06B6D4' },
  { icon: GithubIcon, label: 'GitHub', value: 'https://github.com/aarthiap3107', href: 'https://github.com/aarthiap3107', color: '#F59E0B' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'https://www.linkedin.com/in/aarthi-arulprakasam', href: 'https://www.linkedin.com/in/aarthi-arulprakasam', color: '#4ADE80' },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formspree.io/f/xzdnegqq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (name: string) =>
    `w-full px-4 py-3.5 rounded-xl text-sm text-white transition-all duration-300 outline-none input-glass ${focused === name ? 'ring-2 ring-[#7C3AED]/30' : ''}`;

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124, 58, 237, 0.08) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.4), transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >

            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-2xl cursor-none transition-all duration-300 group"
                style={{
                  background: 'rgba(24, 24, 27, 0.5)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${color}30`;
                  el.style.background = `${color}08`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.background = 'rgba(24, 24, 27, 0.5)';
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#52525B' }}>{label}</div>
                  <div className="text-sm font-medium text-white group-hover:text-opacity-80">{value}</div>
                </div>
              </motion.a>
            ))}

            {/* Coding Profiles */}
            <div className="p-5 rounded-2xl" style={{ background: 'rgba(24,24,27,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#52525B' }}>Coding Profiles</p>
              <div className="flex gap-3">
                {[
                  { icon: LeetcodeIcon, label: 'LeetCode', href: 'https://leetcode.com/u/aarthi3107/', color: '#F59E0B' },
                  { icon: HackerRankIcon, label: 'HackerRank', href: 'https://www.hackerrank.com/profile/aarthzzz3107', color: '#4ADE80' },
                ].map(({ icon: Icon, label, href, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl transition-all duration-300"
                    style={{ background: `${color}10`, border: `1px solid ${color}20` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}50`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}20`; }}
                  >
                    <Icon size={20} style={{ color }} />
                    <span className="text-xs font-medium" style={{ color: '#A1A1AA' }}>{label}</span>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl"
              style={{
                background: 'rgba(24, 24, 27, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 40px rgba(0,0,0,0.3)',
              }}
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(74, 222, 128, 0.15)', border: '1px solid rgba(74, 222, 128, 0.3)' }}>
                      <CheckCircle size={32} style={{ color: '#4ADE80' }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Message Sent!
                    </h3>
                    <p className="text-sm" style={{ color: '#A1A1AA' }}>
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <>
                  {status === 'error' && (
                    <p className="text-sm mb-4 text-center" style={{ color: '#F87171' }}>
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium uppercase tracking-wider" style={{ color: '#71717A' }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="Enter your name"
                          className={inputClass('name')}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium uppercase tracking-wider" style={{ color: '#71717A' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="Enter your mail"
                          className={inputClass('email')}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium uppercase tracking-wider" style={{ color: '#71717A' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={5}
                        placeholder=""
                        className={`${inputClass('message')} resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm cursor-none relative overflow-hidden transition-all duration-300 disabled:opacity-70"
                      style={{
                        background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                        boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)', animation: 'shimmer 2s infinite' }} />

                      {status === 'loading' ? (
                        <>
                          <Loader size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
