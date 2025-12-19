import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

/* =======================
   Fuentes
======================= */

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
})



/* =======================
   Metadata
======================= */

export const metadata: Metadata = {
  title: "Rollos de Canela Artesanales | Monterrey",
  description:
    "Descubre los mejores rollos de canela artesanales de Monterrey. Horneados frescos diariamente con ingredientes premium.",
  generator: "v0.app",
  keywords: [
    "rollos de canela",
    "monterrey",
    "panadería",
    "artesanal",
    "cinnamon rolls",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

/* =======================
   Layout
======================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${geistMono.variable} ${playfair.variable} ${dancingScript.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
