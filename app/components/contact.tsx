
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import { useState } from "react";

const EMAIL = "abdullahazeemkhi@gmail.com";

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL ME",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: "BASED IN",
    value: "Karachi, Pakistan",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/abdullahazeemdev",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/abdullahazeemdev/",
  },
  {
    label: "Email",
    icon: Mail,
    href: `mailto:${EMAIL}`,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello Abdullah,\n\n${message}\n\nRegards,\n${name}\n${email}`
    )}`;

    setIsSending(true);
    window.location.href = mailtoLink;

    setTimeout(() => setIsSending(false), 1500);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#090909] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-[#C7F36B]/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-[450px] w-[450px] rounded-full bg-[#C7F36B]/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute right-[10%] top-24 -z-10 hidden opacity-20 lg:block">
        <div className="h-40 w-40 rounded-full border border-[#C7F36B]/30" />
        <div className="absolute inset-4 rounded-full border border-[#C7F36B]/20" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C7F36B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C7F36B]">
              Get in touch
            </span>
            <Sparkles size={14} className="text-[#C7F36B]/70" />
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
              Let's talk
              <br />
              about your
              <span className="font-serif font-normal italic text-[#C7F36B]">
                {" "}next idea.
              </span>
            </h2>

            <p className="max-w-sm pb-2 text-sm leading-8 text-white/45 sm:text-base">
              Great things start with a conversation. Whether you have a
              project, an opportunity, or just want to connect, I'd love to
              hear from you.
            </p>
          </div>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="mb-7 text-xs font-semibold tracking-[0.2em] text-white/35">
                CONTACT INFORMATION
              </p>

              <div className="space-y-4">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      className=" cursor-pointer group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#C7F36B]/30 hover:bg-[#C7F36B]/[0.04]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C7F36B]/15 bg-[#C7F36B]/[0.07] transition-all duration-300 group-hover:bg-[#C7F36B]">
                        <Icon
                          size={20}
                          className="text-[#C7F36B] transition-colors group-hover:text-black"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-white/35">
                          {item.label}
                        </p>
                        <p className="break-all text-sm font-medium text-white/85 transition-colors group-hover:text-[#C7F36B] sm:text-base">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="ml-auto shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C7F36B]"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social section */}
            <div className="mt-16">
              <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/35">
                LET'S CONNECT
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.label === "Email" ? undefined : "_blank"}
                      rel={social.label === "Email" ? undefined : "noreferrer"}
                      aria-label={social.label}
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7F36B] hover:bg-[#C7F36B] hover:text-black"
                    >
                      <Icon
                        size={19}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-10 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C7F36B] opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#C7F36B]" />
                </span>

                <span className="text-sm text-white/50">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column / Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-6 sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#C7F36B]/[0.06] blur-[80px]" />

            <div className="relative">
              <div className="mb-9 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C7F36B]">
                    HAVE A PROJECT?
                  </p>

                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Send me a message<span className="text-[#C7F36B]">.</span>
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    Fill in the details below and let's start a conversation.
                  </p>
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C7F36B]/20 bg-[#C7F36B]/[0.07] sm:flex">
                  <MessageCircle size={23} className="text-[#C7F36B]" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name and email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2.5 block text-xs font-medium text-white/55"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-[#C7F36B]/60 focus:bg-white/[0.045] focus:ring-2 focus:ring-[#C7F36B]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2.5 block text-xs font-medium text-white/55"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-[#C7F36B]/60 focus:bg-white/[0.045] focus:ring-2 focus:ring-[#C7F36B]/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2.5 block text-xs font-medium text-white/55"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-[#C7F36B]/60 focus:bg-white/[0.045] focus:ring-2 focus:ring-[#C7F36B]/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2.5 block text-xs font-medium text-white/55"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your idea..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-[#C7F36B]/60 focus:bg-white/[0.045] focus:ring-2 focus:ring-[#C7F36B]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#C7F36B] px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff80] hover:shadow-[0_10px_35px_rgba(199,243,107,0.15)] disabled:opacity-70"
                >
                  {isSending ? "Opening Email..." : "Send Message"}

                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-white/30">
                  Your default email application will open with your message.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-8"
        >
        </motion.div>
      </div>
    </section>
  );
}
