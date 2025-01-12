'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] to-[#60efff]">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience seamless local services with our comprehensive platform
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <Card className="relative overflow-hidden border-2 hover:border-[#00ff87] transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-[#00ff87]/10 p-2">
                  <Image
                    src="/images/print-icon.svg"
                    alt="Print Services"
                    width={24}
                    height={24}
                    className="h-6 w-6 text-[#00ff87]"
                  />
                </div>
                <CardTitle className="text-[#00ff87]">Print Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mt-2 text-base">
                Transform your printing needs with instant connectivity to local shops. Upload documents, specify requirements, and receive high-quality prints without leaving your home. Professional printing made simple.
              </CardDescription>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00ff87]" /> Multiple document types supported
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00ff87]" /> Competitive pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00ff87]" /> Doorstep delivery
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-2 hover:border-[#00ff87] transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-[#00ff87]/10 p-2">
                  <Image
                    src="/images/food-icon.svg"
                    alt="Food Delivery"
                    width={24}
                    height={24}
                    className="h-6 w-6 text-[#00ff87]"
                  />
                </div>
                <CardTitle className="text-[#00ff87]">Food Delivery</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mt-2 text-base">
                Savor local flavors with our seamless food delivery service. Real-time tracking, secure payments, and direct connection with your favorite restaurants ensure your food arrives fresh and delicious.
              </CardDescription>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00ff87]" /> Wide restaurant selection
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00ff87]" /> Real-time order tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00ff87]" /> Secure payment options
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

