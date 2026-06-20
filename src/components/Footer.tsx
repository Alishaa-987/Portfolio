import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-xs text-[#444] font-mono">
          © {new Date().getFullYear()} Alisha Fatima. All rights reserved.
        </p>

        <p className="text-xs text-[#333] font-mono hidden sm:block">
          Built with React · TypeScript · Framer Motion
        </p>

        <div className="flex gap-1.5">
          {[
            { href: 'https://github.com/Alishaa-987', icon: <Github size={14} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/', icon: <Linkedin size={14} />, label: 'LinkedIn' },
            { href: 'mailto:alishafatima6768@gmail.com', icon: <Mail size={14} />, label: 'Email' },
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
        </div>
      </div>
    </footer>
  );
}
