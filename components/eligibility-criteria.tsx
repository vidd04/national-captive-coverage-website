export function EligibilityCriteria() {
  const stats = [
    {
      value: "$100K",
      label: "Minimum Annual Premium",
      subtext: "Entry threshold",
    },
    {
      value: "$250K+",
      label: "Typical Investment",
      subtext: "Average member commitment",
    },
    {
      value: "<50%",
      label: "Loss Ratio",
      subtext: "Required performance",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl text-foreground mb-4">Is Your Organization a Fit?</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-foreground/70 leading-relaxed">
              <p className="mb-6">
                Our Group Captive program is reserved for a select, financially astute group of businesses. <strong className="text-foreground">We prioritize quality over quantity.</strong> Only those committed to excellence in safety and financial management will be considered for this exclusive structure.
              </p>

              <p className="mb-8">
                To qualify, your organization must meet the following criteria:
              </p>
            </div>

            {/* Minimum Financial & Risk Commitment Card */}
            <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-all duration-300">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                <strong>Minimum Financial & Risk Commitment</strong>
              </h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <div className="border-l-4 border-primary pl-4">
                  <strong className="text-foreground">Premium Threshold:</strong> Your organization must have a minimum combined annual premium of <strong className="text-foreground">$100,000</strong> in Workers' Compensation, General Liability, and Auto Liability. (While this is the entry minimum, our typical members invest <strong className="text-foreground">$250,000 or more</strong>.)
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <strong className="text-foreground">Loss Performance:</strong> Your company must maintain a sustained <strong className="text-foreground">Loss Ratio below 50%</strong>, demonstrating better-than-average loss histories for your respective industry.
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <strong className="text-foreground">Safety Excellence:</strong> Management teams must be unequivocally <strong className="text-foreground">committed to safety</strong> and have robust, proven safety and risk management programs already in place.
                </div>
              </div>
            </div>

            {/* The Ideal Candidate Seeks Card */}
            <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-all duration-300">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                <strong>The Ideal Candidate Seeks:</strong>
              </h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <div className="border-l-4 border-primary pl-4">
                  <strong className="text-foreground">Greater Control:</strong> A desire to gain direct control over claims handling and ultimately, their insurance destiny.
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <strong className="text-foreground">Predictability:</strong> The need to eliminate the volatility of traditional insurance, where fluctuating premiums make annual budgeting difficult.
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <strong className="text-foreground">Fair Pricing:</strong> Frustration with rates increasing even when their company's losses have remained flat or improved.
                </div>
              </div>
            </div>

            {/* Industries Blockquote */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-foreground/80 leading-relaxed italic">
                We are currently seeking long-term partners across a broad range of industries, including Manufacturing, Distribution, Construction, Transportation, Retail, Food & Beverage Production, Hospitality, Agri-business, and Oil & Gas Well Operations/Services.
              </p>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              If your company meets these stringent standards and is ready to secure a lasting financial advantage, we invite you to connect with us.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="sticky top-8">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-heading text-xl text-foreground mb-6 text-center">Key Requirements</h3>
                <div className="space-y-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center border-b border-border/50 last:border-b-0 pb-6 last:pb-0">
                      <div className="text-4xl font-heading text-primary mb-2">{stat.value}</div>
                      <div className="font-heading text-base text-foreground mb-1">{stat.label}</div>
                      <div className="text-sm text-foreground/60">{stat.subtext}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
