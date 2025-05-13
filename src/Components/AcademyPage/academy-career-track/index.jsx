import { Briefcase, Building2 } from 'lucide-react';

export default function AcademyCareerTracks() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Two Career Tracks Inside the Program
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Track 1: SME Leadership */}
          <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-600 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="w-8 h-8 text-indigo-600" />
              <h3 className="text-2xl font-semibold text-indigo-700">
                SME Leadership Sprint
              </h3>
            </div>
            <p className="text-sm uppercase tracking-wide font-medium text-indigo-500 mb-2">
              (HOD Track)
            </p>
            <p className="italic text-gray-600 mb-4">
              Become Head of Department (HOD or similar) in high-growth SMEs
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Outcome:</strong> Mid-level leadership roles like Head of Sales or Marketing Head.
              </li>
              <li>
                <strong>Suited For:</strong> Fast-growth professionals who want broad responsibilities and direct impact.
              </li>
              <li>
                <strong>Why it's powerful:</strong> You’ll lead across functions, preparing for entrepreneurial roles.
              </li>
            </ul>
          </div>

          {/* Track 2: Corporate Leadership */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-md border-l-4 border-purple-600 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Building2 className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-semibold text-purple-700">
                Corporate Leadership Sprint
              </h3>
            </div>
            <p className="text-sm uppercase tracking-wide font-medium text-purple-500 mb-2">
              (Top Management Track)
            </p>
            <p className="italic text-gray-600 mb-4">
              Get ready for senior leadership roles in structured organizations
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Outcome:</strong> Roles like VP-Sales, Marketing Director, or Business Unit Head.
              </li>
              <li>
                <strong>Suited For:</strong> Professionals aiming for strategic leadership in large companies.
              </li>
              <li>
                <strong>Why it's powerful:</strong> Built for top-tier roles with process-driven, strategic exposure.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
