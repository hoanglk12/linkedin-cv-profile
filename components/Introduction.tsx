'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

const skills = [
  'JavaScript', 'TypeScript', 'Java', 'GraphQL', 'REST APIs', 'Node.js',
  'SQL Server', 'MySQL', 'CMS', 'Github', 'Postman', 'Jira',
  'Azure Devops', 'Insurance', 'eCommerce', 'CI/CD', 'Scrum/Agile',
];

export default function Introduction() {
  return (
    <div className="max-w-md space-y-4 leading-relaxed text-slate-400">
      <p>
        I&apos;m a Sr Quality Assurance Engineer with a passion for testing. With over 7 years of
        experience in the testing industry, I&apos;ve had the privilege of working with various
        companies, building products that make a real difference in people&apos;s lives.
      </p>
      <p>
        My focus is on understanding product risk, designing effective test coverage, and creating
        automation where it brings real value. I collaborate closely with developers and
        stakeholders to turn requirements into testable acceptance criteria, reduce escaped
        defects, and improve release confidence.
      </p>
      <p>
        Beyond testing, I&apos;m an active contributor to open-source projects and enjoy sharing
        knowledge through technical blog posts. I believe in continuous learning and staying
        current with the latest technologies and best practices in software testing.
      </p>

      <motion.div
        className="flex flex-wrap gap-2 pt-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div key={skill} variants={itemVariants}>
            <Badge
              variant="secondary"
              className="h-auto rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
