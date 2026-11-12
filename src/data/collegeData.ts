export interface Course {
  id: string;
  name: string;
  degree: 'UG' | 'PG';
  category: 'commerce' | 'computer' | 'media' | 'science';
  duration: string;
  eligibility: string;
  seats: number;
  description: string;
  careerPaths: string[];
  keySubjects: string[];
  syllabusOverview: string;
}

export const COLLEGE_INFO = {
  name: "JDT Islam College of Arts & Science",
  shortName: "JDTICAS",
  parentOrg: "JDT Islam Orphanage & Educational Institutions",
  foundedYear: 2005,
  parentFoundedYear: 1922,
  affiliation: "Affiliated to University of Calicut",
  approval: "Approved by Government of Kerala",
  principal: "Dr. T.K. Maqbool",
  motto: "Empowering Youth Through Quality Education",
  subMotto: "Wisdom · Compassion · Integrity",
  address: "Jamiath Hill, Marikunnu P.O., Kozhikode (Calicut) - 673012, Kerala, India",
  phonePrimary: "0495 2730055",
  phoneMobile: "+91 9447615660",
  email: "jdticas@gmail.com",
  officeHours: "Monday – Saturday: 9:00 AM – 4:30 PM",
  admissionsOpenYear: "2025–2026",
};

export const COURSES: Course[] = [
  {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    degree: "UG",
    category: "computer",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) pass with Mathematics / Computer Science / Informatics Practices / Statistics as one of the subjects",
    seats: 48,
    description: "Comprehensive software engineering, database design, full-stack web architectures, and algorithms designed to prepare graduates for top IT firms and advanced studies.",
    careerPaths: ["Software Developer", "Full Stack Engineer", "Cloud & DevOps Associate", "Systems Analyst"],
    keySubjects: ["Data Structures & Algorithms", "Python & Java Programming", "Web Technologies", "Database Management Systems", "Mobile App Development"],
    syllabusOverview: "Curriculum aligned with Calicut University CBCSS guidelines including laboratory practice, mini projects, and final semester industrial software project."
  },
  {
    id: "bsc-cs",
    name: "B.Sc Computer Science",
    degree: "UG",
    category: "computer",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) with Mathematics as one of the optional subjects",
    seats: 40,
    description: "Deep foundation in computer systems architecture, computational theory, artificial intelligence fundamentals, and high-performance programming.",
    careerPaths: ["Data Analyst", "AI/ML Associate", "Systems Programmer", "Cybersecurity Specialist"],
    keySubjects: ["Theoretical Computer Science", "Operating Systems", "Microprocessors", "Computer Networks", "Software Engineering"],
    syllabusOverview: "Rigorous blend of hardware, mathematical computing foundations, and modern software paradigms with dedicated computer labs."
  },
  {
    id: "ba-multimedia",
    name: "BA Multimedia",
    degree: "UG",
    category: "media",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) or equivalent examination in any stream recognized by University of Calicut",
    seats: 50,
    description: "Flagship creative program in digital cinematography, 2D/3D animation, VFX, graphic storytelling, audio mastering, and interactive media design.",
    careerPaths: ["Motion Graphic Designer", "UI/UX Designer", "Video Editor & Colorist", "VFX Artist", "Digital Journalist"],
    keySubjects: ["Visual Communication & Aesthetics", "Digital Filmmaking & Cinematography", "3D Modeling & Animation", "Audio & Video Post-Production", "Scriptwriting"],
    syllabusOverview: "Hands-on studio projects, green-screen chroma production, industry guest workshops, and annual degree film exhibition."
  },
  {
    id: "ma-multimedia",
    name: "M.A. Multimedia",
    degree: "PG",
    category: "media",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in any discipline with minimum 45% aggregate marks from University of Calicut or equivalent",
    seats: 20,
    description: "Advanced post-graduate specialization in media direction, interactive experiential design, transmedia narratives, and media research leadership.",
    careerPaths: ["Creative Director", "Media Producer", "Senior UX Strategist", "Multimedia Academician", "Documentary Filmmaker"],
    keySubjects: ["Advanced Narrative Cinema", "Digital Compositing & Special Effects", "New Media Theories", "Media Entrepreneurship", "Dissertation & Master Project"],
    syllabusOverview: "Advanced research-grade creative curriculum with industry-standard production pipeline in dedicated editing suites."
  },
  {
    id: "bcom-finance",
    name: "B.Com Finance",
    degree: "UG",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) with at least one Commerce subject, or 45% marks for non-commerce students",
    seats: 60,
    description: "Premier commerce program preparing students for corporate finance, investment banking, taxation, auditing, and competitive professional certifications (CA/CMA/ACCA).",
    careerPaths: ["Financial Analyst", "Tax Consultant", "Corporate Accountant", "Banking Executive", "Auditor"],
    keySubjects: ["Financial Accounting", "Corporate Regulations", "Income Tax Laws", "Financial Markets & Services", "Cost & Management Accounting"],
    syllabusOverview: "Calicut University accredited commerce syllabus backed by practical Tally/ERP computing and investor simulation training."
  },
  {
    id: "bcom-ca",
    name: "B.Com Computer Application",
    degree: "UG",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) with Commerce or General Stream as per Calicut University admission norms",
    seats: 60,
    description: "Interdisciplinary commerce degree fusing financial accounting principles with business analytics, e-commerce architectures, and spreadsheet automation.",
    careerPaths: ["E-Commerce Specialist", "Business Systems Analyst", "ERP Consultant", "Accounts Manager"],
    keySubjects: ["Computer Applications in Business", "E-Commerce Technologies", "Business Accounting", "Business Analytics", "Corporate Governance"],
    syllabusOverview: "Blends commercial acumen with software tools for digital trade and data-driven corporate reporting."
  },
  {
    id: "bcom-coop",
    name: "B.Com Co-operation",
    degree: "UG",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) with Commerce or aggregate eligibility as per university norms",
    seats: 60,
    description: "Specialized commerce degree tailored to Kerala's thriving cooperative banking sector, rural financial institutions, and agricultural credit societies.",
    careerPaths: ["Co-operative Bank Officer", "Credit Society Inspector", "Financial Auditor", "Rural Development Officer"],
    keySubjects: ["Co-operative Banking & Law", "Co-operative Management", "Rural Finance", "Financial Accounting", "Auditing"],
    syllabusOverview: "Tailored to state cooperative exams and banking leadership with practical exposure to cooperative society workflows."
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    degree: "UG",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) pass in any stream with minimum 45% aggregate",
    seats: 50,
    description: "Dynamic business curriculum covering strategic management, human resource dynamics, modern digital marketing, startup incubation, and organizational psychology.",
    careerPaths: ["Business Development Executive", "HR Coordinator", "Marketing Strategist", "Operations Supervisor", "Entrepreneur"],
    keySubjects: ["Principles of Management", "Marketing Management", "Human Resource Management", "Financial Management", "Entrepreneurship Development"],
    syllabusOverview: "Focuses on case-study pedagogy, personality development, industry internships, and IEDC startup incubation."
  },
  {
    id: "mcom",
    name: "Master of Commerce (M.Com - Finance)",
    degree: "PG",
    category: "commerce",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Com or BBA with minimum 45% aggregate marks from a recognized university",
    seats: 20,
    description: "Advanced post-graduate specialization in strategic corporate finance, security analysis, portfolio management, international financial reporting, and econometric research.",
    careerPaths: ["Senior Financial Analyst", "College Lecturer / Assistant Professor (UGC-NET)", "Portfolio Manager", "Tax Advisor"],
    keySubjects: ["Strategic Financial Management", "Security Analysis & Portfolio Management", "International Finance", "Advanced Cost Accounting", "Research Methodology"],
    syllabusOverview: "Designed for academic excellence and corporate consultancy with research project dissertation and NET/JRF coaching."
  },
  {
    id: "bsc-biotech",
    name: "B.Sc Biotechnology",
    degree: "UG",
    category: "science",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) with Biology, Chemistry, and Physics",
    seats: 36,
    description: "Modern biological science program exploring molecular biology, recombinant DNA technology, industrial bioprocesses, microbiology, and immunology.",
    careerPaths: ["Quality Control Analyst", "Biotech Research Assistant", "Clinical Research Associate", "Pharmaceutical Specialist"],
    keySubjects: ["Cell Biology & Genetics", "Molecular Biology", "Immunology", "Recombinant DNA Technology", "Industrial Microbiology"],
    syllabusOverview: "Fully equipped biotechnology laboratory with spectrophotometers, laminar air flows, autoclaves, and electrophoresis apparatus."
  },
  {
    id: "bsc-food-tech",
    name: "B.Sc Food Technology",
    degree: "UG",
    category: "science",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) with Chemistry and Biology/Mathematics",
    seats: 36,
    description: "Industrial food processing, preservation engineering, quality safety assurance (FSSAI/HACCP), product formulation, and sensory analysis.",
    careerPaths: ["Food Safety Officer", "Quality Assurance Executive", "Food Processing Specialist", "Product Development Scientist"],
    keySubjects: ["Food Chemistry", "Food Microbiology", "Food Preservation Techniques", "Quality Control & Hygiene", "Bakery & Confectionery Technology"],
    syllabusOverview: "Hands-on food chemistry and processing laboratory training with field visits to premier Kerala food industries."
  },
  {
    id: "bsc-psychology",
    name: "B.Sc Psychology",
    degree: "UG",
    category: "science",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) pass in any stream recognized by University of Calicut",
    seats: 36,
    description: "Scientific study of human mental processes, behavioral dynamics, counseling psychology, developmental psychopathology, and psychological testing.",
    careerPaths: ["Counseling Assistant", "HR Behavioral Analyst", "School Wellness Counselor", "Clinical Assistant"],
    keySubjects: ["General Psychology", "Developmental Psychology", "Psychopathology", "Social Psychology", "Experimental Psychology & Testing"],
    syllabusOverview: "Dedicated psychology testing laboratory with standardized psychometric batteries and field observational internships."
  },
  {
    id: "ba-english",
    name: "BA Functional English",
    degree: "UG",
    category: "media",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) in any stream with English as a subject",
    seats: 40,
    description: "Practical applied linguistic program emphasizing phonetics, corporate communication, creative journalism, content writing, translation, and public relations.",
    careerPaths: ["Content Strategist", "Copywriter", "Public Relations Specialist", "Corporate Communications Executive", "Language Trainer"],
    keySubjects: ["Phonetics & Applied Linguistics", "Creative Writing", "English for Media", "Translation Studies", "Public Relations"],
    syllabusOverview: "Interactive language laboratory, literary symposiums, campus journal editing, and presentation masterclasses."
  },
  {
    id: "ba-travel",
    name: "BA Travel & Tourism",
    degree: "UG",
    category: "media",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (+2) pass in any discipline",
    seats: 40,
    description: "Tourism geography, ticketing systems (GDS), airline hospitality, eco-tourism operations, destination branding, and heritage management.",
    careerPaths: ["Tourism Officer", "Travel Consultant", "Airline Customer Relations", "Event & Destination Manager"],
    keySubjects: ["Tourism Principles & Practices", "Airfare Calculation & Ticketing", "Hospitality Management", "Ecotourism", "Itinerary Planning"],
    syllabusOverview: "Field study tours across South India's premier tourist destinations, airport visits, and customer relations internships."
  }
];

export const CAMPUS_FACILITIES = [
  {
    title: "Central Academic Block",
    category: "Infrastructure",
    description: "A stately multi-storey architectural complex surrounded by scenic tropical greenery in Jamiath Hill, featuring smart audio-visual classrooms and administrative suites.",
    image: "/src/assets/images/jdt_campus_main_building_1794473281326.jpg",
    highlights: ["Interactive Smart Classrooms", "Elevator & Accessibility Access", "Green Energy & Solar Power", "24/7 Campus Surveillance"]
  },
  {
    title: "Central Library & Digital Commons",
    category: "Research & Learning",
    description: "Spacious dual-level research library containing over 18,000 volumes, national & international journals, DELNET e-resources, and a dedicated digital research zone.",
    image: "/src/assets/images/jdt_library_learning_center_1794473279192.jpg",
    highlights: ["18,000+ Physical & Digital Books", "DELNET & INFLIBNET Subscriptions", "Quiet Individual Study Carrels", "High-speed Wi-Fi Zone"]
  },
  {
    title: "Multimedia & Computing Studios",
    category: "Technology",
    description: "State-of-the-art computer science laboratories with high-speed fiber connectivity, graphics workstations, chroma video suites, sound editing booths, and animation software.",
    image: "/src/assets/images/jdt_multimedia_computing_lab_1794473279630.jpg",
    highlights: ["Dual-boot Computing Labs", "Professional Chroma Key Studio", "Industry Software (Adobe, Blender, IDEs)", "Dedicated Server Architecture"]
  },
  {
    title: "Vibrant Student Life & Campus",
    category: "Community",
    description: "Lively collegiate courtyard and green lawns for cultural exchange, open-air discussions, university youth festivals, and sports competitions.",
    image: "/src/assets/images/jdt_campus_life_students_1794473279556.jpg",
    highlights: ["University Arts Competitions", "Active College Union & Clubs", "Safe & Inclusive Community", "Sports Grounds & Pavilion"]
  }
];

export const STUDENT_CLUBS = [
  {
    name: "IEDC & Innovation Cell",
    focus: "Entrepreneurship & Technology",
    description: "Empowers students to turn raw ideas into viable startup prototypes with Kerala Startup Mission support, venture mentoring, and hackathons.",
    icon: "Rocket"
  },
  {
    name: "Janani Nature Club",
    focus: "Eco-Conservation & Sustainability",
    description: "Collaborates with Kerala Forest & Wildlife Department for green audits, afforestation drives, wildlife photography walks, and zero-plastic campaigns.",
    icon: "Leaf"
  },
  {
    name: "Literary & Oratory Society",
    focus: "Debate, Journalism & Arts",
    description: "Hosts the renowned 'Time Talk Show', inter-collegiate debate championships, creative writing workshops, and book discussion forums.",
    icon: "BookOpen"
  },
  {
    name: "National Service Scheme (NSS)",
    focus: "Community Outreach & Service",
    description: "Instills selfless humanitarian service through annual 7-day rural camps, blood donation drives, flood relief efforts, and adult literacy programs.",
    icon: "Heart"
  },
  {
    name: "Media & Cinema Collective",
    focus: "Creative Media & Film",
    description: "Organizes short film screenings, masterclasses with Malayalam cinema professionals, photography exhibitions, and documentary showcases.",
    icon: "Film"
  },
  {
    name: "Sports & Physical Education",
    focus: "Athletics & Team Sports",
    description: "Coaches competitive teams in Football, Cricket, Badminton, Volleyball, and Athletics for University of Calicut Inter-Collegiate Tournaments.",
    icon: "Trophy"
  }
];

export const TESTIMONIALS = [
  {
    quote: "The Multimedia department at JDTICAS gave me real studio exposure with industry-grade equipment. From day one, professors encouraged creative storytelling that helped me land a position at a major digital agency in Kochi.",
    author: "Mohammed Nihal",
    degree: "BA Multimedia (Batch of 2023)",
    role: "Senior Motion Graphic Designer, Dentsu Creative"
  },
  {
    quote: "Studying B.Sc Computer Science at JDT was transformative. The lab infrastructure, coding hackathons, and faculty mentorship in AI prepared me thoroughly for corporate campus placements.",
    author: "Fathima Ansheeda",
    degree: "B.Sc Computer Science (Batch of 2022)",
    role: "Associate Software Engineer, Cognizant"
  },
  {
    quote: "The commerce faculty provided systematic coaching for professional certifications alongside our B.Com syllabus. The ethical values and mentorship at JDT Islam remain an invaluable foundation.",
    author: "Arjun K. Varma",
    degree: "B.Com Finance (Batch of 2023)",
    role: "Financial Analyst, Ernst & Young (EY)"
  }
];

export const FAQS = [
  {
    question: "Is JDT Islam College of Arts and Science affiliated with University of Calicut?",
    answer: "Yes, JDT Islam College of Arts & Science is permanently approved by the Government of Kerala and affiliated with the University of Calicut. All degree programs strictly adhere to Calicut University regulations and Choice Based Credit Semester System (CBCSS)."
  },
  {
    question: "What is the procedure for UG and PG admissions for the 2025–2026 academic year?",
    answer: "Admissions are conducted through both University of Calicut Centralized Allotment Process (CAP) and Institutional Management Quota. Candidates can submit their preliminary inquiry form directly on this website or visit the Admissions Desk at Jamiath Hill campus."
  },
  {
    question: "Are hostel accommodations available for outstation students?",
    answer: "Yes, safe and supervised separate residential hostel facilities are provided for both male and female students within the JDT Islam institutional campus, with hygienic mess, study halls, and 24/7 security."
  },
  {
    question: "What scholarships and financial concessions are offered?",
    answer: "Various government scholarships (Post-Matric, State Merit, Minority Welfare Scholarships) are facilitated through our dedicated scholarship desk. Additionally, the JDT Islam Orphanage Committee provides institutional fee concessions and welfare assistance for underprivileged students."
  },
  {
    question: "How active is the Campus Placement and Career Guidance Cell?",
    answer: "The college has a proactive placement cell that organizes campus recruitment drives, soft-skills training, resume workshops, and mock interviews. Our alumni are placed in premier multinational IT firms, banks, media houses, and healthcare biotech laboratories."
  }
];
