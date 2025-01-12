'use client'

import { useEffect, useState } from 'react'
import { Users, Download, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    icon: Users,
    value: '100K+',
    label: 'Active Users',
    startValue: 0,
    endValue: 100,
    suffix: 'K+',
    color: '#B4FF4A',
  },
  {
    icon: Download,
    value: '500K+',
    label: 'Downloads',
    startValue: 0,
    endValue: 500,
    suffix: 'K+',
    color: '#2BFF88',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Average Rating',
    startValue: 0,
    endValue: 4.9,
    suffix: '',
    color: '#B4FF4A',
  },
] as const

export function StatsSection(): JSX.Element {
  const [animated, setAnimated] = useState<boolean>(false)
  const [counts, setCounts] = useState<number[]>(stats.map(stat => stat.startValue))

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        setAnimated(true)
        stats.forEach((stat, index) => {
          const duration = 2000 // Animation duration in milliseconds
          const steps = 60 // Number of steps in the animation
          const stepValue = (stat.endValue - stat.startValue) / steps
          let currentStep = 0

          const interval = setInterval(() => {
            if (currentStep < steps) {
              setCounts(prevCounts => {
                const newCounts = [...prevCounts]
                newCounts[index] = stat.startValue + stepValue * currentStep
                return newCounts
              })
              currentStep++
            } else {
              clearInterval(interval)
              setCounts(prevCounts => {
                const newCounts = [...prevCounts]
                newCounts[index] = stat.endValue
                return newCounts
              })
            }
          }, duration / steps)
        })
      }
    })

    const element = document.getElementById('stats')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [animated])

  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,255,74,0.08),transparent_50%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={animated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  {/* Animated background circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B4FF4A]/5 to-[#2BFF88]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon container with animations */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B4FF4A]/20 to-[#2BFF88]/20 rounded-full blur-xl scale-150 animate-pulse" />
                    <div className="relative bg-gradient-to-br from-[#B4FF4A]/10 to-[#2BFF88]/10 rounded-full p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
                    </div>
                  </div>

                  {/* Stat value with gradient and animation */}
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={animated ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B4FF4A] to-[#2BFF88]">
                        {counts[index].toFixed(stat.suffix === '' ? 1 : 0)}
                        {stat.suffix}
                      </span>
                    </motion.div>
                  </div>

                  {/* Label with hover effect */}
                  <p className="mt-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#B4FF4A]/0 via-[#B4FF4A]/50 to-[#B4FF4A]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

