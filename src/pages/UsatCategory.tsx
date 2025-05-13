
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableSection, { ExpandableSectionProvider } from "@/components/ui/expandable-section";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubjectSyllabus from "@/components/SubjectSyllabus";
import { ExternalLink } from "lucide-react";

const UsatCategory = () => {
  const { category } = useParams();
  const [activeResourceTab, setActiveResourceTab] = useState("notes");
  
  // Format the category name for display
  const formatCategoryName = (cat: string | undefined) => {
    if (!cat) return "";
    
    return cat
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  
  const categoryName = formatCategoryName(category);

  // Mock data for syllabus topics with MCQs
  const syllabusTopics = [
    { 
      title: "Mathematics", 
      content: "Algebra, Calculus, Geometry, Trigonometry, Vectors",
      mcqCount: 30,
      subtopics: [
        { name: "Algebra", mcqCount: 10 },
        { name: "Calculus", mcqCount: 8 },
        { name: "Geometry", mcqCount: 7 },
        { name: "Trigonometry", mcqCount: 3 },
        { name: "Vectors", mcqCount: 2 }
      ]
    },
    { 
      title: "Physics", 
      content: "Mechanics, Thermodynamics, Electromagnetism, Modern Physics",
      mcqCount: 25,
      subtopics: [
        { name: "Mechanics", mcqCount: 8 },
        { name: "Thermodynamics", mcqCount: 6 },
        { name: "Electromagnetism", mcqCount: 7 },
        { name: "Modern Physics", mcqCount: 4 }
      ]
    },
    { 
      title: "English", 
      content: "Reading Comprehension, Vocabulary, Grammar, Writing Skills",
      mcqCount: 30,
      subtopics: [
        { name: "Reading Comprehension", mcqCount: 10 },
        { name: "Vocabulary", mcqCount: 10 },
        { name: "Grammar", mcqCount: 7 },
        { name: "Writing Skills", mcqCount: 3 }
      ]
    },
    { 
      title: "Computer Science", 
      content: "Programming Basics, Data Structures, Algorithms",
      mcqCount: 15,
      subtopics: [
        { name: "Programming Basics", mcqCount: 6 },
        { name: "Data Structures", mcqCount: 5 },
        { name: "Algorithms", mcqCount: 4 }
      ]
    }
  ];

  // Mock data for downloadable resources
  const pastPapers = [
    { title: "Mathematics", url: "#" },
    { title: "Physics", url: "#" },
    { title: "English", url: "#" },
    { title: "Subject Knowledge", url: "#" }
  ];

  const studyNotes = [
    { title: "Complete Study Guide", url: "#" },
    { title: "Formula Sheet", url: "#" }
  ];

  // Mock data for recommended resources
  const youtubeChannels = [
    { name: "Khan Academy", url: "https://www.youtube.com/c/khanacademy" },
    { name: "MIT OpenCourseWare", url: "https://www.youtube.com/c/mitocw" },
    { name: "Crash Course", url: "https://www.youtube.com/c/crashcourse" }
  ];

  const websites = [
    { name: "Brilliant.org", url: "https://brilliant.org" },
    { name: "Paul's Online Math Notes", url: "https://tutorial.math.lamar.edu" },
    { name: "Varsity Tutors", url: "https://www.varsitytutors.com" }
  ];

  return (
    <ExpandableSectionProvider>
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
          <h1 className="font-syne font-bold text-3xl mb-2">USAT {categoryName}</h1>
          <p className="text-gray-600 mb-4">Comprehensive guide and resources for USAT {categoryName} preparation.</p>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
            <p className="text-sm text-amber-800">
              <strong>Disclaimer:</strong> You can take any USAT except if you are a medical student, but it is recommended to take the same USAT category you have studied in FSc to avoid any risk.
            </p>
          </div>

          <section className="mb-10">
            <ExpandableSection title="Structure & Format" defaultOpen={false}>
              <div className="p-5">
                <p className="mb-4">The USAT {categoryName} exam consists of multiple-choice questions testing your knowledge in subject-specific areas and English proficiency.</p>
                
                <div className="mb-4">
                  <h3 className="font-syne font-semibold text-lg mb-2">Exam Details:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Duration: <span className="font-medium">180 minutes</span></li>
                    <li>Total Questions: <span className="font-medium">100</span></li>
                    <li>Format: <span className="font-medium">Online, Multiple Choice</span></li>
                    <li>Passing Score: <span className="font-medium">70% (70/100)</span></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-syne font-semibold text-lg mb-2">Section Breakdown:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Subject Knowledge: <span className="font-medium">70%</span></li>
                    <li>English Proficiency: <span className="font-medium">30%</span></li>
                  </ul>
                </div>
              </div>
            </ExpandableSection>
          </section>
          
          <section className="mb-10">
            <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Syllabus & Topics</h2>
            <div className="space-y-4">
              {syllabusTopics.map((topic, index) => (
                <SubjectSyllabus 
                  key={index} 
                  subject={topic.title} 
                  topics={[{
                    name: topic.content,
                    mcqCount: topic.mcqCount,
                    subtopics: topic.subtopics
                  }]} 
                />
              ))}
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Downloadable Resources</h2>
            <Tabs defaultValue="notes" className="w-full" onValueChange={setActiveResourceTab}>
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="notes">Notes & Guides</TabsTrigger>
                <TabsTrigger value="papers">Past Papers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="notes" className="space-y-4">
                {studyNotes.map((note, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                    <h3 className="font-syne font-semibold">{note.title}</h3>
                    <Button className="bg-deep-teal">Download PDF</Button>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="papers" className="space-y-4">
                {pastPapers.map((paper, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                    <h3 className="font-syne font-semibold">{paper.title} Paper</h3>
                    <Button className="bg-deep-teal">Download PDF</Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </section>
          
          <section className="mb-10">
            <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Recommended Resources</h2>
            <div className="space-y-3">
              <ExpandableSection title="YouTube Channels">
                <ul className="divide-y divide-gray-100">
                  {youtubeChannels.map((channel, index) => (
                    <li key={index} className="py-2">
                      <a 
                        href={channel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-deep-teal hover:underline"
                      >
                        {channel.name}
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </li>
                  ))}
                </ul>
              </ExpandableSection>
              
              <ExpandableSection title="Websites">
                <ul className="divide-y divide-gray-100">
                  {websites.map((site, index) => (
                    <li key={index} className="py-2">
                      <a 
                        href={site.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-deep-teal hover:underline"
                      >
                        {site.name}
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </li>
                  ))}
                </ul>
              </ExpandableSection>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ExpandableSectionProvider>
  );
};

export default UsatCategory;
