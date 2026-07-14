import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';

const coursework = ['Data Structures & Algorithms', 'Web Technologies', 'Database Systems', 'OOP', 'Computer Networks', 'Operating Systems', 'Software Engineering', 'Digital Image Processing'];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24 px-6 bg-bg-primary text-text-primary">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="Education" title="Academic background" />

        <div ref={ref} className="max-w-xl">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className="card p-6 bg-bg-card border-border-color">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 pb-5 border-b border-border-color/35">
              <div>
                <p className="section-label mb-1.5">Degree</p>
                <h3 className="text-base font-black text-text-primary">B.Sc. Computer Science</h3>
                <p className="text-xs text-text-secondary mt-1">University of Agriculture, Faisalabad</p>
              </div>
              <div className="flex flex-col gap-1.5 items-start sm:items-end shrink-0">
                <span className="tag">2023 – 2027</span>
                <span className="text-[10px] text-text-muted font-mono">4th Year</span>
              </div>
            </div>
            <div>
              <p className="section-label mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
