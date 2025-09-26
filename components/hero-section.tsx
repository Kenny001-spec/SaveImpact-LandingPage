

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 md:py-32">
      <div className="container max-w-screen-xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          
          <Badge variant="secondary" className="mb-6 sm:mb-8 inline-flex items-center space-x-2 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Announcing $20M in Seed & Series A Funding</span>
            <span className="text-xs">→</span>
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
            Save Small. <span className="text-primary">Impact Big.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-8 text-muted-foreground text-pretty">
            Decentralized microsavings that empower you and your community. Save with ease, grow your funds through
            DeFi, and support impact projects transparently on-chain.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button size="lg" className="flex items-center space-x-2 w-full sm:w-auto">
              <span>💰</span>
              <span>Start Saving</span>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-accent/20 opacity-20" />
        </div>
      </div>
    </section>
  )
}