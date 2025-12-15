export function OurSolution() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title */}
          <div>
            <h2 className="font-heading text-4xl text-foreground mb-6">
              How we help
            </h2>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-foreground/70 leading-relaxed">
              We work with the best Captive Consultants and Captives in the country to help identify the right captive solution for your needs.
            </p>

            <div className="border-l-4 border-border pl-6">
              <p className="text-foreground/70 leading-relaxed">
                <strong className="text-foreground">The vast majority of Traditional Brokers are disincentivized to introduce you to a captive program because it often results in a significant reduction in their commission.</strong> As commissioned agents, their business model prioritizes large upfront premiums.
              </p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-foreground/70 leading-relaxed">
                We are different. We are <strong className="text-foreground">licensed insurance advisors</strong> who work directly with all the <strong className="text-foreground">Group Captive Providers</strong> designed exclusively to transition our clients into this risk-management structure. Our business model is built on <strong className="text-foreground">scale and longevity.</strong> We embrace the significantly lower commissions paid by a captive structure because they represent real <strong className="text-foreground">long-term savings and retained capital</strong> for our clients. Clients placed in captives tend to stay for decades and lifetimes due to owned program equity and aligned incentives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

