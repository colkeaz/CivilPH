export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
}

export interface Review {
  author: string;
  role: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

export interface Engineer {
  id: number;
  name: string;
  title: string;
  city: string;
  location: string;
  experience: string;
  license: string;
  rate: string;
  responseTime: string;
  projectsCompleted: string;
  languages: string;
  avatar: string;
  about: string;
  verified: boolean;
  specialties: string[];
  experienceList: Experience[];
  portfolio: Project[];
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export const mockEngineers: Engineer[] = [
  {
    id: 1,
    name: 'Engr. Juan Dela Cruz',
    title: 'Senior Structural Engineer',
    city: 'Metro Manila',
    location: 'Makati City, Metro Manila',
    experience: '15+ Years Experience',
    license: 'PRC #0123456',
    rate: '2,500',
    responseTime: 'Within 24 hrs',
    projectsCompleted: '120+',
    languages: 'English, Tagalog',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt-OKb05as7KtjP9P0JW-NbxQ_gmsKfjLLHbK3B_RNEOO1apToYC04xc4mflecuypXMPHg3oMkRfbBvXteNXkrmTnRgNeDUY3ee54BZDEM5hP0i2zNTIXmhL2-blMDCt2qLEVNapqY6eFSPzsv0pkPjUaIs2ebw4Hkem0vq1Bf4YM0TDVr6v5__4lwR2mGSmSx4YJSgz8DgQHAXGdGkiwyuWKCQG_CldlOIxuT2JXTJxxq3onrtHj9lbiD2PxrIhZGAFRH2zdG_NI',
    about: 'Dedicated and highly skilled Structural Engineer with over 15 years of experience in designing, analyzing, and supervising the construction of commercial and residential high-rises in Metro Manila.',
    verified: true,
    specialties: ['Structural Analysis', 'Seismic Retrofitting', 'Geotechnical Evaluation', 'Project Management', 'High-Rise Construction'],
    experienceList: [
      { role: 'Lead Structural Engineer', company: 'Mabuhay Builders Inc.', period: '2018 - Present', description: 'Spearheading the structural design team for multiple 30+ story residential condominiums in BGC.' },
      { role: 'Senior Civil Engineer', company: 'Struktura Consult Corp.', period: '2012 - 2018', description: 'Conducted comprehensive structural audits for older commercial buildings and designed seismic retrofitting solutions.' }
    ],
    portfolio: [
      { title: 'Skyline Tower BGC', description: '45-story residential condominium featuring advanced wind-load resistance design.', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
      { title: 'Makati Commercial Hub', description: 'Mixed-use commercial development with deep foundation structural engineering.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'Maria S.', role: 'Homeowner', rating: 5, date: 'Oct 2025', title: 'Highly Professional and Thorough', content: '"Engr. Juan was instrumental in ensuring our residential project in Antipolo was structurally sound."' },
      { author: 'Prime Dev Corp.', role: '', rating: 5, date: 'Aug 2025', title: 'Excellent Structural Consultant', content: '"We hired him for a commercial building audit. Very comprehensive report."' }
    ],
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: 2,
    name: 'Engr. Maria Santos',
    title: 'Geotechnical Specialist',
    city: 'Cebu City',
    location: 'Lahug, Cebu City',
    experience: '8+ Years Experience',
    license: 'PRC #0654321',
    rate: '1,800',
    responseTime: 'Within 12 hrs',
    projectsCompleted: '45+',
    languages: 'English, Cebuano',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrHusRa_fwfZ0qtrIs1c4SXzPuU7kygUHoHZEa2yztkCVg58aDgWGpcPsBNgTfns8N6p9H_xSInoX__nuROaQO7WntfNdhwTza0eAOCEN6rbMTEcNzJz2_gSNSv8-G1LPfweG-qC3oXAT5UFy9WBTLe01T1t8jvTXk_AMCGpOiW9Aub4G3p-ROTI5ayF6F--dEbpXchiW1jYUmMfliZyZ80QmYLAlAwrFE2o-QjKcKoUE13FZ8-uU7ietkwGa9LjiVMPYhsItzpU8',
    about: 'Expert in soil mechanics and foundation engineering. Specialized in slope stability analysis and deep foundation design for various terrains in the Visayas region.',
    verified: true,
    specialties: ['Geotechnical', 'Soil Analysis', 'Slope Stability', 'Foundation Design'],
    experienceList: [
      { role: 'Senior Geotechnical Engineer', company: 'Visayas Soils Inc.', period: '2020 - Present', description: 'Leading geotechnical investigations for major infrastructure projects in Cebu and Iloilo.' }
    ],
    portfolio: [
      { title: 'Cebu Hills Development', description: 'Comprehensive slope stabilization for a luxury residential complex.', image: 'https://images.unsplash.com/photo-1590066305974-bc19973f74f8?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'Robert G.', role: 'Developer', rating: 5, date: 'Nov 2025', title: 'Outstanding Expertise', content: '"Engr. Maria provided critical soil reports that saved our project from potential foundation failure."' }
    ],
    rating: 4.7,
    reviewCount: 18
  },
  {
    id: 3,
    name: 'Engr. Antonio Reyes',
    title: 'Construction Management Consultant',
    city: 'Davao City',
    location: 'Lanang, Davao City',
    experience: '22+ Years Experience',
    license: 'PRC #0098765',
    rate: '3,000',
    responseTime: 'Within 48 hrs',
    projectsCompleted: '200+',
    languages: 'English, Tagalog, Bisaya',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    about: 'Veteran in construction project management and residential design. Dedicated to quality control and efficient project delivery.',
    verified: true,
    specialties: ['Construction Mgmt', 'Residential', 'Cost Estimation', 'Quality Control'],
    experienceList: [
      { role: 'Project Director', company: 'Davao Heights Construction', period: '2015 - Present', description: 'Overseeing all major residential and commercial construction projects in the Davao region.' }
    ],
    portfolio: [
      { title: 'Davao Executive Villas', description: 'Project management for a high-end gated community project.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'Liza M.', role: 'Client', rating: 4, date: 'Dec 2025', title: 'Very Reliable', content: '"Engr. Antonio made sure our house was built exactly according to the plans."' }
    ],
    rating: 4.6,
    reviewCount: 56
  },
  {
    id: 4,
    name: 'Engr. Sofia Bautista',
    title: 'Residential & Green Building Specialist',
    city: 'Metro Manila',
    location: 'Quezon City, Metro Manila',
    experience: '10+ Years Experience',
    license: 'PRC #0211345',
    rate: '2,000',
    responseTime: 'Within 8 hrs',
    projectsCompleted: '80+',
    languages: 'English, Tagalog',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    about: 'Passionate about sustainable construction. Certified LEED-accredited engineer with expertise in eco-friendly residential designs and green building compliance.',
    verified: true,
    specialties: ['Residential', 'Green Building', 'Structural Design', 'LEED Certification'],
    experienceList: [
      { role: 'Principal Engineer', company: 'GreenBuild PH Corp.', period: '2019 - Present', description: 'Leading sustainable residential design projects for private homeowners and developers in Luzon.' }
    ],
    portfolio: [
      { title: 'Eco-Village Antipolo', description: 'LEED-certified eco-village featuring rainwater harvesting and passive ventilation systems.', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'Ben R.', role: 'Homeowner', rating: 5, date: 'Jan 2026', title: 'Best Decision We Made', content: '"Engr. Sofia guided us through every step of our eco-home project. Knowledge is unmatched."' }
    ],
    rating: 4.8,
    reviewCount: 31
  },
  {
    id: 5,
    name: 'Engr. Carlos Mendoza',
    title: 'Bridge & Infrastructure Engineer',
    city: 'Metro Manila',
    location: 'Pasig City, Metro Manila',
    experience: '18+ Years Experience',
    license: 'PRC #0334521',
    rate: '3,500',
    responseTime: 'Within 24 hrs',
    projectsCompleted: '60+',
    languages: 'English, Tagalog',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    about: 'Infrastructure specialist with deep experience in bridge design, road engineering, and government public works projects across the Philippines.',
    verified: true,
    specialties: ['Bridge Design', 'Road Engineering', 'Infrastructure', 'Load Analysis'],
    experienceList: [
      { role: 'Senior Infrastructure Engineer', company: 'DPWH Metro Manila', period: '2010 - Present', description: 'Overseeing bridge inspection, rehabilitation, and new construction projects under DPWH programs.' }
    ],
    portfolio: [
      { title: 'Pasig River Pedestrian Bridge', description: 'Designed and supervised construction of a modern cable-stayed pedestrian bridge.', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'City Gov. Pasig', role: 'Local Government', rating: 5, date: 'Sep 2025', title: 'Exceptional Public Works Engineer', content: '"Engr. Carlos delivered the bridge project 2 weeks ahead of schedule and under budget."' }
    ],
    rating: 4.9,
    reviewCount: 24
  },
  {
    id: 6,
    name: 'Engr. Rachel Tan',
    title: 'Earthquake Engineering Specialist',
    city: 'Quezon City',
    location: 'UP Campus, Quezon City',
    experience: '12+ Years Experience',
    license: 'PRC #0445678',
    rate: '2,800',
    responseTime: 'Within 24 hrs',
    projectsCompleted: '55+',
    languages: 'English, Tagalog, Mandarin',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    about: 'PhD in Earthquake Engineering. Research focus on Philippine fault systems and NSCP seismic zone compliance for mid-rise structures.',
    verified: true,
    specialties: ['Seismic Analysis', 'Earthquake Engineering', 'NSCP Compliance', 'Structural Retrofitting'],
    experienceList: [
      { role: 'Research Engineer & Consultant', company: 'UP NCTS', period: '2016 - Present', description: 'Conducting research on Philippine earthquake risk and providing structural consultation for seismic resilience.' }
    ],
    portfolio: [
      { title: 'Quezon City School Retrofitting Program', description: 'Seismic vulnerability assessment and retrofitting design for 12 public schools.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'DepEd QC', role: 'Government Agency', rating: 5, date: 'Oct 2025', title: 'Critical Work Done Right', content: '"Her seismic assessment was thorough and the retrofitting recommendations were practical and cost-effective."' }
    ],
    rating: 5.0,
    reviewCount: 19
  },
  {
    id: 7,
    name: 'Engr. Mark Villanueva',
    title: 'Commercial & Industrial Structural Engineer',
    city: 'Iloilo City',
    location: 'Iloilo Business Park, Iloilo City',
    experience: '9+ Years Experience',
    license: 'PRC #0556789',
    rate: '1,600',
    responseTime: 'Within 12 hrs',
    projectsCompleted: '40+',
    languages: 'English, Ilonggo, Tagalog',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    about: 'Young and dynamic structural engineer based in Western Visayas with a focus on commercial developments, warehouses, and light industrial structures.',
    verified: true,
    specialties: ['Commercial Buildings', 'Industrial', 'Steel Design', 'Structural Analysis'],
    experienceList: [
      { role: 'Structural Engineer', company: 'Visayas Construction Group', period: '2018 - Present', description: 'Handling structural design for commercial malls, office buildings, and industrial warehouses in Iloilo.' }
    ],
    portfolio: [
      { title: 'Iloilo Tech Park Phase 2', description: 'Structural design for 4-story commercial building with basement parking.', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'SM Development Corp.', role: 'Developer', rating: 4, date: 'Nov 2025', title: 'Reliable and Responsive', content: '"Mark delivered all structural plans ahead of schedule and accommodated last-minute design changes professionally."' }
    ],
    rating: 4.5,
    reviewCount: 14
  },
  {
    id: 8,
    name: 'Engr. Diane Reyes',
    title: 'Water Resources & Hydraulic Engineer',
    city: 'Cebu City',
    location: 'North Reclamation Area, Cebu City',
    experience: '14+ Years Experience',
    license: 'PRC #0667890',
    rate: '2,200',
    responseTime: 'Within 48 hrs',
    projectsCompleted: '70+',
    languages: 'English, Cebuano',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    about: 'Expert in flood control, drainage systems, and coastal erosion engineering. Strong background in hydrological modeling using Philippine PAGASA data.',
    verified: true,
    specialties: ['Flood Control', 'Drainage Design', 'Coastal Engineering', 'Hydraulic Analysis'],
    experienceList: [
      { role: 'Hydraulic Engineer', company: 'DENR Cebu Regional Office', period: '2014 - Present', description: 'Designing and supervising drainage and flood mitigation projects across Central Visayas.' }
    ],
    portfolio: [
      { title: 'Mandaue Flood Mitigation Project', description: 'Comprehensive drainage redesign to reduce flood occurrence in low-lying barangays.', image: 'https://images.unsplash.com/photo-1504712598893-24159a42bfdc?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'Mandaue LGU', role: 'Local Government', rating: 5, date: 'Aug 2025', title: 'Life-Saving Work', content: '"The flood incidents in our municipality reduced by 60% after Engr. Diane\'s drainage plan was implemented."' }
    ],
    rating: 4.8,
    reviewCount: 22
  },
  {
    id: 9,
    name: 'Engr. Paolo Garcia',
    title: 'Structural Inspector & Code Compliance Expert',
    city: 'Davao City',
    location: 'Matina, Davao City',
    experience: '6+ Years Experience',
    license: 'PRC #0778901',
    rate: '1,400',
    responseTime: 'Within 8 hrs',
    projectsCompleted: '30+',
    languages: 'English, Tagalog, Bisaya',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    about: 'Specializes in building code compliance, occupancy permits, and structural inspection reports for residential and commercial properties in Mindanao.',
    verified: true,
    specialties: ['Building Code', 'Structural Inspection', 'Permit Processing', 'Residential'],
    experienceList: [
      { role: 'Structural Inspector', company: 'Davao Building Officials Office', period: '2020 - Present', description: 'Conducting structural inspections, reviewing plans for code compliance, and issuing occupancy permits.' }
    ],
    portfolio: [
      { title: 'Pearl Farm Resort Expansion', description: 'Structural inspection and compliance certification for new resort facilities.', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: [
      { author: 'JG Summit Holdings', role: 'Developer', rating: 4, date: 'Dec 2025', title: 'Quick and Thorough', content: '"Paolo completed our compliance audit in 3 days and identified issues we had missed. Highly efficient."' }
    ],
    rating: 4.4,
    reviewCount: 11
  }
];
