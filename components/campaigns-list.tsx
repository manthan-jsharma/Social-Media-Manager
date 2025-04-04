import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  Calendar,
  Edit,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CampaignsList() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale 2023",
      description: "Promotion for summer products with 20% discount",
      status: "Active",
      progress: 65,
      startDate: "Apr 1, 2023",
      endDate: "Apr 30, 2023",
      platforms: ["Instagram", "Facebook", "Twitter"],
      budget: "$1,200",
      spent: "$780",
    },
    {
      id: 2,
      name: "Product Launch: XYZ",
      description: "New product line introduction campaign",
      status: "Scheduled",
      progress: 0,
      startDate: "May 15, 2023",
      endDate: "Jun 15, 2023",
      platforms: ["Instagram", "YouTube"],
      budget: "$2,500",
      spent: "$0",
    },
    {
      id: 3,
      name: "Brand Awareness Q2",
      description: "Increasing brand visibility across platforms",
      status: "Active",
      progress: 32,
      startDate: "Apr 1, 2023",
      endDate: "Jun 30, 2023",
      platforms: ["Facebook", "Twitter", "LinkedIn"],
      budget: "$3,000",
      spent: "$960",
    },
    {
      id: 4,
      name: "Holiday Special",
      description: "End of year holiday promotion campaign",
      status: "Draft",
      progress: 0,
      startDate: "Dec 1, 2023",
      endDate: "Dec 31, 2023",
      platforms: ["All Platforms"],
      budget: "$5,000",
      spent: "$0",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {campaigns.map((campaign) => (
        <Card key={campaign.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-lg font-bold">
                {campaign.name}
              </CardTitle>
              <CardDescription>{campaign.description}</CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Campaign
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Posts
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Campaign
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <Badge
                variant={
                  campaign.status === "Active"
                    ? "default"
                    : campaign.status === "Scheduled"
                    ? "outline"
                    : "secondary"
                }
              >
                {campaign.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {campaign.progress}% Complete
              </span>
            </div>
            <Progress value={campaign.progress} className="h-2" />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm font-medium">Date Range</p>
                <p className="text-sm text-muted-foreground">
                  {campaign.startDate} - {campaign.endDate}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Platforms</p>
                <p className="text-sm text-muted-foreground">
                  {campaign.platforms.join(", ")}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Budget</p>
              <p className="text-sm text-muted-foreground">
                {campaign.spent} / {campaign.budget}
              </p>
            </div>
            <Button size="sm">Manage</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
