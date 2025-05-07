
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  initialExpanded?: boolean;
}

const ExpandableCard = ({ title, children, initialExpanded = false }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  return (
    <Card className="mb-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="p-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-syne">{title}</CardTitle>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="p-4 pt-0">
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default ExpandableCard;
