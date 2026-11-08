
"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowUpRight, Download, Move } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    speed: 0.48,
    phase: 0,
    rx: 0.19,
    ry: 0.15,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    speed: 0.38,
    phase: 1.4,
    rx: 0.26,
    ry: 0.21,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    speed: 0.32,
    phase: 2.8,
    rx: 0.34,
    ry: 0.27,
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    icon: FaReact,
    speed: 0.27,
    phase: 4.2,
    rx: 0.42,
    ry: 0.33,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    speed: 0.35,
    phase: 5.4,
    rx: 0.49,
    ry: 0.39,
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    speed: 0.24,
    phase: 2.1,
    rx: 0.56,
    ry: 0.45,
    color: "#06B6D4",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    speed: 0.3,
    phase: 3.5,
    rx: 0.63,
    ry: 0.51,
    color: "var(--foreground)",
  },
];

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const planetRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const animationRef = useRef<number | null>(null);

  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef<string | null>(null);

  const [dragging, setDragging] = useState<string | null>(null);

  // Solar system animation - runs only in browser after hydration
  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = (timestamp - startTime) / 1000;
      const scene = sceneRef.current;

      if (!scene) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = scene.clientWidth;
      const height = scene.clientHeight;

      const centerX = width / 2;
      const centerY = height / 2;

      const orbitSize = Math.min(width, height);
      const pointer = pointerRef.current;

      skills.forEach((skill) => {
        const element = planetRefs.current[skill.name];

        if (!element || draggingRef.current === skill.name) return;

        const angle = elapsed * skill.speed + skill.phase;

        const radiusX = orbitSize * skill.rx;
        const radiusY = orbitSize * skill.ry;

        let x = centerX + Math.cos(angle) * radiusX;
        let y = centerY + Math.sin(angle) * radiusY;

        // Cursor repulsion effect
        if (pointer) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 125 && distance > 0) {
            const force = ((125 - distance) / 125) * 65;

            x += (dx / distance) * force;
            y += (dy / distance) * force;
          }
        }

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Cursor movement
  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!sceneRef.current) return;

    const rect = sceneRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    pointerRef.current = { x, y };

    // Dragged planet position
    if (draggingRef.current) {
      const skillName = draggingRef.current;

      const element = planetRefs.current[skillName];

      if (element) {
        element.style.left = `${Math.max(20, Math.min(x, rect.width - 20))}px`;
        element.style.top = `${Math.max(20, Math.min(y, rect.height - 20))}px`;
      }
    }
  };

  // Start dragging
  const handlePointerDown = (
    e: PointerEvent<HTMLDivElement>,
    skillName: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    draggingRef.current = skillName;
    setDragging(skillName);

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  // Stop dragging
  const handlePointerUp = () => {
    draggingRef.current = null;
    setDragging(null);
  };

  const handlePointerLeave = () => {
    if (!draggingRef.current) {
      pointerRef.current = null;
    }
  };

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen overflow-hidden px-6 pb-20 pt-36 md:px-12"
    >
      {/* Background Effects */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-particle particle-one" />
        <div className="hero-particle particle-two" />
        <div className="hero-particle particle-three" />
        <div className="hero-particle particle-four" />
        <div className="hero-particle particle-five" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="availability-badge mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#C7F36B]" />

            <span className="text-xs font-semibold tracking-wide text-[var(--muted)]">
              OPEN TO WORK • FRONTEND DEVELOPER
            </span>
          </div>

          <p className="hero-greeting mb-4 text-lg font-medium text-[var(--muted)]">
            Hello, I&apos;m
          </p>

          <h1 className="hero-heading text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Abdullah
            <br />
            <span className="hero-name text-[#C7F36B]">Azeem.</span>
          </h1>

          <h2 className="hero-subtitle mt-7 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
            Frontend Developer
            <span className="text-[#C7F36B]"> &amp; </span>
            Web Developer
          </h2>

          <p className="hero-description mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
            I build modern, responsive and user-friendly web experiences using
            HTML, CSS, JavaScript, React.js, TypeScript and Next.js. I&apos;m
            passionate about creating digital products and expanding my skills
            into backend development.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#C7F36B] px-7 py-4 text-sm font-bold text-black shadow-lg shadow-[#C7F36B]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl active:scale-95"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7F36B] hover:text-[#C7F36B] active:scale-95"
            >
              Download CV
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials mt-12 flex items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[var(--muted)]">
              Follow Me
            </span>

            {/* GitHub */}
            <a
              href="https://github.com/abdullahazeemdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="cursor-pointer text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[#C7F36B]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.13c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.98 0 4.26-2.59 5.2-5.07 5.48.4.35.75 1.02.75 2.06v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/abdullahazeemdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[#C7F36B]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM8.1 18.4H5.1V9.1h3v9.3ZM6.6 7.83a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM18.9 18.4h-3v-4.52c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.6h-3V9.1h2.88v1.27h.04c.4-.74 1.38-1.52 2.84-1.52 3.03 0 3.59 1.99 3.59 4.58v4.97Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SOLAR SYSTEM */}
        <div className="solar-wrapper">
          <div
            ref={sceneRef}
            className="solar-scene"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* Orbit Rings */}
            {skills.map((skill) => (
              <div
                key={`${skill.name}-orbit`}
                className="solar-orbit-ring"
                style={{
                  width: `${skill.rx * 200}%`,
                  height: `${skill.ry * 200}%`,
                }}
              />
            ))}

            {/* Center Glow */}
            <div className="solar-center-glow" />

            {/* Center Profile - same AA circle structure */}
            <div className="solar-profile">
              <div className="aa-core">
                <div className="aa-core-ring" />

                <div className="aa-core-inner">
                  <img
                    src="/profile.png"
                    alt="Abdullah Azeem"
                    className="h-24 w-24 rounded-full object-cover sm:h-32 sm:w-32"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="profile-online">
                <span />
                Available
              </div>
            </div>

            {/* Technology Icon Planets */}
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  ref={(element) => {
                    planetRefs.current[skill.name] = element;
                  }}
                  className={`solar-skill-icon ${
                    dragging === skill.name ? "is-dragging" : ""
                  }`}
                  style={
                    {
                      "--skill-color": skill.color,
                    } as React.CSSProperties
                  }
                  onPointerDown={(e) => handlePointerDown(e, skill.name)}
                  onPointerUp={handlePointerUp}
                  onLostPointerCapture={handlePointerUp}
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <Icon size={25} />
                  <span className="skill-tooltip">{skill.name}</span>
                </div>
              );
            })}

            {/* Decorative Stars */}
            <span className="solar-star star-one">✦</span>
            <span className="solar-star star-two">✧</span>
            <span className="solar-star star-three">✦</span>
            <span className="solar-star star-four">✧</span>
            <span className="solar-star star-five">✦</span>
          </div>

          {/* Bottom Hint */}
          <div className="solar-controls">
            <span className="solar-hint">
              <Move size={13} />
              Explore technologies
            </span>
          </div>

          <div className="solar-status">
            <span className="status-dot" />
            Building &amp; Learning
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 mx-auto mt-20 flex max-w-7xl items-center justify-center gap-3 text-[var(--muted)]">
        <div className="h-px w-12 bg-[var(--border)]" />

        <span className="text-[10px] font-semibold uppercase tracking-[4px]">
          Scroll to explore
        </span>

        <div className="h-px w-12 bg-[var(--border)]" />
      </div>
    </section>
  );
}
