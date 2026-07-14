import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { Github, ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const MAX_TAGS = 4;

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenCount = project.tags.length - MAX_TAGS;

  return (
    <div className="card flex flex-col h-full bg-bg-card border-border-color">
      <div className="p-5 flex flex-col h-full">

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

        {/* Problem — clamped to 3 lines */}
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {hiddenCount > 0 && (
            <span className="tag">+{hiddenCount}</span>
          )}
        </div>

        {/* Footer */}
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

export default function Projects() {
  const { ref, inView } = useInView();
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-bg-primary text-text-primary">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <SectionHeading label="Projects" title="Selected work" />
          <div className="flex items-center gap-2 self-start mb-10 shrink-0">
            <a
              href="https://github.com/Alishaa-987"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={12} /> All repos
            </a>
            <Link
              to="/projects"
              className="btn-primary flex items-center gap-1.5"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Featured — 2 column grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-3 items-stretch">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              className="flex"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>

        {/* View all nudge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="flex items-center justify-center mt-8"
        >
          <Link
            to="/projects"
            className="flex items-center gap-2 text-xs text-text-muted hover:text-text-secondary font-mono transition-colors group border border-border-color/50 hover:border-accent/50 px-4 py-2.5 rounded-md"
          >
            <span>Viewing {featured.length} of {projects.length} projects</span>
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            <span className="text-accent">View all</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

