export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Feasibility Analysis",
      desc: "Comprehensive evaluation of your organization's risk profile, loss history, and suitability for captive structure.",
    },
    {
      num: "02",
      title: "Captive Selection",
      desc: "We work with the best Group Captive Providers and Structures to identify the best captive for your situation and needs.",
    },
    {
      num: "03",
      title: "Risk Placement",
      desc: "Strategic placement of your retained risks with reinsurance protection and diversified coverage mechanisms.",
    },
    {
      num: "04",
      title: "Ongoing Management",
      desc: "Continuous monitoring, claims management, and annual actuarial reviews to optimize your captive performance.",
    },
  ]

  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">Next Steps</h2>
        <p className="text-foreground/70 mb-16 max-w-2xl">
          A clear four-step process to evaluate, structure, and manage a captive insurance program for your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 hover:border-primary/50 transition">
              <div className="font-heading text-4xl text-primary/30 mb-4">{step.num}</div>
              <h3 className="text-lg text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        {/* Thin blue bar callout under steps */}
        <div className="mt-10 rounded-full border border-primary bg-primary/5 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-primary font-medium">
            Learn more about how captive insurance can change your business.
          </p>
          <button className="px-5 py-2 bg-blue-900 text-white text-sm font-medium rounded-full border border-blue-900 hover:bg-blue-800 transition">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
