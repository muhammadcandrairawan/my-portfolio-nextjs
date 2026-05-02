const projects = [
  {
    title: "Fitur Ajaib",
    description:
      "Functional & UAT testing for CIMB Niaga's flagship investment feature within the mobile banking app.",
    tags: ["Functional Testing", "UAT", "Mobile Banking"],
  },
  {
    title: "Sunlife Integration",
    description:
      "Validated life insurance purchase and policy management flows integrated directly into CIMB Niaga mobile banking.",
    tags: ["Functional Testing", "UAT", "Insurance"],
  },
  {
    title: "Pegadaian Gold Savings",
    description:
      "Tested gold savings and redemption flows in partnership with Pegadaian, ensuring accurate transaction validation.",
    tags: ["Functional Testing", "UAT", "Investment"],
  },
  {
    title: "CPTS KKI Module",
    description:
      "Verified credit card and customer data flows across CPTS KKI module, covering form submissions and backend validations.",
    tags: ["Functional Testing", "UAT", "Credit Card"],
  },
  {
    title: "Traveloka Flight Booking",
    description:
      "Tested end-to-end flight booking integration with Traveloka — search, booking, payment, and confirmation flows.",
    tags: ["Functional Testing", "UAT", "Travel"],
  },
  {
    title: "QRIS Domestic & Cross-Border",
    description:
      "Validated domestic and cross-border QRIS payment flows, including edge cases for international merchant transactions.",
    tags: ["Functional Testing", "UAT", "Payment"],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Projects
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg text-center">
          Features I've tested across CIMB Niaga and Bank Negara Indonesia
          mobile banking apps.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
