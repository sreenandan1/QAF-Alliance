import { assetUrl } from '../utils/asset.js'

// =============================================================================
// QAF ALLIANCE — OFFICIAL WEBSITE CONTENT & BUSINESS PROFILE
// Tagline: Assurance • Innovation • Sustainability
// Motto: Empowering Businesses Through Quality, Expertise & Sustainable Solutions
// Location: United Arab Emirates
// =============================================================================

export const SHOW_SAMPLE_TAGS = false

export const site = {
  name: 'QAF Alliance',
  shortName: 'QAF Alliance',
  tagline: 'Assurance • Innovation • Sustainability',
  subtitle: 'Empowering Businesses Through Quality, Expertise & Sustainable Solutions',
  subHeading: 'UAE-Based Professional Consultancy & Business Solutions',
  whatsapp: '971500000000', // Business contact number – to be confirmed
  whatsappDisplay: '+971 (Contact To Be Confirmed)',
  email: 'info@qafalliance.com', // Official business email – to be confirmed
  phone: '+971 50 000 0000', // Business contact number – to be confirmed
  location: 'United Arab Emirates',
  country: 'United Arab Emirates',
  linkedin: 'https://www.linkedin.com/company/qaf-alliance/',
  instagram: 'https://www.instagram.com/qafalliance/',
  formEndpoint: ''
}

export const nav = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Industries', '#industries'],
  ['Training', '#training'],
  ['Case Studies', '#projects'],
  ['Credentials', '#credentials'],
  ['Team', '#team'],
  ['Insights', '#insights'],
  ['Contact', '#contact']
]

// -----------------------------------------------------------------------------
// 1. ABOUT US
// -----------------------------------------------------------------------------
export const about = {
  headline: 'Committed to helping businesses achieve excellence through quality assurance, food safety, sustainability, training and operational improvement.',
  lead: 'QAF Alliance is a UAE-based professional consultancy and business solutions company committed to helping businesses achieve excellence through quality assurance, food safety, sustainability, training and operational improvement.',
  paragraphs: [
    'We bring together industry knowledge, technical expertise and practical solutions to support organisations in strengthening their management systems, ensuring regulatory compliance, improving operational performance and building sustainable business practices.',
    'Our approach combines technical knowledge with real-world industry experience, enabling us to deliver practical, cost-effective and value-driven solutions tailored to our clients\' needs.',
    'Whether supporting food manufacturers, hospitality establishments, catering operations or emerging businesses, we aim to be a trusted partner in their journey towards excellence.'
  ],
  vision: 'To become a trusted regional partner in quality assurance, food safety, sustainability and business excellence, recognized for delivering innovative and practical solutions.',
  mission: 'To empower businesses through professional expertise, continuous improvement, technical training and sustainable solutions that enhance performance, compliance and customer confidence.',
  coreValues: [
    {
      num: '01',
      title: 'Quality',
      desc: 'Maintaining the highest standards of professionalism and service delivery across every operational engagement.'
    },
    {
      num: '02',
      title: 'Integrity',
      desc: 'Building relationships through transparency, trust and accountability at every stage of collaboration.'
    },
    {
      num: '03',
      title: 'Innovation',
      desc: 'Embracing new technologies, digital audit tools, and practical solutions tailored to modern challenges.'
    },
    {
      num: '04',
      title: 'Excellence',
      desc: 'Promoting continuous improvement, rigorous root cause resolution, and zero compromise in everything we do.'
    },
    {
      num: '05',
      title: 'Sustainability',
      desc: 'Supporting responsible business practices, plastic reduction, food waste diversion, and environmental stewardship.'
    },
    {
      num: '06',
      title: 'Collaboration',
      desc: 'Creating long-term partnerships for mutual success, client empowerment, and enduring institutional strength.'
    }
  ]
}

export const pillars = [
  {
    num: '01',
    title: 'Assurance',
    subtitle: 'Management Systems & Regulatory Compliance',
    text: 'Strengthening management systems, implementing HACCP/ISO frameworks, and ensuring total audit readiness to protect brand equity and ensure regulatory compliance.',
    image: assetUrl('images/service-safety.jpg'),
    fallback: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    tags: ['HACCP Protocol', 'ISO 22000 / FSMS', 'Audit Defense', 'Regulatory Compliance']
  },
  {
    num: '02',
    title: 'Innovation',
    subtitle: 'Modern Technologies & Practical Solutions',
    text: 'Embracing technical knowledge, real-world industry experience, digital audit solutions, and pragmatic problem-solving to improve operational performance.',
    image: assetUrl('images/service-rd.jpg'),
    fallback: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    tags: ['Operational Excellence', 'Process Improvement', 'Digital Audits', 'Continuous Improvement']
  },
  {
    num: '03',
    title: 'Sustainability',
    subtitle: 'Responsible Business & Environmental Stewardship',
    text: 'Supporting organisations in adopting responsible environmental practices, plastic elimination, food waste reduction, and sustainable operational models.',
    image: assetUrl('images/service-sustainability.jpg'),
    fallback: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
    tags: ['Plastic Reduction', 'Food Waste Diversion', 'Resource Efficiency', 'Environmental Stewardship']
  }
]

// -----------------------------------------------------------------------------
// 2. OUR SERVICES (A - F)
// -----------------------------------------------------------------------------
export const services = [
  {
    id: 'food-industry-consultancy',
    letter: 'A',
    icon: 'shield',
    tag: 'Technical & Regulatory Support',
    title: 'Food Industry Consultancy',
    summary: 'Comprehensive technical and regulatory support for food manufacturers, processors, catering companies and food service establishments.',
    points: [
      'HACCP development, implementation and verification',
      'Food Safety Management Systems (FSMS)',
      'ISO 22000 implementation and consultancy',
      'BRCGS Food Safety implementation and gap assessments',
      'GMP and GHP assessments',
      'Food safety risk assessments',
      'Regulatory compliance and food product registration support',
      'Food facility layout and hygienic design reviews',
      'Supplier evaluation and approval programmes',
      'Food safety internal audits and gap assessments',
      'Corrective and Preventive Action (CAPA) development',
      'Food product development and technical support',
      'Food labelling and nutritional information review'
    ],
    for: 'Food manufacturers, processors, catering companies & food service establishments',
    image: assetUrl('images/service-safety.jpg'),
    fallback: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    stat: '100%',
    statLabel: 'Regulatory & Compliance Focus'
  },
  {
    id: 'qa-operational-excellence',
    letter: 'B',
    icon: 'checkCircle',
    tag: 'Systems & Performance Improvement',
    title: 'Quality Assurance & Operational Excellence',
    summary: 'Helping businesses strengthen their quality systems and improve operational performance through proven methodologies and rigorous standards.',
    points: [
      'Quality management system development',
      'ISO 9001 implementation support',
      'Quality assurance and quality control system development',
      'Internal audits and supplier audits',
      'Mystery audits and operational assessments',
      'Standard Operating Procedures (SOPs)',
      'Process improvement and performance monitoring',
      'Root Cause Analysis (RCA)',
      'Corrective Action and Preventive Action (CAPA)',
      'Quality performance indicators and reporting systems',
      'Customer experience and service quality assessments'
    ],
    for: 'Enterprises seeking operational excellence, consistent quality & SOP compliance',
    image: assetUrl('images/service-rd.jpg'),
    fallback: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80',
    stat: '15+ Yrs',
    statLabel: 'Technical & Operational Heritage'
  },
  {
    id: 'food-safety-training',
    letter: 'C',
    icon: 'cap',
    tag: 'Competency Development',
    title: 'Food Safety & Professional Training',
    summary: 'Developing competent professionals through practical, industry-focused training programmes designed to instill lasting workplace habits.',
    points: [
      'Basic Food Safety Training',
      'HACCP Awareness and Implementation',
      'Advanced Food Safety Training',
      'Food Safety for Food Handlers and Supervisors',
      'GMP and GHP Training',
      'Food Safety Internal Auditor Training',
      'Food Safety Culture Awareness',
      'Allergen Management',
      'Personal Hygiene and Sanitation',
      'Quality Management Awareness',
      'ISO Management Systems Awareness',
      'Sustainability and Environmental Awareness',
      'Technical and Professional Development Programmes'
    ],
    for: 'Supervisors, food handlers, corporate QA leads & kitchen brigades',
    image: assetUrl('images/service-training.jpg'),
    fallback: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    stat: 'Tailored',
    statLabel: 'On-Site Corporate & Workshop Formats'
  },
  {
    id: 'environmental-sustainability',
    letter: 'D',
    icon: 'leaf',
    tag: 'Environmental Stewardship',
    title: 'Environmental & Sustainability Consultancy',
    summary: 'Supporting organisations in adopting responsible environmental practices, conserving resources, and improving sustainability performance.',
    points: [
      'Environmental management consultancy',
      'Sustainability assessments and gap analysis',
      'Environmental awareness programmes',
      'Waste management and waste reduction strategies',
      'Food waste reduction and management',
      'Plastic reduction initiatives',
      'Carbon footprint monitoring and reporting support',
      'Energy and water conservation programmes',
      'Recycling and resource efficiency initiatives',
      'Sustainable tourism and green hospitality support',
      'Environmental studies and research'
    ],
    for: 'Hotels, resorts, commercial kitchens & sustainability-focused organisations',
    image: assetUrl('images/service-sustainability.jpg'),
    fallback: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
    stat: '112,000+',
    statLabel: 'PET Bottles Diverted (Experience Track Record)'
  },
  {
    id: 'auditing-assessments',
    letter: 'E',
    icon: 'clipboardCheck',
    tag: 'Independent Verification',
    title: 'Auditing & Assessment Services',
    summary: 'Independent assessments designed to identify operational gaps, improve compliance, enhance service delivery, and track digital corrective action.',
    points: [
      'Food safety and hygiene audits',
      'Supplier and vendor audits',
      'Hospitality operational audits',
      'Mystery guest and mystery shopping assessments',
      'Quality and service excellence audits',
      'GMP and BRCGS gap assessments',
      'Internal compliance audits',
      'Multi-location audit programmes',
      'Digital audit reporting and corrective action tracking solutions'
    ],
    for: 'Multi-outlet groups, luxury hospitality, commissary kitchens & suppliers',
    image: assetUrl('images/service-esg.jpg'),
    fallback: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    stat: 'Digital',
    statLabel: 'Real-Time Reporting & CAPA Tracking'
  },
  {
    id: 'general-trading',
    letter: 'F',
    icon: 'packageCheck',
    tag: 'Commercial Facilitation',
    title: 'General Trading',
    summary: 'Facilitating business requirements through general trading activities, with a focus on supporting food industry and business operations.',
    points: [
      'Food industry equipment and specialized consumables facilitation',
      'Quality assurance testing and hygiene supplies sourcing',
      'Specialized food ingredients and operational materials procurement',
      'Client-customized trading arrangements based on applicable licensing activities',
      'Supply chain partner evaluation and quality verification',
      'Turnkey procurement support for hospitality & manufacturing setup'
    ],
    for: 'Food processors, commercial kitchens, hospitality & retail partners',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    fallback: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    stat: 'Tailored',
    statLabel: 'Client-Centric Sourcing Solutions'
  }
]

// -----------------------------------------------------------------------------
// 3. INDUSTRIES WE SERVE
// -----------------------------------------------------------------------------
export const industries = [
  {
    id: 'food-mfg',
    name: 'Food Manufacturing & Processing',
    badge: 'Industrial Production',
    text: 'Tailored technical support, HACCP plan development, and BRCGS readiness for industrial manufacturing, processing, and packaging facilities.',
    items: [
      'Chocolate and confectionery',
      'Bakery and pastry manufacturing',
      'Dairy and dairy products',
      'Meat and poultry processing',
      'Ready-to-eat food production',
      'Food packaging and processing facilities'
    ],
    stat: 'Industrial Focus',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'hospitality-tourism',
    name: 'Hospitality & Tourism',
    badge: 'Hotels & Dining',
    text: 'Comprehensive food safety management, LQA luxury standards, mystery guest audits, and sustainable hospitality practices across premier destinations.',
    items: [
      'Hotels and resorts',
      'Restaurants and cafés',
      'Catering establishments',
      'Cruise and floating hospitality operations',
      'Leisure and tourism facilities'
    ],
    stat: 'Luxury Standard',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'food-service-catering',
    name: 'Food Service & Catering',
    badge: 'High-Volume Kitchens',
    text: 'Strengthening hygiene barriers, temperature controls, food safety culture, and volume batch consistency across large-scale catering operations.',
    items: [
      'Central kitchens',
      'Institutional catering',
      'Corporate catering',
      'Cloud kitchens',
      'Food service operators'
    ],
    stat: 'Scale & Hygiene',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'retail-distribution',
    name: 'Retail & Distribution',
    badge: 'Cold Chain & Logistics',
    text: 'Ensuring cold-chain integrity, warehouse hygiene standards, shelf-life verification, supplier approvals, and GCC distribution compliance.',
    items: [
      'Supermarkets and hypermarkets',
      'Food retailers',
      'Food warehouses',
      'Distribution and logistics companies'
    ],
    stat: 'Supply Chain',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'other-industries',
    name: 'Other Industries',
    badge: 'Corporate & Institutional',
    text: 'Customized quality management systems, sustainability gap assessments, environmental awareness programmes, and corporate advisory.',
    items: [
      'Corporate organisations',
      'Educational institutions',
      'Environmental and sustainability-focused businesses',
      'Professional service organisations'
    ],
    stat: 'Institutional',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
  }
]

// -----------------------------------------------------------------------------
// 4. TRAINING PROGRAMMES (4 DOMAINS)
// -----------------------------------------------------------------------------
export const trainingDomains = [
  {
    id: 'food-safety-hygiene',
    name: 'Food Safety & Hygiene',
    desc: 'Foundational and advanced hygiene disciplines for food handlers, chefs, supervisors, and operations leads.',
    badge: 'Core Competency',
    courses: [
      {
        title: 'Basic Food Safety',
        target: 'Food Handlers & Culinary Staff',
        duration: '1 Day Intensive',
        highlights: 'Hygiene principles, personal hygiene standards, cross-contamination prevention, temperature control'
      },
      {
        title: 'HACCP Principles and Implementation',
        target: 'Supervisors & Quality Controllers',
        duration: '2 Days Masterclass',
        highlights: '7 Codex HACCP principles, 12-step logical approach, hazard analysis, critical control points (CCPs)'
      },
      {
        title: 'Advanced Food Safety',
        target: 'QA Managers & Executive Chefs',
        duration: '3 Days Comprehensive',
        highlights: 'Microbiological hazards, food safety legislation, risk assessment, verification protocols'
      },
      {
        title: 'Food Safety for Supervisors and Managers',
        target: 'Department Heads & Shift Supervisors',
        duration: '2 Days Workshop',
        highlights: 'Supervisory monitoring, staff accountability, corrective action enforcement, audit preparedness'
      },
      {
        title: 'Good Manufacturing Practices (GMP)',
        target: 'Plant Operators & Floor Leads',
        duration: '1-2 Days Course',
        highlights: 'Facility hygiene, equipment sanitation, pest control, chemical handling, batch integrity'
      },
      {
        title: 'Good Hygiene Practices (GHP)',
        target: 'Service & Kitchen Brigades',
        duration: '1 Day Workshop',
        highlights: 'Sanitary procedures, personal grooming, surface contact disinfection, waste segregation'
      },
      {
        title: 'Personal Hygiene and Sanitation',
        target: 'All Food Contact Personnel',
        duration: 'Half-Day Intensive',
        highlights: 'Handwashing science, protective clothing, illness reporting protocols, daily sanitisation'
      },
      {
        title: 'Food Allergen Management',
        target: 'Culinary, Service & Packing Teams',
        duration: '1 Day Specialized',
        highlights: 'Major allergens identification, cross-contact prevention, recipe declaration, menu transparency'
      },
      {
        title: 'Food Safety Culture',
        target: 'Corporate Leadership & Teams',
        duration: '1 Day Interactive',
        highlights: 'Embedding shared safety values, non-punitive reporting, team engagement, long-term habit building'
      },
      {
        title: 'Cleaning and Disinfection',
        target: 'Sanitation Teams & Stewards',
        duration: '1 Day Practical',
        highlights: 'Chemical dilution dynamics, contact times, CIP / COP protocols, microbiological swabbing'
      }
    ]
  },
  {
    id: 'quality-management-systems',
    name: 'Quality & Management Systems',
    desc: 'Internationally recognized frameworks, ISO standards awareness, root cause analysis, and internal auditing.',
    badge: 'ISO & Compliance',
    courses: [
      {
        title: 'ISO 22000:2018 Awareness',
        target: 'FSMS Team Leaders & Managers',
        duration: '2 Days Overview',
        highlights: 'High-level structure (HLS), PDCA cycle, PRPs, OPRPs vs CCPs, system documentation'
      },
      {
        title: 'ISO 9001:2015 Awareness',
        target: 'Quality Leaders & Department Heads',
        duration: '2 Days Overview',
        highlights: 'Quality management principles, process approach, risk-based thinking, continuous improvement'
      },
      {
        title: 'ISO 45001:2018 Awareness',
        target: 'EHS Coordinators & Managers',
        duration: '2 Days Overview',
        highlights: 'Occupational health and safety management, hazard identification, worker consultation, compliance'
      },
      {
        title: 'Internal Auditor Training',
        target: 'Internal Audit Teams & Leads',
        duration: '2-3 Days Certified',
        highlights: 'ISO 19011 auditing principles, audit planning, evidence collection, non-conformance reporting'
      },
      {
        title: 'Supplier Quality Management',
        target: 'Procurement & Quality Officers',
        duration: '1-2 Days Workshop',
        highlights: 'Supplier qualification, COA verification, raw material risk categorization, supplier auditing'
      },
      {
        title: 'Root Cause Analysis and CAPA',
        target: 'Operations & QA Professionals',
        duration: '1-2 Days Intensive',
        highlights: '5-Whys, Fishbone (Ishikawa), corrective vs preventive action, recurrence elimination'
      },
      {
        title: 'Quality Assurance Fundamentals',
        target: 'Quality Control Inspectors',
        duration: '1 Day Course',
        highlights: 'QC vs QA distinction, sampling plans, inspection criteria, defect categorization and records'
      },
      {
        title: 'Risk Assessment and Management',
        target: 'Risk Teams & Facility Heads',
        duration: '2 Days Specialized',
        highlights: 'Risk matrix development, operational vulnerability analysis, risk mitigation strategies'
      }
    ]
  },
  {
    id: 'sustainability-environment',
    name: 'Sustainability & Environment',
    desc: 'Actionable environmental frameworks, plastic reduction strategies, food waste prevention, and circular practices.',
    badge: 'Green Practices',
    courses: [
      {
        title: 'Environmental Awareness',
        target: 'Cross-Departmental Staff',
        duration: '1 Day Workshop',
        highlights: 'Environmental impacts, regulatory obligations, climate stewardship, daily conservation habits'
      },
      {
        title: 'Sustainable Business Practices',
        target: 'Operations & Sustainability Leads',
        duration: '2 Days Executive',
        highlights: 'Circularity principles, ESG fundamentals, sustainable supply chains, stakeholder reporting'
      },
      {
        title: 'Waste Management Strategies',
        target: 'Facility & Logistics Managers',
        duration: '1 Day Course',
        highlights: 'Waste hierarchy, segregation systems, recycling logistics, hazardous waste handling'
      },
      {
        title: 'Food Waste Reduction',
        target: 'Executive Chefs & F&B Teams',
        duration: '1 Day Practical',
        highlights: 'Kitchen waste audits, inventory FIFO dynamics, portion engineering, circular diversion'
      },
      {
        title: 'Carbon Footprint Awareness',
        target: 'Corporate Teams & Managers',
        duration: '1 Day Overview',
        highlights: 'Scope 1, 2, and 3 emissions basics, carbon accounting concepts, emission reduction pathways'
      },
      {
        title: 'Energy and Water Conservation',
        target: 'Engineering & Kitchen Teams',
        duration: '1 Day Practical',
        highlights: 'Utility baseline metering, equipment efficiency, low-flow retrofits, peak load management'
      },
      {
        title: 'Sustainable Hospitality Practices',
        target: 'Hotel & Resort Management',
        duration: '2 Days Specialized',
        highlights: 'Green hospitality benchmarks, eco-certifications, single-use plastic elimination, guest engagement'
      }
    ]
  },
  {
    id: 'technical-professional-development',
    name: 'Technical & Professional Development',
    desc: 'Empowering floor supervisors, operations managers, and leadership teams with practical supervisory skills.',
    badge: 'Leadership Skills',
    courses: [
      {
        title: 'Supervisory Skills',
        target: 'Team Leaders & Floor Supervisors',
        duration: '2 Days Interactive',
        highlights: 'Effective delegation, performance monitoring, conflict resolution, shift communication'
      },
      {
        title: 'Operational Excellence',
        target: 'Operations Directors & Managers',
        duration: '2 Days Masterclass',
        highlights: 'Lean manufacturing principles, standard operating procedures, bottleneck elimination, KPIs'
      },
      {
        title: 'Workplace Health and Safety Awareness',
        target: 'All Facility Personnel',
        duration: '1 Day Essential',
        highlights: 'Safe work practices, PPE compliance, emergency response, slips/trips/falls prevention'
      },
      {
        title: 'Professional Development',
        target: 'Emerging Professionals',
        duration: '1-2 Days Workshop',
        highlights: 'Effective reporting, technical documentation, professional presentation, career roadmap'
      },
      {
        title: 'Leadership and Team Effectiveness',
        target: 'Department Heads & Executives',
        duration: '2 Days Leadership',
        highlights: 'Vision alignment, fostering accountability, driving change management, team coaching'
      }
    ]
  }
]

export const trainingNote = 'Training can be customised and delivered through on-site corporate sessions, workshops and other suitable delivery formats, subject to applicable approvals and trainer qualifications.'

// Flattened courses for backwards compatibility
export const courses = trainingDomains.flatMap((d) =>
  d.courses.map((c) => ({
    title: c.title,
    length: c.duration,
    mode: 'On-Site Corporate / Workshop',
    level: c.target,
    domain: d.name,
    topics: c.highlights.split(', ').map((h) => h.trim())
  }))
)

// -----------------------------------------------------------------------------
// 5. PROJECTS & CASE STUDIES (EXPERIENCE-LED)
// -----------------------------------------------------------------------------
export const projects = [
  {
    id: 'cs-fsms',
    tone: 'a',
    sector: 'Hospitality',
    caseType: 'Experience-Led Case Study',
    title: 'Food Safety Management System Development',
    problem: 'Multiple food and beverage operations required a harmonized, robust Food Safety Management System to resolve operational gaps and meet stringent regulatory standards.',
    result: 'Developed and implemented comprehensive Food Safety Management Systems across operations, establishing daily monitoring protocols, staff calibration, and verifiable audit records.',
    areas: [
      'HACCP implementation',
      'Regulatory compliance',
      'Internal audits and verification',
      'Food safety training',
      'Operational monitoring and corrective actions'
    ],
    metric: 'Full FSMS',
    metricLabel: 'HACCP & Regulatory Compliance Implemented',
    image: assetUrl('images/service-safety.jpg'),
    fallback: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    timeline: 'Multi-Outlet Rollout'
  },
  {
    id: 'cs-plastic-reduction',
    tone: 'c',
    sector: 'Hospitality',
    caseType: 'Experience-Led Case Study',
    title: 'Sustainable Hospitality & Plastic Reduction',
    problem: 'A premier hospitality venue sought to curtail high operational volume of single-use plastics, divert food waste, and establish verified environmental stewardship.',
    result: 'Implementation of sustainability initiatives focused on reducing environmental impact and promoting responsible resource utilisation across hospitality operations.',
    areas: [
      'Elimination of more than 112,000 single-use PET bottles through in-house water filtration and bottling',
      'Food waste diversion and recycling initiatives',
      'Energy and water conservation programmes',
      'Sustainability reporting and certification support'
    ],
    metric: '112,000+',
    metricLabel: 'Single-Use PET Bottles Eliminated',
    image: assetUrl('images/service-sustainability.jpg'),
    fallback: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=80',
    timeline: 'Track Record Achievement'
  },
  {
    id: 'cs-brcgs-mfg',
    tone: 'b',
    sector: 'Chocolate and Food Manufacturing',
    caseType: 'Experience-Led Case Study',
    title: 'Food Manufacturing & BRCGS Readiness',
    problem: 'Food manufacturing operations required specialized technical assistance in elevating facility hygiene, supplier controls, and achieving readiness for international BRCGS food safety standards.',
    result: 'Provided structured technical support for manufacturing operations in strengthening food safety and quality systems, eliminating gap deficits, and implementing corrective action plans.',
    areas: [
      'HACCP plan development',
      'GMP and hygiene assessments',
      'Supplier approval and COA requirements',
      'Process risk assessments',
      'BRCGS gap assessments',
      'Corrective action implementation'
    ],
    metric: 'BRCGS',
    metricLabel: 'Gap Assessment & Audit Readiness Achieved',
    image: assetUrl('images/project-bakery.jpg'),
    fallback: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    timeline: 'Manufacturing Elevation'
  },
  {
    id: 'cs-mystery-audits',
    tone: 'a',
    sector: 'Hospitality',
    caseType: 'Experience-Led Case Study',
    title: 'Mystery Audits & Guest Experience',
    problem: 'Hospitality operators needed independent, objective operational assessments to identify service gaps, ensure SOP compliance, and elevate overall guest dining satisfaction.',
    result: 'Developed and coordinated structured quality and service assessments to identify operational gaps, streamline multi-location monitoring, and drive measurable service excellence.',
    areas: [
      'Mystery guest assessments',
      'Service quality evaluation',
      'Operational compliance',
      'Digital reporting',
      'Corrective action tracking',
      'Multi-location performance monitoring'
    ],
    metric: 'LQA Standards',
    metricLabel: 'Service Excellence & Mystery Audits',
    image: assetUrl('images/project-hotel.jpg'),
    fallback: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    timeline: 'Continuous Assessment'
  }
]

export const caseStudyNotice = 'The proposed portfolio examples are based on professional experience. Identified as experience-led case studies, not presented as QAF Alliance client engagements unless independently delivered under QAF Alliance.'

// -----------------------------------------------------------------------------
// 6. OUR TEAM
// -----------------------------------------------------------------------------
export const team = [
  {
    name: 'Nishad Ali K P',
    role: 'Founder / Managing Director',
    credentials: 'Food Science & Quality Management Professional',
    experience: '15+ Years Industry Experience',
    initials: 'NA',
    bio: 'A food science and quality management professional with over 15 years of experience across hospitality, catering and FMCG sectors. His professional experience combines technical expertise with hands-on operational management, regulatory compliance and sustainability programme implementation.',
    specialisations: [
      'Food Safety and Quality Assurance',
      'HACCP and Food Safety Management Systems',
      'ISO Management Systems',
      'BRCGS Food Safety',
      'Sustainability and Environmental Management',
      'Supplier Audits and Regulatory Compliance',
      'Operational Excellence and Continuous Improvement',
      'Food Safety Training and Professional Development'
    ],
    image: assetUrl('images/team-aisha.jpg'),
    fallback: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Technical Director',
    role: 'Technical Director – Auditing & Hospitality Excellence',
    credentials: 'LQA & Mystery Audit Specialist',
    experience: 'Senior Technical Lead',
    initials: 'TD',
    bio: 'A dedicated technical professional with experience in hospitality quality assessments, LQA standards, mystery guest audits and operational excellence across regional luxury hospitality venues.',
    specialisations: [
      'Hospitality quality assessments',
      'Mystery audit programmes',
      'Service excellence evaluations',
      'Audit methodology and reporting',
      'Multi-location assessment programmes'
    ],
    image: assetUrl('images/team-daniel.jpg'),
    fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
]

// -----------------------------------------------------------------------------
// 7. CERTIFICATIONS & PROFESSIONAL CREDENTIALS
// -----------------------------------------------------------------------------
export const credentials = [
  {
    title: 'M.Sc. Food Science and Nutrition',
    issuer: 'Academic Foundation',
    desc: 'Advanced postgraduate scientific qualification in food chemistry, human nutrition, food microbiology, and industrial processing technologies.'
  },
  {
    title: 'IRCA/CQI ISO 22000:2018 Lead Auditor',
    issuer: 'IRCA / CQI Certified',
    desc: 'Internationally recognized qualification for leading third-party and internal audits of Food Safety Management Systems (FSMS).'
  },
  {
    title: 'ISO 45001:2018 Lead Auditor',
    issuer: 'Occupational Health & Safety',
    desc: 'Certified competence in auditing occupational health and safety management systems to safeguard organizational personnel.'
  },
  {
    title: 'NEBOSH Qualification',
    issuer: 'NEBOSH UK',
    desc: 'Globally recognized health, safety, and environmental qualification validating robust hazard mitigation competencies.'
  },
  {
    title: 'Dubai Municipality Approved Food Safety Trainer',
    issuer: 'Dubai Municipality',
    desc: 'Officially accredited trainer authorized to deliver recognized food hygiene and safety training programmes in Dubai.'
  },
  {
    title: 'HABC Level 4 Food Safety in Food Manufacturing',
    issuer: 'Highfield Qualifications (UK)',
    desc: 'Advanced certification validating expert knowledge of food manufacturing safety architecture and management system oversight.'
  },
  {
    title: 'HABC Level 3 Food Safety Qualifications',
    issuer: 'Highfield Qualifications (UK)',
    desc: 'Supervisory qualification demonstrating mastery in operational hygiene controls, monitoring protocols, and team coaching.'
  },
  {
    title: 'HACCP and Food Safety Management System Expertise',
    issuer: 'Codex Alimentarius & Global Standards',
    desc: 'Deep specialized expertise in designing, validating, and auditing HACCP plans and FSMS across manufacturing and hospitality.'
  }
]

export const credentialsDisclaimer = 'Important: These are professional credentials of the relevant team members, not certifications held by QAF Alliance as an organisation. Organisational certifications and training accreditations will be displayed separately where applicable.'

export const standards = [
  { name: 'HACCP', text: 'Hazard Analysis and Critical Control Points systematic verification and food safety management.', code: 'Codex Alimentarius' },
  { name: 'ISO 22000:2018', text: 'International food safety management systems for end-to-end supply chains.', code: 'Global Standard' },
  { name: 'BRCGS Food Safety', text: 'GFSI-benchmarked premier certification scheme for food and packaging manufacturing.', code: 'GFSI Benchmarked' },
  { name: 'ISO 9001:2015', text: 'Quality management systems, standardized operating procedures, and continuous improvement.', code: 'Quality Systems' },
  { name: 'ISO 45001:2018', text: 'Occupational health and safety management systems protecting workforce well-being.', code: 'OH&S Standard' },
  { name: 'ISO 14001:2015', text: 'Environmental management systems and corporate resource efficiency frameworks.', code: 'Eco Management' },
  { name: 'Dubai Municipality Food Codes', text: 'Comprehensive regulatory compliance with Dubai Municipality and GCC municipal food codes.', code: 'UAE Regulatory' },
  { name: 'Saudi SFDA Standards', text: 'Technical alignment with Saudi Food and Drug Authority regulations and GCC product registration.', code: 'GCC Regulatory' }
]

// -----------------------------------------------------------------------------
// 8. CLIENTS & PARTNERSHIPS
// -----------------------------------------------------------------------------
export const clientsSection = {
  headline: 'Building Partnerships. Delivering Confidence.',
  lead: 'We believe successful partnerships are built on trust, technical expertise and consistent service delivery. We aim to support businesses of different sizes, from emerging food businesses to established manufacturing and hospitality organisations.',
  pillars: [
    { title: 'Client Company Engagements', desc: 'Working alongside food manufacturers, hospitality groups, and emerging brands.' },
    { title: 'Selected Project References', desc: 'Proven track record in FSMS implementation, plastic reduction, and BRCGS readiness.' },
    { title: 'Industry Partnerships', desc: 'Collaborating across regional supply chain stakeholders and quality networks.' },
    { title: 'Professional Affiliations', desc: 'Engaged with leading international and local food safety and auditing bodies.' }
  ],
  notice: 'Client names, logos and testimonials will be added after obtaining the necessary approvals.'
}

export const clients = [
  'Food Manufacturing Operations',
  'Luxury Hotels & Resorts',
  'Commercial Catering Facilities',
  'Central & Cloud Kitchens',
  'Supermarkets & Retail Networks',
  'Confectionery & Bakery Plants',
  'Food Logistics & Distribution Warehouses',
  'Emerging Food Brands'
]

// -----------------------------------------------------------------------------
// 9. INSIGHTS & KNOWLEDGE CENTRE
// -----------------------------------------------------------------------------
export const insightsCategories = [
  'All',
  'Food Safety & Compliance',
  'Quality & Operational Excellence',
  'Sustainability',
  'Industry Updates'
]

export const insights = [
  {
    category: 'Food Safety & Compliance',
    tag: 'HACCP Protocol',
    date: 'Regulatory Advisory',
    title: 'Understanding HACCP in Food Manufacturing',
    text: 'A practical roadmap to the 7 Codex principles and 12-step systematic execution, helping production plants identify critical control points and prevent contamination.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Food Safety & Compliance',
    tag: 'BRCGS Audit Prep',
    date: 'Audit Excellence',
    title: 'Common BRCGS Audit Non-Conformities & Prevention',
    text: 'Analysis of frequent audit findings during BRCGS food safety assessments—from pest control documentation to equipment hygienic design—and how to mitigate them.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Food Safety & Compliance',
    tag: 'Supply Chain QA',
    date: 'Quality Control',
    title: 'The Critical Importance of Supplier COAs (Certificates of Analysis)',
    text: 'Why accepting raw ingredients without rigorous Certificate of Analysis verification exposes food facilities to severe allergen, chemical, and microbiological liabilities.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Food Safety & Compliance',
    tag: 'Confectionery',
    date: 'Technical Guidance',
    title: 'Food Safety Requirements for Chocolate Manufacturing',
    text: 'Managing Salmonella risks in low-moisture environments, cocoa butter crystallization parameters, and strict allergen segregation in premium chocolate plants.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Food Safety & Compliance',
    tag: 'GCC Regulations',
    date: 'Regulatory Affairs',
    title: 'Food Labelling and Regulatory Compliance in the GCC',
    text: 'Navigating mandatory bilingual Arabic/English labelling, nutritional panel declarations, shelf-life legislation, and food additive compliance across GCC markets.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Quality & Operational Excellence',
    tag: 'Management Systems',
    date: 'Operational Strategy',
    title: 'Building an Effective Quality Management System (QMS)',
    text: 'How to transition from reactive firefighting to a proactive, process-driven QMS that reduces operational errors, enhances batch consistency, and builds customer trust.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Quality & Operational Excellence',
    tag: 'CAPA & RCA',
    date: 'Root Cause Analysis',
    title: 'Root Cause Analysis (RCA) and Effective CAPA Implementation',
    text: 'Applying 5-Whys and Fishbone methodologies to uncover root vulnerabilities and engineer preventive actions that permanently eliminate recurring defects.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Quality & Operational Excellence',
    tag: 'Internal Audits',
    date: 'Verification',
    title: 'The Strategic Importance of Regular Internal Audits',
    text: 'Internal audits are not mere compliance checkboxes—they are early warning detection systems that uncover cost leakages and protect organizations before official inspections.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Quality & Operational Excellence',
    tag: 'Company Culture',
    date: 'People & Leadership',
    title: 'Developing a Strong Food Safety Culture on the Floor',
    text: 'Moving beyond written procedures: how leadership engagement, recognition, and continuous coaching turn hygiene protocols into shared daily habits across all shifts.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Sustainability',
    tag: 'Food Waste',
    date: 'Resource Stewardship',
    title: 'Reducing Food Waste in Hospitality: Practical Interventions',
    text: 'Actionable techniques for luxury hotels and catering kitchens: station waste measurement, FIFO inventory dynamics, yield maximization, and circular redistribution links.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Sustainability',
    tag: 'Plastic Reduction',
    date: 'Circular Models',
    title: 'Eliminating Single-Use Plastics: The In-House Bottling Model',
    text: 'How hospitality venues can eliminate over 100,000 single-use PET bottles through in-house glass filtration and bottling, cutting costs and lowering environmental footprint.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Sustainability',
    tag: 'Carbon Tracking',
    date: 'ESG Accounting',
    title: 'Carbon Footprint Monitoring in Food Facilities',
    text: 'Understanding Scope 1, Scope 2, and supply chain emissions, baseline utility data collection, and practical decarbonisation roadmaps for food processors.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Sustainability',
    tag: 'Resource Efficiency',
    date: 'GCC Practices',
    title: 'Practical Sustainability Initiatives for GCC Food Businesses',
    text: 'Cost-effective energy and water conservation tactics, smart cooling systems, packaging redesign, and resource recovery suited to regional operating climates.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Industry Updates',
    tag: 'UAE Food Safety',
    date: 'Regulatory Mandate',
    title: 'UAE Food Safety Regulatory Updates & Municipality Directives',
    text: 'Key updates on local municipality inspection criteria, digital reporting systems, food transport permits, and health card compliance across the UAE.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Industry Updates',
    tag: 'Saudi Arabia SFDA',
    date: 'Regional Trade',
    title: 'Saudi Arabia SFDA Compliance & Import Requirements',
    text: 'Essential guidelines for exporting food products into Saudi Arabia: SFDA electronic clearance, halal certification, shelf-life standards, and packaging requirements.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Industry Updates',
    tag: 'Product Registration',
    date: 'GCC Market Access',
    title: 'GCC Food Product Registration: Step-by-Step Guidance',
    text: 'A structured roadmap to navigating product registration platforms (such as Montaji and ZAD), ingredient clearances, laboratory test reports, and compliance approvals.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Industry Updates',
    tag: 'Standards Revisions',
    date: 'Global Benchmarks',
    title: 'ISO 22000 and BRCGS Standard Updates',
    text: 'Crucial shifts in global benchmark schemes, heightened emphasis on food defense, food fraud vulnerability assessments, and digital traceability requirements.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80'
  }
]

// -----------------------------------------------------------------------------
// 10. STATS & BENCHMARKS
// -----------------------------------------------------------------------------
export const stats = [
  { to: 15, suffix: '+ Yrs', label: 'Industry & Advisory Expertise' },
  { to: 112000, suffix: '+', label: 'Single-Use PET Bottles Eliminated' },
  { to: 6, suffix: ' Core', label: 'Comprehensive Service Disciplines' },
  { to: 100, suffix: '%', label: 'Client-Driven & Practical Solutions' }
]

// -----------------------------------------------------------------------------
// 11. TESTIMONIALS (SAMPLE PLACEHOLDERS SUBJECT TO CLIENT APPROVAL)
// -----------------------------------------------------------------------------
export const testimonials = [
  {
    quote: 'QAF Alliance brings a rare combination of technical mastery and hands-on operational empathy. Their guidance on HACCP and food safety management elevated our entire operation.',
    name: 'Hospitality Partner',
    role: 'Operations Leadership, UAE Hospitality Group',
    badge: 'Industry Partnership'
  },
  {
    quote: 'Their practical approach to sustainability and plastic reduction proved that responsible environmental practices can be implemented smoothly while delivering clear operational benefits.',
    name: 'F&B Operations Director',
    role: 'Luxury Resort & Dining Operator',
    badge: 'Sustainability Collaboration'
  },
  {
    quote: 'The depth of technical knowledge in BRCGS readiness, supplier COA evaluations, and factory floor GMPs made an immediate difference in our audit preparedness.',
    name: 'Manufacturing Quality Head',
    role: 'Food Manufacturing Facility, GCC',
    badge: 'Technical Advisory'
  }
]
