import Image from "next/image"

export function WhatIsCaptive() {
  return (
    <section id="what-is-captive" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-foreground/2">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-12">What is a Captive?</h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch items-start">
          {/* Left side - 2x2 image grid */}
          <div className="w-full lg:h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
              {/* Top-left */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden">
                <Image
                  src="/industries/Manufacturing.png"
                  alt="Manufacturing industry"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              {/* Top-right - original captive image */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden">
                <Image
                  src="/captive-page/what-is-a-captive.png"
                  alt="What is a Captive - Construction workers on a roof representing industries that use captive insurance"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              {/* Bottom-left */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden">
                <Image
                  src="/industries/Transportation-Logistics.png"
                  alt="Transportation and logistics industry"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              {/* Bottom-right */}
              <div className="relative w-full h-32 sm:h-40 lg:h-full overflow-hidden">
                <Image
                  src="/industries/Construction-Contractors.png"
                  alt="Construction and specialty contractors industry"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Leverage the same insurance framework used by 90%+ of Fortune 500 companies and thousands of businesses like yours to convert insurance spend into owned equity, secured by A.M. Best A-Rated Carriers.
            </p>
            
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
      </div>
    </section>
  )
}
