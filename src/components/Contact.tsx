import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

const contacts = [
  {
    icon: <Mail size={15} />,
    label: 'Email',
    display: 'alishafatima6768@gmail.com',
    href: 'mailto:alishafatima6768@gmail.com',
  },
  {
    icon: <Linkedin size={15} />,
    label: 'LinkedIn',
    display: 'linkedin.com/in/alisha-fatima-08416729a',
    href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/',
  },
  {
    icon: <Github size={15} />,
    label: 'GitHub',
    display: 'github.com/Alishaa-987',
    href: 'https://github.com/Alishaa-987',
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name: form.name, email: form.email, message: form.message }]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-28" />
        <div ref={ref} className="grid lg:grid-cols-5 gap-14">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <SectionHeading label="Contact" title={<>Let's work<br />together</>} />

            <p className="text-sm text-[#666] leading-[1.9] mb-8">
              I'm actively looking for internship opportunities, freelance projects, and open-source collaborations. If you have a project in mind or want to discuss my work, reach out directly.
            </p>

            {/* Contact links */}
            <div className="space-y-3 mb-8">
              {contacts.map(({ icon, label, display, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="icon-btn shrink-0 group-hover:border-[#555] group-hover:text-[#e2e2e2] transition-all">
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className="section-label">{label}</p>
                    <p className="text-sm text-[#888] group-hover:text-[#ccc] transition-colors truncate">{display}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume download */}
            <a href="/Resume.pdf" download className="btn-secondary w-full justify-center">
              <Download size={13} />
              Download Resume (PDF)
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="card h-full min-h-[320px] flex flex-col items-center justify-center gap-5 p-12 text-center">
                <CheckCircle2 size={44} className="text-[#5a9e67]" />
                <div>
                  <h3 className="text-lg font-bold text-[#e2e2e2] mb-2">Message received</h3>
                  <p className="text-sm text-[#777]">I'll respond within 24 hours.</p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs text-[#555] hover:text-[#888] transition-colors font-mono mt-2"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="card p-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Full Name', placeholder: 'Jane Smith', type: 'text' },
                    { name: 'email', label: 'Email', placeholder: 'jane@company.com', type: 'email' },
                  ].map(({ name, label, placeholder, type }) => (
                    <div key={name}>
                      <label className="section-label block mb-2">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={form[name as keyof typeof form]}
                        onChange={change}
                        placeholder={placeholder}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#242424] text-[#e2e2e2] placeholder-[#3d3d3d] text-sm focus:outline-none focus:border-[#444] transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={change}
                    placeholder="Tell me about your project or the opportunity..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#242424] text-[#e2e2e2] placeholder-[#3d3d3d] text-sm focus:outline-none focus:border-[#444] transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-[#c0574f] text-sm border border-[#3d1a18] bg-[#1a0f0e] rounded-lg px-4 py-3">
                    <AlertCircle size={14} className="shrink-0" />
                    Something went wrong. Email me at alishafatima6768@gmail.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#555] border-t-[#111] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
