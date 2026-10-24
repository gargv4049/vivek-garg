import { Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      organization: "Iota Design & Innovations Lab Pvt. Ltd.",
      role: "App / Web Developer Intern",
      period: "Internship Experience",
      type: "Industrial Internship",
      location: "Jaipur, Rajasthan, India",
      overview:
        "Worked on client-facing and internal web interfaces, contributing to user experience design implementation, modular frontend code, and cross-browser testing.",
      responsibilities: [
        "Implemented responsive UI components using modern HTML, CSS, and JavaScript based on design specifications.",
        "Collaborated with senior developers to troubleshoot layout inconsistencies and optimize rendering behavior across desktop, tablet, and mobile browsers.",
        "Utilized Git version control for branching, code reviews, and maintaining a clean collaborative development workflow.",
        "Gained practical exposure to application architecture, project deadlines, and engineering problem-solving within an agile team.",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Git", "Responsive UI/UX"],
    },
    {
      organization: "Infosys Springboard",
      role: "Industrial Training / Intern",
      period: "Technical Training",
      type: "Foundational Software Program",
      location: "Virtual / India",
      overview:
        "Completed structured industrial technical training emphasizing procedural and object-oriented programming, algorithm analysis, and structured problem-solving.",
      responsibilities: [
        "Strengthened core algorithmic problem-solving using structured C programming.",
        "Practiced modular software development, standard libraries, and memory handling concepts.",
        "Completed technical evaluation modules and programming challenges.",
      ],
      technologies: ["C Programming", "Software Foundations", "Algorithm Design"],
    },
    {
      organization: "Cisco Networking Academy",
      role: "Technical Intern / Trainee",
      period: "Technical Program",
      type: "Certified Training",
      location: "Virtual / India",
      overview:
        "Completed verified curriculum in C programming and foundational networking concepts.",
      responsibilities: [
        "Explored low-level programming mechanics, data types, and pointer arithmetic.",
        "Gained appreciation for network layers, protocol architectures, and host-to-host communications.",
      ],
      technologies: ["C Language", "Networking Essentials", "Systems Architecture"],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#858585]">
              04 / EXPERIENCE
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#171717] tracking-tight">
            Learning through experience.
          </h2>
          <p className="mt-3 text-sm text-[#666666] max-w-xl">
            Hands-on internship experience and structured technical training where foundational computer
            science principles were put into real practice.
          </p>
        </div>

        {/* Editorial Timeline Layout */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-[#E5E5E5] rounded-[2px] transition-all duration-200 hover:border-[#171717]/50"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#E5E5E5]">
                <div>
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] rounded-[2px]">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-[#858585]">{exp.location}</span>
                  </div>
                  <h3 className="font-display font-medium text-2xl text-[#171717] tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-[#666666] mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#858585]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Overview & Responsibilities */}
              <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <h4 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-2 tracking-wider">
                    Role Summary
                  </h4>
                  <p className="text-sm text-[#666666] leading-relaxed mb-4">
                    {exp.overview}
                  </p>

                  <h4 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-2 tracking-wider">
                    Tools &amp; Focus
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-[#F7F7F5] text-[#171717] border border-[#E5E5E5] rounded-[2px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <h4 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-3 tracking-wider">
                    Key Contributions &amp; Applied Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-[#171717]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-2 shrink-0" />
                        <span className="leading-relaxed text-[#666666]">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
