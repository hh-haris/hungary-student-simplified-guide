
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Search, Youtube, AlertCircle, ArrowLeft } from "lucide-react";

const LetterOfMotivation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState("all");

  const fields = [
    "All",
    "Engineering",
    "Medicine",
    "Computer Science",
    "Business",
    "Arts & Humanities",
    "Sciences"
  ];

  const sampleLOMs = [
    {
      id: "1",
      title: "Computer Science Sample",
      field: "Computer Science",
      type: "sample", // sample or senior
      preview: "As a student of computer science with a passion for artificial intelligence and machine learning...",
      author: "Prepared by Education Team"
    },
    {
      id: "2",
      title: "Mechanical Engineering Sample",
      field: "Engineering",
      type: "sample",
      preview: "My journey in mechanical engineering began when I first dismantled an engine during my high school years...",
      author: "Prepared by Education Team"
    },
    {
      id: "3",
      title: "Medicine Sample",
      field: "Medicine",
      type: "sample",
      preview: "Growing up in a small town with limited healthcare facilities, I witnessed firsthand the challenges...",
      author: "Prepared by Education Team"
    },
    {
      id: "4",
      title: "Business Administration Sample",
      field: "Business",
      type: "sample",
      preview: "My interest in business administration stems from my early entrepreneurial experiences...",
      author: "Prepared by Education Team"
    },
    {
      id: "5",
      title: "Computer Science - Real Example",
      field: "Computer Science",
      type: "senior",
      preview: "With a strong foundation in programming and a passion for solving real-world problems...",
      author: "Ahmed, Stipendium Hungaricum 2022"
    },
    {
      id: "6",
      title: "Civil Engineering - Real Example",
      field: "Engineering",
      type: "senior",
      preview: "My fascination with structures and infrastructure development began during my undergraduate studies...",
      author: "Sara, Stipendium Hungaricum 2023"
    }
  ];

  const generalTips = [
    {
      title: "Understand the Purpose",
      content: "A motivation letter explains why you're the right candidate for the program and university. It should connect your background, interests, and career goals to the specific program."
    },
    {
      title: "Research Thoroughly",
      content: "Research the university and program thoroughly. Mention specific courses, professors, research groups, or facilities that interest you."
    },
    {
      title: "Be Personal Yet Professional",
      content: "Share personal experiences and motivations, but maintain a professional tone. Avoid clichés and overly emotional language."
    },
    {
      title: "Structure Properly",
      content: "Follow a clear structure: Introduction (who you are, which program), Body (why this program, why this university, your qualifications), Conclusion (summarize and look ahead)."
    },
    {
      title: "Be Specific",
      content: "Provide specific examples of your achievements, experiences, and how they relate to your chosen field. Avoid vague statements."
    }
  ];

  const tools = [
    {
      name: "Grammarly",
      description: "For checking grammar, spelling, and writing style",
      url: "https://www.grammarly.com/"
    },
    {
      name: "Hemingway Editor",
      description: "To make your writing clear and concise",
      url: "https://hemingwayapp.com/"
    },
    {
      name: "QuillBot",
      description: "For paraphrasing and improving sentence structure",
      url: "https://quillbot.com/"
    }
  ];

  const youtubeVideos = [
    {
      title: "How to Write a Winning Motivation Letter",
      url: "https://www.youtube.com/watch?v=example1",
      author: "StudyAbroadTips"
    },
    {
      title: "Motivation Letter vs. Personal Statement",
      url: "https://www.youtube.com/watch?v=example2",
      author: "Scholarship Guide"
    },
    {
      title: "Common Mistakes in Motivation Letters",
      url: "https://www.youtube.com/watch?v=example3",
      author: "InternationalStudentHelp"
    }
  ];

  const faqs = [
    {
      question: "How long should my motivation letter be?",
      answer: "A motivation letter for the Stipendium Hungaricum scholarship should be between 500-800 words (1-2 pages). It should be concise yet comprehensive enough to cover your background, motivations, and goals."
    },
    {
      question: "Should I write a different motivation letter for each program I apply to?",
      answer: "Yes, you should customize your motivation letter for each program application. While the basic structure may remain similar, tailoring the content to address specific aspects of each program and university demonstrates genuine interest and thorough research."
    },
    {
      question: "What common mistakes should I avoid?",
      answer: "Common mistakes include: being too generic, focusing too much on personal hardship instead of academic interests, including irrelevant information, grammatical errors, exceeding the word limit, and copy-pasting from samples or templates. Always write an original letter that represents your unique background and aspirations."
    },
    {
      question: "How do I make my motivation letter stand out?",
      answer: "To make your letter stand out, be specific about why you chose the particular program and university, connect your past experiences with your future goals, demonstrate knowledge of the program curriculum, mention specific professors or research areas that interest you, and show enthusiasm without being overly emotional."
    },
    {
      question: "Should I mention my financial situation or need for a scholarship?",
      answer: "While it's acceptable to briefly mention that the scholarship would enable you to pursue your academic goals, avoid making financial need the focus of your motivation letter. Instead, concentrate on your academic qualifications, research interests, and career aspirations."
    }
  ];

  const filteredLOMs = sampleLOMs.filter(lom => {
    const matchesField = selectedField.toLowerCase() === 'all' || lom.field.toLowerCase().includes(selectedField.toLowerCase());
    const matchesSearch = lom.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         lom.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesField && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <div className="mb-6">
          <Link to="/apply/tempus" className="text-deep-teal hover:underline inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Tempus Portal Guide
          </Link>
          <h1 className="font-syne font-bold text-3xl md:text-4xl mb-2">Letter of Motivation Guide</h1>
          <p className="text-gray-600 mb-6">
            Learn how to craft a compelling motivation letter for your Stipendium Hungaricum application
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 p-4 rounded-md mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h3 className="font-syne font-medium text-red-800 mb-1">Important Disclaimer</h3>
              <p className="text-red-700 text-sm">
                Do not copy any sample letter of motivation. Plagiarism is strictly prohibited and will result in 
                immediate disqualification. These samples are provided only as references for structure and style. 
                Your letter must reflect your unique background, motivations, and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="guide" className="mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="guide">Writing Guide</TabsTrigger>
            <TabsTrigger value="samples">Sample Letters</TabsTrigger>
            <TabsTrigger value="tools">Helpful Tools</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          
          {/* Guide Tab Content */}
          <TabsContent value="guide" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">How to Write an Effective Motivation Letter</h2>
                
                <div className="space-y-8">
                  {/* Structure Section */}
                  <section>
                    <h3 className="font-syne font-medium text-lg mb-4 pb-2 border-b border-gray-200">
                      Recommended Structure
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="font-medium text-deep-teal mb-2">1. Introduction</div>
                          <ul className="text-sm space-y-2">
                            <li>• Your name and current academic status</li>
                            <li>• Which program you're applying for</li>
                            <li>• A brief statement of your interest in the program</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <div className="font-medium text-deep-teal mb-2">2. Body</div>
                          <ul className="text-sm space-y-2">
                            <li>• Your academic background and achievements</li>
                            <li>• Why you're interested in this specific field</li>
                            <li>• Why you chose this university/program</li>
                            <li>• How the program aligns with your career goals</li>
                            <li>• Your relevant skills and experiences</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <div className="font-medium text-deep-teal mb-2">3. Conclusion</div>
                          <ul className="text-sm space-y-2">
                            <li>• Summarize your main points</li>
                            <li>• Restate your interest and motivation</li>
                            <li>• Express gratitude for consideration</li>
                            <li>• Look forward to positive response</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>
                  
                  {/* Tips Section */}
                  <section>
                    <h3 className="font-syne font-medium text-lg mb-4 pb-2 border-b border-gray-200">
                      Essential Writing Tips
                    </h3>
                    <div className="space-y-4">
                      {generalTips.map((tip, index) => (
                        <ExpandableCard key={index} title={tip.title}>
                          <p className="text-gray-700">{tip.content}</p>
                        </ExpandableCard>
                      ))}
                    </div>
                  </section>
                  
                  {/* Do's and Don'ts */}
                  <section>
                    <h3 className="font-syne font-medium text-lg mb-4 pb-2 border-b border-gray-200">
                      Do's and Don'ts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-l-4 border-l-green-500">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-green-700 mb-3">Do's</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="mr-2">✅</span>
                              <span>Customize for each program and university</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">✅</span>
                              <span>Use concrete examples to support your claims</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">✅</span>
                              <span>Demonstrate knowledge of the program</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">✅</span>
                              <span>Show enthusiasm and genuine interest</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">✅</span>
                              <span>Proofread carefully for errors</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-l-red-500">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-red-700 mb-3">Don'ts</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="mr-2">❌</span>
                              <span>Copy from samples or templates</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">❌</span>
                              <span>Include irrelevant personal information</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">❌</span>
                              <span>Focus too much on financial hardship</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">❌</span>
                              <span>Write overly long paragraphs</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">❌</span>
                              <span>Use clichés or exaggerated language</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
            
            {/* Download Templates */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-4">Download Resources</h2>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    <span>Motivation Letter Template (Word)</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    <span>Motivation Letter Checklist (PDF)</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Samples Tab Content */}
          <TabsContent value="samples">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="font-syne font-semibold text-xl mb-4">Sample Letters of Motivation</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Below are sample letters for different fields and programs. These are provided for reference only. 
                    Your letter must be unique to your own background and aspirations.
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <label htmlFor="search" className="sr-only">Search</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          id="search"
                          placeholder="Search samples..."
                          className="pl-10"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-auto">
                      <select 
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-deep-teal"
                        value={selectedField}
                        onChange={(e) => setSelectedField(e.target.value)}
                      >
                        {fields.map(field => (
                          <option key={field} value={field.toLowerCase()}>{field}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {filteredLOMs.length > 0 ? (
                      filteredLOMs.map((lom) => (
                        <Card key={lom.id} className="border border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium text-deep-teal">{lom.title}</h3>
                              <Badge variant={lom.type === "sample" ? "default" : "outline"} className="capitalize">
                                {lom.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              Field: <span className="font-medium">{lom.field}</span> | 
                              <span className="ml-1 text-xs text-gray-500">{lom.author}</span>
                            </p>
                            <div className="text-sm bg-gray-50 p-3 rounded-md border border-gray-200 mb-3 select-none">
                              {lom.preview}... <span className="text-gray-400">(preview only)</span>
                            </div>
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                              <FileText className="h-4 w-4 mr-1" />
                              View Full Sample
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8 bg-gray-50 rounded-md">
                        <FileText className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                        <p className="text-gray-600">No matching samples found</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-syne font-medium text-lg mb-4">Past Successful Letters</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    These are real letters from students who were successfully admitted to Hungarian universities 
                    through the Stipendium Hungaricum program. Personal information has been removed.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      <span>Successful Letters Collection 2023 (PDF)</span>
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      <span>Successful Letters Collection 2022 (PDF)</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Tools Tab Content */}
          <TabsContent value="tools">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Helpful Tools & Resources</h2>
                
                <section className="mb-8">
                  <h3 className="font-syne font-medium text-lg mb-4">Writing & Editing Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tools.map((tool, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h4 className="font-medium text-deep-teal mb-2">{tool.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                          <a 
                            href={tool.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline inline-flex items-center"
                          >
                            Visit Website <ArrowLeft className="h-3.5 w-3.5 ml-1 rotate-180" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
                
                <section>
                  <h3 className="font-syne font-medium text-lg mb-4">Video Tutorials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {youtubeVideos.map((video, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center mb-3">
                            <Youtube className="h-5 w-5 text-red-600 mr-2" />
                            <h4 className="font-medium">{video.title}</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">By: {video.author}</p>
                          <a 
                            href={video.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            Watch on YouTube
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* FAQs Tab Content */}
          <TabsContent value="faqs">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <ExpandableCard key={index} title={faq.question} initialExpanded={index === 0}>
                      <p className="text-gray-700">{faq.answer}</p>
                    </ExpandableCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default LetterOfMotivation;
