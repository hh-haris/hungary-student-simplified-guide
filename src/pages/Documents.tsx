
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const Documents = () => {
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

  const faqs = [
    {
      question: "Do I need to get all my educational documents attested?",
      answer: "Yes, you need attestation for all academic certificates and transcripts from SSC (Matric) until your most recent qualification."
    },
    {
      question: "Can I submit digital copies of medical reports?",
      answer: "No, you must submit original medical reports with the doctor's signature and seal. Most Hungarian institutions do not accept digital copies."
    },
    {
      question: "How long is the medical certificate valid?",
      answer: "Medical certificates are typically valid for 3 months from the date of issuance. Plan your medical tests accordingly before your visa application."
    },
    {
      question: "What if my documents are from different cities/boards?",
      answer: "You'll need to get them attested from their respective issuing boards first, then proceed with HEC and MOFA attestation."
    },
    {
      question: "Do I need to translate my medical reports?",
      answer: "Yes, all medical reports should be translated into English by a certified translator if they are not already in English."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6 text-deep-teal">Document Verification & Medical Requirements</h1>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6">Document Attestation Process</h2>
          
          <div className="space-y-6">
            {attestationSteps.map((step, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/70 border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-deep-teal/10 to-transparent p-4 border-b border-gray-100">
                    <h3 className="font-syne font-bold text-lg text-deep-teal">{step.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-gray-700">{step.description}</p>
                    
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-blue-800 text-center">
              <strong>Important:</strong> Start the attestation process at least 2 months before your expected application submission date.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6">Medical Requirements</h2>
          
          <Card className="backdrop-blur-sm bg-white/70 border border-gray-100 overflow-hidden shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-syne font-semibold text-lg mb-4">Required Medical Tests</h3>
              
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
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Submission Process</h4>
                <ul className="space-y-2 list-disc pl-4 text-gray-700">
                  <li>Medical certificates should be submitted with your visa application</li>
                  <li>The certificate should not be older than 3 months at the time of visa application</li>
                  <li>The medical certificate must be stamped and signed by the doctor</li>
                  <li>A copy should be uploaded to the Tempus application portal as well</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ExpandableCard key={index} title={faq.question} initialExpanded={index === 0}>
                <p className="text-gray-700">{faq.answer}</p>
              </ExpandableCard>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-syne font-semibold text-lg">Next Step: Visa Process</h3>
              <p className="text-gray-700">Learn about the visa application process after document verification</p>
            </div>
            <Button asChild className="bg-deep-teal hover:bg-deep-teal/90 text-white">
              <Link to="/visa">
                Visa Process Guide <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;
