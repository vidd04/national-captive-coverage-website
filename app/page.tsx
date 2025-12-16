import Image from "next/image"
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
      {/* Blue CTA bar between benefits and comparison */}
      <section className="bg-primary text-white px-6 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl tracking-tight">
              Why are you buying commercial insurance in 2026?
            </p>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              See if a Captive Can Work For Your Business
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#0b1f3b] text-sm font-medium hover:bg-white/90 transition whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </section>
      {/* Mirrored image strip below CTA, cropped from middle */}
      <div className="w-full h-8 sm:h-10 lg:h-12 flex">
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/captive-page/background-1.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
            loading="lazy"
          />
        </div>
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/captive-page/background-1.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center", transform: "scaleX(-1)" }}
            loading="lazy"
          />
        </div>
      </div>
      <RiskComparison />
      <FrontingLogosBanner />
      {/* Mirrored image strip below fronting carriers, cropped from middle */}
      <div className="w-full h-16 sm:h-20 lg:h-24 flex">
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/captive-page/background-3.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
            loading="lazy"
          />
        </div>
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/captive-page/background-3.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center", transform: "scaleX(-1)" }}
            loading="lazy"
          />
        </div>
      </div>
      <EliteCompanyBanner />
      <WhyHaventBrokerTold />
      {/* Thin blue bar between broker section and how we help */}
      <div className="w-full h-2 bg-primary" />
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
