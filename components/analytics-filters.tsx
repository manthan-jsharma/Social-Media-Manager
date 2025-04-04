"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function AnalyticsFilters() {
  const [date, setDate] = useState<{
    from: Date;
    to: Date;
  }>({
    from: new Date(2023, 3, 1),
    to: new Date(2023, 3, 30),
  });

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className="w-full sm:w-[300px] justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate) => setDate(newDate as { from: Date; to: Date })}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <Select defaultValue="all">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Platforms</SelectItem>
          <SelectItem value="instagram">Instagram</SelectItem>
          <SelectItem value="twitter">Twitter</SelectItem>
          <SelectItem value="facebook">Facebook</SelectItem>
          <SelectItem value="youtube">YouTube</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="engagement">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Metric" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="engagement">Engagement</SelectItem>
          <SelectItem value="impressions">Impressions</SelectItem>
          <SelectItem value="followers">Followers</SelectItem>
          <SelectItem value="clicks">Clicks</SelectItem>
          <SelectItem value="conversions">Conversions</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-full sm:w-auto">Apply Filters</Button>
    </div>
  );
}
