
import { supabase } from "@/integrations/supabase/client";
import { fullProgramData } from "@/data/programsData";

// Sample universities
const sampleUniversities = [
  {
    name: "Budapest University of Technology and Economics",
    city: "Budapest",
    intro: "Leading technical university in Hungary with strong engineering and IT programs.",
    min_usat_score: 75,
    programs: ["Computer Science", "Mechanical Engineering", "Civil Engineering"],
    image_url: "https://picsum.photos/id/1/800/400"
  },
  {
    name: "University of Debrecen",
    city: "Debrecen",
    intro: "One of the largest universities with comprehensive programs including medical sciences.",
    min_usat_score: 70,
    programs: ["Medicine", "Pharmacy", "Computer Science"],
    image_url: "https://picsum.photos/id/2/800/400"
  },
  {
    name: "University of Szeged",
    city: "Szeged",
    intro: "Prestigious university with strong research focus and diverse academic programs.",
    min_usat_score: 72,
    programs: ["Medicine", "Law", "Economics"],
    image_url: "https://picsum.photos/id/3/800/400"
  },
  {
    name: "Corvinus University of Budapest",
    city: "Budapest",
    intro: "Leading institution for business, economics and social sciences in Central Europe.",
    min_usat_score: 74,
    programs: ["Business Administration", "International Economics", "Political Science"],
    image_url: "https://picsum.photos/id/4/800/400"
  },
  {
    name: "Eötvös Loránd University",
    city: "Budapest",
    intro: "Hungary's largest university with a wide range of programs across various disciplines.",
    min_usat_score: 73,
    programs: ["Psychology", "Computer Science", "International Relations"],
    image_url: "https://picsum.photos/id/5/800/400"
  },
  {
    name: "University of Pécs",
    city: "Pécs",
    intro: "One of Hungary's oldest universities with strong medical and arts programs.",
    min_usat_score: 71,
    programs: ["Medicine", "Arts", "Engineering"],
    image_url: "https://picsum.photos/id/6/800/400"
  },
  {
    name: "Hungarian University of Agriculture and Life Sciences",
    city: "Gödöllő",
    intro: "Leading institution in agricultural sciences and research.",
    min_usat_score: 70,
    programs: ["Agricultural Engineering", "Food Engineering", "Environmental Sciences"],
    image_url: "https://picsum.photos/id/7/800/400"
  },
  {
    name: "Széchenyi István University",
    city: "Győr",
    intro: "Major university focusing on engineering, economics, and health sciences.",
    min_usat_score: 72,
    programs: ["Mechanical Engineering", "Economics", "Computer Science Engineering"],
    image_url: "https://picsum.photos/id/8/800/400"
  },
  {
    name: "University of Miskolc",
    city: "Miskolc",
    intro: "Technical university with a focus on engineering and technology.",
    min_usat_score: 71,
    programs: ["Materials Engineering", "Mechanical Engineering", "Business Administration"],
    image_url: "https://picsum.photos/id/9/800/400"
  },
  {
    name: "Semmelweis University",
    city: "Budapest",
    intro: "Hungary's leading medical university with world-renowned healthcare programs.",
    min_usat_score: 78,
    programs: ["Medicine", "Dentistry", "Pharmacy"],
    image_url: "https://picsum.photos/id/10/800/400"
  },
  {
    name: "Budapest Metropolitan University",
    city: "Budapest",
    intro: "Modern university specializing in creative arts, business and communication.",
    min_usat_score: 70,
    programs: ["Animation", "Media Studies", "Business Administration"],
    image_url: "https://picsum.photos/id/11/800/400"
  },
  {
    name: "University of Nyíregyháza",
    city: "Nyíregyháza",
    intro: "Regional university with strong focus on teacher training and applied sciences.",
    min_usat_score: 70,
    programs: ["Teacher Training", "Agricultural Engineering", "Business Administration"],
    image_url: "https://picsum.photos/id/12/800/400"
  }
];

// Create sample programs based on our complete program database
const createSamplePrograms = (universitiesData: any[]) => {
  const programs = [];
  
  // Map university names to their IDs
  const universityMap = new Map();
  universitiesData.forEach(uni => universityMap.set(uni.name, uni.id));
  
  // Use all of our full program data
  for (const program of fullProgramData) {
    // Skip if the program's university is not in our sample universities
    if (!program.university_name || !universityMap.has(program.university_name)) {
      // For programs without university, assign to first university for testing
      const firstUniId = universitiesData[0]?.id;
      if (firstUniId) {
        programs.push({
          university_id: firstUniId,
          name: program.name,
          degree_level: program.degree_level.toLowerCase(),
          field_of_study: program.field_of_study,
          min_usat_score: 70 + Math.floor(Math.random() * 10),
          description: `${program.name} program is designed to provide students with comprehensive knowledge and skills in the field.`,
          language: program.language || "English",
          credit_hours: program.credit_hours || 180 + Math.floor(Math.random() * 60),
          duration: program.duration || (program.degree_level === "Bachelor" ? "3 years" : "2 years")
        });
      }
      continue;
    }
    
    programs.push({
      university_id: universityMap.get(program.university_name),
      name: program.name,
      degree_level: program.degree_level.toLowerCase(),
      field_of_study: program.field_of_study,
      min_usat_score: 70 + Math.floor(Math.random() * 10),
      description: `${program.name} program at ${program.university_name} is designed to provide students with comprehensive knowledge and skills in the field.`,
      language: program.language || "English",
      credit_hours: program.credit_hours || 180 + Math.floor(Math.random() * 60),
      duration: program.duration || (program.degree_level === "Bachelor" ? "3 years" : "2 years")
    });
  }
  
  return programs;
};

// Function to populate database with sample data
export const populateSampleData = async () => {
  try {
    // Insert universities
    const { data: universitiesData, error: universitiesError } = await supabase
      .from('universities')
      .insert(sampleUniversities)
      .select();
    
    if (universitiesError) {
      throw universitiesError;
    }
    
    // Create and insert programs
    if (universitiesData && universitiesData.length > 0) {
      const samplePrograms = createSamplePrograms(universitiesData);
      
      // Insert in smaller batches to avoid request size limitations
      const chunkSize = 50;
      for (let i = 0; i < samplePrograms.length; i += chunkSize) {
        const chunk = samplePrograms.slice(i, i + chunkSize);
        const { error: programsError } = await supabase
          .from('programs')
          .insert(chunk);
        
        if (programsError) {
          console.error(`Error inserting programs batch ${i}-${i+chunkSize}:`, programsError);
        }
      }
    }
    
    return { success: true, message: "Sample data populated successfully" };
  } catch (error) {
    console.error("Error populating sample data:", error);
    return { success: false, message: "Error populating sample data", error };
  }
};
