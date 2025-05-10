
import { supabase } from "@/integrations/supabase/client";

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

// Sample programs
const createSamplePrograms = (universitiesData: any[]) => {
  const programs = [];
  
  // For each university, create programs
  for (const university of universitiesData) {
    const universityId = university.id;
    
    // Add programs based on the university's programs array
    for (const programName of university.programs) {
      let degreeLevel = "bachelor";
      let field = "engineering";
      
      // Assign appropriate fields and degree levels based on program name
      if (programName.includes("Engineering") || programName.includes("Computer")) {
        field = "engineering";
      } else if (programName.includes("Medicine") || programName.includes("Pharmacy")) {
        field = "medical";
        degreeLevel = "master";
      } else if (programName.includes("Business") || programName.includes("Economics")) {
        field = "business";
      } else if (programName.includes("Law")) {
        field = "law";
        degreeLevel = "master";
      }
      
      programs.push({
        university_id: universityId,
        name: programName,
        degree_level: degreeLevel,
        field_of_study: field,
        min_usat_score: university.min_usat_score + Math.floor(Math.random() * 5),
        description: `${programName} program at ${university.name} is designed to provide students with comprehensive knowledge and skills in the field.`,
        language: "English",
        credit_hours: 180 + Math.floor(Math.random() * 60),
        duration: degreeLevel === "bachelor" ? "3 years" : "2 years"
      });
    }
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
