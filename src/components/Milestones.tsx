import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const highlights = [
  {
    year: '2026',
    title: 'Stanford University Section Leader',
    body: 'Selected as one of roughly 2,000 Section Leaders worldwide out of thousands of applicants for Code in Place, a free Python course offered globally by Stanford. Facilitated weekly live sessions and provided one-on-one mentorship across time zones.',
  },
  {
    year: '2024 & 2025',
    title: 'Harvard CS50 Puzzle Day — 9/9 Perfect Score',
    body: 'Solved all 9 puzzles at Harvard CS50 Puzzle Day for two consecutive years, placing in the top tier of participants worldwide. Each puzzle tests core computer science fundamentals and logical reasoning under time pressure.',
  },
  {
    year: '2025',
    title: 'Meta Hacker Cup — Round 1 Qualifier',
    body: 'Qualified for Round 1 of Meta\'s global competitive programming contest, competing against thousands of programmers internationally with algorithmic problem-solving under strict time constraints.',
  },
  {
    year: '2026',
    title: 'GirlScript Summer of Code Contributor',
    body: 'Selected as a contributor for GSSoC \'25, one of the world\'s largest open-source programmes run by GirlScript Foundation. Actively contributing to open-source repositories and onboarding into the global developer community.',
  },
  {
    year: '2025 – Present',
    title: 'iCodeGuru Moderator and Trainer',
    body: 'Moderating community sessions and training Pakistani students in DSA, Python, and competitive programming at iCodeGuru, an organisation preparing students for international tech careers and fully funded US scholarship opportunities.',
  },
  {
    year: '2025',
    title: 'Dev Weekends Fellowship — Bronze Certificate',
    body: 'Completed an intensive fellowship covering full-stack MERN development and Data Structures and Algorithms across structured weekend sessions. Awarded Bronze Certificate for consistent performance and project delivery.',
  },
];

export default function Milestones() {
  const { ref, inView } = useInView();

  return (
    <section id="milestones" className="py-24 px-6 bg-bg-primary text-text-primary">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="Recognition" title="Milestones and recognition" />

        <div ref={ref} className="space-y-0 border-l border-border-color/30 pl-6 md:pl-8 max-w-3xl">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="py-4 border-b border-border-color/35 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] text-text-muted font-mono">{h.year}</span>
              </div>
              <p className="text-xs font-bold text-text-primary mb-1">{h.title}</p>
              <p className="text-[11px] text-text-secondary leading-relaxed">{h.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
