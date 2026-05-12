export default function StudyPathGeneratorWebsite() {
  const loggedIn = false;

  const features = [
    {
      title: 'Personalized Learning Paths',
      desc: 'Generate a custom study roadmap based on your goals, skills, and interests.',
    },
    {
      title: 'Smart Recommendations',
      desc: 'Receive suggested topics, courses, and projects to improve your learning journey.',
    },
    {
      title: 'Progress Tracking',
      desc: 'Monitor your completed lessons and stay motivated while studying.',
    },
    {
      title: 'Flexible Scheduling',
      desc: 'Create study plans that fit your available time and preferred pace.',
    },
  ];

  const paths = [
    'Web Development',
    'Computer Engineering',
    'Data Science',
    'Cybersecurity',
    'Mobile App Development',
    'Artificial Intelligence',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {!loggedIn && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-cyan-400">
                Study Path Generator
              </h2>

              <p className="text-slate-300 mt-3">
                Login to access your personalized study roadmap.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block mb-2 text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
                />
              </div>

              <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 rounded-xl transition">
                Login
              </button>

              <button className="w-full border border-slate-700 hover:border-cyan-400 py-3 rounded-xl transition">
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-16 lg:px-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Study Path <span className="text-cyan-400">Generator</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Build your own learning journey with a smart study planner
              that generates personalized study paths for students,
              self-learners, and future professionals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg transition">
                Generate Path
              </button>

              <button className="border border-slate-600 hover:border-cyan-400 px-6 py-3 rounded-2xl transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">
              Create Your Study Plan
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block mb-2 text-slate-300">
                  Choose Field
                </label>

                <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400">
                  <option>Select a field</option>

                  {paths.map((path) => (
                    <option key={path}>{path}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Skill Level
                </label>

                <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Study Hours Per Day
                </label>

                <input
                  type="number"
                  placeholder="Example: 2"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
                />
              </div>

              <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 rounded-xl transition">
                Generate My Path
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 lg:px-28 py-16 bg-slate-900/40">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Why Use Study Path Generator?
          </h2>

          <p className="mt-4 text-slate-300 text-lg">
            Designed to help students learn efficiently and achieve their career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 md:px-16 lg:px-28 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Example Learning Roadmap
          </h2>

          <p className="mt-4 text-slate-300">
            A simple roadmap for aspiring Web Developers.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {[
            'HTML & CSS Basics',
            'JavaScript Fundamentals',
            'Frontend Frameworks',
            'Backend & Deployment',
          ].map((step, index) => (
            <div
              key={step}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-cyan-400 text-black text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 md:px-16 lg:px-28 py-8 text-center text-slate-400">
        <p>© 2026 Study Path Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}