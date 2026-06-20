import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const achievements = [
  {
    title: 'Stanford Code in Place — Section Leader',
    org: 'Stanford University',
    year: '2026',
    detail: 'Selected from thousands of global applicants for a competitive teaching role within one of the world\'s largest free CS education initiatives. Approximately 2,000 leaders selected.',
    tags: ['Teaching', 'Python', 'Leadership', 'Global Selection'],
  },
  {
    title: 'CS50 Puzzle Day — 9/9 Solver (Two Consecutive Years)',
    org: 'Harvard University',
    year: '2024 & 2025',
    detail: 'Solved all 9 out of 9 puzzles at Harvard\'s CS50 Puzzle Day competition for two consecutive years, demonstrating strong logical reasoning and core CS fundamentals.',
    tags: ['Problem Solving', 'CS Fundamentals', 'Logic'],
  },
  {
    title: 'Meta Hacker Cup — Round 1 Qualifier',
    org: 'Meta',
    year: '2025',
    detail: 'Qualified for Round 1 of Meta\'s global competitive programming contest, competing against thousands of programmers worldwide.',
    tags: ['Competitive Programming', 'Algorithms', 'C++ / Python'],
  },
  {
    title: 'Dev Weekends MERN Stack Fellow — Bronze Certificate',
    org: 'Dev Weekends',
    year: '2025',
    detail: 'Earned a Bronze Certificate upon completion of the structured MERN Stack and DSA fellowship programme, recognising consistent performance and successful project delivery.',
    tags: ['MERN Stack', 'DSA', 'Fellowship'],
  },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-28" />
        <SectionHeading label="Recognition" title="Achievements & awards" />

        <div ref={ref} className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card card-hover p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="section-label mb-1">{item.org}</p>
                  <h3 className="text-sm font-bold text-[#e2e2e2] leading-snug">{item.title}</h3>
                </div>
                <span className="tag shrink-0 self-start">{item.year}</span>
              </div>
              <p className="text-sm text-[#777] leading-relaxed mb-4">{item.detail}</p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1f1f1f]">
                {item.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
