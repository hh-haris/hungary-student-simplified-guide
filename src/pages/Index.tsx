import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimelineStep from "@/components/TimelineStep";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Bell } from "lucide-react";
const Index = () => {
  const timelineSteps = [{
    title: "USAT",
    description: "The USAT is a mandatory test for the Stipendium Hungaricum scholarship, based on which HEC will nominate candidates.",
    linkTo: "/usat",
  }, {
    title: "Find Your University",
    description: "Choose your university wisely, taking into account your program of study, academic performance, and your personal preferences.",
    linkTo: "/university-finder",
    date: "November - December 2025"
  }, {
    title: "Apply via HEC & Tempus Portal",
    description: "Complete your applications on both the required portals: HEC and Tempus Foundation",
    linkTo: "/apply",
    date: "December 2025 - 15 January 2026 (Deadline)"
  }, {
    title: "Document Attestation",
    description: "If you are nominated by HEC in February 2026, proceed with document attestation and the medical",
    linkTo: "/documents",
    date: "Until 15 April 2026"
 }, {
    title: "March - May 2025",
    description: "The universities will get in touch with the nominated applicants directly to set a date and conduct the entrance exams from the middle of March until the end of May.",
    description: "Visit your chosen university’s individual page for complete details and to access PDFs of past entrance exams, if applicable.",
    date: "May - July 2025"
 
  }, {
    title: "Visa Process",
    description: "Start your visa process once the Tempus Foundation makes the final scholarship decision and the award is granted.",
    linkTo: "/visa",
    date: "May - July 2025"
  }, {
    title: "Prepare for Hungary",
    description: "Essential tips for your first month abroad",
    linkTo: "/first-month",
    date: "August 2025"
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