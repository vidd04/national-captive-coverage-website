import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WhatIsCaptive } from "@/components/what-is-captive"
import { KeyBenefits } from "@/components/key-benefits"
import { KeyMetrics } from "@/components/key-metrics"
import { HowItWorks } from "@/components/how-it-works"
import { RiskComparison } from "@/components/risk-comparison"
import { FrontingLogosBanner } from "@/components/fronting-logos-banner"
import { EliteCompanyBanner } from "@/components/elite-company-banner"
import { WhyHaventBrokerTold } from "@/components/why-havent-broker-told"
import { OurSolution } from "@/components/our-solution"
import { EligibilityCriteria } from "@/components/eligibility-criteria"
import { IndustryFocus } from "@/components/industry-focus"
import { LinesOfCoverage } from "@/components/lines-of-coverage"
import { CTA } from "@/components/cta"
import { QualifyCTA } from "@/components/qualify-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatIsCaptive />
      <KeyBenefits />
      <QualifyCTA />
      <RiskComparison />
      <FrontingLogosBanner />
      <EliteCompanyBanner />
      <WhyHaventBrokerTold />
      <OurSolution />
      <KeyMetrics />
      <HowItWorks />
      <IndustryFocus />
      <LinesOfCoverage />
      <EligibilityCriteria />
      <CTA />
      <Footer />

      {/* Placeholder bottom section */}
      <section className="px-6 py-16 sm:px-6 lg:px-8 bg-card border-t border-border mt-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-heading text-2xl sm:text-3xl text-foreground mb-4">
            Placeholder i love james
          </p>
          <p className="text-foreground/70">
            This is a temporary section at the bottom of the page. Replace this content with your final copy and layout.
          </p>
        </div>
      </section>
    </main>
  )
}
