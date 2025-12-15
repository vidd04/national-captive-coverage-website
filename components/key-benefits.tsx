export function KeyBenefits() {
  const benefits = [
    {
      title: "Retain and Invest Unused Premiums",
      description:
        "Transform premiums from a sunk cost into an asset. You now have the potential to turn your unused premiums into annual dividends and reductions in pricing, without sacrificing regulatory compliance.",
    },
    {
      title: "Stabilize Insurance Spend",
      description:
        "Gain oversight into annual premium calculation, driven by your company's past performance and retained premiums. No more unexplained wild annual premium swings and time-consuming coverage re-marketing.",
    },
    {
      title: "Approved by Lenders and Regulators",
      description:
        "Policies & COIs (Certificates of Insurance) are issued on A.M. Best A-Rated paper for complete regulatory acceptance across all jurisdictions through our Fronting Insurance Carrier Partners.",
    },
    {
      title: "Catastrophic Coverage",
      description:
        "Group captives purchase reinsurance for large catastrophic loss events, providing financial stability and peace of mind.",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-foreground/2">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and description */}
          <div>
            <h2 className="font-heading text-4xl text-foreground mb-6">The Captive Benefit</h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Leverage the same insurance framework used by 90%+ of Fortune 500 companies and thousands of businesses like yours to convert insurance spend into owned equity, secured by A.M. Best A-Rated Carriers.
            </p>
            
            <div className="space-y-6">
              <div className="space-y-6 text-foreground/70 leading-relaxed">
                <p>
                  A <strong className="text-foreground">captive insurance company</strong> is a licensed insurance company that is owned and controlled by the same organization(s) it insures. It is a way for businesses to legally <strong className="text-foreground">self-insure</strong> their risk in a formal, regulated structure that has the ability to issue Certificates of Insurance (COIs) and qualify for tax deductibility.
                </p>
                <p>
                  The portion of risk self-insured by a captive is strategically chosen by licensed actuaries to retain small, predictable losses and to <strong className="text-foreground">reduce the cost of additional coverage (reinsurance) used for catastrophic protection.</strong>
                </p>
                <p>
                  For example, consider your business pays $1MM in annual premiums but only incurs $200K in claims. In the traditional market, the commercial insurer keeps the entire $800K difference. In a captive structure, a large portion of the $800k has the potential to become YOUR retained underwriting profit.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - 2x2 grid of benefit boxes */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

