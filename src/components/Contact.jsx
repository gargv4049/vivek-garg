import { useState } from "react";
import { MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = "gargv4049@gmail.com";
  const contactPhone = "+91 8005884935";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Construct functional mailto link
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    // Launch default email client
    window.location.href = `mailto:${contactEmail}?subject=${subjectLine}&body=${bodyContent}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#858585]">
              06 / CONTACT
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#171717] tracking-tight">
            Let's connect.
          </h2>
          <p className="mt-3 text-base text-[#666666] max-w-2xl leading-relaxed">
            I'm open to connecting with recruiters, developers, and teams working on interesting software
            projects and internship opportunities.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px]">
              <h3 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-4 tracking-wider">
                Direct Communication
              </h3>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="pb-4 border-b border-[#E5E5E5]">
                  <span className="text-xs font-mono text-[#858585] block mb-1">EMAIL ADDRESS</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-base font-medium text-[#171717] hover:underline"
                    >
                      {contactEmail}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono border border-[#E5E5E5] bg-white text-[#171717] hover:border-[#171717] rounded-[2px] transition-colors"
                      title="Copy email to clipboard"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="pb-4 border-b border-[#E5E5E5]">
                  <span className="text-xs font-mono text-[#858585] block mb-1">PHONE NUMBER</span>
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="text-sm font-medium text-[#171717] hover:underline"
                  >
                    {contactPhone}
                  </a>
                </div>

                {/* Location */}
                <div>
                  <span className="text-xs font-mono text-[#858585] block mb-1">LOCATION</span>
                  <p className="text-sm font-medium text-[#171717] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#858585]" />
                    <span>Jaipur, Rajasthan, India</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Profiles Strip */}
            <div className="p-6 bg-white border border-[#E5E5E5] rounded-[2px]">
              <h3 className="text-xs font-mono uppercase font-semibold text-[#858585] mb-4 tracking-wider">
                Professional Profiles
              </h3>

              <div className="space-y-3">
                <a
                  href="https://github.com/gargv4049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px] flex items-center justify-between group hover:border-[#171717] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#171717]" />
                    <div>
                      <p className="text-xs font-medium text-[#171717]">GitHub Profile</p>
                      <p className="text-[11px] font-mono text-[#858585]">github.com/gargv4049</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#858585] group-hover:text-[#171717] transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/vivek-garg-vk283110/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px] flex items-center justify-between group hover:border-[#171717] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#171717]" />
                    <div>
                      <p className="text-xs font-medium text-[#171717]">LinkedIn Profile</p>
                      <p className="text-[11px] font-mono text-[#858585]">
                        linkedin.com/in/vivek-garg-vk283110
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#858585] group-hover:text-[#171717] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-[#F7F7F5] border border-[#E5E5E5] rounded-[2px]">
              <div className="pb-4 border-b border-[#E5E5E5] mb-6">
                <h3 className="font-display font-medium text-xl text-[#171717]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#666666] mt-1">
                  Submitting prepares your message and connects directly via your mail client or mailto protocol.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-white border border-[#171717] rounded-[2px] space-y-4 animate-fade-in-up">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <Check className="w-5 h-5" />
                    <h4 className="font-medium text-sm">Message Prepared for Dispatch</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    Your email client should have opened with your draft pre-filled. If it didn't trigger
                    automatically, you can also write to me directly at{" "}
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-medium text-[#171717] underline"
                    >
                      {contactEmail}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 text-xs font-mono text-[#171717] border border-[#E5E5E5] hover:border-[#171717] rounded-[2px]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase text-[#171717] mb-1.5 font-medium"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.name ? "border-red-500" : "border-[#E5E5E5]"
                        } rounded-[2px] text-[#171717] focus:border-[#171717] focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase text-[#171717] mb-1.5 font-medium"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.email ? "border-red-500" : "border-[#E5E5E5]"
                        } rounded-[2px] text-[#171717] focus:border-[#171717] focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase text-[#171717] mb-1.5 font-medium"
                    >
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity / Technical collaboration"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E5E5] rounded-[2px] text-[#171717] focus:border-[#171717] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase text-[#171717] font-medium"
                      >
                        Message *
                      </label>
                      <span className="text-[10px] font-mono text-[#858585]">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vivek, I reviewed your Campus Lost & Found project..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        errors.message ? "border-red-500" : "border-[#E5E5E5]"
                      } rounded-[2px] text-[#171717] focus:border-[#171717] focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#858585]">
                      No third-party tracking
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-mono uppercase tracking-wider bg-[#171717] text-white hover:bg-black transition-colors rounded-[2px]"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
