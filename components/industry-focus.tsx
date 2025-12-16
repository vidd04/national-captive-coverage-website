export function IndustryFocus() {
  const industries = [
    {
      name: "Manufacturing",
      image: "/industries/Manufacturing.png",
    },
    {
      name: "Distribution & Warehousing",
      image: "/industries/Warehousing-Distribution.png",
    },
    {
      name: "Construction & Specialty Contractors",
      image: "/industries/Construction-Contractors.png",
    },
    {
      name: "Transportation & Logistics",
      image: "/industries/Transportation-Logistics.png",
    },
    {
      name: "Retail & Wholesale",
      image: "/industries/Retail-Wholesale.png",
    },
    {
      name: "Food & Beverage",
      image: "/industries/Food-Beverage.png",
    },
    {
      name: "Agribusiness",
      image: "/industries/Agribusiness.png",
    },
    {
      name: "Energy & Energy Services",
      image: "/industries/Energy-Services.png",
    },
    {
      name: "Healthcare & Medical Malpractice",
      image: "/industries/Healthcare-Medical-Malpractice.png",
    },
    {
      name: "Real Estate & Property Management",
      image: "/industries/Real-Estate.png",
    },
    {
      name: "Professional Services",
      image: "/industries/Professional-Services.png",
    },
  ]

  return (
    <section id="industries" className="px-6 py-20 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">Industry Expertise</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl">
          We specialize in designing captive solutions tailored to the unique risk profiles of specific industries.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${industry.image})`,
                }}
              />

              {/* Industry Name - Bottom Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-blue-900/90 px-4 py-3">
                <h3 className="font-heading text-sm sm:text-base lg:text-sm text-white font-medium leading-tight">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}

          {/* Fallback industry card */}
          <div className="relative aspect-square rounded-lg bg-blue-900 text-white p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-base lg:text-sm font-medium mb-3 leading-tight">
                Don't see your industry?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                We can still help you evaluate whether a captive is the right fit for your business.
              </p>
            </div>
            <div className="mt-4">
              <button className="px-5 py-2 bg-white text-blue-900 text-sm font-medium hover:opacity-90 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
