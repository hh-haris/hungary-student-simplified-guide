
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import AdminDataTable from "./AdminDataTable";
import FormModal from "./FormModal";
import UniversityForm from "./forms/UniversityForm";

interface UniversitiesTabProps {
  onDelete: (id: string) => void;
}

const UniversitiesTab = ({ onDelete }: UniversitiesTabProps) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);
  
  const { 
    data: universities, 
    isLoading 
  } = useQuery({
    queryKey: ['admin-universities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('universities')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    }
  });

  const handleEdit = (item: any) => {
    setSelectedUniversity(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedUniversity(null);
    setIsModalOpen(true);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    queryClient.invalidateQueries({ queryKey: ['admin-universities'] });
  };

  const universityColumns = [
    { key: 'name', label: 'Name' },
    { key: 'city', label: 'City' },
    { key: 'min_usat_score', label: 'Min USAT Score' },
  ];

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-syne text-xl font-semibold">All Universities</h2>
            <Button className="bg-deep-teal hover:bg-deep-teal/90" onClick={handleAdd}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add University
            </Button>
          </div>
          
          <AdminDataTable 
            data={universities || []}
            columns={universityColumns}
            isLoading={isLoading}
            emptyMessage="No universities found"
            onDelete={(id) => onDelete(id)}
            onEdit={handleEdit}
          />
        </CardContent>
      </Card>

      <FormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedUniversity ? "Edit University" : "Add New University"}
      >
        <UniversityForm 
          university={selectedUniversity}
          onSuccess={handleSuccess}
          onCancel={() => setIsModalOpen(false)}
        />
      </FormModal>
    </>
  );
};

export default UniversitiesTab;
