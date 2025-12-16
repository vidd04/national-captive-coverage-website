export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[url('/captive-page/background-1.png')] bg-cover bg-center">
      <div className="mx-auto max-w-6xl">
        <div className="bg-card/95 border border-border shadow-lg rounded-2xl px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
            Ready to Transform Your Risk Strategy?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-8 text-sm sm:text-base">
            Our team conducts comprehensive feasibility studies to determine if a captive insurance structure aligns with
            your organization's financial objectives and risk profile. Schedule a consultation with our advisors to
            explore your options.
          </p>
          <div className="space-y-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-85 transition">
              Request Feasibility Study
            </button>
            <p className="text-xs sm:text-sm text-foreground/60 max-w-md">
              No obligation. Our analysis takes 2–3 weeks and includes detailed recommendations tailored to your risk
              profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
