
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
      deadline: "No Data",
      funding: "Full",
      website: "nodata",
      description: "No Data",
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
      id: "opendoors",
      name: "Open Doors: Russia Scholarship Project",
      country: "Russia",
      deadline: "No Data",
      funding: "Full",
      website: "https://od.globaluni.ru/en/",
      description: "No Data",
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
                  Although there are many undergraduate scholarships like GKS, MEXT, Türkiye Bursları, Azerbaijan, and Singapore, I understand the struggle of having average FSc marks. That’s why I won’t list scholarships that require very high scores. Below are two options that are more accessible—and if I find more, I’ll be sure to add them.
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
