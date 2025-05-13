import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

// Dummy data for universities and programs (replace with actual data fetching)
const universitiesData = [
  { id: "1", name: "University of Debrecen", city: "Debrecen", min_usat_score: 60, programs: ["Computer Science", "Engineering"] },
  { id: "2", name: "Eötvös Loránd University", city: "Budapest", min_usat_score: 70, programs: ["Law", "Psychology"] },
  { id: "3", name: "Szeged University", city: "Szeged", min_usat_score: 50, programs: ["Medicine", "Biology"] },
  { id: "4", name: "Budapest University of Technology and Economics", city: "Budapest", min_usat_score: 80, programs: ["Engineering", "Architecture"] },
  { id: "5", name: "University of Pécs", city: "Pécs", min_usat_score: 55, programs: ["Business", "Arts"] },
];

const programList = ["Computer Science", "Engineering", "Law", "Psychology", "Medicine", "Biology", "Business", "Arts"];
const cities = ["Debrecen", "Budapest", "Szeged", "Pécs"];

const UniversityFinder = () => {
  const [usatScore, setUsatScore] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [universities, setUniversities] = useState(universitiesData);
  const [programs, setPrograms] = useState(programList);

  // Make sure to update the University finder filtering logic
const filteredUniversities = universities.filter(university => {
  // Filter by program if selected
  if (selectedProgram && !university.programs.includes(selectedProgram)) {
    return false;
  }
  
  // Filter by USAT score
  if (usatScore && university.min_usat_score > usatScore) {
    return false;
  }
  
  // Filter by city if selected
  if (selectedCity && university.city !== selectedCity) {
    return false;
  }
  
  return true;
});

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6 text-deep-teal">
          Find Your Perfect University
        </h1>

        <Tabs defaultValue="finder" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="finder" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              University Finder
            </TabsTrigger>
            <TabsTrigger value="programs" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Available Programs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="finder">
            <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
              <h2 className="font-syne font-semibold text-xl mb-6">
                Search Criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="usatScore">USAT Score</Label>
                  <Input
                    type="number"
                    id="usatScore"
                    placeholder="Enter your USAT score"
                    value={usatScore !== null ? usatScore.toString() : ""}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setUsatScore(isNaN(value) ? null : value);
                    }}
                  />
                </div>
                <div>
                    <Label htmlFor="city">City</Label>
                    <Select onValueChange={(value) => setSelectedCity(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent>
                            {cities.map((city) => (
                                <SelectItem key={city} value={city}>
                                    {city}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                  <Label htmlFor="program">Program</Label>
                  <Select onValueChange={(value) => setSelectedProgram(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <h2 className="font-syne font-semibold text-xl mb-6">
                  Matching Universities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredUniversities.length > 0 ? (
                    filteredUniversities.map((university) => (
                      <Card key={university.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {university.name}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    ))
                  ) : (
                    <p>No matching universities found.</p>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="programs">
            <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
              <div className="flex justify-between mb-6">
                <h2 className="font-syne font-semibold text-xl">Available Programs</h2>
                <Button variant="outline" className="flex items-center gap-1" onClick={() => window.open("https://studyinhungary.hu/study-in-hungary/menu/find-a-study-programme/study-finder.html", "_blank")}>
                  Visit Official Site <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {programs.map((program, index) => (
                  <Card key={index} className={`cursor-pointer transition-all ${selectedProgram === program ? 'ring-2 ring-primary' : ''}`} onClick={() => setSelectedProgram(program)}>
                    <CardHeader>
                      <CardTitle className="text-lg">{program}</CardTitle>
                    </CardHeader>
                  </Card>
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
