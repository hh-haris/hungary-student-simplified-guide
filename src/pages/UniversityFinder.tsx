
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Define types for our data
interface University {
  id: string;
  name: string;
  city: string;
  intro: string;
  min_usat_score: number;
  website?: string;
  programs: string[];
  image_url?: string;
}

interface Program {
  id: string;
  name: string;
  degree_level: string;
  field_of_study: string;
}

const UniversityFinder = () => {
  const [fscMarks, setFscMarks] = useState(75);
  const [usatScore, setUsatScore] = useState(85);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showNominationWarning, setShowNominationWarning] = useState(false);
  const [filteredFirstChoice, setFilteredFirstChoice] = useState<University[]>([]);
  const [filteredSecondChoice, setFilteredSecondChoice] = useState<University[]>([]);
  const [allFiltersApplied, setAllFiltersApplied] = useState(false);

  // Fetch universities from Supabase
  const { data: universities, isLoading: loadingUniversities, error: universitiesError } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('universities')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as University[];
    }
  });

  // Fetch unique programs from Supabase
  const { data: programsList, isLoading: loadingPrograms, error: programsError } = useQuery({
    queryKey: ['programs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('programs')
        .select('id, name, degree_level, field_of_study')
        .order('name');
      
      if (error) throw error;
      return data as Program[];
    }
  });

  // Show error toast if there are any fetch errors
  useEffect(() => {
    if (universitiesError) {
      toast({
        title: "Error loading universities",
        description: "Please try again later",
        variant: "destructive"
      });
      console.error("Universities error:", universitiesError);
    }

    if (programsError) {
      toast({
        title: "Error loading programs",
        description: "Please try again later",
        variant: "destructive"
      });
      console.error("Programs error:", programsError);
    }
  }, [universitiesError, programsError]);

  useEffect(() => {
    const allApplied = fscMarks > 0 && usatScore >= 70 && selectedProgram !== "";
    setAllFiltersApplied(allApplied);
    
    // Set warnings based on USAT score
    setShowWarning(usatScore < 75);
    setShowNominationWarning(usatScore < 72);
  }, [fscMarks, usatScore, selectedProgram]);

  const handleFind = () => {
    if (!allFiltersApplied || !universities) {
      return;
    }
    
    setShowResults(true);
    
    // Filter universities
    const topChoices = universities.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score >= 73);
    const secondaryChoices = universities.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score < 73);
    
    setFilteredFirstChoice(topChoices);
    setFilteredSecondChoice(secondaryChoices);
  };

  // Create a unique list of program fields
  const uniquePrograms = programsList 
    ? Array.from(new Set(programsList.map(p => p.name)))
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl mb-8">University Finder</h1>

        <div className="bg-white rounded-lg shadow-sm p-5 mb-8 backdrop-blur-sm bg-white/70">
          <h2 className="font-syne font-semibold text-xl mb-6">Enter Your Details</h2>

          {(loadingUniversities || loadingPrograms) && (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-deep-teal" />
              <span className="ml-2">Loading data...</span>
            </div>
          )}

          {!loadingUniversities && !loadingPrograms && (
            <div className="space-y-6">
              <div>
                <Label className="mb-2 block">FSc Marks (%): {fscMarks}</Label>
                <Slider
                  defaultValue={[75]}
                  max={100}
                  min={50}
                  step={1}
                  onValueChange={(val) => setFscMarks(val[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div>
                <Label className="mb-2 block">USAT Score: {usatScore}</Label>
                <Slider
                  defaultValue={[85]}
                  max={100}
                  min={70}
                  step={1}
                  onValueChange={(val) => setUsatScore(val[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>70</span>
                  <span>100</span>
                </div>
                {showWarning && (
                  <p className="text-amber-600 text-sm mt-1">
                    <AlertCircle className="inline-block h-4 w-4 mr-1" />
                    We recommend improving your USAT score to 75+ for better chances
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="program" className="mb-2 block">Program <span className="text-red-500">*</span></Label>
                <Select onValueChange={(value) => setSelectedProgram(value)}>
                  <SelectTrigger id="program-select" className="w-full">
                    <SelectValue placeholder="Select program" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="bg-white">
                    {uniquePrograms.map((program) => (
                      <SelectItem key={program} value={program}>{program}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className={`w-full ${
                  allFiltersApplied 
                    ? "bg-accent-orange hover:bg-accent-orange/90" 
                    : "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                } text-white`}
                onClick={handleFind}
                disabled={!allFiltersApplied}
              >
                Find Universities
              </Button>
              
              {!allFiltersApplied && (
                <p className="text-sm text-gray-500 text-center">
                  Please fill in all fields to find matching universities
                </p>
              )}
            </div>
          )}
        </div>

        {showResults && (
          <div>
            {showNominationWarning && (
              <Alert className="mb-6 bg-red-50 border-red-200">
                <AlertCircle className="h-4 w-4 text-red-800" />
                <AlertDescription className="text-red-800">
                  With a USAT score below 72, there are very low chances of nomination. We strongly recommend improving your score.
                </AlertDescription>
              </Alert>
            )}
            {showWarning && !showNominationWarning && (
              <Alert className="mb-6 bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-800" />
                <AlertDescription className="text-amber-800">
                  We recommend improving your USAT score to 75+ to enhance your nomination chances for competitive programs.
                </AlertDescription>
              </Alert>
            )}

            {filteredFirstChoice.length > 0 && (
              <>
                <h2 className="font-syne font-semibold text-xl mb-4">First Preference Universities</h2>
                <div className="space-y-4 mb-8">
                  {filteredFirstChoice.map((university) => (
                    <Card key={university.id} className="hover:shadow-md transition-shadow backdrop-blur-sm bg-white/70">
                      <CardContent className="p-5">
                        <h3 className="font-syne font-bold text-xl mb-1">{university.name}</h3>
                        <p className="text-light-teal mb-3">{university.city}</p>
                        <p className="text-gray-600 mb-4">{university.intro}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">USAT requirement: {university.min_usat_score}+</span>
                          <Link to={`/universities/${university.id}`}>
                            <Button className="bg-deep-teal hover:bg-deep-teal/90">View Details</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
            
            {filteredSecondChoice.length > 0 && (
              <>
                <h2 className="font-syne font-semibold text-xl mb-4">Second Preference Universities</h2>
                <div className="space-y-4">
                  {filteredSecondChoice.map((university) => (
                    <Card key={university.id} className="hover:shadow-md transition-shadow backdrop-blur-sm bg-white/70">
                      <CardContent className="p-5">
                        <h3 className="font-syne font-bold text-xl mb-1">{university.name}</h3>
                        <p className="text-light-teal mb-3">{university.city}</p>
                        <p className="text-gray-600 mb-4">{university.intro}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">USAT requirement: {university.min_usat_score}+</span>
                          <Link to={`/universities/${university.id}`}>
                            <Button className="bg-deep-teal hover:bg-deep-teal/90">View Details</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {filteredFirstChoice.length === 0 && filteredSecondChoice.length === 0 && (
              <div className="text-center py-8">
                <h3 className="font-syne font-bold text-xl mb-3">No Matching Universities</h3>
                <p className="text-gray-600 mb-4">
                  No universities match your criteria. Try adjusting your USAT score or program selection.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default UniversityFinder;
