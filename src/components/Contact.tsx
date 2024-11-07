import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Let's Connect</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-12">
            Interested in collaborating or have a project in mind? Reach out, and let's discuss how we can create something impactful together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>

          <div className="flex justify-center space-x-8">
            <a href="mailto:satyamraj620@gmail.com" 
               className="flex items-center text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a href="https://linkedin.com/in/satyam-raj2101" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/satyamraj2101"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}