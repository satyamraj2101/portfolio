import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-gray-800">
              Satyam Raj
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/satyamraj2101" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/satyam-raj2101" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:satyamraj620@gmail.com" 
                 className="text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}