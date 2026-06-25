import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { articles } from './Articles';

interface AllArticlesProps {
  onBack: () => void;
}

export default function AllArticles({ onBack }: AllArticlesProps) {
  return (
    <main className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs text-[#6B7065] hover:text-[#D0D0D0] font-mono transition-colors mb-6"
          >
            <ArrowLeft size={13} /> Back to portfolio
          </button>
          <p className="section-label mb-2">Writing</p>
          <h1 className="text-2xl sm:text-3xl font-black text-[#D0D0D0] mb-1">Articles on Medium</h1>
          <p className="text-xs text-[#6B7065] font-mono mt-2">
            Writing about cloud infrastructure, DevOps, and software engineering for developers at all levels.{' '}
            <a
              href="https://medium.com/@af4060957"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D0D0D0] hover:text-white underline underline-offset-2 transition-colors"
            >
              Follow on Medium
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {articles.map((article, i) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="card block p-6 group hover:border-[#6B7065]/50 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag">{article.tag}</span>
                    <span className="text-[10px] text-[#4A4A4A] font-mono">{article.date}</span>
                    <span className="text-[10px] text-[#4A4A4A] font-mono">{article.readTime}</span>
                  </div>
                  <h2 className="text-sm font-bold text-[#D0D0D0] leading-snug mb-3 group-hover:text-white transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-xs text-[#6B7065] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-2 mt-0.5">
                  <ExternalLink size={13} className="text-[#4A4A4A] group-hover:text-[#6B7065] transition-colors" />
                  <span className="text-[10px] text-[#4A4A4A] font-mono group-hover:text-[#6B7065] transition-colors whitespace-nowrap">
                    Read on Medium
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
