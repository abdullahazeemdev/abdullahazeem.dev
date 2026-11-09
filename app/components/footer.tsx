
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MoveUpRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/abdullahazeemdev",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/abdullahazeemdev/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:abdullahazeemkhi@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] px-5 pt-20 text-white sm:px-8 lg:px-12">

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#C7F36B]/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Top section */}
        <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-16 md:grid-cols-[1.3fr_0.7fr_0.7fr]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="inline-block text-4xl font-bold tracking-[-0.06em] sm:text-5xl"
            >
              Abdullah<span className="text-[#C7F36B]">.</span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-8 text-white/40">
              Building modern digital experiences with clean code,
              creative ideas, and a passion for frontend development.
            </p>

            <a
              href="mailto:abdullahazeemkhi@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#C7F36B] transition-colors hover:text-white"
            >
              Let's work together
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-7 text-xs font-semibold tracking-[0.25em] text-white/35">
              NAVIGATION
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-[#C7F36B]"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-7 text-xs font-semibold tracking-[0.25em] text-white/35">
              SOCIAL LINKS
            </h3>

            <div className="space-y-5">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={social.name === "Email" ? undefined : "noreferrer"}
                    className="group flex w-fit items-center gap-3 text-sm text-white/55 transition-colors hover:text-[#C7F36B]"
                  >
                    <Icon size={17} />
                    {social.name}
                    <MoveUpRight
                      size={14}
                      className="opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Large branding */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-12 sm:py-16"
        >
          <p className="pointer-events-none select-none text-center text-[17vw] font-bold leading-none tracking-[-0.09em] text-white/[0.045] sm:text-[16vw]">
            ABDULLAH<span className="text-[#C7F36B]/20">.</span>
          </p>
        </motion.div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-white/35 sm:text-sm">
            © {new Date().getFullYear()} Abdullah Azeem. All rights reserved.
          </p>

          <p className="text-xs text-white/35 sm:text-sm">
            Designed & developed with{" "}
            <span className="text-[#C7F36B]">passion.</span>
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-medium text-white/60 transition-all duration-300 hover:border-[#C7F36B] hover:bg-[#C7F36B] hover:text-black"
          >
            Back to top
            <ArrowUp
              size={15}
              className="transition-transform group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
