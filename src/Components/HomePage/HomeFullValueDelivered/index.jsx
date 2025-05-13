'use client';
import { motion } from 'framer-motion';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  CheckCircle,
  Work,
  People,
  TrendingUp,
  AssignmentTurnedIn,
} from '@mui/icons-material';

const items = [
  {
    icon: <Work className="text-white" />,
    title: 'Strategic Team Planning (Not Just Hiring)',
    points: [
      'Map revenue goals to team design and effort required.',
      'Avoid over-hiring or misaligned hiring.',
      'Clarify roles, KPIs, and expectations before recruitment.',
    ],
  },
  {
    icon: <People className="text-white" />,
    title: 'Culture & Context Fit',
    points: [
      'We attend internal meetings to understand leadership style and team culture.',
      'Ensure new hires match not just skills — but mindset and team dynamics.',
    ],
  },
  {
    icon: <AssignmentTurnedIn className="text-white" />,
    title: 'Post-Hire Enablement',
    points: [
      'Onboarding plans with 30-60-90 day deliverables.',
      'Goal-setting and early performance tracking.',
      'Reduce the risk of bad hires and slow starters.',
      'Skill-gap analysis',
      'Training needs mapping',
    ],
  },
  {
    icon: <TrendingUp className="text-white" />,
    title: 'Reduced Attrition, Increased Productivity',
    points: [
      'High alignment leads to better job satisfaction.',
      'Training + support leads to faster ramp-up and sustained performance.',
    ],
  },
  {
    icon: <CheckCircle className="text-white" />,
    title: 'Better ROI on People Investment',
    points: [
      'Every hire tied to revenue impact, not just headcount.',
      'Full visibility on what’s working, what’s not — and how to fix it.',
    ],
  },
];

export default function FullValueDeliveredTimeline() {
  return (
    <section className="bg-gradient-to-br from-white to-slate-100 py-16 px-2 md:px-12 text-gray-800">
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900"
        >
          Full Value Delivered to the Client
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl mb-12 font-medium text-gray-700"
        >
          “We help you design, hire, and manage sales and marketing teams that perform — not just show up.”
        </motion.p>

        <Timeline position="alternate">
          {items.map((item, idx) => (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    background: 'linear-gradient(to right, #2563eb, #1e40af)',
                    boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.3)',
                  }}
                >
                  {item.icon}
                </TimelineDot>
                {idx < items.length - 1 && (
                  <TimelineConnector className="bg-blue-300" />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-gray-200 transition-transform hover:scale-[1.02]"
                >
                  <h3 className="text-xl md:text-xl  text-left text-blue-800 mb-2">
                    {item.title}
                  </h3>
                  <ul className="space-y-1 list-disc pl-5 text-base text-left text-gray-700">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
