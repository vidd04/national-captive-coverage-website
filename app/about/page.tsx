import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-8">About National Captive Insurance</h1>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We help organizations gain control over their risk management through professionally structured captive
                insurance solutions. Our goal is to deliver stability, transparency, and long-term value to our clients.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Our Approach</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We believe in detailed analysis, transparent communication, and customized solutions. Rather than
                applying a one-size-fits-all model, we work closely with each organization to understand their specific
                risk profile and business objectives.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Expertise & Experience</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our team brings decades of combined experience in captive insurance formation, regulatory compliance,
                claims management, and strategic risk positioning. We maintain relationships with leading actuaries,
                legal specialists, and insurance professionals to ensure comprehensive guidance.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Commitment to Excellence</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We focus on building long-term relationships based on trust, competence, and measurable results. Your
                success is our success, and we're committed to supporting your organization's growth and risk management
                evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
