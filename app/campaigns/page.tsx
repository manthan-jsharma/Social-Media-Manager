import { DashboardShell } from "@/components/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard-header";
import { CampaignsList } from "@/components/campaigns-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function CampaignsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Campaigns"
        text="Create and manage your social media campaigns."
      >
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </DashboardHeader>
      <CampaignsList />
    </DashboardShell>
  );
}
