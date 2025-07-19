"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Zap, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ModernBackground } from "./modern-background"

export function ModernHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden noise">
      <ModernBackground />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400">Available for new projects</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  className="text-6xl lg:text-8xl font-bold leading-none tracking-tight"
                  variants={itemVariants}
                >
                  <span className="block text-white">Hello,</span>
                  <span className="block gradient-text">I'm Ramaiah</span>
                </motion.h1>

                <motion.div
                  className="flex items-center gap-3 text-xl lg:text-2xl text-muted-foreground font-medium"
                  variants={itemVariants}
                >
                  <Code2 className="w-6 h-6 text-emerald-400" />
                  <span>Full Stack Developer</span>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                  <span className="text-emerald-400">Frontend Focused</span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                Crafting exceptional digital experiences with{" "}
                <span className="text-emerald-400 font-semibold">React</span>,{" "}
                <span className="text-blue-400 font-semibold">Next.js</span>, and{" "}
                <span className="text-purple-400 font-semibold">modern technologies</span>. Passionate about clean code,
                performance optimization, and user-centric design.
              </motion.p>

              {/* Stats */}
              <motion.div className="flex items-center gap-8 text-sm font-mono" variants={itemVariants}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">4+</div>
                  <div className="text-muted-foreground">Years Exp</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">20K+</div>
                  <div className="text-muted-foreground">Users Served</div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-6 text-lg rounded-xl glow-green group"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-muted-foreground/20 hover:border-emerald-400 px-8 py-6 text-lg rounded-xl glass group bg-transparent"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:text-emerald-400 transition-colors" />
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex items-center gap-6" variants={itemVariants}>
              {[
                { href: "https://github.com/ramaiahmariappan", icon: Github, color: "hover:text-white" },
                { href: "https://linkedin.com/in/ramaiah-mariappan", icon: Linkedin, color: "hover:text-blue-400" },
                { href: "mailto:ramaiahmariappan.dev@gmail.com", icon: Mail, color: "hover:text-emerald-400" },
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className={`p-3 rounded-xl glass border border-muted-foreground/10 text-muted-foreground ${social.color} transition-all duration-300 hover:border-current`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div className="relative z-10" variants={itemVariants}>
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden glass border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/ramaiah-profile.jpg"
                  alt="Ramaiah M - Full Stack Developer"
                  width={600}
                  height={600}
                  className="object-cover object-center w-full h-full"
                  style={{
                    objectPosition: "center center",
                  }}
                />

                {/* Subtle overlay to enhance contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 p-4 rounded-2xl glass border border-emerald-500/20 backdrop-blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-400">4+</div>
                  <div className="text-xs text-muted-foreground font-mono">YEARS</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl glass border border-blue-500/20 backdrop-blur-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">50+</div>
                  <div className="text-xs text-muted-foreground font-mono">PROJECTS</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
