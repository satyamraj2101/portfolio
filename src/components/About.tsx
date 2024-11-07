export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I am a Full Stack Developer with a strong foundation in web development, cloud technologies, and DevOps. 
              My skill set includes back-end development using Node.js and Express, as well as AI integration to enhance 
              user interaction with platforms like Wit.ai and Google Gemini API.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I prioritize building applications that are secure, scalable, and optimized for performance. Currently pursuing 
              my Bachelor of Technology in Computer Science at Kalinga Institute of Industrial Technology, I'm passionate about 
              creating innovative solutions that make a real impact.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-gray-900">Development Focus</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'Flask', 'REST APIs', 'AI Integration'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="font-semibold text-xl text-gray-900">DevOps Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'GCP', 'CI/CD', 'Nginx'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}