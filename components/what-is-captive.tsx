import Image from "next/image"

export function WhatIsCaptive() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-foreground/2">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl text-foreground mb-12">What is a Captive?</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image placeholder */}
          <div className="w-full">
            <div className="w-full bg-muted rounded-lg flex items-center justify-center min-h-[500px]">
              <Image
                src="/placeholder.svg"
                alt="What is a Captive"
                width={400}
                height={500}
                className="w-full h-full object-contain opacity-50"
              />
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
