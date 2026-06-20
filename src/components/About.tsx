import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

/* Shared section heading — used across all sections */
export function SectionHeading({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="mb-14">
      <p className="section-label mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-black text-[#e2e2e2] leading-tight">{title}</h2>
    </div>
  );
}

const stats = [
  { value: '3+', label: 'Live Production Apps' },
  { value: '~2K', label: 'Stanford SL Pool (2026)' },
  { value: '2×', label: 'CS50 Puzzle Day 9/9' },
  { value: '29+', label: 'Public GitHub Repos' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-28" />
        <SectionHeading label="About" title="Who I am" />

        <div ref={ref} className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5 text-[#888] text-[15px] leading-[1.9]"
          >
            <p>
              <span className="text-[#e2e2e2] font-semibold">Alisha Fatima</span> is a Computer Science student at the University of Agriculture Faisalabad (Class of 2027) and a full-stack web developer with hands-on experience building scalable, production-deployed applications.
            </p>
            <p>
              Selected as one of <span className="text-[#ccc] font-medium">~2,000 Section Leaders globally</span> for Stanford University's Code in Place 2026 — a role earned through a competitive application process spanning thousands of candidates. She facilitated live Python sessions for students across multiple time zones.
            </p>
            <p>
              She solved all <span className="text-[#ccc] font-medium">9 out of 9 puzzles at Harvard CS50 Puzzle Day for two consecutive years</span> (2024 and 2025) and qualified for Meta Hacker Cup Round 1 (2025). At iCodeGuru, she trains students in Data Structures, Algorithms, and Python — a platform focused on preparing Pakistani developers for international tech careers.
            </p>
            <p>
              Currently deepening expertise in <span className="text-[#ccc] font-medium">Generative AI and LLM-powered application development</span>, building on top of a foundation in full-stack engineering with TypeScript, React, Node.js, and PostgreSQL.
            </p>

            {/* Currently section */}
            <div className="pt-4 border-t border-[#1f1f1f]">
              <p className="section-label mb-3">Currently exploring</p>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Application Dev'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.18 + i * 0.06 }}
                className="card card-hover p-6 text-center"
              >
                <p className="text-2xl font-black text-[#e2e2e2] mb-1.5">{s.value}</p>
                <p className="text-xs text-[#666] leading-snug font-mono">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
