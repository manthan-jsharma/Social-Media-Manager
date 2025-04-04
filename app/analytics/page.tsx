import { DashboardShell } from "@/components/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard-header";
import { AnalyticsFilters } from "@/components/analytics-filters";
import { AnalyticsCharts } from "@/components/analytics-charts";
import { AnalyticsTable } from "@/components/analytics-table";

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Analytics"
        text="View detailed analytics for your social media accounts."
      />
      <AnalyticsFilters />
      <AnalyticsCharts />
      <AnalyticsTable />
    </DashboardShell>
  );
}
