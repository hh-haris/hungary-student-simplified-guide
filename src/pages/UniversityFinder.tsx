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
import { Input } from "@/components/ui/input";
import { AlertCircle, Loader2, Search } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExpandableSectionProvider } from "@/components/ui/expandable-section";

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

// Import the full program dataset
import { fullProgramData } from "@/data/programsData";

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
  
  // Search states
  const [programFinderSearchQuery, setProgramFinderSearchQuery] = useState("");

  // Fetch universities from Supabase or use local data
  const { data: universities, isLoading: loadingUniversities, error: universitiesError } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('universities')
          .select('*')
          .order('name');
        
        if (error) throw error;
        return data as University[] || universityData;
      } catch (error) {
        console.error("Error fetching universities:", error);
        return universityData; // Use local data as fallback
      }
    }
  });

  // Show error toast if there are any fetch errors
  useEffect(() => {
    if (universitiesError) {
      toast({
        title: "Error loading universities",
        description: "Using local data instead",
        variant: "destructive"
      });
      console.error("Universities error:", universitiesError);
    }
  }, [universitiesError]);

  useEffect(() => {
    // Make program selection required again but don't display "required" text
    const allApplied = fscMarks > 0 && usatScore >= 70 && !!selectedProgram;
    setAllFiltersApplied(allApplied);
    
    // Set warnings based on USAT score
    setShowWarning(usatScore < 75);
    setShowNominationWarning(usatScore < 72);
  }, [fscMarks, usatScore, selectedProgram]);

  const handleFind = () => {
    if (!allFiltersApplied) {
      return;
    }
    
    setShowResults(true);
    
    const uniData = universities || universityData;
    
    // Filter universities based on USAT score
    const topChoices = uniData.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score >= 73);
    const secondaryChoices = uniData.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score < 73);
    
    // Further filter by selected program if one is chosen
    if (selectedProgram) {
      const filteredByProgram = (unis: University[]) => unis.filter(uni => 
        uni.programs.some(prog => prog.toLowerCase().includes(selectedProgram.toLowerCase()))
      );
      
      setFilteredFirstChoice(filteredByProgram(topChoices));
      setFilteredSecondChoice(filteredByProgram(secondaryChoices));
    } else {
      setFilteredFirstChoice(topChoices);
      setFilteredSecondChoice(secondaryChoices);
    }
  };

  // Create a unique list of program names for the finder dropdown
  const uniquePrograms = [...new Set(fullProgramData.map(p => p.name))].sort();

  // Filter programs for the finder search box
  const programsForFinder = uniquePrograms.filter(program => 
    program.toLowerCase().includes(programFinderSearchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl mb-8">University Finder</h1>

        <ExpandableSectionProvider>
          <div className="bg-white rounded-lg shadow-sm p-5 mb-8 backdrop-blur-sm bg-white/70">
            <div className="flex justify-between mb-6">
              <h2 className="font-syne font-semibold text-xl">Enter Your Details</h2>
            </div>

            {loadingUniversities ? (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-deep-teal" />
                <span className="ml-2">Loading data...</span>
              </div>
            ) : (
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
                  <Label htmlFor="program" className="mb-2 block">Program</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                    <Select 
                      onValueChange={(value) => setSelectedProgram(value)} 
                      value={selectedProgram}
                    >
                      <SelectTrigger id="program-select" className="w-full bg-white pl-10">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px] bg-white">
                        <Input
                          placeholder="Search programs..."
                          className="mb-2 sticky top-0"
                          value={programFinderSearchQuery}
                          onChange={(e) => setProgramFinderSearchQuery(e.target.value)}
                        />
                        <ScrollArea className="h-[300px]">
                          {programsForFinder.map((program) => (
                            <SelectItem key={program} value={program}>{program}</SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className={w-full ${
                    allFiltersApplied 
                      ? "bg-accent-orange hover:bg-accent-orange/90" 
                      : "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                  } text-white}
                  onClick={handleFind}
                  disabled={!allFiltersApplied}
                >
                  Find Universities
                </Button>
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
                            <Link to={/universities/${getUniversityId(university.name)}}>
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
                            <Link to={/universities/${getUniversityId(university.name)}}>
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
        </ExpandableSectionProvider>
      </main>
      <Footer />
    </div>
  );
};

// Helper function to convert university name to URL slug
const getUniversityId = (name: string): string => {
  if (name.includes("Budapest University of Technology")) return "bme";
  if (name.includes("University of Debrecen")) return "debrecen";
  if (name.includes("University of Pécs")) return "pecs";
  
  // Default fallback - convert name to lowercase slug
  return name.toLowerCase().replace(/\s+/g, '-');
};

// This data represents the universities in Hungary
const universityData: University[] = [
  {
    id: "1",
    name: "Budapest University of Technology and Economics",
    city: "Budapest",
    intro: "Leading technical university in Hungary with strong engineering and IT programs.",
    min_usat_score: 75,
    programs: ["Computer Science", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Electrical Engineering", "Engineering Management", "Physicist Engineering", "Physics", "Mathematics", "Vehicle Engineering", "Transportation Engineering", "Professional Pilot", "Logistics Engineering"],
    image_url: "https://picsum.photos/id/1/800/400"
  },
  {
    id: "2",
    name: "University of Debrecen",
    city: "Debrecen",
    intro: "One of the largest universities with comprehensive programs including medical sciences.",
    min_usat_score: 70,
    programs: ["Agribusiness and Rural Development Engineering", "Agricultural Engineering", "Business Administration and Management", "Computer Science", "Computer Science Engineering", "Engineering Management", "English and American Studies", "Mechanical Engineering", "Mechatronics Engineering", "Precision Agricultural Engineering", "Psychology", "Vehicle Engineering", "Biology", "Biochemical Engineering", "Biotechnology", "Business Informatics", "Chemistry", "Earth Sciences", "Electrical Engineering", "Nursing and Patient Care", "Physics", "Contemporary Music", "Performance"],
    image_url: "https://picsum.photos/id/2/800/400"
  },
  {
    id: "3",
    name: "University of Szeged",
    city: "Szeged",
    intro: "Prestigious university with strong research focus and diverse academic programs.",
    min_usat_score: 72,
    programs: ["Agricultural Engineering", "Business Administration and Management", "Computer Science", "English and American Studies", "Nurse", "Nursing and Patient Care", "Performance", "Psychology", "Tourism and Catering", "Biochemical Engineer"],
    image_url: "https://picsum.photos/id/3/800/400"
  },
  {
    id: "4",
    name: "Corvinus University of Budapest",
    city: "Budapest",
    intro: "Leading institution for business, economics and social sciences in Central Europe.",
    min_usat_score: 74,
    programs: ["Applied Economics", "Business Administration and Management", "Communication and Media Studies", "Data Science in Business", "International Business Economics", "International Relations", "Philosophy, Politics, Economy"],
    image_url: "https://picsum.photos/id/4/800/400"
  },
  {
    id: "5",
    name: "Eötvös Loránd University",
    city: "Budapest",
    intro: "Hungary's largest university with a wide range of programs across various disciplines.",
    min_usat_score: 73,
    programs: ["Computer Science", "Early Childhood Education", "English and American Studies", "Finance and Accounting", "International Business Economics", "International relations", "Kindergarten Education", "Mechanical Engineering", "Pedagogy", "Psychology", "Sociology", "Special Needs Education"],
    image_url: "https://picsum.photos/id/5/800/400"
  },
  {
    id: "6",
    name: "University of Pécs",
    city: "Pécs",
    intro: "One of Hungary's oldest universities with strong medical and arts programs.",
    min_usat_score: 71,
    programs: ["Archaeology", "Architectural Engineering", "Biology", "Biotechnology", "Business Administration and Management", "Chemistry", "Civil Engineering", "Classical Musical Instrumental Performance", "Communication and Media Studies", "Computer Science", "Computer Science Engineering", "Designer Making", "Earth Sciences", "English and American Studies", "Geography", "International Relations", "Kindergarten Education", "Liberal Arts", "Mathematics", "Musical Creative Arts and Musicology", "Pedagogy", "Performance", "Physical Training", "Physics", "Psychology", "Roma Studies", "Social Work"],
    image_url: "https://picsum.photos/id/6/800/400"
  },
  {
    id: "7",
    name: "Hungarian University of Agriculture and Life Sciences",
    city: "Gödöllő",
    intro: "Leading institution in agricultural sciences and research.",
    min_usat_score: 70,
    programs: ["Agricultural Engineering", "Business Administration and Management", "Environmental Engineering", "Food Engineering", "Horticultural Engineering", "Landscape Management and Garden Construction Engineering", "Mechanical Engineering", "Tourism and Catering", "Wildlife Management Engineering", "Film and Media Studies"],
    image_url: "https://picsum.photos/id/7/800/400"
  },
  {
    id: "8",
    name: "Széchenyi István University",
    city: "Győr",
    intro: "Major university focusing on engineering, economics, and health sciences.",
    min_usat_score: 72,
    programs: ["Agricultural Engineering", "Agricultural Water Management and Environmental Technology Engineering", "Business Administration and Management", "Civil Engineering", "Food Engineering", "International Business Economics", "International Relations", "Logistics Engineering", "Mechanical Engineering", "Sociology", "Tourism and Catering", "Vehicle Engineering"],
    image_url: "https://picsum.photos/id/8/800/400"
  },
  {
    id: "9",
    name: "University of Miskolc",
    city: "Miskolc",
    intro: "Technical university with a focus on engineering and technology.",
    min_usat_score: 71,
    programs: ["Business Administration and Management", "Computer Science Engineering", "English and American Studies", "Logistics Engineering", "Materials Engineering", "Mechanical Engineering", "Nursing and Patient Care", "Performance", "Vehicle Engineering"],
    image_url: "https://picsum.photos/id/9/800/400"
  },
  {
    id: "10",
    name: "Semmelweis University",
    city: "Budapest",
    intro: "Hungary's leading medical university with world-renowned healthcare programs.",
    min_usat_score: 78,
    programs: ["Conductive Education", "Health Care and Disease Prevention", "Medical Diagnostic Analysis", "Nursing and Patient Care"],
    image_url: "https://picsum.photos/id/10/800/400"
  },
  {
    id: "11",
    name: "Budapest Metropolitan University",
    city: "Budapest",
    intro: "Modern university specializing in creative arts, business and communication.",
    min_usat_score: 70,
    programs: ["Animation", "Enviromental Design", "Film and Media Studies", "Graphic Design"],
    image_url: "https://picsum.photos/id/11/800/400"
  },
  {
    id: "12",
    name: "University of Nyíregyháza",
    city: "Nyíregyháza",
    intro: "Regional university with strong focus on teacher training and applied sciences.",
    min_usat_score: 70,
    programs: ["Agricultural Engineering", "Biology", "Business Administration and Management", "Computer Science", "English and American Studies", "Mechanical Engineering", "Music Culture", "Professional Pilot", "Vehicle Engineering"],
    image_url: "https://picsum.photos/id/12/800/400"
  }
];

export default UniversityFinder;



2/2

