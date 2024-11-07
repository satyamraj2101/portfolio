import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-indigo-200">
            <div className="mb-10 relative">
              <div className="absolute -left-10 mt-2 w-4 h-4 rounded-full bg-indigo-500" />
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Intern</h3>
                  <span className="text-sm text-gray-500">Itzeazy India</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Dec 2021 - Mar 2022</span>
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  <span>Remote</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Developed responsive web applications with HTML, CSS, and JavaScript</li>
                  <li>Enhanced site performance by 25%</li>
                  <li>Collaborated with cross-functional teams to improve website design, UI/UX, and responsiveness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}