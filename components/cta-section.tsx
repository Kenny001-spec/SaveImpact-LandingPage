import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to start your impact journey?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Join early adopters shaping financial freedom with SaveImpact. Start saving today and make a difference in
            your community.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="flex items-center space-x-2">
              <span>💰</span>
              <span>Start Saving Now</span>
            </Button>
            
            <Button variant="outline" size="lg" className="flex items-center space-x-2 bg-transparent">
              <span>Learn More</span>
              <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
