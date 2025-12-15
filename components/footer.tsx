import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <Image src="/u2828374554_a_3D_geometric_blue_professional_artistic_shape_i_df34a921-c858-4785-8ccd-afb7819b5d58_0-removebg-preview-Picsart-AiImageEnhancer.png" alt="National Captive Insurance logo" width={48} height={48} className="h-9 w-auto" />
              <h3 className="font-logo text-foreground text-lg">National Captive Insurance</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Professional captive insurance solutions for organizational stability and control.
            </p>
          </div>
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
                <a href="#" className="hover:text-primary transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2025 National Captive Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
