"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

// Server aur initial client render dono par same output
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const dispatch = useDispatch();
  const pathname = usePathname();

  const theme = useSelector((state: any) => state.theme.mode);
  const isDark = theme === "dark";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleTheme = () => {
    if (mounted) {
      dispatch(toggleTheme());
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-5 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)]/85 px-4 py-3 shadow-xl shadow-black/5 backdrop-blur-2xl transition-all duration-300 md:px-7">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#C7F36B] text-sm font-black text-black shadow-lg shadow-[#C7F36B]/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            A.A
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
          </div>

          <div className="leading-tight">
            <h2 className="text-base font-bold tracking-wide text-[var(--foreground)]">
              Abdullah Azeem
            </h2>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[2px] text-[var(--muted)]">
              Frontend Developer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] p-1.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative cursor-pointer rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#C7F36B] text-black shadow-md shadow-[#C7F36B]/20"
                    : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={handleTheme}
            disabled={!mounted}
            aria-label={
              !mounted
                ? "Loading theme"
                : isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
            }
            title={!mounted ? "Loading" : isDark ? "Light Mode" : "Dark Mode"}
            className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C7F36B] hover:bg-[#C7F36B] hover:text-black active:scale-90 disabled:cursor-wait md:h-11 md:w-11"
          >
            {!mounted ? (
              <span className="h-5 w-5 rounded-full bg-[var(--muted)]/20" />
            ) : isDark ? (
              <Sun
                size={19}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            ) : (
              <Moon
                size={19}
                className="transition-transform duration-500 group-hover:-rotate-12"
              />
            )}
          </button>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="group hidden cursor-pointer items-center gap-2 rounded-full bg-[#C7F36B] px-5 py-3 text-sm font-bold text-black shadow-lg shadow-[#C7F36B]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl active:scale-95 lg:flex"
          >
            Let's Talk
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-all duration-300 hover:border-[#C7F36B] hover:bg-[#C7F36B] hover:text-black active:scale-90 lg:hidden md:h-11 md:w-11"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 shadow-2xl shadow-black/10 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#C7F36B] text-black"
                    : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.name}
                <ArrowUpRight
                  size={16}
                  className={`transition-all duration-300 ${
                    isActive ? "translate-x-0 opacity-100" : "opacity-40"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="group mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#C7F36B] py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-white active:scale-95"
          >
            Let's Talk
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
