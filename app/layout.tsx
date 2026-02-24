import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
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
  title: "Ramaiah M - Senior Frontend Engineer | React, Next.js, TypeScript",
  description:
    "Senior Frontend Engineer with 4.5+ years building scalable SaaS platforms, automation dashboards, and high-performance web apps. React, Next.js, TypeScript specialist.",
  keywords:
    "Senior Frontend Engineer, React Developer, Next.js, TypeScript, SaaS, Frontend Architecture, Web Development, JavaScript, Node.js",
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
    title: "Ramaiah M - Senior Frontend Engineer | React, Next.js, TypeScript",
    description:
      "Senior Frontend Engineer with 4.5+ years building scalable SaaS platforms and automation dashboards. 25% performance improvement, 40% engagement increase, 20K+ users served.",
    url: "https://ramaiah-portfolio.net",
    siteName: "Ramaiah M Portfolio",
    images: [
      {
        url: "/images/ramaiah-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ramaiah M - Senior Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramaiah M - Senior Frontend Engineer | React, Next.js, TypeScript",
    description:
      "Senior Frontend Engineer with 4.5+ years building scalable SaaS platforms. React, Next.js, TypeScript specialist.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
