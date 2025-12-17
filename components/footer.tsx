import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Top row: logo on left, link columns on right */}
        <div className="mb-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left: NCI logo block */}
          <div className="flex items-start gap-4">
            <Image
              src="/u2828374554_a_3D_geometric_blue_professional_artistic_shape_i_df34a921-c858-4785-8ccd-afb7819b5d58_0-removebg-preview-Picsart-AiImageEnhancer.png"
              alt="National Captive Insurance logo"
              width={220}
              height={220}
              className="h-20 w-auto md:h-24"
            />
            <div className="leading-tight">
              <span className="block font-logo text-foreground text-xl md:text-2xl">National</span>
              <span className="block font-logo text-foreground text-xl md:text-2xl">Captive</span>
              <span className="block font-logo text-foreground text-xl md:text-2xl">Insurance</span>
            </div>
          </div>

          {/* Right: link columns, closer together */}
          <div className="flex gap-8 md:gap-10 lg:gap-12">
            <div>
            <h4 className="text-foreground mb-4 text-sm">Solutions</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#what-is-captive" className="hover:text-primary transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-primary transition">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="#how-we-help" className="hover:text-primary transition">
                  About
                </Link>
              </li>
            </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-foreground/70 cursor-not-allowed opacity-60">
                  Resources
                </span>
              </li>
              <li>
                <span className="text-foreground/70 cursor-not-allowed opacity-60">
                  News
                </span>
              </li>
            </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <span className="text-foreground/70 cursor-not-allowed opacity-60">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-foreground/70 cursor-not-allowed opacity-60">
                  Terms of Service
                </span>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2026 National Captive Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
