"use client"

import { ModernHero } from "@/components/modern-hero"
import { ModernNavigation } from "@/components/modern-navigation"
import { ModernSection } from "@/components/modern-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ScrollProgress />
      <ModernNavigation />

      {/* Hero Section */}
      <ModernSection
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <ModernHero />
      </ModernSection>

      {/* Sections ordered for recruiter optimization */}
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
