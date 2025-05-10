
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import AdminDataTable from "./AdminDataTable";

interface ProgramsTabProps {
  onDelete: (id: string) => void;
}

const ProgramsTab = ({ onDelete }: ProgramsTabProps) => {
  const { 
    data: programs, 
    isLoading 
  } = useQuery({
    queryKey: ['admin-programs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('programs')
        .select('*, universities(name)')
        .order('name');
      
      if (error) throw error;
      return data;
    }
  });

  const programColumns = [
    { key: 'name', label: 'Name' },
    { 
      key: 'universities', 
      label: 'University',
      render: (program: any) => program.universities?.name
    },
    { key: 'degree_level', label: 'Degree Level' },
    { key: 'field_of_study', label: 'Field' },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-syne text-xl font-semibold">All Programs</h2>
          <Button className="bg-deep-teal hover:bg-deep-teal/90">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Program
          </Button>
        </div>
        
        <AdminDataTable 
          data={programs || []}
          columns={programColumns}
          isLoading={isLoading}
          emptyMessage="No programs found"
          onDelete={(id) => onDelete(id)}
        />
      </CardContent>
    </Card>
  );
};

export default ProgramsTab;
