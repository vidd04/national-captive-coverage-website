import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Industries() {
  const industries = [
    {
      name: "Manufacturing",
      description: "Production and equipment-related risks, worker safety, and operational continuity.",
    },
    {
      name: "Transportation & Logistics",
      description: "Fleet management, cargo protection, and liability coverage for transport operations.",
    },
    {
      name: "Construction",
      description: "Project-specific risks, equipment liability, and contractor oversight.",
    },
    {
      name: "Healthcare",
      description: "Professional liability, property coverage, and specialized medical industry risks.",
    },
    {
      name: "Real Estate & Property Management",
      description: "Multi-property coverage, liability protection, and loss prevention.",
    },
    {
      name: "Professional Services",
      description: "Errors and omissions, client liability, and specialized service coverage.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-8">Industries We Serve</h1>

          <p className="text-lg text-foreground/70 leading-relaxed mb-12">
            Captive insurance structures can be tailored to virtually any industry. We work with organizations across
            sectors to create customized risk management solutions that address industry-specific challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="p-6 border border-border rounded-lg">
                <h3 className="text-xl text-foreground mb-3">{industry.name}</h3>
                <p className="text-foreground/70">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
