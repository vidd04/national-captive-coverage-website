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
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatIsCaptive />
      <KeyBenefits />
      <RiskComparison />
      <FrontingLogosBanner />
      <EliteCompanyBanner />
      <WhyHaventBrokerTold />
      <OurSolution />
      <KeyMetrics />
      <HowItWorks />
      <IndustryFocus />
      <EligibilityCriteria />
      <CTA />
      <Footer />
    </main>
  )
}
