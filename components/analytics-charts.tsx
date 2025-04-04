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
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "@/components/ui/chart";

export function AnalyticsCharts() {
  // Sample data
  const engagementData = [
    {
      name: "Jan",
      Instagram: 4000,
      Twitter: 2400,
      Facebook: 2400,
      YouTube: 1200,
    },
    {
      name: "Feb",
      Instagram: 3000,
      Twitter: 1398,
      Facebook: 2210,
      YouTube: 1300,
    },
    {
      name: "Mar",
      Instagram: 2000,
      Twitter: 9800,
      Facebook: 2290,
      YouTube: 1400,
    },
    {
      name: "Apr",
      Instagram: 2780,
      Twitter: 3908,
      Facebook: 2000,
      YouTube: 1500,
    },
    {
      name: "May",
      Instagram: 1890,
      Twitter: 4800,
      Facebook: 2181,
      YouTube: 1200,
    },
    {
      name: "Jun",
      Instagram: 2390,
      Twitter: 3800,
      Facebook: 2500,
      YouTube: 1700,
    },
    {
      name: "Jul",
      Instagram: 3490,
      Twitter: 4300,
      Facebook: 2100,
      YouTube: 1900,
    },
  ];

  const followerGrowthData = [
    {
      name: "Jan",
      Instagram: 32000,
      Twitter: 12000,
      Facebook: 42000,
      YouTube: 8000,
    },
    {
      name: "Feb",
      Instagram: 32500,
      Twitter: 12200,
      Facebook: 42500,
      YouTube: 8100,
    },
    {
      name: "Mar",
      Instagram: 33000,
      Twitter: 12400,
      Facebook: 43000,
      YouTube: 8200,
    },
    {
      name: "Apr",
      Instagram: 33800,
      Twitter: 12600,
      Facebook: 43800,
      YouTube: 8300,
    },
    {
      name: "May",
      Instagram: 34200,
      Twitter: 12700,
      Facebook: 44200,
      YouTube: 8400,
    },
    {
      name: "Jun",
      Instagram: 34800,
      Twitter: 12800,
      Facebook: 44800,
      YouTube: 8500,
    },
    {
      name: "Jul",
      Instagram: 35400,
      Twitter: 12900,
      Facebook: 45200,
      YouTube: 8600,
    },
  ];

  const audienceData = [
    { name: "18-24", value: 35 },
    { name: "25-34", value: 40 },
    { name: "35-44", value: 15 },
    { name: "45-54", value: 7 },
    { name: "55+", value: 3 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Engagement Overview</CardTitle>
          <CardDescription>
            Track engagement metrics across all platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="line">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="line">Line</TabsTrigger>
                <TabsTrigger value="bar">Bar</TabsTrigger>
                <TabsTrigger value="area">Area</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="line" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={engagementData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Instagram"
                      stroke="#8884d8"
                    />
                    <Line type="monotone" dataKey="Twitter" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Facebook" stroke="#ffc658" />
                    <Line type="monotone" dataKey="YouTube" stroke="#ff8042" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="bar" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={engagementData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Instagram" fill="#8884d8" />
                    <Bar dataKey="Twitter" fill="#82ca9d" />
                    <Bar dataKey="Facebook" fill="#ffc658" />
                    <Bar dataKey="YouTube" fill="#ff8042" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="area" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={engagementData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
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
                    <Area
                      type="monotone"
                      dataKey="YouTube"
                      stackId="1"
                      stroke="#ff8042"
                      fill="#ff8042"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Follower Growth</CardTitle>
          <CardDescription>Monthly follower growth by platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={followerGrowthData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Instagram" stroke="#8884d8" />
                <Line type="monotone" dataKey="Twitter" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Facebook" stroke="#ffc658" />
                <Line type="monotone" dataKey="YouTube" stroke="#ff8042" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audience Demographics</CardTitle>
          <CardDescription>Age distribution of your audience</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {audienceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
