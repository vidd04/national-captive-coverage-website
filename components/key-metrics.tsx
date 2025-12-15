export function KeyMetrics() {
  const metrics = [
    { label: "Companies under our partner captives", value: "10,000+" },
    { label: "Captive client retention", value: "97%" },
    { label: "Avg. reduction in market premiums", value: "20% - 35%" },
  ]

  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-2 md:space-y-3">
              <div className="text-3xl md:text-4xl font-heading text-primary-foreground">{metric.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/80">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
