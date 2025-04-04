"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpDown } from "lucide-react";

type Post = {
  id: string;
  title: string;
  platform: string;
  date: string;
  impressions: number;
  engagement: number;
  clicks: number;
  shares: number;
};

const data: Post[] = [
  {
    id: "1",
    title: "New Product Announcement",
    platform: "Instagram",
    date: "Apr 10, 2023",
    impressions: 12500,
    engagement: 1250,
    clicks: 450,
    shares: 120,
  },
  {
    id: "2",
    title: "Customer Testimonial",
    platform: "Facebook",
    date: "Apr 8, 2023",
    impressions: 8700,
    engagement: 950,
    clicks: 320,
    shares: 85,
  },
  {
    id: "3",
    title: "Industry News Update",
    platform: "Twitter",
    date: "Apr 5, 2023",
    impressions: 5200,
    engagement: 480,
    clicks: 210,
    shares: 95,
  },
  {
    id: "4",
    title: "Behind the Scenes",
    platform: "Instagram",
    date: "Apr 3, 2023",
    impressions: 15800,
    engagement: 1820,
    clicks: 520,
    shares: 230,
  },
  {
    id: "5",
    title: "Product Tutorial",
    platform: "YouTube",
    date: "Apr 1, 2023",
    impressions: 7300,
    engagement: 850,
    clicks: 380,
    shares: 65,
  },
];

export function AnalyticsTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Post>[] = [
    {
      accessorKey: "title",
      header: "Post Title",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "platform",
      header: "Platform",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "impressions",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Impressions
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-right">
          {(row.getValue("impressions") as number).toLocaleString()}
        </div>
      ),
    },
    {
      accessorKey: "engagement",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Engagement
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-right">
          {(row.getValue("engagement") as number).toLocaleString()}
        </div>
      ),
    },
    {
      accessorKey: "clicks",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Clicks
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-right">
          {(row.getValue("clicks") as number).toLocaleString()}
        </div>
      ),
    },
    {
      accessorKey: "shares",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Shares
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-right">
          {(row.getValue("shares") as number).toLocaleString()}
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Top Performing Posts</CardTitle>
        <CardDescription>
          Detailed analytics for your best performing content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
