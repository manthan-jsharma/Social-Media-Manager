import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function AccountsOverview() {
  const accounts = [
    {
      name: "@yourbrand",
      platform: "Instagram",
      followers: "32.4K",
      engagement: "3.2%",
      icon: <Instagram className="h-4 w-4 text-pink-500" />,
      color: "bg-pink-500",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "@yourbrand",
      platform: "Twitter",
      followers: "12.8K",
      engagement: "1.8%",
      icon: <Twitter className="h-4 w-4 text-blue-400" />,
      color: "bg-blue-400",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Your Brand",
      platform: "Facebook",
      followers: "45.2K",
      engagement: "2.5%",
      icon: <Facebook className="h-4 w-4 text-blue-600" />,
      color: "bg-blue-600",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Your Brand",
      platform: "YouTube",
      followers: "8.6K",
      engagement: "4.7%",
      icon: <Youtube className="h-4 w-4 text-red-500" />,
      color: "bg-red-500",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Connected Accounts</CardTitle>
        <CardDescription>
          Performance overview of your social media accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div
              key={account.platform}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={account.avatar} alt={account.name} />
                  <AvatarFallback className={account.color}>
                    {account.platform[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-none">
                      {account.name}
                    </p>
                    {account.icon}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {account.followers} followers
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="ml-auto">
                {account.engagement} Engagement
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
