import { Github, Linkedin } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/40 px-6 py-7">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-zinc-400">
            Othman Alobayyat
          </span>
          <span className="hidden text-zinc-800 sm:block">·</span>
          <span className="hidden text-xs text-zinc-700 sm:block">
            Intelligent Systems Engineering
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-700 transition-colors hover:text-zinc-400"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-700 transition-colors hover:text-zinc-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <span className="text-xs text-zinc-700">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
