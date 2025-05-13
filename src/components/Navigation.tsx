
import { Home, Search, FileText, User, Plane, FileCheck, Coffee, Gift, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Navigation = () => {
  return (
    <nav className="py-6">
      <h2 className="font-syne font-bold text-xl pb-6 text-accent-orange">Menu</h2>
      
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <Home size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="usat" className="border-none">
              <AccordionTrigger className="py-2 hover:text-accent-orange transition-colors">
                <div className="flex items-center gap-3">
                  <FileText size={20} />
                  <span>USAT Guide</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="pl-8 space-y-2 py-2">
                  <li className="hover:text-accent-orange">
                    <Link to="/usat/pre-engineering">Pre-Engineering</Link>
                  </li>
                  <li className="hover:text-accent-orange">
                    <Link to="/usat/pre-medical">Pre-Medical</Link>
                  </li>
                  <li className="hover:text-accent-orange">
                    <Link to="/usat/arts-humanities">Arts & Humanities</Link>
                  </li>
                  <li className="hover:text-accent-orange">
                    <Link to="/usat/computer-science">Computer Science</Link>
                  </li>
                  <li className="hover:text-accent-orange">
                    <Link to="/usat/commerce">Commerce</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
        <li>
          <Link to="/university-finder" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <Search size={20} />
            <span>University Finder</span>
          </Link>
        </li>
        <li>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="apply" className="border-none">
              <AccordionTrigger className="py-2 hover:text-accent-orange transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck size={20} />
                  <span>Apply for Scholarships</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="pl-8 space-y-2 py-2">
                  <li className="hover:text-accent-orange">
                    <Link to="/apply/tempus">Tempus Portal</Link>
                  </li>
                  <li className="hover:text-accent-orange">
                    <Link to="/apply/hec">HEC Portal</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
        <li>
          <Link to="/seniors" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <User size={20} />
            <span>Seniors Section</span>
          </Link>
        </li>
        <li>
          <Link to="/visa" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <Plane size={20} />
            <span>Visa Process</span>
          </Link>
        </li>
        <li>
          <Link to="/documents" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <FileText size={20} />
            <span>Document & Medical Guide</span>
          </Link>
        </li>
        <li>
          <Link to="/first-month" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <Coffee size={20} />
            <span>First Month in Hungary</span>
          </Link>
        </li>
        <li>
          <Link to="/alternative" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <Gift size={20} />
            <span>Alternative Scholarships</span>
          </Link>
        </li>
        <li>
          <Link to="/upcoming-features" className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors">
            <Sparkles size={20} />
            <span>Upcoming Features</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
