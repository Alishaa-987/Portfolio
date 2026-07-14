import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-color/35 py-8 px-6 bg-bg-primary text-text-primary">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-text-muted font-mono">© {new Date().getFullYear()} Alisha Fatima</p>
        <p className="text-[10px] text-text-muted/60 font-mono hidden sm:block">React · TypeScript · Framer Motion</p>
        <div className="flex gap-1.5">
          {[
            { href: 'https://github.com/Alishaa-987', icon: <Github size={13} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/', icon: <Linkedin size={13} />, label: 'LinkedIn' },
            { href: 'mailto:alishafatima6768@gmail.com', icon: <Mail size={13} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label} className="icon-btn text-text-secondary hover:text-text-primary hover:border-accent">{icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
