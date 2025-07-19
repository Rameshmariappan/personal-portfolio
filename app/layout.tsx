import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ramaiah M - Full Stack Developer | Modern Web Solutions",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with 4+ years of expertise.",
  keywords:
    "Full Stack Developer, React Developer, Next.js, TypeScript, Web Development, Frontend Developer, Backend Developer, JavaScript, Node.js",
  authors: [{ name: "Ramaiah M" }],
  creator: "Ramaiah M",
  publisher: "Ramaiah M",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ramaiah-portfolio.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ramaiah M - Full Stack Developer | Modern Web Solutions",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with 4+ years of expertise.",
    url: "https://ramaiah-portfolio.net",
    siteName: "Ramaiah M Portfolio",
    images: [
      {
        url: "/images/ramaiah-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ramaiah M - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramaiah M - Full Stack Developer | Modern Web Solutions",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with 4+ years of expertise.",
    images: ["/images/ramaiah-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
