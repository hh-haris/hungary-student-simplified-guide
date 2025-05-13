
import React from "react";
import ExpandableSection from "@/components/ui/expandable-section";

interface MedicalTest {
  test: string;
  purpose: string;
}

interface MedicalRequirementsProps {
  medicalTests: MedicalTest[];
}

const MedicalRequirements = ({ medicalTests }: MedicalRequirementsProps) => {
  return (
    <>
      <ExpandableSection title="Required Medical Tests" defaultOpen={false} className="mb-6">
        <div className="mb-6">
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h4 className="font-medium mb-2">General Information</h4>
            <p className="text-gray-700">Medical examination must be conducted by a licensed physician. The medical certificate should be in English or translated by a certified translator.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medicalTests.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.test}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ExpandableSection>
      
      <ExpandableSection title="Submission Process" className="mb-6">
        <ul className="space-y-2 list-disc pl-4 text-gray-700">
          <li>Medical certificates should be submitted with your visa application</li>
          <li>The certificate should not be older than 3 months at the time of visa application</li>
          <li>The medical certificate must be stamped and signed by the doctor</li>
          <li>A copy should be uploaded to the Tempus application portal as well</li>
        </ul>
        <div className="mt-4 bg-yellow-50 p-3 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Some universities may have additional medical requirements. Always check your chosen university's specific requirements.
          </p>
        </div>
      </ExpandableSection>
      
      <ExpandableSection title="Finding a Medical Center" className="mb-2">
        <p className="text-gray-700 mb-3">
          It's recommended to get your medical examination done at a recognized medical center or hospital. Here are some options:
        </p>
        <ul className="space-y-2 list-disc pl-4 text-gray-700">
          <li>Government hospitals with international medical certificate facilities</li>
          <li>Private hospitals that regularly provide medical certificates for visa purposes</li>
          <li>Medical centers recommended by the Hungarian Embassy</li>
        </ul>
        <div className="mt-4 bg-blue-50 p-3 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Call ahead and explain that you need a medical certificate for a student visa to Hungary. This ensures they include all required tests.
          </p>
        </div>
      </ExpandableSection>
    </>
  );
};

export default MedicalRequirements;
