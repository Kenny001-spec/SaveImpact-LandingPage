import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  // Example data (replace with real data from backend/smart contracts)
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
  };

  const impactProjects = [
    { name: "School Meals", donated: 1.2, status: "Active" },
    { name: "Healthcare Support", donated: 0.8, status: "Completed" },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-muted/10">
      <div className="container max-w-screen-xl px-4">
        {/* User Overview */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="h-20 w-20 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
            <Badge variant="secondary" className="mt-2">
              Reputation: {user.reputation}
            </Badge>
            <div className="mt-4 flex gap-2">
              <Button size="sm">Deposit</Button>
              <Button size="sm" variant="outline">
                Withdraw
              </Button>
            </div>
          </div>
          {/* Savings & Rewards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle>Total Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">
                  ${user.totalSaved}
                </p>
                <CardDescription>Goal: ${user.goal}</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Interest Earned</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-accent">
                  ${user.interestEarned}
                </p>
                <CardDescription>Donated: ${user.donated}</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Group Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{user.group}</p>
                <CardDescription>
                  Rewards: {user.rewards} tokens
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reputation & Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="default">Consistent Saver</Badge>
                <Badge variant="secondary" className="ml-2">
                  Top Donor
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Tracking */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Your Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {impactProjects.map((project, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary">
                    ${project.donated} donated
                  </p>
                  <CardDescription>Status: {project.status}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Analytics & Reports */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-foreground">Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Savings Growth</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Replace with chart library or SVG */}
                <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
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
        </div>

        {/* Community & Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <Button size="lg" className="w-full md:w-auto">
            Join Group Savings
          </Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto">
            View Impact Reports
          </Button>
          <Button size="lg" variant="default" className="w-full md:w-auto">
            Vote on Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
