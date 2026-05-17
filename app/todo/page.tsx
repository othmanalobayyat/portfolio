import type { Metadata } from "next";
import {
  Download,
  ArrowLeft,
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

// ─── Phone screens ────────────────────────────────────────────────────────────

function TasksScreen() {
  const tasks = [
    { done: false, priority: "high", w: "60px" },
    { done: false, priority: "none", w: "80px" },
    { done: true, priority: "none", w: "55px" },
    { done: false, priority: "high", w: "70px" },
    { done: true, priority: "none", w: "50px" },
    { done: false, priority: "medium", w: "75px" },
  ];

  return (
    <div className="bg-[#080810] p-4 pb-8">
      <div className="mb-4">
        <p className="text-[9px] font-medium uppercase tracking-widest text-zinc-600">
          Today · May 17
        </p>
        <p className="mt-0.5 text-[13px] font-bold text-white">My Tasks</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[40%] rounded-full bg-indigo-500" />
          </div>
          <span className="text-[9px] font-medium text-zinc-600">3 / 7</span>
        </div>
      </div>

      <div className="space-y-2.5">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`h-3.5 w-3.5 shrink-0 rounded border ${
                task.done
                  ? "border-indigo-500/50 bg-indigo-500/20"
                  : "border-zinc-700"
              }`}
            />
            <div
              className={`h-[7px] rounded-full ${
                task.done ? "bg-zinc-800" : "bg-zinc-500"
              }`}
              style={{ width: task.w }}
            />
            {task.priority === "high" && (
              <div className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
            )}
            {task.priority === "medium" && (
              <div className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
            )}
          </div>
        ))}
      </div>

      {/* FAB */}
      <div className="mt-5 flex justify-end">
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.6)]">
          <div className="h-px w-3 bg-white" />
          <div className="absolute h-3 w-px bg-white" />
        </div>
      </div>
    </div>
  );
}

function StreakScreen() {
  const badges = [
    { active: true, color: "bg-amber-500" },
    { active: true, color: "bg-indigo-500" },
    { active: true, color: "bg-emerald-500" },
    { active: false, color: "" },
    { active: false, color: "" },
    { active: false, color: "" },
    { active: false, color: "" },
    { active: false, color: "" },
  ];

  return (
    <div className="bg-[#080810] p-4 pb-8">
      <p className="mb-3 text-[13px] font-bold text-white">Activity</p>

      <div className="mb-3 rounded-xl border border-amber-900/30 bg-gradient-to-br from-amber-950/40 to-orange-950/20 p-3">
        <p className="text-[9px] font-medium uppercase tracking-widest text-amber-700">
          Current Streak
        </p>
        <div className="mt-1 flex items-end gap-1.5">
          <span className="text-[28px] font-bold leading-none text-amber-400">
            12
          </span>
          <span className="mb-1 text-[10px] text-amber-700">days</span>
        </div>
        <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-amber-900/30">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-amber-500 to-orange-400" />
        </div>
        <p className="mt-1 text-[8px] text-amber-800">8 days to next badge</p>
      </div>

      <p className="mb-2 text-[9px] font-medium uppercase tracking-widest text-zinc-600">
        Badges
      </p>
      <div className="grid grid-cols-4 gap-1.5">
        {badges.map((b, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg ${
              b.active
                ? b.color + " shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                : "border border-zinc-800 bg-zinc-900/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function CalendarScreen() {
  const taskColors = [
    { color: "bg-indigo-500", width: "80%" },
    { color: "bg-amber-500", width: "60%" },
    { color: "bg-emerald-500", width: "70%" },
  ];
  const hasDotDays = [3, 7, 10, 14, 17, 21, 24, 28];

  return (
    <div className="bg-[#080810] p-4 pb-8">
      <p className="mb-2.5 text-[13px] font-bold text-white">Schedule</p>

      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-zinc-400">May 2025</span>
        <div className="flex gap-0.5">
          <div className="h-3 w-3 rounded border border-zinc-800" />
          <div className="h-3 w-3 rounded border border-zinc-800" />
        </div>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-0.5">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div key={i} className="text-center text-[7px] font-medium text-zinc-700">
            {d}
          </div>
        ))}
      </div>

      <div className="mb-3 grid grid-cols-7 gap-0.5">
        {Array.from({ length: 35 }).map((_, i) => {
          const day = i - 2;
          const inMonth = day >= 1 && day <= 31;
          const isToday = day === 17;
          const hasDot = hasDotDays.includes(day) && inMonth && !isToday;
          return (
            <div
              key={i}
              className={`flex flex-col items-center rounded py-0.5 ${
                isToday ? "bg-indigo-600" : ""
              }`}
            >
              <span
                className={`text-[8px] ${
                  !inMonth
                    ? "text-zinc-800"
                    : isToday
                    ? "font-bold text-white"
                    : "text-zinc-500"
                }`}
              >
                {inMonth ? day : ""}
              </span>
              {hasDot && (
                <div className="mt-0.5 h-0.5 w-0.5 rounded-full bg-indigo-500" />
              )}
            </div>
          );
        })}
      </div>

      <p className="mb-1.5 text-[9px] font-medium uppercase tracking-widest text-zinc-600">
        Today
      </p>
      <div className="space-y-1.5">
        {taskColors.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-md bg-zinc-900/60 px-2 py-1.5"
          >
            <div className={`h-3 w-0.5 shrink-0 rounded-full ${t.color}`} />
            <div
              className="h-[7px] rounded-full bg-zinc-600"
              style={{ width: t.width }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Phone frame ──────────────────────────────────────────────────────────────

type ScreenType = "tasks" | "streak" | "calendar";

function PhoneMockup({
  type,
  className = "",
}: {
  type: ScreenType;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[30px] border border-zinc-700/50 bg-zinc-900 shadow-[0_24px_60px_rgba(0,0,0,0.65)] ${className}`}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between bg-zinc-950 px-4 py-2.5">
        <span className="text-[9px] font-semibold text-zinc-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-0.5">
            {[3, 4, 5, 4].map((h, i) => (
              <div
                key={i}
                className="w-[2px] rounded-sm bg-zinc-600"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div className="flex h-2.5 w-4 items-center rounded-sm border border-zinc-600 px-px">
            <div className="h-1.5 w-2.5 rounded-sm bg-zinc-500" />
          </div>
        </div>
      </div>

      {type === "tasks" && <TasksScreen />}
      {type === "streak" && <StreakScreen />}
      {type === "calendar" && <CalendarScreen />}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TodoPage() {
  return (
    <div className="min-h-screen bg-[#09090b] font-sans">
      {/* ── Top bar ── */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-7">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Portfolio
        </a>
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-500">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
          v1.0.0
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-10 pt-16 lg:pb-20 lg:pt-24">
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(99,102,241,0.2) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#09090b] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Gradient border badge */}
              <div className="mb-6 inline-flex">
                <div className="rounded-full bg-gradient-to-r from-indigo-500/20 via-zinc-800 to-violet-500/20 p-px">
                  <div className="flex items-center gap-2 rounded-full bg-[#09090b] px-4 py-1.5">
                    <ListTodo className="h-3 w-3 text-indigo-400" />
                    <span className="text-xs text-zinc-400">
                      Todo Productivity App
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Get things done,{" "}
                <span className="bg-gradient-to-br from-zinc-100 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                  your way.
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-md text-[15px] leading-relaxed text-zinc-400 lg:mx-0">
                Plan tasks, set deadlines, and stay on top of everything —
                beautifully.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={APK_URL}
                  download="todo.apk"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-100 active:scale-[0.98]"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download for Android
                </a>
                <a
                  href={WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-5 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-600 hover:bg-zinc-800/60"
                >
                  <Globe className="h-4 w-4" />
                  Try Web Version
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-600" />
                </a>
              </div>

              <p className="mt-4 text-xs text-zinc-700">
                Android APK · iPhone Web App
              </p>
            </div>

            {/* Hero phone */}
            <div className="shrink-0">
              <div className="relative">
                {/* Glow behind the phone */}
                <div
                  className="absolute inset-0 -z-10 scale-110 rounded-[40px] blur-3xl"
                  style={{ background: "rgba(99,102,241,0.12)" }}
                />
                <PhoneMockup
                  type="tasks"
                  className="w-[195px] rotate-1 transition-transform hover:rotate-0 sm:w-[215px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Selector ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
            Available On
          </p>
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Choose your platform
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Android card */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/30 p-6 transition-all hover:border-zinc-600/60 hover:bg-zinc-900/50">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <Smartphone className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="mb-0.5 text-base font-semibold text-white">
                Android
              </p>
              <p className="mb-5 text-sm leading-relaxed text-zinc-500">
                Native app. Full offline support. Download and sideload the APK
                directly on your device.
              </p>
              <a
                href={APK_URL}
                download="todo.apk"
                className="group flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-emerald-400 active:scale-[0.98]"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download APK
              </a>
              <p className="mt-3 text-center text-xs text-zinc-700">
                v1.0.0 · Android 8.0+ · ~12 MB
              </p>
            </div>

            {/* iOS card */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/30 p-6 transition-all hover:border-zinc-600/60 hover:bg-zinc-900/50">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/35 to-transparent" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <Globe className="h-5 w-5 text-sky-400" />
              </div>
              <p className="mb-0.5 text-base font-semibold text-white">
                iPhone / iOS
              </p>
              <p className="mb-5 text-sm leading-relaxed text-zinc-500">
                Full experience as a web app in Safari. No install needed —
                open the link and start using it instantly.
              </p>
              <a
                href={WEB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-600/50 bg-zinc-800/50 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all hover:border-zinc-500/60 hover:bg-zinc-700/60"
              >
                <ExternalLink className="h-4 w-4" />
                Open Web Version
              </a>
              <p className="mt-3 text-center text-xs text-zinc-700">
                Opens in Safari · No download needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── App Preview ── */}
      <section className="overflow-hidden px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
            App Preview
          </p>
          <div className="flex items-end justify-center gap-5 sm:gap-8">
            <div className="-translate-y-8">
              <PhoneMockup type="tasks" className="w-[145px] sm:w-[162px]" />
            </div>
            <PhoneMockup type="calendar" className="w-[145px] sm:w-[162px]" />
            <div className="-translate-y-4 hidden sm:block">
              <PhoneMockup type="streak" className="w-[145px] sm:w-[162px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
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
                className="group rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-5 transition-all hover:border-zinc-700/60 hover:bg-zinc-900/35"
              >
                <div className="mb-3.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-zinc-700 group-hover:bg-zinc-800">
                  <Icon className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-indigo-400" />
                </div>
                <p className="mb-1.5 text-sm font-semibold text-white">
                  {label}
                </p>
                <p className="text-xs leading-relaxed text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
            Built with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-3.5 py-2 text-xs font-medium text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative px-6 pb-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get things done?
          </h2>
          <p className="mx-auto mb-10 max-w-sm text-[15px] leading-relaxed text-zinc-500">
            Download the Android app or open the web version in your browser.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={APK_URL}
              download="todo.apk"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-100 active:scale-[0.98]"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download APK
            </a>
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-600 hover:bg-zinc-800/60"
            >
              <Globe className="h-4 w-4" />
              Try Web Version
            </a>
          </div>

          {/* APK metadata chip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-3 text-xs text-zinc-600">
            <span>com.othmanlearn.todoproductivity</span>
            <span className="hidden text-zinc-800 sm:inline">·</span>
            <span>v1.0.0</span>
            <span className="hidden text-zinc-800 sm:inline">·</span>
            <span>Android 8.0+</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800/40 px-6 py-7">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-zinc-400">
              Todo Productivity App
            </span>
            <span className="hidden text-zinc-800 sm:inline">·</span>
            <span className="hidden text-xs text-zinc-600 sm:inline">
              Built by{" "}
              <a
                href="/"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Othman Alobayyat
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Portfolio →
            </a>
            <span className="text-xs text-zinc-700">© 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
