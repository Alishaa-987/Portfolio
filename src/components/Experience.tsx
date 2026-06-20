import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const experiences = [
  {
    role: 'Section Leader — Code in Place',
    org: 'Stanford University',
    period: '2026',
    type: 'Education / Leadership',
    points: [
      'Competitively selected from thousands of global applicants as one of approximately 2,000 Section Leaders to teach Python through Stanford\'s worldwide free CS education initiative.',
      'Facilitated weekly live coding sessions covering Python fundamentals — functions, loops, conditionals, and problem decomposition — for an international student cohort.',
      'Provided 1-on-1 debugging support and mentorship across time zones, guiding students from zero programming experience through their first projects.',
      'Developed curriculum-aligned exercises and feedback frameworks that supported student progress and course completion.',
    ],
    skills: ['Teaching', 'Python', 'Curriculum Design', 'Cross-cultural Communication'],
  },
  {
    role: 'Trainer & Moderator',
    org: 'iCodeGuru',
    period: '2025 – Present',
    type: 'Teaching / Community',
    points: [
      'iCodeGuru trains Pakistani students for international tech careers and fully funded US scholarships. Moderates the community Slack workspace and supports students with technical queries.',
      'Delivers structured DSA and Python training sessions, focusing on problem-solving patterns used in technical interviews and competitive programming.',
      'Mentors students preparing for international coding competitions and scholarship applications, with a strong emphasis on algorithmic thinking.',
    ],
    skills: ['Data Structures & Algorithms', 'Python', 'Technical Mentorship', 'Community Management'],
  },
  {
    role: 'Open-Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC \'25)',
    period: '2026',
    type: 'Open Source',
    points: [
      'Competitively selected for GSSoC \'25 — one of the world\'s largest open-source programmes by GirlScript Foundation India.',
      'Contributing code across open-source projects as part of a structured, mentored programme with real codebase responsibilities.',
    ],
    skills: ['Open Source', 'Git', 'Code Review', 'Collaborative Development'],
  },
  {
    role: 'MERN Stack & DSA Fellow',
    org: 'Dev Weekends Fellowship',
    period: '2025',
    type: 'Fellowship',
    points: [
      'Completed an intensive fellowship programme covering production-level MERN stack development and Data Structures & Algorithms through structured weekend sessions.',
      'Awarded Bronze Certificate for consistent performance, project delivery, and demonstrated problem-solving ability across all programme modules.',
    ],
    skills: ['MERN Stack', 'DSA', 'Project Delivery'],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-28" />
        <SectionHeading label="Experience" title="Where I've contributed" />

        <div ref={ref} className="max-w-3xl space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.org + exp.period}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-7"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <p className="section-label mb-1">{exp.type}</p>
                  <h3 className="text-base font-bold text-[#e2e2e2]">{exp.role}</h3>
                  <p className="text-sm text-[#777] mt-0.5">{exp.org}</p>
                </div>
                <span className="shrink-0 tag self-start">{exp.period}</span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-5">
                {exp.points.map((pt, pi) => (
                  <li key={pi} className="flex gap-3 text-sm text-[#777] leading-relaxed">
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-[#3d3d3d] shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1f1f1f]">
                {exp.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
