
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { AlertCircle, Loader2, Search } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import ExpandableSection from "@/components/ui/expandable-section";

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
  language: string;
  credit_hours?: number;
  duration?: string;
  university_name?: string;
  faculty?: string;
  location?: string;
}

interface City {
  name: string;
  universities: string[];
}

const programData: Program[] = [
  {
    id: "1",
    name: "Agribusiness and Rural Development Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Economics and Business",
    location: "Debrecen"
  },
  {
    id: "2",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "Hungarian University of Agriculture and Life Sciences",
    faculty: "Institute of Agronomy",
    location: "Gödöllő"
  },
  {
    id: "3",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "Széchenyi István University",
    faculty: "Faculty of Agricultural and Food Sciences",
    location: "Mosonmagyaróvár"
  },
  {
    id: "4",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Agricultural and Food Sciences and Environmental Management",
    location: "Debrecen"
  },
  {
    id: "5",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Nyíregyháza",
    faculty: "Institute of Engineering and Agricultural Science",
    location: "Nyíregyháza"
  },
  {
    id: "6",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Szeged",
    faculty: "Faculty of Agriculture",
    location: "Hódmezővásárhely"
  },
  {
    id: "7",
    name: "Agricultural Water Management and Environmental Technology Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "Széchenyi István University",
    faculty: "Faculty of Agricultural and Food Sciences",
    location: "Mosonmagyaróvár"
  },
  {
    id: "8",
    name: "Animation",
    degree_level: "Bachelor",
    field_of_study: "Arts",
    language: "English",
    duration: "6 semesters",
    university_name: "Budapest Metropolitan University",
    faculty: "Faculty of Art and Creative Industries",
    location: "Budapest"
  },
  {
    id: "9",
    name: "Applied Economics",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "6 semesters (3 years)",
    university_name: "Corvinus University of Budapest",
    faculty: "Institute of Economics",
    location: "Budapest"
  },
  // More programs would be added here...
];

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
  // More universities would be added here...
];

// Extract unique cities from the university data
const generateCitiesData = (): City[] => {
  const citiesMap = new Map<string, string[]>();
  
  universityData.forEach(uni => {
    if (citiesMap.has(uni.city)) {
      citiesMap.get(uni.city)?.push(uni.name);
    } else {
      citiesMap.set(uni.city, [uni.name]);
    }
  });
  
  const citiesArray: City[] = [];
  citiesMap.forEach((universities, name) => {
    citiesArray.push({
      name,
      universities
    });
  });
  
  return citiesArray.sort((a, b) => a.name.localeCompare(b.name));
};

const cityData: City[] = generateCitiesData();

// Extract unique program fields
const programFields = [...new Set(programData.map(p => p.field_of_study))].sort();
// Extract unique degree levels
const degreeTypes = [...new Set(programData.map(p => p.degree_level))].sort();

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
  const [activeTab, setActiveTab] = useState("finder");
  
  // Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [programSearchQuery, setprogramSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string>("");
  const [selectedDegree, setSelectedDegree] = useState<string>("");

  // Fetch universities from Supabase
  const { data: universities, isLoading: loadingUniversities, error: universitiesError } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('universities')
          .select('*')
          .order('name');
        
        if (error) throw error;
        return data as University[];
      } catch (error) {
        console.error("Error fetching universities:", error);
        return universityData; // Use local data as fallback
      }
    }
  });

  // Fetch unique programs from Supabase
  const { data: programsList, isLoading: loadingPrograms, error: programsError } = useQuery({
    queryKey: ['programs'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('programs')
          .select('id, name, degree_level, field_of_study')
          .order('name');
        
        if (error) throw error;
        return data as Program[];
      } catch (error) {
        console.error("Error fetching programs:", error);
        return programData; // Use local data as fallback
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

    if (programsError) {
      toast({
        title: "Error loading programs",
        description: "Using local data instead",
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
    if (!allFiltersApplied || !(universities || universityData)) {
      return;
    }
    
    setShowResults(true);
    
    const uniData = universities || universityData;
    
    // Filter universities
    const topChoices = uniData.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score >= 73);
    const secondaryChoices = uniData.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score < 73);
    
    setFilteredFirstChoice(topChoices);
    setFilteredSecondChoice(secondaryChoices);
  };

  // Filter functions for database view
  const filteredUniversities = (universities || universityData).filter(uni => 
    uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    uni.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPrograms = (programsList || programData).filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(programSearchQuery.toLowerCase());
    const matchesField = selectedField ? program.field_of_study === selectedField : true;
    const matchesDegree = selectedDegree ? program.degree_level === selectedDegree : true;
    return matchesSearch && matchesField && matchesDegree;
  });

  // Create a unique list of program fields
  const uniquePrograms = (programsList || programData)
    ? Array.from(new Set((programsList || programData).map(p => p.name)))
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl mb-8">University Database</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="finder" className="flex-1">University Finder</TabsTrigger>
            <TabsTrigger value="universities" className="flex-1">Universities</TabsTrigger>
            <TabsTrigger value="programs" className="flex-1">Programs</TabsTrigger>
            <TabsTrigger value="cities" className="flex-1">Cities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="finder">
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
                      <SelectTrigger id="program-select" className="w-full bg-white">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px] bg-white">
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
          </TabsContent>
          
          <TabsContent value="universities">
            <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
              <div className="mb-6">
                <Label htmlFor="university-search" className="mb-2 block">Search Universities</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    id="university-search" 
                    placeholder="Search by name or city..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredUniversities.length > 0 ? filteredUniversities.map((university) => (
                  <ExpandableSection 
                    key={university.id} 
                    title={university.name}
                    className="hover:shadow-sm"
                  >
                    <div>
                      <div className="mb-4">
                        <span className="font-semibold">City:</span> {university.city}
                      </div>
                      <div className="mb-4">
                        <span className="font-semibold">About:</span> {university.intro}
                      </div>
                      <div className="mb-4">
                        <span className="font-semibold">Min USAT Score:</span> {university.min_usat_score}
                      </div>
                      <div>
                        <span className="font-semibold">Programs:</span>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                          {university.programs.map((program, idx) => (
                            <li key={idx}>{program}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                )) : (
                  <div className="text-center py-8">
                    <p>No universities found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="programs">
            <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
              <div className="mb-6 space-y-4">
                <Label htmlFor="program-search" className="mb-2 block">Search Programs</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    id="program-search" 
                    placeholder="Search by program name..." 
                    className="pl-10"
                    value={programSearchQuery}
                    onChange={(e) => setprogramSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="field-filter">Field of Study</Label>
                    <Select onValueChange={(value) => setSelectedField(value)} value={selectedField}>
                      <SelectTrigger id="field-filter" className="w-full bg-white">
                        <SelectValue placeholder="All Fields" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px] bg-white">
                        <SelectItem key="all-fields" value="all-fields">All Fields</SelectItem>
                        {programFields.map(field => (
                          <SelectItem key={field} value={field}>{field}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="degree-filter">Degree Level</Label>
                    <Select onValueChange={(value) => setSelectedDegree(value)} value={selectedDegree}>
                      <SelectTrigger id="degree-filter" className="w-full bg-white">
                        <SelectValue placeholder="All Degrees" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px] bg-white">
                        <SelectItem key="all-degrees" value="all-degrees">All Degrees</SelectItem>
                        {degreeTypes.map(degree => (
                          <SelectItem key={degree} value={degree}>{degree}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredPrograms.length > 0 ? filteredPrograms.map((program) => (
                  <ExpandableSection 
                    key={program.id} 
                    title={program.name}
                    className="hover:shadow-sm"
                  >
                    <div>
                      <div className="mb-2">
                        <span className="font-semibold">Degree Level:</span> {program.degree_level}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Field of Study:</span> {program.field_of_study}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Language:</span> {program.language}
                      </div>
                      {program.duration && (
                        <div className="mb-2">
                          <span className="font-semibold">Duration:</span> {program.duration}
                        </div>
                      )}
                      {program.university_name && (
                        <div className="mb-2">
                          <span className="font-semibold">University:</span> {program.university_name}
                        </div>
                      )}
                      {program.faculty && (
                        <div className="mb-2">
                          <span className="font-semibold">Faculty:</span> {program.faculty}
                        </div>
                      )}
                      {program.location && (
                        <div>
                          <span className="font-semibold">Location:</span> {program.location}
                        </div>
                      )}
                    </div>
                  </ExpandableSection>
                )) : (
                  <div className="text-center py-8">
                    <p>No programs found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cities">
            <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
              <div className="space-y-4">
                {cityData.map((city) => (
                  <ExpandableSection 
                    key={city.name} 
                    title={city.name}
                    className="hover:shadow-sm"
                  >
                    <div>
                      <span className="font-semibold">Universities in {city.name}:</span>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        {city.universities.map((university, idx) => (
                          <li key={idx}>{university}</li>
                        ))}
                      </ul>
                    </div>
                  </ExpandableSection>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityFinder;
