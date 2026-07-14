import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', evidence: 'E-Commerce, Real Estate, Chat App' },
      { name: 'Next.js', evidence: 'School Mgmt, Hospital Mgmt' },
      { name: 'TypeScript', evidence: 'School Mgmt, Chat App' },
      { name: 'Tailwind CSS', evidence: 'All web projects' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', evidence: 'Real Estate REST API' },
      { name: 'PostgreSQL + Prisma', evidence: 'School Mgmt, E-Commerce' },
      { name: 'MongoDB', evidence: 'Real Estate MERN' },
      { name: 'FastAPI', evidence: 'IntelliSense AI Hackathon' },
    ],
  },
  {
    category: 'AI / Python',
    items: [
      { name: 'Python', evidence: 'LeetCode, iCodeGuru training' },
      { name: 'LangChain', evidence: 'Chat with PDF (RAG)' },
      { name: 'Groq / OpenAI APIs', evidence: 'Chat with PDF, Voice Bot' },
      { name: 'MATLAB', evidence: 'Artistic Image Studio' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git / GitHub', evidence: '29+ public repos' },
      { name: 'Docker', evidence: 'School Mgmt' },
      { name: 'Vercel', evidence: '3+ live deployments' },
      { name: 'Clerk Auth', evidence: 'School Mgmt, E-Commerce' },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 bg-bg-primary text-text-primary">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="Skills" title="What I work with" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: gi * 0.05 }}
              className="card p-5"
            >
              <p className="section-label mb-4">{group.category}</p>
              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <p className="text-sm text-text-primary font-medium">{item.name}</p>
                    <p className="text-[10px] text-text-muted font-mono mt-0.5">{item.evidence}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
