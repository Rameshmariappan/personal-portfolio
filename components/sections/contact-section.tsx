"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ModernSection } from "@/components/modern-section"
import { ModernCard } from "@/components/modern-card"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateForm = () => {
    const errors = { name: "", email: "", message: "" }
    let isValid = true

    if (!formData.name.trim()) { errors.name = "Name is required"; isValid = false }
    if (!formData.email.trim()) { errors.email = "Email is required"; isValid = false }
    else if (!validateEmail(formData.email)) { errors.email = "Please enter a valid email address"; isValid = false }
    if (!formData.message.trim()) { errors.message = "Message is required"; isValid = false }

    setFormErrors(errors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
        setFormErrors({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly at rameshmariappan.m@gmail.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ModernSection id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-outfit">
            Get In <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <ModernCard delay={0.2} glowColor="emerald">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-outfit">Contact Information</h3>

              <div className="space-y-6">
                <a href="mailto:rameshmariappan.m@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center group-hover:bg-emerald-400/30 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                    <p className="text-foreground font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      rameshmariappan.m@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+917358848699" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center group-hover:bg-emerald-400/30 transition-colors">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Phone</p>
                    <p className="text-foreground font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      +91 7358848699
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
                    <p className="text-foreground font-medium">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-muted-foreground mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/Rameshmariappan"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title="GitHub"
                  >
                    <Button size="sm" variant="outline" className="glass border-border dark:border-white/20 bg-transparent hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 text-foreground">
                      <Github className="w-4 h-4" />
                    </Button>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ramaiah-mariappan-software-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title="LinkedIn"
                  >
                    <Button size="sm" variant="outline" className="glass border-border dark:border-white/20 bg-transparent hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 text-foreground">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </motion.a>
                </div>
              </div>
            </CardContent>
          </ModernCard>

          <ModernCard delay={0.4} glowColor="blue">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-outfit">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/5 dark:bg-white/5 border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      formErrors.name
                        ? "border-red-500/50 focus:border-red-400/50 focus:ring-red-400/50"
                        : "border-border dark:border-white/10 focus:border-emerald-500/50 dark:focus:border-emerald-400/50 focus:ring-emerald-500/50 dark:focus:ring-emerald-400/50"
                    }`}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {formErrors.name && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-1">
                      {formErrors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/5 dark:bg-white/5 border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      formErrors.email
                        ? "border-red-500/50 focus:border-red-400/50 focus:ring-red-400/50"
                        : "border-border dark:border-white/10 focus:border-emerald-500/50 dark:focus:border-emerald-400/50 focus:ring-emerald-500/50 dark:focus:ring-emerald-400/50"
                    }`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-1">
                      {formErrors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/5 dark:bg-white/5 border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-1 resize-none transition-colors ${
                      formErrors.message
                        ? "border-red-500/50 focus:border-red-400/50 focus:ring-red-400/50"
                        : "border-border dark:border-white/10 focus:border-emerald-500/50 dark:focus:border-emerald-400/50 focus:ring-emerald-500/50 dark:focus:ring-emerald-400/50"
                    }`}
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  />
                  {formErrors.message && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-1">
                      {formErrors.message}
                    </motion.p>
                  )}
                </div>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </ModernCard>
        </div>
      </div>
    </ModernSection>
  )
}
