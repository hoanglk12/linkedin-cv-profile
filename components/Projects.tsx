'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

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

const projects = [
  {
    name: 'Accent Group Workstream',
    period: '2025 — Present',
    description:
      "QA for the ANZ retail workstream serving shoppers of apparel, footwear, and accessories brands including Platypus, Skechers, Hype DC, and The Athlete's Foot. QC · Team of 7–10.",
    contributions: [
      'Participate in all Scrum activities and define test scope for stories and bugs.',
      'Develop automated test scripts and perform manual testing across UI and API.',
    ],
    tech: ['Jira', 'Xray', 'Playwright', 'GraphQL', 'TypeScript', 'Bitbucket', 'CMS', 'New Relic'],
  },
  {
    name: 'Niteco – Global CMS Platforms',
    period: '2021 — 2025',
    description:
      'Customizing popular CMS platforms into tailored websites for global brands, including Panasonic, HNK, and FF. QC · Team of 5–10.',
    contributions: [
      'Defined test scope and tested both UI and API for user stories and bugs.',
      'Built comprehensive test plans from project inception and produced weekly test reports.',
    ],
    tech: ['Azure DevOps', 'Playwright', 'Accessibility Testing', 'Manual Testing'],
  },
  {
    name: 'FTX ODC (NashTech partner) – InvestCloud',
    period: '2021',
    description:
      'InvestCloud, a global leader in wealth technology, driving digital transformation in the financial sector. QC · Team of 5–10.',
    contributions: [
      'Defined test scope and executed testing for user stories across UI and API.',
      'Developed and maintained automated test scripts for functional UI testing.',
    ],
    tech: ['Jira', 'Selenium', 'Postman', 'Automation Testing'],
  },
  {
    name: 'Sompo Insurance – P&C Platform',
    period: '2019 — 2021',
    description:
      "A web application built by DXC to help Sompo Insurance agents (Malaysia, Indonesia P&C, and MapLife) efficiently sell property and casualty insurance contracts. QC · Team of 10–20.",
    contributions: [
      'Developed detailed manual test cases derived from Business Requirement Documents.',
      'Collaborated with DevOps to identify, report, and monitor issues from test failures.',
    ],
    tech: ['Jira', 'Redmine', 'Selenium', 'SQL Server'],
  },
];

export default function Projects() {
  return (
    <motion.ol
      className="group/list space-y-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project) => (
        <motion.li
          key={project.name}
          variants={itemVariants}
          className="group relative grid grid-cols-1 gap-1 transition-opacity duration-300 sm:grid-cols-[10rem_1fr] sm:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-colors duration-300 motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
          <header className="relative z-10 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
            {project.period}
          </header>
          <div className="relative z-10">
            <h3 className="font-medium leading-snug text-slate-200">{project.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
            <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-400">
              {project.contributions.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="h-auto rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
