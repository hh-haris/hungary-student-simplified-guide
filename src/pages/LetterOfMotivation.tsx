
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ui/expandable-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const LetterOfMotivation = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  
  // Sample motivation letters for different programs
  const motivationLetterSamples = [
    { 
      program: "Engineering", 
      title: "Electrical Engineering Sample",
      content: "Dear Selection Committee,\n\nAs an aspiring electrical engineer from Pakistan, I have always been fascinated by the intersection of power systems and renewable energy. My academic journey and hands-on projects in this field have prepared me for the challenges of pursuing advanced study, and the renowned Electrical Engineering program at the Budapest University of Technology and Economics represents the perfect opportunity to fulfill my ambitions.\n\nMy interest in electrical engineering began during my undergraduate studies at [University Name], where I maintained a CGPA of [X.XX/4.00]. Throughout my academic career, I have been particularly drawn to power electronics and renewable energy integration - areas where Hungary has shown remarkable innovation. The prospect of studying under faculty who have contributed to European smart grid initiatives and energy efficiency research particularly motivates me.\n\n[Continue with your specific achievements, projects, and future goals...]\n\nI am confident that my academic background, combined with my passion for sustainable energy solutions, makes me an ideal candidate for your program. Upon completing my studies in Hungary, I intend to return to Pakistan and contribute to our growing renewable energy sector, building on the knowledge and international perspective gained during my time at your esteemed institution.\n\nThank you for considering my application. I look forward to the opportunity to contribute to and learn from your distinguished academic community.\n\nSincerely,\n[Your Name]",
      type: "senior"
    },
    { 
      program: "Medicine", 
      title: "Medical Studies Sample",
      content: "Dear Selection Committee,\n\nMy journey towards medicine began when I witnessed the healthcare challenges in the rural areas of Pakistan during a volunteer program in my second year of pre-medical studies. This experience solidified my commitment to becoming a physician who could bring quality healthcare to underserved communities.\n\nHaving completed my FSc Pre-Medical with a score of [XX%] from [College Name], I am eager to pursue my medical education at the University of Debrecen, an institution renowned for its excellent clinical training and innovative research in medical sciences. The university's emphasis on hands-on clinical experience from the early stages of the program particularly appeals to me.\n\n[Continue with your specific achievements, academic strengths, and healthcare experiences...]\n\nUpon completing my medical education in Hungary, I plan to specialize in [specific field] and return to Pakistan to address the significant shortage of specialists in this area. The international training and exposure I would receive at the University of Debrecen would be invaluable in helping me introduce improved medical practices to my home country.\n\nI am fully prepared for the challenges of studying medicine in an international environment and am excited about the opportunity to contribute to the diverse student community at your esteemed university.\n\nThank you for considering my application.\n\nSincerely,\n[Your Name]",
      type: "sample"
    },
    { 
      program: "Computer Science", 
      title: "Computer Science Sample",
      content: "Dear Selection Committee,\n\nThe rapidly evolving field of artificial intelligence and its potential to transform economies like Pakistan's has always captivated my interest. As a computer science graduate from [University Name] with a CGPA of [X.XX/4.00], I am writing to express my strong interest in pursuing a Master's degree in Computer Science with specialization in Artificial Intelligence at the prestigious Eötvös Loránd University.\n\nDuring my undergraduate studies, I developed a solid foundation in programming languages and data structures, but it was my research project on [specific project] that sparked my passion for machine learning algorithms. This project, which [brief description of project and achievements], demonstrated to me the transformative potential of AI in solving real-world problems.\n\n[Continue with your specific technical skills, projects, and relevant experiences...]\n\nHungary's emerging tech scene and the strong industry connections of Eötvös Loránd University make it the ideal place for me to further my education. I am particularly impressed by the research conducted by Professor [Name] in the field of [specific research area], which aligns perfectly with my academic interests.\n\nWith the knowledge gained from your program, I aim to develop AI solutions that address specific challenges in Pakistan's [industry/sector], ultimately contributing to the technological advancement of my home country while maintaining international collaborative connections.\n\nI appreciate your consideration and look forward to the possibility of joining your esteemed institution.\n\nSincerely,\n[Your Name]",
      type: "senior"
    },
    { 
      program: "Business", 
      title: "Business Administration Sample",
      content: "Dear Selection Committee,\n\nHaving grown up in a family business environment in Lahore, I have firsthand witnessed the transformative power of well-managed enterprises. This early exposure, combined with my academic achievements at [University Name] where I completed my BBA with a CGPA of [X.XX/4.00], has prepared me for the next step in my educational journey: pursuing an MBA at Corvinus University of Budapest.\n\nThe globally recognized MBA program at Corvinus University appeals to me for several reasons, most notably its strong emphasis on entrepreneurship and sustainable business practices. As someone who has already [mention any relevant experience, internship, or project], I am eager to expand my knowledge under the guidance of faculty who are not only academic experts but also experienced business professionals.\n\n[Continue with specific achievements, leadership experiences, and career goals...]\n\nHungary's strategic position as a gateway between Eastern and Western European markets makes it an ideal location to study international business dynamics. The knowledge and cross-cultural communication skills I would develop at Corvinus University would be invaluable for my goal of [specific career objective].\n\nI am confident that my academic background, combined with my practical experience and cultural adaptability, makes me well-suited for your program. Upon completion of my MBA, I intend to [explain your post-graduation plans and how they relate to Pakistan and/or Hungary].\n\nThank you for considering my application. I look forward to the opportunity to contribute to the diverse learning environment at Corvinus University.\n\nSincerely,\n[Your Name]",
      type: "sample"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long should my motivation letter be?",
      answer: "Your motivation letter should generally be between 500-800 words (1-2 pages). It should be concise while still covering all the important points about your motivation, background, and goals."
    },
    {
      question: "Should I write a different motivation letter for each program I apply to?",
      answer: "Yes, you should customize your motivation letter for each program you apply to. While the general structure can be similar, each letter should specifically address why you're interested in that particular program and university."
    },
    {
      question: "What are some common mistakes to avoid in motivation letters?",
      answer: "Common mistakes include: being too generic, focusing only on personal circumstances rather than academic interests, including irrelevant information, spelling and grammar errors, and copying templates word-for-word without personalization."
    },
    {
      question: "Is it better to focus more on my academic achievements or my future plans?",
      answer: "A good motivation letter strikes a balance between your past academic achievements, your current interests, and your future goals. Connect these three aspects to show a logical progression in your academic and career path."
    },
    {
      question: "Should I mention specific professors or research areas in my letter?",
      answer: "Yes, mentioning specific professors, research groups, or projects at the university shows that you've done your research and have genuine interest in the program. However, only include these if they truly align with your interests and goals."
    },
  ];

  const technicalFaqs = [
    {
      question: "What format should I use for my motivation letter?",
      answer: "Your motivation letter should be in a standard business letter format, preferably as a PDF document. Use a professional font (like Arial, Calibri, or Times New Roman) in size 11-12pt with 1-1.5 line spacing."
    },
    {
      question: "Do I need to sign my motivation letter?",
      answer: "If submitting a physical copy, yes, you should sign your letter. For digital submissions, a typed name is usually sufficient, though you can also include a digital signature if you prefer."
    },
    {
      question: "Should I include my contact information in the letter?",
      answer: "Yes, include your contact information (email, phone number) at the top of the letter along with the date. This is standard business letter format even though the application system already has your contact details."
    },
  ];

  const filteredSamples = selectedProgram 
    ? motivationLetterSamples.filter(sample => sample.program === selectedProgram) 
    : motivationLetterSamples;

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <div className="mb-6">
          <Link to="/apply" className="text-deep-teal hover:underline mb-2 inline-block">
            &larr; Back to Apply for Scholarship
          </Link>
          <h1 className="font-syne font-bold text-3xl md:text-4xl mb-2">Letter of Motivation Guide</h1>
          <p className="text-gray-600 mb-4">
            Write a compelling motivation letter that increases your chances of selection
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> Do not copy these samples directly. Plagiarism in motivation letters can lead to application rejection. Use these examples as inspiration to write your own unique letter.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div className="md:col-span-2">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">How to Write an Effective Motivation Letter</h2>
                
                <div className="space-y-6">
                  <ExpandableSection title="1. Introduction and Purpose" defaultOpen={false}>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Begin with a formal greeting addressed to the selection committee</li>
                      <li>Clearly state which program and university you're applying to</li>
                      <li>Include a brief but compelling statement about why you're interested in this specific program</li>
                      <li>End the introduction with a thesis statement summarizing your key qualifications</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md mt-3">
                      <p className="text-sm text-blue-800">
                        <strong>Example opening:</strong> "Dear Selection Committee, I am writing to express my strong interest in the Master's program in [Program Name] at [University Name], where I hope to expand my knowledge in [specific aspect of the field] and contribute to research in [specific area]."
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  <ExpandableSection title="2. Academic and Professional Background" defaultOpen={false}>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Highlight relevant degrees, courses, and academic achievements</li>
                      <li>Mention your GPA or class ranking if it's impressive</li>
                      <li>Describe relevant work experience, internships, or research projects</li>
                      <li>Explain how your background has prepared you for this program</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md mt-3">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Don't just list achievements - explain how they relate to your chosen program and how they've shaped your academic interests.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  <ExpandableSection title="3. Why This Program/University" defaultOpen={false}>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Demonstrate knowledge about the program's curriculum, faculty, and research areas</li>
                      <li>Explain specifically why this program matches your academic interests</li>
                      <li>Mention particular courses, specializations, or research opportunities you're excited about</li>
                      <li>Show why studying in Hungary appeals to you (beyond just the scholarship)</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md mt-3">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> This section should be customized for each application. Generic statements that could apply to any university will weaken your letter.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  <ExpandableSection title="4. Future Plans and Goals" defaultOpen={false}>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Outline your short-term and long-term career goals</li>
                      <li>Explain how this program will help you achieve these goals</li>
                      <li>Describe how you plan to use your education to benefit your home country</li>
                      <li>Demonstrate that you have a clear vision for your future</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-md mt-3">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Be specific about how you'll use your knowledge when you return to Pakistan. Scholarship committees value applicants who will become ambassadors for the program.
                      </p>
                    </div>
                  </ExpandableSection>
                  
                  <ExpandableSection title="5. Conclusion" defaultOpen={false}>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Summarize your key qualifications and interest in the program</li>
                      <li>Express enthusiasm for the opportunity to study at the university</li>
                      <li>Thank the committee for considering your application</li>
                      <li>End with a formal closing (e.g., "Sincerely," followed by your name)</li>
                    </ul>
                  </ExpandableSection>
                </div>
                
                <div className="mt-8 space-y-6">
                  <h3 className="font-syne font-semibold text-lg">Download Sample Motivation Letters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-deep-teal flex items-center">
                      <Download size={16} className="mr-2" /> Successful Motivation Letters (PDF)
                    </Button>
                    <Button className="bg-deep-teal flex items-center">
                      <Download size={16} className="mr-2" /> Letter of Motivation Template
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-syne font-semibold text-lg mb-4">Helpful Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="https://www.grammarly.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                      <ExternalLink size={16} className="mr-2 text-deep-teal" />
                      <span>Grammarly - Grammar Checker</span>
                    </a>
                    <a 
                      href="https://hemingwayapp.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                      <ExternalLink size={16} className="mr-2 text-deep-teal" />
                      <span>Hemingway App - Readability</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Sample Letters Section */}
            <div className="mt-8">
              <h2 className="font-syne font-semibold text-xl mb-4">Sample Motivation Letters</h2>
              
              <div className="mb-4">
                <label className="block mb-2">Filter by Program:</label>
                <Select onValueChange={setSelectedProgram}>
                  <SelectTrigger className="w-full md:w-[300px]">
                    <SelectValue placeholder="All Programs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Programs</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Medicine">Medicine</SelectItem>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                {filteredSamples.map((sample, index) => (
                  <Card key={index} className="bg-white shadow-sm overflow-hidden">
                    <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
                      <div>
                        <h3 className="font-syne font-semibold">{sample.title}</h3>
                        <p className="text-sm text-gray-600">{sample.program}</p>
                      </div>
                      <Badge variant={sample.type === "senior" ? "outline" : "secondary"} className="text-xs">
                        {sample.type === "senior" ? "Senior's Letter" : "Sample Template"}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 max-h-64 overflow-y-auto">{sample.content.substring(0, 300)}...</pre>
                      <div className="mt-4 text-center">
                        <Button variant="outline" className="text-deep-teal">
                          View Full Letter
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQs Section */}
            <div className="mt-8">
              <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="space-y-3">
                  {faqs.map((faq, index) => (
                    <ExpandableSection key={index} title={faq.question}>
                      <p className="text-gray-700">{faq.answer}</p>
                    </ExpandableSection>
                  ))}
                </TabsContent>
                
                <TabsContent value="technical" className="space-y-3">
                  {technicalFaqs.map((faq, index) => (
                    <ExpandableSection key={index} title={faq.question}>
                      <p className="text-gray-700">{faq.answer}</p>
                    </ExpandableSection>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm border-t-4 border-deep-teal">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Video Tutorials</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.youtube.com/watch?v=example1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-deep-teal hover:underline"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      How to Structure Your Motivation Letter
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/watch?v=example2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-deep-teal hover:underline"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Common Mistakes to Avoid
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/watch?v=example3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-deep-teal hover:underline"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Tips from Successful Applicants
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Key Components Checklist</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Formal greeting and introduction</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Academic background and achievements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Specific interest in the program</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Research on university and faculty</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Clear future goals and plans</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Connection to Pakistan's development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Formal closing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 border border-gray-300 rounded mr-3 flex-shrink-0"></div>
                    <span>Proofread for grammar and spelling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm border-t-4 border-amber-500">
              <CardContent className="p-5">
                <h3 className="font-syne font-medium text-lg mb-3">Writing Tips</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Be concise and to the point (1-2 pages)</li>
                  <li>Show, don't tell - use specific examples</li>
                  <li>Avoid clichés and overly emotional language</li>
                  <li>Address potential concerns proactively</li>
                  <li>Have someone else review your letter</li>
                  <li>Personalize each letter for the specific program</li>
                  <li>Focus on what you can contribute, not just what you'll gain</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LetterOfMotivation;
