import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-8">How It Works</h1>

          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">The Captive Insurance Process</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Captive insurance is a specialized risk management strategy where an organization establishes its own
                insurance company to cover specific risks. This approach provides greater control, cost efficiency, and
                flexibility compared to traditional insurance markets.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-foreground mb-4">Step 1: Assessment</h3>
              <p className="text-foreground/70 leading-relaxed">
                We evaluate your organization's risk profile, loss history, and financial capacity to determine if
                captive insurance is appropriate for your situation.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-foreground mb-4">Step 2: Structure Design</h3>
              <p className="text-foreground/70 leading-relaxed">
                Working with tax advisors and regulatory specialists, we design a captive structure that optimizes tax
                efficiency, regulatory compliance, and risk management.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-foreground mb-4">Step 3: Formation & Licensing</h3>
              <p className="text-foreground/70 leading-relaxed">
                We manage the incorporation process, regulatory filings, and licensing requirements to ensure your
                captive is properly established and compliant.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-foreground mb-4">Step 4: Operations & Management</h3>
              <p className="text-foreground/70 leading-relaxed">
                Your captive operates with professional management, claims handling, and ongoing regulatory oversight to
                protect your interests and ensure stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
