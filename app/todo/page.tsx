import type { Metadata } from "next";
import Image from "next/image";
import {
  Download,
  CalendarDays,
  Trophy,
  TrendingUp,
  Flag,
  GitBranch,
  ListTodo,
  ExternalLink,
  Globe,
  Smartphone,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const WEB_URL = "https://todo-productivity-app-gamma.vercel.app/Welcome";
const APK_URL = "/apks/todo.apk";

// ─── Screenshot paths — drop files into public/screenshots/todo/ ──────────────

const screenshots = {
  tasks: "/screenshots/todo/tasks.png",
  calendar: "/screenshots/todo/calendar.png",
  achievements: "/screenshots/todo/achievements.png",
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Todo Productivity App — Get Things Done, Your Way",
  description:
    "A smart productivity app with task management, priorities, subtasks, calendar scheduling, streaks, and insights. Available on Android and as a web app for iPhone.",
  openGraph: {
    title: "Todo Productivity App — Get Things Done, Your Way",
    description:
      "Plan tasks, set deadlines, and stay on top of everything — beautifully.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todo Productivity App — Get Things Done, Your Way",
    description:
      "Plan tasks, set deadlines, and stay on top of everything — beautifully.",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: ListTodo,
    label: "Smart Task Management",
    desc: "Organize tasks by project, priority, and status with a clean, distraction-free interface.",
  },
  {
    icon: Flag,
    label: "Priorities & Due Dates",
    desc: "Assign urgency levels and deadlines to keep critical work front and center.",
  },
  {
    icon: GitBranch,
    label: "Subtask Tracking",
    desc: "Break tasks into subtasks and visualize progress with built-in progress bars.",
  },
  {
    icon: CalendarDays,
    label: "Calendar Scheduling",
    desc: "Plan your week visually with a built-in calendar and daily task breakdown.",
  },
  {
    icon: Trophy,
    label: "Achievements & Streaks",
    desc: "Earn badges and maintain streaks to build lasting productivity habits.",
  },
  {
    icon: TrendingUp,
    label: "Insights Dashboard",
    desc: "Track completion rates, patterns, and weekly progress at a glance.",
  },
];

const techStack = [
  "React Native",
  "Expo",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "JWT Auth",
  "Resend",
];

// ─── Phone frame with real screenshot ────────────────────────────────────────

function PhoneMockup({
  src,
  alt,
  className = "",
  imageHeight = 320,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageHeight?: number;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[30px] border border-zinc-600/40 bg-[#1A1B26] shadow-[0_24px_60px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="relative overflow-hidden" style={{ height: imageHeight }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 145px, 220px"
          priority={priority}
        />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TodoPage() {
  return (
    <div className="min-h-screen bg-[#0F1117] font-sans">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-7 lg:pb-24 lg:pt-8">
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 25% 65%, rgba(99,102,241,0.05) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0F1117] to-transparent" />
        </div>

        {/* Nav row */}
        <div className="relative mx-auto mb-16 flex max-w-5xl items-center justify-between lg:mb-20">
          <a
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-300"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">
              ←
            </span>
            Othman Alobayyat
          </a>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-[#13141F]/80 px-3 py-1 text-xs text-zinc-400">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
            v1.0.2
          </div>
        </div>

        {/* Hero content */}
        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="mb-6 inline-flex">
                <div className="rounded-full bg-gradient-to-r from-indigo-500/25 via-zinc-700/40 to-violet-500/25 p-px">
                  <div className="flex items-center gap-2 rounded-full bg-[#0F1117] px-4 py-1.5">
                    <ListTodo className="h-3 w-3 text-indigo-400" />
                    <span className="text-xs text-zinc-400">
                      Todo Productivity App
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
                Get things done,{" "}
                <span className="bg-gradient-to-br from-zinc-100 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                  your way.
                </span>
              </h1>

              <p className="mx-auto mb-9 max-w-md text-[15px] leading-[1.7] text-zinc-400 lg:mx-0">
                Plan tasks, set deadlines, and stay on top of everything —
                beautifully.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={APK_URL}
                  download="todo.apk"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-[11px] text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-100 hover:shadow-[0_4px_28px_rgba(255,255,255,0.14)] active:scale-[0.98]"
                >
                  <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                  Download for Android
                </a>
                <a
                  href={WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-600/50 bg-zinc-800/40 px-5 py-[11px] text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500/60 hover:bg-zinc-700/50 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  Try Web Version
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                </a>
              </div>

              <p className="mt-4 text-[11px] tracking-wide text-zinc-600">
                Android APK · iPhone Web App
              </p>
            </div>

            {/* Hero phone */}
            <div className="shrink-0">
              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 scale-110 rounded-[40px] blur-3xl"
                  style={{ background: "rgba(99,102,241,0.15)" }}
                />
                <PhoneMockup
                  src={screenshots.tasks}
                  alt="Todo app — task list"
                  className="w-[195px] rotate-1 transition-all duration-500 hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_32px_80px_rgba(0,0,0,0.7)] sm:w-[215px]"
                  imageHeight={420}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Selector ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Available On
          </p>
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Choose your platform
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Android */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-700/40 bg-[#13141F] p-6 transition-all duration-200 hover:border-zinc-600/50 hover:bg-[#161820] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(52,211,153,0.06), transparent)",
                }}
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700/50 bg-[#0F1117] transition-colors duration-200 group-hover:border-emerald-900/60 group-hover:bg-emerald-950/30">
                  <Smartphone className="h-5 w-5 text-emerald-400" />
                </div>
                <p className="mb-1 text-[15px] font-semibold text-white">
                  Android
                </p>
                <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                  Native app. Full offline support. Download and sideload the
                  APK directly on your device.
                </p>
                <a
                  href={APK_URL}
                  download="todo.apk"
                  className="group/btn flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_4px_20px_rgba(52,211,153,0.3)] active:scale-[0.98]"
                >
                  <Download className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-y-0.5" />
                  Download APK
                </a>
                <p className="mt-3 text-center text-xs text-zinc-600">
                  v1.0.2 · Android 8.0+ · ~12 MB
                </p>
              </div>
            </div>

            {/* iOS */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-700/40 bg-[#13141F] p-6 transition-all duration-200 hover:border-zinc-600/50 hover:bg-[#161820] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(14,165,233,0.06), transparent)",
                }}
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700/50 bg-[#0F1117] transition-colors duration-200 group-hover:border-sky-900/60 group-hover:bg-sky-950/30">
                  <Globe className="h-5 w-5 text-sky-400" />
                </div>
                <p className="mb-1 text-[15px] font-semibold text-white">
                  iPhone / iOS
                </p>
                <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                  Full experience as a web app in Safari. No install needed —
                  open the link and start using it instantly.
                </p>
                <a
                  href={WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-zinc-600/50 bg-zinc-800/40 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-200 hover:border-zinc-500/60 hover:bg-zinc-700/50 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Web Version
                </a>
                <p className="mt-3 text-center text-xs text-zinc-600">
                  Opens in Safari · No download needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── App Preview ── */}
      <section className="relative overflow-hidden px-6 pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 55%, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-12 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            App Preview
          </p>

          {/*
            Staggered phone heights via mt-N on each column + items-start.
            Tasks (mt-0) appears highest, Calendar (mt-8) is the baseline,
            Achievements (mt-4) sits between them. No translate hacks.
          */}
          <div className="flex items-start justify-center gap-5 sm:gap-8">
            {/* Tasks — highest */}
            <div className="flex flex-col items-center gap-4">
              <PhoneMockup
                src={screenshots.tasks}
                alt="Todo app — task list"
                className="w-[145px] sm:w-[162px]"
                imageHeight={310}
              />
              <span className="text-xs font-medium text-zinc-500">Tasks</span>
            </div>

            {/* Calendar — lowest (baseline) */}
            <div className="mt-8 flex flex-col items-center gap-4">
              <PhoneMockup
                src={screenshots.calendar}
                alt="Todo app — calendar view"
                className="w-[145px] sm:w-[162px]"
                imageHeight={310}
              />
              <span className="text-xs font-medium text-zinc-500">
                Calendar
              </span>
            </div>

            {/* Achievements — mid height, hidden on xs */}
            <div className="mt-4 hidden flex-col items-center gap-4 sm:flex">
              <PhoneMockup
                src={screenshots.achievements}
                alt="Todo app — achievements and streaks"
                className="w-[145px] sm:w-[162px]"
                imageHeight={310}
              />
              <span className="text-xs font-medium text-zinc-500">
                Achievements
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Features
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              stay productive
            </span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group rounded-xl border border-zinc-700/40 bg-[#13141F] p-5 transition-all duration-200 hover:border-zinc-600/50 hover:bg-[#161820] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/50 bg-[#0F1117] transition-colors duration-200 group-hover:border-indigo-900/60 group-hover:bg-indigo-950/40">
                  <Icon className="h-4 w-4 text-zinc-400 transition-colors duration-200 group-hover:text-indigo-400" />
                </div>
                <p className="mb-1.5 text-sm font-semibold leading-snug text-zinc-50">
                  {label}
                </p>
                <p className="text-[13px] leading-relaxed text-zinc-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Built with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-700/40 bg-[#13141F] px-3.5 py-2 text-xs font-medium text-zinc-400 transition-colors duration-150 hover:border-zinc-600/50 hover:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative px-6 pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get things done?
          </h2>
          <p className="mx-auto mb-10 max-w-sm text-[15px] leading-relaxed text-zinc-400">
            Download the Android app or open the web version in your browser.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={APK_URL}
              download="todo.apk"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-[11px] text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-100 hover:shadow-[0_4px_28px_rgba(255,255,255,0.14)] active:scale-[0.98]"
            >
              <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              Download APK
            </a>
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-600/50 bg-zinc-800/40 px-6 py-[11px] text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500/60 hover:bg-zinc-700/50 hover:text-white"
            >
              <Globe className="h-4 w-4" />
              Try Web Version
            </a>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-xl border border-zinc-700/40 bg-[#13141F] px-5 py-3 text-xs text-zinc-500">
            <span>com.othmanlearn.todoproductivity</span>
            <span className="hidden text-zinc-700 sm:inline">·</span>
            <span>v1.0.2</span>
            <span className="hidden text-zinc-700 sm:inline">·</span>
            <span>Android 8.0+</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-700/25 px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-zinc-400">
              Todo Productivity App
            </span>
            <span className="hidden text-zinc-700 sm:inline">·</span>
            <span className="hidden text-xs text-zinc-500 sm:inline">
              Built by Othman Alobayyat
            </span>
          </div>
          <span className="text-xs text-zinc-600">© 2025</span>
        </div>
      </footer>
    </div>
  );
}
