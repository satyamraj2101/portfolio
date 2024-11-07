import { Terminal, Server, Download, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            Hi, I'm Satyam Raj
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-600">
            Full Stack Developer & DevOps Engineer
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            I'm passionate about creating secure, scalable web applications and AI-driven platforms. 
            With expertise in <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express</span>, 
            and cloud deployment, I develop solutions that are both innovative and reliable.
          </p>
          
          <div className="mt-8 flex justify-center space-x-6">
            <a href="/resume.pdf" 
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
            <a href="https://linkedin.com/in/satyam-raj2101" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a href="https://github.com/satyamraj2101" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <Terminal className="w-8 h-8 text-indigo-600" />
            <Server className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
      </div>
    </section>
  );
}