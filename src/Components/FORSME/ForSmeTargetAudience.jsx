import { CheckCircle, Cancel } from "@mui/icons-material"

export default function ForSmeTargetAudience() {
  const designedFor = [
    "Founders of ₹1 Cr to ₹50 Cr businesses",
    "Struggling to build predictable sales",
    "Wanting a marketing engine + lean team",
  ]

  const notFor = [
    "Just looking for ad campaigns",
    "No founder involvement in the process",
    "Expecting instant leads with no input",
  ]

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Is This Right for You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our program is specifically designed for a certain type of SME founder.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Designed For */}
          <div className="bg-white border-l-4 border-green-500 rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-5">
              <CheckCircle className="text-green-600" />
              Designed For
            </h3>
            <ul className="space-y-4">
              {designedFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-white border-l-4 border-red-500 rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-red-700 flex items-center gap-2 mb-5">
              <Cancel className="text-red-600" />
              Not For
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Cancel className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
