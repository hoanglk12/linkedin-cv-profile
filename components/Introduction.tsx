import { Code, Rocket, Users, Award } from 'lucide-react';

export default function Introduction() {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Experience in working with Selenium, Playwright, programming languages like JavaScript and Java, and various testing frameworks"
    },
    {
      icon: Rocket,
      title: "Testing Leadership",
      description: "Led testing efforts for multiple high-visibility projects, ensuring timely delivery and high quality"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Mentored junior QA engineers and collaborated with cross-functional teams to deliver high-impact features"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Consistently improved product quality, reduced defect rates, and enhanced user satisfaction through rigorous testing practices"
    }
  ];

  return (
    <div>
      {/* Introduction Text */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        About Me
      </h2>
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          I&apos;m a Sr Quality Assurance Engineer with a passion for testing. 
          With over 7 years of experience in the testing industry, I&apos;ve had the privilege of working 
          with various companies, building products that make a real difference in people&apos;s lives.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          My focus is on understanding product risk, designing effective test coverage, and creating automation 
          where it brings real value. I collaborate closely with developers and stakeholders to turn requirements 
          into testable acceptance criteria, reduce escaped defects, and improve release confidence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Beyond testing, I&apos;m an active contributor to open-source projects and enjoy sharing knowledge through 
          technical blog posts. I believe in continuous learning and staying current with the 
          latest technologies and best practices in software testing.
        </p>
      </div>

      {/* Key Highlights */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'JavaScript', 'TypeScript', 'Java', 'GraphQL', 'REST APIs', 'Node.js', 
            'SQL Server', 'MySQL', 'CMS', 'Github', 'Postman', 'Jira',
            'Azure Devops', 'Insurance', 'eCommerce','CI/CD', 'Scrum/Agile'
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
