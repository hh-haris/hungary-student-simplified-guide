import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Building, GraduationCap, Heart, Briefcase, Landmark, Users, CheckCircle } from "lucide-react";

// Mock city data
const cities = [
  {
    id: "budapest",
    name: "Budapest",
    overview: "Budapest is the capital and largest city of Hungary, serving as the country's principal political, cultural, commercial, industrial, and transportation center. It has a rich history, beautiful architecture, and vibrant cultural scene.",
    banner: "https://images.unsplash.com/photo-1516550893885-985c994071f9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1440",
    lifeDetails: "Life in Budapest is dynamic and diverse. The city offers excellent public transportation, numerous cultural events, and a wide range of recreational activities. It's a cosmopolitan city with a good balance of modern and traditional aspects.",
    costOfLiving: "Monthly expenses for a student range from €400-600 including accommodation. Dormitory costs range from €130-200, while private apartments start from €300-400.",
    jobOpportunities: "Budapest offers many part-time job opportunities for international students, particularly in the tourism sector, IT industry, and multinational companies. Knowledge of English is usually sufficient for many positions.",
    universities: ["Budapest University of Technology and Economics", "Eötvös Loránd University", "Corvinus University of Budapest", "Semmelweis University"],
    facts: [
      "Budapest is actually a combination of two cities, Buda and Pest, divided by the Danube River",
      "The city has the oldest metro line in continental Europe",
      "Budapest has more than 80 geothermal springs",
      "It's home to the largest thermal water cave system in Europe",
      "The Hungarian Parliament Building is one of the largest parliament buildings in the world"
    ],
    opportunities: [
      "Strong tech and startup scene with many international companies",
      "Cultural exchange programs and international student communities",
      "Research opportunities at prestigious universities",
      "Central location makes travel around Europe convenient and affordable",
      "Growing demand for English speakers in various industries"
    ],
    studentLife: "Budapest has a vibrant student life with numerous events, festivals, and activities throughout the year. The city has many affordable cafes, restaurants, and bars catering to students. The diverse international community makes it easy for foreign students to adapt and find friends.",
    healthcareSystem: "Hungary has a universal healthcare system. International students with a valid residence permit and student status are entitled to healthcare services. Many doctors in Budapest speak English, especially in university clinics.",
    transportOptions: "Budapest has an extensive public transportation system including metro lines, trams, buses, and suburban railway. Students can purchase discounted monthly passes. The city is also bike-friendly with many cycling paths."
  },
  {
    id: "debrecen",
    name: "Debrecen",
    overview: "Debrecen is the second-largest city in Hungary and serves as the regional center of the Northern Great Plain region. It has a rich cultural heritage and is an important educational, economic and cultural hub.",
    banner: "https://images.unsplash.com/photo-1613964915882-ab656098ec64?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1440",
    lifeDetails: "Debrecen offers a more relaxed lifestyle compared to Budapest, with a lower cost of living but still with access to all necessary amenities. The city has a cozy atmosphere with a blend of historical charm and modern developments.",
    costOfLiving: "Monthly expenses for a student range from €300-450 including accommodation. Dormitory costs range from €80-150, while private apartments start from €200-300.",
    jobOpportunities: "Debrecen has been developing rapidly with new industrial investments. There are opportunities in manufacturing, IT, and service sectors. Some knowledge of Hungarian may be advantageous for many positions.",
    universities: ["University of Debrecen"],
    facts: [
      "Debrecen was the capital of Hungary twice in its history",
      "Known as the 'Calvinist Rome' due to its historical importance for the Reformed Church",
      "Home to the largest Reformed Church in Hungary",
      "Hosts the Flower Carnival every August, a major cultural event",
      "Has one of the oldest continuously operating theaters in Hungary"
    ],
    opportunities: [
      "Growing industrial sector with international companies like BMW investing in the area",
      "Strong medical and health sciences research environment",
      "More affordable living and study conditions compared to the capital",
      "Close-knit international student community",
      "Easy access to natural attractions like Hortobágy National Park"
    ],
    studentLife: "Debrecen has a growing international student community, especially at the Medical School. The city offers a variety of cultural activities and sports facilities. The compact size of the city makes it easy to get around and build a community.",
    healthcareSystem: "Debrecen is known for its medical university and excellent healthcare facilities. Students have access to university clinics with English-speaking staff, making healthcare accessible for international students.",
    transportOptions: "The public transportation in Debrecen consists mainly of trams and buses. The city is compact and easily navigable by bicycle. Many students also walk to get around the city center."
  },
  {
    id: "szeged",
    name: "Szeged",
    overview: "Szeged is the third-largest city in Hungary, located near the southern border. It's often called the 'City of Sunshine' due to its high number of sunny days. The city is known for its beautiful architecture, universities, and cultural life.",
    banner: "https://images.unsplash.com/photo-1605131545453-2c1cb364186b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1440",
    lifeDetails: "Life in Szeged is characterized by a relaxed pace and student-friendly atmosphere. The city is compact, making it easy to navigate by bike or public transport. It offers a good balance of urban amenities and peaceful environment.",
    costOfLiving: "Monthly expenses for a student range from €300-400 including accommodation. Dormitory costs range from €80-140, while private apartments start from €200-280.",
    jobOpportunities: "Szeged has opportunities in research, IT, and service sectors. The ELI-ALPS laser research center provides specialized opportunities for those in scientific fields. Part-time work is available, though Hungarian language skills may be helpful.",
    universities: ["University of Szeged"],
    facts: [
      "Szeged was almost completely destroyed by a flood in 1879 and was rebuilt with help from European cities",
      "The city hosts the famous Open-Air Festival (Szabadtéri Játékok) every summer",
      "Known for its paprika production and traditional Hungarian cuisine",
      "Has a unique architectural style influenced by Art Nouveau",
      "The main building of the University of Szeged was originally built as a palace"
    ],
    opportunities: [
      "Strong research environment, especially in biology, physics, and computer science",
      "Affordable cost of living with good quality of life",
      "Vibrant student culture with many events and activities",
      "Proximity to Serbia and Romania allows for easy international travel",
      "Growing biotechnology and IT sectors providing career opportunities"
    ],
    studentLife: "Szeged is a true university town with a sizable student population. The city offers many cultural events, festivals, and recreational activities. The proximity of the Tisza River provides opportunities for water sports and relaxation.",
    healthcareSystem: "As a university city with a strong medical faculty, Szeged offers good healthcare services. The university clinics provide services in various languages, making healthcare accessible for international students.",
    transportOptions: "Szeged has an efficient public transportation system with trams and buses. The city is very bicycle-friendly with dedicated cycling paths. Many places are within walking distance in the compact city center."
  },
  {
    id: "pecs",
    name: "Pécs",
    overview: "Pécs is a city in southern Hungary known for its rich history, Mediterranean atmosphere, and cultural heritage. It was the European Capital of Culture in 2010 and is home to the oldest university in Hungary.",
    banner: "https://images.unsplash.com/photo-1578996793307-05832063a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1440",
    lifeDetails: "Pécs offers a relaxed, Mediterranean-like lifestyle with a rich cultural scene. The city has a charming historic center, vibrant arts community, and welcoming atmosphere. Its southern location gives it milder winters compared to other Hungarian cities.",
    costOfLiving: "Monthly expenses for a student range from €280-380 including accommodation. Dormitory costs range from €70-130, while private apartments start from €180-250.",
    jobOpportunities: "Job opportunities in Pécs include positions in tourism, education, and services. The city has a growing IT sector. Knowledge of Hungarian can be beneficial for finding part-time work.",
    universities: ["University of Pécs"],
    facts: [
      "Pécs has been inhabited since Roman times, when it was known as 'Sopianae'",
      "The Early Christian Necropolis of Pécs is a UNESCO World Heritage site",
      "The city has a distinctly Mediterranean feel due to its climate and architecture",
      "It's known for its ceramics manufacturing, especially the Zsolnay porcelain factory",
      "The University of Pécs was founded in 1367, making it the oldest in Hungary"
    ],
    opportunities: [
      "Strong programs in medicine, arts, and humanities at the University of Pécs",
      "Cultural exchange and arts opportunities",
      "Very affordable cost of living",
      "Close to Croatia for weekend trips",
      "Rich historical environment and museums"
    ],
    studentLife: "Pécs has a lively student scene with many cultural events, concerts, and festivals. The historic downtown area offers charming cafes and restaurants. The university organizes many events for international students to help them integrate.",
    healthcareSystem: "Pécs is known for its medical university and quality healthcare facilities. The university hospital serves as a major regional healthcare center with staff who can communicate in various languages.",
    transportOptions: "The compact size of Pécs makes it easy to get around on foot or by bicycle. The city also has a bus network covering all major areas. The nearby Mecsek mountains offer hiking opportunities."
  }
];

const CityDetail = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cities.find(c => c.id === cityId);

  if (!city) {
    return (
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h1 className="font-syne font-bold text-2xl mb-4">City Not Found</h1>
            <p className="mb-4">Sorry, we couldn't find information about this city.</p>
            <Button asChild className="bg-deep-teal hover:bg-deep-teal/90">
              <Link to="/university-finder">Back to University Finder</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      
      {/* Hero Banner */}
      <div 
        className="relative h-64 md:h-80 lg:h-96 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${city.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end">
            <div className="py-8">
              <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-2">
                {city.name}
              </h1>
              <div className="flex items-center text-white/90">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Hungary, Europe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        {/* City Overview */}
        <section className="mb-10">
          <div className="bg-white rounded-lg shadow-sm p-6 backdrop-blur-sm bg-white/70">
            <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal">City Overview</h2>
            <p className="text-gray-700 mb-6">{city.overview}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-deep-teal/5 rounded-lg">
                <Building className="h-8 w-8 text-deep-teal mb-2" />
                <p className="font-medium text-center">Modern city with historical charm</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-accent-orange/5 rounded-lg">
                <GraduationCap className="h-8 w-8 text-accent-orange mb-2" />
                <p className="font-medium text-center">Strong academic environment</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-light-teal/10 rounded-lg">
                <Heart className="h-8 w-8 text-light-teal mb-2" />
                <p className="font-medium text-center">High quality of life</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* University Options */}
        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-accent-orange" />
            Universities in {city.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.universities.map((uni, i) => (
              <Card key={i} className="backdrop-blur-sm bg-white/70 border border-gray-100 hover:border-accent-orange/20 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="font-syne font-semibold text-xl mb-3">{uni}</h3>
                  <Button asChild className="w-full bg-light-teal hover:bg-light-teal/90">
                    <Link to={`/universities/${i+1}`} className="flex items-center justify-center">
                      View University Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Life in the City */}
        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal flex items-center">
            <Users className="h-6 w-6 mr-2 text-accent-orange" />
            Life in {city.name}
          </h2>
          
          <div className="space-y-5">
            <ExpandableCard title="Daily Life & Culture" initialExpanded={true}>
              <p className="text-gray-700 mb-4">{city.lifeDetails}</p>
              <div className="bg-gray-50 p-5 rounded-md">
                <h3 className="font-semibold mb-2">Student Life</h3>
                <p className="text-gray-700">{city.studentLife}</p>
              </div>
            </ExpandableCard>
            
            <ExpandableCard title="Cost of Living">
              <div className="bg-gray-50 p-5 rounded-md mb-4">
                <h3 className="font-semibold mb-2">Monthly Expenses</h3>
                <p className="text-gray-700">{city.costOfLiving}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-md text-center">
                  <p className="font-medium text-green-800">Accommodation</p>
                  <p className="text-green-700">€150-250/month</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md text-center">
                  <p className="font-medium text-blue-800">Food</p>
                  <p className="text-blue-700">€100-150/month</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-md text-center">
                  <p className="font-medium text-purple-800">Transportation</p>
                  <p className="text-purple-700">€20-30/month</p>
                </div>
              </div>
            </ExpandableCard>
            
            <ExpandableCard title="Transportation">
              <p className="text-gray-700 mb-4">{city.transportOptions}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-md">
                  <span className="text-2xl mb-2">🚌</span>
                  <p className="font-medium">Public Transport</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-md">
                  <span className="text-2xl mb-2">🚲</span>
                  <p className="font-medium">Bicycle-Friendly</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-md">
                  <span className="text-2xl mb-2">🚶‍♂️</span>
                  <p className="font-medium">Walkable City</p>
                </div>
              </div>
            </ExpandableCard>
            
            <ExpandableCard title="Healthcare">
              <p className="text-gray-700">{city.healthcareSystem}</p>
            </ExpandableCard>
          </div>
        </section>
        
        {/* Job Opportunities */}
        <section className="mb-10">
          <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal flex items-center">
            <Briefcase className="h-6 w-6 mr-2 text-accent-orange" />
            Job Opportunities
          </h2>
          
          <Card className="backdrop-blur-sm bg-white/70 border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{city.jobOpportunities}</p>
              
              <div className="bg-yellow-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2 text-yellow-800">Work Regulations for International Students</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-yellow-700">Students with residence permits can work up to 24 hours/week during the academic year</li>
                  <li className="text-yellow-700">Full-time work is allowed during official holiday periods</li>
                  <li className="text-yellow-700">No additional work permit is required for Stipendium Hungaricum scholarship holders</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* City Facts & Opportunities */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal flex items-center">
              <Landmark className="h-6 w-6 mr-2 text-accent-orange" />
              Interesting Facts
            </h2>
            
            <Card className="backdrop-blur-sm bg-white/70 border border-gray-100 h-full shadow-sm">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {city.facts.map((fact, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-6 h-6 rounded-full bg-deep-teal/10 text-deep-teal flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 font-medium">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="font-syne font-bold text-2xl mb-4 text-deep-teal flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-accent-orange" />
              Opportunities for Students
            </h2>
            
            <Card className="backdrop-blur-sm bg-white/70 border border-gray-100 h-full shadow-sm">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {city.opportunities.map((opportunity, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-light-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button asChild variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal/10">
            <Link to="/university-finder">
              Back to University Finder
            </Link>
          </Button>
          
          <Button asChild className="bg-accent-orange hover:bg-accent-orange/90 text-white">
            <Link to="/apply">
              Apply for Scholarship <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CityDetail;
