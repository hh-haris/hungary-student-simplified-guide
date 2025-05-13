
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Building, Users, Home, Utensils, Train, MapPin } from 'lucide-react';
import { ExpandableSectionProvider } from '@/components/ui/expandable-section';
import ExpandableSection from '@/components/ui/expandable-section';

interface CityTemplateProps {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image?: string;
  population?: string;
  universities?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  transport?: string;
  accommodation?: string;
  food?: string;
  attractions?: Array<{
    name: string;
    description: string;
  }>;
}

// Demo cities data
const cities: Record<string, CityTemplateProps> = {
  'budapest': {
    id: 'budapest',
    name: 'Budapest',
    description: 'Budapest is the capital and most populous city of Hungary.',
    longDescription: `Budapest is the capital and most populous city of Hungary. The city has an estimated population of 1.7 million, 
    while the population of the greater Budapest Metropolitan Area is around 3.3 million. 
    Budapest is both a city and county and forms the center of the Budapest Metropolitan Area, 
    which has a total area of 7,626 km² and is split into 23 districts. 
    It is one of the largest cities in the European Union and is a global city with strengths in commerce, finance, 
    media, art, fashion, research, technology, education, and entertainment.`,
    image: 'https://picsum.photos/id/1/800/400',
    population: '1.7 million',
    universities: [
      { 
        id: 'bme',
        name: 'Budapest University of Technology and Economics (BME)', 
        description: 'Leading technical university in Hungary with strong engineering and IT programs.'
      },
      { 
        id: 'corvinus',
        name: 'Corvinus University of Budapest', 
        description: 'Leading institution for business, economics and social sciences in Central Europe.'
      },
    ],
    transport: 'Budapest has an excellent public transportation system including metro, trams, buses, and suburban railways. The city is also well-connected to other European cities by train and air.',
    accommodation: 'Student accommodation options in Budapest include university dormitories, shared apartments, and private rentals. The cost of living is generally lower than in Western European cities.',
    food: 'Hungarian cuisine is diverse and flavorful, with traditional dishes like goulash, paprikash, and lángos. Budapest offers a wide range of dining options from budget-friendly eateries to fine dining restaurants.',
    attractions: [
      { name: 'Buda Castle', description: 'A historical castle and palace complex of the Hungarian kings in Budapest.' },
      { name: 'Hungarian Parliament Building', description: 'The seat of the National Assembly of Hungary, and a notable landmark of Hungary.' },
      { name: 'Chain Bridge', description: 'A suspension bridge that spans the River Danube between Buda and Pest.' },
      { name: 'Thermal Baths', description: 'Budapest is known for its thermal baths, including Széchenyi and Gellért.' },
    ]
  },
  'debrecen': {
    id: 'debrecen',
    name: 'Debrecen',
    description: 'Debrecen is the second-largest city in Hungary, located in the Great Hungarian Plain.',
    longDescription: `Debrecen is the second-largest city in Hungary, located in the Great Hungarian Plain in the eastern part of the country. 
    With a population of around 200,000, it serves as the regional center of the Northern Great Plain region. 
    Debrecen is an important cultural and educational hub, home to the University of Debrecen, one of the country's most prestigious institutions. 
    The city has a rich history and cultural heritage, with numerous museums, churches, and historical buildings. 
    Debrecen is also known for its thermal baths and is a popular destination for medical tourism.`,
    image: 'https://picsum.photos/id/2/800/400',
    population: '200,000',
    universities: [
      { 
        id: 'debrecen',
        name: 'University of Debrecen', 
        description: 'One of the largest universities with comprehensive programs including medical sciences.'
      }
    ],
    transport: 'Debrecen has a good public transportation system with trams and buses. The city is also served by an international airport with connections to major European cities.',
    accommodation: 'The University of Debrecen offers dormitories for its students. Private rentals and shared apartments are also available at affordable prices compared to Budapest.',
    food: 'Debrecen is famous for its local specialties, including Debrecen sausage. The city offers a range of dining options from traditional Hungarian cuisine to international foods.',
    attractions: [
      { name: 'Great Reformed Church', description: 'The symbol of the city and the most important Protestant church in Hungary.' },
      { name: 'Déri Museum', description: 'A major museum with collections of archaeology, ethnography, and art.' },
      { name: 'Great Forest Park', description: 'A large park with recreational facilities, a zoo, amusement park, and thermal baths.' },
      { name: 'Debrecen Nagyerdei Stadium', description: 'A modern football stadium with unique architecture.' },
    ]
  },
  'pecs': {
    id: 'pecs',
    name: 'Pécs',
    description: 'Pécs is the fifth largest city of Hungary, located in the southwest of the country.',
    longDescription: `Pécs is the fifth largest city of Hungary, located in the southwest of the country. 
    With a population of about 150,000, it is the administrative and economic center of Baranya County. 
    The city has a rich cultural heritage dating back to Roman times and was designated as a European Capital of Culture in 2010. 
    Pécs is known for its Mediterranean atmosphere, vibrant cultural scene, and the University of Pécs, which is one of the oldest universities in Europe, founded in 1367.`,
    image: 'https://picsum.photos/id/6/800/400',
    population: '150,000',
    universities: [
      { 
        id: 'pecs',
        name: 'University of Pécs', 
        description: 'One of Hungary\'s oldest universities with strong medical and arts programs.'
      }
    ],
    transport: 'Pécs has a good public transportation system with buses. The city is connected to other parts of Hungary by train and bus services.',
    accommodation: 'The University of Pécs offers dormitories for its students. Private rentals and shared apartments are also available at affordable prices.',
    food: 'Pécs has a vibrant food scene with traditional Hungarian cuisine and Mediterranean influences. The city is also known for its wine production in the nearby region.',
    attractions: [
      { name: 'Pécs Cathedral', description: 'A landmark of the city built in the 11th century and reconstructed in Gothic style.' },
      { name: 'Early Christian Necropolis', description: 'A UNESCO World Heritage site with 4th-century Christian burial chambers.' },
      { name: 'Zsolnay Cultural Quarter', description: 'A cultural and arts center built on the site of the former Zsolnay ceramics factory.' },
      { name: 'TV Tower', description: 'A tall tower on Misina Hill offering panoramic views of the city.' },
    ]
  }
};

const CityTemplate = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cities[cityId || ''];
  
  if (!city) {
    return (
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10 text-center">
          <h1 className="font-syne font-bold text-3xl mb-6">City Not Found</h1>
          <p className="mb-6">The city you are looking for could not be found.</p>
          <Link to="/university-finder">
            <Button className="bg-accent-orange hover:bg-accent-orange/90">
              Return to University Finder
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="font-syne font-bold text-3xl mb-6">{city.name}</h1>
          
          {city.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <AspectRatio ratio={16/6}>
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          )}
          
          {city.population && (
            <div className="flex items-center mb-6 bg-light-teal/10 px-4 py-2 rounded-full inline-block">
              <Users className="h-5 w-5 mr-2 text-light-teal" />
              <span>Population: {city.population}</span>
            </div>
          )}
          
          <section className="mb-8">
            <h2 className="font-syne font-semibold text-xl mb-3">About {city.name}</h2>
            <p className="text-gray-700">{city.longDescription}</p>
          </section>
          
          {city.universities && city.universities.length > 0 && (
            <section className="mb-8">
              <h2 className="font-syne font-semibold text-xl mb-3">Universities in {city.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {city.universities.map((university) => (
                  <Card key={university.id} className="backdrop-blur-sm bg-white/70 hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="font-syne font-bold text-lg mb-2">{university.name}</h3>
                      <p className="text-gray-600 mb-4">{university.description}</p>
                      <Link to={`/universities/${university.id}`}>
                        <Button className="bg-deep-teal hover:bg-deep-teal/90">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
          
          <ExpandableSectionProvider>
            <section className="mb-8">
              <h2 className="font-syne font-semibold text-xl mb-3">Living in {city.name}</h2>
              <div className="space-y-4">
                {city.accommodation && (
                  <ExpandableSection title="Accommodation">
                    <div className="flex items-start">
                      <Home className="h-5 w-5 mr-3 mt-1 text-accent-orange" />
                      <p className="text-gray-700">{city.accommodation}</p>
                    </div>
                  </ExpandableSection>
                )}
                
                {city.transport && (
                  <ExpandableSection title="Transportation">
                    <div className="flex items-start">
                      <Train className="h-5 w-5 mr-3 mt-1 text-accent-orange" />
                      <p className="text-gray-700">{city.transport}</p>
                    </div>
                  </ExpandableSection>
                )}
                
                {city.food && (
                  <ExpandableSection title="Food & Dining">
                    <div className="flex items-start">
                      <Utensils className="h-5 w-5 mr-3 mt-1 text-accent-orange" />
                      <p className="text-gray-700">{city.food}</p>
                    </div>
                  </ExpandableSection>
                )}
              </div>
            </section>
            
            {city.attractions && city.attractions.length > 0 && (
              <section className="mb-8">
                <h2 className="font-syne font-semibold text-xl mb-3">Popular Attractions</h2>
                <div className="space-y-4">
                  {city.attractions.map((attraction, index) => (
                    <ExpandableSection key={index} title={attraction.name}>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-1 text-accent-orange" />
                        <p className="text-gray-700">{attraction.description}</p>
                      </div>
                    </ExpandableSection>
                  ))}
                </div>
              </section>
            )}
          </ExpandableSectionProvider>
          
          <section>
            <h2 className="font-syne font-semibold text-xl mb-3">Student Life</h2>
            <p className="text-gray-700 mb-4">
              {city.name} offers a vibrant student life with numerous cultural events, festivals, sports activities, and student organizations. 
              International students can find a welcoming community and opportunities to engage with both local and international students.
            </p>
            <p className="text-gray-700">
              The city provides a supportive environment for academic and personal growth, with libraries, study spaces, and recreational facilities. 
              The cost of living is generally affordable compared to other European cities, making it an attractive destination for international students.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CityTemplate;
