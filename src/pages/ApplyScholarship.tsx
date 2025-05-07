
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ui/expandable-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ApplyScholarship = () => {
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6">Apply for Scholarship</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="font-syne font-semibold text-xl mb-4">Application Process</h2>
          <p className="mb-6 text-gray-700">
            To apply for the Stipendium Hungaricum scholarship, you must submit applications through <strong>both</strong> platforms:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-accent-orange hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-syne font-bold text-lg mb-3">1. Tempus Foundation Portal</h3>
                <p className="text-gray-600 mb-4">
                  The official Hungarian application platform where you'll select universities, programs, and upload documents.
                </p>
                <Link to="/apply/tempus">
                  <Button className="w-full">
                    Tempus Portal Guide
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-deep-teal hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-syne font-bold text-lg mb-3">2. HEC Portal</h3>
                <p className="text-gray-600 mb-4">
                  The Pakistani Higher Education Commission portal where you must also register for scholarship consideration.
                </p>
                <Link to="/apply/hec">
                  <Button className="w-full">
                    HEC Portal Guide
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> You must apply on both portals before the deadlines. Missing either application will disqualify you from the scholarship.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-syne font-semibold text-lg mb-4">Application Timeline</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                <div>
                  <p className="font-medium">November - December</p>
                  <p className="text-sm text-gray-600">USAT Exam registration and preparation</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                <div>
                  <p className="font-medium">January</p>
                  <p className="text-sm text-gray-600">Applications open on both portals</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                <div>
                  <p className="font-medium">Mid-January</p>
                  <p className="text-sm text-gray-600">HEC deadline (typically earlier)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                <div>
                  <p className="font-medium">End of January</p>
                  <p className="text-sm text-gray-600">Tempus deadline</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-syne font-semibold text-lg mb-4">Preparation Checklist</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                <span>Passport (valid for at least 18 months)</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                <span>Transcripts and degrees (attested)</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                <span>Passport-sized photographs</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                <span>Motivation letter draft</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                <span>USAT preparation complete</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                <span>Research on programs and universities</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/documents">
                <Button variant="outline" className="w-full">
                  <FileText size={16} className="mr-2" />
                  Document Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-syne font-semibold text-lg mb-4">Frequently Asked Questions</h3>
          
          <ExpandableSection title="Can I apply to multiple programs?">
            <p className="text-gray-700">
              Yes, you can apply to a maximum of two different programs (study programs) at Hungarian universities through the Tempus portal. These can be at the same university or at different universities.
            </p>
          </ExpandableSection>
          
          <ExpandableSection title="What language requirements are there?">
            <p className="text-gray-700">
              For English-taught programs, you typically need to demonstrate English proficiency. While some universities may accept a simple language certificate, others might require standardized tests like IELTS or TOEFL. For Hungarian-taught programs, you may need to complete a one-year preparatory Hungarian language course.
            </p>
          </ExpandableSection>
          
          <ExpandableSection title="Is there an age limit for applicants?">
            <p className="text-gray-700">
              Yes, the general age limits are:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>For Bachelor's programs: Applicants should be under 23 years of age</li>
              <li>For Master's programs: Applicants should be under 30 years of age</li>
              <li>For PhD programs: Applicants should be under 35 years of age</li>
            </ul>
            <p className="text-gray-700 mt-2">
              However, there may be exceptions based on specific circumstances.
            </p>
          </ExpandableSection>
          
          <ExpandableSection title="What if I have technical issues with the portals?">
            <p className="text-gray-700">
              For Tempus portal issues, contact: stipendiumhungaricum@tpf.hu
            </p>
            <p className="text-gray-700 mt-2">
              For HEC portal issues, contact: helpdesk@hec.gov.pk or use the technical support section on the HEC portal.
            </p>
            <p className="text-gray-700 mt-2">
              It's recommended to start your application early to allow time for resolving any technical issues before the deadlines.
            </p>
          </ExpandableSection>
        </div>
        
        <div className="bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-syne font-semibold text-lg">Ready to apply?</h3>
              <p className="text-gray-700">Start with the detailed guide for each portal</p>
            </div>
            <div className="space-x-4">
              <Link to="/apply/tempus">
                <Button>
                  Tempus Guide
                </Button>
              </Link>
              <Link to="/apply/hec">
                <Button variant="outline">
                  HEC Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyScholarship;
