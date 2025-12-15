function renderText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx} className="text-foreground">{part.slice(2, -2)}</strong>
        }
        return <span key={idx}>{part}</span>
      })}
    </>
  )
}

export function RiskComparison() {
  const comparisons = [
    {
      benefit: "Retain and Invest Unused Premiums",
      captive: "**Asset Potential:** Low losses can result in retained underwriting profit and investment income.",
      trad: "**Sunk Cost:** Premiums are lost entirely to the carrier, even with low claims.",
    },
    {
      benefit: "Full Visibility Over Premiums Pricing",
      captive: "**Complete Oversight:** Premiums are allocated transparently between claims, reserves, and fees. Nothing is hidden.",
      trad: "**Hidden:** You don't see how much of your premium funds claims, reserves, carrier profit, or expenses.",
    },
    {
      benefit: "Charge and Pay the True, Efficient Cost of the Claim",
      captive: "**Incentivized Resolution:** Everyone benefits from quicker claim closure and minimizing legal costs. Get reimbursed ASAP.",
      trad: "**Disincentivized Resolution:** The insurer's profit is maximized by delaying or contesting payments, keeping the money invested longer.",
    },
    {
      benefit: "Same Catastrophic Coverage Used by Traditional Carriers",
      captive: "Catastrophic risks are covered at wholesale prices by the same Global Reinsurance Market traditional carriers use.",
      trad: "Standardized, bundled reinsurance protection determined by the carrier.",
    },
    {
      benefit: "Compliant & Lender Approved",
      captive: "Policy fronted by A-Rated fronting carriers (Admitted and Compliant).",
      trad: "Policy issued by the commercial carrier.",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl text-foreground mb-4">Traditional Insurance vs. Captive</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl">
          Understand how captive insurance provides superior financial control and risk management capabilities.
        </p>
        
        {/* Desktop: Beautiful 3-column table layout */}
        <div className="hidden lg:block">
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary/10 border-b border-border">
              <div className="p-6 border-r border-border">
                <h3 className="font-heading text-lg text-primary font-medium">Captive Benefit</h3>
              </div>
              <div className="p-6 border-r border-border">
                <h3 className="font-heading text-lg text-primary font-medium">Captive Program (Your Offer)</h3>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg text-primary font-medium">Traditional Insurance</h3>
              </div>
            </div>
            
            {/* Rows */}
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 border-b border-border/50 last:border-b-0 hover:bg-foreground/2 transition-colors ${
                  idx % 2 === 0 ? "bg-background" : "bg-card"
                }`}
              >
                <div className="p-6 border-r border-border/50">
                  <div className="font-heading text-base text-foreground font-medium">{row.benefit}</div>
                </div>
                <div className="p-6 border-r border-border/50">
                  <div className="text-sm text-foreground leading-relaxed">{renderText(row.captive)}</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-foreground/70 leading-relaxed">{renderText(row.trad)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Card-based layout */}
        <div className="lg:hidden space-y-6">
          {comparisons.map((row, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 bg-background">
              <h4 className="font-heading text-base text-foreground font-medium mb-4">{row.benefit}</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-primary/70 mb-1">Captive Program (Your Offer)</div>
                  <div className="text-sm text-foreground">{renderText(row.captive)}</div>
                </div>
                <div>
                  <div className="text-xs text-foreground/50 mb-1">Traditional Insurance</div>
                  <div className="text-sm text-foreground/70">{renderText(row.trad)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
