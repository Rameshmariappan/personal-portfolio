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
    title: "Asset Management System",
    tagline: "Enterprise-grade asset tracking with full lifecycle management",
    problem:
      "Organizations struggle to track physical assets like laptops, monitors, and devices across teams — leading to lost equipment, compliance gaps, and manual auditing overhead.",
    solution:
      "Built a full-stack asset management platform with JWT + MFA authentication, role-based access control, QR/barcode generation, dual-approval transfer workflows, and immutable audit logging.",
    impact:
      "Complete asset lifecycle management with multi-format reporting (CSV, XLSX, PDF) and real-time dashboard analytics.",
    tech: [
      "Next.js 14",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Tailwind",
    ],
    github: "https://github.com/Rameshmariappan/asset-management",
    live: "https://asset-management-frontend-theta.vercel.app/auth/login",
    image: "/images/projects/asset-management.png",
    color: "emerald",
  },
  {
    title: "AI Content Generator",
    tagline: "AI-powered content platform with BYOK model and multi-platform publishing",
    problem:
      "Content creators waste hours manually adapting and publishing content across WordPress, LinkedIn, and Medium — with no consistent brand voice.",
    solution:
      "Built a serverless content platform that trains on your brand voice, generates content using your own OpenAI or Anthropic API keys (zero markup), and publishes across platforms in one click.",
    impact:
      "Serverless architecture on Vercel + Supabase for near-zero infrastructure costs with scalable multi-platform distribution.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "OpenAI API",
      "Anthropic API",
      "shadcn/ui",
    ],
    live: "https://ai-content-generator-three-iota.vercel.app/",
    image: "/images/projects/ai-content-generator.png",
    color: "blue",
  },
  {
    title: "ASM Groups",
    tagline: "SEO-optimized business platform for Chennai's scrap recycling industry",
    problem:
      "A 40+ year scrap dealing business serving Chennai's OMR corridor had no digital presence — relying entirely on word-of-mouth for customer acquisition.",
    solution:
      "Built a performance-optimized business site with structured data markup (Schema.org), Google Analytics integration, and a streamlined service booking flow.",
    impact:
      "4.8/5 customer rating, 100+ verified reviews, and service coverage across 20+ neighborhoods with same-day pickup scheduling.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Schema.org",
      "Google Analytics",
      "SEO",
    ],
    live: "https://asm-topaz.vercel.app/",
    image: "/images/projects/asm-groups.png",
    color: "purple",
  },
]
