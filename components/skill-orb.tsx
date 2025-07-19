"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SkillOrbProps {
  skill: string
  index: number
  total: number
}

export function SkillOrb({ skill, index, total }: SkillOrbProps) {
  const angle = (index / total) * 2 * Math.PI
  const radius = 120
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      animate={{
        x: [x, x + 10, x],
        y: [y, y - 10, y],
      }}
      transition={{
        duration: 3 + index * 0.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(${x}px, ${y}px)`,
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      <Badge className="bg-white shadow-lg border border-gray-200 text-gray-900 hover:bg-gray-50">{skill}</Badge>
    </motion.div>
  )
}
