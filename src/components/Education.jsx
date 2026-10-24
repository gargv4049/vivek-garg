export default function Education() {
  const educationHistory = [
    {
      institution: "Arya College of Engineering & IT",
      affiliation: "Affiliated with Rajasthan Technical University (RTU), Kota",
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      duration: "2024 – 2028 (Expected)",
      location: "Jaipur, Rajasthan, India",
      status: "Currently in 3rd Year",
      keyFocus: [
        "Object-Oriented Programming (Java & C++)",
        "Data Structures & Algorithm Design",
        "Database Management Systems & SQL",
        "Operating Systems & Computer Architecture",
        "Full-Stack Web Development",
      ],
      current: true,
    },
    {
      institution: "Nirmal Happy Senior Secondary School",
      affiliation: "Rajasthan Board of Secondary Education (RBSE)",
      degree: "Senior Secondary (Class XII) — Science Stream",
      duration: "Completed 2024",
      location: "Hindaun, Rajasthan, India",
      status: "Completed",
      keyFocus: ["Physics", "Chemistry", "Mathematics", "Foundational Science"],
      current: false,
    },
    {
      institution: "Adarsh Vidhya Mandir",
      affiliation: "Rajasthan Board of Secondary Education (RBSE)",
      degree: "Secondary Examination (Class X)",
      duration: "Completed 2022",
      location: "Hindaun City, Rajasthan, India",
      status: "Completed",
      keyFocus: ["Mathematics", "Science", "English", "Social Science"],
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#858585]">
              05 / EDUCATION
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#171717] tracking-tight">
            Academic background.
          </h2>
          <p className="mt-3 text-sm text-[#666666] max-w-xl">
            Formal education and core engineering training grounding my technical career.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Undergraduate Card */}
          <div className="lg:col-span-8 p-8 bg-[#F7F7F5] border border-[#171717] rounded-[2px]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E5E5E5] mb-6">
              <span className="px-2.5 py-1 text-xs font-mono uppercase bg-[#171717] text-white rounded-[2px]">
                Undergraduate Degree
              </span>
              <span className="text-xs font-mono text-[#171717] font-semibold">
                Expected Graduation: 2028
              </span>
            </div>

            <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#171717] tracking-tight mb-2">
              Arya College of Engineering &amp; IT
            </h3>
            
            <p className="text-base sm:text-lg font-medium text-[#171717] mb-1">
              Bachelor of Technology (B.Tech) in Computer Science Engineering
            </p>

            <p className="text-xs font-mono text-[#858585] mb-6">
              Affiliated with Rajasthan Technical University (RTU), Kota · Jaipur, Rajasthan
            </p>

            <div className="pt-6 border-t border-[#E5E5E5]">
              <h4 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-3 tracking-wider">
                Core Coursework &amp; Academic Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {educationHistory[0].keyFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-white border border-[#E5E5E5] rounded-[2px] text-xs font-medium text-[#171717] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Secondary Education Cards */}
          <div className="lg:col-span-4 space-y-6">
            {educationHistory.slice(1).map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E5E5E5] rounded-[2px]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#858585] mb-2">
                  <span>{edu.duration}</span>
                  <span>RBSE</span>
                </div>
                <h4 className="font-display font-medium text-lg text-[#171717] mb-1">
                  {edu.institution}
                </h4>
                <p className="text-xs text-[#666666] mb-3">
                  {edu.degree}
                </p>
                <p className="text-[11px] font-mono text-[#858585]">
                  {edu.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
