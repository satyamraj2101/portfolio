import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Achievements</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <Trophy className="w-8 h-8 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Codekaze's September 2023 - Coding Ninja</h3>
                <div className="mt-2 space-y-2 text-gray-600">
                  <p>• Achieved <span className="font-semibold">AIR-411</span> in the competition</p>
                  <p>• Placed <span className="font-semibold">4th</span> in Python-based coding challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}