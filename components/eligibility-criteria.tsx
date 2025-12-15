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
    <section className="px-6 py-20 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">Is Your Organization a Fit?</h2>
          <p className="text-sm text-foreground/60 max-w-2xl">
            Understand the financial and operational profile we look for before recommending a captive structure.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10 mb-12 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="text-foreground/70 leading-relaxed text-sm md:text-base">
              <p className="mb-6">
                Our Group Captive program is reserved for a select, financially astute group of businesses. We prioritize
                quality over quantity. Only those committed to excellence in safety and financial management will be considered
                for this exclusive structure.
              </p>

              <p className="mb-8">
                To qualify, your organization must meet the following criteria:
              </p>
            </div>

            {/* Minimum Financial & Risk Commitment Card */}
            <div className="border border-border rounded-2xl p-6 md:p-7 bg-card shadow-sm hover:border-primary/60 hover:shadow-md transition-all duration-300">
              <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4 md:mb-6">
                Minimum Financial & Risk Commitment
              </h3>
              <ul className="space-y-3 list-disc pl-5 text-foreground/70 leading-relaxed text-sm md:text-base">
                <li>
                  Premium Threshold: Your organization must have a minimum combined annual premium of $100,000 in Workers'
                  Compensation, General Liability, and Auto Liability. (While this is the entry minimum, our typical members
                  invest $250,000 or more.)
                </li>
                <li>
                  Loss Performance: Your company must maintain a sustained Loss Ratio below 50%, demonstrating
                  better-than-average loss histories for your respective industry.
                </li>
                <li>
                  Safety Excellence: Management teams must be unequivocally committed to safety and have robust, proven safety
                  and risk management programs already in place.
                </li>
              </ul>
            </div>

            {/* The Ideal Candidate Seeks Card */}
            <div className="border border-border rounded-2xl p-6 md:p-7 bg-card shadow-sm hover:border-primary/60 hover:shadow-md transition-all duration-300">
              <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4 md:mb-6">
                The Ideal Candidate Seeks:
              </h3>
              <ul className="space-y-3 list-disc pl-5 text-foreground/70 leading-relaxed text-sm md:text-base">
                <li>
                  Greater Control: A desire to gain direct control over claims handling and ultimately, their insurance destiny.
                </li>
                <li>
                  Predictability: The need to eliminate the volatility of traditional insurance, where fluctuating premiums make
                  annual budgeting difficult.
                </li>
                <li>
                  Fair Pricing: Frustration with rates increasing even when their company's losses have remained flat or
                  improved.
                </li>
              </ul>
            </div>

            {/* Industries Blockquote */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-7">
              <p className="text-foreground/80 leading-relaxed italic text-sm md:text-base">
                We are currently seeking long-term partners across a broad range of industries, including Manufacturing, Distribution, Construction, Transportation, Retail, Food & Beverage Production, Hospitality, Agri-business, and Oil & Gas Well Operations/Services.
              </p>
            </div>

            <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
              If your company meets these stringent standards and is ready to secure a lasting financial advantage, we invite you to connect with us.
            </p>
          </div>

          {/* Right Column - Stats (non-sticky) */}
          <div className="lg:col-span-1">
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
    </section>
  )
}
