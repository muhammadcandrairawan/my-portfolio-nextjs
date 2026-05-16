const testingTypes = [
  { icon: "✅", label: "Functional Testing" },
  { icon: "🔄", label: "Regression Testing" },
  { icon: "🔥", label: "Smoke Testing" },
  { icon: "🎨", label: "UI/UX Testing" },
  { icon: "🔌", label: "API Testing" },
  { icon: "📱", label: "Mobile Testing" },
  { icon: "🌐", label: "Cross-browser Testing" },
];

const tools = [
  { icon: "📮", label: "Postman" },
  { icon: "📊", label: "Google Sheets" },
  { icon: "📋", label: "Excel" },
  { icon: "📝", label: "Notion" },
  { icon: "📌", label: "Trello" },
  { icon: "📚", label: "Confluence" },
  { icon: "🟣", label: "ClickUp" }
];

const documentation = [
  { icon: "📄", label: "Test Case Writing" },
  { icon: "🐛", label: "Bug Reporting" },
  { icon: "📈", label: "Test Report" },
  { icon: "🗂️", label: "Test Plan" },
];

const groups = [
  { title: "Testing Types", items: testingTypes },
  { title: "Tools & Platforms", items: tools },
  { title: "Documentation & Reporting", items: documentation },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
    >
      {/* Section Label */}
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
        What I do
      </p>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-3">
        Skills & Tools
      </h2>

      {/* Desc */}
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-12">
        A focused set of manual testing skills and tools I use to ensure software quality across web and mobile platforms.
      </p>

      {/* Groups */}
      <div className="flex flex-col gap-10">
        {groups.map((group, index) => (
          <div key={group.title}>
            {/* Group Title */}
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
              {group.title}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>

            {/* Divider */}
            {index < groups.length - 1 && (
              <div className="border-t border-gray-100 mt-10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
