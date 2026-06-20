import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const coursework = [
  'Data Structures & Algorithms',
  'Web Technologies',
  'Database Systems',
  'Object-Oriented Programming',
  'Computer Networks',
  'Operating Systems',
  'Software Engineering',
  'Digital Image Processing',
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-28" />
        <SectionHeading label="Education" title="Academic background" />

        <div ref={ref} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            {/* Degree header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7 pb-7 border-b border-[#1f1f1f]">
              <div>
                <p className="section-label mb-2">Degree</p>
                <h3 className="text-xl font-black text-[#e2e2e2]">B.Sc. Computer Science</h3>
                <p className="text-sm text-[#888] mt-1.5">University of Agriculture, Faisalabad (UAF)</p>
                <p className="text-xs text-[#555] font-mono mt-0.5">Faisalabad, Pakistan</p>
              </div>
              <div className="flex flex-col gap-2 items-start sm:items-end shrink-0">
                <span className="tag">2023 – 2027</span>
                <span className="tag">4th Year (expected)</span>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <p className="section-label mb-4">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded text-xs text-[#888] border border-[#242424] bg-[#161616] hover:border-[#3d3d3d] hover:text-[#ccc] transition-all duration-150 cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
