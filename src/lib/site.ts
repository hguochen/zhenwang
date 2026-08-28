/**
 * Single source of truth for company details and product facts.
 *
 * Everything here is transcribed from the two source brochures supplied by
 * ZhenWang — `Mineral fiber pannel_en_zhenwang.pdf` (product) and
 * `生产商简介.pdf` (manufacturer profile). Nothing in this file is invented; if a
 * figure is not in the brochures it does not belong here.
 */

export const site = {
  name: 'ZhenWang Construction',
  legalName: 'ZHEN WANG CONSTRUCTION PTE LTD',
  product: 'Rock Mineral Panel',
  productShort: 'RMP',
  brand: 'MinewayTech',
  tagline: 'Redefining Panels with the Power of Stone',
  description:
    'ZHEN WANG CONSTRUCTION PTE LTD is the Singapore general distributor for MinewayTech Rock Mineral Panel — a non-combustible A2-grade mineral fiber inorganic density panel with E0 formaldehyde emission and excellent water resistance.',
  url: 'https://zhenwang-rmp.example.com',
  role: 'General Distributor',
  phone: '+65 9457 8218',
  phoneHref: '+6594578218',
  email: 'zhenwang8@hotmail.com',
  address: {
    line1: '2 Tao Ching Road, #16-01 Lake Life',
    line2: 'Singapore 618721',
    full: '2 TAO CHING ROAD, #16-01 LAKE LIFE SINGAPORE 618721',
  },
  manufacturer: {
    name: 'Jiaocheng Yiwang Ferroalloy Co., Ltd.',
    founded: 1988,
    location: 'Shanxi, China',
  },
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/technology', label: 'Technology' },
  { href: '/applications', label: 'Applications' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

/** The three headline claims from the brochure cover. */
export const headlineClaims = [
  'Non-combustible Material',
  'E0 Grade Formaldehyde Emission',
  'Excellent Water Resistance',
] as const;

/** "10 Core Advantages — Breaking Technological Monopoly" (brochure p.3). */
export const coreAdvantages = [
  {
    title: 'A2 fire resilience',
    body: 'Classified A2 to GB/T 8624-2012 — non-combustible, with no fire hazard from the sawdust.',
    icon: 'flame',
  },
  {
    title: 'Extreme eco-friendliness',
    body: 'Grade E0 formaldehyde emission (ENF grade in China), with TVOC at one sixth of the national limit.',
    icon: 'leaf',
  },
  {
    title: 'Waterproof & moisture-proof',
    body: '0.5% water absorption and expansion rate, so the panel does not swell in wet service.',
    icon: 'droplet',
  },
  {
    title: 'Shape stability',
    body: 'Warp resistant and dimensionally stable — no deformation and no cracking over time.',
    icon: 'square',
  },
  {
    title: 'Mould & insect resistance',
    body: 'Inorganic through and through, so it resists mould, insects and corrosion.',
    icon: 'shield',
  },
  {
    title: 'Low radionuclides',
    body: '70% below the regulatory limits for radionuclides in building materials.',
    icon: 'atom',
  },
  {
    title: 'Noise reduction',
    body: 'The fibre structure works as an absorption system, cutting transmitted noise.',
    icon: 'wave',
  },
  {
    title: 'Strong screw holding',
    body: 'Screw holding capability over 1200N — fixings hold like they would in dense timber.',
    icon: 'screw',
  },
  {
    title: 'Self-owned patents',
    body: 'Over 10 core patents behind the process, breaking the long-standing technology monopoly.',
    icon: 'patent',
  },
  {
    title: 'Customisable dimensions',
    body: 'Panels made to order in thickness and format, from a 1220 × 2440 mm base sheet.',
    icon: 'ruler',
  },
] as const;

/** "Achievements of Enterprise" (brochure p.3). */
export const enterpriseFigures = [
  {
    value: 'TOP 1',
    label: "Fully self-developed product, China's first production line",
  },
  {
    value: '4.0',
    label: 'Intelligent Industry 4.0 model: higher efficiency, lower costs',
  },
  {
    value: '5×',
    label: 'Lower TVOC and formaldehyde emissions vs. industry peers',
  },
  {
    value: '8 Million',
    label: 'Annual production capacity',
  },
  {
    value: '10+',
    label: 'Core patents',
  },
  {
    value: '1000+',
    label: 'Acre smart manufacturing and R&D base',
  },
] as const;

/** Technical specification, transcribed from the brochure body copy and diagrams. */
export const specifications = [
  { property: 'Product type', value: 'Rock fibre inorganic density panel (mineral fiber panel)' },
  { property: 'Base sheet size', value: '1220 mm × 2440 mm' },
  { property: 'Thickness range', value: '4 – 18 mm' },
  { property: 'Fibre diameter', value: 'Φ 4 µm' },
  { property: 'Melt temperature', value: 'Above 1450 °C' },
  { property: 'Binder', value: 'Phenolic resin co-polymerisation' },
  { property: 'Fire classification', value: 'Grade A2, non-combustible (GB/T 8624-2012)' },
  { property: 'Water absorption / expansion', value: '0.5%' },
  { property: 'Formaldehyde emission', value: 'Grade E0 (ENF grade in China)' },
  { property: 'TVOC', value: '1/6 of the national standard limit' },
  { property: 'Radionuclides', value: '70% below regulatory limits' },
  { property: 'Screw holding force', value: 'Over 1200 N' },
  { property: 'Tool wear vs. wood board', value: '15% lower' },
  { property: 'Patents', value: 'CN117779342A and 10+ further core patents' },
] as const;

/** "Technical Process" — the four stages on brochure pp.5–6. */
export const processStages = [
  {
    step: '01',
    title: 'Raw materials & pre-processing',
    body: 'Rock and ore feedstock — slag recovered from ferroalloy smelting — is melted in an electric furnace above 1450 °C into a magma state, and residual metal impurities are extracted.',
  },
  {
    step: '02',
    title: 'Fibre formation & mixing',
    body: 'The molten magma is passed through a centrifuge and drawn into Φ 4 µm mineral fibre. Phenolic resin is then co-polymerised into the fibre to lock in the fire-proof and low-emission behaviour.',
  },
  {
    step: '03',
    title: 'Panel forming & processing',
    body: 'The fibre-resin mixture is compacted and driven through a continuous high-temperature press into a 4–18 mm board, then cured, cut and anti-counterfeit marked on fully intelligent CNC equipment.',
  },
  {
    step: '04',
    title: 'Packaging & delivery',
    body: 'Finished panels are packed and held in an intelligent warehousing system. Acceptance sampling clears each batch before it is released to the customer.',
  },
] as const;

/** Application scenarios — brochure pp.7–8. */
export const interiorApplications = [
  { title: 'Interior finishing panel', body: 'Full-height wall linings and feature panels.' },
  { title: 'Cabinet body material', body: 'Carcasses and doors for joinery and fitted storage.' },
  { title: 'Floor panel', body: 'Substrate and finished floor panels in dry and wet areas.' },
  { title: 'Customised furniture', body: 'Bespoke pieces machined on standard woodworking equipment.' },
] as const;

export const publicApplications = [
  {
    title: 'Factory',
    body: 'Hard-wearing, non-combustible linings for industrial and logistics interiors.',
    image: '/img/app-factory.jpg',
  },
  {
    title: 'Hospital',
    body: 'Low-emission, mould-resistant surfaces for clinical and care environments.',
    image: '/img/app-hospital.jpg',
  },
  {
    title: 'Airport',
    body: 'Large-format wall and ceiling systems for high-traffic transport terminals.',
    image: '/img/app-airport.jpg',
  },
  {
    title: 'School',
    body: 'Safe, durable joinery and wall panels for classrooms and libraries.',
    image: '/img/app-school.jpg',
  },
] as const;

/** "Processing Advantages" — brochure pp.9–11. */
export const processingAdvantages = [
  {
    title: 'High processing compatibility',
    body: 'RMP supports sawing, grooving, drilling and gluing, so it drops straight into existing joinery workflows and suits every kind of design and appliance.',
  },
  {
    title: 'Outstanding fire resistance',
    body: 'Grade A2 fire resilience with inorganic raw materials, so even the sawdust carries no fire hazard — a sound choice for high-rise and high-risk projects.',
  },
  {
    title: 'Full decorative compatibility',
    body: 'Finishes include melamine paper, PET film, PU paint, metal films and digital printing. Swatch selections are sourced from third-party suppliers; ask us for the extended portfolio.',
  },
  {
    title: 'Design freedom',
    body: 'Choose from the standard designs and colours or specify your own, in custom sizes. Cutting wears tools 15% less than wood board, lowering processing cost and cutting waste.',
  },
] as const;

/** Available decorative finishes, from the "Full Decorative Compatibility" spread. */
export const finishes = [
  { name: 'Melamine paper', note: 'Woodgrain, stone and solid decors' },
  { name: 'PET film', note: 'High-gloss and matt surfaces' },
  { name: 'PU paint', note: 'Sprayed, fully bespoke colour' },
  { name: 'Metal film', note: 'Brushed and mirror metallics' },
  { name: 'Digital printing', note: 'Any artwork, printed direct to panel' },
] as const;

/** Fire classification scale used on brochure p.11 (GB/T 8624-2012). */
export const fireScale = ['A1', 'A2', 'B', 'C', 'D', 'E', 'F'] as const;

/** Intellectual property recorded in the manufacturer profile. */
export const intellectualProperty = [
  {
    title: 'Invention patent — mineral fibre panel production',
    ref: 'CN117779342A',
    body: 'The core process patent covering the high-temperature melt fibrization production line.',
  },
  {
    title: 'Utility model — mineral fibre panel data acquisition',
    ref: 'ZL 2022 2 2764625.3',
    body: 'Instrumentation and data capture across the continuous production line.',
  },
  {
    title: 'Utility model — single-cylinder pneumatic conveying system',
    ref: 'CN 2020 2 2380938.1',
    body: 'Materials handling for the raw feedstock stage.',
  },
  {
    title: 'Software copyright — digital energy management system',
    ref: '2024SR0281785',
    body: 'The plant-wide energy and emissions management platform, V1.0.',
  },
] as const;

/** Accreditation claims from the manufacturer profile and company intro. */
export const accreditation = [
  'CNAS laboratory capability certification for the in-house R&D lab',
  'Provincial new material research and development technology centre',
  'Active participant in the drafting of several national standards',
  'A2 fire classification tested to GB/T 8624-2012',
] as const;
