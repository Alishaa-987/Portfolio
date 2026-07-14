import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';

export default function Articles() {
  const { ref, inView } = useInView();

  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <SectionHeading label="Writing" title="Articles and thoughts" />
          <div className="flex gap-2 self-start mb-10">
            <a
              href="https://medium.com/@af4060957"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0"
            >
              <BookOpen size={12} /> Medium
            </a>
            <Link to="/articles" className="btn-primary shrink-0">
              All articles <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-3 items-stretch">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="card flex flex-col h-full p-5 group hover:border-border-color/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="tag">{article.tag}</span>
                <span className="text-[10px] text-text-muted font-mono">{article.readTime}</span>
              </div>

              <h3 className="text-sm font-bold text-text-primary leading-snug mb-2 group-hover:text-text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">
                {article.summary}
              </p>

              <div className="flex-1" />

              <div className="flex items-center justify-between border-t border-border-color/35 pt-3">
                <span className="text-[10px] text-text-muted font-mono">{article.date}</span>
                <ExternalLink size={11} className="text-text-muted group-hover:text-text-secondary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
