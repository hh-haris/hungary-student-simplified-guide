
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Edit } from "lucide-react";
import AdminDataTable from "./AdminDataTable";
import FormModal from "./FormModal";
import TimelineForm from "./forms/TimelineForm";

interface TimelineTabProps {
  onDelete: (id: string) => void;
}

const TimelineTab = ({ onDelete }: TimelineTabProps) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState<any>(null);
  
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

  const handleEdit = (item: any) => {
    setSelectedTimeline(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedTimeline(null);
    setIsModalOpen(true);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    queryClient.invalidateQueries({ queryKey: ['admin-timeline'] });
  };

  const timelineColumns = [
    { key: 'step_number', label: 'Step' },
    { key: 'title', label: 'Title' },
    { key: 'date_range', label: 'Date Range' },
  ];

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-syne text-xl font-semibold">Timeline Steps</h2>
            <Button className="bg-deep-teal hover:bg-deep-teal/90" onClick={handleAdd}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Timeline Step
            </Button>
          </div>
          
          <AdminDataTable 
            data={timeline || []}
            columns={timelineColumns}
            isLoading={isLoading}
            emptyMessage="No timeline steps found"
            onDelete={(id) => onDelete(id)}
            onEdit={handleEdit}
          />
        </CardContent>
      </Card>

      <FormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedTimeline ? "Edit Timeline Step" : "Add New Timeline Step"}
      >
        <TimelineForm 
          timelineEntry={selectedTimeline}
          onSuccess={handleSuccess}
          onCancel={() => setIsModalOpen(false)}
        />
      </FormModal>
    </>
  );
};

export default TimelineTab;
