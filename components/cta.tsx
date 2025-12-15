export function CTA() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and description */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">Ready to Transform Your Risk Strategy?</h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Our team conducts comprehensive feasibility studies to determine if a captive insurance structure aligns with your organization's financial objectives and risk profile. Schedule a consultation with our advisors to explore your options.
            </p>
            <div className="space-y-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-85 transition">
                Request Feasibility Study
              </button>
            </div>
          </div>

          {/* Right side removed as requested */}
        </div>
      </div>
    </section>
  )
}
