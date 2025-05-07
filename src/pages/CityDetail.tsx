
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock city data
const cities = [
  {
    id: "budapest",
    name: "Budapest",
    overview: "Budapest is the capital and largest city of Hungary, serving as the country's principal political, cultural, commercial, industrial, and transportation center. It has a rich history, beautiful architecture, and vibrant cultural scene.",
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
    ]
  },
  {
    id: "debrecen",
    name: "Debrecen",
    overview: "Debrecen is the second-largest city in Hungary and serves as the regional center of the Northern Great Plain region. It has a rich cultural heritage and is an important educational, economic and cultural hub.",
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
    ]
  },
  {
    id: "szeged",
    name: "Szeged",
    overview: "Szeged is the third-largest city in Hungary, located near the southern border. It's often called the 'City of Sunshine' due to its high number of sunny days. The city is known for its beautiful architecture, universities, and cultural life.",
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
    ]
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
            <Button asChild>
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
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
          <h1 className="font-syne font-bold text-2xl md:text-3xl mb-4">{city.name}</h1>
          <p className="text-gray-700 mb-6">{city.overview}</p>
          
          <div className="space-y-4">
            <h2 className="font-syne font-semibold text-xl text-deep-teal">Universities in {city.name}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {city.universities.map((uni, i) => (
                <Link 
                  key={i} 
                  to={`/universities/${i+1}`} 
                  className="inline-flex items-center px-3 py-1 bg-light-teal/10 text-light-teal hover:bg-light-teal/20 rounded-md"
                >
                  {uni} <ArrowRight size={14} className="ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ExpandableCard title="Life in the City" initialExpanded={true}>
            <p className="text-gray-700 mb-4">{city.lifeDetails}</p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-100 mb-4">
              <h3 className="font-semibold mb-2">Cost of Living</h3>
              <p className="text-gray-700">{city.costOfLiving}</p>
            </div>
          </ExpandableCard>
          
          <ExpandableCard title="Job Opportunities">
            <p className="text-gray-700 mb-4">{city.jobOpportunities}</p>
          </ExpandableCard>
          
          <ExpandableCard title="Facts About the City">
            <ul className="list-disc pl-6 space-y-2">
              {city.facts.map((fact, i) => (
                <li key={i} className="text-gray-700">{fact}</li>
              ))}
            </ul>
          </ExpandableCard>
          
          <ExpandableCard title="Opportunities for Students">
            <ul className="list-disc pl-6 space-y-2">
              {city.opportunities.map((opportunity, i) => (
                <li key={i} className="text-gray-700">{opportunity}</li>
              ))}
            </ul>
          </ExpandableCard>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CityDetail;
