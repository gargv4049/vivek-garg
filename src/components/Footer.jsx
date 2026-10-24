import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-white border-t border-[#E5E5E5] py-16 text-[#666666]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#E5E5E5]">
          <div>
            <span className="font-display font-semibold text-lg tracking-wider uppercase text-[#171717] block">
              VIVEK GARG
            </span>
            <p className="text-xs font-mono text-[#858585] mt-1">
              B.Tech Computer Science Engineering · Arya College of Engineering &amp; IT
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href="https://github.com/gargv4049"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171717] hover:opacity-70 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-garg-vk283110/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171717] hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gargv4049@gmail.com"
              className="text-[#171717] hover:opacity-70 transition-opacity"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              download="Vivek_Garg_Resume.pdf"
              className="text-[#171717] hover:opacity-70 transition-opacity"
            >
              Resume (PDF)
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#171717] hover:opacity-70 transition-opacity"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#858585]">
          <p>© {currentYear} Vivek Garg. Built with React &amp; Tailwind CSS.</p>
          <p>Light Minimal Architecture Portfolio · Editorial Design</p>
        </div>
      </div>
    </footer>
  );
}
