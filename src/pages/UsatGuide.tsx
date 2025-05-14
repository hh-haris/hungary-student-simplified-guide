
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ExpandableCard from "@/components/ExpandableCard";
import UsatTimeline from "@/components/UsatTimeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpandableSectionProvider } from "@/components/ui/expandable-section";

const UsatGuide = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  const usatCategories = [
    {
      title: "USAT Pre-Engineering",
      description: "For students with FSc Pre-Engineering or equivalent background",
      path: "/usat/pre-engineering"
    },
    {
      title: "USAT Pre-Medical",
      description: "For students with FSc Pre-Medical or equivalent background",
      path: "/usat/pre-medical"
    },
    {
      title: "USAT Arts & Humanities",
      description: "For students with arts, humanities, or social sciences background",
      path: "/usat/arts-humanities"
    },
    {
      title: "USAT Computer Science",
      description: "For students with computer science or IT background",
      path: "/usat/computer-science"
    },
    {
      title: "USAT Commerce",
      description: "For students with commerce, business, or economics background",
      path: "/usat/commerce"
    }
  ];

  const usatTimelineSteps = [
    {
      id: "1-usat",
      title: "First USAT",
      details: {
        startDate: "November 15, 2024",
        notes: "Registration opens on the HEC portal. Create your account early to avoid last-minute issues."
      }
    },
    {
      id: "2-usat",
      title: "Second USAT",
      date: "December 2024",
      details: {
        endDate: "December 20, 2024",
        notes: "All registrations must be completed by this date. No extensions will be provided."
      }
    },
    {
      id: "test-dates",
      title: "Test Dates",
      date: "January 2025",
      details: {
        startDate: "January 10, 2025",
        endDate: "January 15, 2025",
        notes: "Exact test date and time will be communicated via your roll number slip."
      }
    },
    {
      id: "results",
      title: "Results Announcement",
      date: "February 2025",
      details: {
        endDate: "January 31, 2025",
        notes: "Results will be available on the HEC portal. You'll receive an email notification."
      }
    }
  ];

  const generalFaqs = [
    {
      question: "What is USAT and why is it required?",
      answer: "USAT (Universities & Standardised Admissions Test) is a mandatory exam for Pakistani students applying to the Stipendium Hungaricum scholarship. It evaluates your academic abilities and ensures you meet the minimum requirements for admission to Hungarian universities."
    },
    {
      question: "What is the minimum passing score for USAT?",
      answer: "The minimum passing score is 70%. However, most competitive programs require 75% or higher for better chances of selection."
    },
    {
      question: "Can I apply to any field irrespective of my USAT category?",
      answer: "Yes, you can apply to most fields regardless of which USAT category you take. However, medical students must take the Pre-Medical USAT. For all other students, it's recommended to take the USAT category that matches your FSc background to maximize your chance of success."
    },
    {
      question: "How many times can I take the USAT exam?",
      answer: "You can take the USAT every year during the application cycle. If you're not satisfied with your score, you can retake it in the next cycle."
    },
    {
      question: "Is USAT accepted by all Hungarian universities?",
      answer: "Yes, all Hungarian universities participating in the Stipendium Hungaricum program accept USAT scores from Pakistani applicants."
    }
  ];

  const technicalFaqs = [
    {
      question: "What should I do if I can't download my roll number slip?",
      answer: "Clear your browser cache and cookies, then try again. If the issue persists, try using a different browser or device. If you still face problems, contact HEC support with your registration details."
    },
    {
      question: "I forgot my USAT portal password. How can I reset it?",
      answer: "Use the 'Forgot Password' option on the login page. You'll receive a password reset link on your registered email address. If you don't receive the email, check your spam folder or contact HEC technical support."
    },
    {
      question: "My name is misspelled in the USAT registration. How can I correct it?",
      answer: "Contact HEC support immediately with proper documentation (passport copy or other ID) to request a correction. Make sure to do this well before the test date."
    },
    {
      question: "What should I do if the USAT portal shows errors during registration?",
      answer: "Take a screenshot of the error, clear your browser cache, and try again. If the problem continues, contact HEC technical support with the screenshot and your registration details."
    },
    {
      question: "What technical requirements do I need for the online USAT exam?",
      answer: "You'll need a computer with a stable internet connection, a working webcam, and a microphone. Make sure your device meets the system requirements specified in the admission instructions. Use Chrome or Firefox browser for the best experience."
    }
  ];

  return (
    <ExpandableSectionProvider>
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
          <section className="mb-8">
            <h1 className="font-syne font-bold text-3xl mb-4">USAT Guide</h1>
            <p className="text-gray-700 mb-3">
             The Undergraduate Studies Admission Test (USAT) is a standardized pre admission assessment for undergraduate programs in universities across Pakistan. It is also a mandatory test for the Stipendium Hungaricum Scholarship, as HEC uses USAT scores to nominate candidates for the program.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-md mb-6">
              <p className="text-amber-800 font-medium">
                <strong>Disclaimer:</strong> All students can take any USAT category except medical students. Still, it s strongly advised to choose the same category you studied in FSc to avoid any complications.
              </p>
            </div>

            <h2 className="font-syne font-bold text-xl mb-4 text-accent-orange">2025-26 Schedule</h2>
            <UsatTimeline steps={usatTimelineSteps} />
          </section>

          <section className="mb-8">
            <h2 className="font-syne font-bold text-2xl mb-6">Choose Your Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {usatCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-syne font-bold text-xl mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <Link to={category.path}>
                      <Button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white">
                        View Guide
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="font-syne font-bold text-2xl mb-4">Frequently Asked Questions</h2>
            
            <div className="mb-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="space-y-4">
                  {generalFaqs.map((faq, index) => (
                    <ExpandableCard key={index} title={faq.question} initialExpanded={false}>
                      <p className="text-gray-700">{faq.answer}</p>
                    </ExpandableCard>
                  ))}
                </TabsContent>
                
                <TabsContent value="technical" className="space-y-4">
                  {technicalFaqs.map((faq, index) => (
                    <ExpandableCard key={index} title={faq.question} initialExpanded={false}>
                      <p className="text-gray-700">{faq.answer}</p>
                    </ExpandableCard>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ExpandableSectionProvider>
  );
};

export default UsatGuide;
