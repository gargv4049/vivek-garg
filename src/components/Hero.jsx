import { useState } from "react";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/images/portrait.jpg");
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
    setImgSrc("/images/portrait-placeholder.svg");
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#E5E5E5] bg-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
            {/* Small Introductory Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717]"></span>
              <p className="text-xs font-mono font-medium tracking-[0.16em] uppercase text-[#858585]">
                B.TECH CSE STUDENT · ASPIRING SOFTWARE DEVELOPER
              </p>
            </div>

            {/* Main Restrained Heading */}
            <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight leading-[1.12] mb-4">
              Hi, I'm <span className="font-medium text-[#171717]">Vivek Garg</span>.
            </h1>

            {/* Supporting Headline */}
            <h2 className="font-display text-xl sm:text-2xl text-[#666666] font-normal leading-snug tracking-tight mb-6">
              Building useful digital experiences with code.
            </h2>

            {/* Natural Introduction Paragraph */}
            <p className="text-base sm:text-[17px] text-[#666666] leading-relaxed max-w-xl mb-8">
              I'm a Computer Science Engineering student interested in Java, C++, and web development. I enjoy building practical applications, exploring new technologies, and improving my problem-solving skills through real-world projects.
            </p>

            {/* Call-to-action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-[#171717] text-white hover:bg-black transition-colors rounded-[2px]"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#171717] border border-[#E5E5E5] hover:border-[#171717] hover:bg-[#F7F7F5] transition-colors rounded-[2px]"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-[#666666]" />
              </a>
            </div>

            {/* Subtle Profile & Social Links */}
            <div className="pt-6 border-t border-[#E5E5E5] w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#858585]">
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/gargv4049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#171717] hover:opacity-70 transition-opacity"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/gargv4049</span>
                  <ArrowUpRight className="w-3 h-3 text-[#858585]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/vivek-garg-vk283110/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#171717] hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/vivek-garg</span>
                  <ArrowUpRight className="w-3 h-3 text-[#858585]" />
                </a>
              </div>

              <div className="flex items-center gap-1 text-[#858585]">
                <MapPin className="w-3 h-3" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="w-full max-w-[400px] overflow-hidden border border-[#E5E5E5] bg-white">
              <img
                src={imgSrc}
                onError={handleImageError}
                alt={
                  imgError
                    ? "Neutral architectural placeholder for Vivek Garg"
                    : "Vivek Garg portrait"
                }
                className="w-full object-cover aspect-[4/5]"
                loading="eager"
                width="400"
                height="500"
              />
              <p className="border-t border-[#E5E5E5] px-4 py-3 text-xs font-mono text-[#666666]">
                Arya College of Engineering · B.Tech CSE '28
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
