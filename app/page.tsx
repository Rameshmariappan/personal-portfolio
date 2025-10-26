"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ModernHero } from "@/components/modern-hero";
import { ModernNavigation } from "@/components/modern-navigation";
import { ModernSection } from "@/components/modern-section";
import { ModernCard } from "@/components/modern-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollRevealText, AnimatedText } from "@/components/animated-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Cloud,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Brain,
  Target,
  Award,
  TrendingUp,
  Users,
  Rocket,
  Sparkles,
} from "lucide-react";
import {
  TechGridShowcase,
  Tech3DCubeShowcase,
  Tech3DSphereShowcase,
  TechConstellationShowcase,
  TechRippleShowcase,
  TechGeometricShowcase,
  TechNetworkShowcase,
  TechWaveShowcase,
  TechOrbitalShowcase,
  TechMatrixShowcase,
  TechHelixShowcase,
  TechParticleShowcase,
  TechMagneticShowcase,
  TechSolarSystemShowcase,
  TechLiquidShowcase,
  TechHologramShowcase,
  Tech3DKeyboard,
} from "@/components/tech-showcase-variants";

const showcaseVariants = [
  {
    name: "Grid Animation",
    component: TechGridShowcase,
    description:
      "Hover over the technology cards to see interactive effects and floating particles",
  },
  {
    name: "Wave Effect",
    component: TechWaveShowcase,
    description:
      "Watch the wave animation as technologies float up and down with rhythm",
  },
  {
    name: "Orbital Motion",
    component: TechOrbitalShowcase,
    description:
      "Technologies orbit around the central core in real-time with smooth rotation",
  },
  {
    name: "Matrix Rain",
    component: TechMatrixShowcase,
    description:
      "Matrix-style rain effect with rotating technology display every 2 seconds",
  },
  {
    name: "DNA Helix",
    component: TechHelixShowcase,
    description:
      "DNA helix structure with technologies spiraling in 3D space with connections",
  },
  {
    name: "Particle System",
    component: TechParticleShowcase,
    description:
      "Interactive particle explosions when hovering over technology nodes",
  },
  {
    name: "Magnetic Field",
    component: TechMagneticShowcase,
    description:
      "Move your mouse to create magnetic attraction effects on floating technologies",
  },
  {
    name: "Solar System",
    component: TechSolarSystemShowcase,
    description:
      "Technologies orbit like planets around a central sun with realistic physics",
  },
  {
    name: "Liquid Blob",
    component: TechLiquidShowcase,
    description:
      "Morphing liquid blob that cycles through technologies with fluid animations",
  },
  {
    name: "Hologram",
    component: TechHologramShowcase,
    description:
      "Futuristic holographic display with 3D tech projections and scan lines",
  },
  {
    name: "3D Cubes",
    component: Tech3DCubeShowcase,
    description:
      "Interactive 3D cubes floating in space with realistic lighting and shadows using Spline",
  },
  {
    name: "3D Spheres",
    component: Tech3DSphereShowcase,
    description:
      "Floating 3D spheres orbiting in a circular pattern with metallic materials",
  },
  {
    name: "Constellation",
    component: TechConstellationShowcase,
    description:
      "Star constellation pattern with connecting lines and pulsing tech nodes",
  },
  {
    name: "Ripple Effect",
    component: TechRippleShowcase,
    description: "Ripple waves emanating from each technology node in sequence",
  },
  {
    name: "Geometric",
    component: TechGeometricShowcase,
    description:
      "Geometric shapes that morph and transform while displaying technology icons",
  },
  {
    name: "Network Graph",
    component: TechNetworkShowcase,
    description:
      "Interactive network graph showing connections between related technologies",
  },
];

export default function Portfolio() {
  const [currentShowcase, setCurrentShowcase] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Auto-rotate showcases
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentShowcase((prev) => (prev + 1) % showcaseVariants.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const nextShowcase = () => {
    setCurrentShowcase((prev) => (prev + 1) % showcaseVariants.length);
  };

  const prevShowcase = () => {
    setCurrentShowcase(
      (prev) => (prev - 1 + showcaseVariants.length) % showcaseVariants.length
    );
  };

  const CurrentShowcaseComponent = showcaseVariants[currentShowcase].component;

  // Form validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
    // Clear submit status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        "https://hooks.konnectify.co/webhook/v1/2VcA3cCnTy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Clear form
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly at rameshmariappan.m@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <ModernNavigation />

      {/* Hero Section */}
      <ModernSection
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <ModernHero />
      </ModernSection>

      {/* About Section with Profile Image */}
      <ModernSection id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400">About Me</span>
            </motion.div>

            <ScrollRevealText
              text="Crafting Digital Experiences"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            />

            <AnimatedText
              text="With over 4 years of experience in full-stack development, I specialize in creating exceptional front-end experiences that drive user engagement and business growth."
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              delay={0.3}
              stagger={0.02}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image Section */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Main Image Container with 3D Effect */}
                <motion.div
                  className="relative aspect-square rounded-3xl overflow-hidden glass border border-white/10"
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src="/images/ramaiah-profile.jpg"
                    alt="Ramaiah M - Full Stack Developer"
                    width={600}
                    height={600}
                    className="object-cover object-center w-full h-full"
                    style={{
                      objectPosition: "center center",
                    }}
                    priority
                  />

                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-emerald-400/60 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 p-4 rounded-2xl glass border border-emerald-500/20 backdrop-blur-xl"
                  initial={{ opacity: 0, scale: 0, rotateZ: -45 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateZ: 0,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.5, duration: 0.5 },
                    scale: { delay: 0.5, duration: 0.5 },
                    rotateZ: { delay: 0.5, duration: 0.5 },
                    y: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-400">
                      <AnimatedCounter value={4} suffix="+" />
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      YEARS
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 p-4 rounded-2xl glass border border-blue-500/20 backdrop-blur-xl"
                  initial={{ opacity: 0, scale: 0, rotateZ: 45 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateZ: 0,
                    y: [0, 10, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.7, duration: 0.5 },
                    scale: { delay: 0.7, duration: 0.5 },
                    rotateZ: { delay: 0.7, duration: 0.5 },
                    y: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                  whileHover={{ scale: 1.1, rotateZ: -5 }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">
                      <AnimatedCounter value={50} suffix="+" />
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      PROJECTS
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {/* About Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <AnimatedText
                    text="My journey combines modern development practices with a deep understanding of user experience principles, resulting in applications that are both performant and delightful."
                    delay={0.2}
                    stagger={0.02}
                  />

                  <AnimatedText
                    text="When I'm not coding, I enjoy exploring cutting-edge technologies, contributing to open-source projects, and sharing knowledge with the developer community."
                    delay={0.4}
                    stagger={0.02}
                  />
                </div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-white">Education</span>
                  </div>
                  <p className="text-muted-foreground ml-8">
                    B.E. in Computer Science & Engineering
                    <br />
                    <span className="text-emerald-400">
                      Anna University, 2021
                    </span>
                  </p>
                </motion.div>
              </div>

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-2 gap-6">
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
                      <div className="text-sm text-muted-foreground">
                        Users Served
                      </div>
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
                      <div className="text-sm text-muted-foreground">
                        Projects Delivered
                      </div>
                    </div>
                  </div>
                </ModernCard>
              </div> */}

              {/* Performance Card */}
              {/* <ModernCard delay={0.8} glowColor="emerald">
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
                    <div className="text-white font-semibold">
                      Performance Boost
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Average UI optimization results
                    </div>
                  </div>
                </div>
              </ModernCard> */}
            </motion.div>
          </div>
        </div>
      </ModernSection>
      {/* Skills & Technologies Section */}
      <ModernSection id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Technology Stack</span>
            </motion.div>

            <ScrollRevealText
              text="Interactive Tech Showcase"
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
            />
            <AnimatedText
              text="Experience 16 different animation styles including 3D effects for my technology stack"
              className="text-muted-foreground text-lg mb-8"
              delay={0.3}
              stagger={0.03}
            />
          </motion.div>
          {/* Technology Categories */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="grid md:grid-cols-1 gap-8 mt-16">
              <ModernCard delay={0.2} glowColor="blue">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Globe className="w-6 h-6 text-blue-400" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Framer Motion",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-400/20 text-blue-300 border-blue-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </ModernCard>

              <ModernCard delay={0.4} glowColor="emerald">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Database className="w-6 h-6 text-emerald-400" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express",
                      "PostgreSQL",
                      "MongoDB",
                      "Redis",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-emerald-400/20 text-emerald-300 border-emerald-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </ModernCard>

              <ModernCard delay={0.6} glowColor="purple">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Cloud className="w-6 h-6 text-purple-400" />
                    DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"].map(
                      (tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-400/20 text-purple-300 border-purple-400/30"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>
              </ModernCard>

              <ModernCard delay={0.2} glowColor="blue">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Globe className="w-6 h-6 text-blue-400" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Framer Motion",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-400/20 text-blue-300 border-blue-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </ModernCard>
            </div>
            <div className="grid md:grid-cols-1 gap-8 mt-16">
              <Tech3DKeyboard />
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

            <ScrollRevealText
              text="Work Experience"
              className="text-5xl lg:text-6xl font-bold mb-6"
            />

            <AnimatedText
              text="Building scalable solutions and leading technical initiatives across diverse projects and teams."
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              delay={0.3}
              stagger={0.02}
            />
          </div>

          <div className="space-y-12">
            {/* Current Role */}
            <ModernCard delay={0.2} hover={false} glowColor="emerald">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Code2 className="w-10 h-10 text-emerald-400" />
                    </div>
                  </motion.div>

                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                      <AnimatedText
                        text="Full Stack Developer (Front-End Focused)"
                        className="text-2xl font-bold text-white"
                        stagger={0.03}
                      />
                      <p className="text-xl text-emerald-400 font-semibold">
                        Konnectify Pvt Ltd
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
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
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "TypeScript",
                        "GCP",
                        "Docker",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-emerald-400/20 text-emerald-300 border-emerald-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>
      </ModernSection>

      {/* Projects Section */}
      <ModernSection id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating my skills in
              full-stack development and problem-solving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
                image:
                  "/placeholder.svg?height=200&width=300&text=E-Commerce+Platform",
                tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
                github: "#",
                live: "#",
                color: "emerald",
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative task management with real-time updates and team features",
                image:
                  "/placeholder.svg?height=200&width=300&text=Task+Management+App",
                tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
                github: "#",
                live: "#",
                color: "blue",
              },
              {
                title: "Analytics Dashboard",
                description:
                  "Data visualization dashboard with interactive charts and real-time metrics",
                image:
                  "/placeholder.svg?height=200&width=300&text=Analytics+Dashboard",
                tech: ["React", "D3.js", "Express", "Redis"],
                github: "#",
                live: "#",
                color: "purple",
              },
            ].map((project, index) => (
              <ModernCard
                key={project.title}
                delay={index * 0.2}
                glowColor={project.color as any}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </ModernCard>
            ))}
          </div>
        </div>
      </ModernSection>

      {/* Contact Section */}
      <ModernSection id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-emerald-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <ModernCard delay={0.2} glowColor="emerald">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <a
                    href="mailto:rameshmariappan.m@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center group-hover:bg-emerald-400/30 transition-colors">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                        rameshmariappan.m@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+917358848699"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center group-hover:bg-emerald-400/30 transition-colors">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                        +91 7358848699
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 mb-4">
                    Follow me on social media
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/Rameshmariappan"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass border-white/20 bg-transparent hover:border-emerald-400/50 hover:text-emerald-400"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/ramaiah-mariappan-software-developer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass border-white/20 bg-transparent hover:border-emerald-400/50 hover:text-emerald-400"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </ModernCard>

            <ModernCard delay={0.4} glowColor="blue">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                        formErrors.name
                          ? "border-red-500/50 focus:border-red-400/50 focus:ring-red-400/50"
                          : "border-white/10 focus:border-emerald-400/50 focus:ring-emerald-400/50"
                      }`}
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                    {formErrors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {formErrors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                        formErrors.email
                          ? "border-red-500/50 focus:border-red-400/50 focus:ring-red-400/50"
                          : "border-white/10 focus:border-emerald-400/50 focus:ring-emerald-400/50"
                      }`}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {formErrors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 resize-none transition-colors ${
                        formErrors.message
                          ? "border-red-500/50 focus:border-red-400/50 focus:ring-red-400/50"
                          : "border-white/10 focus:border-emerald-400/50 focus:ring-emerald-400/50"
                      }`}
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                    />
                    {formErrors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
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
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Ramaiah M. All rights reserved. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
