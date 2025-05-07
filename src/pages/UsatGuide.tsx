
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const UsatGuide = () => {
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

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <section className="mb-8">
          <h1 className="font-syne font-bold text-3xl mb-4">USAT Guide</h1>
          <p className="text-gray-700 mb-6">
            The Universities & Standardised Admissions Test (USAT) is a mandatory exam for Pakistani students 
            applying to the Stipendium Hungaricum scholarship program.
          </p>

          <div className="bg-white p-5 rounded-lg shadow-sm mb-8">
            <h2 className="font-syne font-bold text-xl mb-3 text-accent-orange">2025-26 Schedule</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Registration Opens: <span className="font-medium">November 2024</span></li>
              <li>Registration Closes: <span className="font-medium">December 2024</span></li>
              <li>Test Date: <span className="font-medium">January 2025</span></li>
              <li>Results: <span className="font-medium">February 2025</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm mb-8">
            <h2 className="font-syne font-bold text-xl mb-3 text-deep-teal">Important Notes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Minimum passing score is 70%</li>
              <li>Higher scores increase your nomination chances</li>
              <li>Test is conducted online from home</li>
              <li>Computer with webcam and stable internet required</li>
              <li>Test includes both subject knowledge and English proficiency</li>
            </ul>
          </div>
        </section>

        <section>
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
      </main>
      <Footer />
    </div>
  );
};

export default UsatGuide;
