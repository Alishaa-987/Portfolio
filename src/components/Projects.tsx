import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack Web' },
  { id: 'ai', label: 'AI / Python' },
  { id: 'systems', label: 'Systems / CS' },
] as const;

const langBadge: Record<string, string> = {
  TypeScript: 'bg-[#0d1b2e] border-[#1a3558] text-[#5a8fc7]',
  JavaScript: 'bg-[#1f1d0a] border-[#3a360f] text-[#9a8b3a]',
  Python: 'bg-[#0d1f10] border-[#1a3d1e] text-[#5a9e67]',
  MATLAB: 'bg-[#1f130a] border-[#3a2510] text-[#9e6e3a]',
};

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="card card-hover overflow-hidden"
    >
      {/* Top strip — colored line per language (very subtle) */}
      <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-[#e2e2e2]">{project.name}</h3>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${langBadge[project.language] ?? 'bg-[#1e1e1e] border-[#2a2a2a] text-[#777]'}`}>
              {project.language}
            </span>
          </div>
          <div className="flex gap-1.5 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub repository"
            >
              <Github size={14} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="Live demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Problem statement */}
        <div className="mb-4">
          <p className="section-label mb-1.5">Problem</p>
          <p className="text-sm text-[#777] leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <p className="section-label mb-1.5">What I built</p>
          <p className="text-sm text-[#aaa] leading-relaxed">{project.solution}</p>
        </div>

        {/* Expand/collapse for outcome + tags */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mb-4 pt-1">
                <p className="section-label mb-1.5">Outcome &amp; Evidence</p>
                <p className="text-sm text-[#999] leading-relaxed">{project.outcome}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-4">
          <div className="flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#666] hover:text-[#e2e2e2] transition-colors font-mono flex items-center gap-1"
              >
                Live demo <ExternalLink size={10} />
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-xs text-[#555] hover:text-[#999] transition-colors font-mono"
          >
            {expanded ? (
              <><ChevronUp size={12} /> Less</>
            ) : (
              <><ChevronDown size={12} /> Outcome</>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<'all' | 'fullstack' | 'ai' | 'systems'>('all');
  const { ref, inView } = useInView();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const filteredOthers = active === 'all'
    ? others
    : others.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-28" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <SectionHeading label="Projects" title="Selected work" />
          <a
            href="https://github.com/Alishaa-987"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mb-14 shrink-0 self-start sm:self-auto"
          >
            <Github size={13} />
            All repos
          </a>
        </div>

        {/* Featured grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-4 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="section-label mr-2">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id as typeof active)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-150 border ${
                active === cat.id
                  ? 'bg-[#e2e2e2] text-[#111] border-[#e2e2e2]'
                  : 'border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-[#ccc] bg-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Other projects */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredOthers.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
