import { Mail, Github, Linkedin } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      {/* Bottom atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 100%, rgba(99,102,241,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
          Contact
        </p>
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let&apos;s build something
        </h2>
        <p className="mx-auto mb-12 max-w-sm text-[15px] leading-relaxed text-zinc-400">
          Open to internships, collaborations, and engineering challenges.
          Reach out — I&apos;d love to connect.
        </p>

        {/* Primary email CTA */}
        <div className="mb-8 flex justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-[#13141F] px-7 py-4 text-base font-medium text-zinc-200 transition-all hover:border-zinc-600/60 hover:bg-[#161820] hover:text-white"
          >
            <Mail className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-zinc-300" />
            {contact.email}
          </a>
        </div>

        {/* Secondary social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
