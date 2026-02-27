"use client";
import Navbar from "./Navbar";
import {
  BookOpen,
  TestTubeDiagonal,
  Briefcase,
  User,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function PortfolioCard() {
  const sections = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
  ];

  return (
    <div
      id="portfolio-card"
      className="bg-white shadow-2xl rounded-3xl w-full max-w-2xl p-6 flex flex-col items-center card-scroll overflow-y-auto max-h-[90vh]"
    >
      <div className="w-full flex flex-col items-center mb-6">
        {/* Avatar / ilustrasi */}
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-3 hover:scale-105 transition-transform duration-300">
          <img
            src="/pravatar.jpeg" // avatar online sementara
            alt="Candra Avatar"
            className="w-24 h-24 object-cover"
          />
        </div>

        {/* Nama */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug md:leading-tight text-slate-900">
          Muhammad Candra Irawan
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-base md:text-lg font-normal text-slate-500 leading-relaxed">
          Quality Assurance Engineer · Manual Testing
        </p>

        {/* Divider */}
        <div className="mx-auto mt-4 h-0.5 w-10 bg-blue-500/50 rounded-full"></div>
      </div>
      <div
        id="main-container"
        className="relative h-screen overflow-y-auto scroll-smooth"
      >
        {/* Navbar */}
        <Navbar sections={sections} containerId="main-container" />

        {/* Konten */}
        <div className="w-full mt-6 flex flex-col gap-10">
          <section id="about" className="group">
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                <User className="h-5 w-5 text-slate-500" />
                About Me
              </h2>
              <div className="mt-2 h-0.5 w-8 bg-blue-500/60 rounded-full" />
            </div>

            <p className="max-w-2xl text-slate-600 leading-relaxed">
              I am a Quality Assurance Engineer specializing in manual testing
              for web and mobile applications. I have experience in test
              planning, test execution, and collaborating closely with
              developers and product teams to maintain product quality. I am
              experienced in functional, regression, and API testing to ensure
              applications are stable, reliable, and aligned with user
              requirements.
            </p>
          </section>

          <section id="skills" className="group">
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                <TestTubeDiagonal className="h-5 w-5 text-slate-500" />
                Skills
              </h2>
              <div className="mt-2 h-0.5 w-8 bg-blue-500/60 rounded-full" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Testing */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-slate-800 mb-3">Testing</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Manual Testing (Web & Mobile)</li>
                  <li>Functional & Regression Testing</li>
                  <li>Test Case & Scenario Design</li>
                </ul>
              </div>

              {/* Automation */}
              {/* <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-medium text-slate-800 mb-3">Automation</h3>
      <ul className="space-y-2 text-sm text-slate-600">
        <li>Cypress / Playwright</li>
        <li>Selenium (Basic)</li>
        <li>JavaScript / TypeScript</li>
      </ul>
    </div> */}

              {/* API & Tools */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-slate-800 mb-3">API & Tools</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Postman (API Testing)</li>
                  <li>REST API Validation</li>
                  <li>Git & Chrome DevTools</li>
                </ul>
              </div>

              {/* Workflow */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-slate-800 mb-3">Workflow</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Agile / Scrum</li>
                  <li>Confluence</li>
                  <li>Collaboration with Dev & Product</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="experience" className="group">
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                <Briefcase className="h-5 w-5 text-slate-500" />
                Experience
              </h2>
              <div className="mt-2 h-0.5 w-8 bg-blue-500/60 rounded-full" />
            </div>
            <div className="relative border-l border-slate-200 ml-3 space-y-10">
              {/* CIMB */}
              <div className="relative pl-10">
                <span className="absolute -left-1.5 top-1 w-3.5 h-3.5 rounded-full bg-blue-600" />
                <h3 className="font-medium text-slate-800">
                  Quality Assurance Engineer
                </h3>
                <p className="text-sm text-slate-500 mb-2">
                  CIMB Niaga · Oct 2025 – May 2026
                </p>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>Manual testing for web and mobile applications</li>
                  <li>Test case design based on business requirements</li>
                  <li>SIT and UAT testing before release</li>
                  <li>Test documentation using Confluence</li>
                </ul>
              </div>
              {/* BNI */}
              <div className="relative pl-10">
                <span className="absolute -left-1.75 top-1 w-3.5 h-3.5 rounded-full bg-slate-300" />
                <h3 className="font-medium text-slate-800">
                  Quality Assurance Engineer
                </h3>
                <p className="text-sm text-slate-500 mb-2">
                  BNI · May 2025 – Aug 2025
                </p>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>
                    Manual testing for web applications and middleware services
                  </li>
                  <li>
                    Conducted System Integration Testing (SIT) and User
                    Acceptance Testing (UAT)
                  </li>
                  <li>Verified integration and data flow across systems</li>
                  <li>Created and maintained SIT and UAT documentation</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="group">
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                <BookOpen className="h-5 w-5 text-slate-500" />
                Projects
              </h2>
              <div className="mt-2 h-0.5 w-8 bg-blue-500/60 rounded-full" />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-4">
                <ShieldCheck className="text-blue-600 mt-1" size={22} />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    User Registration & Login API Testing
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                    QA project focused on validating REST API endpoints for user
                    registration and authentication built with Express.js.
                  </p>
                </div>
              </div>

              {/* What was tested */}
              <ul className="text-sm text-slate-700 space-y-1 mb-4 list-disc list-inside">
                <li>
                  Request & response validation for register and login endpoints
                </li>
                <li>Positive and negative test scenarios</li>
                <li>Error handling and response status verification</li>
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {["Postman", "REST API", "Express.js", "JWT"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/muhammadcandrairawan/qa-api-testing.git"
                  target="_blank"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View QA Collection →
                </a>
                {/* <a
                  href="https://github.com/username/express-auth-api"
                  target="_blank"
                  className="text-sm font-medium text-slate-600 hover:underline"
                >
                  View API Source →
                </a> */}
              </div>
            </div>
          </section>

          <footer className="py-6 bg-slate-100 text-center">
            <p className="text-sm text-slate-500">
              © 2026 Muhammad Candra Irawan.
              <a
                href="https://github.com/muhammadcandrairawan"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://id.linkedin.com/in/muhammadcandrairawan"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
