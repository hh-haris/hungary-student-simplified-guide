
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Globe, BookOpen, Calendar, Flag, Award, AlertCircle } from "lucide-react";
import { ExpandableSectionProvider } from "@/components/ui/expandable-section";

const AlternativeScholarships = () => {
  const scholarships = [
    {
      id: "csc",
      name: "Chinese Government Scholarship (CSC)",
      country: "China",
      deadline: "January-March (varies by country)",
      funding: "Full",
      website: "https://www.campuschina.org/",
      description: "The Chinese Government Scholarship program provides full or partial funding for international students to study in China for undergraduate, master's, or doctoral degrees.",
      benefits: [
        "Tuition waiver",
        "Accommodation on campus",
        "Monthly stipend",
        "Comprehensive medical insurance"
      ],
      eligibility: [
        "Non-Chinese citizens in good health",
        "Bachelor's applicants: Under 25 with high school diploma",
        "Master's applicants: Under 35 with bachelor's degree",
        "PhD applicants: Under 40 with master's degree"
      ],
      applicationProcess: "Apply through the Chinese Embassy in Pakistan or through a Chinese university. A physical examination is required.",
      competitiveness: "high"
    },
    {
      id: "gsk",
      name: "Global Korea Scholarship (GKS)",
      country: "South Korea",
      deadline: "February-March",
      funding: "Full",
      website: "https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do",
      description: "The Global Korea Scholarship (GKS) is a Korean government scholarship program designed to attract international students to Korean universities for undergraduate and graduate studies.",
      benefits: [
        "Full tuition fee",
        "Settlement allowance",
        "Monthly stipend",
        "Research allowance",
        "Medical insurance",
        "Korean language training"
      ],
      eligibility: [
        "Non-Korean citizens with parents of non-Korean citizenship",
        "Bachelor's applicants: High school graduates under 25",
        "Master's/PhD applicants: Bachelor's/Master's degree holders under 40",
        "Good academic standing (GPA above 80%)"
      ],
      applicationProcess: "Apply through the Korean Embassy in Pakistan or directly to a designated Korean university.",
      competitiveness: "high"
    },
    {
      id: "mext",
      name: "Japanese MEXT Scholarship",
      country: "Japan",
      deadline: "April-May",
      funding: "Full",
      website: "https://www.pk.emb-japan.go.jp/itpr_en/scholarshipmext.html",
      description: "The MEXT (Ministry of Education, Culture, Sports, Science and Technology) Scholarship offers Pakistani students the opportunity to study at Japanese universities as undergraduate or graduate students.",
      benefits: [
        "Exemption from tuition fees",
        "Monthly allowance",
        "Round-trip air ticket",
        "Japanese language training"
      ],
      eligibility: [
        "Pakistani nationals in excellent academic standing",
        "Undergraduate: Age under 24, completed 12 years of education",
        "Graduate: Age under 35, bachelor's degree or equivalent",
        "Good Japanese or English language skills"
      ],
      applicationProcess: "Apply through the Embassy of Japan in Pakistan. Selection includes written exams and interviews.",
      competitiveness: "very high"
    },
    {
      id: "opendoors",
      name: "Open Doors: Russia Scholarship Project",
      country: "Russia",
      deadline: "December-January",
      funding: "Full",
      website: "https://od.globaluni.ru/en/",
      description: "The Open Doors Russian Scholarship Project is an international competition for prospective master's and doctoral students. Winners are granted free tuition at leading Russian universities.",
      benefits: [
        "Tuition-free study at top Russian universities",
        "Option to study in English or Russian",
        "Opportunity for monthly stipend (at some universities)"
      ],
      eligibility: [
        "Foreign citizens or stateless persons",
        "Bachelor's degree (for master's programs)",
        "Master's degree (for PhD programs)",
        "No age restrictions"
      ],
      applicationProcess: "Two-stage online competition: portfolio submission and online testing.",
      competitiveness: "medium"
    },
    {
      id: "turkiye",
      name: "Türkiye Scholarships",
      country: "Türkiye",
      deadline: "January-February",
      funding: "Full",
      website: "https://www.turkiyeburslari.gov.tr/",
      description: "Türkiye Scholarships is a government-funded, competitive scholarship program for international students to pursue undergraduate and postgraduate studies at Turkish universities.",
      benefits: [
        "Full tuition coverage",
        "Monthly stipend",
        "Accommodation support",
        "Health insurance",
        "Turkish language course",
        "Air tickets"
      ],
      eligibility: [
        "International students with strong academic backgrounds",
        "Undergraduate: Minimum 70% in high school",
        "Postgraduate: Minimum 75% in previous degree",
        "Age limits: Undergraduate (under 21), Master's (under 30), PhD (under 35)"
      ],
      applicationProcess: "Online application through the Türkiye Scholarships website.",
      competitiveness: "high"
    },
    {
      id: "fulbright",
      name: "Fulbright Foreign Student Program",
      country: "United States",
      deadline: "May-June",
      funding: "Full",
      website: "https://pk.usembassy.gov/education-culture/programs/fulbright-program/",
      description: "The Fulbright Program offers grants for Pakistani students to pursue master's or PhD studies in the United States. It's highly competitive and prestigious.",
      benefits: [
        "Tuition fees",
        "Living stipend",
        "Health insurance",
        "Round-trip airfare"
      ],
      eligibility: [
        "Pakistani citizens residing in Pakistan",
        "Minimum 16 years of education with excellent academic record",
        "Strong English language skills",
        "Leadership potential"
      ],
      applicationProcess: "Apply through the USEFP (United States Educational Foundation in Pakistan). Selection includes tests and interviews.",
      competitiveness: "very high"
    }
  ];

  const competitivenessColor = (level: string) => {
    switch (level) {
      case "very high":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <ExpandableSectionProvider>
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
          <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6 text-deep-teal">Alternative Scholarship Opportunities</h1>
          
          <div className="mb-8">
            <p className="text-gray-700">
              While the Stipendium Hungaricum scholarship is an excellent opportunity, it's always good to explore additional options. 
              Here are other prestigious international scholarship programs available to Pakistani students.
            </p>
            
            <div className="mt-6 p-5 bg-yellow-50 border border-yellow-100 rounded-lg flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-syne font-medium text-lg text-yellow-800 mb-1">Important Note</h3>
                <p className="text-yellow-700">
                  These scholarships are highly competitive. We recommend applying to multiple programs to increase your chances 
                  of studying abroad. Each scholarship has different requirements and deadlines, so start preparing early.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {scholarships.map((scholarship) => (
              <Card key={scholarship.id} className="backdrop-blur-sm bg-white/70 border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-deep-teal text-white">{scholarship.country}</Badge>
                      <Badge className={competitivenessColor(scholarship.competitiveness)}>
                        {scholarship.competitiveness.charAt(0).toUpperCase() + scholarship.competitiveness.slice(1)} Competition
                      </Badge>
                      {scholarship.funding === "Full" && (
                        <Badge className="bg-green-100 text-green-800">Fully Funded</Badge>
                      )}
                    </div>
                    
                    <h2 className="font-syne font-bold text-xl mb-2 text-deep-teal">{scholarship.name}</h2>
                    <p className="text-gray-700 mb-4">{scholarship.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-accent-orange" />
                      <span>Application Deadline: {scholarship.deadline}</span>
                    </div>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full mt-2 border-deep-teal text-deep-teal hover:bg-deep-teal/10"
                    >
                      <a href={scholarship.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Globe className="h-4 w-4 mr-2" />
                        Visit Official Website
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-syne font-medium text-lg mb-2 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-accent-orange" />
                        Benefits
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {scholarship.benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-700">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-syne font-medium text-lg mb-2 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-accent-orange" />
                        Eligibility
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {scholarship.eligibility.map((criterion, index) => (
                          <li key={index} className="text-gray-700">{criterion}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-syne font-semibold text-lg">Want Personalized Guidance?</h3>
                <p className="text-gray-700">Connect with seniors who have successfully applied to these programs</p>
              </div>
              <Button asChild className="bg-deep-teal hover:bg-deep-teal/90 text-white whitespace-nowrap">
                <Link to="/seniors">Connect with Seniors</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ExpandableSectionProvider>
  );
};

export default AlternativeScholarships;
