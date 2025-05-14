import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimelineStep from "@/components/TimelineStep";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Bell } from "lucide-react";
const Index = () => {
  const timelineSteps = [{
    title: "USAT",
    description: "The USAT is a mandatory test for the Stipendium Hungaricum Scholarship. HEC uses the test scores to evaluate and nominate eligible candidates for the program.",
    linkTo: "/usat",
  }, {
    title: "Find Your University",
    description: "Choose your university carefully by considering your desired program, your USAT marks, and your personal goals or preferences to make the best decision.",
    linkTo: "/university-finder",
    date: "November - December 2025"
  }, {
    title: "Apply via HEC & Tempus Portal",
    description: "Make sure to complete your applications on both required portals. HEC and Tempus Foundation portal both are essential for the scholarship process.",
    linkTo: "/apply",
    date: "December 2025 - 15 January 2026 (Deadline)"
  }, {
    title: "Document Attestation",
    description: "If you are nominated by HEC in February 2026, begin the next steps by getting documents attested and completing the required medical examination.",
    linkTo: "/documents",
    date: "Until 15 April 2026"
 }, {
    title: "Entrance Exams",
    description: "Universities will contact nominated applicants directly to schedule entrance exams. Check your chosen university’s page for full details and past exam PDFs.",
    date: "May - July 2026"
  }, {
    title: "Visa Process",
    description: "Begin your visa process after the Tempus Foundation confirms the final scholarship decision and awards the grant, ensuring all necessary steps are completed.",
    linkTo: "/visa",
    date: "August 2026"
  }, {
    title: "Preparation and Arrival in Hungary",
    description: "After receiving your visa, book your ticket and complete all necessary steps before departure, including tasks to handle once you arrive in Hungary.",
    linkTo: "/first-month",
    date: "September - October 2026"
  }];
  return <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deep-teal/5 to-accent-orange/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-syne font-bold text-4xl md:text-5xl mb-6 text-deep-teal">
            The Ultimate Guide to <span className="text-accent-orange">SH</span> Scholarship
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            This guidance website helps students in this group by offering complete support, from knowing nothing to settling in during their first month in Hungary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-accent-orange hover:bg-accent-orange/90 text-white rounded-full shadow-md backdrop-blur-sm">
              <Link to="/usat">Prepare for USAT <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal/10 rounded-full backdrop-blur-sm">
              <Link to="/university-finder"><BookOpen className="mr-1 h-4 w-4" /> Explore Universities</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <section>
          <h2 className="font-syne font-bold text-2xl md:text-3xl mb-8 text-center">SH 2025-26 Timeline</h2>
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline track */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent-orange/20"></div>
            
            {/* Timeline steps */}
            {timelineSteps.map((step, index) => <TimelineStep key={index} title={step.title} description={step.description} linkTo={step.linkTo} stepNumber={index + 1} date={step.date} />)}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="backdrop-blur-sm bg-white/70 hover:bg-white/90 border border-gray-200 shadow-sm">
              
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;