import {
  GpsFixed,
  Person,
  Campaign,
  Group,
  Assignment
} from "@mui/icons-material"

export default function ForSmeProblem() {
  const problems = [
    {
      icon: GpsFixed,
      title: "No clear GTM or ICP",
      description: "Lack of strategic direction in market approach"
    },
    {
      icon: Person,
      title: "Founder-led and reactive sales",
      description: "Over-dependence on founder for sales activities"
    },
    {
      icon: Campaign,
      title: "Random marketing with no ROI",
      description: "Scattered marketing efforts without measurable returns"
    },
    {
      icon: Group,
      title: "No lead engine, no trained team",
      description: "Missing systematic lead generation and team development"
    },
    {
      icon: Assignment,
      title: "Weak messaging & proposal quality",
      description: "Inconsistent communication and poor conversion materials"
    }
  ]

  return (
    <section className="pt-5 pb-10 px-4 bg-white">
      <div className=" mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Why Most SMEs Struggle to Scale Revenue
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common challenges that prevent small and medium enterprises from achieving sustainable growth
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-red-300 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-red-50 rounded-xl mb-5 group-hover:bg-red-100 transition-colors duration-200">
                  <Icon className="text-red-500 text-[28px]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>

        {/* Final Callout Box */}
        <div className="bg-blue-50 border border-blue-100 px-8 py-10 rounded-2xl text-center shadow-sm">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-blue-600">You're not alone.</span> Over 90% of SMEs face these challenges
            before scaling. We help you overcome them with a practical, founder-focused solution backed by proven methods.
          </p>
        </div>
      </div>
    </section>
  )
}
