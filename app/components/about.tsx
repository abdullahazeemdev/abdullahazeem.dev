
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Rocket,
  Target,
  Lightbulb,
  Laptop,
  Coffee,
  Terminal,
  Sparkles,
  CheckCircle2,
  MapPin,
  CalendarDays,
} from "lucide-react";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Firebase",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
];

const journey = [
  {
    year: "2025",
    title: "Started My Development Journey",
    description:
      "Started learning web development and built my foundation with HTML, CSS and JavaScript.",
    icon: Code2,
  },
  {
    year: "2025 – 2026",
    title: "Frontend Development",
    description:
      "Learned React.js, Tailwind CSS, TypeScript and modern frontend development concepts.",
    icon: Laptop,
  },
  {
    year: "2026",
    title: "Building Real Projects",
    description:
      "Started creating practical projects using React, Next.js, Firebase, Redux Toolkit and APIs.",
    icon: Rocket,
  },
  {
    year: "Currently",
    title: "Exploring Backend Development",
    description:
      "Learning Node.js, Express.js and backend fundamentals to move towards full-stack development.",
    icon: Terminal,
  },
];

const strengths = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I enjoy understanding problems and finding simple, effective solutions through code.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description:
      "I continuously explore new technologies and improve my development skills.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description:
      "I focus on building practical projects and improving through consistent practice.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I try to write organized, reusable and maintainable code in my projects.",
  },
];

export default function AboutPage() {
  return (
    <main  className="relative min-h-screen overflow-hidden bg-[var(--background)] pb-20 pt-32 text-[var(--foreground)]">

      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-[#C7F36B]/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[700px] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* HERO */}
        <section id="about" className="grid min-h-[520px] items-center gap-14 py-12 lg:grid-cols-[1.15fr_0.85fr]">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C7F36B]/30 bg-[#C7F36B]/10 px-4 py-2">
              <Sparkles size={15} className="text-[#C7F36B]" />
              <span className="text-xs font-semibold tracking-wide text-[#C7F36B]">
                GET TO KNOW ME
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              More Than
              <br />
              Just A{" "}
              <span className="relative inline-block text-[#C7F36B]">
                Developer.
                <span className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-[#C7F36B]/50" />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Hey! I'm Abdullah Azeem, a passionate Frontend Developer
              from Karachi, Pakistan. I enjoy transforming ideas into
              beautiful, interactive and user-friendly web experiences.
              I'm constantly learning, experimenting and building
              projects to become a better developer.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C7F36B] px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#C7F36B]/10"
              >
                Explore My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-7 py-4 text-sm font-semibold transition-all duration-300 hover:border-[#C7F36B] hover:text-[#C7F36B]"
              >
                Let's Connect
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C7F36B]" />
                Karachi, Pakistan
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#C7F36B]" />
                Learning & Building
              </span>
            </div>
          </motion.div>

          {/* PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-[#C7F36B]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl">
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#20251B] via-[#11140F] to-[#080908]">

                <div className="absolute left-8 top-8 h-32 w-32 rounded-full border border-[#C7F36B]/20" />
                <div className="absolute left-14 top-14 h-20 w-20 rounded-full border border-[#C7F36B]/20" />
                <div className="absolute bottom-[-80px] right-[-50px] h-64 w-64 rounded-full bg-[#C7F36B]/10 blur-3xl" />

                <div className="relative z-10 text-center">
                  <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[35px] border border-[#C7F36B]/40 bg-[#C7F36B]/10 shadow-[0_0_70px_rgba(199,243,107,0.12)]">
                    <span className="text-6xl font-black tracking-tighter text-[#C7F36B]">
                      A.A
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold text-white">
                    Abdullah Azeem
                  </h2>

                  <p className="mt-2 text-sm tracking-[3px] text-[#C7F36B]">
                    FRONTEND DEVELOPER
                  </p>

                  <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#C7F36B]" />
                    <span className="text-xs text-white/70">
                      Always learning something new
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <Code2 size={22} className="text-[#C7F36B]" />
                </div>

                <div className="absolute right-5 top-5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <Rocket size={22} className="text-[#C7F36B]" />
                </div>
              </div>

              <div className="flex items-center justify-between px-3 pb-2 pt-5">
                <div>
                  <p className="text-xs text-[var(--muted)]">
                    Based in
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    Karachi, Pakistan
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/abdullahazeemdev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="rounded-xl border border-[var(--border)] p-3 transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://linkedin.com/in/abdullahazeemdev/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-xl border border-[var(--border)] p-3 transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT INTRO */}
        <section className="mt-28 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#C7F36B]">
              01 / ABOUT ME
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              The Person
              <br />
              Behind The
              <span className="text-[#C7F36B]"> Code.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-10"
          >
            <p className="text-lg leading-9 text-[var(--muted)]">
              My journey into web development started with curiosity
              about how websites work and how technology can solve
              real-world problems.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Since then, I've been learning modern frontend
              technologies and applying them through hands-on projects.
              I have worked with React.js, Next.js, TypeScript, Redux
              Toolkit and Firebase to build responsive and functional
              applications.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Currently, I'm expanding my knowledge into backend
              development with Node.js and Express.js. My long-term
              goal is to become a skilled Full Stack Developer and
              contribute to meaningful products.
            </p>
          </motion.div>
        </section>

        {/* JOURNEY */}
        <section className="mt-32">

          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#C7F36B]">
              02 / MY JOURNEY
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Every Step
              <span className="text-[#C7F36B]"> Matters.</span>
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              Every project and every new concept has helped me grow
              as a developer.
            </p>
          </div>

          <div className="relative ml-3 space-y-7 border-l border-[#C7F36B]/30 pl-8 md:ml-8 md:pl-12">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7F36B]/50 md:p-8"
                >
                  <div className="absolute -left-[41px] top-8 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[var(--background)] bg-[#C7F36B] md:-left-[57px]" />

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C7F36B]/10 text-[#C7F36B]">
                      <Icon size={25} />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-[2px] text-[#C7F36B]">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-32" id="skills">

          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#C7F36B]">
              03 / MY TOOLKIT
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Technologies I
              <span className="text-[#C7F36B]"> Work With.</span>
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              These are the technologies I'm learning and using
              while building my projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.035 }}
                className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7F36B]/60 hover:bg-[#C7F36B]/5"
              >
                <CheckCircle2
                  size={16}
                  className="text-[#C7F36B] transition-transform group-hover:scale-110"
                />

                <span className="text-sm font-semibold">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STRENGTHS */}
        <section className="mt-32">

          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#C7F36B]">
              04 / WHAT DEFINES ME
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Beyond The
              <span className="text-[#C7F36B]"> Code.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C7F36B]/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C7F36B]/10 text-[#C7F36B] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#C7F36B] group-hover:text-black">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* GOAL */}
        <section className="mt-32">
          <div className="relative overflow-hidden rounded-[32px] border border-[#C7F36B]/20 bg-[#151A10] px-7 py-14 md:px-14 md:py-16">

            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#C7F36B]/10 blur-[90px]" />
            <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#C7F36B]/10 blur-[90px]" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C7F36B]/30 bg-[#C7F36B]/10 px-4 py-2">
                  <Coffee size={15} className="text-[#C7F36B]" />
                  <span className="text-xs font-semibold text-[#C7F36B]">
                    THE JOURNEY CONTINUES
                  </span>
                </div>

                <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight text-white md:text-5xl">
                  My Goal Is To
                  <br />
                  <span className="text-[#C7F36B]">
                    Build Something Meaningful.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-white/60">
                  I'm looking forward to learning from experienced
                  developers, working with great teams and turning
                  creative ideas into real-world applications.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#C7F36B] px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Work With Me
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM LINK */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#C7F36B]">
            THANK YOU FOR VISITING
          </p>

          <h2 className="mt-5 text-3xl font-black md:text-4xl">
            Let's Build The Future.
          </h2>

          <Link
            href="/projects"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--muted)] transition-colors hover:text-[#C7F36B]"
          >
            Explore Projects
            <ArrowDown size={17} />
          </Link>
        </div>

      </div>
    </main>
  );
}
