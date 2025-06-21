import Link from "next/link"

export default function ForSmePricing() {
  const plans = [
    {
      name: "Starter",
      description: "Group cohort, templates, calls",
      features: ["Group coaching sessions", "Template library access", "Weekly group calls", "Email support"],
      featured: false,
    },
    {
      name: "Growth",
      description: "1:1 + Execution Support",
      features: ["Everything in Starter", "1:1 coaching sessions", "Execution support", "Priority support"],
      featured: true,
    },
    {
      name: "Custom",
      description: "Fully done-for-you",
      features: ["Everything in Growth", "Done-for-you execution", "Dedicated team", "Custom solutions"],
      featured: false,
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className=" mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Choose Your Scale Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the level of support that matches your business needs and growth goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-200 ${
                plan.featured
                  ? "bg-blue-600 text-white border-blue-600 transform scale-105 shadow-xl"
                  : "bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg"
              }`}
            >
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.featured ? "text-blue-100" : "text-gray-600"}`}>{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center gap-2 ${plan.featured ? "text-blue-100" : "text-gray-600"}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${plan.featured ? "bg-blue-200" : "bg-blue-500"}`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/book-call-quote"
                className={`w-full py-3 rounded-lg transition-colors font-semibold text-center block ${
                  plan.featured ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Book a Call to Get a Custom Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
