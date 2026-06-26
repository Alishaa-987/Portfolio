import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-16">

        {/* Editorial header row: Name + Photo */}
        <div className="flex items-end justify-between gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Status pill */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B7065]" />
              <span className="section-label">Open to opportunities</span>
            </div>

            {/* Giant editorial name */}
            <h1 className="text-5xl sm:text-6xl xl:text-[80px] font-black text-[#D0D0D0] leading-[0.95] tracking-tight">
              Alisha
              <br />
              Fatima
            </h1>
          </motion.div>

          {/* Photo — grayscale to match monochrome theme */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="shrink-0 hidden sm:block"
          >
            <div className="w-[140px] sm:w-[160px] xl:w-[180px] aspect-[3/4] rounded-lg overflow-hidden border border-[#4A4A4A]">
              <img
                src="/images/WhatsApp_Image_2026-04-14_at_11.29.58_PM.jpeg"
                alt="Alisha Fatima"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-width rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="h-px bg-[#4A4A4A] mb-6"
        />

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-7"
        >
          <div className="flex flex-wrap items-center gap-5">
            <span className="text-xs text-[#6B7065] font-medium">Full-Stack Developer</span>
            <span className="text-[#4A4A4A]">·</span>
            <span className="text-xs text-[#6B7065]">CS @ UAF</span>
            <span className="text-[#4A4A4A]">·</span>
            <span className="text-xs text-[#6B7065]">Stanford Section Leader 2026</span>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-[#4A4A4A] font-mono">
            <MapPin size={10} /> Faisalabad, Pakistan
          </span>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.42 }}
          className="text-sm text-[#6B7065]/90 leading-[1.85] max-w-2xl mb-8 space-y-3"
        >
          <p>
            A Computer Science student with hands-on experience in software development and a passion for building
            innovative, user-focused digital products that solve real-world problems. Experienced in developing
            scalable applications using modern technologies, with growing expertise in Generative AI and emerging
            software solutions.
          </p>
          <p>
            Skilled at combining technical problem-solving, clean design, and product thinking to create practical,
            high-impact applications. Actively engaged in open-source collaboration and continuous learning, with a
            proven ability to adapt quickly, work effectively in team environments, and contribute to meaningful
            projects — driven by a commitment to leveraging technology to deliver value and improve user experiences.
          </p>
        </motion.div>

        {/* Second rule */}
        <div className="h-px bg-[#4A4A4A]/40 mb-8" />

        {/* CTA + Social row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/Resume copy.pdf" download className="btn-secondary"><Download size={12} /> Resume</a>

          <div className="flex gap-1.5 ml-2">
            {[
              { href: 'https://github.com/Alishaa-987', icon: <Github size={13} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/', icon: <Linkedin size={13} />, label: 'LinkedIn' },
              { href: 'mailto:alishafatima6768@gmail.com', icon: <Mail size={13} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label} className="icon-btn">
                {icon}
              </a>
            ))}
          </div>

          <span className="text-[10px] text-[#4A4A4A] font-mono hidden lg:block">alishafatima6768@gmail.com</span>
        </motion.div>

        {/* Mobile photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sm:hidden mt-8"
        >
          <div className="w-[120px] aspect-[3/4] rounded-lg overflow-hidden border border-[#4A4A4A]">
            <img
              src="/images/WhatsApp_Image_2026-04-14_at_11.29.58_PM.jpeg"
              alt="Alisha Fatima"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
