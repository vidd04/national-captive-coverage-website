"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { type FormEvent, useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", company: "", email: "", phone: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-8">Contact Us</h1>

          <p className="text-lg text-foreground/70 leading-relaxed mb-12">
            Have questions about captive insurance or want to discuss your organization's specific needs? We'd like to
            hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-foreground mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/50"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/50"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/50"
                placeholder="Tell us about your organization and interest in captive insurance..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
