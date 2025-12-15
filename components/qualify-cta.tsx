export function QualifyCTA() {
  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8 bg-primary">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Question */}
          <div className="flex items-center justify-center h-full">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white">
              Why are you still paying for Commercial Insurance in 2026?
            </h2>
          </div>

          {/* Right side - CTA */}
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-white text-lg mb-3">
              See If You Qualify for a Captive
            </p>
            <button className="px-8 py-3 bg-white text-blue-900 text-sm font-medium hover:opacity-90 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
