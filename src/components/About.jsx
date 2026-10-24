import { Layers, Terminal } from "lucide-react";

export default function About() {
  const profileDetails = [
    { label: "Institution", value: "Arya College of Engineering & IT (RTU)" },
    { label: "Degree", value: "B.Tech in Computer Science Engineering" },
    { label: "Current Standing", value: "Third Year (Graduation Expected 2028)" },
    { label: "Location", value: "Jaipur, Rajasthan, India" },
    { label: "Primary Languages", value: "Java, C++, C, JavaScript, Python" },
    { label: "Core Interests", value: "Systems, Full-Stack Architecture, Algorithms" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#858585]">
              01 / ABOUT
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#171717] tracking-tight">
            A little about me.
          </h2>
        </div>

        {/* Editorial Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-[#666666] text-base sm:text-[17px] leading-relaxed">
            <p>
              I am a third-year Computer Science Engineering student at{" "}
              <strong className="font-medium text-[#171717]">
                Arya College of Engineering &amp; IT
              </strong>
              , affiliated with Rajasthan Technical University, with an expected graduation in{" "}
              <strong className="font-medium text-[#171717]">2028</strong>.
            </p>

            <p>
              My primary technical focus centers on{" "}
              <strong className="font-medium text-[#171717]">Java</strong>,{" "}
              <strong className="font-medium text-[#171717]">C++</strong>, and modern{" "}
              <strong className="font-medium text-[#171717]">web development</strong>. I enjoy
              understanding how systems operate under the hood—from memory management and Object-Oriented
              design to relational database schema transactions and RESTful web protocols.
            </p>

            <p>
              Through an{" "}
              <strong className="font-medium text-[#171717]">
                App/Web Developer internship at Iota Design &amp; Innovations Lab
              </strong>
              , I experienced firsthand how code translates into usable digital tools. That hands-on
              experience reinforced my habit of writing structured, maintainable code rather than relying on
              shortcuts.
            </p>

            <p>
              My current ambition is to continue deepening my problem-solving ability, collaborate with
              thoughtful engineering teams, and steadily grow into a high-caliber software developer.
            </p>

            {/* Guiding Principles Strip */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px]">
                <div className="flex items-center gap-2.5 mb-2">
                  <Terminal className="w-4 h-4 text-[#171717]" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717]">
                    Foundational First
                  </h3>
                </div>
                <p className="text-xs text-[#666666] leading-normal">
                  Prioritizing data structures, algorithmic efficiency, and object-oriented principles over fleeting trends.
                </p>
              </div>

              <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px]">
                <div className="flex items-center gap-2.5 mb-2">
                  <Layers className="w-4 h-4 text-[#171717]" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717]">
                    Pragmatic Engineering
                  </h3>
                </div>
                <p className="text-xs text-[#666666] leading-normal">
                  Building full-stack solutions with clean separation of concerns, transactional safety, and verified workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Structured Profile Dossier */}
          <div className="lg:col-span-5">
            <div className="bg-[#F7F7F5] p-6 sm:p-8 border border-[#E5E5E5] rounded-[2px]">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717]">
                  ACADEMIC PROFILE &amp; SNAPSHOT
                </span>
                <span className="text-[10px] font-mono text-[#858585]">JAIPUR · IN</span>
              </div>

              <dl className="space-y-4">
                {profileDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="pb-3 border-b border-[#E5E5E5] last:border-b-0 last:pb-0"
                  >
                    <dt className="text-xs font-mono text-[#858585] uppercase mb-1">{item.label}</dt>
                    <dd className="text-sm font-medium text-[#171717]">{item.value}</dd>
                  </div>
                ))}
              </dl>

              {/* Verified note */}
              <div className="mt-8 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#858585]">
                <span>STATUS: ACTIVE UNDERGRADUATE</span>
                <span>CLASS OF 2028</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
