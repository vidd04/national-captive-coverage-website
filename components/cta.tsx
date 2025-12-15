export function CTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl text-foreground mb-6">Ready to Transform Your Risk Strategy?</h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Our team conducts comprehensive feasibility studies to determine if a captive insurance structure aligns
            with your organization's financial objectives and risk profile. Schedule a consultation with our advisors to
            explore your options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-sm text-foreground/60 mb-2">Typical Timeline</div>
            <div className="text-2xl text-primary">6-12 Months</div>
            <div className="text-xs text-foreground/50 mt-1">From feasibility to operational launch</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-foreground/60 mb-2">ROI Horizon</div>
            <div className="text-2xl text-primary">3-5 Years</div>
            <div className="text-xs text-foreground/50 mt-1">Typical payback period begins</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-foreground/60 mb-2">Average Efficiency</div>
            <div className="text-2xl text-primary">20-25%</div>
            <div className="text-xs text-foreground/50 mt-1">Recurring cost reduction potential</div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-lg">
            Request Feasibility Study
          </button>
          <p className="text-sm text-foreground/60 mt-4">
            No obligation. Our analysis takes 2-3 weeks and includes detailed recommendations.
          </p>
        </div>
      </div>
    </section>
  )
}
