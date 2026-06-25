import { useState } from 'react';
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
    <div className="card flex flex-col h-full">
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-sm font-bold text-[#D0D0D0] leading-snug">{project.name}</h3>
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

        <p className="text-xs text-[#6B7065] leading-relaxed line-clamp-3 mb-3">
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
                <p className="text-xs text-[#6B7065] leading-relaxed line-clamp-3">{project.solution}</p>
              </div>
              <div className="mb-3">
                <p className="section-label mb-1">Outcome</p>
                <p className="text-xs text-[#6B7065] leading-relaxed line-clamp-3">{project.outcome}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1" />

        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {hiddenCount > 0 && <span className="tag">+{hiddenCount}</span>}
        </div>

        <div className="flex items-center justify-between border-t border-[#4A4A4A]/35 pt-3">
          <span className="text-[10px] text-[#4A4A4A] font-mono">{project.language}</span>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-[10px] text-[#4A4A4A] hover:text-[#6B7065] font-mono transition-colors"
          >
            {expanded ? <><ChevronUp size={11} /> Less</> : <><ChevronDown size={11} /> More</>}
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProjectsProps {
  onViewAll: () => void;
}

export default function Projects({ onViewAll }: ProjectsProps) {
  const { ref, inView } = useInView();
  // Show only first 3 featured projects on homepage
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <SectionHeading label="Projects" title="Selected work" />
          <a
            href="https://github.com/Alishaa-987"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start mb-10 shrink-0"
          >
            <Github size={12} /> All repos
          </a>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch mb-8">
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

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.25 }}
          className="flex justify-center"
        >
          <button
            onClick={onViewAll}
            className="btn-secondary flex items-center gap-2 px-6"
          >
            View all {projects.length} projects <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
