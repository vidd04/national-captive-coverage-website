import Image from "next/image"

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
    <section className="px-6 py-20 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-12">The Captive Benefit</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - 2x2 grid of benefit boxes */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="border border-blue-900 rounded-lg p-6 bg-white hover:border-primary/60 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Right side - Image placeholder */}
          <div>
            <div className="w-full bg-muted rounded-lg flex items-center justify-center min-h-[400px]">
              <Image
                src="/placeholder.svg"
                alt="The Captive Benefit"
                width={400}
                height={400}
                className="w-full h-full object-contain opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

