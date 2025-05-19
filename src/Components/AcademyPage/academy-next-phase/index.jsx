export default function AcademyNextPhaseProgram() {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
     
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Next Phase 
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl italic text-gray-700 max-w-3xl mx-auto">
            “If your early learning got you into the game,{' '}
            <strong className="text-indigo-600 font-semibold">‘Next Phase’</strong>{' '}
            gets you to the top.”
          </p>
        </div>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Who it's for",
              description:
                'Mid-level sales and marketing professionals who are stuck in stagnancy due to low skills, unclear growth path, or outdated strategies.',
            },
            {
              title: "Why it's mandatory",
              description:
                'You can’t solve new problems with old playbooks. This sprint fills your critical skill and clarity gaps so you can grow at 3x speed — with content, mentorship, and hiring partners supporting your transition.',
            },
            {
              title: 'Promise',
              description:
                'Clarity, confidence, and career acceleration — from being stuck to becoming a strong candidate for 3x roles and salaries.',
            },
          ].map((block, index) => (
            <div
              key={index}
              className="bg-indigo-50 hover:shadow-md transition-shadow duration-300 p-6 rounded-xl border border-indigo-100"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                {block.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
