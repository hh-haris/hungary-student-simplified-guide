
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SampleDataButton from "@/components/SampleDataButton";

// Import the tab components
import UniversitiesTab from "@/components/admin/UniversitiesTab";
import ProgramsTab from "@/components/admin/ProgramsTab";
import TimelineTab from "@/components/admin/TimelineTab";
import UsatCategoriesTab from "@/components/admin/UsatCategoriesTab";
import NotesTab from "@/components/admin/NotesTab";

// Define valid table names as a type
type TableName = "universities" | "programs" | "timeline" | "usat_categories" | "notes";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("universities");

  // Function to handle delete - fixed with proper type
  const handleDelete = async (table: TableName, id: string) => {
    try {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: "Item deleted",
        description: `Successfully deleted item from ${table}`,
      });
      
      // Invalidate queries to refetch data
      // The refetch will be handled automatically by React Query
      
    } catch (error) {
      console.error("Error deleting item:", error);
      toast({
        title: "Error deleting item",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  // Create handlers for each table
  const handleDeleteUniversity = (id: string) => handleDelete("universities", id);
  const handleDeleteProgram = (id: string) => handleDelete("programs", id);
  const handleDeleteTimeline = (id: string) => handleDelete("timeline", id);
  const handleDeleteUsatCategory = (id: string) => handleDelete("usat_categories", id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-syne text-3xl font-bold">Admin Dashboard</h1>
          <SampleDataButton onSuccess={() => {
            // This will cause React Query to refetch the data
            // No need to manually refetch
          }} />
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="usat">USAT Categories</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          
          {/* Universities Tab */}
          <TabsContent value="universities">
            <UniversitiesTab onDelete={handleDeleteUniversity} />
          </TabsContent>
          
          {/* Programs Tab */}
          <TabsContent value="programs">
            <ProgramsTab onDelete={handleDeleteProgram} />
          </TabsContent>
          
          {/* Timeline Tab */}
          <TabsContent value="timeline">
            <TimelineTab onDelete={handleDeleteTimeline} />
          </TabsContent>
          
          {/* USAT Categories Tab */}
          <TabsContent value="usat">
            <UsatCategoriesTab onDelete={handleDeleteUsatCategory} />
          </TabsContent>

          {/* Notes Tab */}
          <TabsContent value="notes">
            <NotesTab />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
