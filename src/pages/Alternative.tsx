
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ExpandableSectionProvider } from "@/components/ui/expandable-section";
import ExpandableSection from "@/components/ui/expandable-section";

const Alternative = () => {
  const scholarships = [
    {
      name: "Erasmus+ Scholarship",
      country: "European Union",
      description: "Erasmus+ is the EU's program to support education, training, youth and sport in Europe. It offers mobility and cooperation opportunities in higher education, vocational training, and adult education.",
      eligibility: [
        "Currently enrolled in a higher education institution",
        "Completed at least one year of higher education studies",
        "Partner universities have bilateral agreements",
        "Selection based on academic performance and motivation"
      ],
      benefits: [
        "Monthly stipend between €800-€900",
        "Travel grant based on distance",
        "No tuition fees at the host institution",
        "Academic recognition of studies abroad"
      ],
      deadline: "Varies by university, typically February/March for the upcoming academic year",
      link: "https://erasmus-plus.ec.europa.eu/"
    },
    {
      name: "DAAD Scholarships",
      country: "Germany",
      description: "The German Academic Exchange Service (DAAD) offers scholarships for international students to pursue studies, research, and internships in Germany.",
      eligibility: [
        "Bachelor's, Master's, or PhD degree holders",
        "Excellent academic record",
        "Language proficiency in German or English depending on the program",
        "Some programs require work experience"
      ],
      benefits: [
        "Monthly stipend between €850-€1,200",
        "Health insurance, travel subsidy",
        "Study and research allowance",
        "Preliminary language course if necessary"
      ],
      deadline: "October to December for the following academic year",
      link: "https://www.daad.de/en/"
    },
    {
      name: "Fulbright Program",
      country: "United States",
      description: "The Fulbright Program offers grants for graduate study, research, and teaching internationally. It aims to increase mutual understanding between people of the United States and other countries.",
      eligibility: [
        "Bachelor's degree minimum",
        "Proficient English skills",
        "Excellent academic or professional record",
        "Country-specific requirements may apply"
      ],
      benefits: [
        "Tuition fees coverage",
        "Living stipend for duration of grant",
        "Health insurance",
        "Travel costs"
      ],
      deadline: "February-October depending on country",
      link: "https://foreign.fulbrightonline.org/"
    },
    {
      name: "Chevening Scholarships",
      country: "United Kingdom",
      description: "Chevening is the UK government's international scholarships program funded by the Foreign, Commonwealth and Development Office and partner organizations.",
      eligibility: [
        "Bachelor's degree",
        "At least 2 years of work experience",
        "Return to home country for minimum 2 years after study",
        "Apply to three different eligible UK university courses"
      ],
      benefits: [
        "Full tuition fees",
        "Monthly living allowance",
        "Return flight to the UK",
        "Additional grants and allowances"
      ],
      deadline: "November for the following academic year",
      link: "https://www.chevening.org/"
    }
  ];

  return (
    <ExpandableSectionProvider>
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
          <h1 className="font-syne font-bold text-3xl mb-4">Alternative Scholarships</h1>
          <p className="text-gray-700 mb-8">
            Beyond the Stipendium Hungaricum program, there are many other prestigious scholarship opportunities
            available for international students. Explore these alternatives to broaden your educational horizons.
          </p>

          <div className="space-y-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-5 border-b border-gray-100">
                    <h2 className="font-syne font-bold text-xl mb-1">{scholarship.name}</h2>
                    <p className="text-accent-orange font-medium mb-3">{scholarship.country}</p>
                    <p className="text-gray-700">{scholarship.description}</p>
                  </div>
                  
                  <div className="px-5">
                    <ExpandableSection title="Eligibility & Requirements">
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {scholarship.eligibility.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </ExpandableSection>
                    
                    <ExpandableSection title="Benefits">
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {scholarship.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </ExpandableSection>
                  </div>
                  
                  <div className="p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-gray-50">
                    <div>
                      <p className="font-medium">Application Deadline:</p>
                      <p className="text-gray-700">{scholarship.deadline}</p>
                    </div>
                    <Button 
                      className="bg-deep-teal hover:bg-deep-teal/90 flex items-center gap-1"
                      onClick={() => window.open(scholarship.link, "_blank")}
                    >
                      Official Website <ExternalLink size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 p-6 rounded-lg">
            <h2 className="font-syne font-semibold text-xl mb-4">Application Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Apply to multiple scholarships to increase your chances</li>
              <li>Start preparing application documents 3-6 months before deadlines</li>
              <li>Tailor your motivation letter for each scholarship program</li>
              <li>Request recommendation letters well in advance</li>
              <li>Thoroughly research the institution and program before applying</li>
              <li>Take language proficiency tests (IELTS, TOEFL, etc.) with ample preparation time</li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </ExpandableSectionProvider>
  );
};

export default Alternative;
