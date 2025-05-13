
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink, MapPin, GraduationCap, BarChart3 } from 'lucide-react';
import { ExpandableSectionProvider } from '@/components/ui/expandable-section';
import ExpandableSection from '@/components/ui/expandable-section';
import { fullProgramData } from '@/data/programsData';

interface UniversityTemplateProps {
  id: string;
  name: string;
  city: string;
  intro: string;
  detailedDescription?: string;
  website?: string;
  min_usat_score: number;
  image_url?: string;
  facilities?: string[];
  cityDetails?: {
    name: string;
    description: string;
    image?: string;
  };
}

// Demo universities data
const universities: Record<string, UniversityTemplateProps> = {
  'bme': {
    id: '1',
    name: 'Budapest University of Technology and Economics (BME)',
    city: 'Budapest',
    intro: 'Leading technical university in Hungary with strong engineering and IT programs.',
    detailedDescription: `Budapest University of Technology and Economics (BME) is Hungary's premier technical university, 
    featuring a rich history dating back to 1782. Located in the heart of Budapest, BME offers 
    a wide range of engineering, technical, and scientific programs taught in English. 
    The university is known for its strong focus on research and innovation, and its graduates 
    are highly sought after by employers worldwide.`,
    website: 'https://www.bme.hu/?language=en',
    min_usat_score: 75,
    image_url: 'https://picsum.photos/id/1/800/400',
    facilities: ['Modern laboratories', 'Extensive library', 'Sports facilities', 'Student organizations'],
    cityDetails: {
      name: 'Budapest',
      description: 'Budapest is the capital and most populous city of Hungary. The city has an estimated population of 1.7 million, and it is a great place for international students.',
      image: 'https://picsum.photos/id/1/800/400'
    }
  },
  'debrecen': {
    id: '2',
    name: 'University of Debrecen',
    city: 'Debrecen',
    intro: 'One of the largest universities with comprehensive programs including medical sciences.',
    detailedDescription: `The University of Debrecen is one of the largest and most prestigious 
    institutions of higher education in Hungary. With a history dating back to 1538, 
    the university offers a wide range of programs across various fields, including medicine, 
    dentistry, pharmacy, science, engineering, humanities, law, economics, and agriculture.`,
    website: 'https://unideb.hu/en',
    min_usat_score: 70,
    image_url: 'https://picsum.photos/id/2/800/400',
    facilities: ['University hospital', 'Science labs', 'Multiple campuses', 'Student dormitories'],
    cityDetails: {
      name: 'Debrecen',
      description: 'Debrecen is the second-largest city in Hungary, located in the Great Hungarian Plain. It is a cultural and educational center with a rich history.',
      image: 'https://picsum.photos/id/2/800/400'
    }
  },
  'pecs': {
    id: '6',
    name: 'University of Pécs',
    city: 'Pécs',
    intro: 'One of Hungary\'s oldest universities with strong medical and arts programs.',
    detailedDescription: `The University of Pécs, founded in 1367, is the oldest university in Hungary and 
    one of the oldest in Europe. Located in the beautiful city of Pécs, the university 
    offers a wide range of programs in medicine, law, business, arts, sciences, and engineering. 
    The university has a strong international focus, with numerous programs offered in English.`,
    website: 'https://international.pte.hu/',
    min_usat_score: 71,
    image_url: 'https://picsum.photos/id/6/800/400',
    facilities: ['Modern medical campus', 'Historical buildings', 'Art center', 'Sports facilities'],
    cityDetails: {
      name: 'Pécs',
      description: 'Pécs is the fifth largest city of Hungary, located in the southwest of the country. It has a rich cultural heritage and was a European Capital of Culture in 2010.',
      image: 'https://picsum.photos/id/6/800/400'
    }
  }
};

// Function to filter programs by university name
const getUniversityPrograms = (universityName: string) => {
  return fullProgramData.filter(program => 
    program.university_name?.includes(universityName)
  );
};

const UniversityTemplate = () => {
  const { universityId } = useParams<{ universityId: string }>();
  const university = universities[universityId || ''];
  
  if (!university) {
    return (
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10 text-center">
          <h1 className="font-syne font-bold text-3xl mb-6">University Not Found</h1>
          <p className="mb-6">The university you are looking for could not be found.</p>
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
  
  const programs = getUniversityPrograms(university.name.split(' (')[0]);
  
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="font-syne font-bold text-3xl mb-2">{university.name}</h1>
          <div className="flex items-center text-light-teal mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            <Link to={`/city/${university.city.toLowerCase()}`} className="hover:underline">
              {university.city}
            </Link>
          </div>
          
          {university.image_url && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <AspectRatio ratio={16/6}>
                <img 
                  src={university.image_url} 
                  alt={university.name} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center bg-light-teal/10 px-4 py-2 rounded-full">
              <BarChart3 className="h-5 w-5 mr-2 text-light-teal" />
              <span>Min USAT: {university.min_usat_score}+</span>
            </div>
            
            <div className="flex items-center bg-light-teal/10 px-4 py-2 rounded-full">
              <GraduationCap className="h-5 w-5 mr-2 text-light-teal" />
              <span>{programs.length} Programs</span>
            </div>
            
            {university.website && (
              <a 
                href={university.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-deep-teal text-white px-4 py-2 rounded-full hover:bg-deep-teal/90"
              >
                Official Website <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            )}
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="font-syne font-semibold text-xl mb-3">University Overview</h2>
              <p className="text-gray-700 mb-4">{university.detailedDescription}</p>
            </section>
            
            <section>
              <h2 className="font-syne font-semibold text-xl mb-3">Programs Offered</h2>
              <ExpandableSectionProvider>
                <div className="space-y-4">
                  {programs.length > 0 ? (
                    programs.map((program) => (
                      <ExpandableSection 
                        key={program.id} 
                        title={program.name}
                      >
                        <div className="space-y-2">
                          <div>
                            <span className="font-semibold">Degree Level:</span> {program.degree_level}
                          </div>
                          <div>
                            <span className="font-semibold">Field of Study:</span> {program.field_of_study}
                          </div>
                          <div>
                            <span className="font-semibold">Language:</span> {program.language}
                          </div>
                          {program.duration && (
                            <div>
                              <span className="font-semibold">Duration:</span> {program.duration}
                            </div>
                          )}
                          {program.faculty && (
                            <div>
                              <span className="font-semibold">Faculty:</span> {program.faculty}
                            </div>
                          )}
                          {program.location && (
                            <div>
                              <span className="font-semibold">Location:</span> {program.location}
                            </div>
                          )}
                        </div>
                      </ExpandableSection>
                    ))
                  ) : (
                    <p>No programs found for this university.</p>
                  )}
                </div>
              </ExpandableSectionProvider>
            </section>
            
            {university.facilities && (
              <section>
                <h2 className="font-syne font-semibold text-xl mb-3">Campus Facilities</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {university.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </section>
            )}
            
            {university.cityDetails && (
              <section>
                <h2 className="font-syne font-semibold text-xl mb-3">About {university.cityDetails.name}</h2>
                <Card className="backdrop-blur-sm bg-white/70">
                  <CardContent className="p-5">
                    <div className="flex flex-col md:flex-row gap-6">
                      {university.cityDetails.image && (
                        <div className="md:w-1/3">
                          <img 
                            src={university.cityDetails.image} 
                            alt={university.cityDetails.name} 
                            className="rounded-lg w-full h-auto"
                          />
                        </div>
                      )}
                      <div className="md:w-2/3">
                        <p className="text-gray-700">{university.cityDetails.description}</p>
                        <Link to={`/city/${university.city.toLowerCase()}`} className="mt-4 inline-block">
                          <Button className="bg-accent-orange hover:bg-accent-orange/90 mt-4">
                            Learn More About {university.cityDetails.name}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityTemplate;
