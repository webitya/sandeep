import {
  Search,
  TrackChanges,
  RocketLaunch,
  TrendingUp,
} from "@mui/icons-material"

export default function ForSmeJourney() {
  const journeySteps = [
    {
      title: "Diagnosis",
      description: "Business audit & planning sprint",
      icon: <Search className="text-white w-6 h-6" />,
    },
    {
      title: "Strategy",
      description: "ICP, messaging, funnel",
      icon: <TrackChanges className="text-white w-6 h-6" />,
    },
    {
      title: "Execution",
      description: "Remote team + systems setup",
      icon: <RocketLaunch className="text-white w-6 h-6" />,
    },
    {
      title: "Scale",
      description: "Team review, optimization, scale roadmap",
      icon: <TrendingUp className="text-white w-6 h-6" />,
    },
  ]

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Your Growth Journey
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            A step-by-step process designed to transform your SME in just 90 days
          </p>
          <div className="mt-4 w-24 mx-auto h-1 bg-blue-200 rounded-full"></div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group text-center"
            >
              {/* Step Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl group-hover:scale-105 transform transition">
                {step.icon}
              </div>

              {/* Step Number */}
              <div className="text-sm text-blue-500 font-semibold mb-1">
                Step {index + 1}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
