
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import AdminDataTable from "./AdminDataTable";
import FormModal from "./FormModal";
import ProgramForm from "./forms/ProgramForm";

// Import program data for seeding and reference
import { fullProgramData } from "@/data/programsData";

interface ProgramsTabProps {
  onDelete: (id: string) => void;
}

const ProgramsTab = ({ onDelete }: ProgramsTabProps) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  
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

  const handleEdit = (item: any) => {
    setSelectedProgram(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedProgram(null);
    setIsModalOpen(true);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    queryClient.invalidateQueries({ queryKey: ['admin-programs'] });
  };

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

  // The number of programs in our full dataset
  const totalProgramsInData = fullProgramData.length;

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-syne text-xl font-semibold">All Programs</h2>
              <p className="text-sm text-gray-500">Total of {totalProgramsInData} programs in database</p>
            </div>
            <Button className="bg-deep-teal hover:bg-deep-teal/90" onClick={handleAdd}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Program
            </Button>
          </div>
          
          <AdminDataTable 
            data={programs || []}
            columns={programColumns}
            isLoading={isLoading}
            emptyMessage="No programs found"
            onDelete={(id) => onDelete(id)}
            onEdit={handleEdit}
          />
        </CardContent>
      </Card>

      <FormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedProgram ? "Edit Program" : "Add New Program"}
      >
        <ProgramForm 
          program={selectedProgram}
          onSuccess={handleSuccess}
          onCancel={() => setIsModalOpen(false)}
        />
      </FormModal>
    </>
  );
};

export default ProgramsTab;
