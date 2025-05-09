
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Download, MapPin } from "lucide-react";

// Mock universities data
const universities = [
  {
    id: "1",
    name: "Budapest University of Technology and Economics",
    city: "budapest",
    cityName: "Budapest",
    intro: "Leading technical university in Hungary with strong engineering and IT programs.",
    fullDescription: "The Budapest University of Technology and Economics (BME) is Hungary's oldest technical university founded in 1782. It offers programs in engineering, IT, natural sciences, economics, and business.",
    minScore: 75,
    website: "https://www.bme.hu/?language=en",
    writtenTest: "Not required for most programs, but some engineering specializations may require a written test depending on your background.",
    interviewDetails: "30-minute online interview focusing on motivation and basic subject knowledge. Usually held between March and April.",
    difficulty: "Medium",
    hasPastPapers: true,
    requiresIELTS: false,
    ieltScore: "Not required, but B2 level English proficiency is expected",
    documentsRequired: [
      "High School Transcripts",
      "Bachelor's Degree (for Master's applicants)",
      "Motivation Letter",
      "Recommendation Letters (2)",
      "CV",
      "Medical Certificate",
      "English Proficiency Certificate"
    ],
    studentExperience: [
      "Strong academic environment with challenging courses",
      "Excellent facilities especially for engineering students",
      "Vibrant international student community",
      "Good career opportunities after graduation"
    ],
    interviewQuestions: {
      "Computer Science": [
        "What programming languages are you familiar with?",
        "Explain a project you've worked on",
        "Basic questions about data structures and algorithms"
      ],
      "Mechanical Engineering": [
        "Questions about mechanics and thermodynamics",
        "Your experience with CAD software",
        "Why did you choose mechanical engineering?"
      ],
      "Civil Engineering": [
        "Basic knowledge of structural systems",
        "Questions about materials science",
        "Previous experience with construction projects"
      ]
    },
    faqs: [
      {
        question: "Is accommodation provided by the university?",
        answer: "Yes, international students are prioritized for on-campus dormitory places. The monthly cost is approximately €130-180."
      },
      {
        question: "What is the language of instruction?",
        answer: "Most international programs are taught in English. However, some programs may require Hungarian language proficiency."
      },
      {
        question: "What is the scholarship amount?",
        answer: "Stipendium Hungaricum provides full tuition waiver, monthly stipend of 43,700 HUF for bachelor's students, 46,000 HUF for master's, and 50,000 HUF for doctoral students, plus accommodation contribution and health insurance."
      }
    ],
    seniorNote: "BME has a strong history of Pakistani students excelling in engineering fields. The university provides good support for international students, but be prepared for a rigorous academic environment."
  },
  {
    id: "2",
    name: "University of Debrecen",
    city: "debrecen",
    cityName: "Debrecen",
    intro: "One of the largest universities with comprehensive programs including medical sciences.",
    fullDescription: "The University of Debrecen is one of the most prestigious and largest universities in Hungary, with over 30,000 students including 6,000 international students from over 115 countries. It is especially known for its medical and agricultural programs.",
    minScore: 70,
    website: "https://unideb.hu/en",
    writtenTest: "Medical programs require an entrance exam. Most other programs evaluate based on documents only.",
    interviewDetails: "20-30 minute online interview focusing on academic background and motivation. Medical program interviews are more extensive and subject-focused.",
    difficulty: "Medium to High (especially for medical programs)",
    hasPastPapers: true,
    requiresIELTS: true,
    ieltScore: "Minimum 6.0 for most programs, 6.5 for medical programs",
    documentsRequired: [
      "Academic Records",
      "Transcript of Records",
      "Motivation Letter",
      "CV",
      "Health Certificate",
      "English Proficiency Certificate",
      "Passport Copy"
    ],
    studentExperience: [
      "Strong medical and health science programs",
      "More affordable living costs compared to Budapest",
      "Friendly environment for international students",
      "Growing Pakistani student community"
    ],
    interviewQuestions: {
      "Medicine": [
        "Basic questions on biology, chemistry, and anatomy",
        "Why do you want to become a doctor?",
        "How do you handle stress and long working hours?"
      ],
      "Economics": [
        "Basic economic concepts",
        "Current economic issues in your country",
        "Your career goals"
      ],
      "Computer Science": [
        "Programming concepts and experience",
        "Problem-solving approach",
        "Technical projects you've worked on"
      ]
    },
    faqs: [
      {
        question: "How competitive is admission to the medical program?",
        answer: "The medical program is highly competitive, with an acceptance rate of around 30-40% for Stipendium Hungaricum applicants."
      },
      {
        question: "Are there any preparation courses available?",
        answer: "Yes, the university offers preparatory courses for medical programs, which can be beneficial for improving your chances."
      },
      {
        question: "Is knowledge of Hungarian required?",
        answer: "Not for English-taught programs, but the university offers Hungarian language courses to help with daily life in Debrecen."
      }
    ],
    seniorNote: "Debrecen is an excellent choice for medical studies. The program is challenging but rewarding, with good clinical exposure. Non-medical programs also maintain high standards with modern facilities."
  },
  {
    id: "3",
    name: "University of Szeged",
    city: "szeged",
    cityName: "Szeged",
    intro: "Prestigious university with strong research focus and diverse academic programs.",
    fullDescription: "The University of Szeged is consistently ranked as one of the top universities in Hungary, known for its strong research output and quality education. It offers a wide range of programs across various disciplines.",
    minScore: 72,
    website: "https://u-szeged.hu/english",
    writtenTest: "Not required for most programs. Document-based admission is the norm.",
    interviewDetails: "Approximately 15-20 minute online interview. Focus on motivation and basic subject knowledge.",
    difficulty: "Easy to Medium",
    hasPastPapers: false,
    requiresIELTS: true,
    ieltScore: "Minimum 5.5 for most programs, 6.0 for specialized programs",
    documentsRequired: [
      "Bachelor's Degree Certificate",
      "Transcript of Records",
      "CV/Resume",
      "Motivation Letter",
      "Passport Copy",
      "English Proficiency Certificate"
    ],
    studentExperience: [
      "Student-friendly city with lower cost of living",
      "Supportive academic environment",
      "Good quality of education with reasonable workload",
      "Active international student community"
    ],
    interviewQuestions: {
      "Computer Science": [
        "Background in programming languages",
        "Knowledge of basic algorithms",
        "Why Szeged for Computer Science?"
      ],
      "Business Administration": [
        "Basic business concepts",
        "Your understanding of management principles",
        "Career aspirations"
      ],
      "Biology": [
        "Basic biological concepts",
        "Laboratory experience",
        "Research interests"
      ]
    },
    faqs: [
      {
        question: "How is student life in Szeged?",
        answer: "Szeged is known as a university town with vibrant student life. It's smaller than Budapest but offers all necessary amenities with a more relaxed atmosphere."
      },
      {
        question: "Are there any research opportunities for students?",
        answer: "Yes, the University of Szeged has a strong research focus and encourages student participation in research projects."
      },
      {
        question: "What support services are available for international students?",
        answer: "The university has an International Office that provides comprehensive support including orientation, administrative help, and cultural programs."
      }
    ],
    seniorNote: "Szeged offers a good balance of quality education and comfortable student life. The city is affordable and the university environment is supportive for international students."
  }
];

const UniversityDetail = () => {
  const { universityId } = useParams<{ universityId: string }>();
  const [activeTab, setActiveTab] = useState("info");
  const [selectedProgram, setSelectedProgram] = useState("Computer Science");

  const university = universities.find(uni => uni.id === universityId);

  if (!university) {
    return (
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h1 className="font-syne font-bold text-2xl mb-4">University Not Found</h1>
            <p className="mb-4">Sorry, we couldn't find information about this university.</p>
            <Button asChild>
              <Link to="/university-finder">Back to University Finder</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const difficultyColor = {
    "Easy": "bg-green-100 text-green-800",
    "Medium": "bg-amber-100 text-amber-800",
    "High": "bg-red-100 text-red-800",
    "Medium to High": "bg-amber-100 text-amber-800",
    "Easy to Medium": "bg-emerald-100 text-emerald-800"
  };

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <div className="mb-4">
          <Link to="/university-finder" className="text-deep-teal hover:underline inline-flex items-center mb-2">
            <MapPin size={16} className="mr-1" /> Back to University Finder
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
          <h1 className="font-syne font-bold text-2xl md:text-3xl mb-2">{university.name}</h1>
          <div className="flex items-center text-light-teal mb-4">
            <MapPin size={18} className="mr-1" />
            <Link to={`/city/${university.city}`} className="hover:underline">
              {university.cityName}
            </Link>
          </div>
          <p className="text-gray-700 mb-6">{university.fullDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className={difficultyColor[university.difficulty as keyof typeof difficultyColor]}>
              Difficulty: {university.difficulty}
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">
              Min USAT: {university.minScore}%
            </Badge>
            {university.requiresIELTS && (
              <Badge variant="outline" className="bg-purple-100 text-purple-800">
                IELTS: {university.ieltScore}
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild className="bg-accent-orange hover:bg-accent-orange/90">
              <a href={university.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink size={16} className="mr-1" /> Official Website
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to={`/city/${university.city}`} className="flex items-center">
                <MapPin size={16} className="mr-1" /> Explore {university.cityName}
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <Link to="/apply" className="inline-flex items-center justify-center text-white bg-deep-teal py-2 px-4 rounded-md hover:bg-deep-teal/90 transition-colors mr-2">
            Apply for Scholarship
          </Link>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="prepare">Prepare</TabsTrigger>
            <TabsTrigger value="interview">Interview</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <ExpandableCard title="Documents Required">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select Program</label>
                    <select 
                      className="w-full md:w-auto border border-gray-300 rounded-md p-2"
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                    >
                      {Object.keys(university.interviewQuestions).map(program => (
                        <option key={program} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    {university.documentsRequired.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                  {university.requiresIELTS && (
                    <div className="mt-2 p-2 bg-purple-50 rounded">
                      <p className="text-sm text-purple-800">
                        <strong>Note:</strong> This program requires IELTS with a minimum score of {university.ieltScore}
                      </p>
                    </div>
                  )}
                </ExpandableCard>
                
                <ExpandableCard title="FAQs">
                  <div className="space-y-4">
                    {university.faqs.map((faq, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-deep-teal">{faq.question}</h4>
                        <p className="text-gray-700 mt-1">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </ExpandableCard>
                
                <ExpandableCard title="Senior's Note">
                  <p className="text-gray-700">{university.seniorNote}</p>
                </ExpandableCard>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="prepare" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <ExpandableCard title="Written Test Information">
                  <p className="text-gray-700">{university.writtenTest}</p>
                </ExpandableCard>
                
                <ExpandableCard title="Interview Details">
                  <p className="text-gray-700">{university.interviewDetails}</p>
                </ExpandableCard>
                
                {university.hasPastPapers && (
                  <ExpandableCard title="Past Papers">
                    <Button variant="outline" className="flex items-center">
                      <Download size={16} className="mr-1" /> Download Past Papers
                    </Button>
                  </ExpandableCard>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="interview" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Filter by Program</label>
                  <select 
                    className="w-full md:w-auto border border-gray-300 rounded-md p-2"
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                  >
                    {Object.keys(university.interviewQuestions).map(program => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                  <h3 className="font-syne font-semibold mb-3">Common Interview Questions for {selectedProgram}</h3>
                  <ul className="list-disc pl-6">
                    {university.interviewQuestions[selectedProgram as keyof typeof university.interviewQuestions]?.map((question, i) => (
                      <li key={i} className="mb-2">{question}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                  <h3 className="font-syne font-semibold mb-3">🇵🇰 Pakistani Students' Experience</h3>
                  <ul className="list-disc pl-6">
                    {university.studentExperience.map((exp, i) => (
                      <li key={i} className="mb-2">{exp}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityDetail;
