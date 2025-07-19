"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FloatingElements } from "./floating-elements"

export function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5,
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
  }

  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden">
      <FloatingElements />
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div className="flex items-center space-x-4 text-sm text-gray-600" variants={statsVariants}>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  +4
                </motion.span>
                <span>Years Experience</span>
                <span>•</span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  +50
                </motion.span>
                <span>Projects Delivered</span>
              </motion.div>

              <motion.h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight" variants={itemVariants}>
                Hello
              </motion.h1>

              <motion.p className="text-xl text-gray-600 leading-relaxed" variants={itemVariants}>
                I'm Ramaiah M, a Full Stack Developer – Front-End Focused
              </motion.p>

              <motion.p className="text-gray-600 leading-relaxed max-w-lg" variants={itemVariants}>
                Passionate about building scalable, user-centric web applications with clean code and exceptional
                performance. Specialized in React, Next.js, and modern frontend technologies.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  View Projects
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="flex items-center space-x-6 pt-4" variants={itemVariants}>
              {[
                { href: "https://github.com/ramaiahmariappan", icon: Github },
                { href: "https://linkedin.com/in/ramaiah-mariappan", icon: Linkedin },
                { href: "mailto:ramaiahmariappan.dev@gmail.com", icon: Mail },
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <Link href={social.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Ramaiah M - Full Stack Developer"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ rotate: 360 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">4+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
