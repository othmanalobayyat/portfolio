import { ArrowRight, ArrowDown, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Primary glow — top center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% -5%, rgba(99,102,241,0.22) 0%, transparent 65%)",
          }}
        />
        {/* Secondary glow — offset right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 35% at 85% 15%, rgba(139,92,246,0.09) 0%, transparent 60%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        {/* Badge with gradient border */}
        <div className="animate-fade-up mb-8 inline-flex">
          <div className="rounded-full bg-gradient-to-r from-indigo-500/25 via-zinc-800 to-violet-500/25 p-px">
            <div className="flex items-center gap-2.5 rounded-full bg-[#09090b] px-4 py-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              <span className="text-sm text-zinc-400">
                Intelligent Systems Engineering
              </span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-100 mb-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.08]">
          <span className="text-white">Othman </span>
          <span className="bg-gradient-to-br from-zinc-100 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            Alobayyat
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-200 mx-auto mb-10 max-w-lg text-base text-zinc-400 sm:text-lg sm:leading-relaxed">
          Building intelligent real-world systems using software, embedded
          systems, and modern technologies.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-100 active:scale-[0.98]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/othmanalobayyat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/60 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800/60"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:border-zinc-700 hover:text-zinc-300"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="animate-fade-up delay-500 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-700 transition-colors hover:text-zinc-500"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  );
}
