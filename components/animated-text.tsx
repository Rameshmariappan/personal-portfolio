"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function AnimatedText({ text, className = "", delay = 0, stagger = 0.05 }: AnimatedTextProps) {
  const words = text.split(" ")

  return (
    <motion.div className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * stagger,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function ScrollRevealText({ text, className = "" }: { text: string; className?: string }) {
  const letters = text.split("")

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, rotateX: 90, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "center bottom" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  )
}

export function TypewriterText({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1))

          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.div className={`relative ${className}`} whileHover="hover" initial="initial" animate="initial">
      <motion.span
        variants={{
          initial: { x: 0, textShadow: "none" },
          hover: {
            x: [-2, 2, -2, 2, 0],
            textShadow: [
              "2px 0 #ff0000, -2px 0 #00ffff",
              "-2px 0 #ff0000, 2px 0 #00ffff",
              "2px 0 #ff0000, -2px 0 #00ffff",
              "-2px 0 #ff0000, 2px 0 #00ffff",
              "none",
            ],
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
    </motion.div>
  )
}
