import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "AWS Academy Graduate",
    issuer: "AWS",
    year: "2024"
  },
  {
    title: "Full Stack Development Training",
    issuer: "Mybootcamp",
    duration: "1 month"
  },
  {
    title: "Data Science and Machine Learning Fundamentals",
    issuer: "CFI",
    year: "2021"
  },
  {
    title: "Front-End Web Development",
    issuer: "Itzeazy India",
    year: "2021"
  }
];

const hackerRankCerts = [
  "Python (Basic)",
  "SQL (Basic)",
  "Problem Solving (Intermediate)"
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Training</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-indigo-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      {cert.year || cert.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <ExternalLink className="w-6 h-6 text-indigo-600 mr-2" />
              HackerRank Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {hackerRankCerts.map((cert, index) => (
                <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}