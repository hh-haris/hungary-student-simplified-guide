
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import AdminDataTable from "./AdminDataTable";
import FormModal from "./FormModal";
import UsatCategoryForm from "./forms/UsatCategoryForm";

interface UsatCategoriesTabProps {
  onDelete: (id: string) => void;
}

const UsatCategoriesTab = ({ onDelete }: UsatCategoriesTabProps) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  
  const { 
    data: usatCategories, 
    isLoading 
  } = useQuery({
    queryKey: ['admin-usat-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('usat_categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    }
  });

  const handleEdit = (item: any) => {
    setSelectedCategory(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    queryClient.invalidateQueries({ queryKey: ['admin-usat-categories'] });
  };

  const usatCategoryColumns = [
    { key: 'name', label: 'Name' },
    { key: 'min_passing_score', label: 'Min Passing Score' },
  ];

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-syne text-xl font-semibold">USAT Categories</h2>
            <Button className="bg-deep-teal hover:bg-deep-teal/90" onClick={handleAdd}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Category
            </Button>
          </div>
          
          <AdminDataTable 
            data={usatCategories || []}
            columns={usatCategoryColumns}
            isLoading={isLoading}
            emptyMessage="No USAT categories found"
            onDelete={(id) => onDelete(id)}
            onEdit={handleEdit}
          />
        </CardContent>
      </Card>

      <FormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedCategory ? "Edit USAT Category" : "Add New USAT Category"}
      >
        <UsatCategoryForm 
          category={selectedCategory}
          onSuccess={handleSuccess}
          onCancel={() => setIsModalOpen(false)}
        />
      </FormModal>
    </>
  );
};

export default UsatCategoriesTab;
