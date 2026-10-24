import { useState } from "react";
import { projects } from "../data/projects";
import { ArrowUpRight, ExternalLink, X, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Full Stack", "Frontend & APIs", "Systems & Java"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(selectedFilter) || p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header with Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#858585]">
                02 / SELECTED WORK
              </span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#171717] tracking-tight">
              Projects I've worked on.
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E5E5E5] rounded-[2px] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono transition-all rounded-[2px] ${
                  selectedFilter === cat
                    ? "bg-[#171717] text-white font-medium"
                    : "text-[#666666] hover:text-[#171717] hover:bg-[#F7F7F5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Two-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white border border-[#E5E5E5] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#171717]/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Project Visual / Screenshot Container */}
              <div className="relative aspect-[16/10] bg-[#F7F7F5] border-b border-[#E5E5E5] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  width="800"
                  height="500"
                />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-[#E5E5E5] rounded-[2px] text-[11px] font-mono font-medium text-[#171717]">
                  {project.number}
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-[#E5E5E5] rounded-[2px] text-[11px] font-mono text-[#666666]">
                  {project.category}
                </div>
              </div>

              {/* Project Meta & Information */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="font-display font-medium text-xl sm:text-2xl text-[#171717] tracking-tight mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs font-mono text-[#858585] uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm sm:text-[15px] text-[#666666] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="mb-6">
                  <p className="text-[11px] font-mono uppercase text-[#858585] mb-2 tracking-wider">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-[#F7F7F5] text-[#171717] border border-[#E5E5E5] rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights Bullet Points */}
                <div className="mb-6 pt-4 border-t border-[#E5E5E5]">
                  <ul className="space-y-1.5 text-xs text-[#666666]">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#171717] mt-1.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links / Action Footer */}
                <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#171717] hover:underline"
                        aria-label={`View ${project.title} repository on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-[#858585]" />
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#171717] hover:underline font-semibold"
                        aria-label={`Open live demonstration of ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3 text-[#858585]" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#858585] hover:text-[#171717] transition-colors"
                  >
                    <span>Full Details &rarr;</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Technical Modal Dialog */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in-up"
        >
          <div className="relative w-full max-w-2xl bg-white border border-[#E5E5E5] shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2px] max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5E5E5] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#858585]">
                  PROJECT ARCHITECTURE // {activeModalProject.number}
                </span>
                <h3 className="font-display font-medium text-xl text-[#171717]">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 text-[#666666] hover:text-[#171717] hover:bg-[#F7F7F5] rounded transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="overflow-hidden border border-[#E5E5E5] rounded-[2px]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-auto"
                />
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-2 tracking-wider">
                  Comprehensive Overview
                </h4>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {activeModalProject.longDescription || activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-3 tracking-wider">
                  Technical Specifications &amp; Implemented Capabilities
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px] flex items-start gap-2.5 text-xs text-[#171717]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-2 tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-white border border-[#E5E5E5] text-[#171717] rounded-[2px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {activeModalProject.liveDemoNote && (
                <div className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] text-xs font-mono text-[#666666] rounded-[2px]">
                  <strong>Deployment Note:</strong> {activeModalProject.liveDemoNote}
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="sticky bottom-0 bg-white border-t border-[#E5E5E5] px-6 py-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-medium text-[#666666] hover:text-[#171717] border border-[#E5E5E5] rounded-[2px]"
              >
                Close
              </button>

              <div className="flex items-center gap-3">
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#171717] text-white hover:bg-black rounded-[2px]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {activeModalProject.liveDemo && (
                  <a
                    href={activeModalProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium border border-[#171717] text-[#171717] hover:bg-[#F7F7F5] rounded-[2px]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
