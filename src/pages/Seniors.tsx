import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, User, MapPin, Award, Heart, Users } from "lucide-react";

// Mock seniors data
const seniors = [
  
  {
    id: 2,
    name: "Sabahat aly",
    picture: "/placeholder.svg", // Using placeholder
    program: "No Data",
    university: "University of Debrecen",
    yearApplied: 2024,
    currentYear: "1st Year",
    fscMarks: 50,
    usatScore: 72,
    challenges: "No Data",
    advice: "No Data",
    background: "From Haripur",
    email: null,
    whatsapp: "No Data",
    availableInGroup: true,
    isAdmin: false,
    inHungary: true
  },
  {
    id: 4,
    name: "Abdullah Saleem",
    picture: "/placeholder.svg", // Using placeholder
    program: "BBA",
    university: "University of Pecs",
    yearApplied: 2024,
    currentYear: "No Data",
    fscMarks: 50,
    usatScore: 50,
    challenges: "No Data",
    advice: "No Data",
    background: "No Data",
    email: "No Data",
    whatsapp: false,
    availableInGroup: true,
    isAdmin: false,
    inHungary: true
  },
  {
    id: 5,
    name: "Zainab Khan",
    picture: "/placeholder.svg", // Using placeholder
    program: "Computer Science",
    university: "University of Szeged",
    yearApplied: 2020,
    currentYear: "4th Year",
    fscMarks: 84,
    usatScore: 76,
    challenges: "Finding relevant internships in a smaller city",
    advice: "Szeged is an excellent city for students with lower living costs. The computer science program is good with a focus on theoretical aspects.",
    background: "IT background from Punjab University",
    email: "zainab.khan@yahoo.com",
    whatsapp: "+9256789012",
    availableInGroup: true,
    isAdmin: true,
    inHungary: true,
    adminStory: "I became an admin to help prospective students navigate the application process which I found challenging initially. My goal is to make information more accessible to Pakistani students.",
    experience: "I've been in Hungary for 4 years now and have helped over 50 students with their applications. The quality of education is excellent, and the cultural experience is invaluable.",
    timesApplied: 1
  },
  {
    id: 6,
    name: "Haseeb",
    picture: "/placeholder.svg", // Using placeholder
    program: "No Data",
    university: "No Data",
    yearApplied: 2000,
    currentYear: "No Data",
    fscMarks: 50,
    usatScore: 50,
    challenges: "No Data",
    background: "No Data",
    email: "No Data",
    whatsapp: "No Data",
    availableInGroup: true,
    isAdmin: true,
    inHungary: true,
    adminStory: "No Data",
    experience: "No Data",
    timesApplied: 1
  },
];

// Mock universities and programs for filtering
const universities = [
  "All Universities",
  "Budapest University of Technology and Economics",
  "University of Debrecen",
  "University of Szeged",
  "Corvinus University of Budapest",
  "University of Pécs"
];

const programs = [
  "All Programs",
  "Computer Science",
  "Medicine",
  "Civil Engineering",
  "Economics",
  "Mechanical Engineering",
  "International Relations"
];

const Seniors = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("All Universities");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSeniors = seniors.filter(senior => {
    // Filter by university
    if (selectedUniversity !== "All Universities" && senior.university !== selectedUniversity) {
      return false;
    }
    
    // Filter by program
    if (selectedProgram !== "All Programs" && senior.program !== selectedProgram) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !senior.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Separate admins and regular seniors
  const adminSeniors = filteredSeniors.filter(senior => senior.isAdmin);
  const regularSeniors = filteredSeniors.filter(senior => !senior.isAdmin);

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl mb-6 text-deep-teal">Seniors Section</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
          <p className="text-gray-700 mb-6">
            Connect with Pakistani students already studying in Hungary. They can provide valuable insights about universities, programs, and life in Hungary.
          </p>
          
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium mb-1">Search by Name</label>
              <Input 
                id="search"
                type="text" 
                placeholder="Search seniors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Filter by Program</label>
              <Select onValueChange={setSelectedProgram} defaultValue={selectedProgram}>
                <SelectTrigger>
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Filter by University</label>
              <Select onValueChange={setSelectedUniversity} defaultValue={selectedUniversity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select university" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map((university) => (
                    <SelectItem key={university} value={university}>{university}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Showing {filteredSeniors.length} seniors
          </p>
        </div>
        
        {/* Admin Cards */}
        {adminSeniors.length > 0 && (
          <div className="mb-10">
            <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal flex items-center">
              <Award className="h-6 w-6 mr-2 text-accent-orange" />
              Community Admins
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {adminSeniors.map((admin) => (
                <Card key={admin.id} className="overflow-hidden backdrop-blur-sm bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 p-5 border-b border-gray-100">
                        <div className="flex space-x-4">
                          <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                            {admin.picture ? (
                              <img src={admin.picture} alt={admin.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <User className="h-8 w-8" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h2 className="font-syne font-bold text-xl">{admin.name}</h2>
                            <p className="text-light-teal">{admin.program}</p>
                            <p className="text-sm text-gray-600">{admin.university}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                                {admin.currentYear}
                              </Badge>
                              <Badge variant="outline" className="bg-accent-orange/10 text-accent-orange">
                                Admin
                              </Badge>
                              <Badge variant="outline" className={admin.inHungary ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                                {admin.inHungary ? "In Hungary" : "Currently in Pakistan"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 border-b border-gray-100">
                        <div className="mb-4">
                          <p className="text-xs text-gray-500">Applied</p>
                          <div className="flex items-center">
                            <p className="font-medium">{admin.timesApplied} {admin.timesApplied === 1 ? 'time' : 'times'}</p>
                            {admin.timesApplied > 1 && (
                              <Badge className="ml-2 bg-yellow-100 text-yellow-800">Persistent</Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-500">Admin Story</p>
                          <p className="text-sm">{admin.adminStory}</p>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-500">Experience</p>
                          <p className="text-sm">{admin.experience}</p>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-gray-500">FSc Marks</p>
                            <p className="font-medium">{admin.fscMarks}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">USAT Score</p>
                            <p className="font-medium">{admin.usatScore}%</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-500">Background</p>
                          <p className="text-sm">{admin.background}</p>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-500">Advice</p>
                          <p className="text-sm">{admin.advice}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-4">
                          {admin.email && (
                            <a href={`mailto:${admin.email}`} className="flex items-center text-sm text-blue-600 hover:underline">
                              <Mail size={14} className="mr-1" /> Email
                            </a>
                          )}
                          
                          {admin.whatsapp && (
                            <a href={`https://wa.me/${admin.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-green-600 hover:underline">
                              <MessageSquare size={14} className="mr-1" /> WhatsApp
                            </a>
                          )}
                          
                          <span className="text-sm text-gray-500">
                            {admin.availableInGroup ? "Available in Group: Yes" : "Available in Group: No"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Regular Senior Cards */}
        <div>
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal flex items-center">
            <Users className="h-6 w-6 mr-2 text-accent-orange" />
            Current Students
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {regularSeniors.map((senior) => (
              <Card key={senior.id} className="overflow-hidden backdrop-blur-sm bg-white/70 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex space-x-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                          {senior.picture ? (
                            <img src={senior.picture} alt={senior.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <User className="h-8 w-8" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h2 className="font-syne font-bold text-xl">{senior.name}</h2>
                          <p className="text-light-teal">{senior.program}</p>
                          <p className="text-sm text-gray-600">{senior.university}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="bg-blue-100 text-blue-800">
                              {senior.currentYear}
                            </Badge>
                            <Badge variant="outline" className="bg-purple-100 text-purple-800">
                              Applied {senior.yearApplied}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <p className="text-xs text-gray-500">FSc Marks</p>
                          <p className="font-medium">{senior.fscMarks}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">USAT Score</p>
                          <p className="font-medium">{senior.usatScore}%</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xs text-gray-500">Background</p>
                        <p className="text-sm">{senior.background}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xs text-gray-500">Challenges Faced</p>
                        <p className="text-sm">{senior.challenges}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xs text-gray-500">Advice</p>
                        <p className="text-sm">{senior.advice}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mt-4">
                        {senior.email && (
                          <a href={`mailto:${senior.email}`} className="flex items-center text-sm text-blue-600 hover:underline">
                            <Mail size={14} className="mr-1" /> Email
                          </a>
                        )}
                        
                        {senior.whatsapp && (
                          <a href={`https://wa.me/${senior.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-green-600 hover:underline">
                            <MessageSquare size={14} className="mr-1" /> WhatsApp
                          </a>
                        )}
                        
                        <span className="text-sm text-gray-500">
                          {senior.availableInGroup ? "Available in Group: Yes" : "Available in Group: No"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {regularSeniors.length === 0 && (
            <div className="bg-white rounded-lg shadow-sm p-5 text-center">
              <p className="text-gray-700">No seniors found matching your criteria.</p>
            </div>
          )}
        </div>
        
        {/* Creator Section */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="backdrop-blur-sm bg-white/40 rounded-lg p-6 border border-gray-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-5 w-5 text-accent-orange mr-2" />
              <h2 className="font-syne font-medium text-xl">In the Eyes of the Creator</h2>
            </div>
            <p className="text-center text-gray-700 italic">
              "Created to simplify access to higher education in Hungary for Pakistani students."
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Seniors;
