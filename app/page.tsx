'use client'

import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { ServiceShowcase } from '@/components/service-showcase'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ServiceShowcase />
      </main>
      <SiteFooter />
    </div>
  )
}

