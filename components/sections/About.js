const approaches = [
  {
    icon: "🔍",
    title: "Think like a user",
    desc: "Test beyond the happy path-exploring edge cases and real user scenarios to surface issues that matter.",
  },
  {
    icon: "📄",
    title: "Document clearly",
    desc: "Every bug report and test case I write is detailed enough for any developer to understand and act on immediately.",
  },
  {
    icon: "💬",
    title: "Communicate early",
    desc: "I flag potential issues as early as possible-not just at the end-so teams can fix problems before they grow.",
  },
  {
    icon: "🔄",
    title: "Stay consistent",
    desc: "Regression and smoke testing are part of every cycle — I make sure what worked before still works after every change.",
  },
];

export default function About() {
  return(
     <section id="about" className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

      {/* Section Label */}
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
        About me
      </p>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6">
        How I Work as a QA
      </h2>

      {/* Bio */}
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">
        I&apos;m a{" "}
        <span className="text-gray-900 font-medium">QA Manual Engineer</span>{" "}
        with hands-on experience in software testing across web and mobile
        platforms. I&apos;ve worked closely with development teams to identify issues early, write structured test cases, and ensure every release meets the expected quality standards .
      </p>
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-12">
        I believe good QA is not just about finding bugs — it&apos;s about{" "}
        <span className="text-gray-900 font-medium">
          understanding the product deeply
        </span>
        , asking the right questions, and communicating findings clearly so the team can act on them quickly.
      </p>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-10" />

      {/* Approach Title */}
      <p className="text-sm font-medium text-gray-900 mb-6">
        My approach to quality
      </p>

      {/* Approach Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {approaches.map((item) => (
          <div
            key={item.title}
            className="bg-gray-50 rounded-xl p-5"
          >
            <span className="text-2xl mb-3 block">{item.icon}</span>
            <p className="text-sm font-medium text-gray-900 mb-1">
              {item.title}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
