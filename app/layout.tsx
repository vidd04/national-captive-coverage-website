import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Michroma } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _michroma = Michroma({ subsets: ["latin"], weight: "400", variable: "--font-logo" })

export const metadata: Metadata = {
  title: "National Captive Insurance | Captive Insurance Solutions",
  description: "Secure, stable captive insurance structures for risk management and operational excellence.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} ${_geistMono.variable} ${_michroma.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
