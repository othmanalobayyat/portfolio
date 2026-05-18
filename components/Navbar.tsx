"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled || open
            ? "border-b border-zinc-700/40 bg-[#0F1117]/95 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-60"
            onClick={close}
          >
            OA
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/todo"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Products
            </a>
            <a
              href="#contact"
              className="ml-1 rounded-lg border border-zinc-700/50 bg-[#13141F] px-3.5 py-1.5 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600/60 hover:bg-[#1A1B26] hover:text-white"
            >
              Hire me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/50 bg-[#13141F] text-zinc-400 transition-colors hover:border-zinc-600/50 hover:text-white sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out sm:hidden",
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!open}
        >
          <div className="border-t border-zinc-700/40 px-6 pb-5 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:bg-[#13141F] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/todo"
                onClick={close}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:bg-[#13141F] hover:text-white"
              >
                Products
              </a>
              <div className="mt-3 pt-3 border-t border-zinc-700/40">
                <a
                  href="#contact"
                  onClick={close}
                  className="flex items-center justify-center rounded-lg border border-zinc-700/50 bg-[#13141F] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600/60 hover:bg-[#1A1B26] hover:text-white"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop — closes menu when tapping outside */}
      {open && (
        <div
          className="fixed inset-0 z-40 sm:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}
    </>
  );
}
