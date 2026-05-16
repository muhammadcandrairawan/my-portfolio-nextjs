import { Mail, FolderOpen } from "lucide-react";

const tools = [
  "Test Case",
  "Bug Reporting",
  "Postman",
  "Confluence",
  "ClickUp",
  "Google Sheets",
];

const stats = [
  { num: "3+", label: "Years of experience" },
  { num: "200+", label: "Test cases written" },
  { num: "300+", label: "Bugs found" },
  { num: "30+", label: "Projects completed" },
];

export default function Hero() {
  return (
    <section id="Hero" className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
        <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
        Available for freelance · Remote
      </div>

      {/* Name & Role */}
      <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-3">
        Muhammad Candra Irawan
      </h1>
      <p className="text-lg sm:text-xl text-gray-500 font-medium mb-4 sm:mb-5">
        QA Manual Engineer
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-7 sm:mb-8 max-w-xl">
        I ensure bugs don't reach your users. I specialize in writing test
        cases, running functional and regression tests, and keeping testing
        documentation clear and easy to follow.
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-xs sm:text-sm px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-12 sm:mb-14">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          <FolderOpen size={16} />
          View Projects
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-900 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <Mail size={16} />
          Contact Me
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-10 pt-6 border-t border-gray-100">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="text-xl sm:text-2xl font-medium text-gray-900">
              {stat.num}
            </span>
            <span className="text-xs text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}