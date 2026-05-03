"use client"

import { motion } from "framer-motion"
import { ModernSection } from "@/components/modern-section"
import { ModernCard } from "@/components/modern-card"
import { ScrollRevealText, AnimatedText } from "@/components/animated-text"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Database, Cloud, Sparkles, Layers, Zap, Terminal, Brain, Server } from "lucide-react"
import { Tech3DKeyboard } from "@/components/tech-showcase-variants"

const techCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "blue" as const,
    badgeClass: "bg-blue-400/20 text-blue-700 dark:text-blue-300 border-blue-400/30",
    iconClass: "text-blue-600 dark:text-blue-400",
    tech: ["React.js", "Next.js", "TypeScript", "JavaScript", "React Hooks", "Redux Toolkit", "RTK Query", "Zustand"],
  },
  {
    title: "Styling & UI",
    icon: Layers,
    color: "purple" as const,
    badgeClass: "bg-purple-400/20 text-purple-700 dark:text-purple-300 border-purple-400/30",
    iconClass: "text-purple-600 dark:text-purple-400",
    tech: ["Tailwind CSS", "shadcn/ui", "Material UI", "Framer Motion", "Web Components", "WCAG 2.1"],
  },
  {
    title: "Performance",
    icon: Zap,
    color: "emerald" as const,
    badgeClass: "bg-emerald-400/20 text-emerald-700 dark:text-emerald-300 border-emerald-400/30",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    tech: ["SSR / SSG / ISR", "Core Web Vitals", "Lighthouse", "Code Splitting", "Virtualization", "Webpack/Vite"],
  },
  {
    title: "Testing & DX",
    icon: Terminal,
    color: "orange" as const,
    badgeClass: "bg-orange-400/20 text-orange-700 dark:text-orange-300 border-orange-400/30",
    iconClass: "text-orange-600 dark:text-orange-400",
    tech: ["Jest", "React Testing Library", "Cypress", "Storybook", "Git", "CI/CD", "Docker", "Linux"],
  },
  {
    title: "Backend & Infra",
    icon: Server,
    color: "blue" as const,
    badgeClass: "bg-blue-400/20 text-blue-700 dark:text-blue-300 border-blue-400/30",
    iconClass: "text-blue-600 dark:text-blue-400",
    tech: ["Node.js", "NestJS", "REST APIs", "GraphQL", "PostgreSQL", "Prisma", "Redis", "Firestore"],
  },
  {
    title: "AI Tools",
    icon: Brain,
    color: "purple" as const,
    badgeClass: "bg-purple-400/20 text-purple-700 dark:text-purple-300 border-purple-400/30",
    iconClass: "text-purple-600 dark:text-purple-400",
    tech: ["OpenAI API", "Anthropic API", "Claude", "ChatGPT", "Gemini", "AI Debugging"],
  },
]

export function SkillsSection() {
  return (
    <ModernSection id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400">Technology Stack</span>
          </motion.div>

          <ScrollRevealText
            text="Skills & Technologies"
            className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-outfit"
          />
          <AnimatedText
            text="The tools and technologies I use daily to build production applications."
            className="text-muted-foreground text-lg mb-8"
            delay={0.3}
            stagger={0.03}
          />
        </motion.div>

        {/* Technology Categories + 3D Keyboard */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid md:grid-cols-1 gap-8">
            {techCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <ModernCard key={category.title} delay={index * 0.2} glowColor={category.color}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground font-outfit">
                      <Icon className={`w-6 h-6 ${category.iconClass}`} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`${category.badgeClass} font-mono text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </ModernCard>
              )
            })}
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <Tech3DKeyboard />
          </div>
        </div>
      </div>
    </ModernSection>
  )
}
