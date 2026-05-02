export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
             I Break Things So Your Users Don't Have To
            </h1>

            <p className="mt-4 text-lg text-gray-600">
            Finding bugs before they reach your customers — through structured 
  test design and thorough exploratory testing.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                download
              >
                Download Resume
              </a>
            </div>

            {/* Experience Summary */}
            <p className="mt-6 text-sm text-gray-500">
              <span className="font-semibold text-gray-800">3+ Years</span> •
              Banking & Financial Apps • Functional, Regression & UAT
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">
            {/* What I Do */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">What I Do</h2>
              <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                <li>Write test cases that actually catch real bugs</li>
                <li>Test beyond the happy path — edge cases, race conditions, real user flows</li>
                <li>Write bug reports developers actually understand and can act on</li>
              </ul>
            </div>

            {/* Testing Approach */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                My Testing Approach
              </h2>
              <p className="mt-3 text-gray-600 font-medium">
               I don't just run test cases — I understand the product first, then find where it's most likely to break.
              </p>
            </div>

            {/* Selected Work */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Selected Work
              </h2>
              <p className="mt-3 text-gray-600">
               Core banking transactions • Payment & transfer flow validation • UAT coordination with business stakeholders
              </p>
            </div>

            {/* Connect */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Let’s Connect
              </h2>
              <p className="mt-3 text-gray-600">
                Looking for a QA Engineer who takes quality seriously? Let's talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
