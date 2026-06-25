import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { View } from '../App';

const homeLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onNav: (v: View) => void;
  activeView: View;
}

export default function Navbar({ onNav, activeView }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1C1C1C]/95 backdrop-blur border-b border-[#4A4A4A]/40' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => onNav('home')}
          className="text-xs font-semibold text-[#6B7065] hover:text-[#D0D0D0] transition-colors tracking-widest uppercase"
        >
          Alisha Fatima
        </button>

        {activeView === 'home' ? (
          <ul className="hidden md:flex items-center">
            {homeLinks.map((l) => (
              <li key={l.href}>
                {l.label === 'Articles' ? (
                  <button
                    onClick={() => onNav('articles')}
                    className="px-4 py-2 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 transition-all tracking-wide"
                  >
                    {l.label}
                  </button>
                ) : l.label === 'Projects' ? (
                  <button
                    onClick={() => onNav('projects')}
                    className="px-4 py-2 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 transition-all tracking-wide"
                  >
                    {l.label}
                  </button>
                ) : (
                  <a href={l.href} className="px-4 py-2 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 transition-all tracking-wide">
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="hidden md:flex items-center">
            <li>
              <button
                onClick={() => onNav('home')}
                className="px-4 py-2 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 transition-all tracking-wide"
              >
                ← Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onNav('projects')}
                className={`px-4 py-2 text-xs rounded transition-all tracking-wide ${activeView === 'projects' ? 'text-[#D0D0D0]' : 'text-[#6B7065] hover:text-[#D0D0D0] hover:bg-[#2A2A2A]/60'}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => onNav('articles')}
                className={`px-4 py-2 text-xs rounded transition-all tracking-wide ${activeView === 'articles' ? 'text-[#D0D0D0]' : 'text-[#6B7065] hover:text-[#D0D0D0] hover:bg-[#2A2A2A]/60'}`}
              >
                Articles
              </button>
            </li>
          </ul>
        )}

        <a href="/Alisha_Fatima_Resume.pdf" download className="hidden md:inline-flex btn-primary text-xs">
          Resume
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden icon-btn" aria-label="Menu">
          {open ? <X size={15} /> : <Menu size={15} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1C1C1C] border-b border-[#4A4A4A]/40"
          >
            <ul className="px-6 py-4 space-y-1">
              {activeView !== 'home' && (
                <li>
                  <button onClick={() => { onNav('home'); setOpen(false); }} className="block w-full text-left px-4 py-3 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 tracking-wide">
                    ← Home
                  </button>
                </li>
              )}
              {activeView === 'home' && homeLinks.map((l) => (
                <li key={l.label}>
                  {l.label === 'Articles' ? (
                    <button onClick={() => { onNav('articles'); setOpen(false); }} className="block w-full text-left px-4 py-3 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 tracking-wide">
                      Articles
                    </button>
                  ) : l.label === 'Projects' ? (
                    <button onClick={() => { onNav('projects'); setOpen(false); }} className="block w-full text-left px-4 py-3 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 tracking-wide">
                      Projects
                    </button>
                  ) : (
                    <a href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-xs text-[#6B7065] hover:text-[#D0D0D0] rounded hover:bg-[#2A2A2A]/60 tracking-wide">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <a href="/Alisha_Fatima_Resume.pdf" download className="btn-primary w-full justify-center text-xs">Resume</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
