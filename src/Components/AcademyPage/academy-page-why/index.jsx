import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Why() {
  const benefits = [
    {
      title: "Industry-Leading Curriculum",
      description:
        "Our curriculum is designed by industry experts to ensure you learn the most relevant and in-demand skills.",
    },
    {
      title: "Hands-On Learning",
      description:
        "Apply what you learn through real-world projects and build a portfolio that showcases your abilities.",
    },
    {
      title: "Career Support",
      description:
        "Get personalized career coaching, resume reviews, and interview preparation to land your dream job.",
    },
    {
      title: "Flexible Learning",
      description:
        "Learn at your own pace with our flexible schedule options, designed to fit around your life.",
    },
    {
      title: "Community",
      description:
        "Join a supportive community of like-minded learners and build your professional network.",
    },
    {
      title: "Recognized Certification",
      description:
        "Earn industry-recognized certifications that validate your skills to potential employers.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Academy</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality education and support to help you succeed in your career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="text-indigo-600 mt-1" fontSize="medium" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Success in Numbers</h3>
              <p className="text-slate-600 mb-6">
                We're proud of the impact we've made on our students' careers and lives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "95%", label: "Job placement rate" },
                { value: "2,000+", label: "Graduates" },
                { value: "300+", label: "Hiring partners" },
                { value: "50%", label: "Average salary increase" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
