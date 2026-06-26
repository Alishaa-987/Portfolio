import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const achievements = [
  { title: 'Stanford Code in Place — Section Leader', org: 'Stanford University', year: '2026', detail: 'Selected from thousands of global applicants (~2,000 leaders) to teach Python.' },
  { title: 'CS50 Puzzle Day — 9/9 Solver (2×)', org: 'Harvard University', year: '2024 & 2025', detail: 'Solved all 9 puzzles for two consecutive years.' },
  { title: 'Meta Hacker Cup — Round 1 Qualifier', org: 'Meta', year: '2025', detail: 'Qualified for Round 1 of global competitive programming contest.' },
  { title: 'Dev Weekends Fellow — Bronze Certificate', org: 'Dev Weekends', year: '2025', detail: 'Earned Bronze Certificate for MERN stack and DSA fellowship.' },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="Recognition" title="Achievements" />

        <div ref={ref} className="grid sm:grid-cols-2 gap-3 max-w-3xl">
          {achievements.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: i * 0.06 }} className="card p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="text-[10px] font-mono text-[#4A4A4A]">{a.org}</p>
                  <h3 className="text-xs font-bold text-[#D0D0D0] leading-snug">{a.title}</h3>
                </div>
                <span className="tag shrink-0 self-start">{a.year}</span>
              </div>
              <p className="text-[11px] text-[#6B7065] leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
