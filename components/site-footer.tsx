import Link from 'next/link'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="BasicBox"
                width={100}
                height={50}
                className="h-[50px] w-[100px]"
              />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] to-[#60efff]">
                BasicBox
              </span>
            </div>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link className="hover:text-[#00ff87]" href="/about">About Us</Link>
              <Link className="hover:text-[#00ff87]" href="/careers">Careers</Link>
              <Link className="hover:text-[#00ff87]" href="/press">Press</Link>
              <Link className="hover:text-[#00ff87]" href="/blog">Blog</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00ff87]">Legal</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link className="hover:text-[#00ff87]" href="/terms">Terms of Service</Link>
              <Link className="hover:text-[#00ff87]" href="/privacy">Privacy Policy</Link>
              <Link className="hover:text-[#00ff87]" href="/cookies">Cookie Policy</Link>
              <Link className="hover:text-[#00ff87]" href="/compliance">Compliance</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00ff87]">Contact</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link className="hover:text-[#00ff87]" href="/support">Support</Link>
              <Link className="hover:text-[#00ff87]" href="/contact">Contact Us</Link>
              <span>basicsbox@outlook.com</span>
              <span>+91 94886 25532</span>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00ff87]">Download App</h3>
            <Link href="#" className="hover:opacity-90 transition-opacity block w-fit">
              <Image
                src="/images/playstore-badge.png"
                alt="Get it on Google Play"
                width={200}
                height={200}
                className="h-[200px] w-[200px]"
              />
            </Link>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/basics_box.in" className="hover:opacity-75">
                <div className="p-2 rounded-full bg-[#00ff87]/10 hover:bg-[#00ff87]/20">
                  <Image
                    src="/images/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
              <Link href="#" className="hover:opacity-75">
                <div className="p-2 rounded-full bg-[#00ff87]/10 hover:bg-[#00ff87]/20">
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
              <Link href="#" className="hover:opacity-75">
                <div className="p-2 rounded-full bg-[#00ff87]/10 hover:bg-[#00ff87]/20">
                  <Image
                    src="/images/youtube.svg"
                    alt="YouTube"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
              <Link href="#" className="hover:opacity-75">
                <div className="p-2 rounded-full bg-[#00ff87]/10 hover:bg-[#00ff87]/20">
                  <Image
                    src="/images/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>© 2024 BasicBox. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Licensed and secured. Trusted by thousands of customers and vendors.
          </p>
        </div>
      </div>
    </footer>
  )
}

