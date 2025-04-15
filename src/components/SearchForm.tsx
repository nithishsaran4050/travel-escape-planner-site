
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Search, MapPin } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg border p-6 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Where are you going?</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input 
              placeholder="Search destinations" 
              className="pl-10"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Check-in</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Check-out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={(date) => 
                  date < (checkIn || new Date()) || 
                  date < new Date()
                }
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Guests</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="2 adults · 0 children" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 adult · 0 children</SelectItem>
              <SelectItem value="2">2 adults · 0 children</SelectItem>
              <SelectItem value="2-1">2 adults · 1 child</SelectItem>
              <SelectItem value="2-2">2 adults · 2 children</SelectItem>
              <SelectItem value="3">3 adults · 0 children</SelectItem>
              <SelectItem value="4">4 adults · 0 children</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button size="lg" className="search-button px-10">
          <Search size={18} className="mr-2" /> Search
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
