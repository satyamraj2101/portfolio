import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology: Computer Science",
    institution: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneshwar, Odisha",
    period: "Expected December 2025"
  },
  {
    degree: "Senior Secondary Education: Science Stream",
    institution: "Sri Gayatri Junior College",
    location: "Hyderabad, Telangana",
    period: "2021"
  },
  {
    degree: "Matriculation",
    institution: "Darbhanga Public School",
    location: "Darbhanga, India",
    period: "2019"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <GraduationCap className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mt-1">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{edu.period}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}