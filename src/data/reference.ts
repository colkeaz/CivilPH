export interface NSCPSection {
  heading: string;
  content: string;
}

export interface NSCPChapter {
  id: string;
  title: string;
  chapterRef: string;
  description: string;
  tags: string[];
  officialUrl: string;
  sections: NSCPSection[];
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
  readTime: string;
  tags: string[];
  body: { heading: string; content: string }[];
}

// ─────────────────────────────────────────────────────────────────────────────
// NSCP DATA — Real summarized content from NSCP 2015 7th Edition
// ─────────────────────────────────────────────────────────────────────────────
export const nscpData: NSCPChapter[] = [
  {
    id: 'nscp-501',
    title: 'Structural Steel',
    chapterRef: 'NSCP 2015 — Section 5',
    description:
      'Provisions for the design, fabrication, and erection of structural steel for buildings and other structures using LRFD and ASD methods.',
    tags: ['Steel', 'Design', 'Fabrication', 'LRFD', 'ASD'],
    officialUrl: 'https://www.asep.org.ph/resources/codes-and-standards/',
    sections: [
      {
        heading: 'Scope & Applicability',
        content:
          'Section 502 of the NSCP governs the design, fabrication, and erection of structural steel used in buildings and other structures. It adopts the AISC Specification for Structural Steel Buildings (AISC 360) as its primary reference, adapted for Philippine conditions.',
      },
      {
        heading: 'Design Methods',
        content:
          'Two design methods are permitted: Load and Resistance Factor Design (LRFD) and Allowable Strength Design (ASD). Under LRFD, the design strength (φRn) must equal or exceed the required strength (Ru) from factored load combinations per Section 203. Under ASD, the allowable strength (Rn/Ω) must equal or exceed the required strength (Ra) from service load combinations.',
      },
      {
        heading: 'Material Requirements',
        content:
          'Structural steel must conform to ASTM, JIS, or equivalent standards. Commonly used Philippine grades include A36 (Fy = 250 MPa), A572 Grade 50 (Fy = 345 MPa), and high-strength low-alloy steels. All materials must have certified mill test reports and be traceable to the certified heat.',
      },
      {
        heading: 'Connection Design',
        content:
          'Bolted connections shall use ASTM A307, A325, or A490 bolts. Minimum bolt diameter for structural connections is 16mm. Welded connections shall conform to AWS D1.1 Structural Welding Code. All welds must be inspected by a qualified welding inspector.',
      },
      {
        heading: 'Stability & Bracing',
        content:
          'Structures must be designed to resist lateral loads through moment frames, braced frames, or shear walls. P-delta effects must be considered for frames where the ratio of lateral drift to story height (Δ/L) exceeds 1/500 under service loads.',
      },
    ],
  },
  {
    id: 'nscp-401',
    title: 'Reinforced Concrete',
    chapterRef: 'NSCP 2015 — Section 4',
    description:
      'Minimum requirements for materials, design, and construction of structural concrete members including beams, columns, slabs, and foundations.',
    tags: ['Concrete', 'Rebar', 'Materials', 'Beams', 'Columns'],
    officialUrl: 'https://www.asep.org.ph/resources/codes-and-standards/',
    sections: [
      {
        heading: 'Scope & Referenced Standards',
        content:
          "Section 401 governs the design of reinforced concrete structures and is based on ACI 318 adapted to Philippine conditions. It applies to all concrete structures except those governed by specific codes (e.g., bridges under DPWH standards).",
      },
      {
        heading: 'Concrete Materials',
        content:
          "Concrete compressive strength (f'c) must be determined from cylinder tests at 28 days per ASTM C39. Minimum f'c values: 17 MPa for residential, 21 MPa for commercial beams and columns, 28 MPa for post-tensioned slabs. Water-cement ratio must not exceed 0.45 for exposed reinforced concrete.",
      },
      {
        heading: 'Reinforcement',
        content:
          "Steel reinforcement must conform to ASTM A615 (deformed bars) or ASTM A706 (low-alloy for seismic zones). Minimum cover for concrete protection: 40mm for beams exposed to weather, 75mm for concrete in contact with soil. Lap splice lengths are specified in Table 425.5.2 of the NSCP.",
      },
      {
        heading: 'Beam Design',
        content:
          "Beams must be designed for combined flexure and shear. Minimum reinforcement ratio ρmin = 1.4/fy. Maximum reinforcement ratio limited to 0.75ρb. Stirrup spacing must not exceed d/2 or 600mm, whichever is less, outside potential plastic hinge zones.",
      },
      {
        heading: 'Column Design',
        content:
          "Tied columns: minimum longitudinal reinforcement ratio = 1%, maximum = 8%. Spiral columns: minimum ratio = 1%, maximum = 8%. Minimum column dimension: 200mm for gravity-only; 300mm for seismic zones 2 and 4. Column ties must be closed hoops in seismic design categories.",
      },
    ],
  },
  {
    id: 'nscp-208',
    title: 'Seismic Design',
    chapterRef: 'NSCP 2015 — Section 208',
    description:
      'Earthquake load parameters, seismic zone maps, site coefficients, and detailing requirements for structural integrity in Philippine seismic zones.',
    tags: ['Earthquake', 'Seismic', 'Zoning', 'NSCP 208', 'Lateral Force'],
    officialUrl: 'https://www.asep.org.ph/resources/codes-and-standards/',
    sections: [
      {
        heading: 'Seismic Zoning',
        content:
          'The Philippines is divided into Seismic Zone 2 and Seismic Zone 4. Zone 2 covers Mindanao (western portions) and Zone 4 covers Luzon, Visayas, and most of Mindanao. Zone 4 corresponds to a 0.4g peak ground acceleration, requiring more stringent detailing.',
      },
      {
        heading: 'Equivalent Static Force Method',
        content:
          'For regular structures ≤ 5 stories and ≤ 20m tall, the base shear V = CvI/(RT) × W, where Cv = seismic coefficient, I = importance factor, R = response modification factor, T = fundamental period, W = seismic dead load. The value of V shall not exceed 2.5CaI/R × W.',
      },
      {
        heading: 'Response Modification Factors (R)',
        content:
          'Concrete special moment-resisting frames: R = 8.5. Concrete intermediate moment-resisting frames: R = 5.5. Concentrically braced steel frames: R = 5.6. Ordinary concrete shear walls: R = 4.5. Higher R values require more ductile detailing per ACI 318 seismic provisions.',
      },
      {
        heading: 'Special Seismic Detailing',
        content:
          'For Zone 4, Seismic Design Category D applies. Concrete frames must use Special Moment Frames (SMF) or Special Structural Walls. Confinement hoops in columns within the plastic hinge zone (Lo) must have spacing ≤ minimum of: 1/4 smallest column dimension, 6× longitudinal bar diameter, or Sx = 100 + (350-hx)/3.',
      },
      {
        heading: 'Soil Site Coefficients',
        content:
          'Site class ranges from SA (hard rock, Vs > 1500 m/s) to SF (special study required). Site amplification factors Ca and Cv are applied based on soil class. Soft clay soils (site class SE or SF) can amplify ground motion by 2.5× compared to rock, requiring geotechnical investigation per Section 208.4.',
      },
    ],
  },
  {
    id: 'nscp-207',
    title: 'Wind Loads',
    chapterRef: 'NSCP 2015 — Section 207',
    description:
      'Design wind pressures, exposure categories, topographical factors, and basic wind speed maps for different regions across the Philippines.',
    tags: ['Wind', 'Pressure', 'Typhoon', 'NSCP 207', 'Climate'],
    officialUrl: 'https://www.asep.org.ph/resources/codes-and-standards/',
    sections: [
      {
        heading: 'Basic Wind Speed',
        content:
          "The Philippines is divided into wind speed regions: Region 1 (250 km/h, Batanes, northern Luzon coasts), Region 2 (200 km/h, typhoon-prone areas), Region 3 (150 km/h, inland areas). These are 3-second gust speeds at 10m above ground in open terrain (Exposure Category C).",
      },
      {
        heading: 'Design Wind Pressure',
        content:
          'Design wind pressure: p = qz × G × Cp – qi × (GCpi), where qz = velocity pressure at height z, G = gust factor (0.85 for rigid), Cp = external pressure coefficient, GCpi = internal pressure coefficient (±0.18 for enclosed buildings). Velocity pressure qz = 0.613 Kz Kzt Kd V² (Pa).',
      },
      {
        heading: 'Exposure Categories',
        content:
          'Exposure B: urban/suburban areas with obstructions 9m high. Exposure C: open terrain with scattered obstructions ≤ 9m. Exposure D: flat, unobstructed areas adjacent to large bodies of water within 1500m. Most Philippine coastal sites are Exposure D.',
      },
      {
        heading: 'Components & Cladding',
        content:
          "Roof-to-wall connections must resist wind uplift. Gable end zones experience 2× the pressure of interior zones. Window and curtain wall systems must be tested to match or exceed the design wind pressure from Section 207. Special attention to corner zones where Cp = -1.8.",
      },
      {
        heading: 'Topographic Effects',
        content:
          'Topographic factor Kzt accounts for speed-up over hills and escarpments. For a 2D ridge, Kzt = (1 + K1K2K3)². Hilltop sites can see 1.5× to 2.0× higher wind pressures vs. flat terrain. Geomorphic assessment is required for sites on ridges with H > 15m or slope > 10%.',
      },
    ],
  },
  {
    id: 'nscp-601',
    title: 'Wood / Timber Design',
    chapterRef: 'NSCP 2015 — Section 6',
    description:
      'Allowable stresses, species groups, and design procedures for structural timber and engineered wood-based products in Philippine construction.',
    tags: ['Wood', 'Timber', 'Stress', 'NSCP 601'],
    officialUrl: 'https://www.asep.org.ph/resources/codes-and-standards/',
    sections: [
      {
        heading: 'Lumber Species Groups',
        content:
          "Philippine timber is classified into four species groups (I–IV) based on density and strength. Group I (e.g., Apitong, Mangkono) has the highest allowable stresses: Fb = 24 MPa in bending. Group II timbers (Tanguile, Red Lauan) are most commonly used: Fb = 16.5 MPa. Design values must be adjusted for moisture content, load duration, and size.",
      },
      {
        heading: 'Allowable Stress Design',
        content:
          "All timber design uses Allowable Stress Design (ASD). Actual stress must not exceed adjusted allowable stress F' = F \u00d7 CD \u00d7 CM \u00d7 Ct \u00d7 CF \u00d7 Ci. CD = load duration factor (1.15 for snow, 1.25 for construction, 1.6 for wind/seismic). CM = wet service factor (0.85 for bending when EMC > 19%).",
      },
      {
        heading: 'Connections',
        content:
          'Fasteners in timber construction include bolts, lag screws, nails, and timber rivets. Minimum edge distance for bolts: 4D perpendicular to grain, 7D parallel to grain (loaded end). Bolt hole diameter = bolt diameter + 1.6mm maximum. Group action factor Cg applies when multiple bolts are in a row.',
      },
    ],
  },
  {
    id: 'nscp-701',
    title: 'Masonry',
    chapterRef: 'NSCP 2015 — Section 7',
    description:
      'Requirements for design and construction of reinforced and unreinforced masonry structures including hollow block walls and brick systems.',
    tags: ['Masonry', 'Hollow Blocks', 'Construction', 'NSCP 701'],
    officialUrl: 'https://www.asep.org.ph/resources/codes-and-standards/',
    sections: [
      {
        heading: 'Material Specifications',
        content:
          "Hollow concrete blocks (CHB) must conform to PNS 16 with minimum compressive strength of 4.1 MPa (Class A). Mortar must be Type S or M per ASTM C270. Grout used in reinforced masonry must have f'g ≥ 13.8 MPa at 28 days. All masonry materials must have current PNS certification.",
      },
      {
        heading: 'Reinforced Masonry Requirements',
        content:
          'Vertical reinforcement bars (minimum 10mm diameter) must be placed at every cell at maximum 800mm spacing, or at every opening jamb. Horizontal reinforcement: 9mm ladder wire or 10mm bars in bond beams every 800mm vertically. All cells containing vertical bars must be fully grouted.',
      },
      {
        heading: 'Unreinforced Masonry',
        content:
          'Unreinforced masonry walls are limited to single-story non-habitable structures in Zone 2. Maximum wall height = 3m, minimum wall thickness = 150mm. In Zone 4, all masonry walls above 1m height must be reinforced. Unreinforced masonry is prohibited as primary lateral force-resisting elements in Zone 4.',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PERMIT DATA
// ─────────────────────────────────────────────────────────────────────────────
export const permitData: PermitStep[] = [
  {
    id: 1,
    title: 'Pre-Application',
    description:
      'Gather land titles, tax declarations, and secure barangay clearance before drafting final plans.',
    checklist: ['TCT / Deed of Sale', 'Latest Tax Receipt', 'Barangay Clearance'],
  },
  {
    id: 2,
    title: 'Technical Plans',
    description:
      'Complete set of signed and sealed plans by respective professionals (Civil, Arch, Electrical, Plumbing).',
    checklist: ['Structural Analysis', 'Bill of Materials', 'Specifications'],
  },
  {
    id: 3,
    title: 'OBO Submission',
    description:
      'Submit compiled documents to the local municipal hall for evaluation, assessment, and approval.',
    checklist: ['Clearances (Fire, Zoning)', 'Permit Fees Payment', 'Locational Clearance'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// BEST PRACTICES FOR HOMEOWNERS — Full article bodies + working Unsplash images
// ─────────────────────────────────────────────────────────────────────────────
export const homeownerArticles: BestPracticeArticle[] = [
  {
    id: 'bp-1',
    title: 'How to Inspect Concrete Pours',
    category: 'Quality Control',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    excerpt:
      'Understand the basics of slump tests, curing times, and what to watch out for when contractors pour your foundation.',
    readTime: '6 min read',
    tags: ['Concrete', 'Inspection', 'Foundation'],
    body: [
      {
        heading: 'Why Concrete Quality Matters',
        content:
          "Concrete is the backbone of any structure. A bad pour can lead to premature cracking, spalling, and in severe cases, structural failure decades before the building's design life ends. As a homeowner, being present and knowing what to look for is your first line of defense.",
      },
      {
        heading: 'The Slump Test',
        content:
          "A slump test measures concrete workability. A 100mm–150mm slump is typical for footings and columns. A slump higher than 175mm often means water was added on-site—this weakens the concrete by increasing the water-cement ratio beyond the mix design. Always insist on delivery receipts showing the original batch mix.",
      },
      {
        heading: 'What to Watch During Pouring',
        content:
          "1. Do not allow water to be added to the truck mix at the job site. 2. Ensure consolidation using a vibrator — lack of vibration causes honeycombing. 3. Watch for cold joints: if there's a delay of more than 30 minutes between pours, it creates a weak plane. 4. Check that steel cover is maintained using concrete chairs, not wood blocks or stones.",
      },
      {
        heading: 'Curing — The Most Neglected Step',
        content:
          "Concrete gains strength by a chemical hydration process, not by drying. It must be kept moist for at least 7 days (14 days for high-strength concrete). Cover with wet burlap sacks or apply curing compound. Avoiding direct sun exposure in the first 48 hours is critical in Philippine climate.",
      },
      {
        heading: 'Red Flags to Report to Your Engineer',
        content:
          "• Concrete that dries/crumbles at surface before 7 days (carbonation issue). • Visible honeycombing or large voids after formwork removal. • Column or beam cracks wider than 0.3mm. • Delamination or scaling of the surface. • Steel bars visible through the concrete cover.",
      },
    ],
  },
  {
    id: 'bp-2',
    title: 'Reading Structural Plans',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1590953572091-1b8451be4a09?auto=format&fit=crop&q=80&w=800',
    excerpt:
      'A beginner-friendly guide to decoding the lines, symbols, and abbreviations used by engineers on structural drawings.',
    readTime: '8 min read',
    tags: ['Plans', 'Blueprints', 'Symbols'],
    body: [
      {
        heading: 'Understanding the Title Block',
        content:
          "Every structural plan has a title block in the lower-right corner containing: project name, owner, location, drawing number, scale, revision history, and the name + PRC license number of the engineer of record. Verify that the seal is signed and not just rubber-stamped — unsigned plans are invalid.",
      },
      {
        heading: 'Common Abbreviations',
        content:
          "B = Beam, C = Column, S = Slab, F = Footing, W = Wall. Rebar: 16mm⌀ = 16 millimeter diameter deformed bar. '@200' means spaced 200mm apart. 'BOT' = bottom of slab/beam, 'TOP' = top steel. 'CL' = centerline. 'TYP' = typical (applies everywhere unless noted). 'N.T.S' = not to scale.",
      },
      {
        heading: 'Reading Beam Schedules',
        content:
          "A beam schedule table lists the label (B-1, B-2), cross-section dimensions (width × depth), top steel, bottom steel, and stirrup spacing. Example: B-1 250×500 with 3-20mm TOP, 2-20mm BOT, 10mm stirrups @ 75-150-75 means: 3 bars at top, 2 bars at bottom, stirrups are 10mm dia. spaced 75mm at beam ends and 150mm at midspan.",
      },
      {
        heading: 'Foundation Plan vs. Framing Plan',
        content:
          "A Foundation Plan shows the layout of footings, grade beams, and piles below ground. A Floor Framing Plan shows beams and slabs at a specific floor level. Make sure both plans are coordinated — column grid lines must match between the two.",
      },
      {
        heading: 'What to Verify Before Construction Starts',
        content:
          "✓ Do column sizes on plans match what's being built? ✓ Are footing depths as indicated? ✓ Is rebar spacing consistent with the schedule? ✓ Are beam lines continuous without gaps in your foundation plan? ✓ Do the plans bear a fresh engineer signature and PRC stamp?",
      },
    ],
  },
  {
    id: 'bp-3',
    title: 'Soil Testing: Why It Matters',
    category: 'Site Preparation',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800',
    excerpt:
      'Why skipping the soil bearing capacity test is the biggest mistake you can make before building a multi-story home.',
    readTime: '5 min read',
    tags: ['Soil', 'Testing', 'Geotechnical'],
    body: [
      {
        heading: 'What is Soil Bearing Capacity?',
        content:
          "Soil bearing capacity (qa) is the maximum load per unit area that the soil can support without shear failure or excessive settlement. A soft clay soil may have qa = 50 kPa, while compact gravel may have qa = 300 kPa. Footings are sized based on these values — underestimating leads to settlement cracks.",
      },
      {
        heading: 'Types of Soil Tests',
        content:
          "• Standard Penetration Test (SPT): Measures blows to drive a sampler 300mm into soil. N-value > 30 = dense. N < 10 = loose/soft. • Plate Load Test: A plate is loaded incrementally at the actual footing depth to measure settlement. • Soil Boring: Extracts soil samples at various depths to identify layers and groundwater table.",
      },
      {
        heading: 'Philippine Soil Types to Watch For',
        content:
          "Many coastal and low-lying areas in the Philippines have soft marine clay or liquefiable loose sand. Reclaimed land in Metro Manila, Cebu, and Davao often has fill soils with unknown compaction history. Clark, Laguna, and parts of Cavite have expansive volcanic soils that swell when wet.",
      },
      {
        heading: 'Cost vs. Risk',
        content:
          "A complete geotechnical report for a 2-storey house costs PHP 15,000–50,000. A single column that settles unevenly can cause cracks costing PHP 200,000–1,000,000 to repair — or worse, require demolition. Insist on a minimum of one soil boring at the building centroid to 1.5× the expected pressure bulb depth.",
      },
    ],
  },
  {
    id: 'bp-4',
    title: 'Understanding Setback Rules',
    category: 'Legal & Zoning',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    excerpt:
      'Know the required distances between your building and property lines to avoid legal issues, demolition orders, and penalties.',
    readTime: '4 min read',
    tags: ['Setbacks', 'Legal', 'Building Code'],
    body: [
      {
        heading: 'What is a Setback?',
        content:
          "A setback is the minimum distance required between a structure and a property boundary, road right-of-way, or easement. Setbacks are mandated by the National Building Code (PD 1096) and the local zoning ordinance of your municipality. Both must be complied with — the more restrictive prevails.",
      },
      {
        heading: 'Typical Setback Requirements (PD 1096)',
        content:
          "For residential lots: Front setback = 3m from road right-of-way. Side setback = 2m from property line for lots > 150 sqm. Rear setback = 2m minimum. For medium-rise (5 floors+): Front = 6m, sides = 5m each, rear = 5m. Corner lots have two front setbacks — both road sides.",
      },
      {
        heading: 'Easements Along Waterways',
        content:
          "Waterway easements under RA 1273 (as amended) require a minimum setback of 3m from the bank of esteros and small rivers, and up to 20m from large rivers. Building within easements is illegal and subject to demolition orders from DENR regardless of a building permit issued.",
      },
      {
        heading: 'How to Verify Your Setbacks',
        content:
          "1. Get a Certified True Copy of your Transfer Certificate of Title (TCT). 2. Commission a licensed geodetic engineer to conduct a Relocation Survey to re-establish your boundary monuments. 3. Request the Zoning Certification from your municipality's Planning Office. 4. Submit a Site Development Plan showing proposed structure vs. property lines to the OBO.",
      },
    ],
  },
];
