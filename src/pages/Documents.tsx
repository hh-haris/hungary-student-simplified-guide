
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ui/expandable-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Documents = () => {
  // Data for document attestation
  const attestationSteps = [
    {
      title: "Step 1: Local Board/University Verification",
      description: "Get your documents verified from your local educational board or university that issued them.",
      fee: "500-1000 PKR per document",
      timeRequired: "3-7 working days",
      tips: "Carry original documents and their photocopies. Some boards require an application form."
    },
    {
      title: "Step 2: Higher Education Commission (HEC)",
      description: "Get your documents attested from HEC regional office.",
      fee: "1000 PKR per document",
      timeRequired: "5-10 working days",
      tips: "Online appointment system is available. Make sure board verification is completed first."
    },
    {
      title: "Step 3: Ministry of Foreign Affairs (MOFA)",
      description: "The final attestation step required for international recognition.",
      fee: "2000-3000 PKR per document",
      timeRequired: "7-14 working days",
      tips: "Ensure HEC attestation is completed. MOFA has strict verification procedures."
    }
  ];

  // Data for medical requirements
  const medicalTests = [
    {
      test: "Complete Blood Count (CBC)",
      purpose: "Basic health screening"
    },
    {
      test: "Chest X-Ray",
      purpose: "To rule out tuberculosis or other lung diseases"
    },
    {
      test: "HIV Test",
      purpose: "Required for long-term visa"
    },
    {
      test: "Hepatitis B & C Screening",
      purpose: "Health screening requirement"
    },
    {
      test: "General Physical Examination",
      purpose: "Overall health assessment"
    }
  ];

  // FAQs separated by category
  const generalFaqs = [
    {
      question: "Do I need to get all my educational documents attested?",
      answer: "Yes, you need attestation for all academic certificates and transcripts from SSC (Matric) until your most recent qualification."
    },
    {
      question: "Is document attestation required for both portals?",
      answer: "Yes, attested documents are required for both the Tempus and HEC applications. You'll need to upload scanned copies of the attested documents."
    },
    {
      question: "How long is the medical certificate valid?",
      answer: "Medical certificates are typically valid for 3 months from the date of issuance. Plan your medical tests accordingly before your visa application."
    },
    {
      question: "What if my documents are from different cities/boards?",
      answer: "You'll need to get them attested from their respective issuing boards first, then proceed with HEC and MOFA attestation."
    }
  ];

  const technicalFaqs = [
    {
      question: "Can I submit digital copies of medical reports?",
      answer: "No, you must submit original medical reports with the doctor's signature and seal. Most Hungarian institutions do not accept digital copies."
    },
    {
      question: "What format should my documents be in when uploading?",
      answer: "Documents should be scanned in PDF format with clear resolution (at least 300 DPI). Each file should be less than 2MB for HEC portal and 4MB for Tempus portal."
    },
    {
      question: "Do I need to translate my medical reports?",
      answer: "Yes, all medical reports should be translated into English by a certified translator if they are not already in English."
    },
    {
      question: "What if I can't complete attestation before the deadline?",
      answer: "It's crucial to start the attestation process early. If you're facing delays, contact both portals' support teams to explain your situation and request guidance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <div className="mb-6">
          <Link to="/apply" className="text-deep-teal hover:underline mb-2 inline-block">
            &larr; Back to Apply for Scholarship
          </Link>
          <h1 className="font-syne font-bold text-3xl md:text-4xl mb-2">Document Verification & Medical Requirements</h1>
          <p className="text-gray-600">
            Complete guide to preparing, attesting, and submitting all required documents for your scholarship application
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Document Attestation Process</h2>
                
                <div className="space-y-6">
                  {attestationSteps.map((step, index) => (
                    <ExpandableSection key={index} title={step.title} defaultOpen={index === 0}>
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm font-medium text-gray-500">Fee</p>
                          <p className="font-medium">{step.fee}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm font-medium text-gray-500">Time Required</p>
                          <p className="font-medium">{step.timeRequired}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{step.tips}</p>
                      </div>
                    </ExpandableSection>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-blue-800 text-center">
                    <strong>Important:</strong> Start the attestation process at least 2 months before your expected application submission date.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Medical Requirements */}
            <Card className="bg-white shadow-sm mt-8">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Medical Requirements</h2>
                
                <ExpandableSection title="Required Medical Tests" defaultOpen={true}>
                  <div className="mb-6">
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">General Information</h4>
                      <p className="text-gray-700">Medical examination must be conducted by a licensed physician. The medical certificate should be in English or translated by a certified translator.</p>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {medicalTests.map((item, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.test}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.purpose}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection title="Submission Process">
                  <ul className="space-y-2 list-disc pl-4 text-gray-700">
                    <li>Medical certificates should be submitted with your visa application</li>
                    <li>The certificate should not be older than 3 months at the time of visa application</li>
                    <li>The medical certificate must be stamped and signed by the doctor</li>
                    <li>A copy should be uploaded to the Tempus application portal as well</li>
                  </ul>
                  <div className="mt-4 bg-yellow-50 p-3 rounded-md">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Some universities may have additional medical requirements. Always check your chosen university's specific requirements.
                    </p>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection title="Finding a Medical Center">
                  <p className="text-gray-700 mb-3">
                    It's recommended to get your medical examination done at a recognized medical center or hospital. Here are some options:
                  </p>
                  <ul className="space-y-2 list-disc pl-4 text-gray-700">
                    <li>Government hospitals with international medical certificate facilities</li>
                    <li>Private hospitals that regularly provide medical certificates for visa purposes</li>
                    <li>Medical centers recommended by the Hungarian Embassy</li>
                  </ul>
                  <div className="mt-4 bg-blue-50 p-3 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Tip:</strong> Call ahead and explain that you need a medical certificate for a student visa to Hungary. This ensures they include all required tests.
                    </p>
                  </div>
                </ExpandableSection>
              </CardContent>
            </Card>
            
            {/* FAQs Section with tabs */}
            <div className="mt-8">
              <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="space-y-3">
                  {generalFaqs.map((faq, index) => (
                    <ExpandableSection key={index} title={faq.question}>
                      <p className="text-gray-700">
                        {faq.answer}
                      </p>
                    </ExpandableSection>
                  ))}
                </TabsContent>
                
                <TabsContent value="technical" className="space-y-3">
                  {technicalFaqs.map((faq, index) => (
                    <ExpandableSection key={index} title={faq.question}>
                      <p className="text-gray-700">
                        {faq.answer}
                      </p>
                    </ExpandableSection>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right Sidebar - styled like in Tempus Portal */}
          <div className="space-y-6">
            {/* Important Timeline Card */}
            <Card className="bg-white shadow-sm border-t-4 border-red-500">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Document Timeline</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Start Attestation:</span>
                    <span className="font-medium">November 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Get Medical Tests:</span>
                    <span className="font-medium">December 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Final Submission:</span>
                    <span className="font-medium text-red-600">January 2026</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-md">
                  <p className="text-sm text-red-800">
                    <strong>Note:</strong> Allow extra time for any unexpected delays in the attestation process.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Document Checklist Card */}
            <Card className="bg-white shadow-sm border-t-4 border-deep-teal">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Document Checklist</h3>
                <p className="text-gray-700 mb-4">
                  Ensure you have these documents attested:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">SSC/Matric Certificate & Transcript</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">HSSC/FSc Certificate & Transcript</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Bachelor's Degree & Transcript</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Master's Degree & Transcript (if applicable)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Medical Certificate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Next Steps Card */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Next Steps</h3>
                <p className="text-gray-700 mb-4">
                  After preparing your documents, proceed with your application on both portals:
                </p>
                <div className="space-y-3">
                  <Link to="/apply/tempus">
                    <Button variant="outline" className="w-full">
                      Tempus Portal Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/apply/hec">
                    <Button variant="outline" className="w-full">
                      HEC Portal Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link to="/visa">
                    <Button className="w-full bg-deep-teal hover:bg-deep-teal/90">
                      Visa Process Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;
