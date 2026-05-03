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
    title: "Senior Frontend Engineer (Full Stack Focus)",
    company: "Konnectify Pvt Ltd",
    period: "Oct 2023 – Present",
    location: "Chennai, India",
    color: "emerald",
    achievements: [
      "Architected frontend of an enterprise iPaaS platform in React.js and Next.js, serving as primary frontend owner across the full product lifecycle.",
      "Designed a reusable TypeScript component architecture with strict prop typing and shared custom hooks, improving developer velocity by ~30% and reducing onboarding friction.",
      "Built real-time data-intensive dashboards with Redux Toolkit and RTK Query; implemented normalized cache selectors eliminating redundant API calls and cutting re-renders significantly.",
      "Applied SSR with Next.js on critical pages, achieving TTFB improvements and Lighthouse performance scores of 90+ by resolving layout shift and optimizing image delivery pipelines.",
      "Optimized Core Web Vitals (LCP, CLS, FID) through dynamic imports and memoization, reducing JavaScript bundle size by 35%.",
      "Contributed to Node.js REST APIs, PostgreSQL schema design via Prisma ORM, and CI/CD pipeline configuration using GitHub Actions."
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Node.js", "PostgreSQL", "Prisma", "GitHub Actions"],
  },
  {
    title: "Frontend Engineer",
    company: "Spritle Software Pvt. Ltd",
    period: "Sep 2021 – Sep 2023",
    location: "Chennai, India",
    color: "blue",
    achievements: [
      "Built and scaled React.js applications serving 20,000+ active users with Redux state management for complex multi-step user flows.",
      "Led dashboard and RBAC module development, achieving a 40% increase in user engagement measured over 6 months post-release.",
      "Reduced page load time by 25% through code splitting, async API batching, and critical rendering path optimization.",
      "Delivered a library of 30+ reusable Web Components used across 5+ production projects in media and edtech, cutting per-feature UI build time by ~20%.",
      "Ensured WCAG 2.1 Level AA accessibility compliance on all UI components; maintained 80%+ unit test coverage using Jest and React Testing Library.",
      "Collaborated with designers and product managers in a 12-person Agile team, consistently meeting sprint commitments across 5 production launches."
    ],
    tech: ["React.js", "Redux", "Web Components", "Jest", "React Testing Library", "Accessibility (WCAG 2.1)", "Agile"],
  },
]
