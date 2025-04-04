import { DashboardShell } from "@/components/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard-header";
import { AccountsList } from "@/components/accounts-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AccountsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Social Media Accounts"
        text="Connect and manage your social media accounts."
      >
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Account
        </Button>
      </DashboardHeader>
      <AccountsList />
    </DashboardShell>
  );
}
