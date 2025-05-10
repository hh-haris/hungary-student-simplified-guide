
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import AdminDataTable from "./AdminDataTable";

interface UsatCategoriesTabProps {
  onDelete: (id: string) => void;
}

const UsatCategoriesTab = ({ onDelete }: UsatCategoriesTabProps) => {
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

  const usatCategoryColumns = [
    { key: 'name', label: 'Name' },
    { key: 'min_passing_score', label: 'Min Passing Score' },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-syne text-xl font-semibold">USAT Categories</h2>
          <Button className="bg-deep-teal hover:bg-deep-teal/90">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Category
          </Button>
        </div>
        
        <AdminDataTable 
          data={usatCategories || []}
          columns={usatCategoryColumns}
          isLoading={isLoading}
          emptyMessage="No USAT categories found"
          onDelete={(id) => onDelete(id)}
        />
      </CardContent>
    </Card>
  );
};

export default UsatCategoriesTab;
