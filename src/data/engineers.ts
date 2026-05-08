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
    about: 'Dedicated and highly skilled Structural Engineer with over 15 years of experience in designing, analyzing, and supervising the construction of commercial and residential high-rises in Metro Manila. Proven track record in delivering robust, earthquake-resistant structural frameworks that comply with the National Structural Code of the Philippines (NSCP). Passionate about integrating sustainable engineering practices with modern architectural designs to create safe and efficient structures.',
    verified: true,
    specialties: ['Structural Analysis', 'Seismic Retrofitting', 'Geotechnical Evaluation', 'Project Management', 'High-Rise Construction'],
    experienceList: [
      {
        role: 'Lead Structural Engineer',
        company: 'Mabuhay Builders Inc.',
        period: '2018 - Present',
        description: 'Spearheading the structural design team for multiple 30+ story residential condominiums in BGC. Responsible for final approval of structural plans and liaising with city engineers for building permit compliance.'
      },
      {
        role: 'Senior Civil Engineer',
        company: 'Struktura Consult Corp.',
        period: '2012 - 2018',
        description: 'Conducted comprehensive structural audits for older commercial buildings and designed seismic retrofitting solutions. Managed a team of 5 junior engineers and CAD draftsmen.'
      }
    ],
    portfolio: [
      {
        title: 'Skyline Tower BGC',
        description: '45-story residential condominium featuring advanced wind-load resistance design.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Makati Commercial Hub',
        description: 'Mixed-use commercial development with deep foundation structural engineering.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
      }
    ],
    reviews: [
      {
        author: 'Maria S.',
        role: 'Homeowner',
        rating: 5,
        date: 'Oct 2025',
        title: 'Highly Professional and Thorough',
        content: '"Engr. Juan was instrumental in ensuring our residential project in Antipolo was structurally sound given the sloping terrain. His attention to detail and clear explanations gave us peace of mind."'
      },
      {
        author: 'Prime Dev Corp.',
        role: '',
        rating: 5,
        date: 'Aug 2025',
        title: 'Excellent Structural Consultant',
        content: '"We hired him for a commercial building audit. He provided a very comprehensive report with practical retrofitting suggestions. Delivered on time and very easy to communicate with."'
      }
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
      {
        role: 'Senior Geotechnical Engineer',
        company: 'Visayas Soils Inc.',
        period: '2020 - Present',
        description: 'Leading geotechnical investigations for major infrastructure projects in Cebu and Iloilo.'
      }
    ],
    portfolio: [
      {
        title: 'Cebu Hills Development',
        description: 'Comprehensive slope stabilization for a luxury residential complex.',
        image: 'https://images.unsplash.com/photo-1590066305974-bc19973f74f8?auto=format&fit=crop&q=80&w=800'
      }
    ],
    reviews: [
      {
        author: 'Robert G.',
        role: 'Developer',
        rating: 5,
        date: 'Nov 2025',
        title: 'Outstanding Expertise',
        content: '"Engr. Maria provided critical soil reports that saved our project from potential foundation failure. Highly recommended for complex terrains."'
      }
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
      {
        role: 'Project Director',
        company: 'Davao Heights Construction',
        period: '2015 - Present',
        description: 'Overseeing all major residential and commercial construction projects in the Davao region.'
      }
    ],
    portfolio: [
      {
        title: 'Davao Executive Villas',
        description: 'Project management for a high-end gated community project.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
      }
    ],
    reviews: [
      {
        author: 'Liza M.',
        role: 'Client',
        rating: 4,
        date: 'Dec 2025',
        title: 'Very Reliable',
        content: '"Engr. Antonio made sure our house was built exactly according to the plans. Very strict with quality."'
      }
    ],
    rating: 4.6,
    reviewCount: 56
  }
];
