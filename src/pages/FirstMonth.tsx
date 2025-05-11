import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, ShoppingCart, Bus, Coffee, CreditCard, 
  Utensils, Phone, Wifi, MapPin, FileText, AlertCircle 
} from "lucide-react";
import WhatToDoAfterArrival from "@/components/afterArrival/WhatToDoAfterArrival";

const FirstMonth = () => {
  // Data for the "What to Do After Arrival" section
  const arrivalSteps = [
    {
      title: "Residence Permit Registration",
      description: "Register for your residence permit within 3 days of arrival in Hungary.",
      deadline: "Within 3 days of arrival",
      where: "Immigration Office (National Directorate-General for Aliens Policing)",
      documents: [
        "Passport with visa",
        "Letter of acceptance from university",
        "Proof of accommodation",
        "Passport-sized photos (3-4 copies)",
        "Application form (available at the office)"
      ],
      tips: "Schedule an appointment online before going to avoid long waiting times. Your university international office can help with the process."
    },
    {
      title: "University Enrollment & Student ID",
      description: "Complete your enrollment process at the university and get your student ID card.",
      deadline: "First week of the semester",
      where: "University Registrar's Office / International Office",
      documents: [
        "Passport with visa and residence permit",
        "Original educational documents",
        "Medical certificate",
        "Passport-sized photos",
        "Letter of acceptance"
      ],
      tips: "Attend orientation sessions arranged by your university for international students. They will guide you through the enrollment process."
    },
    {
      title: "Open a Bank Account",
      description: "Open a Hungarian bank account to receive your scholarship funds and manage your finances.",
      deadline: "Within first 2 weeks",
      where: "Any local bank (OTP, K&H, Erste, etc.)",
      documents: [
        "Passport",
        "Residence permit",
        "Proof of address",
        "Student ID card",
        "Tax identification number (if already obtained)"
      ],
      tips: "Compare different banks for student-friendly accounts with lower fees. Some banks offer special packages for scholarship students."
    },
    {
      title: "Register with a General Practitioner",
      description: "Register with a local doctor for basic healthcare services.",
      deadline: "Within first month",
      where: "Local clinic near your residence",
      documents: [
        "Health insurance card",
        "Passport",
        "Residence permit",
        "Proof of address"
      ],
      tips: "Your university usually provides information about healthcare services for students. Many universities have their own health centers."
    },
    {
      title: "Public Transportation Pass",
      description: "Get a monthly or semester pass for public transportation.",
      deadline: "First week of arrival",
      where: "BKK Customer Service Centers or automated ticket machines",
      documents: [
        "Student ID card",
        "Passport"
      ],
      tips: "Students get significant discounts on public transportation. Check if your university is accessible by public transport and plan your route."
    }
  ];

  const firstWeekTasks = [
    {
      task: "Register at university",
      description: "Visit the International Office to complete your registration and get your student ID.",
      deadline: "Within first 3 days",
      priority: "high"
    },
    {
      task: "Apply for residence permit",
      description: "Visit Immigration Office with your documents to apply for a residence permit.",
      deadline: "Within first week",
      priority: "high"
    },
    {
      task: "Open a bank account",
      description: "Open a Hungarian bank account to receive your scholarship stipend.",
      deadline: "Within first week",
      priority: "high"
    },
    {
      task: "Get a Hungarian phone number",
      description: "Purchase a SIM card from local providers like Vodafone, Telekom, or Telenor.",
      deadline: "Within first week",
      priority: "medium"
    },
    {
      task: "Find accommodation",
      description: "If not already arranged, secure your dormitory room or apartment.",
      deadline: "Immediately upon arrival",
      priority: "high"
    }
  ];

  const firstMonthTasks = [
    {
      task: "Register with TAJ (Health Insurance)",
      description: "Visit the National Health Insurance Fund to register for health insurance.",
      deadline: "Within first month",
      priority: "high"
    },
    {
      task: "Attend orientation week",
      description: "Participate in university orientation activities to learn about facilities and meet other students.",
      deadline: "Usually second week",
      priority: "medium"
    },
    {
      task: "Get student travel card",
      description: "Apply for a student travel card to get discounts on public transportation.",
      deadline: "Within first month",
      priority: "medium"
    },
    {
      task: "Register for courses",
      description: "Select and register for your courses through the university's system.",
      deadline: "Before classes begin",
      priority: "high"
    },
    {
      task: "Explore the city",
      description: "Familiarize yourself with important locations like hospitals, police station, and shopping centers.",
      deadline: "First few weeks",
      priority: "low"
    }
  ];

  const packingList = [
    {
      category: "Documents",
      items: [
        "Passport and visa",
        "Acceptance letter",
        "Scholarship letter",
        "Original educational certificates",
        "Birth certificate",
        "Medical records",
        "Passport-sized photographs",
        "International driving license (if needed)"
      ]
    },
    {
      category: "Electronics",
      items: [
        "Laptop and charger",
        "Phone and charger",
        "Power adaptors (Type F plugs)",
        "Headphones",
        "Calculator (for technical courses)",
        "Camera (optional)"
      ]
    },
    {
      category: "Clothing",
      items: [
        "Winter clothes (heavy jacket, sweaters, thermals)",
        "Rain gear (umbrella, waterproof jacket)",
        "Formal attire for presentations and events",
        "Comfortable shoes for walking",
        "Traditional Pakistani clothes for cultural events"
      ]
    },
    {
      category: "Personal Items",
      items: [
        "Prescription medications (with doctor's note)",
        "Basic toiletries for first few days",
        "Eyeglasses/contact lenses",
        "Prayer mat and religious items",
        "Photos of family and friends"
      ]
    }
  ];

  const skillsToLearn = [
    {
      skill: "Basic Hungarian phrases",
      why: "While you can get by with English in universities and major cities, knowing basic Hungarian phrases will help in daily interactions with locals."
    },
    {
      skill: "Cooking simple meals",
      why: "Eating out regularly can be expensive. Learning to cook simple, nutritious meals will help manage your budget."
    },
    {
      skill: "Public transportation navigation",
      why: "Understanding the public transportation system will help you move around efficiently and save time."
    },
    {
      skill: "Budgeting",
      why: "Managing your monthly stipend effectively is crucial to avoid financial stress."
    },
    {
      skill: "Laundry and basic housekeeping",
      why: "Most students will need to handle their laundry and cleaning independently."
    }
  ];

  const commonMistakes = [
    {
      mistake: "Not registering for residence permit on time",
      consequence: "Potential legal issues and fines for staying without proper documentation."
    },
    {
      mistake: "Ignoring orientation sessions",
      consequence: "Missing crucial information about university processes and available resources."
    },
    {
      mistake: "Not understanding the grading system",
      consequence: "Misconceptions about academic performance and requirements."
    },
    {
      mistake: "Isolating from local community",
      consequence: "Missing opportunities for cultural integration and language practice."
    },
    {
      mistake: "Not keeping track of important deadlines",
      consequence: "Missing course registration, scholarship requirements, or residence permit renewal."
    }
  ];

  const hungaryFacts = [
    {
      title: "Language",
      description: "Hungarian (Magyar) is the official language and is unrelated to most European languages. It belongs to the Finno-Ugric language family."
    },
    {
      title: "Currency",
      description: "The currency is the Hungarian Forint (HUF). As of 2023, approximately 1 USD ≈ 350-370 HUF."
    },
    {
      title: "Weather",
      description: "Hungary has four distinct seasons. Winters can be cold (-5°C to 5°C) with occasional snow, and summers are warm (20°C to 35°C)."
    },
    {
      title: "Transportation",
      description: "Public transportation is efficient and includes buses, trams, trolleybuses, and metros in larger cities. Monthly student passes offer significant discounts."
    },
    {
      title: "Food Culture",
      description: "Hungarian cuisine is rich and flavorful, known for dishes like goulash, chicken paprikash, and lángos. Vegetarian options are increasingly available in cities."
    },
    {
      title: "Healthcare",
      description: "Students with TAJ cards have access to free or subsidized healthcare services. Many doctors speak English, especially in university cities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6">Your First Month in Hungary</h1>
        
        {/* What to Do After Arrival Section */}
        <section className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6">Essential Steps After Arrival</h2>
          <WhatToDoAfterArrival steps={arrivalSteps} />
        </section>

        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6 flex items-center">
            <Briefcase className="h-6 w-6 mr-2 text-accent-orange" />
            Packing List
          </h2>
          
          <div className="space-y-4">
            {packingList.map((category, index) => (
              <ExpandableCard key={index} title={category.category}>
                <ul className="list-disc pl-5 space-y-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </ExpandableCard>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-blue-800 text-center">
              <strong>Tip:</strong> Check your airline's baggage allowance before packing. Consider buying bulky items like winter clothes in Hungary if your luggage space is limited.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6 flex items-center">
            <Lightbulb className="h-6 w-6 mr-2 text-accent-orange" />
            Skills to Learn Before Arrival
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsToLearn.map((skill, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/70 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-5">
                  <h3 className="font-syne font-semibold text-lg mb-2">{skill.skill}</h3>
                  <p className="text-gray-600">{skill.why}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6 flex items-center">
            <Clock className="h-6 w-6 mr-2 text-accent-orange" />
            What to Do After Arrival
          </h2>
          
          <div className="mb-8">
            <h3 className="font-syne font-semibold text-xl mb-4">First Week Checklist</h3>
            
            <div className="space-y-4">
              {firstWeekTasks.map((task, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  task.priority === 'high' ? 'border-l-4 border-l-red-500 bg-red-50' : 
                  task.priority === 'medium' ? 'border-l-4 border-l-orange-500 bg-orange-50' : 
                  'border-l-4 border-l-blue-500 bg-blue-50'
                }`}>
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{task.task}</h4>
                    <span className={`text-sm px-2 py-1 rounded ${
                      task.priority === 'high' ? 'bg-red-200 text-red-800' : 
                      task.priority === 'medium' ? 'bg-orange-200 text-orange-800' : 
                      'bg-blue-200 text-blue-800'
                    }`}>
                      {task.deadline}
                    </span>
                  </div>
                  <p className="text-gray-600">{task.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-syne font-semibold text-xl mb-4">First Month Checklist</h3>
            
            <div className="space-y-4">
              {firstMonthTasks.map((task, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  task.priority === 'high' ? 'border-l-4 border-l-red-500 bg-red-50' : 
                  task.priority === 'medium' ? 'border-l-4 border-l-orange-500 bg-orange-50' : 
                  'border-l-4 border-l-blue-500 bg-blue-50'
                }`}>
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{task.task}</h4>
                    <span className={`text-sm px-2 py-1 rounded ${
                      task.priority === 'high' ? 'bg-red-200 text-red-800' : 
                      task.priority === 'medium' ? 'bg-orange-200 text-orange-800' : 
                      'bg-blue-200 text-blue-800'
                    }`}>
                      {task.deadline}
                    </span>
                  </div>
                  <p className="text-gray-600">{task.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6 flex items-center">
            <Landmark className="h-6 w-6 mr-2 text-accent-orange" />
            Getting Accommodation
          </h2>
          
          <Card className="backdrop-blur-sm bg-white/70 border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="font-syne font-semibold text-lg mb-3">Dormitory Options</h3>
                <p className="text-gray-700 mb-3">
                  Most scholarship recipients are offered dormitory accommodation. University dormitories are affordable and convenient but may have shared facilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Apply early through your university international office</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Typical cost: 30,000-50,000 HUF per month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Usually includes utilities and internet</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-syne font-semibold text-lg mb-3">Private Accommodation</h3>
                <p className="text-gray-700 mb-3">
                  If you prefer private accommodation, start searching well before arrival. Shared apartments are common among students.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Use websites like alberlet.hu or ingatlan.com</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Typical cost: 70,000-120,000 HUF for a shared apartment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Be prepared for deposit (usually 2 months rent)</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-md">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-800">
                    Never transfer money before seeing the property in person or without signing a proper contract. 
                    Ask your university international office for assistance with reviewing rental contracts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2 text-accent-orange" />
            Common Mistakes to Avoid
          </h2>
          
          <div className="space-y-4">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/70 border-l-4 border-l-red-500 border-gray-100 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-syne font-semibold text-lg mb-2">{mistake.mistake}</h3>
                  <p className="text-gray-600">{mistake.consequence}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="font-syne font-semibold text-2xl mb-6 flex items-center">
            <Globe className="h-6 w-6 mr-2 text-accent-orange" />
            Facts about Hungary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hungaryFacts.map((fact, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/70 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-5">
                  <h3 className="font-syne font-semibold text-lg mb-2">{fact.title}</h3>
                  <p className="text-gray-600">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-syne font-semibold text-lg">Looking for Other Opportunities?</h3>
              <p className="text-gray-700">Explore alternative scholarship options for international education</p>
            </div>
            <Button asChild className="bg-deep-teal hover:bg-deep-teal/90 text-white">
              <Link to="/alternative-scholarships">
                Alternative Scholarships <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FirstMonth;
