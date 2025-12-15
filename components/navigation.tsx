"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-foreground text-sm tracking-tight">
            <Image src="/u2828374554_a_3D_geometric_blue_professional_artistic_shape_i_df34a921-c858-4785-8ccd-afb7819b5d58_0-removebg-preview-Picsart-AiImageEnhancer.png" alt="National Captive Insurance logo" width={32} height={32} className="h-5 w-auto" loading="eager" />
            <span className="font-logo">National Captive Insurance</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="#what-is-captive" className="text-sm text-foreground/80 hover:text-foreground transition">
              How It Works
            </Link>
            <Link href="#industries" className="text-sm text-foreground/80 hover:text-foreground transition">
              Industries
            </Link>
            <Link href="#how-we-help" className="text-sm text-foreground/80 hover:text-foreground transition">
              About
            </Link>
            <Link href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition">
              Contact
            </Link>
          </div>

          <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground text-sm hover:opacity-85 transition">
            Request Study
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link href="#what-is-captive" className="block text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
            <Link href="#industries" className="block text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>
              Industries
            </Link>
            <Link href="#how-we-help" className="block text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#contact" className="block text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground text-sm hover:opacity-85 transition mt-4">
              Request Study
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
