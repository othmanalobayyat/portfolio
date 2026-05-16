import { Mail, Github, Linkedin } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mb-12 text-zinc-400">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <Mail className="h-4 w-4 shrink-0 text-zinc-500" />
            <span className="truncate">{contact.email}</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <Github className="h-4 w-4 shrink-0 text-zinc-500" />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <Linkedin className="h-4 w-4 shrink-0 text-zinc-500" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
