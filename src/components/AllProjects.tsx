import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { SectionHeading } from './About';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI / Python' },
  { id: 'systems', label: 'Systems' },
] as const;

const MAX_TAGS = 4;

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenCount = project.tags.length - MAX_TAGS;

  return (
    <div className="card flex flex-col h-full bg-bg-card border-border-color">
      <div className="p-5 flex flex-col h-full">
        {project.featured && (
          <div className="mb-2">
            <span className="section-label" style={{ color: 'var(--accent)' }}>★ Featured</span>
          </div>
        )}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-sm font-bold text-text-primary leading-snug">{project.name}</h3>
          <div className="flex gap-1.5 shrink-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn text-text-secondary hover:text-text-primary hover:border-accent" aria-label="GitHub">
              <Github size={13} />
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-btn text-text-secondary hover:text-text-primary hover:border-accent" aria-label="Live demo">
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-3">
          {project.problem}
        </p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mb-3">
                <p className="section-label mb-1">Solution</p>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">{project.solution}</p>
              </div>
              <div className="mb-3">
                <p className="section-label mb-1">Outcome</p>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">{project.outcome}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1" />

        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {hiddenCount > 0 && (
            <span className="tag">+{hiddenCount}</span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border-color/35 pt-3">
          <span className="text-[10px] text-text-muted font-mono">{project.language}</span>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-[10px] text-text-muted hover:text-text-secondary font-mono transition-colors"
          >
            {expanded ? <><ChevronUp size={11} />Less</> : <><ChevronDown size={11} />More</>}
          </button>
        </div>
      </div>
    </div>
  );
}

interface AllProjectsProps {
  onBack: () => void;
}

export default function AllProjects({ onBack }: AllProjectsProps) {
  const [active, setActive] = useState<'all' | 'fullstack' | 'mobile' | 'ai' | 'systems'>('all');

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onBack}
          className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary font-mono transition-colors mb-12 group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to portfolio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading label="Projects" title={<>All work</>} />
            <a
              href="https://github.com/Alishaa-987"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary self-start mb-10 shrink-0"
            >
              <Github size={12} /> GitHub Profile
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border-color/35">
            <div className="text-xs text-text-secondary font-mono">
              <span className="text-text-primary font-bold text-sm">{projects.length}</span> total projects
            </div>
            <div className="text-xs text-text-secondary font-mono">
              <span className="text-text-primary font-bold text-sm">{projects.filter(p => p.featured).length}</span> featured
            </div>
            <div className="text-xs text-text-secondary font-mono">
              <span className="text-text-primary font-bold text-sm">{projects.filter(p => p.live).length}</span> live deployments
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id as typeof active)}
                className={`px-2.5 py-1.5 rounded text-[10px] font-mono transition-all border ${
                  active === cat.id
                    ? 'bg-text-primary text-bg-primary border-text-primary'
                    : 'border-border-color text-text-secondary hover:border-accent bg-transparent'
                }`}
              >
                {cat.label}
                <span className="ml-1.5 opacity-50">
                  ({active === cat.id
                    ? filtered.length
                    : cat.id === 'all'
                      ? projects.length
                      : projects.filter(p => p.category === cat.id).length
                  })
                </span>
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <p className="text-xs text-text-muted font-mono col-span-full py-6">
                  No projects in this category yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
