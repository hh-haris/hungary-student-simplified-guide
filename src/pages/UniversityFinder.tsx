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
  const [programFinderSearchQuery, setProgramFinderSearchQuery] = useState("");

  const { data: universities, isLoading: loadingUniversities, error: universitiesError } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('universities')
          .select('*')
          .order('name');
        if (error) throw error;
        return (data ?? universityData) as University[];
      } catch (error) {
        console.error("Error fetching universities:", error);
        return universityData;
      }
    }
  });

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
    const allApplied = fscMarks > 0 && usatScore >= 70 && selectedProgram !== "";
    setAllFiltersApplied(allApplied);
    setShowWarning(usatScore < 75);
    setShowNominationWarning(usatScore < 72);
  }, [fscMarks, usatScore, selectedProgram]);

  const handleFind = () => {
    if (!allFiltersApplied) return;

    setShowResults(true);
    const uniData = universities ?? universityData;

    const topChoices = uniData.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score >= 73);
    const secondaryChoices = uniData.filter(uni => uni.min_usat_score <= usatScore && uni.min_usat_score < 73);

    if (selectedProgram) {
      const filteredByProgram = (unis: University[]) =>
        unis.filter(uni =>
          uni.programs.some(prog => prog.toLowerCase().includes(selectedProgram.toLowerCase()))
        );

      setFilteredFirstChoice(filteredByProgram(topChoices));
      setFilteredSecondChoice(filteredByProgram(secondaryChoices));
    } else {
      setFilteredFirstChoice(topChoices);
      setFilteredSecondChoice(secondaryChoices);
    }
  };

  const uniquePrograms = [...new Set(fullProgramData.map(p => p.name))].sort();

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
                  className={`w-full ${
                    allFiltersApplied
                      ? "bg-accent-orange hover:bg-accent-orange/90"
                      : "bg-gray-300 cursor-not-allowed"
                  } text-white`}
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
                        <CardContent className="flex flex-col md:flex-row md:items-center md:space-x-6">
                          {university.image_url && (
                            <img
                              src={university.image_url}
                              alt={university.name}
                              className="w-full md:w-48 h-32 object-cover rounded-md mb-4 md:mb-0"
                              loading="lazy"
                            />
                          )}
                          <div>
                            <h3 className="font-syne font-bold text-lg">{university.name}</h3>
                            <p className="text-sm italic mb-1">{university.city}</p>
                            <p className="text-sm mb-2 line-clamp-2">{university.intro}</p>
                            <p className="text-xs font-semibold text-deep-teal">
                              Minimum USAT Score Required: {university.min_usat_score}
                            </p>
                            {university.website && (
                              <a
                                href={university.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-orange hover:underline text-sm"
                              >
                                Visit Website
                              </a>
                            )}
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
                      <Card key={university.id} className="hover:shadow-md transition-shadow backdrop-blur-sm bg-white/50">
                        <CardContent className="flex flex-col md:flex-row md:items-center md:space-x-6">
                          {university.image_url && (
                            <img
                              src={university.image_url}
                              alt={university.name}
                              className="w-full md:w-48 h-32 object-cover rounded-md mb-4 md:mb-0"
                              loading="lazy"
                            />
                          )}
                          <div>
                            <h3 className="font-syne font-bold text-lg">{university.name}</h3>
                            <p className="text-sm italic mb-1">{university.city}</p>
                            <p className="text-sm mb-2 line-clamp-2">{university.intro}</p>
                            <p className="text-xs font-semibold text-deep-teal">
                              Minimum USAT Score Required: {university.min_usat_score}
                            </p>
                            {university.website && (
                              <a
                                href={university.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-orange hover:underline text-sm"
                              >
                                Visit Website
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              {filteredFirstChoice.length === 0 && filteredSecondChoice.length === 0 && (
                <p className="text-center text-gray-600 mt-8">No universities match your criteria. Try adjusting your inputs.</p>
              )}
            </div>
          )}
        </ExpandableSectionProvider>
      </main>
      <Footer />
    </div>
  )
};

export default UniversityFinder;

// You should have the universityData and fullProgramData arrays or imports elsewhere in your code.
