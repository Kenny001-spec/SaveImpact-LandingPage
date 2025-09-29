import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  // Example/mock data (replace with real data from contracts/backend)
  const user = {
    name: "Kenny",
    avatar: "/avatar.png",
    reputation: 87,
    totalSaved: 120.5,
    interestEarned: 8.2,
    donated: 2.5,
    goal: 200,
    group: "Community Savers",
    rewards: 15,
  }

  const impactProjects = [
    { name: "School Meals", donated: 1.2, status: "Active" },
    { name: "Healthcare Support", donated: 0.8, status: "Completed" },
  ]

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-muted/10">
      <div className="container max-w-screen-xl px-4">
        {/* Top: User Profile & Quick Stats */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img src={user.avatar} alt="User Avatar" className="h-16 w-16 rounded-full border-2 border-primary" />
            <div>
              <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">Reputation: {user.reputation}</Badge>
                <Badge variant="secondary">Group: {user.group}</Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm">Deposit</Button>
            <Button size="sm" variant="outline">Withdraw</Button>
            <Button size="sm" variant="outline">Settings</Button>
          </div>
        </div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Total Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">${user.totalSaved}</p>
              <CardDescription>Goal: ${user.goal}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interest Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">${user.interestEarned}</p>
              <CardDescription>Donated: ${user.donated}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{user.rewards} tokens</p>
              <CardDescription>Earned for saving & donating</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Consistent Saver</Badge>
                <Badge variant="secondary">Top Donor</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics & Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Savings Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
                {/* Replace with chart library or SVG */}
                [Savings Chart]
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Donation Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
                [Impact Chart]
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Projects */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4 text-foreground">Your Impact Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {impactProjects.map((project, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary">${project.donated} donated</p>
                  <CardDescription>Status: {project.status}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community & Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <Button size="lg" className="w-full md:w-auto">Join Group Savings</Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto">View Impact Reports</Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto">Vote on Projects</Button>
        </div>
      </div>
    </section>
  )
}