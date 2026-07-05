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

const roles = [
  {
    id: 'accent-group',
    company: 'Accent Group Limited – Offshore Team',
    title: 'Sr Quality Engineer',
    period: '2025 — Present',
    highlights: [
      'Lead QA effort and strategy for the assigned workstream serving well-known apparel and footwear brands in the ANZ market.',
      "Establish and refine the testing workflow, recommending approaches that fit the project's specific context.",
      'Pilot the Playwright Automation Framework to streamline API and UI testing, reducing manual testing effort by 20%.',
    ],
    tech: ['Playwright', 'GraphQL', 'TypeScript', 'Jira', 'Xray'],
  },
  {
    id: 'niteco',
    company: 'Niteco Ltd VN',
    title: 'Quality Engineer',
    period: '2021 — 2025',
    highlights: [
      'Improved defect density by 20% using shift-left testing.',
      'Reduced testing time by 15% by creating comprehensive test plans.',
      'Delivered successful sprint demos to clients, enhancing client satisfaction and project transparency.',
    ],
    tech: ['Azure DevOps', 'Playwright', 'Accessibility Testing'],
  },
  {
    id: 'nashtech',
    company: 'NashTech Vietnam (a division of Harvey Nash)',
    title: 'Quality Engineer',
    period: 'MAR — DEC 2021',
    highlights: [
      'Automated 50+ test cases, reducing manual testing effort by 30%.',
      'Collaborated with developers to reproduce and resolve high-priority defects, improving product stability.',
      'Delivered on-time testing for all user stories in a fast-paced agile environment.',
    ],
    tech: ['Jira', 'Selenium', 'Postman'],
  },
  {
    id: 'dxc',
    company: 'DXC Vietnam',
    title: 'Professional Product Test',
    period: '2018 — 2021',
    highlights: [
      'Implemented and maintained automation scripts, reducing testing effort by 20%.',
      'Enhanced defect resolution efficiency by working closely with DevOps engineers and developers.',
      'Mentored 2 newcomers, ensuring they achieved full productivity within their first month.',
    ],
    tech: ['Jira', 'Redmine', 'Selenium', 'SQL Server'],
  },
];

export default function Experience() {
  return (
    <motion.ol
      className="group/list space-y-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {roles.map((role) => (
        <motion.li
          key={role.id}
          variants={itemVariants}
          className="grid grid-cols-1 gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4"
        >
          <header className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
            {role.period}
          </header>
          <div>
            <h3 className="font-medium leading-snug text-slate-200">
              {role.title} <span className="text-slate-400">· {role.company}</span>
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-400">
              {role.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.tech.map((tech) => (
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
