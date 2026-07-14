import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onLogoClick?: () => void;
}

export default function Navbar({ theme, toggleTheme, onLogoClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [open]);

  const NavLink = ({ label, href, mobile }: { label: string; href: string; mobile?: boolean }) => {
    const isExternal = href.startsWith('/#');
    const isActive =
      href === '/projects'
        ? location.pathname === '/projects'
        : href === '/articles'
        ? location.pathname === '/articles'
        : false;

    const cls = mobile
      ? `block px-4 py-3 text-xs rounded tracking-wide transition-all ${
          isActive
            ? 'text-text-primary bg-bg-card font-semibold'
            : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
        }`
      : `px-4 py-2 text-xs rounded transition-all tracking-wide ${
          isActive
            ? 'text-text-primary bg-bg-card font-semibold'
            : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
        }`;

    if (isExternal && isHome) {
      return (
        <a href={href.replace('/', '')} className={cls}>
          {label}
        </a>
      );
    }

    if (isExternal) {
      return <a href={href} className={cls}>{label}</a>;
    }

    return <Link to={href} className={cls}>{label}</Link>;
  };

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-secondary/90 backdrop-blur-md border-b border-border-color/60' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => onLogoClick?.()}
          className="text-xs font-semibold text-accent hover:text-text-primary transition-colors tracking-widest uppercase animate-pulse-subtle"
        >
          Alisha Fatima
        </Link>

        <ul className="hidden md:flex items-center">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink label={l.label} href={l.href} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="icon-btn text-text-secondary hover:text-text-primary hover:border-accent"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>

          {/* Resume */}
          <a href="/Alisha_Fatima_Resume.pdf" download className="hidden md:inline-flex btn-primary text-xs">
            Resume
          </a>

          {/* Hamburger Menu */}
          <button onClick={() => setOpen(!open)} className="md:hidden icon-btn text-text-secondary hover:text-text-primary" aria-label="Menu">
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary border-b border-border-color/60"
          >
            <ul className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <NavLink label={l.label} href={l.href} mobile />
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

