const skills = [
  {
    category: "Testing Skills",
    items: [
      "Test Case Writing",
      "Bug Reporting",
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "UAT",
    ],
  },
  {
    category: "Tools",
    items: ["Postman", "Confluence", "ClickUp", "Google Sheets", "Browser DevTools"],
  },
  {
    category: "Methodology",
    items: ["Agile", "Scrum", "Sprint Planning", "Daily Standup", "Retrospective"],
  },
];

export default function SkillSection() {
  return (
     <section id="skills" className="py-12 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Skills
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg text-center">
          Tools and practices I use in my day-to-day QA work.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
