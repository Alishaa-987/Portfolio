import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { projects, type Project } from '../data/projects';

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
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-text-primary leading-snug">{project.name}</h3>
            {project.featured && (
              <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Featured</span>
            )}
          </div>
          <div className="flex gap-1.5 shrink-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <Github size={13} />
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live demo">
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-3">{project.problem}</p>

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
          {visibleTags.map((t) => <span key={t} className="tag">{t}</span>)}
          {hiddenCount > 0 && <span className="tag">+{hiddenCount}</span>}
        </div>

        <div className="flex items-center justify-between border-t border-border-color/35 pt-3">
          <span className="text-[10px] text-text-muted font-mono">{project.language}</span>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-[10px] text-text-muted hover:text-text-secondary font-mono transition-colors"
          >
            {expanded ? <><ChevronUp size={11} /> Less</> : <><ChevronDown size={11} /> More</>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState<'all' | 'fullstack' | 'mobile' | 'ai' | 'systems'>('all');

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary font-mono transition-colors mb-12"
        >
          <ArrowLeft size={12} /> Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="section-label mb-2">Projects</p>
          <h1 className="text-3xl sm:text-4xl font-black text-text-primary leading-tight">All projects</h1>
          <p className="text-sm text-text-secondary mt-3 leading-relaxed max-w-xl">
            A full catalogue of my work — from production-deployed web platforms to mobile apps and AI experiments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id as typeof active)}
              className={`px-2.5 py-1.5 rounded text-[10px] font-mono transition-all border ${
                active === cat.id
                  ? 'bg-text-primary text-bg-primary border-text-primary font-semibold'
                  : 'border-border-color text-text-secondary hover:border-text-primary bg-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
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

        {/* GitHub CTA */}
        <div className="mt-16 pt-8 border-t border-border-color/30">
          <p className="text-xs text-text-secondary mb-3">More experiments and work in progress on GitHub.</p>
          <a
            href="https://github.com/Alishaa-987"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={12} /> View GitHub profile
          </a>
        </div>
      </div>
    </div>
  );
}
