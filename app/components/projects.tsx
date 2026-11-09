"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  ExternalLink,
  MoveUpRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Brew & Bean",
    category: "Coffee Shop Website",
    description:
      "A modern coffee shop website with Firebase authentication, Firestore, coffee menu, shopping cart and a responsive user experience.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&auto=format&fit=crop&q=85",
    live: "https://brew-bean-coffee-shop-2026.vercel.app",
    github: "#",
    year: "2026",
  },
  {
    number: "02",
    title: "ALU PRO",
    category: "Business Website",
    description:
      "A professional aluminium business website featuring products, services, company information and an order request interface.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&auto=format&fit=crop&q=85",
    live: "#",
    github: "#",
    year: "2026",
  },
  {
    number: "03",
    title: "VipBlog",
    category: "Blog Platform",
    description:
      "A clean blog platform with dynamic blog details, content discovery and a modern reading experience.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=85",
    live: "#",
    github: "#",
    year: "2026",
  },
  {
    number: "04",
    title: "Currency Pro",
    category: "Currency Converter",
    description:
      "A currency conversion application with exchange rate data, country flags and a simple, user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=85",
    live: "#",
    github: "#",
    year: "2026",
  },
  {
    number: "05",
    title: "MBI Calculator",
    category: "Calculator Application",
    description:
      "A simple and responsive calculator application designed to make calculations easy with a clean interface.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=85",
    live: "https://mbi-calculater.vercel.app",
    github: "#",
    year: "2026",
  },
  {
    number: "06",
    title: "Products API",
    category: "Product Showcase",
    description:
      "A product browsing experience that fetches data from an API and displays products in a responsive interface.",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1200&auto=format&fit=crop&q=85",
    live: "https://products-api-calling.vercel.app",
    github: "#",
    year: "2026",
  },
];

export default function Projects() {
  return (
    <section
      
      className="relative overflow-hidden px-6 py-28 md:px-12 lg:py-36"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#C7F36B]/[0.06] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#C7F36B]/[0.04] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div id="projects" className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C7F36B]" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#C7F36B]">
                My Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
            >
              Things I&apos;ve
              <br />
              <span className="text-[#C7F36B]">Created.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm"
          >
            <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
              A selection of projects built with creativity, curiosity and a
              passion for creating better digital experiences.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-4xl font-extrabold text-[var(--foreground)]">
                06
              </span>
              <span className="text-xs uppercase leading-5 tracking-[2px] text-[var(--muted)]">
                Selected
                <br />
                Projects
              </span>
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (index % 2) * 0.12,
              }}
              className="group min-w-0"
            >
              {/* Image Preview */}
              <div className="relative mb-7 aspect-[1.55/1] overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--card)]">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Project number */}
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-bold tracking-[2px] text-white backdrop-blur-lg">
                  PROJECT {project.number}
                </div>

                {/* Year */}
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-semibold text-white backdrop-blur-lg">
                  {project.year}
                </div>

                {/* Image bottom title */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 sm:p-8">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#C7F36B]">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C7F36B] text-black transition-transform duration-500 group-hover:rotate-45">
                    <MoveUpRight size={21} />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-6 px-1">
                <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.live}
                    target={project.live === "#" ? undefined : "_blank"}
                    rel={
                      project.live === "#"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group/link inline-flex items-center gap-3 rounded-full bg-[#C7F36B] px-6 py-3.5 text-xs font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    Live Preview
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>

                  <a
                    href={project.github}
                    target={project.github === "#" ? undefined : "_blank"}
                    rel={
                      project.github === "#"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={`GitHub ${project.title}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7F36B] hover:bg-[#C7F36B] hover:text-black"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-[var(--border)] transition-colors duration-500 group-hover:bg-[#C7F36B]/40" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-8 sm:p-12 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#C7F36B]/10 blur-[90px]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#C7F36B]">
                Have a project in mind?
              </p>

              <h3 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Let&apos;s create something
                <span className="text-[#C7F36B]"> remarkable.</span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]">
                Have an idea or an opportunity? I would love to hear about it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
