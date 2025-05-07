
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Mock data for universities
const universities = [
  {
    id: "1",
    name: "Budapest University of Technology and Economics",
    city: "Budapest",
    intro: "Leading technical university in Hungary with strong engineering and IT programs.",
    minScore: 75
  },
  {
    id: "2",
    name: "University of Debrecen",
    city: "Debrecen",
    intro: "One of the largest universities with comprehensive programs including medical sciences.",
    minScore: 70
  },
  {
    id: "3",
    name: "University of Szeged",
    city: "Szeged",
    intro: "Prestigious university with strong research focus and diverse academic programs.",
    minScore: 72
  }
];

// Mock programs
const programs = [
  "Computer Science",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Medicine",
  "Dentistry",
  "Pharmacy",
  "Business Administration",
  "Economics"
];

const UniversityFinder = () => {
  const [fscMarks, setFscMarks] = useState(75);
  const [usatScore, setUsatScore] = useState(85);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleFind = () => {
    setShowResults(true);
    setShowWarning(usatScore < 75);
  };

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl mb-8">University Finder</h1>

        <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
          <h2 className="font-syne font-semibold text-xl mb-6">Enter Your Details</h2>

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
              <Label className="mb-2 block">USAT Score (%): {usatScore}</Label>
              <Slider
                defaultValue={[85]}
                max={100}
                min={70}
                step={1}
                onValueChange={(val) => setUsatScore(val[0])}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>70%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <Label htmlFor="program" className="mb-2 block">Program</Label>
              <Select onValueChange={(value) => setSelectedProgram(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white"
              onClick={handleFind}
            >
              Find Universities
            </Button>
          </div>
        </div>

        {showResults && (
          <div>
            {showWarning && (
              <Alert className="mb-6 bg-amber-50 border-amber-200">
                <AlertDescription className="text-amber-800">
                  We recommend retaking USAT to improve your nomination chance. A score of 75% or higher is ideal.
                </AlertDescription>
              </Alert>
            )}

            <h2 className="font-syne font-semibold text-xl mb-4">Results</h2>
            <div className="space-y-4">
              {universities
                .filter(uni => uni.minScore <= usatScore)
                .map((university) => (
                  <Card key={university.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="font-syne font-bold text-xl mb-1">{university.name}</h3>
                      <p className="text-light-teal mb-3">{university.city}</p>
                      <p className="text-gray-600 mb-4">{university.intro}</p>
                      <Link to={`/universities/${university.id}`}>
                        <Button className="w-full">View Details</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default UniversityFinder;
