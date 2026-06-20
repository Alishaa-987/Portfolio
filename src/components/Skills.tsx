import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 'Advanced', evidence: 'E-Commerce, Real Estate, Chat App' },
      { name: 'Next.js', level: 'Advanced', evidence: 'School Mgmt, Hospital Mgmt, E-Commerce' },
      { name: 'TypeScript', level: 'Advanced', evidence: 'School Mgmt, Hospital Mgmt, Chat App' },
      { name: 'Tailwind CSS', level: 'Advanced', evidence: 'All web projects' },
      { name: 'Redux', level: 'Intermediate', evidence: 'Real Estate (global state)' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'Advanced', evidence: 'Real Estate, Mern-crud-app' },
      { name: 'Express.js', level: 'Advanced', evidence: 'Real Estate REST API' },
      { name: 'REST API Design', level: 'Advanced', evidence: 'Multiple projects' },
      { name: 'FastAPI', level: 'Intermediate', evidence: 'IntelliSense AI Hackathon' },
      { name: 'WebSockets', level: 'Intermediate', evidence: 'Chat App (Supabase Realtime)' },
    ],
  },
  {
    category: 'Databases & ORM',
    items: [
      { name: 'MongoDB', level: 'Advanced', evidence: 'Real Estate (MERN)' },
      { name: 'PostgreSQL', level: 'Advanced', evidence: 'School Mgmt, E-Commerce' },
      { name: 'Prisma ORM', level: 'Advanced', evidence: 'School Mgmt, Hospital Mgmt' },
      { name: 'Supabase', level: 'Intermediate', evidence: 'Chat App, contact forms' },
    ],
  },
  {
    category: 'AI & Python',
    items: [
      { name: 'Python', level: 'Advanced', evidence: 'LeetCode, iCodeGuru training' },
      { name: 'LangChain', level: 'Intermediate', evidence: 'Chat with PDF (RAG)' },
      { name: 'Groq API', level: 'Intermediate', evidence: 'Chat with PDF, Voice Chatbot' },
      { name: 'OpenAI Whisper', level: 'Intermediate', evidence: 'Voice-to-Voice Chatbot' },
      { name: 'MATLAB', level: 'Intermediate', evidence: 'Artistic Image Studio (DIP)' },
    ],
  },
  {
    category: 'Auth & Security',
    items: [
      { name: 'JWT', level: 'Advanced', evidence: 'Real Estate (token auth)' },
      { name: 'Clerk', level: 'Advanced', evidence: 'School Mgmt, E-Commerce' },
      { name: 'NextAuth.js', level: 'Intermediate', evidence: 'Next.js projects' },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', level: 'Advanced', evidence: '29+ public repos' },
      { name: 'Docker', level: 'Intermediate', evidence: 'School Mgmt (containerised)' },
      { name: 'Vercel', level: 'Advanced', evidence: '3+ live deployments' },
      { name: 'Linux CLI', level: 'Intermediate', evidence: 'Daily development workflow' },
    ],
  },
];

const levelColor: Record<string, string> = {
  Advanced: 'text-[#ccc]',
  Intermediate: 'text-[#777]',
};

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-28" />
        <SectionHeading label="Skills" title="What I work with" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              className="card p-6"
            >
              <p className="section-label mb-5">{group.category}</p>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-3 group">
                    <div>
                      <p className="text-sm text-[#ccc] font-medium group-hover:text-[#e8e8e8] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-[#444] font-mono mt-0.5 leading-snug">
                        {item.evidence}
                      </p>
                    </div>
                    <span className={`text-[10px] font-mono shrink-0 mt-0.5 ${levelColor[item.level]}`}>
                      {item.level}
                    </span>
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
