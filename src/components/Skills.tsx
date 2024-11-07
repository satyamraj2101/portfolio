import { Code, Server, Database, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: <Code className="w-6 h-6 text-indigo-600" />,
    skills: ['JavaScript', 'Python', 'SQL', 'C++', 'C#']
  },
  {
    title: 'Web Development',
    icon: <Server className="w-6 h-6 text-indigo-600" />,
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Cloud & DevOps',
    icon: <Database className="w-6 h-6 text-indigo-600" />,
    skills: ['AWS (EC2, RDS)', 'GCP', 'Docker', 'Docker Compose', 'Nginx', 'CI/CD']
  },
  {
    title: 'Security & AI Integration',
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    skills: ['JWT', 'bcrypt', 'Rate Limiting', 'Wit.ai', 'Google Gemini AI']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-2">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}