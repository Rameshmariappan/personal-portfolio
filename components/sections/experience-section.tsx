"use client"

import { motion } from "framer-motion"
import { ModernSection } from "@/components/modern-section"
import { ModernCard } from "@/components/modern-card"
import { ScrollRevealText, AnimatedText } from "@/components/animated-text"
import { Badge } from "@/components/ui/badge"
import { Code2, Layers, Target, Sparkles } from "lucide-react"
import { experience } from "@/data/experience"

const roleIcons = [Code2, Layers]

const colorClasses: Record<string, { icon: string; badge: string; text: string; border: string }> = {
  emerald: {
    icon: "bg-emerald-500/10 border-emerald-500/20",
    badge: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  blue: {
    icon: "bg-blue-500/10 border-blue-500/20",
    badge: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
}

export function ExperienceSection() {
  return (
    <ModernSection id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400">Professional Journey</span>
          </motion.div>

          <ScrollRevealText
            text="Work Experience"
            className="text-5xl lg:text-6xl font-bold font-outfit mb-6"
          />

          <AnimatedText
            text="4.5+ years building scalable SaaS platforms, automation dashboards, and high-performance web apps."
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            delay={0.3}
            stagger={0.02}
          />
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical connector line */}
          <div className="absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/50 via-blue-500/50 to-transparent hidden lg:block" />

          {experience.map((role, roleIndex) => {
            const Icon = roleIcons[roleIndex] || Code2
            const colors = colorClasses[role.color] || colorClasses.emerald

            return (
              <ModernCard key={role.company} delay={roleIndex * 0.2} glowColor={role.color}>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className={`w-20 h-20 rounded-2xl ${colors.icon} border flex items-center justify-center`}>
                        <Icon className={`w-10 h-10 ${colors.text}`} />
                      </div>
                    </motion.div>

                    <div className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <AnimatedText
                          text={role.title}
                          className="text-2xl font-bold text-white font-outfit"
                          stagger={0.03}
                        />
                        <p className={`text-xl font-semibold ${colors.text}`}>
                          {role.company}
                        </p>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="font-mono text-sm">{role.period}</span>
                          <span className="text-xs">•</span>
                          <span className="text-sm">{role.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 text-muted-foreground">
                        {role.achievements.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3"
                          >
                            <Sparkles className={`w-4 h-4 ${colors.text} mt-1 flex-shrink-0`} />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        {role.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`${colors.badge} font-mono text-xs`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </ModernCard>
            )
          })}
        </div>
      </div>
    </ModernSection>
  )
}
