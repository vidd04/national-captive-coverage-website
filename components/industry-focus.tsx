export function IndustryFocus() {
  const industries = [
    {
      name: "Manufacturing & Industrial",
      image: "/placeholder.jpg", // Replace with actual industry images
    },
    {
      name: "Transportation & Logistics",
      image: "/placeholder.jpg",
    },
    {
      name: "Healthcare & Medical",
      image: "/placeholder.jpg",
    },
    {
      name: "Real Estate & Property Management",
      image: "/placeholder.jpg",
    },
    {
      name: "Technology & Professional Services",
      image: "/placeholder.jpg",
    },
    {
      name: "Financial Services",
      image: "/placeholder.jpg",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl text-foreground mb-4">Industry Expertise</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl">
          We specialize in designing captive solutions tailored to the unique risk profiles of specific industries.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image with Blur and Dim */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${industry.image})`,
                  filter: "blur(4px) brightness(0.5)",
                  transform: "scale(1.1)",
                }}
              />
              
              {/* Overlay for additional dimming */}
              <div className="absolute inset-0 bg-foreground/40" />
              
              {/* Industry Name - Bottom Right */}
              <div className="absolute bottom-0 right-0 p-6">
                <h3 className="font-heading text-lg lg:text-xl text-white font-medium">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
