export default function WhoFor() {
  return (
    <section className="bg-slate-50">
      <div className="px-4 md:px-6">
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Curious about your current skills?
              </h3>
              <p className="text-indigo-100 mb-6">
                Take the test now – to check your current skills and find out where you stand.
              </p>
              <button className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Take the Test
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Skill assessment"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
