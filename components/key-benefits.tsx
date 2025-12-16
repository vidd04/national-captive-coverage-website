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
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left side - 2x2 grid of benefit boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="border border-blue-900 rounded-lg p-6 bg-white hover:border-primary/60 hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
              >
                <h3 className="font-heading text-base sm:text-lg text-foreground mb-3 group-hover:text-primary transition-colors md:min-h-[3.25rem]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Right side - 2x2 image grid framed by dark blue */}
          <div className="h-full">
            <div className="w-full h-full rounded-lg bg-blue-900 p-3 grid grid-cols-2 grid-rows-2 gap-3">
              {/* Top-left */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden rounded-md">
                <Image
                  src="/industries/Retail-Wholesale.png"
                  alt="Retail and wholesale operations"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              {/* Top-right */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden rounded-md">
                <Image
                  src="/industries/Food-Beverage.png"
                  alt="Food and beverage production"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              {/* Bottom-left */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden rounded-md">
                <Image
                  src="/industries/Real-Estate.png"
                  alt="Real estate and property management"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              {/* Bottom-right */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden rounded-md">
                <Image
                  src="/industries/Healthcare-Medical-Malpractice.png"
                  alt="Healthcare and medical malpractice"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

