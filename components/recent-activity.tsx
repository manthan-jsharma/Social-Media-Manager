import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "like",
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        handle: "@sarahj",
      },
      content: "liked your post",
      time: "2 hours ago",
      platform: "Instagram",
      icon: <Heart className="h-4 w-4 text-red-500" />,
    },
    {
      id: 2,
      type: "comment",
      user: {
        name: "Mike Peters",
        avatar: "/placeholder.svg?height=32&width=32",
        handle: "@mikepeters",
      },
      content: "commented on your post",
      time: "3 hours ago",
      platform: "Facebook",
      icon: <MessageCircle className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 3,
      type: "share",
      user: {
        name: "Lisa Wong",
        avatar: "/placeholder.svg?height=32&width=32",
        handle: "@lisawong",
      },
      content: "shared your post",
      time: "5 hours ago",
      platform: "Twitter",
      icon: <Repeat className="h-4 w-4 text-blue-400" />,
    },
    {
      id: 4,
      type: "like",
      user: {
        name: "John Smith",
        avatar: "/placeholder.svg?height=32&width=32",
        handle: "@johnsmith",
      },
      content: "liked your comment",
      time: "6 hours ago",
      platform: "Instagram",
      icon: <Heart className="h-4 w-4 text-red-500" />,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest interactions across your social media accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={activity.user.avatar}
                  alt={activity.user.name}
                />
                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user.name}{" "}
                  <span className="text-muted-foreground">
                    {activity.user.handle}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground flex items-center">
                  {activity.icon}
                  <span className="ml-1">{activity.content}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time} • {activity.platform}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
