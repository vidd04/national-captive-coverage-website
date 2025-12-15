export function KeyMetrics() {
  const metrics = [
    { label: "Captive Programs Established", value: "2,400+" },
    { label: "Cumulative Retained Premium", value: "$8.2B" },
    { label: "Average Program ROI", value: "22-28%" },
    { label: "Client Retention", value: "94%" },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-foreground/2 border-y border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="border-r border-border pr-8 last:border-r-0 last:pr-0">
              <div className="text-xs text-foreground/50 uppercase tracking-widest mb-3">{metric.label}</div>
              <div className="text-3xl text-foreground">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
