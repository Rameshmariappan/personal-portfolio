"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollingTextProps {
  texts: string[]
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function ScrollingText({ texts, direction = "left", speed = 50, className = "" }: ScrollingTextProps) {
  const duplicatedTexts = [...texts, ...texts]

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-8"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {duplicatedTexts.map((text, index) => (
          <span key={index} className="text-2xl font-semibold text-white/20 select-none">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

interface MarqueeTextProps {
  children: ReactNode
  speed?: number
  className?: string
  pauseOnHover?: boolean
}

export function MarqueeText({ children, speed = 50, className = "", pauseOnHover = true }: MarqueeTextProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
