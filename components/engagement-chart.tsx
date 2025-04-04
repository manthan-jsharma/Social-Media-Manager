"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart";

export function EngagementChart() {
  // Sample data
  const weeklyData = [
    { name: "Mon", Instagram: 4000, Twitter: 2400, Facebook: 2400 },
    { name: "Tue", Instagram: 3000, Twitter: 1398, Facebook: 2210 },
    { name: "Wed", Instagram: 2000, Twitter: 9800, Facebook: 2290 },
    { name: "Thu", Instagram: 2780, Twitter: 3908, Facebook: 2000 },
    { name: "Fri", Instagram: 1890, Twitter: 4800, Facebook: 2181 },
    { name: "Sat", Instagram: 2390, Twitter: 3800, Facebook: 2500 },
    { name: "Sun", Instagram: 3490, Twitter: 4300, Facebook: 2100 },
  ];

  const monthlyData = [
    { name: "Jan", Instagram: 4000, Twitter: 2400, Facebook: 2400 },
    { name: "Feb", Instagram: 3000, Twitter: 1398, Facebook: 2210 },
    { name: "Mar", Instagram: 2000, Twitter: 9800, Facebook: 2290 },
    { name: "Apr", Instagram: 2780, Twitter: 3908, Facebook: 2000 },
    { name: "May", Instagram: 1890, Twitter: 4800, Facebook: 2181 },
    { name: "Jun", Instagram: 2390, Twitter: 3800, Facebook: 2500 },
    { name: "Jul", Instagram: 3490, Twitter: 4300, Facebook: 2100 },
    { name: "Aug", Instagram: 3490, Twitter: 4300, Facebook: 2100 },
    { name: "Sep", Instagram: 3490, Twitter: 4300, Facebook: 2100 },
    { name: "Oct", Instagram: 3490, Twitter: 4300, Facebook: 2100 },
    { name: "Nov", Instagram: 3490, Twitter: 4300, Facebook: 2100 },
    { name: "Dec", Instagram: 3490, Twitter: 4300, Facebook: 2100 },
  ];

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Engagement Overview</CardTitle>
        <CardDescription>
          Track engagement across your social media platforms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="weekly" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Instagram"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="Twitter"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="Facebook"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="monthly" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlyData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Instagram"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="Twitter"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="Facebook"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
