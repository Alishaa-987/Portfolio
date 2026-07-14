import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary font-mono transition-colors mb-12"
        >
          <ArrowLeft size={12} /> Back to portfolio
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-2">Writing</p>
            <h1 className="text-3xl sm:text-4xl font-black text-text-primary leading-tight">All articles</h1>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed max-w-xl">
              Technical writing on DevOps, full-stack development, and lessons learned building real-world applications.
            </p>
          </div>
          <a
            href="https://medium.com/@af4060957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0 self-start"
          >
            <BookOpen size={12} /> Follow on Medium
          </a>
        </div>

        {/* Articles list */}
        <div className="space-y-4">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="card p-6 flex flex-col sm:flex-row sm:items-start gap-5 group hover:border-border-color transition-colors block bg-bg-card border-border-color"
            >
              {/* Meta column */}
              <div className="shrink-0 sm:w-28">
                <span className="tag">{article.tag}</span>
                <p className="text-[10px] text-text-muted font-mono mt-2">{article.date}</p>
                <p className="text-[10px] text-text-muted font-mono">{article.readTime}</p>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-bold text-text-primary leading-snug mb-2 group-hover:text-text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Arrow */}
              <ExternalLink
                size={14}
                className="text-text-muted group-hover:text-text-secondary transition-colors shrink-0 self-start mt-0.5"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-border-color/30">
          <p className="text-xs text-text-secondary mb-3">
            More articles published on Medium — follow to get notified of new writing.
          </p>
          <a
            href="https://medium.com/@af4060957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <BookOpen size={12} /> Read on Medium
          </a>
        </div>
      </div>
    </div>
  );
}
