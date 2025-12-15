export function OurSolution() {
  return (
    <section id="how-we-help" className="px-6 py-20 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
              How we help
            </h2>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <p className="text-foreground/70 leading-relaxed">
              We partner with leading captive consultants and group captive programs across the country to evaluate whether a
              captive is the right fit, structure it correctly, and stay with you as the program matures.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Top card */}
              <div className="rounded-lg border border-border bg-background p-5 md:col-span-2">
                <p className="font-heading text-lg text-primary/80 mb-2 tracking-wide">
                  Clear diagnosis
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We analyze your current program, loss history, and financial objectives to determine whether a captive genuinely
                  improves your position versus traditional insurance.
                </p>
              </div>

              {/* Bottom left */}
              <div className="rounded-lg border border-border bg-background p-5">
                <p className="font-heading text-lg text-primary/80 mb-2 tracking-wide">
                  Market navigation
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We curate and compare options from multiple group captive sponsors, helping you understand structures, costs,
                  and commitments in plain language.
                </p>
              </div>

              {/* Bottom right */}
              <div className="rounded-lg border border-border bg-background p-5">
                <p className="font-heading text-lg text-primary/80 mb-2 tracking-wide">
                  Ongoing stewardship
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  After implementation, we remain involved to monitor performance, support board decisions, and adjust coverage
                  as your business and risk profile evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

