import Image from "next/image"

export function Hero() {
  return (
    <section className="px-6 pt-12 pb-40 sm:pb-44 lg:pb-48 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-white relative">
      <div className="mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              loading="eager"
            />
          </div>
        </div>
      </div>
      {/* Divider Image */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-16 sm:h-20 lg:h-24 flex">
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/captive-page/hero-background.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: 'center right' }}
            loading="lazy"
          />
        </div>
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/captive-page/hero-background.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: 'center left', transform: 'scaleX(-1)' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
