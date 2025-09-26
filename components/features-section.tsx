
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [

  {
    icon: "🐷",
    title: "Save with Ease",
    description:
      "Start with as little as $1. Our microsavings approach makes financial growth accessible to everyone, regardless of income level.",
  },
  {
    icon: "📈",
    title: "Grow Your Funds",
    description:
      "Automated DeFi investments in safe Celo pools. Earn competitive interest while your savings work for you in the background.",
  },
  {
    icon: "❤️",
    title: "Support Your Community",
    description:
      "Track your social impact donations transparently on-chain. See exactly how your contributions support education and healthcare.",
  },
  {
    icon: "🏆",
    title: "Build Your Reputation",
    description:
      "Earn trust and rewards through consistent saving and giving. Our reputation system recognizes your positive financial habits.",
  },
]


export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-20 md:py-32">
      <div className="container max-w-screen-xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Everything you need to save and impact
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-8 text-muted-foreground text-pretty">
            Our platform combines the best of traditional savings with modern DeFi technology and social impact
            tracking.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
