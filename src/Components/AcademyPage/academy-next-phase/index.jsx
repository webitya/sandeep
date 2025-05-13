export default function AcademyNextPhaseProgram() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Program –{" "}
            <span className="text-indigo-600">
              Next Phase – The Mid-Career Growth Sprint
            </span>
          </h2>
          <p className="mt-4 text-xl italic text-gray-700 max-w-3xl mx-auto">
            “If your early learning got you into the game,{' '}
            <strong>'Next Phase'</strong> gets you to the top.”
          </p>
        </div>

        {/* Who It's For / Why / Promise */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Who it's for
            </h3>
            <p className="text-gray-700">
              Mid-level sales and marketing professionals who are stuck in stagnancy due to low skills, unclear growth path, or outdated strategies.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Why it's mandatory
            </h3>
            <p className="text-gray-700">
              You can’t solve new problems with old playbooks. This sprint fills your critical skill and clarity gaps so you can grow at 3x speed — with content, mentorship, and hiring partners supporting your transition.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Promise</h3>
            <p className="text-gray-700">
              Clarity, confidence, and career acceleration — from being stuck to becoming a strong candidate for 3x roles and salaries.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
