import Image from "next/image"

export function FrontingLogosBanner() {
  const logos = [
    { src: "/Fronting-logos/AIG_new_logo.svg", alt: "AIG" },
    { src: "/Fronting-logos/Arch_Capital_Group_logo.svg.png", alt: "Arch Capital Group" },
    { src: "/Fronting-logos/CHUBB_Logo_Black_RBG.png", alt: "Chubb" },
    { src: "/Fronting-logos/gaig_logo_web_full_color.png", alt: "Great American Insurance Group" },
    { src: "/Fronting-logos/Liberty-Mutual-Logo.png", alt: "Liberty Mutual" },
    { src: "/Fronting-logos/Nationwide-Insurance-Logo.png", alt: "Nationwide Insurance" },
    { src: "/Fronting-logos/PiE-LogosOld-Republic-modified.png", alt: "Old Republic" },
    { src: "/Fronting-logos/The_Hartford_Financial_Services_Group_logo.svg", alt: "The Hartford" },
    { src: "/Fronting-logos/Travelers-logo.png", alt: "Travelers" },
    { src: "/Fronting-logos/Zurich_Insurance_Group_Logo_Horizontal.svg.png", alt: "Zurich Insurance Group" },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-background border-y border-border">
      <div className="mx-auto max-w-6xl">
        {/* Heading and Description */}
        <div className="mb-8">
          <h2 className="font-heading text-4xl text-foreground mb-4">Fronting Carriers</h2>
          <p className="text-foreground/70 leading-relaxed max-w-4xl">
            Your policy utilizes the admitted paper of highly-rated fronting carriers, ensuring it is fully compliant and globally accepted. From a policyholder's perspective, the coverage through your captive looks and functions exactly the same as a policy secured on the open market.
          </p>
        </div>
        
        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-full aspect-square p-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
