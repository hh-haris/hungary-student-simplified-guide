
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import AdminDataTable from "./AdminDataTable";

interface UniversitiesTabProps {
  onDelete: (id: string) => void;
}

const UniversitiesTab = ({ onDelete }: UniversitiesTabProps) => {
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

  const universityColumns = [
    { key: 'name', label: 'Name' },
    { key: 'city', label: 'City' },
    { key: 'min_usat_score', label: 'Min USAT Score' },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-syne text-xl font-semibold">All Universities</h2>
          <Button className="bg-deep-teal hover:bg-deep-teal/90">
            <PlusCircle className="mr-2 h-4 w-4" /> Add University
          </Button>
        </div>
        
        <AdminDataTable 
          data={universities || []}
          columns={universityColumns}
          isLoading={isLoading}
          emptyMessage="No universities found"
          onDelete={(id) => onDelete(id)}
        />
      </CardContent>
    </Card>
  );
};

export default UniversitiesTab;
