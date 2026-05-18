// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tech: string[];
  /** null = private / no public repo yet */
  github: string | null;
  /** null = no live demo yet */
  demo: string | null;
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
    title: "Posturic",
    description:
      "A smart posture monitoring system that uses computer vision and embedded sensors to detect and correct poor posture in real time, providing users with clear, actionable feedback.",
    tech: ["Python", "OpenCV", "ESP32", "React", "FastAPI"],
    github: null,
    demo: null,
  },
  {
    title: "CliniQ",
    description:
      "A clinic management platform streamlining patient appointments, medical records, and doctor workflows — designed for both patients and medical staff with a clean, intuitive interface.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS"],
    github: null,
    demo: null,
  },
  {
    title: "Sa'y",
    description:
      "A platform connecting job seekers with local employment opportunities, enabling users to discover, apply to, and track job applications within their community.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    github: null,
    demo: null,
  },
  {
    title: "Car Accident Detection System",
    description:
      "An IoT system that detects vehicle collisions using accelerometer data and GPS, automatically notifying emergency contacts with the vehicle's real-time location.",
    tech: ["Arduino", "ESP32", "C++", "MQTT", "GPS Module"],
    github: null,
    demo: null,
  },
];

export const focusAreas: FocusArea[] = [
  { label: "Embedded Systems", desc: "Firmware & hardware protocols" },
  { label: "IoT Architecture", desc: "Sensor networks & connectivity" },
  { label: "Full-Stack Engineering", desc: "Backend APIs & web platforms" },
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
