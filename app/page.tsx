"use client"

import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  Calendar,
  Users,
  Code,
  Zap,
  Database,
  TestTube,
  Cloud,
  MessageSquare,
  Sparkles,
  Rocket,
  Brain,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Import modern components
import { ModernNavigation } from "@/components/modern-navigation"
import { ModernHero } from "@/components/modern-hero"
import { ModernSection } from "@/components/modern-section"
import { ModernCard } from "@/components/modern-card"
import { AnimatedCounter } from "@/components/animated-counter"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ModernNavigation />
      <ModernHero />

      {/* About Section */}
      <ModernSection className="py-24 px-6" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Brain className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400">About Me</span>
                </motion.div>

                <h2 className="text-5xl lg:text-6xl font-bold">
                  <span className="text-white">Crafting Digital</span>
                  <br />
                  <span className="gradient-text">Experiences</span>
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    With over <span className="text-emerald-400 font-semibold">4 years of experience</span> in
                    full-stack development, I specialize in creating exceptional front-end experiences that drive user
                    engagement and business growth.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    My journey combines{" "}
                    <span className="text-blue-400 font-semibold">modern development practices</span> with a deep
                    understanding of user experience principles, resulting in applications that are both
                    <span className="text-purple-400 font-semibold"> performant and delightful</span>.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    When I'm not coding, I enjoy exploring cutting-edge technologies, contributing to open-source
                    projects, and sharing knowledge with the developer community.
                  </motion.p>
                </div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-white">Education</span>
                  </div>
                  <p className="text-muted-foreground ml-8">
                    B.E. in Computer Science & Engineering
                    <br />
                    <span className="text-emerald-400">Anna University, 2021</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="space-y-8">
              {/* Performance Card */}
              <ModernCard delay={0.2} glowColor="emerald">
                <div className="p-8 text-center space-y-4">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-400" />
                  </motion.div>

                  <div>
                    <motion.div className="text-4xl font-bold text-emerald-400 font-mono">
                      <AnimatedCounter value={120} suffix="%" />
                    </motion.div>
                    <div className="text-white font-semibold">Performance Boost</div>
                    <div className="text-sm text-muted-foreground">Average UI optimization results</div>
                  </div>
                </div>
              </ModernCard>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <ModernCard delay={0.4} glowColor="blue">
                  <div className="p-6 text-center space-y-3">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users className="w-6 h-6 text-blue-400" />
                    </motion.div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400 font-mono">
                        <AnimatedCounter value={20} suffix="K+" />
                      </div>
                      <div className="text-sm text-muted-foreground">Users Served</div>
                    </div>
                  </div>
                </ModernCard>

                <ModernCard delay={0.6} glowColor="purple">
                  <div className="p-6 text-center space-y-3">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Rocket className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400 font-mono">
                        <AnimatedCounter value={50} suffix="+" />
                      </div>
                      <div className="text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                  </div>
                </ModernCard>
              </div>
            </div>
          </div>
        </div>
      </ModernSection>

      {/* Experience Section */}
      <ModernSection className="py-24 px-6" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400">Professional Journey</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Work</span> <span className="gradient-text">Experience</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building scalable solutions and leading technical initiatives across diverse projects and teams.
            </p>
          </div>

          <div className="space-y-12">
            {/* Current Role */}
            <ModernCard delay={0.2} hover={false} glowColor="emerald">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <motion.div className="flex-shrink-0" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                    <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Code className="w-10 h-10 text-emerald-400" />
                    </div>
                  </motion.div>

                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Full Stack Developer (Front-End Focused)</h3>
                      <p className="text-xl text-emerald-400 font-semibold">Konnectify Pvt Ltd</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">Oct 2023 – Present</span>
                      </div>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "Architected and developed an enterprise iPaaS platform using React, Next.js, and Node.js",
                        "Built reusable component library that reduced development time by 40%",
                        "Implemented CI/CD pipelines and deployed scalable applications on Google Cloud Platform",
                        "Led cross-functional collaboration delivering solutions for 100+ enterprise clients",
                        "Mentored 5+ junior developers and established frontend development best practices",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-3"
                        >
                          <Sparkles className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {["React.js", "Next.js", "Node.js", "PostgreSQL", "GCP", "CI/CD"].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </ModernCard>

            {/* Previous Role */}
            <ModernCard delay={0.4} hover={false} glowColor="blue">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <motion.div className="flex-shrink-0" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Zap className="w-10 h-10 text-blue-400" />
                    </div>
                  </motion.div>

                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Associate Software Developer</h3>
                      <p className="text-xl text-blue-400 font-semibold">Sprite Software Pvt Ltd</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">Sep 2021 – Sep 2023</span>
                      </div>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "Scaled applications to serve 20,000+ active users with 99.9% uptime",
                        "Optimized UI performance by 120% through advanced React patterns and code splitting",
                        "Contributed to Agile development processes and maintained 95% code review approval rate",
                        "Developed responsive web applications with modern CSS frameworks and accessibility standards",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-3"
                        >
                          <Sparkles className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {["React.js", "Redux", "JavaScript", "CSS3", "Agile"].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>
      </ModernSection>

      {/* Skills Section */}
      <ModernSection className="py-24 px-6" id="skills">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">Technical Expertise</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Skills &</span> <span className="gradient-text">Technologies</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building exceptional digital
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                icon: Code,
                color: "emerald",
                skills: [
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Redux Toolkit",
                  "Zustand",
                ],
              },
              {
                title: "Backend & APIs",
                icon: Database,
                color: "blue",
                skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Prisma"],
              },
              {
                title: "DevOps & Cloud",
                icon: Cloud,
                color: "purple",
                skills: ["Docker", "GCP", "AWS", "CI/CD", "GitHub Actions", "Vercel", "Netlify"],
              },
              {
                title: "Testing & Quality",
                icon: TestTube,
                color: "orange",
                skills: ["Jest", "Cypress", "React Testing Library", "Playwright", "ESLint", "Prettier"],
              },
              {
                title: "Design & UX",
                icon: Sparkles,
                color: "pink",
                skills: ["Figma", "Adobe XD", "Responsive Design", "Accessibility", "UI/UX Principles"],
              },
              {
                title: "Collaboration",
                icon: Users,
                color: "emerald",
                skills: ["Agile/Scrum", "Git", "Code Reviews", "Mentoring", "Technical Writing", "Team Leadership"],
              },
            ].map((category, index) => (
              <ModernCard key={category.title} delay={index * 0.1} glowColor={category.color as any}>
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-${category.color}-500/10 border border-${category.color}-500/20`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          className={`bg-${category.color}-500/10 text-${category.color}-400 border-${category.color}-500/20 hover:bg-${category.color}-500/20`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ModernCard>
            ))}
          </div>
        </div>
      </ModernSection>

      {/* Projects Section */}
      <ModernSection className="py-24 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-pink-500/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400">Featured Work</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Selected</span> <span className="gradient-text">Projects</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions that demonstrate technical expertise and creative problem-solving.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Konnectify iPaaS Platform",
                description:
                  "Enterprise-grade integration platform with real-time data synchronization, microservices architecture, and advanced monitoring capabilities.",
                tech: ["React", "Next.js", "Node.js", "PostgreSQL", "GCP"],
                icon: Database,
                gradient: "from-emerald-500/20 via-blue-500/20 to-purple-500/20",
                iconColor: "text-emerald-400",
                featured: true,
              },
              {
                title: "Smart Event Manager",
                description:
                  "Real-time event management dashboard with live updates, user authentication, analytics, and responsive design for seamless mobile experience.",
                tech: ["React", "Firebase", "Tailwind CSS", "Real-time"],
                icon: Zap,
                gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
                iconColor: "text-orange-400",
                featured: false,
              },
              {
                title: "Gamified Learning Platform",
                description:
                  "Interactive quiz application with gamification elements, progress tracking, social features, and AI-powered personalized learning paths.",
                tech: ["React", "Redux", "Node.js", "AI/ML", "Gamification"],
                icon: Users,
                gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
                iconColor: "text-green-400",
                featured: false,
              },
            ].map((project, index) => (
              <ModernCard key={project.title} delay={index * 0.2} glowColor={project.featured ? "emerald" : "blue"}>
                <div className="overflow-hidden">
                  <motion.div
                    className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                      <project.icon className={`w-16 h-16 ${project.iconColor}`} />
                    </motion.div>

                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        FEATURED
                      </motion.div>
                    )}
                  </motion.div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge className="bg-white/5 text-white border-white/10 hover:bg-white/10">{tech}</Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>

                        {index > 0 && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/10 hover:border-white/20 bg-transparent"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </ModernCard>
            ))}
          </div>
        </div>
      </ModernSection>

      {/* Contact Section */}
      <ModernSection className="py-24 px-6" id="contact">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Let's Connect</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Ready to</span> <span className="gradient-text">Collaborate?</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your next project and bring your ideas to life with cutting-edge technology and exceptional
              design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ramaiahmariappan.dev@gmail.com",
                    color: "emerald",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91-98408-38435",
                    color: "blue",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "India",
                    color: "purple",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-center gap-6 p-6 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl bg-${contact.color}-500/10 border border-${contact.color}-500/20`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <contact.icon className={`w-6 h-6 text-${contact.color}-400`} />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-white text-lg">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Follow My Journey</h3>
                <div className="flex gap-4">
                  {[
                    {
                      href: "https://linkedin.com/in/ramaiah-mariappan",
                      icon: Linkedin,
                      label: "LinkedIn",
                      color: "blue",
                    },
                    {
                      href: "https://github.com/ramaiahmariappan",
                      icon: Github,
                      label: "GitHub",
                      color: "white",
                    },
                  ].map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Link
                        href={social.href}
                        className="flex items-center gap-3 p-4 rounded-xl glass border border-white/10 hover:border-white/20 text-muted-foreground hover:text-white transition-all"
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="font-medium">{social.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <ModernCard delay={0.4} glowColor="emerald">
              <div className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: "First Name", type: "text", placeholder: "John" },
                      { label: "Last Name", type: "text", placeholder: "Doe" },
                    ].map((field, index) => (
                      <motion.div
                        key={field.label}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <label className="text-sm font-semibold text-white">{field.label}</label>
                        <motion.input
                          type={field.type}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none transition-all text-white placeholder-muted-foreground"
                          placeholder={field.placeholder}
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="text-sm font-semibold text-white">Email</label>
                    <motion.input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none transition-all text-white placeholder-muted-foreground"
                      placeholder="john@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="text-sm font-semibold text-white">Project Details</label>
                    <motion.textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none transition-all text-white placeholder-muted-foreground resize-none"
                      placeholder="Tell me about your project, timeline, and goals..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-4 text-lg rounded-xl glow-green group">
                      <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </ModernCard>
          </div>
        </div>
      </ModernSection>

      {/* Footer */}
      <motion.footer
        className="py-12 px-6 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Ramaiah M. Crafted with <span className="text-emerald-400">❤️</span> and{" "}
                <span className="text-blue-400">React</span>
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { href: "https://linkedin.com/in/ramaiah-mariappan", icon: Linkedin },
                { href: "https://github.com/ramaiahmariappan", icon: Github },
                { href: "mailto:ramaiahmariappan.dev@gmail.com", icon: Mail },
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Link
                    href={social.href}
                    className="p-3 rounded-xl glass border border-white/10 text-muted-foreground hover:text-white hover:border-white/20 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
