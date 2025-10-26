import React, { lazy } from "react";

import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Zap,
  Cloud,
  GitBranch,
  TestTube,
} from "lucide-react";
// import Spline from "@splinetool/react-spline/next";
const Spline = lazy(() => import("@splinetool/react-spline"));

const technologies = [
  {
    name: "React",
    icon: Code2,
    color: "#61DAFB",
    description: "Frontend Library",
  },
  {
    name: "Next.js",
    icon: Globe,
    color: "#000000",
    description: "React Framework",
  },
  {
    name: "TypeScript",
    icon: Code2,
    color: "#3178C6",
    description: "Type Safety",
  },
  {
    name: "Node.js",
    icon: Database,
    color: "#339933",
    description: "Backend Runtime",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "#336791",
    description: "Database",
  },
  {
    name: "Tailwind",
    icon: Palette,
    color: "#06B6D4",
    description: "CSS Framework",
  },
  {
    name: "Docker",
    icon: Cloud,
    color: "#2496ED",
    description: "Containerization",
  },
  { name: "AWS", icon: Cloud, color: "#FF9900", description: "Cloud Platform" },
  {
    name: "Git",
    icon: GitBranch,
    color: "#F05032",
    description: "Version Control",
  },
  {
    name: "Jest",
    icon: TestTube,
    color: "#C21325",
    description: "Testing Framework",
  },
];

// Grid Animation Showcase
export function TechGridShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <div className="grid grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative group cursor-pointer"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.2, z: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: `${tech.color}15` }}
              animate={{
                borderColor:
                  hoveredIndex === index
                    ? `${tech.color}50`
                    : "rgba(255,255,255,0.1)",
                boxShadow:
                  hoveredIndex === index ? `0 0 30px ${tech.color}30` : "none",
              }}
            >
              {React.createElement(tech.icon, {
                className: "w-8 h-8",
                style: { color: tech.color },
              })}
            </motion.div>

            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
            >
              {tech.name}
              <div className="text-xs text-gray-400">{tech.description}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Wave Effect Showcase
export function TechWaveShowcase() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <div className="flex items-end gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center gap-2"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center"
              style={{ backgroundColor: `${tech.color}15` }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {React.createElement(tech.icon, {
                className: "w-8 h-8",
                style: { color: tech.color },
              })}
            </motion.div>
            <span className="text-xs text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Orbital Motion Showcase
export function TechOrbitalShowcase() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <motion.div
        className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-400/20 border border-emerald-400/30 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Zap className="w-10 h-10 text-emerald-400" />
      </motion.div>

      {technologies.map((tech, index) => {
        const radius = 80 + (index % 3) * 30;
        const speed = 10 + (index % 3) * 5;
        const angle = (index / technologies.length) * 360;

        return (
          <motion.div
            key={tech.name}
            className="absolute w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center"
            style={{
              backgroundColor: `${tech.color}15`,
              left: "50%",
              top: "50%",
              marginLeft: "-24px",
              marginTop: "-24px",
            }}
            animate={{
              x: [
                Math.cos((angle * Math.PI) / 180) * radius,
                Math.cos(((angle + 360) * Math.PI) / 180) * radius,
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * radius,
                Math.sin(((angle + 360) * Math.PI) / 180) * radius,
              ],
            }}
            transition={{
              duration: speed,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {React.createElement(tech.icon, {
              className: "w-6 h-6",
              style: { color: tech.color },
            })}
          </motion.div>
        );
      })}
    </div>
  );
}

// Matrix Rain Showcase
export function TechMatrixShowcase() {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-black/50 rounded-2xl border border-white/10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-cyan-400/30"
          style={{ top: `${(i / 10) * 100}%` }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}

      <motion.div
        key={currentTech}
        className="relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-24 h-24 rounded-2xl glass border border-emerald-400/30 flex items-center justify-center relative"
          style={{ backgroundColor: `${technologies[currentTech].color}15` }}
        >
          {React.createElement(technologies[currentTech].icon, {
            className: "w-12 h-12",
            style: { color: technologies[currentTech].color },
          })}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">
            {technologies[currentTech].name}
          </h3>
          <p className="text-sm text-gray-400">
            {technologies[currentTech].description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// DNA Helix Showcase
export function TechHelixShowcase() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <div className="relative w-80 h-80">
        {technologies.map((tech, index) => {
          const t = (index / technologies.length) * Math.PI * 4;
          const radius = 60;
          const x = Math.cos(t) * radius;
          const y = Math.sin(t) * radius;
          const z = (index / technologies.length) * 200 - 100;

          return (
            <motion.div
              key={tech.name}
              className="absolute w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center"
              style={{
                backgroundColor: `${tech.color}15`,
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: 360,
                z: [z, z + 20, z],
              }}
              transition={{
                rotateY: {
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                z: {
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                },
              }}
            >
              {React.createElement(tech.icon, {
                className: "w-6 h-6",
                style: { color: tech.color },
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Particle System Showcase
export function TechParticleShowcase() {
  const [explosions, setExplosions] = useState<
    Array<{ x: number; y: number; color: string }>
  >([]);

  const handleTechClick = (index: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setExplosions((prev) => [
      ...prev,
      { x, y, color: technologies[index].color },
    ]);

    setTimeout(() => {
      setExplosions((prev) => prev.slice(1));
    }, 2000);
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <div className="grid grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: `${tech.color}15` }}
            onClick={(e) => handleTechClick(index, e)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {React.createElement(tech.icon, {
              className: "w-8 h-8",
              style: { color: tech.color },
            })}
          </motion.div>
        ))}
      </div>

      {explosions.map((explosion, index) => (
        <div key={index} className="absolute pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: explosion.color }}
              initial={{
                x: explosion.x,
                y: explosion.y,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: explosion.x + Math.cos((i / 12) * Math.PI * 2) * 100,
                y: explosion.y + Math.sin((i / 12) * Math.PI * 2) * 100,
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// Magnetic Field Showcase
export function TechMagneticShowcase() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left - rect.width / 2);
      mouseY.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center overflow-hidden cursor-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl"
      onMouseMove={handleMouseMove}
    >
      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const baseRadius = 100;
        const baseX = Math.cos(angle) * baseRadius;
        const baseY = Math.sin(angle) * baseRadius;

        return (
          <motion.div
            key={tech.name}
            className="absolute w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center"
            style={{
              backgroundColor: `${tech.color}15`,
              left: "50%",
              top: "50%",
              marginLeft: "-28px",
              marginTop: "-28px",
            }}
            animate={{
              x: baseX,
              y: baseY,
            }}
          >
            {React.createElement(tech.icon, {
              className: "w-7 h-7",
              style: { color: tech.color },
            })}
          </motion.div>
        );
      })}

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-white/50 pointer-events-none"
        style={{ x: mouseX, y: mouseY }}
      />
    </div>
  );
}

// Solar System Showcase
export function TechSolarSystemShowcase() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Zap className="w-8 h-8 text-white" />
      </motion.div>

      {[80, 120, 160].map((radius, orbitIndex) => (
        <div key={orbitIndex}>
          <div
            className="absolute border border-white/10 rounded-full"
            style={{
              width: radius * 2,
              height: radius * 2,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {technologies
            .slice(orbitIndex * 3, (orbitIndex + 1) * 3)
            .map((tech, planetIndex) => {
              const speed = 15 + orbitIndex * 5;
              const startAngle = (planetIndex / 3) * 360;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-20px",
                    marginTop: "-20px",
                  }}
                  animate={{
                    x: [
                      Math.cos((startAngle * Math.PI) / 180) * radius,
                      Math.cos(((startAngle + 360) * Math.PI) / 180) * radius,
                    ],
                    y: [
                      Math.sin((startAngle * Math.PI) / 180) * radius,
                      Math.sin(((startAngle + 360) * Math.PI) / 180) * radius,
                    ],
                  }}
                  transition={{
                    duration: speed,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {React.createElement(tech.icon, {
                    className: "w-5 h-5",
                    style: { color: tech.color },
                  })}
                </motion.div>
              );
            })}
        </div>
      ))}
    </div>
  );
}

// Liquid Blob Showcase
export function TechLiquidShowcase() {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <motion.div
        className="relative w-64 h-64 flex items-center justify-center"
        animate={{
          borderRadius: [
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "30% 60% 70% 40%/50% 60% 30% 60%",
            "40% 60% 60% 40%/60% 40% 60% 40%",
            "60% 40% 30% 70%/60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(45deg, ${technologies[currentTech].color}30, ${technologies[currentTech].color}10)`,
          border: `2px solid ${technologies[currentTech].color}50`,
        }}
      >
        <motion.div
          key={currentTech}
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="w-20 h-20 rounded-2xl glass border border-white/20 flex items-center justify-center relative"
            style={{ backgroundColor: `${technologies[currentTech].color}20` }}
          >
            {React.createElement(technologies[currentTech].icon, {
              className: "w-10 h-10",
              style: { color: technologies[currentTech].color },
            })}
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-white">
              {technologies[currentTech].name}
            </h3>
            <p className="text-sm text-gray-400">
              {technologies[currentTech].description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Hologram Showcase
export function TechHologramShowcase() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-black/50 rounded-2xl border border-white/10">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-cyan-400/30"
          style={{ top: `${(i / 10) * 100}%` }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="border border-cyan-400/20" />
          ))}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative"
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 180, 360],
            }}
            transition={{
              y: {
                duration: 3,
                delay: index * 0.2,
                repeat: Number.POSITIVE_INFINITY,
              },
              rotateY: {
                duration: 6,
                delay: index * 0.3,
                repeat: Number.POSITIVE_INFINITY,
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="w-16 h-16 rounded-lg glass border border-cyan-400/30 flex items-center justify-center relative"
              style={{ backgroundColor: `${tech.color}15` }}
            >
              {React.createElement(tech.icon, {
                className: "w-8 h-8",
                style: { color: tech.color },
              })}
              <div
                className="absolute inset-0 rounded-lg blur-sm opacity-50"
                style={{ backgroundColor: tech.color }}
              />
            </div>

            <motion.div
              className="absolute -bottom-8 left-1/2 w-px h-8 bg-cyan-400/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute top-4 left-4 glass px-3 py-2 rounded-lg border border-cyan-400/30">
        <p className="text-cyan-400 text-sm font-mono">HOLOGRAM_TECH_v2.1</p>
        <p className="text-cyan-300/60 text-xs">3D Projection Active</p>
      </div>
    </div>
  );
}

// 3D Cube Showcase using Spline
export function Tech3DCubeShowcase() {
  return (
    <main className="w-full h-full">
      <Spline scene="https://prod.spline.design/dzBbeI1atpspxW9A/scene.splinecode" />
    </main>
  );
}

export function Tech3DKeyboard() {
  return (
    <main className="w-full h-full">
      <Spline scene="https://prod.spline.design/ou-uMSY4unzfgmpL/scene.splinecode" />
    </main>
  );
}

// 3D Sphere Showcase
export function Tech3DSphereShowcase() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-2xl" />

      <div className="relative w-full h-full flex items-center justify-center">
        {technologies.slice(0, 8).map((tech, index) => {
          const angle = (index / 8) * Math.PI * 2;
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech.name}
              className="absolute w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${tech.color}40, ${tech.color}20, transparent)`,
                border: `2px solid ${tech.color}30`,
                transform: `translate(${x}px, ${y}px)`,
              }}
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotateY: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                },
              }}
              whileHover={{ scale: 1.3, z: 20 }}
            >
              {React.createElement(tech.icon, {
                className: "w-8 h-8",
                style: { color: tech.color },
              })}
            </motion.div>
          );
        })}

        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/30 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Zap className="w-10 h-10 text-white" />
        </motion.div>
      </div>
    </div>
  );
}

// Constellation Showcase
export function TechConstellationShowcase() {
  const [connections, setConnections] = useState<
    Array<{ from: number; to: number }>
  >([]);

  useEffect(() => {
    const newConnections = [];
    for (let i = 0; i < technologies.length; i++) {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const target = Math.floor(Math.random() * technologies.length);
        if (target !== i) {
          newConnections.push({ from: i, to: target });
        }
      }
    }
    setConnections(newConnections);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection, index) => {
          const fromAngle =
            (connection.from / technologies.length) * Math.PI * 2;
          const toAngle = (connection.to / technologies.length) * Math.PI * 2;
          const radius = 140;

          const fromX = 200 + Math.cos(fromAngle) * radius;
          const fromY = 200 + Math.sin(fromAngle) * radius;
          const toX = 200 + Math.cos(toAngle) * radius;
          const toY = 200 + Math.sin(toAngle) * radius;

          return (
            <motion.line
              key={index}
              x1={fromX}
              y1={fromY}
              x2={toX}
              y2={toY}
              stroke="url(#constellation-gradient)"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            />
          );
        })}

        <defs>
          <linearGradient
            id="constellation-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={tech.name}
            className="absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background: `radial-gradient(circle, ${tech.color}40, transparent)`,
              border: `2px solid ${tech.color}`,
              transform: `translate(${x}px, ${y}px)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Number.POSITIVE_INFINITY,
            }}
            whileHover={{ scale: 1.5, zIndex: 10 }}
          >
            {React.createElement(tech.icon, {
              className: "w-6 h-6",
              style: { color: tech.color },
            })}
          </motion.div>
        );
      })}
    </div>
  );
}

// Ripple Effect Showcase
export function TechRippleShowcase() {
  const [activeRipple, setActiveRipple] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRipple((prev) => (prev + 1) % technologies.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={tech.name}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            {activeRipple === index && (
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: tech.color }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}

            <motion.div
              className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center relative"
              style={{ backgroundColor: `${tech.color}15` }}
              animate={{
                scale: activeRipple === index ? [1, 1.3, 1] : 1,
                borderColor:
                  activeRipple === index ? tech.color : "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.5 }}
            >
              {React.createElement(tech.icon, {
                className: "w-8 h-8",
                style: { color: tech.color },
              })}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// Geometric Morphing Showcase
export function TechGeometricShowcase() {
  const [currentShape, setCurrentShape] = useState(0);
  const shapes = ["circle", "square", "triangle", "hexagon"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getShapeClipPath = (shape: string) => {
    switch (shape) {
      case "circle":
        return "circle(50%)";
      case "square":
        return "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
      case "triangle":
        return "polygon(50% 0%, 0% 100%, 100% 100%)";
      case "hexagon":
        return "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
      default:
        return "circle(50%)";
    }
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <div className="grid grid-cols-5 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative w-16 h-16 flex items-center justify-center"
            animate={{
              clipPath: getShapeClipPath(shapes[currentShape]),
              rotate: currentShape * 90,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundColor: tech.color }}
            />
            {React.createElement(tech.icon, {
              className: "w-8 h-8 relative z-10",
              style: { color: tech.color },
            })}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass px-4 py-2 rounded-lg">
        <p className="text-white text-sm">Shape: {shapes[currentShape]}</p>
      </div>
    </div>
  );
}

// Network Graph Showcase
export function TechNetworkShowcase() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [9, 0],
    [0, 5],
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(([from, to], index) => {
          const fromAngle = (from / technologies.length) * Math.PI * 2;
          const toAngle = (to / technologies.length) * Math.PI * 2;
          const radius = 120;

          const fromX = 200 + Math.cos(fromAngle) * radius;
          const fromY = 200 + Math.sin(fromAngle) * radius;
          const toX = 200 + Math.cos(toAngle) * radius;
          const toY = 200 + Math.sin(toAngle) * radius;

          const isHighlighted = hoveredNode === from || hoveredNode === to;

          return (
            <motion.line
              key={index}
              x1={fromX}
              y1={fromY}
              x2={toX}
              y2={toY}
              stroke={isHighlighted ? "#10b981" : "#ffffff30"}
              strokeWidth={isHighlighted ? "2" : "1"}
              animate={{ opacity: isHighlighted ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>

      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={tech.name}
            className="absolute w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center cursor-pointer"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              backgroundColor: `${tech.color}15`,
            }}
            onHoverStart={() => setHoveredNode(index)}
            onHoverEnd={() => setHoveredNode(null)}
            whileHover={{ scale: 1.3, zIndex: 10 }}
            animate={{
              borderColor:
                hoveredNode === index ? tech.color : "rgba(255,255,255,0.2)",
              boxShadow:
                hoveredNode === index ? `0 0 20px ${tech.color}50` : "none",
            }}
          >
            {React.createElement(tech.icon, {
              className: "w-7 h-7",
              style: { color: tech.color },
            })}
          </motion.div>
        );
      })}
    </div>
  );
}
