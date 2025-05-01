'use client';

import { Lightbulb, Psychology, Groups } from '@mui/icons-material';

const AboutOurServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-900 mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
            <div className="bg-blue-600 p-4 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="text-white text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Knowledge Consulting
            </h3>
            <p className="text-base text-gray-700 mt-2">
              Expertise in lead generation, sales closures, and effective hiring and management of sales and marketing teams.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
            <div className="bg-blue-600 p-4 rounded-full flex items-center justify-center mb-4">
              <Psychology className="text-white text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              War Room
            </h3>
            <p className="text-base text-gray-700 mt-2">
              A problem-solving platform designed to address critical sales and marketing challenges.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
            <div className="bg-blue-600 p-4 rounded-full flex items-center justify-center mb-4">
              <Groups className="text-white text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Trained Resources
            </h3>
            <p className="text-base text-gray-700 mt-2">
              Deployment of industry-ready sales and marketing professionals with real-market knowledge for higher success rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurServicesSection;
