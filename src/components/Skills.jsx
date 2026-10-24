import { skillCategories, coreSubjects } from "../data/skills";
import { Check, BookOpen } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#858585]">
              03 / TOOLKIT
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#171717] tracking-tight">
            Technologies I work with.
          </h2>
          <p className="mt-3 text-sm text-[#666666] max-w-xl">
            A verified inventory of programming languages, tools, frameworks, and engineering concepts
            practiced in real applications and academic coursework.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="pb-3 border-b border-[#E5E5E5] mb-4">
                  <h3 className="font-display font-medium text-base text-[#171717]">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[#858585] mt-1">{group.description}</p>
                </div>

                {/* Skills List with notes */}
                <ul className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col">
                      <span className="text-sm font-medium text-[#171717] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-[11px] font-mono text-[#666666] pl-3 mt-0.5">
                          {skill.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Tag */}
              <div className="mt-6 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[10px] font-mono text-[#858585]">
                <span>CONFIDENT INTERVIEW READINESS</span>
                <span>VERIFIED</span>
              </div>
            </div>
          ))}

          {/* Academic Coursework Box */}
          <div className="p-6 bg-white border border-[#171717] rounded-[2px] flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-[#E5E5E5] mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-medium text-base text-[#171717]">
                    Core Computer Science Curricula
                  </h3>
                  <p className="text-xs text-[#858585] mt-1">Foundational Engineering Coursework</p>
                </div>
                <BookOpen className="w-4 h-4 text-[#171717]" />
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {coreSubjects.map((sub) => (
                  <div
                    key={sub}
                    className="p-2.5 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px] flex items-center gap-2 text-xs font-medium text-[#171717]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[10px] font-mono text-[#858585]">
              <span>ARYA COLLEGE OF ENGG. &amp; IT</span>
              <span>B.TECH CSE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
