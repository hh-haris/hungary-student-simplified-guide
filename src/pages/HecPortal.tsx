
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ExpandableSection from "@/components/ui/expandable-section";

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
                
                {/* Step-by-step guide */}
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 1: Register on the HEC Portal</h3>
                    <p className="text-gray-700 mb-3">
                      Visit the <a href="https://scholarships.hec.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:underline">HEC Scholarship Portal</a> and create an account if you don't already have one. If you already have an account from previous applications, use the same login credentials.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Use the same email address that you used for your Tempus application to avoid confusion.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 2: Find the Stipendium Hungaricum Scholarship</h3>
                    <p className="text-gray-700 mb-3">
                      After logging in, navigate to "Available Scholarships" or "Current Opportunities" section. Look for "Stipendium Hungaricum Scholarship Program" and click on "Apply Now" or "Start Application".
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> If you don't see the scholarship listed, it might mean that the application period has not started yet or has already ended.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 3: Complete Personal Information</h3>
                    <p className="text-gray-700 mb-3">
                      Fill in all required personal details including your name, CNIC, contact information, and address. Ensure that your name exactly matches your passport and Tempus application to avoid complications.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> Double-check your contact information as HEC will use this to communicate with you throughout the process.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 4: Enter Academic Details</h3>
                    <p className="text-gray-700 mb-3">
                      Provide information about your educational background, including institutions attended, degrees earned, and academic performance. You'll need to enter your FSc/HSSC results, bachelor's degree details (if applying for master's), and USAT score.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Have your transcripts and certificates handy while filling this section to ensure accurate information.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 5: Program Selection</h3>
                    <p className="text-gray-700 mb-3">
                      Select your desired programs and universities. Ensure that your choices here match exactly with what you selected on the Tempus portal. Discrepancies between the two applications can lead to disqualification.
                    </p>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Critical:</strong> Your program selections on HEC and Tempus portals MUST match exactly. This includes the specific university, program name, and level of study.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 6 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 6: Upload Documents</h3>
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
                  </div>
                  
                  {/* Step 7 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 7: Review and Submit</h3>
                    <p className="text-gray-700 mb-3">
                      Carefully review all information before submitting. Once submitted, modifications are generally not allowed. Print or save a PDF copy of your submission for your records.
                    </p>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Important deadline:</strong> The HEC deadline is typically EARLIER than the Tempus deadline. Don't wait until the last minute to submit.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 8 */}
                  <div className="border-l-4 border-deep-teal pl-4 py-1">
                    <h3 className="font-syne font-medium text-lg mb-2">Step 8: Track Your Application</h3>
                    <p className="text-gray-700 mb-3">
                      After submission, regularly check the portal for any updates or additional requirements. HEC may contact you for further information or documents if needed.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Check your email (including spam folder) regularly for communications from HEC regarding your application.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Technical FAQs */}
            <div className="mt-8">
              <h2 className="font-syne font-semibold text-xl mb-4">Technical Issues & Solutions</h2>
              <div className="space-y-3">
                {technicalFaqs.map((faq, index) => (
                  <ExpandableSection key={index} title={faq.question}>
                    <p className="text-gray-700">{faq.answer}</p>
                  </ExpandableSection>
                ))}
              </div>
            </div>
            
            {/* General FAQs */}
            <div className="mt-8">
              <h2 className="font-syne font-semibold text-xl mb-4">General FAQs</h2>
              <div className="space-y-3">
                {generalFaqs.map((faq, index) => (
                  <ExpandableSection key={index} title={faq.question}>
                    <p className="text-gray-700">{faq.answer}</p>
                  </ExpandableSection>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
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
            
            {/* Required Documents */}
            <Card className="bg-white shadow-sm">
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
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Passport-sized photo</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tempus application proof</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/documents">
                    <Button variant="outline" size="sm" className="w-full">
                      Document Attestation Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Support */}
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
                  <li>
                    <p className="font-medium">Technical Support Hours:</p>
                    <p className="text-gray-700">Monday to Friday, 9 AM - 5 PM</p>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> When contacting support, always mention "Stipendium Hungaricum" in your subject line and include your application ID if available.
                  </p>
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
