import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Ramaiah M - Full Stack Developer",
  description: "Modern portfolio showcasing full-stack development expertise with focus on frontend technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-outfit antialiased">{children}</body>
    </html>
  )
}
