import { CheckCircle } from "@mui/icons-material"

export default function ForSmeProgram() {
  const programData = [
    {
      title: "Strategy",
      items: [
        "GTM Playbook",
        "Sales Process, Funnel Design, and Team Management System",
        "ABM/Inbound Plan",
      ],
    },
    {
      title: "Tools & Templates",
      items: [
        "ICP + Buyer Journey Docs",
        "Proposal & Sales Content",
        "Growth Dashboard",
      ],
    },
    {
      title: "Execution Support (optional)",
      items: [
        "Remote SDR/Marketer",
        "Weekly Consulting Sprint",
        "Interview-Ready Sales Hires",
      ],
    },
  ]

  return (
    <section className="pt-10 pb-10 px-4 bg-white">
      <div className="mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-7">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What You'll Build in 90 Days
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive system that transforms your SME from struggling to scaling
          </p>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((column, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-5 tracking-tight">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                  >
                    <CheckCircle className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
