export interface NSCPChapter {
  id: string;
  title: string;
  description: string;
  fullCode?: string;
  tags: string[];
}

export interface PermitStep {
  id: number;
  title: string;
  description: string;
  checklist: string[];
}

export interface BestPracticeArticle {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content?: string;
  tags: string[];
}

export const nscpData: NSCPChapter[] = [
  {
    id: 'nscp-201',
    title: 'Structural Steel',
    description: 'Provisions for the design, fabrication, and erection of structural steel for buildings and other structures.',
    tags: ['Steel', 'Design', 'Fabrication', 'NSCP 201'],
    fullCode: 'Section 501 covers structural steel design using Load and Resistance Factor Design (LRFD) or Allowable Strength Design (ASD)...'
  },
  {
    id: 'nscp-202',
    title: 'Reinforced Concrete',
    description: 'Minimum requirements for materials, design, and construction of structural concrete members.',
    tags: ['Concrete', 'Rebar', 'Materials', 'NSCP 202'],
    fullCode: 'Section 401 provides minimum requirements for materials, design, and construction of structural concrete...'
  },
  {
    id: 'nscp-203',
    title: 'Seismic Design',
    description: 'Earthquake load parameters, zoning maps, and detailing requirements for structural integrity in seismic zones.',
    tags: ['Earthquake', 'Seismic', 'Zoning', 'NSCP 208'],
    fullCode: 'Section 208 outlines lateral force requirements for structures based on seismic zone, soil type, and importance factor...'
  },
  {
    id: 'nscp-204',
    title: 'Wind Loads',
    description: 'Design wind pressures, topographical factors, and basic wind speed zones for different regions in the Philippines.',
    tags: ['Wind', 'Pressure', 'Climate', 'NSCP 207'],
    fullCode: 'Section 207 determines wind loads using either the Analytical Procedure or the Method 1 (Simplified Procedure)...'
  },
  {
    id: 'nscp-205',
    title: 'Wood/Timber Design',
    description: 'Allowable stresses and design procedures for structural timber and wood-based products.',
    tags: ['Wood', 'Timber', 'Stress', 'NSCP 601'],
  },
  {
    id: 'nscp-206',
    title: 'Masonry',
    description: 'Requirements for the design and construction of reinforced and unreinforced masonry structures.',
    tags: ['Masonry', 'Blocks', 'Construction', 'NSCP 701'],
  }
];

export const permitData: PermitStep[] = [
  { 
    id: 1, 
    title: 'Pre-Application', 
    description: 'Gather land titles, tax declarations, and secure barangay clearance before drafting final plans.',
    checklist: ['TCT / Deed of Sale', 'Latest Tax Receipt', 'Barangay Clearance']
  },
  { 
    id: 2, 
    title: 'Technical Plans', 
    description: 'Complete set of signed and sealed plans by respective professionals (Civil, Arch, Electrical, Plumbing).',
    checklist: ['Structural Analysis', 'Bill of Materials', 'Specifications']
  },
  { 
    id: 3, 
    title: 'OBO Submission', 
    description: 'Submit compiled documents to the local municipal hall for evaluation, assessment, and approval.',
    checklist: ['Clearances (Fire, Zoning)', 'Permit Fees Payment', 'Locational Clearance']
  },
];

export const homeownerArticles: BestPracticeArticle[] = [
  {
    id: 'bp-1',
    title: 'How to Inspect Concrete Pours',
    category: 'Quality Control',
    image: 'https://images.unsplash.com/photo-1517646281694-22003c738095?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Understand the basics of slump tests, curing times, and what to watch out for when contractors pour your foundation.',
    tags: ['Concrete', 'Inspection', 'Foundation']
  },
  {
    id: 'bp-2',
    title: 'Reading Structural Plans',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800',
    excerpt: 'A beginner-friendly guide to decoding the lines, symbols, and abbreviations used by engineers on structural drawings.',
    tags: ['Plans', 'Blueprints', 'Symbols']
  },
  {
    id: 'bp-3',
    title: 'Soil Testing Importance',
    category: 'Site Prep',
    image: 'https://images.unsplash.com/photo-1541888941257-18ce9e9e623b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Why skipping the soil bearing capacity test is the biggest mistake you can make before building a multi-story home.',
    tags: ['Soil', 'Testing', 'Geotechnical']
  },
  {
    id: 'bp-4',
    title: 'Understanding Setback Rules',
    category: 'Legal',
    image: 'https://images.unsplash.com/photo-1582408921715-18e7806367c1?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Know the required distances between your building and the property line to avoid legal issues and penalties.',
    tags: ['Setbacks', 'Legal', 'Building Code']
  }
];
