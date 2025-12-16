export function LinesOfCoverage() {
  return (
    <section id="lines-of-coverage" className="px-6 py-20 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">Lines of Coverage</h2>
        </div>

        <div className="space-y-6">
          {/* Casualty Coverage Section */}
          <div className="border border-border rounded-2xl p-6 md:p-7 bg-card shadow-sm hover:border-primary/60 hover:shadow-md transition-all duration-300">
            <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4">
              1. Casualty Coverage
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">
              Casualty insurance lines are among the <strong className="text-foreground">most controllable risks</strong> in any organization when supported by disciplined risk management. By self-insuring a defined portion of these risks through a <strong className="text-foreground">captive structure</strong>, members gain direct oversight over claims handling and benefit from effective safety and loss control programs.
            </p>

            <div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-border rounded-lg p-5 bg-background">
                  <h5 className="font-heading text-lg text-foreground mb-3">Workers' Compensation</h5>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Gain financial control over your largest controllable exposure. Your captive emphasizes proactive claims management, targeted loss control, and long-term reduction in claim frequency and severity.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-5 bg-background">
                  <h5 className="font-heading text-lg text-foreground mb-3">General Liability (GL)</h5>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Coverage for third-party bodily injury and other related claims, with customized policy language aligned to your specific operational risks.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-5 bg-background">
                  <h5 className="font-heading text-lg text-foreground mb-3">Automobile Liability & Physical Damage</h5>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Protection for fleet operations, including liability and physical damage. Focused on driver training and fleet safety programs that directly influence loss performance and insurance costs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Stop Loss Section */}
          <div className="border border-border rounded-2xl p-6 md:p-7 bg-card shadow-sm hover:border-primary/60 hover:shadow-md transition-all duration-300">
            <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4">
              2. Medical Stop Loss
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">
              For companies with self-funded health plans, <strong className="text-foreground">Medical Stop Loss</strong> provides essential protection against high-dollar, catastrophic claims that can destabilize plan performance.
            </p>

            <div>
              <div className="border border-border rounded-lg p-5 bg-background">
                <h5 className="font-heading text-lg text-foreground mb-3">Medical Stop Loss</h5>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  Protects your self-funded health plan from individual catastrophic claims and adverse aggregate loss experience. Captive participation can deliver more stable pricing and stronger protection than the traditional market.
                </p>
              </div>
            </div>
          </div>

          {/* The Benefit of Partnership Section */}
          <div className="mt-10">
            <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4">
              The Benefit of Partnership
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">
              Our Captive Partners manage the <strong className="text-foreground">entire captive infrastructure</strong>, allowing your leadership team to remain focused on running the business, not an insurance company.
            </p>

            <div className="border border-border rounded-2xl p-6 md:p-7 bg-card shadow-sm">
              <p className="text-foreground/70 mb-4 leading-relaxed text-sm md:text-base">This includes:</p>
              <ul className="space-y-3 list-disc pl-5 text-foreground/70 leading-relaxed text-sm md:text-base">
                <li>
                  <strong className="text-foreground">Claims Management:</strong> Direct oversight to ensure fair, efficient, and timely claim resolution.
                </li>
                <li>
                  <strong className="text-foreground">Loss Control:</strong> Dedicated safety resources and proven best practices designed to reduce losses over time.
                </li>
                <li>
                  <strong className="text-foreground">Financial & Regulatory Management:</strong> Full compliance, accounting, and domicile administration handled on your behalf.
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-7">
            <p className="text-foreground text-base md:text-lg font-medium mb-6 leading-relaxed">
              Don't just pay for insurance. Own it and retain your unused premiums.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-85 transition">
              See If You Qualify for a Captive
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

