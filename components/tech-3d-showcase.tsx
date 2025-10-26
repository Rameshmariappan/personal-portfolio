"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { Suspense, useRef } from "react"
import type * as THREE from "three"

interface TechIconProps {
  position: [number, number, number]
  text: string
  color: string
  rotationSpeed?: number
}

function TechIcon({ position, text, color, rotationSpeed = 1 }: TechIconProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <Float speed={rotationSpeed} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* 3D Text */}
        <Text3D
          ref={meshRef}
          font="/fonts/Inter_Bold.json"
          size={0.3}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-text.length * 0.1, 0, 0]}
        >
          {text}
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Text3D>

        {/* Glowing background */}
        <mesh position={[0, 0, -0.2]}>
          <planeGeometry args={[text.length * 0.4, 0.8]} />
          <meshBasicMaterial color={color} transparent opacity={0.1} />
        </mesh>

        {/* Particle effects */}
        <group>
          {Array.from({ length: 5 }).map((_, i) => (
            <Float key={i} speed={2 + i} rotationIntensity={1} floatIntensity={2}>
              <mesh position={[Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1]}>
                <sphereGeometry args={[0.02]} />
                <meshBasicMaterial color={color} />
              </mesh>
            </Float>
          ))}
        </group>
      </group>
    </Float>
  )
}

function TechScene() {
  const technologies = [
    { name: "React.js", color: "#61DAFB", position: [-4, 2, 0] as [number, number, number] },
    { name: "Next.js", color: "#000000", position: [0, 2, 0] as [number, number, number] },
    { name: "TypeScript", color: "#3178C6", position: [4, 2, 0] as [number, number, number] },
    { name: "Node.js", color: "#339933", position: [-6, 0, 0] as [number, number, number] },
    { name: "PostgreSQL", color: "#336791", position: [-2, 0, 0] as [number, number, number] },
    { name: "Tailwind", color: "#06B6D4", position: [2, 0, 0] as [number, number, number] },
    { name: "Docker", color: "#2496ED", position: [6, 0, 0] as [number, number, number] },
    { name: "GraphQL", color: "#E10098", position: [-4, -2, 0] as [number, number, number] },
    { name: "Three.js", color: "#000000", position: [0, -2, 0] as [number, number, number] },
    { name: "Framer", color: "#0055FF", position: [4, -2, 0] as [number, number, number] },
  ]

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066ff" />

      {technologies.map((tech, index) => (
        <TechIcon
          key={tech.name}
          position={tech.position}
          text={tech.name}
          color={tech.color}
          rotationSpeed={1 + index * 0.1}
        />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

export function Tech3DShowcase() {
  return (
    <motion.div
      className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={<LoadingFallback />}>
          <TechScene />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}

// Alternative 2D floating icons version for better performance
export function TechIconsShowcase() {
  const technologies = [
    { name: "React.js", color: "#61DAFB", icon: "⚛️" },
    { name: "Next.js", color: "#000000", icon: "▲" },
    { name: "TypeScript", color: "#3178C6", icon: "TS" },
    { name: "Node.js", color: "#339933", icon: "🟢" },
    { name: "PostgreSQL", color: "#336791", icon: "🐘" },
    { name: "Tailwind CSS", color: "#06B6D4", icon: "🎨" },
    { name: "Docker", color: "#2496ED", icon: "🐳" },
    { name: "GraphQL", color: "#E10098", icon: "◈" },
    { name: "Three.js", color: "#000000", icon: "🎲" },
    { name: "Framer Motion", color: "#0055FF", icon: "🎭" },
  ]

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
              "linear-gradient(225deg, rgba(139, 92, 246, 0.05), rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05))",
              "linear-gradient(45deg, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="relative w-full h-full flex items-center justify-center">
        {technologies.map((tech, index) => {
          const angle = (index / technologies.length) * 2 * Math.PI
          const radius = 120
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={tech.name}
              className="absolute group cursor-pointer"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.3 },
              }}
            >
              {/* Icon container */}
              <motion.div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                  boxShadow: `0 0 20px ${tech.color}30`,
                }}
                whileHover={{
                  boxShadow: `0 0 30px ${tech.color}60`,
                }}
              >
                <span className="text-2xl">{tech.icon}</span>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${tech.color}30, transparent)`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Tech name tooltip */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tech.name}
              </motion.div>

              {/* Orbiting particles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + index, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: tech.color,
                    top: "-4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </motion.div>
            </motion.div>
          )
        })}

        {/* Central glow */}
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
