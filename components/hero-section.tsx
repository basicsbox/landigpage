'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,135,0.15),transparent_50%)]" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-3xl font-bold tracking-tighter leading-tight sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] via-[#2fffa0] to-[#60efff] pb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your Neighborhood Services,{' '}
                <span className="inline-block">Now at Your Fingertips</span>
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                From quick prints to fresh meals, get everything delivered in minutes. Join thousands of satisfied customers in making daily tasks effortless.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="#" className="hover:opacity-90 transition-opacity w-fit">
                <Image
                  src="/images/playstore-badge.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={200}
                  className="h-[200px] w-[200px]"
                  priority
                />
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square">
              <Image
                alt="App Mockup"
                className="object-contain"
                fill
                priority
                src="/images/app-mockup.png"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 