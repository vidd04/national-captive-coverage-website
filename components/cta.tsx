export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and description */}
          <div>
            <h2 className="font-heading text-4xl text-foreground mb-6">Ready to Transform Your Risk Strategy?</h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Our team conducts comprehensive feasibility studies to determine if a captive insurance structure aligns with your organization's financial objectives and risk profile. Schedule a consultation with our advisors to explore your options.
            </p>
            <div className="space-y-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-85 transition">
                Request Feasibility Study
              </button>
              <p className="text-sm text-foreground/60">
                No obligation. Our analysis takes 2-3 weeks and includes detailed recommendations.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div className="border border-border rounded-lg p-6 bg-background">
              <div className="text-xs text-foreground/50 uppercase tracking-widest mb-3">Typical Timeline</div>
              <div className="text-3xl text-primary mb-2">6-12 Months</div>
              <div className="text-sm text-foreground/70">From feasibility to operational launch</div>
            </div>
            <div className="border border-border rounded-lg p-6 bg-background">
              <div className="text-xs text-foreground/50 uppercase tracking-widest mb-3">ROI Horizon</div>
              <div className="text-3xl text-primary mb-2">3-5 Years</div>
              <div className="text-sm text-foreground/70">Typical payback period begins</div>
            </div>
            <div className="border border-border rounded-lg p-6 bg-background">
              <div className="text-xs text-foreground/50 uppercase tracking-widest mb-3">Average Efficiency</div>
              <div className="text-3xl text-primary mb-2">20-25%</div>
              <div className="text-sm text-foreground/70">Recurring cost reduction potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
