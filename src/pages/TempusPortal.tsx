
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ui/expandable-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TempusPortal = () => {
  // FAQ data
  const generalFaqs = [
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
    }
  ];
  
  const technicalFaqs = [
    {
      question: "What if my documents are not in English or Hungarian?",
      answer: "All documents must be in English or Hungarian, or accompanied by an official translation into one of these languages. Translations must be stamped and signed by the translator or translating office."
    },
    {
      question: "How do I know my application is complete?",
      answer: "The Tempus portal will indicate if your application is complete. All required fields must be filled, and all mandatory documents must be uploaded before you can submit your application."
    },
    {
      question: "What if I can't upload a document due to size restrictions?",
      answer: "Try compressing the PDF file or splitting it into multiple files if allowed. The maximum file size is typically 4MB per document."
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
                  <ExpandableSection title="Step 1: Create an Account" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Visit the <a href="https://apply.stipendiumhungaricum.hu/" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:underline">Tempus Application Portal</a> and register with your email address. You'll receive a confirmation email to activate your account.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Use a professional email address and make sure to check your spam folder if you don't receive the confirmation email.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 2 */}
                  <ExpandableSection title="Step 2: Complete Your Profile" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Fill in your personal information including your name (as it appears on your passport), contact information, and identification details. Upload a passport-style photo that meets the requirements.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Enter your personal details exactly as they appear on your passport</li>
                      <li>Use a professional email that you check regularly</li>
                      <li>Upload a recent passport-style photo (3-6 months old)</li>
                      <li>Verify all information before proceeding</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> Ensure your name matches exactly how it appears on your passport. Discrepancies can cause issues later with visa applications.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 3 */}
                  <ExpandableSection title="Step 3: Choose Programs" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Select up to two programs from the available options. You can filter by institution, field of study, and degree level.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Research program requirements before selecting</li>
                      <li>Consider language requirements for each program</li>
                      <li>Check admission requirements carefully</li>
                      <li>Prioritize your choices (first and second preference)</li>
                    </ul>
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
                  </ExpandableSection>
                  
                  {/* Step 4 */}
                  <ExpandableSection title="Step 4: Education History" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Enter details of your previous education, including institution names, dates attended, degrees received, and academic results.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Enter all educational qualifications chronologically</li>
                      <li>Upload scanned copies of certificates and transcripts</li>
                      <li>Make sure all documents are properly attested</li>
                      <li>Calculate and enter correct GPAs or percentage equivalents</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Document requirements:</strong> All educational documents must be attested and translated if not in English or Hungarian.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 5 */}
                  <ExpandableSection title="Step 5: Write Your Motivation Letter" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Craft a compelling motivation letter explaining why you want to study in Hungary, why you've chosen your specific program, and how it aligns with your career goals.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Personalize your letter for each program</li>
                      <li>Include your academic and career goals</li>
                      <li>Explain why you chose Hungary and the specific university</li>
                      <li>Keep it concise (1-2 pages) and professional</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Link to="/letter-of-motivation">
                        <Button size="sm" className="bg-deep-teal hover:bg-deep-teal/90">
                          <FileText size={16} className="mr-1" /> Comprehensive Motivation Letter Guide
                        </Button>
                      </Link>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 6 */}
                  <ExpandableSection title="Step 6: Upload Documents" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Upload all required documents:
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
                  </ExpandableSection>
                  
                  {/* Step 7 */}
                  <ExpandableSection title="Step 7: Review and Submit" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Carefully review all information before submitting. The portal will indicate if any required fields are missing.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Double-check all entered information for accuracy</li>
                      <li>Verify all required documents are uploaded</li>
                      <li>Submit your application well before the deadline</li>
                      <li>Save the confirmation page and application number</li>
                    </ul>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Important deadline:</strong> Applications typically close around the end of January each year. Submit well before the deadline to avoid technical issues.
                      </p>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>
            
            {/* FAQs Section */}
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
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Deadlines Card */}
            <Card className="bg-white shadow-sm border-t-4 border-red-500">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Important Deadlines</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Application Opens:</span>
                    <span className="font-medium">November 15, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Submission Deadline:</span>
                    <span className="font-medium text-red-600">January 15, 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Results Announced:</span>
                    <span className="font-medium">April 5, 2026</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-md">
                  <p className="text-sm text-red-800">
                    <strong>Note:</strong> Always check the official website for the exact dates as they may vary slightly each year.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Motivation Letter Link */}
            <Card className="bg-white shadow-sm border-t-4 border-deep-teal">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Letter of Motivation</h3>
                <p className="text-gray-700 mb-4">
                  Your motivation letter is one of the most critical parts of your application. We've created a comprehensive guide to help you write an effective letter.
                </p>
                <Link to="/letter-of-motivation">
                  <Button className="w-full bg-deep-teal hover:bg-deep-teal/90">
                    <FileText className="h-4 w-4 mr-2" />
                    Motivation Letter Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* YouTube Tutorial Link */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Video Tutorial</h3>
                <p className="text-gray-700 mb-4">
                  Watch our step-by-step video guide on completing the Tempus application process.
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline font-medium"
                >
                  <ExternalLink className="h-5 w-5 text-red-600 mr-2" />
                  Watch on YouTube
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TempusPortal;
