"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function AnimatedCard({ children, className = "", delay = 0, hover = true }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
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
              y: -5,
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={className}
    >
      <Card className="h-full">{children}</Card>
    </motion.div>
  )
}
