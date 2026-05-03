"use client"

import { motion } from "framer-motion"
import { ModernSection } from "@/components/modern-section"
import { ModernCard } from "@/components/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Construction } from "lucide-react"
import { ScrollRevealText } from "@/components/animated-text"
import { projects } from "@/data/projects"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <ModernSection id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-outfit">
            Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects with source code and live deployments — from enterprise SaaS to AI-powered tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ModernCard
              key={`${project.title}-${index}`}
              delay={index * 0.15}
              glowColor={project.color}
            >
              <CardContent className="p-0">
                {/* Image / Coming Soon */}
                <div className="relative overflow-hidden rounded-t-lg">
                  {project.comingSoon ? (
                    <div className="w-full h-48 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex flex-col items-center justify-center gap-3">
                      <Construction className="w-8 h-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground font-mono">Building in progress</span>
                    </div>
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 font-outfit">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.tagline}</p>

                  {project.problem && !project.comingSoon && (
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.problem}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {!project.comingSoon && (
                    <div className="flex gap-3">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="sm"
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </ModernCard>
          ))}
        </div>
      </div>
    </ModernSection>
  )
}
