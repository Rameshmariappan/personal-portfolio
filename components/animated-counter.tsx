"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const displayValue = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  return (
    <motion.span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  )
}
