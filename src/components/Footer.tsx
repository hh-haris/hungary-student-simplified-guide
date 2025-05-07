
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="quicklinks">
              <AccordionTrigger className="text-left font-syne font-medium">
                Quick Links
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 py-2">
                  <li>
                    <Link to="/usat" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                      USAT Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/university-finder" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                      University Finder
                    </Link>
                  </li>
                  <li>
                    <Link to="/apply/tempus" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                      Apply for Scholarship
                    </Link>
                  </li>
                  <li>
                    <Link to="/visa" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                      Visa Process
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="moreinfo">
              <AccordionTrigger className="text-left font-syne font-medium">
                More Information
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 py-2">
                  <li>
                    <Link to="/documents" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                      Document Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/first-month" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                      First Month in Hungary
                    </Link>
                  </li>
                  <li>
                    <Link to="/alternative" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                      Alternative Scholarships
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-syne font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/usat" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                  USAT Guide
                </Link>
              </li>
              <li>
                <Link to="/university-finder" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                  University Finder
                </Link>
              </li>
              <li>
                <Link to="/apply/tempus" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                  Apply for Scholarship
                </Link>
              </li>
              <li>
                <Link to="/visa" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                  Visa Process
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-syne font-bold text-lg mb-4">More Information</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/documents" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                  Document Guide
                </Link>
              </li>
              <li>
                <Link to="/first-month" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                  First Month in Hungary
                </Link>
              </li>
              <li>
                <Link to="/alternative" className="text-sm text-gray-500 hover:text-deep-teal transition-colors">
                  Alternative Scholarships
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-syne font-bold text-lg mb-4">Join Our Community</h3>
            <p className="text-sm text-gray-500 mb-4">
              Connect with fellow students and get personalized assistance for your Stipendium Hungaricum application.
            </p>
            <Button className="bg-deep-teal hover:bg-deep-teal/90 text-white">
              Join WhatsApp Group
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="link" className="text-xs text-gray-500">
            Created to simplify access to higher education in Hungary for Pakistani students.
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
