
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ImpactSection() {
  return (
    <section id="impact" className="py-12 sm:py-20 md:py-32">
      <div className="container max-w-screen-xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Real Impact
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Your savings create lasting change
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-8 text-muted-foreground text-pretty">
            Every dollar you save contributes to meaningful projects in your community. Track your impact transparently
            through blockchain technology.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-16 max-w-4xl">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-xl sm:text-2xl text-balance">
                Your $10 saved can support school meals or healthcare for a child
              </CardTitle>
              <CardDescription className="text-base mt-4">
                All donations are tracked on-chain using IPFS, ensuring complete transparency and accountability for
                every contribution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
