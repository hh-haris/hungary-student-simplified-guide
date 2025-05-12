
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
  }
];

// Create sample programs based on our complete program database
const createSamplePrograms = (universitiesData: any[]) => {
  const programs = [];
  
  // Map university names to their IDs
  const universityMap = new Map();
  universitiesData.forEach(uni => universityMap.set(uni.name, uni.id));
  
  // Use a subset of our full program data for sample data
  // Filter for programs that belong to the universities we've added
  for (const program of fullProgramData.slice(0, 50)) {
    // Skip if the program's university is not in our sample universities
    if (!program.university_name || !universityMap.has(program.university_name)) continue;
    
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
      
      const { error: programsError } = await supabase
        .from('programs')
        .insert(samplePrograms);
      
      if (programsError) {
        throw programsError;
      }
    }
    
    return { success: true, message: "Sample data populated successfully" };
  } catch (error) {
    console.error("Error populating sample data:", error);
    return { success: false, message: "Error populating sample data", error };
  }
};
