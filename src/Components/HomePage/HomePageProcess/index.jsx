'use client';
import { motion } from 'framer-motion';
import {
  Description as DescriptionIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  Group as GroupIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';

const executionSteps = [
  {
    title: 'Submit Your Requirements & Goals',
    description:
      'Submit your business goals and requirements to help us understand your specific needs and expectations.',
    icon: <DescriptionIcon className="text-blue-600 text-2xl" />,
  },
  {
    title: 'Receive Your Culture Mapping Report',
    description:
      'Get a detailed report on your sales and marketing culture, leadership style, and team dynamics.',
    icon: <SearchIcon className="text-green-600 text-2xl" />,
  },
  {
    title: 'Approve the Effort & Skill Blueprint',
    description:
      'Approve the detailed plan that aligns your revenue goals with the skills required to achieve them.',
    icon: <CheckCircleIcon className="text-yellow-500 text-2xl" />,
  },
  {
    title: 'Finalize Hiring Structure (Permanent + Temporary)',
    description:
      'Review and finalize the hiring strategy, defining the right balance between permanent and temporary talent.',
    icon: <GroupIcon className="text-orange-500 text-2xl" />,
  },
  {
    title: 'We Source, Screen, and Onboard Your Team',
    description:
      'We handle sourcing, screening, and onboarding of your sales and marketing professionals to build your ideal team.',
    icon: <PersonAddIcon className="text-purple-600 text-2xl" />,
  },
];

export default function HomePageExecutionProcess() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Execution Process
        </motion.h1>

        <div className="relative border-l-2 border-gray-300">
          {executionSteps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-8 relative pl-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon inside circle */}
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center shadow-md">
                {step.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
