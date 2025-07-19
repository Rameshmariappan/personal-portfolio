"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  const elements = [
    { size: 60, delay: 0, duration: 20, x: "10%", y: "20%" },
    { size: 40, delay: 2, duration: 25, x: "80%", y: "10%" },
    { size: 80, delay: 4, duration: 30, x: "70%", y: "70%" },
    { size: 30, delay: 1, duration: 18, x: "20%", y: "80%" },
    { size: 50, delay: 3, duration: 22, x: "90%", y: "50%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-30"
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
