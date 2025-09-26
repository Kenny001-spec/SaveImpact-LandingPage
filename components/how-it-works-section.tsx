
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    step: "01",
    icon: "🔗",
    title: "Connect Wallet",
    description: "Link your Celo wallet and deposit cUSD to get started with your savings journey.",
  },
  {
    step: "02",
    icon: "💰",
    title: "Auto-invest in DeFi",
    description: "Your funds are automatically invested in safe, audited DeFi pools to earn competitive yields.",
  },
  {
    step: "03",
    icon: "📈",
    title: "Earn, Save & Impact",
    description:
      "Watch your savings grow while supporting community projects. Track everything transparently on-chain.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-20 md:py-32 bg-muted/30">
      <div className="container max-w-screen-xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            How SaveImpact Works
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-8 text-muted-foreground text-pretty">
            Get started in three simple steps and begin your journey toward financial freedom and community impact.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:w-1/3">
            
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-primary-foreground">{step.step}</span>
                </div>
              </div>
       
              <Card className="w-full shadow-md">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base sm:text-lg text-muted-foreground text-center">{step.description}</CardDescription>
                </CardContent>
              </Card>
        
              {index < steps.length - 1 && (
                <div className="hidden md:block w-full h-0.5 bg-primary/30 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
