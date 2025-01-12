'use client'

import Link from 'next/link'
import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="BasicBox"
            width={100}
            height={50}
            className="h-[50px] w-[100px]"
          />
          <span className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] to-[#60efff]">BasicBox</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-[#00ff87]"
          >
            Features
          </Link>
          <Link
            href="#services"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-[#00ff87]"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-[#00ff87]"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-[#00ff87]"
          >
            Contact
          </Link>
          <Link
            href="#learn-more"
            className="flex items-center text-sm font-medium bg-gradient-to-r from-[#00ff87] to-[#60efff] text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            Learn More
          </Link>
        </nav>
      </div>
    </header>
  )
}

