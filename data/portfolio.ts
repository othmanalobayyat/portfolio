// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tech: string[];
  /** null = private / no public repo yet */
  github: string | null;
  /** null = no live demo yet */
  demo: string | null;
  /** Spans full grid width and renders architecture highlights */
  featured?: boolean;
  /** Scannable architecture/engineering signal chips, shown on featured cards */
  highlights?: string[];
}

export interface FocusArea {
  label: string;
  desc: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Todo Productivity App",
    description:
      "Offline-first mobile productivity app for Android and web — task writes queue locally and sync on reconnection, keeping the app fully functional without a network. Built on a Node.js/Supabase backend with JWT auth, email-based password reset, and cross-session state persistence.",
    tech: ["React Native", "Expo", "Node.js", "PostgreSQL", "Supabase", "JWT", "Resend"],
    github: null,
    demo: "/todo",
    featured: true,
    highlights: [
      "Offline-first sync with durable write queue",
      "JWT auth + email password reset flow",
      "Android APK · iOS web app",
    ],
  },
  {
    title: "Posturic",
    description: "Technical write-up in progress — computer vision + embedded sensor fusion pipeline.",
    tech: ["Python", "OpenCV", "ESP32", "React", "FastAPI"],
    github: null,
    demo: null,
  },
  {
    title: "CliniQ",
    description: "Technical write-up in progress — full-stack clinic management with role-based access.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS"],
    github: null,
    demo: null,
  },
  {
    title: "Sa'y",
    description: "Technical write-up in progress — job-matching platform for local employment.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    github: null,
    demo: null,
  },
  {
    title: "Car Accident Detection System",
    description: "Technical write-up in progress — embedded collision detection and GPS alert system.",
    tech: ["Arduino", "ESP32", "C++", "MQTT", "GPS Module"],
    github: null,
    demo: null,
  },
];

export const focusAreas: FocusArea[] = [
  {
    label: "Embedded & IoT",
    desc: "Firmware, sensor integration & hardware-software interfaces",
  },
  {
    label: "Backend Engineering",
    desc: "APIs, data pipelines & system architecture",
  },
  {
    label: "Applied AI",
    desc: "Computer vision & intelligent system design",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["C", "C++", "C#", "Python", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "FastAPI", ".NET", "MongoDB", "PostgreSQL"],
  "Embedded / IoT": ["Arduino", "ESP32", "MQTT", "Raspberry Pi", "FreeRTOS"],
  Tools: ["Git", "Docker", "Linux", "Figma", "Postman"],
};

export const contact: Contact = {
  email: "alobayyat.othman@gmail.com",
  github: "https://github.com/othmanalobayyat",
  linkedin: "https://www.linkedin.com/in/othman-al-obayyat-51a383268",
};
