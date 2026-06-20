import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin, ArrowDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 lg:gap-20 items-center">

          {/* Text content */}
          <div>
            {/* Status badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="section-label">Available for internships & collaboration</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-5xl sm:text-6xl xl:text-[72px] font-black text-[#e8e8e8] leading-[1.04] tracking-tight mb-5"
            >
              Alisha
              <br />
              Fatima
            </motion.h1>

            {/* Title */}
            <motion.p
              {...fadeUp(0.14)}
              className="text-lg sm:text-xl text-[#888] font-medium mb-6"
            >
              Full-Stack Developer &amp; CS Student at UAF
            </motion.p>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.18)}
              className="text-[#666] text-base leading-[1.8] max-w-[520px] mb-4"
            >
              I build production-grade web applications using the MERN stack and Next.js.
              Stanford Code in Place Section Leader 2026 — selected from thousands of
              global applicants to teach Python. Two-time Harvard CS50 Puzzle Day 9/9
              solver. Currently exploring AI application development.
            </motion.p>

            {/* Location */}
            <motion.div
              {...fadeUp(0.21)}
              className="flex items-center gap-1.5 text-[#555] text-sm mb-10"
            >
              <MapPin size={12} />
              Faisalabad, Pakistan
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-wrap gap-3 mb-9"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="/Resume.pdf" download className="btn-secondary">
                <Download size={14} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.28)} className="flex items-center gap-2">
              {[
                { href: 'https://github.com/Alishaa-987', icon: <Github size={16} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
                { href: 'mailto:alishafatima6768@gmail.com', icon: <Mail size={16} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="icon-btn"
                >
                  {icon}
                </a>
              ))}
              <span className="ml-2 text-[#444] text-xs font-mono">alishafatima6768@gmail.com</span>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[240px] sm:w-[280px] lg:w-[280px]">
              {/* Photo container — clean rounded rect, no gimmicks */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#191919]">
                <img
                  src="/images/WhatsApp_Image_2026-04-14_at_11.29.58_PM.jpeg"
                  alt="Alisha Fatima"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Subtle corner accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#242424] -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex items-center gap-3"
        >
          <div className="divider w-16" />
          <a
            href="#about"
            className="flex items-center gap-2 text-[#444] hover:text-[#888] transition-colors text-xs font-mono uppercase tracking-widest"
          >
            Scroll down <ArrowDown size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
