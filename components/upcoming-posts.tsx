import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function UpcomingPosts() {
  const posts = [
    {
      id: 1,
      title: "Product Launch Announcement",
      date: "Tomorrow, 10:00 AM",
      platform: "Instagram",
      status: "Scheduled",
      icon: <Instagram className="h-4 w-4 text-pink-500" />,
    },
    {
      id: 2,
      title: "Weekly Promotion",
      date: "Apr 15, 2:00 PM",
      platform: "Facebook",
      status: "Draft",
      icon: <Facebook className="h-4 w-4 text-blue-600" />,
    },
    {
      id: 3,
      title: "Customer Testimonial",
      date: "Apr 16, 11:30 AM",
      platform: "Twitter",
      status: "Scheduled",
      icon: <Twitter className="h-4 w-4 text-blue-400" />,
    },
    {
      id: 4,
      title: "Industry News Update",
      date: "Apr 17, 9:00 AM",
      platform: "All Platforms",
      status: "Draft",
      icon: null,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Posts</CardTitle>
        <CardDescription>
          Scheduled and draft posts for your accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none flex items-center">
                  {post.title}
                  {post.icon && <span className="ml-2">{post.icon}</span>}
                </p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
              <Badge
                variant={post.status === "Scheduled" ? "default" : "outline"}
              >
                {post.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
