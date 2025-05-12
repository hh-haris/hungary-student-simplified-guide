
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ExpandableCard from "@/components/ExpandableCard";
import UsatTimeline from "@/components/UsatTimeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UsatGuide = () => {
  const [showTechnicalFaqs, setShowTechnicalFaqs] = useState(false);
  
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
      id: "usat-exam",
      title: "USAT Exam",
      date: "October-November 2025",
      details: {
        notes: "USAT test dates will be announced by HEC. Create your account early to avoid last-minute issues."
      }
    },
    {
      id: "program-selection",
      title: "Program Selection",
      date: "November-December 2025",
      details: {
        notes: "Select your preferred programs and universities based on your USAT results."
      }
    },
    {
      id: "application-deadline",
      title: "Application Deadline",
      date: "15 January 2026",
      details: {
        endDate: "January 15, 2026",
        notes: "Deadline to apply at both portals. All applications must be completed by this date."
      }
    },
    {
      id: "hec-nomination",
      title: "Nomination by HEC",
      date: "February-March 2026",
      details: {
        notes: "HEC will review applications and nominate candidates for the Stipendium Hungaricum scholarship."
      }
    },
    {
      id: "medical-submission",
      title: "Medical Report Submission",
      date: "15 April 2026",
      details: {
        endDate: "April 15, 2026",
        notes: "Deadline to submit medical reports required for the scholarship application."
      }
    },
    {
      id: "entrance-exams",
      title: "University Entrance Exams",
      date: "March-May 2026",
      details: {
        notes: "Universities will conduct entrance exams and interviews for nominated candidates."
      }
    },
    {
      id: "scholarship-award",
      title: "Scholarship Award",
      date: "June 2026",
      details: {
        notes: "Tempus Public Foundation will announce scholarship awards."
      }
    },
    {
      id: "visa-process",
      title: "Visa Process",
      date: "July-August 2026",
      details: {
        notes: "Complete visa application and prepare for travel."
      }
    },
    {
      id: "arrival",
      title: "Arrival in Hungary",
      date: "September-October 2026",
      details: {
        notes: "Arrival in Hungary and beginning of studies."
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
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <section className="mb-8">
          <h1 className="font-syne font-bold text-3xl mb-4">USAT Guide</h1>
          <p className="text-gray-700 mb-3">
            The Universities & Standardised Admissions Test (USAT) is a mandatory exam for Pakistani students 
            applying to the Stipendium Hungaricum scholarship program.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-md mb-6">
            <p className="text-amber-800 font-medium">
              <strong>Disclaimer:</strong> You can take any USAT category except if you are a medical student. However, it is strongly recommended to take the same USAT category you studied in FSc to maximize your chances of success.
            </p>
          </div>

          <h2 className="font-syne font-bold text-xl mb-4 text-accent-orange">2026-27 Schedule</h2>
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
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4">
                {generalFaqs.map((faq, index) => (
                  <ExpandableCard key={index} title={faq.question} initialExpanded={index === 0}>
                    <p className="text-gray-700">{faq.answer}</p>
                  </ExpandableCard>
                ))}
              </TabsContent>
              
              <TabsContent value="technical" className="space-y-4">
                {technicalFaqs.map((faq, index) => (
                  <ExpandableCard key={index} title={faq.question} initialExpanded={index === 0}>
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
  );
};

export default UsatGuide;
