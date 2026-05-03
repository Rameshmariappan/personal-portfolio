"use client"

import { motion } from "framer-motion"
import { ModernSection } from "@/components/modern-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollRevealText, AnimatedText } from "@/components/animated-text"
import { Brain, Award } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <ModernSection id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400">About Me</span>
          </motion.div>

          <ScrollRevealText
            text="Building at Scale"
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-outfit"
          />

          <AnimatedText
            text="Senior Frontend Engineer with 4.7+ years building high-performance, scalable web applications using React.js, Next.js, and TypeScript. Deep expertise in SSR/SSG/ISR, reusable design systems, and Core Web Vitals optimization."
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            delay={0.3}
            stagger={0.02}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/images/ramaiah-profile.jpg"
                  alt="Ramaiah M - Senior Frontend Engineer"
                  width={600}
                  height={600}
                  className="object-cover object-center w-full h-full"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-6 -right-6 p-4 rounded-2xl glass border border-emerald-500/20 backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    <AnimatedCounter value={4} suffix=".7+" />
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">YEARS</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl glass border border-blue-500/20 backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400 font-mono">
                    <AnimatedCounter value={20} suffix="K+" />
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">USERS</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <AnimatedText
                  text="I specialize in leading frontend architecture decisions and shipping production-ready features independently across distributed teams."
                  delay={0.2}
                  stagger={0.02}
                />

                <AnimatedText
                  text="Recent impact: Delivered a 25% reduction in production load times, 40% increase in user engagement, and Lighthouse scores of 90+ across enterprise and consumer applications serving 20,000+ users."
                  delay={0.4}
                  stagger={0.02}
                />
              </div>

              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold text-foreground font-outfit">Education</span>
                </div>
                <p className="text-muted-foreground ml-8">
                  Bachelor of Engineering — Computer Science & Engineering
                  <br />
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Anna University, Tamil Nadu (2017 – 2021) • CGPA: 7.3 / 10
                  </span>
                </p>
              </motion.div>

              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-foreground font-outfit">Open Source & Community</span>
                </div>
                <p className="text-muted-foreground ml-8 leading-relaxed">
                  <span className="font-medium text-foreground">Winner:</span> Foss Hack 3.0
                  <br />
                  <span className="text-sm">
                    Hacktoberfest contributor • Wikimedia Digitization • Mozilla Localization & Common Voice • OpenStreetMap
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </ModernSection>
  )
}
