
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineStepProps {
  title: string;
  description: string;
  linkTo: string;
}

const TimelineStep = ({ title, description, linkTo }: TimelineStepProps) => {
  return (
    <Link 
      to={linkTo}
      className="block bg-white p-4 mb-3 border-l-4 border-accent-orange hover:bg-off-white transition-colors rounded-r-md shadow-sm"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-syne font-bold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <ChevronRight className="text-accent-orange" />
      </div>
    </Link>
  );
};

export default TimelineStep;
