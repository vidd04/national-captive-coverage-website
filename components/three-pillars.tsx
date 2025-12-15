export function ThreePillars() {
  const pillars = [
    {
      title: "Control",
      description:
        "Direct oversight of claims management, coverage design, and underwriting decisions tailored to your organization.",
      icon: "⚙️",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce insurance expenses through improved loss control and competitive underwriting without market volatility.",
      icon: "💰",
    },
    {
      title: "Stability",
      description:
        "Predictable premiums and long-term rate stability for comprehensive financial planning and budgeting.",
      icon: "🏛️",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">Core Benefits of Captive Insurance</h2>
          <p className="text-lg text-foreground/70">Strategic advantages for sustainable risk management</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-8 border border-border rounded-lg hover:border-primary/50 transition">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl text-foreground mb-3">{pillar.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
