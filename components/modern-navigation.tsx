"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.8)"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 px-6 py-4"
      style={{ backgroundColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
            <span className="gradient-text">Ramaiah.dev</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-muted-foreground hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-2 rounded-lg glow-green">
                Hire Me
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg glass border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="glass rounded-xl border border-white/10 p-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">Hire Me</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
