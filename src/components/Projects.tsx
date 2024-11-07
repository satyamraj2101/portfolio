import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Synergy - AI-Powered Social Networking Platform',
    description: 'Developed an AI-driven platform tailored for startup founders. Integrated AI features for personalized interactions, including conversational features powered by Google Gemini API. Deployed on GCP, ensuring high scalability with Docker and Nginx.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['Node.js', 'PostgreSQL', 'Wit.ai', 'Google Gemini AI', 'Docker', 'Nginx'],
    live: 'http://satyamraj.tech',
    github: 'https://github.com/satyamraj2101'
  },
  {
    title: 'LinkLite - URL Shortener Web Application',
    description: 'Built a URL shortener featuring real-time analytics such as geolocation and device tracking. Enhanced security with JWT authentication and password hashing using bcrypt. Deployed on AWS EC2 with Docker and Nginx.',
    image: 'https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['Node.js', 'PostgreSQL', 'JWT', 'bcrypt', 'Docker', 'AWS EC2'],
    live: 'http://linklite.space',
    github: 'https://github.com/satyamraj2101'
  },
  {
    title: 'Job Tracking Web Application',
    description: 'Developed a job tracking system with data visualizations and authentication. Hosted on AWS RDS with user-friendly job visualization through Chart.js.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'Flask', 'MySQL', 'AWS RDS', 'Chart.js'],
    github: 'https://github.com/satyamraj2101'
  },
  {
    title: 'Heart Disease Prediction',
    description: 'Leveraged machine learning to predict heart disease risk, improving model accuracy by 15% through data preprocessing and feature engineering.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/satyamraj2101'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  {project.live && (
                    <a href={project.live} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center text-gray-600 hover:text-gray-900">
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}