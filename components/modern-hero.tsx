"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { ScrollRevealText, TypewriterText } from "@/components/animated-text"
import { FloatingElements } from "@/components/floating-elements"
import { Tech3DCubeShowcase } from "./tech-showcase-variants"

export function ModernHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Ramaiah_M_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400">Senior Frontend Engineer @ Konnectify</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <ScrollRevealText
              text="Ramaiah M"
              className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent font-outfit"
            />

            <div className="text-3xl lg:text-4xl font-semibold text-emerald-400 font-outfit h-[48px]">
              <TypewriterText
                texts={[
                  "Senior Frontend Engineer",
                  "React & Next.js Specialist",
                  "SaaS Platform Architect",
                  "AI-Augmented Developer",
                ]}
                className="text-3xl lg:text-4xl font-semibold text-emerald-400 font-outfit"
              />
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            I build scalable SaaS platforms and automation dashboards with React, Next.js, and TypeScript.
            Recent impact: <span className="text-emerald-400 font-semibold">25% performance improvement</span>,{" "}
            <span className="text-emerald-400 font-semibold">40% user engagement increase</span>, and production apps serving{" "}
            <span className="text-emerald-400 font-semibold">20K+ users</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl group"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 hover:border-emerald-400/50 px-8 py-6 text-lg font-semibold rounded-xl group bg-transparent"
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-muted-foreground">Follow me:</span>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/Rameshmariappan", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ramaiah-mariappan-software-developer/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass border border-white/10 hover:border-emerald-400/50 text-muted-foreground hover:text-emerald-400 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Spline Scene + Floating Stats */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            {/* 3D Spline Scene */}
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden">
              <Tech3DCubeShowcase />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-6 -left-6 p-4 rounded-2xl glass border border-emerald-500/20 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 font-mono">4.5+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 p-4 rounded-2xl glass border border-blue-500/20 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 font-mono">20K+</div>
                <div className="text-xs text-muted-foreground">Users Served</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <motion.button
          onClick={() => scrollToSection("experience")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-emerald-400 transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  )
}
