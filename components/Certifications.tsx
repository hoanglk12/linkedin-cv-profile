'use client';

import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

const items = [
  {
    period: '2014 — 2019',
    title: "Engineer's Degree, Information Systems",
    description: 'University of Information Technology, HCM National University.',
  },
  {
    period: '2024',
    title: 'Optimizely Certified Commerce Developer',
    description: 'Certified in Optimizely (formerly Episerver) commerce development.',
  },
  {
    period: '2018 — 2019',
    title: 'IELTS 6.0 · TOEIC 770',
    description: 'English proficiency certifications.',
  },
];

export default function Certifications() {
  return (
    <motion.ol
      className="group/list space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item) => (
        <motion.li
          key={item.title}
          variants={itemVariants}
          className="group relative grid grid-cols-1 gap-1 transition-opacity duration-300 sm:grid-cols-[10rem_1fr] sm:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-colors duration-300 motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
          <header className="relative z-10 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
            {item.period}
          </header>
          <div className="relative z-10">
            <h3 className="font-medium leading-snug text-slate-200">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
