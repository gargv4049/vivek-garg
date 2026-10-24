import { ShieldCheck } from "lucide-react";

export default function Achievements() {
  const verifiedCredentials = [
    {
      title: "CODEFIESTA 4.0 Hackathon 2025 — 18th Place",
      issuer: "GTI (Global Technical Institute), Jaipur",
      category: "Competitive Hackathon",
      date: "2025",
      description:
        "Participated in the competitive 24-hour hackathon, engineering a working software prototype and securing an 18th-place finish among collegiate developer teams.",
    },
    {
      title: "Campus Ambassador — Techfest",
      issuer: "IIT Bombay (Indian Institute of Technology Bombay)",
      category: "Technical Outreach & Leadership",
      date: "Academic Year 2024–2025",
      description:
        "Served as institutional liaison for Asia's largest science and technology festival, coordinating technical workshops, coding challenges, and campus participation.",
    },
    {
      title: "C Programming Certification",
      issuer: "Cisco Networking Academy",
      category: "Language Certification",
      date: "Verified Credential",
      description:
        "Successfully completed certified curriculum covering procedural C syntax, pointer manipulation, memory allocation, and algorithmic problem-solving.",
    },
    {
      title: "Technical Training in C & Programming Fundamentals",
      issuer: "Infosys Springboard",
      category: "Industrial Training",
      date: "Verified Training",
      description:
        "Completed rigorous software development foundations, structured program design, and standard development methodologies.",
    },
    {
      title: "MongoDB Basics for Students",
      issuer: "MongoDB University",
      category: "Database Coursework",
      date: "August 2025",
      description:
        "Completed foundational study on document databases, JSON/BSON data structures, CRUD operations, indexing, and aggregation pipelines.",
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#858585]">
              RECOGNITION &amp; CERTIFICATIONS
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#171717] tracking-tight">
            Verified milestones.
          </h2>
          <p className="mt-3 text-sm text-[#666666] max-w-xl">
            A restrained catalogue of competitive coding results, leadership initiatives, and technical
            certifications completed during my undergraduate studies.
          </p>
        </div>

        {/* Compact Editorial List Layout */}
        <div className="bg-white border border-[#E5E5E5] rounded-[2px] divide-y divide-[#E5E5E5]">
          {verifiedCredentials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-colors hover:bg-[#F7F7F5]/50"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] rounded-[2px]">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-[#858585]">{item.issuer}</span>
                </div>

                <h3 className="font-display font-medium text-lg sm:text-xl text-[#171717] tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center md:flex-col md:items-end justify-between md:justify-start gap-2">
                <span className="text-xs font-mono text-[#858585]">{item.date}</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#171717] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
