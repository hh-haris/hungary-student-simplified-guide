import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { Loader2, PlusCircle, Edit, Trash2 } from "lucide-react";
import SampleDataButton from "@/components/SampleDataButton";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("universities");

  // Universities data
  const { 
    data: universities, 
    isLoading: loadingUniversities,
    refetch: refetchUniversities 
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

  // Programs data
  const { 
    data: programs, 
    isLoading: loadingPrograms,
    refetch: refetchPrograms 
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

  // Timeline data
  const { 
    data: timeline, 
    isLoading: loadingTimeline,
    refetch: refetchTimeline 
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

  // USAT Categories data
  const { 
    data: usatCategories, 
    isLoading: loadingUsatCategories,
    refetch: refetchUsatCategories 
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

  // Function to handle delete
  const handleDelete = async (table: string, id: string) => {
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
      
      // Refetch the appropriate data
      if (table === 'universities') refetchUniversities();
      else if (table === 'programs') refetchPrograms();
      else if (table === 'timeline') refetchTimeline();
      else if (table === 'usat_categories') refetchUsatCategories();
      
    } catch (error) {
      console.error("Error deleting item:", error);
      toast({
        title: "Error deleting item",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  // Add this refetchAll function to refresh all data
  const refetchAll = () => {
    refetchUniversities();
    refetchPrograms();
    refetchTimeline();
    refetchUsatCategories();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-syne text-3xl font-bold">Admin Dashboard</h1>
          <SampleDataButton onSuccess={refetchAll} />
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="usat">USAT Categories</TabsTrigger>
          </TabsList>
          
          {/* Universities Tab */}
          <TabsContent value="universities">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-syne text-xl font-semibold">All Universities</h2>
                  <Button className="bg-deep-teal hover:bg-deep-teal/90">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add University
                  </Button>
                </div>
                
                {loadingUniversities ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-deep-teal" />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>City</TableHead>
                          <TableHead>Min USAT Score</TableHead>
                          <TableHead className="w-[120px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {universities && universities.length > 0 ? (
                          universities.map((uni: any) => (
                            <TableRow key={uni.id}>
                              <TableCell className="font-medium">{uni.name}</TableCell>
                              <TableCell>{uni.city}</TableCell>
                              <TableCell>{uni.min_usat_score}</TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleDelete('universities', uni.id)}
                                  >
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-4">
                              No universities found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Programs Tab */}
          <TabsContent value="programs">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-syne text-xl font-semibold">All Programs</h2>
                  <Button className="bg-deep-teal hover:bg-deep-teal/90">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Program
                  </Button>
                </div>
                
                {loadingPrograms ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-deep-teal" />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>University</TableHead>
                          <TableHead>Degree Level</TableHead>
                          <TableHead>Field</TableHead>
                          <TableHead className="w-[120px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {programs && programs.length > 0 ? (
                          programs.map((program: any) => (
                            <TableRow key={program.id}>
                              <TableCell className="font-medium">{program.name}</TableCell>
                              <TableCell>{program.universities?.name}</TableCell>
                              <TableCell>{program.degree_level}</TableCell>
                              <TableCell>{program.field_of_study}</TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleDelete('programs', program.id)}
                                  >
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4">
                              No programs found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Timeline Tab */}
          <TabsContent value="timeline">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-syne text-xl font-semibold">Timeline Steps</h2>
                  <Button className="bg-deep-teal hover:bg-deep-teal/90">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Timeline Step
                  </Button>
                </div>
                
                {loadingTimeline ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-deep-teal" />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Step</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Date Range</TableHead>
                          <TableHead className="w-[120px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {timeline && timeline.length > 0 ? (
                          timeline.map((step: any) => (
                            <TableRow key={step.id}>
                              <TableCell>{step.step_number}</TableCell>
                              <TableCell className="font-medium">{step.title}</TableCell>
                              <TableCell>{step.date_range}</TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleDelete('timeline', step.id)}
                                  >
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-4">
                              No timeline steps found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* USAT Categories Tab */}
          <TabsContent value="usat">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-syne text-xl font-semibold">USAT Categories</h2>
                  <Button className="bg-deep-teal hover:bg-deep-teal/90">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Category
                  </Button>
                </div>
                
                {loadingUsatCategories ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-deep-teal" />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Min Passing Score</TableHead>
                          <TableHead className="w-[120px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {usatCategories && usatCategories.length > 0 ? (
                          usatCategories.map((category: any) => (
                            <TableRow key={category.id}>
                              <TableCell className="font-medium">{category.name}</TableCell>
                              <TableCell>{category.min_passing_score}</TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleDelete('usat_categories', category.id)}
                                  >
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={3} className="text-center py-4">
                              No USAT categories found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
