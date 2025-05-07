
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-teal text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center md:text-left">
          <h2 className="font-syne font-bold text-xl mb-2">Stipendium Hungaricum Simplified</h2>
          <p className="text-sm opacity-80">Created to simplify access to higher education in Hungary for Pakistani students.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-syne font-medium text-light-teal mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent-orange transition-colors">Home</Link></li>
              <li><Link to="/usat" className="hover:text-accent-orange transition-colors">USAT Guide</Link></li>
              <li><Link to="/university-finder" className="hover:text-accent-orange transition-colors">University Finder</Link></li>
              <li><Link to="/apply/tempus" className="hover:text-accent-orange transition-colors">Apply for Scholarship</Link></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-syne font-medium text-light-teal mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/documents" className="hover:text-accent-orange transition-colors">Document Guide</Link></li>
              <li><Link to="/visa" className="hover:text-accent-orange transition-colors">Visa Process</Link></li>
              <li><Link to="/first-month" className="hover:text-accent-orange transition-colors">First Month in Hungary</Link></li>
              <li><Link to="/seniors" className="hover:text-accent-orange transition-colors">Connect with Seniors</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-syne font-medium text-light-teal mb-3">About</h3>
            <p className="text-sm max-w-xs opacity-80">
              A comprehensive guide created by students for students to navigate the Stipendium Hungaricum scholarship process.
            </p>
          </div>
        </div>
        
        <div className="border-t border-light-teal/30 mt-8 pt-4 text-center text-xs opacity-70">
          <p>© {new Date().getFullYear()} Stipendium Hungaricum Simplified. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
