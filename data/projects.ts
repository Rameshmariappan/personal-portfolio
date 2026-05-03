export interface Project {
  title: string
  tagline: string
  problem?: string
  solution?: string
  impact?: string
  tech: string[]
  github?: string
  live?: string
  image?: string
  color: "emerald" | "blue" | "purple"
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    title: "AI Content Generator",
    tagline: "AI-powered content platform with BYOK model and multi-platform publishing",
    problem:
      "Content creators waste hours manually adapting and publishing content across multiple platforms with no consistent brand voice.",
    solution:
      "Built a BYOK (Bring Your Own Key) AI content platform with multi-platform publishing, integrating OpenAI and Anthropic APIs for AI-assisted content workflows. Implemented SSR for dynamic generation pages achieving sub-2s LCP.",
    impact:
      "Enabled rapid feature iteration using a library of 20+ reusable shadcn/ui components with Storybook documentation.",
    tech: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Anthropic API",
      "shadcn/ui",
      "Tailwind CSS"
    ],
    live: "https://ai-content-generator-three-iota.vercel.app/",
    color: "blue",
  },
  {
    title: "Enterprise Asset Management System",
    tagline: "Full-stack architecture for asset lifecycle management",
    problem:
      "Organizations struggle to track physical assets like laptops, monitors, and devices across teams, leading to auditing overhead.",
    solution:
      "Designed full-stack architecture for asset lifecycle management using Next.js 14 App Router and NestJS, with authentication, RBAC, and asset tracking workflows. Containerized all services using Docker Compose.",
    impact:
      "Integrated Redis caching layer reducing repeated DB query load by 60%. Built virtualized dashboards handling 10K+ asset records with smooth 60fps rendering performance.",
    tech: [
      "Next.js 14",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
    ],
    live: "https://asset-management-frontend-theta.vercel.app/auth/login",
    color: "emerald",
  },
  {
    title: "SEO-Optimized Recycling Platform",
    tagline: "Performance-optimized business platform for scrap recycling industry",
    problem:
      "Traditional scrap businesses lack digital presence and rely on manual local lead generation.",
    solution:
      "Delivered SSR-based website with Schema.org structured data, semantic HTML, and sitemap configuration. Executed extensive image optimization, deferred scripts, and font preloading.",
    impact:
      "Achieved Lighthouse SEO score of 98 and improved overall Lighthouse performance score from 62 to 91.",
    tech: [
      "Next.js",
      "Schema.org",
      "Google Analytics",
      "Tailwind CSS"
    ],
    live: "https://asm-topaz.vercel.app/",
    color: "purple",
  },
  {
    title: "Orthopedic Surgeon Portfolio",
    tagline: "Responsive, motion-heavy professional portfolio",
    problem:
      "Medical professionals require highly performant, accessible, and compliant web presence.",
    solution:
      "Built responsive portfolio with scroll-triggered animations and page transitions using Framer Motion. Executed full PII sanitization and data privacy audit before launch.",
    impact:
      "Achieved LCP under 1.8s via SSR and next/image optimization, ensuring compliance with data protection requirements.",
    tech: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS"
    ],
    live: "https://ortho-doctor-portfolio.vercel.app/",
    color: "blue",
  }
]
