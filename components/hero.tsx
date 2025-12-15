import Image from "next/image"

export function Hero() {
  return (
    <section className="px-4 pt-24 pb-32 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-heading font-light text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Stop Buying Insurance. Own it
            </h1>
            <p className="text-base text-foreground/70 leading-relaxed mb-8 max-w-2xl">
              Tired of your premiums funding other companies that can't manage their risk? We help the Best American Businesses paying over $150K in aggregate annual premium move past the volatile off-the-shelf insurance market and into group captive insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-85 transition">
                Request Feasibility Study
              </button>
              <button className="px-8 py-3 border border-foreground text-foreground text-sm hover:bg-foreground/5 transition">
                Download Overview
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <Image
              src="/u2828374554_a_3D_geometric_blue_professional_artistic_shape_i_df34a921-c858-4785-8ccd-afb7819b5d58_0-removebg-preview-Picsart-AiImageEnhancer.png"
              alt="Decorative geometric shape"
              width={1200}
              height={1200}
              className="w-full h-full max-h-full max-w-sm object-contain"
              style={{ filter: 'drop-shadow(0 0 30px rgba(147, 197, 253, 0.6)) drop-shadow(0 0 60px rgba(147, 197, 253, 0.3))' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
