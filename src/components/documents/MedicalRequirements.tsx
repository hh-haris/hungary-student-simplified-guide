
import React from 'react';
import { ExpandableSectionProvider } from "@/components/ui/expandable-section";
import ExpandableSection from "@/components/ui/expandable-section";

interface MedicalTest {
  test: string;
  purpose: string;
}

interface MedicalRequirementsProps {
  medicalTests: MedicalTest[];
}

const MedicalRequirements: React.FC<MedicalRequirementsProps> = ({ medicalTests }) => {
  return (
    <ExpandableSectionProvider>
      <div className="space-y-4">
        <ExpandableSection title="Required Medical Tests">
          <div className="space-y-1">
            <p className="mb-3 text-gray-700">The following tests are typically required for your visa application:</p>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 font-medium">Test</th>
                  <th className="px-4 py-2 text-left text-gray-700 font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {medicalTests.map((test, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{test.test}</td>
                    <td className="px-4 py-3 text-gray-600">{test.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExpandableSection>
        
        <div className="my-4"></div> {/* Added space between sections */}
        
        <ExpandableSection title="Health Certificate Format">
          <div className="space-y-3">
            <p className="text-gray-700">Your health certificate should include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Full name matching your passport</li>
              <li>Date of birth</li>
              <li>Passport number</li>
              <li>Statement confirming you are free from infectious diseases</li>
              <li>Statement confirming you are fit to study</li>
              <li>Doctor's signature and official stamp</li>
              <li>Date of issue (must be recent, within 3 months)</li>
            </ul>
          </div>
        </ExpandableSection>
        
        <div className="my-4"></div> {/* Added space between sections */}
        
        <ExpandableSection title="Hungarian Medical Requirements">
          <div className="space-y-3">
            <p className="text-gray-700">Upon arrival in Hungary, you may be required to undergo additional medical examinations:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Tüdőszűrés (TB screening)</li>
              <li>General health check at the university's medical center</li>
              <li>Additional tests may be required depending on your program (especially for medical students)</li>
            </ul>
            <p className="mt-3 text-gray-700">These examinations are typically arranged by your university during the orientation period.</p>
          </div>
        </ExpandableSection>
      </div>
    </ExpandableSectionProvider>
  );
};

export default MedicalRequirements;
