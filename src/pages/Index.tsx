
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import TimelineStep from "@/components/TimelineStep";

const Index = () => {
  const scholarshipBenefits = [
    {
      title: "Fully Funded Tuition",
      description: "Complete coverage of tuition fees for bachelor's, master's, and doctoral programs."
    },
    {
      title: "Monthly Stipend",
      description: "Receive a monthly allowance to cover your living expenses while in Hungary."
    },
    {
      title: "Accommodation Contribution",
      description: "Assistance with housing expenses or dormitory placement at Hungarian universities."
    },
    {
      title: "Health Insurance",
      description: "Medical insurance coverage throughout your study period in Hungary."
    },
    {
      title: "Travel Allowance",
      description: "One-time travel support to help with your journey to Hungary."
    }
  ];

  const timelineSteps = [
    {
      title: "USAT Exam",
      description: "First step: Pass the Universities & Standardised Admissions Test",
      linkTo: "/usat"
    },
    {
      title: "University Selection",
      description: "Choose Hungarian universities that match your academic profile",
      linkTo: "/university-finder"
    },
    {
      title: "Apply via Tempus & HEC",
      description: "Complete your applications through both required portals",
      linkTo: "/apply/tempus"
    },
    {
      title: "Document Verification",
      description: "Prepare and verify all required documentation",
      linkTo: "/documents"
    },
    {
      title: "Visa Process",
      description: "Apply for your student visa after acceptance",
      linkTo: "/visa"
    },
    {
      title: "Prepare for Hungary",
      description: "Essential tips for your first month abroad",
      linkTo: "/first-month"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <section className="mb-12">
          <h2 className="font-syne font-bold text-2xl md:text-3xl mb-6 text-center md:text-left">Scholarship Benefits</h2>
          <div className="space-y-4">
            {scholarshipBenefits.map((benefit, index) => (
              <ExpandableCard key={index} title={benefit.title} initialExpanded={index === 0}>
                <p className="text-gray-700">{benefit.description}</p>
              </ExpandableCard>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-syne font-bold text-2xl md:text-3xl mb-6 text-center md:text-left">Application Timeline</h2>
          <div className="space-y-1">
            {timelineSteps.map((step, index) => (
              <TimelineStep 
                key={index}
                title={step.title}
                description={step.description}
                linkTo={step.linkTo}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
