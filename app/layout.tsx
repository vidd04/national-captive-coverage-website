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
    icon: "/u2828374554_a_3D_geometric_blue_professional_artistic_shape_i_df34a921-c858-4785-8ccd-afb7819b5d58_0-removebg-preview-Picsart-AiImageEnhancer.png",
    apple: "/u2828374554_a_3D_geometric_blue_professional_artistic_shape_i_df34a921-c858-4785-8ccd-afb7819b5d58_0-removebg-preview-Picsart-AiImageEnhancer.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} ${_geistMono.variable} ${_michroma.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
