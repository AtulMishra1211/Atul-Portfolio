"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "panel shadow-[0_10px_40px_-12px_rgba(34,211,238,0.25)]" : "border border-transparent"
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="flex h-7 w-7 rotate-45 items-center justify-center rounded-md border border-primary/50 bg-primary/10 shadow-[0_0_14px_-2px_var(--primary)] transition-transform duration-500 group-hover:rotate-[225deg]">
              <span className="h-2 w-2 rounded-sm bg-primary" />
            </span>
            <span>
              {profile.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
              <span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm rounded-full transition-colors ${
                  active === link.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_16px_-4px_var(--primary)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-neon hidden items-center rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:scale-[1.04] sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-foreground"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-6 mt-2 rounded-2xl border border-border bg-background/95 p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-foreground/90 hover:bg-surface-2"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
