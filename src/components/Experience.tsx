import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const experiences = [
  {
    role: 'Section Leader — Code in Place',
    org: 'Stanford University',
    period: '2026',
    points: [
      'Selected from thousands of global applicants to teach Python in Stanford\'s free CS education initiative.',
      'Facilitated weekly live coding sessions and 1-on-1 debugging support for international students.',
    ],
    skills: ['Teaching', 'Python', 'Mentorship'],
  },
  {
    role: 'Trainer & Moderator',
    org: 'iCodeGuru',
    period: '2025 – Present',
    points: [
      'Delivers DSA and Python training sessions for students preparing for tech interviews.',
      'Moderates community Slack workspace and provides technical mentorship.',
    ],
    skills: ['DSA', 'Python', 'Mentorship'],
  },
  {
    role: 'Open-Source Contributor',
    org: 'GirlScript Summer of Code',
    period: '2026',
    points: ['Selected for GSSoC \'25 — contributing to open-source projects with mentor guidance.'],
    skills: ['Open Source', 'Git'],
  },
  {
    role: 'MERN Stack Fellow',
    org: 'Dev Weekends',
    period: '2025',
    points: ['Completed intensive fellowship covering MERN stack and DSA; earned Bronze Certificate.'],
    skills: ['MERN', 'DSA'],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="Experience" title="Where I've contributed" />

        <div ref={ref} className="max-w-3xl space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.org + exp.period}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="card p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <p className="text-[10px] font-mono text-[#4A4A4A] mb-0.5">{exp.org}</p>
                  <h3 className="text-sm font-bold text-[#D0D0D0]">{exp.role}</h3>
                </div>
                <span className="tag shrink-0 self-start">{exp.period}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.points.map((pt, pi) => (
                  <li key={pi} className="flex gap-2.5 text-xs text-[#6B7065] leading-relaxed">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#4A4A4A] shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#4A4A4A]/35">
                {exp.skills.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
