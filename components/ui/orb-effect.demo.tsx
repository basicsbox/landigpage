import { OrbEffect } from "@/components/ui/orb-effect"

export function OrbEffectDemo() {
  return (
    <div className="relative h-[600px] max-w-[800px] w-full bg-background rounded-lg overflow-hidden flex flex-col">
      {/* Content */}
      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-semibold text-foreground/80">
          Interactive Orb Effect
        </h3>
        <p className="text-muted-foreground mt-2">
          Hover around to see the dynamic glow effect
        </p>
      </div>

      {/* Centered Orb */}
      <div className="absolute inset-0 top-[400px]">
        <OrbEffect />
      </div>
    </div>
  )
} 