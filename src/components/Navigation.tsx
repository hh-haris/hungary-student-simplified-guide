import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Book,
  GraduationCap,
  Building2,
  MapPin,
  Users,
  FileText,
  Briefcase,
  Gift,
} from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/usat"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <Book size={20} />
              <span>USAT Guide</span>
            </Link>
          </li>
          <li>
            <Link
              to="/university-finder"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <GraduationCap size={20} />
              <span>University Finder</span>
            </Link>
          </li>
          <li>
            <Link
              to="/universities/1"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <Building2 size={20} />
              <span>Universities</span>
            </Link>
          </li>
          <li>
            <Link
              to="/city/1"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <MapPin size={20} />
              <span>Cities</span>
            </Link>
          </li>
          <li>
            <Link
              to="/seniors"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <Users size={20} />
              <span>Seniors</span>
            </Link>
          </li>
          <li>
            <Link
              to="/apply"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <FileText size={20} />
              <span>Apply for Scholarship</span>
            </Link>
          </li>
          <li>
            <Link
              to="/visa"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <Briefcase size={20} />
              <span>Visa Process</span>
            </Link>
          </li>
          <li>
            <Link
              to="/alternative-scholarships"
              className="flex items-center gap-3 py-2 hover:text-accent-orange transition-colors"
            >
              <Gift size={20} />
              <span>Alternative Scholarships</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
