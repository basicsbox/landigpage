"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface OrbEffectProps {
  className?: string
}

export function OrbEffect({ className }: OrbEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    // Initialize canvas size
    setCanvasSize()

    // Handle window resize
    window.addEventListener("resize", setCanvasSize)

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Animation variables
    let animationFrameId: number
    const orbs: Array<{
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }> = []

    // Create initial orbs
    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2 + 1
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: `rgba(180, 255, 74, ${Math.random() * 0.5})`,
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw orbs
      orbs.forEach((orb) => {
        // Move orbs
        orb.x += orb.velocity.x
        orb.y += orb.velocity.y

        // Bounce off walls
        if (orb.x < 0 || orb.x > canvas.width) orb.velocity.x *= -1
        if (orb.y < 0 || orb.y > canvas.height) orb.velocity.y *= -1

        // Draw orb
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = orb.color
        ctx.fill()

        // Mouse interaction
        const dx = mousePosition.current.x - orb.x
        const dy = mousePosition.current.y - orb.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          ctx.beginPath()
          ctx.strokeStyle = orb.color
          ctx.lineWidth = 0.5
          ctx.moveTo(orb.x, orb.y)
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y)
          ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none" }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background to-background" />
    </div>
  )
} 