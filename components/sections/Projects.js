// components/sections/Projects.js
import { Lock, Smartphone, Monitor } from "lucide-react";
import { projects } from "@/data/projects";

const platformIcon = {
  "Mobile App": <Smartphone size={14} />,
  "Web App": <Monitor size={14} />,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
    >
      {/* Section Label */}
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
        My work
      </p>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-3">
        Projects
      </h2>

      {/* Desc */}
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-12">
        A selection of real projects where I was involved as a QA Manual
        Engineer.
      </p>

      {/* Project Cards */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-100 rounded-xl p-5 sm:p-6"
          >
            {/* Card Top */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="min-w-0">
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 flex-wrap">
                  <Lock size={11} className="shrink-0" />
                  <span>{project.client}</span>
                </p>
              </div>

              {/* Platform Badge */}
              <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-xs text-gray-500 shrink-0">
                {platformIcon[project.type]}
                {project.type}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-4" />

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-medium text-gray-900">
                  {project.testCases}
                </span>
                <span className="text-xs text-gray-400">
                  Test cases written
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-medium text-gray-900">
                  {project.platform}
                </span>
                <span className="text-xs text-gray-400">Platform</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-medium text-gray-900">
                  3rd party
                </span>
                <span className="text-xs text-gray-400">
                  Integration tested
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Empty Card */}
        <div className="border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2">
          <span className="text-2xl">📁</span>
          <p className="text-sm text-gray-400">More projects coming soon</p>
        </div>
      </div>
    </section>
  );
}
