import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  MoreHorizontal,
  RefreshCw,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AccountsList() {
  const accounts = [
    {
      id: 1,
      name: "@yourbrand",
      platform: "Instagram",
      followers: "32.4K",
      engagement: "3.2%",
      status: "Active",
      lastSync: "2 hours ago",
      icon: <Instagram className="h-4 w-4 text-pink-500" />,
      color: "bg-pink-500",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "@yourbrand",
      platform: "Twitter",
      followers: "12.8K",
      engagement: "1.8%",
      status: "Active",
      lastSync: "1 hour ago",
      icon: <Twitter className="h-4 w-4 text-blue-400" />,
      color: "bg-blue-400",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Your Brand",
      platform: "Facebook",
      followers: "45.2K",
      engagement: "2.5%",
      status: "Active",
      lastSync: "30 minutes ago",
      icon: <Facebook className="h-4 w-4 text-blue-600" />,
      color: "bg-blue-600",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Your Brand",
      platform: "YouTube",
      followers: "8.6K",
      engagement: "4.7%",
      status: "Active",
      lastSync: "3 hours ago",
      icon: <Youtube className="h-4 w-4 text-red-500" />,
      color: "bg-red-500",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {accounts.map((account) => (
        <Card key={account.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src={account.avatar} alt={account.name} />
                <AvatarFallback className={account.color}>
                  {account.platform[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm font-medium">
                  {account.name}
                </CardTitle>
                <CardDescription className="flex items-center">
                  {account.platform} {account.icon}
                </CardDescription>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>View Analytics</DropdownMenuItem>
                <DropdownMenuItem>Edit Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  Disconnect
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <p className="text-sm font-medium">Followers</p>
                <p className="text-2xl font-bold">{account.followers}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Engagement</p>
                <p className="text-2xl font-bold">{account.engagement}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Last synced: {account.lastSync}
            </p>
            <Button variant="ghost" size="sm" className="gap-1">
              <RefreshCw className="h-3.5 w-3.5" />
              Sync
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
