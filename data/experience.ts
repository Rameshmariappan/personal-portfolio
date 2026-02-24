export interface ExperienceEntry {
  title: string
  company: string
  period: string
  location: string
  color: "emerald" | "blue" | "purple" | "orange"
  achievements: string[]
  tech: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: "Full-Stack Developer (Frontend-Focused)",
    company: "Konnectify",
    period: "Oct 2023 – Present",
    location: "Chennai, Tamil Nadu",
    color: "emerald",
    achievements: [
      "Led frontend architecture for enterprise iPaaS platform using React, Next.js, RTK Query, and Tailwind — focused on performance, scalability, and clean state management",
      "Built complex workflow UIs and configuration screens in Next.js + TypeScript, enabling non-technical users to design, monitor, and manage automation flows",
      "Designed and maintained a reusable component system and client-side state patterns that improved developer velocity and UI consistency across the platform",
      "Implemented lazy loading, caching, and API request optimization — significantly reducing load times and improving responsiveness for data-heavy views",
      "Integrated frontend with REST APIs, authentication flows, and Firestore/PostgreSQL services, ensuring secure and reliable data handling end-to-end",
      "Contributed to backend logic in Node.js/TypeScript every sprint — updating APIs, writing DB queries, and collaborating on data modeling",
      "Mentored junior developers on clean architecture, performance best practices, and delivery cadence",
    ],
    tech: ["React", "Next.js", "TypeScript", "RTK Query", "Tailwind", "Node.js", "GCP", "Docker", "Firestore", "PostgreSQL"],
  },
  {
    title: "Software Developer",
    company: "Spritle Software",
    period: "Sep 2021 – Sep 2023",
    location: "Chennai, Tamil Nadu",
    color: "blue",
    achievements: [
      "Built scalable, responsive UIs for SaaS and B2B web applications using React.js and Redux, with a focus on reliability and maintainability",
      "Delivered data-rich dashboards and feature modules using Material UI, Bootstrap, and SASS — consistent behavior across devices and browsers",
      "Created and maintained reusable UI component libraries that improved UX consistency and reduced new feature UI build time",
      "Improved frontend performance through code splitting, memoization, and API request optimizations — reducing load times and enhancing responsiveness",
      "Collaborated closely with product managers and QA in Agile sprints to scope, implement, and ship production-ready features on schedule",
    ],
    tech: ["React", "Redux", "Material UI", "JavaScript", "SASS", "Bootstrap", "Git"],
  },
]
