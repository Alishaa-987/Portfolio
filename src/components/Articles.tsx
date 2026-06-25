import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const articles = [
  {
    id: 'docker-to-production',
    title: "Docker to Production: A Beginner's Guide to Cloud Deployment",
    excerpt:
      'Shipping software reliably to the world is a different challenge from running it locally. This piece walks through containerisation with Docker and the full path from a working local app to a live cloud deployment.',
    date: 'May 23, 2025',
    tag: 'DevOps',
    url: 'https://medium.com/@af4060957/docker-to-production-a-beginners-guide-to-cloud-deployment-d02692e648ba',
    readTime: '6 min read',
  },
  {
    id: 'cicd-cloud',
    title: "A Beginner's Guide to CI/CD and Cloud Deployment",
    excerpt:
      'Building an app locally is just step one. Storing data safely in the cloud, automating tests, and deploying every change without manual effort. That is what CI/CD pipelines are for.',
    date: 'May 23, 2025',
    tag: 'Cloud',
    url: 'https://medium.com/@af4060957/a-beginners-guide-to-ci-cd-and-cloud-deployment-067d90603210',
    readTime: '7 min read',
  },
  {
    id: 'web-request-cloud',
    title: 'The Journey of a Web Request in the Cloud',
    excerpt:
      'You tap a button on your food app at 9 PM. Your screen updates in seconds, the restaurant gets your order, payment goes through. This article traces every hop that makes that happen.',
    date: 'May 19, 2025',
    tag: 'Cloud',
    url: 'https://medium.com/@af4060957/the-journey-of-a-web-request-in-the-cloud-cf3cf21abf04',
    readTime: '5 min read',
  },
];

interface ArticlesProps {
  onViewAll: () => void;
}

export default function Articles({ onViewAll }: ArticlesProps) {
  const { ref, inView } = useInView();
  const preview = articles.slice(0, 2);

  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <SectionHeading label="Writing" title="Articles on Medium" />
          <a
            href="https://medium.com/@af4060957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start mb-10 shrink-0"
          >
            <ExternalLink size={12} /> Medium profile
          </a>
        </div>

        <div ref={ref} className="space-y-3 mb-8">
          {preview.map((article, i) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="card block p-5 group hover:border-[#6B7065]/50 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag">{article.tag}</span>
                    <span className="text-[10px] text-[#4A4A4A] font-mono">{article.date}</span>
                    <span className="text-[10px] text-[#4A4A4A] font-mono">{article.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#D0D0D0] leading-snug mb-2 group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#6B7065] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <ExternalLink size={13} className="shrink-0 text-[#4A4A4A] group-hover:text-[#6B7065] transition-colors mt-0.5" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={onViewAll}
            className="btn-secondary flex items-center gap-2 px-6"
          >
            View all {articles.length} articles <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
