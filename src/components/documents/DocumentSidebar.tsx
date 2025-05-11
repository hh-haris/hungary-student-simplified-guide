
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DocumentSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Important Timeline Card */}
      <Card className="bg-white shadow-sm border-t-4 border-red-500">
        <CardContent className="p-5">
          <h3 className="font-syne font-medium text-lg mb-3">Document Timeline</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-700">Start Attestation:</span>
              <span className="font-medium">November 2025</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Get Medical Tests:</span>
              <span className="font-medium">December 2025</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Final Submission:</span>
              <span className="font-medium text-red-600">January 2026</span>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-50 rounded-md">
            <p className="text-sm text-red-800">
              <strong>Note:</strong> Allow extra time for any unexpected delays in the attestation process.
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Document Checklist Card */}
      <Card className="bg-white shadow-sm border-t-4 border-deep-teal">
        <CardContent className="p-5">
          <h3 className="font-syne font-medium text-lg mb-3">Document Checklist</h3>
          <p className="text-gray-700 mb-4">
            Ensure you have these documents attested:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">SSC/Matric Certificate & Transcript</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">HSSC/FSc Certificate & Transcript</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">Bachelor's Degree & Transcript</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">Master's Degree & Transcript (if applicable)</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">Medical Certificate</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Next Steps Card */}
      <Card className="bg-white shadow-sm">
        <CardContent className="p-5">
          <h3 className="font-syne font-medium text-lg mb-3">Next Steps</h3>
          <p className="text-gray-700 mb-4">
            After preparing your documents, proceed with your application on both portals:
          </p>
          <div className="space-y-3">
            <Link to="/apply/tempus">
              <Button variant="outline" className="w-full">
                Tempus Portal Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/apply/hec">
              <Button variant="outline" className="w-full">
                HEC Portal Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-4">
            <Link to="/visa">
              <Button className="w-full bg-deep-teal hover:bg-deep-teal/90">
                Visa Process Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentSidebar;
