
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TopicDetail {
  name: string;
  mcqCount: number;
  subtopics?: Array<{
    name: string;
    mcqCount: number;
  }>;
}

interface SubjectSyllabusProps {
  subject: string;
  topics: TopicDetail[];
}

const SubjectSyllabus = ({ subject, topics }: SubjectSyllabusProps) => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  
  const toggleTopic = (topicName: string) => {
    if (expandedTopic === topicName) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(topicName);
    }
  };

  const totalMCQs = topics.reduce((sum, topic) => sum + topic.mcqCount, 0);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-syne font-medium text-lg">{subject}</h3>
          <span className="text-sm bg-deep-teal text-white px-2 py-1 rounded-full">{totalMCQs} MCQs</span>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200">
        {topics.map((topic) => (
          <div key={topic.name} className="bg-white">
            <div 
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleTopic(topic.name)}
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium">{topic.name}</span>
                <span className="text-sm text-gray-500">({topic.mcqCount} MCQs)</span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  expandedTopic === topic.name ? 'transform rotate-180' : ''
                }`} 
              />
            </div>
            
            {expandedTopic === topic.name && topic.subtopics && topic.subtopics.length > 0 && (
              <div className="bg-gray-50 px-4 py-3 animate-accordion-down">
                <ul className="space-y-2">
                  {topic.subtopics.map((subtopic) => (
                    <li key={subtopic.name} className="flex justify-between items-center">
                      <span className="text-sm">{subtopic.name}</span>
                      <span className="text-xs text-gray-500">{subtopic.mcqCount} MCQs</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSyllabus;
