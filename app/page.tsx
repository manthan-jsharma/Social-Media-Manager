import { DashboardShell } from "@/components/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard-header";
import { OverviewStats } from "@/components/overview-stats";
import { RecentActivity } from "@/components/recent-activity";
import { EngagementChart } from "@/components/engagement-chart";
import { AccountsOverview } from "@/components/accounts-overview";
import { UpcomingPosts } from "@/components/upcoming-posts";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Manage your social media accounts and view analytics."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <EngagementChart />
        </div>
        <div className="col-span-3">
          <AccountsOverview />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <RecentActivity />
        <UpcomingPosts />
      </div>
    </DashboardShell>
  );
}
