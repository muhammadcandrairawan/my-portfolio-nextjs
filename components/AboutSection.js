import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[80vh] md:min-h-screen flex items-center px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* FOTO */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/pravatar.jpeg"
                alt="Quality Engineer Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* KONTEN */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Me
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
              I'm a{" "}
              <span className="font-semibold text-gray-800">
                QA Engineer with 3+ years of experience testing banking and
                financial applications
              </span>{" "}
              — from core transaction flows to payment features and UAT
              coordination with business stakeholders.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
              I focus on finding bugs that matter. Through structured test
              design, risk-based analysis, and thorough exploratory testing, I
              help teams ship features with confidence — knowing the critical
              paths have been properly validated.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
              I work closely with developers, product managers, and business
              teams to catch issues early, communicate them clearly, and support
              smooth, reliable releases.
            </p>

            {/* HIGHLIGHT */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold text-gray-900">
                  Manual & Exploratory Testing
                </p>
                <p className="text-gray-500 mt-1">
                  Functional, Regression & UAT
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold text-gray-900">
                  Risk-Based Test Design
                </p>
                <p className="text-gray-500 mt-1">
                  Critical path & edge case coverage
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold text-gray-900">
                  Cross-team Collaboration
                </p>
                <p className="text-gray-500 mt-1">
                  Dev, Product & Business Teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
