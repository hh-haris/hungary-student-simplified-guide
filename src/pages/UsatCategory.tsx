
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";

const UsatCategory = () => {
  const { category } = useParams();
  
  // Format the category name for display
  const formatCategoryName = (cat: string | undefined) => {
    if (!cat) return "";
    
    return cat
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  
  const categoryName = formatCategoryName(category);

  // Mock data for syllabus topics
  const syllabusTopics = [
    { title: "Mathematics", content: "Algebra, Calculus, Geometry, Trigonometry, Vectors" },
    { title: "Physics", content: "Mechanics, Thermodynamics, Electromagnetism, Modern Physics" },
    { title: "English", content: "Reading Comprehension, Vocabulary, Grammar, Writing Skills" },
    { title: "Computer Science", content: "Programming Basics, Data Structures, Algorithms" }
  ];

  // Mock data for resources
  const resources = [
    { title: "Notes & Guides", content: "Comprehensive study materials and guides for USAT preparation." },
    { title: "Past Papers", content: "Collection of previous years' USAT papers with solutions." }
  ];

  // Mock data for preparation strategy
  const prepStrategy = [
    { title: "Study Plan", content: "Create a 3-month study plan focusing on weak areas and regular practice." },
    { title: "Practice Tests", content: "Take at least one full-length practice test each week under timed conditions." },
    { title: "Subject Focus", content: "Allocate more time to high-weightage subjects in the USAT exam." }
  ];

  // Mock data for recommended resources
  const recommendedResources = [
    { title: "YouTube Channels", content: "Khan Academy, MIT OpenCourseWare, Crash Course" },
    { title: "Websites", content: "Brilliant.org, Paul's Online Math Notes, Varsity Tutors" },
    { title: "Books", content: "SAT/GRE prep books, subject-specific reference books" }
  ];

  // Mock data for FAQs
  const faqs = [
    { 
      title: "What is the passing score for USAT?", 
      content: "The minimum passing score for USAT is 70%. However, a score of 75% or higher is recommended to increase your chances of nomination." 
    },
    { 
      title: "How is the USAT exam conducted?", 
      content: "The USAT exam is conducted online from your home. You'll need a computer with a webcam and a stable internet connection. The exam is proctored remotely." 
    },
    { 
      title: "Can I retake the USAT if I fail?", 
      content: "Yes, you can retake the USAT in the next cycle if you fail to achieve the passing score. There's no limit on the number of attempts." 
    },
    { 
      title: "Is there negative marking in USAT?", 
      content: "No, there is no negative marking in the USAT exam. You will not lose marks for incorrect answers." 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl mb-2">USAT {categoryName}</h1>
        <p className="text-gray-600 mb-8">Comprehensive guide and resources for USAT {categoryName} preparation.</p>

        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Structure & Format</h2>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <p className="mb-4">The USAT {categoryName} exam consists of multiple-choice questions testing your knowledge in subject-specific areas and English proficiency.</p>
            
            <div className="mb-4">
              <h3 className="font-syne font-semibold text-lg mb-2">Exam Details:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Duration: <span className="font-medium">180 minutes</span></li>
                <li>Total Questions: <span className="font-medium">100</span></li>
                <li>Format: <span className="font-medium">Online, Multiple Choice</span></li>
                <li>Passing Score: <span className="font-medium">70% (70/100)</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-syne font-semibold text-lg mb-2">Section Breakdown:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Subject Knowledge: <span className="font-medium">70%</span></li>
                <li>English Proficiency: <span className="font-medium">30%</span></li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Syllabus & Topics</h2>
          <div className="space-y-3">
            {syllabusTopics.map((topic, index) => (
              <ExpandableCard key={index} title={topic.title}>
                <p className="text-gray-700">{topic.content}</p>
              </ExpandableCard>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Downloadable Resources</h2>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-syne font-semibold text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-700 mb-4">{resource.content}</p>
                <Button className="w-full md:w-auto">Download</Button>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Preparation Strategy</h2>
          <div className="space-y-3">
            {prepStrategy.map((strategy, index) => (
              <ExpandableCard key={index} title={strategy.title}>
                <p className="text-gray-700">{strategy.content}</p>
              </ExpandableCard>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">Recommended Resources</h2>
          <div className="space-y-3">
            {recommendedResources.map((resource, index) => (
              <ExpandableCard key={index} title={resource.title}>
                <p className="text-gray-700">{resource.content}</p>
              </ExpandableCard>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <ExpandableCard key={index} title={faq.title}>
                <p className="text-gray-700">{faq.content}</p>
              </ExpandableCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UsatCategory;
