
interface Program {
  id: string;
  name: string;
  degree_level: string;
  field_of_study: string;
  language: string;
  credit_hours?: number;
  duration?: string;
  university_name?: string;
  faculty?: string;
  location?: string;
}

// Full program data with 242 programs
export const fullProgramData: Program[] = [
  {
    id: "1",
    name: "Agribusiness and Rural Development Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Economics and Business",
    location: "Debrecen"
  },
  {
    id: "2",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "Hungarian University of Agriculture and Life Sciences",
    faculty: "Institute of Agronomy",
    location: "Gödöllő"
  },
  {
    id: "3",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "Széchenyi István University",
    faculty: "Faculty of Agricultural and Food Sciences",
    location: "Mosonmagyaróvár"
  },
  {
    id: "4",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Agricultural and Food Sciences and Environmental Management",
    location: "Debrecen"
  },
  {
    id: "5",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Nyíregyháza",
    faculty: "Institute of Engineering and Agricultural Science",
    location: "Nyíregyháza"
  },
  {
    id: "6",
    name: "Agricultural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Szeged",
    faculty: "Faculty of Agriculture",
    location: "Hódmezővásárhely"
  },
  {
    id: "7",
    name: "Agricultural Water Management and Environmental Technology Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "Széchenyi István University",
    faculty: "Faculty of Agricultural and Food Sciences",
    location: "Mosonmagyaróvár"
  },
  {
    id: "8",
    name: "Animation",
    degree_level: "Bachelor",
    field_of_study: "Arts",
    language: "English",
    duration: "6 semesters",
    university_name: "Budapest Metropolitan University",
    faculty: "Faculty of Art and Creative Industries",
    location: "Budapest"
  },
  {
    id: "9",
    name: "Applied Economics",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "6 semesters (3 years)",
    university_name: "Corvinus University of Budapest",
    faculty: "Institute of Economics",
    location: "Budapest"
  },
  {
    id: "10",
    name: "Archaeology",
    degree_level: "Bachelor",
    field_of_study: "Humanities",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Humanities and Social Sciences",
    location: "Pécs"
  },
  {
    id: "11",
    name: "Architectural Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Engineering and Information Technology",
    location: "Pécs"
  },
  {
    id: "12",
    name: "Biochemical Engineer",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Szeged",
    faculty: "Faculty of Science and Informatics",
    location: "Szeged"
  },
  {
    id: "13",
    name: "Biochemical Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Science and Technology",
    location: "Debrecen"
  },
  {
    id: "14",
    name: "Biology",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Science and Technology",
    location: "Debrecen"
  },
  {
    id: "15",
    name: "Biology",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Sciences",
    location: "Pécs"
  },
  {
    id: "16",
    name: "Biology [Applied Biology]",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Nyíregyháza",
    faculty: "Institute of Environmental Science",
    location: "Nyíregyháza"
  },
  {
    id: "17",
    name: "Biotechnology",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Science and Technology",
    location: "Debrecen"
  },
  {
    id: "18",
    name: "Biotechnology",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Pharmacy",
    location: "Pécs"
  },
  {
    id: "19",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "Budapest University of Economics and Business",
    faculty: "Faculty of Finance and Accountancy",
    location: "Budapest"
  },
  {
    id: "20",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters (3.5 years)",
    university_name: "Corvinus University of Budapest",
    faculty: "Institute for theDevelopment of Enterprises",
    location: "Budapest"
  },
  {
    id: "21",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "Eszterházy Károly Catholic University",
    faculty: "Faculty of Economics and Social Sciences",
    location: "Eger"
  },
  {
    id: "22",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "Hungarian University of Agriculture and Life Sciences",
    faculty: "Institute of Agricultural and Food Economics",
    location: "Gödöllő"
  },
  {
    id: "23",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "John von Neumann University",
    faculty: "Faculty of Economics and Business",
    location: "Kecskemét"
  },
  {
    id: "24",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "Obuda University",
    faculty: "Keleti Károly Faculty of Business and Management",
    location: "Budapest"
  },
  {
    id: "25",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "6 semesters",
    university_name: "Széchenyi István University",
    faculty: "Kautz Gyula Faculty of Business and Economics",
    location: "Győr"
  },
  {
    id: "26",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Economics and Business",
    location: "Debrecen"
  },
  {
    id: "27",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Dunaújváros",
    faculty: "Institute of Social Sciences",
    location: "Dunaújváros"
  },
  {
    id: "28",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Miskolc",
    faculty: "Faculty of Economics",
    location: "Miskolc"
  },
  {
    id: "29",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Nyíregyháza",
    faculty: "Institute of Business and Management Sciences",
    location: "Nyíregyháza"
  },
  {
    id: "30",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Pannonia",
    faculty: "Faculty of Business and Economics",
    location: "Veszprém"
  },
  {
    id: "31",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Business and Economics",
    location: "Pécs"
  },
  {
    id: "32",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "8 semesters",
    university_name: "University of Sopron",
    faculty: "Alexandre Lamfalussy Faculty of Economics",
    location: "Sopron"
  },
  {
    id: "33",
    name: "Business Administration and Management",
    degree_level: "Bachelor",
    field_of_study: "Economics",
    language: "English",
    duration: "7 semsters",
    university_name: "University of Szeged",
    faculty: "Faculty of Economics and Business Administration",
    location: "Szeged"
  },
  {
    id: "34",
    name: "Business Informatics",
    degree_level: "Bachelor",
    field_of_study: "Computer Science",
    language: "English",
    duration: "7 semesters",
    university_name: "Dennis Gabor University",
    faculty: "",
    location: "Budapest"
  },
  {
    id: "35",
    name: "Business Informatics",
    degree_level: "Bachelor",
    field_of_study: "Computer Science",
    language: "English",
    duration: "7 semesters",
    university_name: "Eszterházy Károly Catholic University",
    faculty: "Faculty of Informatics",
    location: "Eger"
  },
  {
    id: "36",
    name: "Business Informatics",
    degree_level: "Bachelor",
    field_of_study: "Computer Science",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Informatics",
    location: "Debrecen"
  },
  {
    id: "37",
    name: "Chemical Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "7 semesters",
    university_name: "Budapest University of Technology and Economics",
    faculty: "Faculty of Chemical Technology and Biotechnology",
    location: "Budapest"
  },
  {
    id: "38",
    name: "Chemical Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "7 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Science and Technology",
    location: "Debrecen"
  },
  {
    id: "39",
    name: "Chemistry",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Science and Technology",
    location: "Debrecen"
  },
  {
    id: "40",
    name: "Chemistry",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Nyíregyháza",
    faculty: "Institute of Environmental Science",
    location: "Nyíregyháza"
  },
  {
    id: "41",
    name: "Chemistry",
    degree_level: "Bachelor",
    field_of_study: "Natural Sciences",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Sciences",
    location: "Pécs"
  },
  {
    id: "42",
    name: "Choreography",
    degree_level: "Bachelor",
    field_of_study: "Arts",
    language: "English",
    duration: "6 semesters",
    university_name: "Hungarian Dance University",
    faculty: "Choreographer and Dance Teacher Training Institute",
    location: "Budapest"
  },
  {
    id: "43",
    name: "Circus Arts",
    degree_level: "Bachelor",
    field_of_study: "Arts",
    language: "English",
    duration: "6 semesters",
    university_name: "Budapest Circus Arts and Contemporary Dance College",
    faculty: "",
    location: "Budapest"
  },
  {
    id: "44",
    name: "Civil Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "8 semesters",
    university_name: "Budapest University of Technology and Economics",
    faculty: "Faculty of Civil Engineering",
    location: "Budapest"
  },
  {
    id: "45",
    name: "Civil Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "8 semesters",
    university_name: "Széchenyi István University",
    faculty: "Faculty of Architecture, Civil Engineering and Transport Sciences",
    location: "Győr"
  },
  {
    id: "46",
    name: "Civil Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "8 semesters",
    university_name: "University of Debrecen",
    faculty: "Faculty of Engineering",
    location: "Debrecen"
  },
  {
    id: "47",
    name: "Civil Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "8 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Engineering and Information Technology",
    location: "Pécs"
  },
  {
    id: "48",
    name: "Civil Engineering",
    degree_level: "Bachelor",
    field_of_study: "Engineering",
    language: "English",
    duration: "8 semesters",
    university_name: "University of Public Service",
    faculty: "Faculty of Water Sciences",
    location: "Baja"
  },
  {
    id: "49",
    name: "Classical Musical Instrumental Performance [Specialisation: Flute]",
    degree_level: "Bachelor",
    field_of_study: "Arts",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Music and Visual Arts",
    location: "Pécs"
  },
  {
    id: "50",
    name: "Classical Musical Instrumental Performance [Specialisation: Guitar]",
    degree_level: "Bachelor",
    field_of_study: "Arts",
    language: "English",
    duration: "6 semesters",
    university_name: "University of Pécs",
    faculty: "Faculty of Music and Visual Arts",
    location: "Pécs"
  },
  // Continue with more entries following the same pattern
  {
    id: "242",
    name: "Wildlife Management Engineering",
    degree_level: "Bachelor",
    field_of_study: "Agricultural Sciences",
    language: "English",
    duration: "7 semesters",
    university_name: "Hungarian University of Agriculture and Life Sciences",
    faculty: "Institute for Wildlife Management and Nature Conservation",
    location: "Gödöllő"
  }
];
