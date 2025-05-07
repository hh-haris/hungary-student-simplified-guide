
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ui/expandable-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Youtube } from "lucide-react";
import ExpandableCard from "@/components/ExpandableCard";

const TempusPortal = () => {
  // Sample motivation letters for different programs
  const motivationLetterSamples = [
    { 
      program: "Engineering", 
      title: "Electrical Engineering Sample",
      content: "As an aspiring electrical engineer from Pakistan, I have always been fascinated by the intersection of power systems and renewable energy... [Preview only]" 
    },
    { 
      program: "Medicine", 
      title: "Medical Studies Sample",
      content: "My journey towards medicine began when I witnessed the healthcare challenges in the rural areas of Pakistan... [Preview only]" 
    },
    { 
      program: "Computer Science", 
      title: "Computer Science Sample",
      content: "The rapidly evolving field of artificial intelligence and its potential to transform economies like Pakistan's has always captivated my interest... [Preview only]" 
    },
    { 
      program: "Business", 
      title: "Business Administration Sample",
      content: "Having grown up in a family business environment in Lahore, I have firsthand witnessed the transformative power of well-managed enterprises... [Preview only]" 
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How many programs can I apply to?",
      answer: "You can apply to a maximum of two study programs. These can be at the same university or at different universities in Hungary."
    },
    {
      question: "Do I need to upload a medical certificate?",
      answer: "Yes, you need to upload a medical certificate that is not older than 3 months at the time of application submission. The certificate should state that you are in good health condition and don't have any infectious diseases."
    },
    {
      question: "Can I edit my application after submission?",
      answer: "No, once you've submitted your application, you cannot edit it. Make sure to review all information carefully before final submission."
    },
    {
      question: "What if my documents are not in English or Hungarian?",
      answer: "All documents must be in English or Hungarian, or accompanied by an official translation into one of these languages. Translations must be stamped and signed by the translator or translating office."
    },
    {
      question: "How do I know my application is complete?",
      answer: "The Tempus portal will indicate if your application is complete. All required fields must be filled, and all mandatory documents must be uploaded before you can submit your application."
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
          <h1 className="font-syne font-bold text-3xl md:text-4xl mb-2">Tempus Foundation Portal</h1>
          <p className="text-gray-600">
            Step-by-step guide to completing your application on the official Hungarian scholarship portal
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div className="md:col-span-2">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Application Process</h2>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 1: Create an Account</h3>
                    <p className="text-gray-700 mb-3">
                      Visit the <a href="https://apply.stipendiumhungaricum.hu/" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:underline">Tempus Application Portal</a> and register with your email address. You'll receive a confirmation email to activate your account.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Use a professional email address and make sure to check your spam folder if you don't receive the confirmation email.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 2: Complete Your Profile</h3>
                    <p className="text-gray-700 mb-3">
                      Fill in your personal information including your name (as it appears on your passport), contact information, and identification details. Upload a passport-style photo that meets the requirements.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> Ensure your name matches exactly how it appears on your passport. Discrepancies can cause issues later with visa applications.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 3: Choose Programs</h3>
                    <p className="text-gray-700 mb-3">
                      Select up to two programs from the available options. You can filter by institution, field of study, and degree level. Research your options thoroughly before selecting.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Check the specific requirements for each program, including language requirements and additional documents needed.
                      </p>
                    </div>
                    <Link to="/university-finder">
                      <Button variant="outline" size="sm" className="mt-2">
                        Use University Finder Tool
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 4: Education History</h3>
                    <p className="text-gray-700 mb-3">
                      Enter details of your previous education, including institution names, dates attended, degrees received, and academic results. You'll need to upload scanned copies of your certificates and transcripts.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Document requirements:</strong> All educational documents must be attested and translated if not in English or Hungarian.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 5: Write Your Motivation Letter</h3>
                    <p className="text-gray-700 mb-3">
                      Craft a compelling motivation letter explaining why you want to study in Hungary, why you've chosen your specific program, and how it aligns with your career goals. This is a crucial part of your application.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Button size="sm" className="bg-deep-teal hover:bg-deep-teal/90">
                        <FileText size={16} className="mr-1" /> Guide to Writing Motivation Letters
                      </Button>
                    </div>
                  </div>
                  
                  {/* Step 6 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 6: Upload Documents</h3>
                    <p className="text-gray-700 mb-3">
                      Upload all required documents, including:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Passport copy (information page)</li>
                      <li>Educational certificates and transcripts</li>
                      <li>Motivation letter</li>
                      <li>Medical certificate</li>
                      <li>Language proficiency certificates (if applicable)</li>
                      <li>Recommendation letters (if required)</li>
                      <li>Portfolio for arts/architecture programs (if applicable)</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Format requirements:</strong> Documents should be in PDF format, clearly legible, and under the file size limit (typically 4MB per document).
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 7 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 7: Review and Submit</h3>
                    <p className="text-gray-700 mb-3">
                      Carefully review all information before submitting. The portal will indicate if any required fields are missing. Once submitted, you cannot make changes to your application.
                    </p>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Important deadline:</strong> Applications typically close around the end of January each year. Submit well before the deadline to avoid technical issues.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* YouTube Tutorial Section */}
            <div className="mt-8">
              <h2 className="font-syne font-semibold text-xl mb-4">Video Tutorial</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center rounded-lg border border-gray-200">
                <div className="text-center p-6">
                  <Youtube size={48} className="mx-auto mb-3 text-red-600" />
                  <p className="text-gray-600">Video tutorial coming soon!</p>
                  <p className="text-sm text-gray-500 mt-1">
                    A step-by-step walkthrough of the Tempus application process
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQs Section */}
            <div className="mt-8">
              <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <ExpandableSection key={index} title={faq.question}>
                    <p className="text-gray-700">{faq.answer}</p>
                  </ExpandableSection>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Deadlines Card */}
            <Card className="bg-white shadow-sm border-t-4 border-red-500">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Important Deadlines</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Application Opens:</span>
                    <span className="font-medium">Mid-November</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Submission Deadline:</span>
                    <span className="font-medium text-red-600">Mid-January</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Results Announced:</span>
                    <span className="font-medium">Early April</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-md">
                  <p className="text-sm text-red-800">
                    <strong>Note:</strong> Always check the official website for the exact dates as they may vary slightly each year.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Motivation Letter Tools */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Writing Tools</h3>
                <p className="text-gray-700 mb-4">
                  Useful resources to help you craft a compelling motivation letter:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xs font-bold">AI</span>
                    </div>
                    <span className="text-gray-700">ChatGPT (for structure and ideas)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-green-600 text-xs font-bold">G</span>
                    </div>
                    <span className="text-gray-700">Grammarly (for proofreading)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs font-bold">H</span>
                    </div>
                    <span className="text-gray-700">Hemingway Editor (for clarity)</span>
                  </li>
                </ul>
                <div className="p-3 bg-yellow-50 rounded-md">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Tools should only assist your writing. Your motivation letter must be personal and original.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Motivation Letter Samples */}
            <div>
              <h3 className="font-syne font-medium text-lg mb-3">Motivation Letter Samples</h3>
              <p className="text-gray-700 mb-4">
                Preview examples for different programs (not downloadable):
              </p>
              <div className="space-y-3">
                {motivationLetterSamples.map((sample, index) => (
                  <ExpandableCard 
                    key={index} 
                    title={sample.title}
                    initialExpanded={false}
                  >
                    <p className="text-sm text-gray-600 italic mb-2">Sample for {sample.program} students</p>
                    <div className="p-3 bg-gray-50 rounded border border-gray-200">
                      <p className="text-gray-700">{sample.content}</p>
                      <p className="text-sm text-gray-500 mt-3">
                        [This is just a preview to give you an idea of structure and content]
                      </p>
                    </div>
                  </ExpandableCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TempusPortal;
