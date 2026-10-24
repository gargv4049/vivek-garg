import { useState, useEffect } from "react";
import { Menu, X, Download, FileText } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "projects", "skills", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-white border-b border-[#E5E5E5] py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#hero"
          className="group flex items-baseline gap-2.5 text-[#171717] hover:opacity-80 transition-opacity"
          aria-label="Vivek Garg - Back to top"
        >
          <span className="font-display font-semibold text-base tracking-wider uppercase">
            VIVEK GARG
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#858585] tracking-tight border-l border-[#E5E5E5] pl-2.5">
            B.Tech CSE '28
          </span>
        </a>

        {/* Right: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#666666]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`link-editorial transition-colors ${
                  isActive ? "text-[#171717] font-semibold" : "hover:text-[#171717]"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Download Resume Button (Verified PDF) */}
          <a
            href="/resume.pdf"
            download="Vivek_Garg_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#171717] border border-[#E5E5E5] hover:border-[#171717] hover:bg-[#F7F7F5] transition-all rounded-[2px]"
            title="Download verified Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/resume.pdf"
            download="Vivek_Garg_Resume.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#171717] border border-[#E5E5E5] rounded-[2px]"
            aria-label="Download Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#171717] hover:bg-[#F7F7F5] rounded transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E5E5] px-6 py-6 animate-fade-in-up">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#666666]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#171717] hover:text-[#666666] transition-colors border-b border-[#F7F7F5] last:border-b-0"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Vivek_Garg_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium bg-[#171717] text-white rounded-[2px]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
