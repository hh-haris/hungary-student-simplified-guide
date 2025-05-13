
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExpandableSectionProvider } from '@/components/ui/expandable-section';
import ExpandableSection from '@/components/ui/expandable-section';

const UpcomingFeatures = () => {
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <h1 className="font-syne font-bold text-3xl mb-6">Upcoming Features</h1>
        
        <div className="space-y-6">
          <ExpandableSectionProvider>
            <ExpandableSection title="Chatbot">
              <p className="text-gray-700">
                An AI-powered assistant to help students with their queries about studying in Hungary.
              </p>
            </ExpandableSection>
            
            <ExpandableSection title="Interactive University Map">
              <p className="text-gray-700">
                A visual map showing the locations of all universities in Hungary with the ability to filter by city, program, and other criteria.
              </p>
            </ExpandableSection>
            
            <ExpandableSection title="Student Community Forum">
              <p className="text-gray-700">
                A dedicated space for current and prospective students to connect, share experiences, and ask questions.
              </p>
            </ExpandableSection>
            
            <ExpandableSection title="Scholarship Deadline Reminders">
              <p className="text-gray-700">
                Automated notifications for upcoming application deadlines and important dates.
              </p>
            </ExpandableSection>
          </ExpandableSectionProvider>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpcomingFeatures;
