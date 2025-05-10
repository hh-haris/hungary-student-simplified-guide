
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import AdminDataTable from "./AdminDataTable";

interface TimelineTabProps {
  onDelete: (id: string) => void;
}

const TimelineTab = ({ onDelete }: TimelineTabProps) => {
  const { 
    data: timeline, 
    isLoading 
  } = useQuery({
    queryKey: ['admin-timeline'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('timeline')
        .select('*')
        .order('step_number');
      
      if (error) throw error;
      return data;
    }
  });

  const timelineColumns = [
    { key: 'step_number', label: 'Step' },
    { key: 'title', label: 'Title' },
    { key: 'date_range', label: 'Date Range' },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-syne text-xl font-semibold">Timeline Steps</h2>
          <Button className="bg-deep-teal hover:bg-deep-teal/90">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Timeline Step
          </Button>
        </div>
        
        <AdminDataTable 
          data={timeline || []}
          columns={timelineColumns}
          isLoading={isLoading}
          emptyMessage="No timeline steps found"
          onDelete={(id) => onDelete(id)}
        />
      </CardContent>
    </Card>
  );
};

export default TimelineTab;
