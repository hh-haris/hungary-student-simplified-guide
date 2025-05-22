import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  selectedProgram: string;
  setSelectedProgram: (program: string) => void;
  programsForFinder: string[];
  programFinderSearchQuery: string;
  setProgramFinderSearchQuery: (query: string) => void;
};

export const ProgramFinder = ({
  selectedProgram,
  setSelectedProgram,
  programsForFinder,
  programFinderSearchQuery,
  setProgramFinderSearchQuery,
}: Props) => {
  return (
    <div>
      <Label
        htmlFor="program"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Program
      </Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
        <Select
          onValueChange={(value) => setSelectedProgram(value)}
          value={selectedProgram}
        >
          <SelectTrigger id="program-select" className="w-full bg-white pl-10">
            <SelectValue placeholder="Select program" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] bg-white">
            <Input
              placeholder="Search programs..."
              className="mb-2 sticky top-0"
              value={programFinderSearchQuery}
              onChange={(e) => setProgramFinderSearchQuery(e.target.value)}
            />
            <ScrollArea className="h-[300px]">
              {programsForFinder.map((program) => (
                <SelectItem key={program} value={program}>
                  {program}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
