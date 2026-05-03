"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ModernCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hover?: boolean
  glowColor?: "emerald" | "blue" | "purple" | "orange"
}

export function ModernCard({
  children,
  className = "",
  delay = 0,
  hover = true,
  glowColor = "emerald",
}: ModernCardProps) {
  const glowClasses = {
    emerald: "hover:shadow-emerald-500/20",
    blue: "hover:shadow-blue-500/20",
    purple: "hover:shadow-purple-500/20",
    orange: "hover:shadow-orange-500/20",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={className}
    >
      <Card
        className={`h-full glass border border-border dark:border-white/10 backdrop-blur-xl hover:border-border/80 dark:hover:border-white/20 transition-all duration-300 hover:shadow-2xl ${glowClasses[glowColor]}`}
      >
        {children}
      </Card>
    </motion.div>
  )
}
