
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import DocumentAttestation from "@/components/documents/DocumentAttestation";
import MedicalRequirements from "@/components/documents/MedicalRequirements";
import DocumentFAQs from "@/components/documents/DocumentFAQs";
import DocumentSidebar from "@/components/documents/DocumentSidebar";

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
    { test: "Complete Blood Count (CBC)", purpose: "Basic health screening" },
    { test: "Chest X-Ray", purpose: "To rule out tuberculosis or other lung diseases" },
    { test: "HIV Test", purpose: "Required for long-term visa" },
    { test: "Hepatitis B & C Screening", purpose: "Health screening requirement" },
    { test: "General Physical Examination", purpose: "Overall health assessment" }
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
                <DocumentAttestation steps={attestationSteps} />
              </CardContent>
            </Card>
            
            {/* Medical Requirements */}
            <Card className="bg-white shadow-sm mt-8">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Medical Requirements</h2>
                <MedicalRequirements medicalTests={medicalTests} />
              </CardContent>
            </Card>
            
            {/* FAQs Section with tabs */}
            <div className="mt-8">
              <DocumentFAQs generalFaqs={generalFaqs} technicalFaqs={technicalFaqs} />
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div>
            <DocumentSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;
