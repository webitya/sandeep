export default function ForSmeCaseStudies() {
  const caseStudies = [
    {
      problem: "Manufacturing SME with inconsistent lead flow",
      solution: "Implemented systematic lead generation process",
      result: "4x leads in 3 months",
      metric: "4x",
      industry: "Manufacturing",
    },
    {
      problem: "Tech services company with long sales cycles",
      solution: "Streamlined sales process and improved messaging",
      result: "50% faster deal closures",
      metric: "50%",
      industry: "Technology",
    },
    {
      problem: "Healthcare SME struggling with team scaling",
      solution: "Built systematic approach with trained team",
      result: "3x revenue growth in 6 months",
      metric: "3x",
      industry: "Healthcare",
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className=" mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Proven With SMEs Across Industries</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from founders who transformed their businesses with our system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">{study.metric}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{study.industry}</div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Problem:</h4>
                  <p className="text-gray-600 text-sm">{study.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Result:</h4>
                  <p className="text-green-700 font-medium">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
