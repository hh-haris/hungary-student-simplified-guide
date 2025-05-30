
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ui/expandable-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const HecPortal = () => {
  // Technical FAQs
  const technicalFaqs = [
    {
      question: "I can't log in to the HEC portal. What should I do?",
      answer: "First, ensure you're using the correct email and password. If you've forgotten your password, use the 'Forgot Password' option. If you still can't log in, clear your browser cache and try again. For persistent issues, contact HEC support at helpdesk@hec.gov.pk."
    },
    {
      question: "The portal is not accepting my documents. Why?",
      answer: "Check that your documents meet the format requirements (usually PDF) and are within the size limit (typically 1-2MB per file). Ensure there are no special characters in your file names. If problems persist, try using a different browser or compress your PDF files further."
    },
    {
      question: "I submitted my application but need to make changes. How can I edit it?",
      answer: "Once submitted, you generally cannot edit your application. However, if the deadline has not passed, you may contact HEC support at helpdesk@hec.gov.pk with your specific request and they might assist you."
    },
    {
      question: "The page keeps freezing when I try to submit. What should I do?",
      answer: "This is usually due to high traffic near the deadline or connectivity issues. Try submitting during off-peak hours (early morning or late night), check your internet connection, use a different browser, or clear your browser cache."
    }
  ];

  // General FAQs
  const generalFaqs = [
    {
      question: "Do I need to apply on the HEC portal even if I've applied on the Tempus portal?",
      answer: "Yes, applications on both portals are mandatory. HEC uses their portal to nominate Pakistani candidates to the Tempus Foundation."
    },
    {
      question: "What should I do if my educational institution is not listed in the dropdown?",
      answer: "Contact HEC support at helpdesk@hec.gov.pk with details of your institution. They will guide you on how to proceed or might add your institution to the database."
    },
    {
      question: "Is it mandatory to provide language proficiency certificates during application?",
      answer: "While it enhances your application, if you don't have a formal language certificate yet, you can still apply. However, you should indicate your proficiency level honestly and note that you're planning to take a test soon if required by your chosen program."
    },
    {
      question: "How do I know if my application has been successfully submitted?",
      answer: "After submission, you should receive a confirmation message on the portal and a confirmation email. You can also check your application status by logging into the portal."
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
          <h1 className="font-syne font-bold text-3xl md:text-4xl mb-2">HEC Portal Application</h1>
          <p className="text-gray-600">
            Guide to completing your application on the Pakistani Higher Education Commission portal
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Application Process</h2>
                
                {/* Step-by-step guide with expandable sections */}
                <div className="space-y-6">
                  {/* Step 1 */}
                  <ExpandableSection title="Step 1: Register on the HEC Portal" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Visit the <a href="https://scholarships.hec.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:underline">HEC Scholarship Portal</a> and create an account if you don't already have one. If you already have an account from previous applications, use the same login credentials.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Use the same email address that you used for your Tempus application to avoid confusion.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 2 */}
                  <ExpandableSection title="Step 2: Find the Stipendium Hungaricum Scholarship" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      After logging in, navigate to "Available Scholarships" or "Current Opportunities" section. Look for "Stipendium Hungaricum Scholarship Program" and click on "Apply Now" or "Start Application".
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> If you don't see the scholarship listed, it might mean that the application period has not started yet or has already ended.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 3 */}
                  <ExpandableSection title="Step 3: Complete Personal Information" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Fill in all required personal details including your name, CNIC, contact information, and address. Ensure that your name exactly matches your passport and Tempus application to avoid complications.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Enter your name exactly as it appears on your passport</li>
                      <li>Provide accurate contact information</li>
                      <li>Double-check your CNIC number</li>
                      <li>Verify all information before proceeding</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> Double-check your contact information as HEC will use this to communicate with you throughout the process.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 4 */}
                  <ExpandableSection title="Step 4: Enter Academic Details" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Provide information about your educational background, including institutions attended, degrees earned, and academic performance. You'll need to enter your FSc/HSSC results, bachelor's degree details (if applying for master's), and USAT score.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Enter all educational qualifications chronologically</li>
                      <li>Include accurate information about your degrees and grades</li>
                      <li>Add your latest USAT score</li>
                      <li>List all academic achievements if applicable</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Have your transcripts and certificates handy while filling this section to ensure accurate information.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 5 */}
                  <ExpandableSection title="Step 5: Program Selection" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Select your desired programs and universities. Ensure that your choices here match exactly with what you selected on the Tempus portal. Discrepancies between the two applications can lead to disqualification.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Select the same universities as on your Tempus application</li>
                      <li>Choose the exact same programs in the same order</li>
                      <li>Double check field of study and degree level</li>
                      <li>Maintain the same preference order as in Tempus</li>
                    </ul>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Critical:</strong> Your program selections on HEC and Tempus portals MUST match exactly. This includes the specific university, program name, and level of study.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 6 */}
                  <ExpandableSection title="Step 6: Upload Documents" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Upload all required documents in the specified format (usually PDF). Required documents typically include:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>CNIC copy</li>
                      <li>Passport copy</li>
                      <li>Educational certificates and transcripts</li>
                      <li>USAT result card</li>
                      <li>Passport-sized photograph</li>
                      <li>Proof of application submission on Tempus portal (confirmation email or screenshot)</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Format requirements:</strong> Documents should typically be clear, legible PDFs under 1-2MB each. Follow the specific guidelines provided on the portal.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 7 */}
                  <ExpandableSection title="Step 7: Review and Submit" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      Carefully review all information before submitting. Once submitted, modifications are generally not allowed. Print or save a PDF copy of your submission for your records.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Double-check all entered information for accuracy</li>
                      <li>Verify all required documents are uploaded</li>
                      <li>Submit your application well before the deadline</li>
                      <li>Save the confirmation page and application number</li>
                    </ul>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Important deadline:</strong> The HEC deadline is typically EARLIER than the Tempus deadline. Don't wait until the last minute to submit.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  {/* Step 8 */}
                  <ExpandableSection title="Step 8: Track Your Application" defaultOpen={false}>
                    <p className="text-gray-700 mb-3">
                      After submission, regularly check the portal for any updates or additional requirements. HEC may contact you for further information or documents if needed.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Check your email (including spam folder) regularly for communications from HEC regarding your application.
                      </p>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>
            
            {/* FAQs Section with tabs like in Tempus Portal */}
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
            {/* Deadlines Card */}
            <Card className="bg-white shadow-sm border-t-4 border-red-500">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Important Deadlines</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Application Opens:</span>
                    <span className="font-medium">Early January</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">HEC Deadline:</span>
                    <span className="font-medium text-red-600">Mid-January</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Nominations:</span>
                    <span className="font-medium">Late February</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-md">
                  <p className="text-sm text-red-800">
                    <strong>Note:</strong> The HEC deadline is typically 1-2 weeks BEFORE the Tempus deadline. Submit early to avoid technical issues.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Required Documents - styled like in Tempus Portal */}
            <Card className="bg-white shadow-sm border-t-4 border-deep-teal">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Document Checklist</h3>
                <p className="text-gray-700 mb-4">
                  Prepare these documents before starting your application:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">CNIC (scanned copy)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Passport (information page)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Educational certificates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Transcripts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">USAT result card</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/documents">
                    <Button className="w-full bg-deep-teal hover:bg-deep-teal/90">
                      <FileText className="h-4 w-4 mr-2" />
                      Document Attestation Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Support - styled like in Tempus Portal */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">HEC Support Contacts</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="font-medium">Email Support:</p>
                    <a href="mailto:helpdesk@hec.gov.pk" className="text-deep-teal hover:underline">
                      helpdesk@hec.gov.pk
                    </a>
                  </li>
                  <li>
                    <p className="font-medium">Phone Support:</p>
                    <p>051-111-119-432</p>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> When contacting support, always mention "Stipendium Hungaricum" in your subject line and include your application ID if available.
                  </p>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://www.youtube.com/watch?v=example-hec" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline font-medium"
                  >
                    <ExternalLink className="h-5 w-5 text-red-600 mr-2" />
                    Video Guide to HEC Portal
                  </a>
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

export default HecPortal;
