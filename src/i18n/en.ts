/**
 * English copy — the reference dictionary.
 *
 * Its shape defines the `Dictionary` type, so every other locale is checked
 * against it and a missing or misnamed key fails the type check rather than
 * rendering `undefined` on a live page.
 *
 * Everything here is transcribed from the English product brochure
 * `Mineral fiber pannel_en_zhenwang.pdf`. Do not add figures that are not in
 * it — the site is read by specifiers, and an invented number is a liability.
 */
export const en = {
  nav: {
    home: 'Home',
    product: 'Product',
    technology: 'Technology',
    applications: 'Applications',
    about: 'About',
    contact: 'Contact',
  },

  common: {
    requestQuote: 'Request a quote',
    contactZhenWang: 'Contact ZhenWang',
    productSpecification: 'Product specification',
    exploreThePanel: 'Explore the panel',
    readFullSpec: 'Read the full specification',
    seeAllApplications: 'See all application scenarios',
    getInTouch: 'Get in touch',
    backToHome: 'Back to home',
    contactUs: 'Contact us',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    switchLanguage: 'Switch language',
    generalDistributor: 'General Distributor',
    sitemap: 'Sitemap',
    manufacturer: 'Manufacturer',
  },

  meta: {
    home: {
      title: 'MinewayTech Rock Mineral Panel | ZHEN WANG CONSTRUCTION PTE LTD',
      description:
        'ZHEN WANG CONSTRUCTION PTE LTD is the Singapore general distributor for MinewayTech Rock Mineral Panel — a non-combustible A2-grade mineral fiber inorganic density panel with E0 formaldehyde emission and excellent water resistance.',
    },
    product: {
      title: 'Rock Mineral Panel — product & specification',
      description:
        'Full specification for MinewayTech Rock Mineral Panel: A2 non-combustible, 0.5% water absorption, Grade E0 formaldehyde, 1220 × 2440 mm in 4–18 mm thicknesses.',
    },
    technology: {
      title: 'Technical process & patents',
      description:
        'How Rock Mineral Panel is made: rock melted above 1450 °C, centrifuged into Φ4 µm mineral fibre, co-polymerised with phenolic resin and continuously hot-pressed into 4–18 mm board.',
    },
    applications: {
      title: 'Application scenarios',
      description:
        'Where Rock Mineral Panel is used: interior wall linings, cabinet carcasses, floor panels and bespoke furniture, plus factories, hospitals, airports and schools.',
    },
    about: {
      title: 'About ZhenWang & the manufacturer',
      description:
        'ZHEN WANG CONSTRUCTION PTE LTD is the Singapore general distributor for MinewayTech Rock Mineral Panel, manufactured by Jiaocheng Yiwang Ferroalloy Co., Ltd., founded 1988.',
    },
    contact: {
      title: 'Contact',
      description:
        'Contact ZHEN WANG CONSTRUCTION PTE LTD, the Singapore general distributor for MinewayTech Rock Mineral Panel. Phone +65 9457 8218 or email shuzhen@zhenwang.org.',
    },
  },

  brand: {
    tagline: 'Redefining Panels with the Power of Stone',
    productName: 'Rock Mineral Panel',
    legalName: 'ZHEN WANG CONSTRUCTION PTE LTD',
    manufacturerName: 'Jiaocheng Yiwang Ferroalloy Co., Ltd.',
    manufacturerLocation: 'Shanxi, China',
    logoAlt: 'MinewayTech — Mineral Fiber Panel',
  },

  headlineClaims: [
    'Non-combustible Material',
    'E0 Grade Formaldehyde Emission',
    'Excellent Water Resistance',
  ],

  home: {
    heroEyebrow: 'General Distributor · Singapore',
    heroTitleLines: ['Redefining Panels', 'with the Power', 'of Stone'],
    heroBody:
      'Rock Mineral Panel (RMP) is a rock fibre inorganic density panel that combines the hardness, fire resistance and waterproofing of stone with the flexibility and workability of wood — machined on the woodworking equipment your joiners already own.',
    heroImageAlt:
      'Dark contemporary living room lined with Rock Mineral Panel wall and cabinet surfaces',
    strip: [
      { term: 'Fire classification', detail: 'A2 non-combustible' },
      { term: 'Water absorption', detail: '0.5% expansion' },
      { term: 'Formaldehyde', detail: 'Grade E0 / ENF' },
      { term: 'Screw holding', detail: 'Over 1200 N' },
    ],
    introEyebrow: 'Product introduction',
    introTitle: 'A revolutionary rock fibre inorganic density panel',
    introBody1:
      'RMP was born with China’s first self-developed production line and optimised proprietary processes. It achieves A2-grade fire resistance to GB/T 8624-2012 and a 0.5% water absorption and expansion rate, which keeps the panel from deforming and cracking.',
    introBody2:
      'It carries Grade E0 formaldehyde emission — ENF grade in China — with TVOC held at one sixth of the national standard. The unique fibrization technology gives it a higher elastic modulus and greater toughness than traditional inorganic boards such as calcium silicate, cement and magnesia, so it can be processed directly on woodworking equipment.',
    introImageAlt: 'Close-up of layered basalt rock strata, the raw feedstock for mineral fibre',
    introBadgeEyebrow: 'Mineral fiber',
    introBadgeLines: ['Inorganic', 'density panel'],
    fourWords: ['Hard', 'Non-combustible', 'Waterproof', 'Eco-friendly'],
    advantagesTitleLines: ['Core Advantages', 'Breaking Technological Monopoly'],
    enterpriseEyebrow: 'Achievements of enterprise',
    enterpriseTitle: 'Backed by a thousand-acre smart manufacturing base',
    enterpriseIntro:
      'Rock Mineral Panel is produced from slag extracted during ferroalloy smelting, so the whole line runs at 100% zero emissions — a closed loop of solid waste recycling, energy conservation and environmental protection.',
    applicationsEyebrow: 'Application scenarios',
    applicationsTitle: 'From private interiors to high-traffic public buildings',
    applicationsIntro:
      'One panel covers wall linings, cabinet carcasses, floors and bespoke furniture — and the A2 fire rating makes it a sound choice where the specification is unforgiving.',
    interiorSpaceLabel: 'Interior Space',
    publicSpaceLabel: 'Public space',
    interiorImageAlt: 'Interior lounge with RMP wall panelling, cabinet fronts and flooring',
  },

  product: {
    heroEyebrow: 'Product',
    heroTitle: 'Rock Mineral Panel',
    heroIntro:
      'The hardness, fire resistance and waterproofing of stone, with the flexibility and workability of wood. One inorganic panel that your joiners can saw, groove, drill and glue on the equipment already on the shop floor.',
    heroImageAlt: 'Slabs of fractured grey mineral rock',
    advantagesEyebrow: 'Product advantages',
    advantagesTitle: 'An innovative inorganic panel, not another cement board',
    advantagesBody1:
      'MinewayTech RMP combines stone-like hardness with wood-like flexibility. Built on self-developed high-temperature melt fibrization technology and intelligent manufacturing, it breaks through the limitations of traditional materials in structural performance, environmental impact and decorative versatility.',
    advantagesBody2:
      'RMP is produced from slag extracted during ferroalloy smelting, which lets the entire production line achieve 100% zero emissions — a genuine closed loop of solid waste recycling, energy conservation and environmental protection.',
    pillars: [
      {
        title: 'Performance without compromise',
        body: 'Grade A2 fire resilience, ultra-low water absorption and a high elastic modulus put RMP at the top of its class across the board — which is what makes it viable for commercial spaces, luxury interior design and highly bespoke projects.',
      },
      {
        title: 'Genuinely green and healthy',
        body: 'TVOC and formaldehyde emissions sit far below the ENF national standard, so RMP stands up as a truly green, healthy building material rather than a marginally compliant one.',
      },
      {
        title: 'Easy on tools and workflows',
        body: 'RMP works with standard woodworking tools at a 15% lower tool wear rate. Compatible finishes include melamine paper, PET film, PU paint, metal films and digital printing, giving designers the widest possible range of combinations.',
      },
    ],
    specEyebrow: 'Technical data',
    specTitle: 'Specification',
    specTableCaption: 'Rock Mineral Panel technical specification',
    specColProperty: 'Property',
    specColValue: 'Value',
    specNote:
      'Figures as published in the MinewayTech Rock Mineral Panel product brochure. Panel dimensions and finishes can be customised — contact ZHEN WANG CONSTRUCTION PTE LTD for project-specific data sheets and test reports.',
    fireEyebrow: 'Fire performance',
    fireTitle: 'Excellent fire resistance',
    fireIntro:
      'Safety is always the primary consideration and will never be compromised. RMP has high construction safety and grade A2 fire resilience. Because the raw materials are inorganic, even the sawdust from the board carries no fire hazard — a wise choice for high-rise buildings and high-risk projects.',
    fireScaleLabel: 'Grade A2 fire resilience',
    fireScaleAria: 'Fire classification scale, A1 to F',
    nonCombustible: 'Non-combustible',
    combustible: 'Combustible',
    fireImageAlt: 'Molten lava crusting over, evoking the 1450 °C melt the panel is made from',
    processingEyebrow: 'Processing advantages',
    processingTitle: 'Built to be worked, not just installed',
    finishesEyebrow: 'Design freedom',
    finishesTitle: 'Full decorative compatibility',
    finishesIntro:
      'Choose from the standard designs and colours, or specify your own. Custom sizes are supported and the processing stage stays flexible. Compared with cutting wood board, RMP reduces cutting tool wear by 15%, so construction is more efficient and cutting waste is minimised.',
    finishesNote:
      'Colour swatch selections are sourced from third-party suppliers. For extended finish styles our team can furnish a more exhaustive visual portfolio on request.',
    finishesImageAlt: 'Hand saw cutting cleanly through a gold-faced mineral fibre panel',
  },

  technology: {
    heroEyebrow: 'Technology',
    heroTitle: 'Technical Process',
    heroIntro:
      'Rock melted above 1450 °C, spun into four-micron fibre, bound with phenolic resin and pressed into board on China’s first self-developed mineral fibre panel production line.',
    heroImageAlt: 'Crushed mineral ore, the raw feedstock for the melt furnace',
    processEyebrow: 'Manufacturing',
    processTitle: 'From slag to finished panel in four stages',
    processIntro:
      'Raw materials are melted above 1450 °C and fibrillated to Φ4 µm through a centrifugal machine. Co-polymerisation with phenolic resin lifts performance, and the fibre-resin mixture is compressed into 4–18 mm board through a continuous high-temperature pressing system. After cooling, products are processed by CNC and anti-counterfeiting treatment, then tested by acceptance sampling before release. The entire process follows eco-friendly and safe manufacturing standards.',
    flowEyebrow: 'Process flow',
    flowTitle: 'The line, end to end',
    step: 'Step',
    ipEyebrow: 'Intellectual property',
    ipTitle: 'Self-owned patents breaking the monopoly',
    ipIntro:
      'Over ten core patents sit behind the production line, covering the fibrization process, the plant instrumentation and the energy management platform that runs it.',
    accreditationTitle: 'Testing & accreditation',
    ipImageAlt: 'Curved white architectural facade with deep horizontal shadow bands',
    ctaTitle: 'Need the test reports?',
    ctaBody:
      'Fire, formaldehyde, TVOC and radionuclide test documentation, along with the patent certificates, are available to specifiers on request.',
  },

  applications: {
    heroEyebrow: 'Applications',
    heroTitle: 'Application Scenarios',
    heroIntro:
      'One panel across interior finishing, cabinetry, flooring and furniture — and an A2 fire rating that holds up in the buildings where the specification is least forgiving.',
    heroImageAlt: 'Panelised facade cladding seen from below against a bright sky',
    interiorEyebrow: 'Interior space',
    interiorTitle: 'Wall, cabinet, floor and furniture — from one panel',
    interiorIntro:
      'Because RMP machines on standard woodworking equipment, a single specified panel can run through the whole fit-out rather than forcing a different substrate for every element.',
    interiorImageAlt:
      'Contemporary lounge with dark RMP wall panelling, full-height cabinet fronts and timber-look flooring',
    publicEyebrow: 'Public space',
    publicTitle: 'Where fire performance is not negotiable',
    publicIntro:
      'Non-combustible, low-emission and mould resistant — the combination that public buildings ask for, in a panel that still takes a decorative finish.',
    serviceEyebrow: 'In service',
    serviceTitle: 'Specified once, and it stays put',
    serviceIntro:
      'A 0.5% water absorption and expansion rate keeps panels from swelling, warping or cracking in humid Singapore conditions, and the inorganic body resists mould, insects and corrosion for the life of the fit-out.',
    serviceImageAlt: 'Timber-clad contemporary house lit from within at dusk',
    serviceItems: [
      { term: 'Wet areas', detail: 'Bathrooms, kitchens and laundries without a swelling substrate.' },
      { term: 'High-rise', detail: 'A2 non-combustible board for towers and high-risk projects.' },
      { term: 'Healthcare', detail: 'E0 emission and mould resistance for clinical interiors.' },
      { term: 'Acoustics', detail: 'The fibre structure absorbs noise as part of the build-up.' },
    ],
    ctaTitle: 'Have a scenario we have not listed?',
    ctaBody:
      'Tell us the building type, the fire requirement and the finish, and we will tell you whether Rock Mineral Panel is the right substrate for it.',
  },

  about: {
    heroEyebrow: 'Company',
    heroTitle: 'Company Intro',
    heroIntro:
      'A Singapore distributor and a Shanxi manufacturer, joined by one product line: green, circular, low-carbon building materials made from what a smelter used to throw away.',
    heroImageAlt: 'Layered rock strata catching low golden light',
    factoryEyebrow: 'Smart factory',
    factoryBody1:
      'Founded in 1988, Jiaocheng Yiwang Ferroalloy Co., Ltd. has become a modern circular economy enterprise with leading advantages in its industry. The company takes ferroalloy, Rock Mineral Panel, mineral wool and microcrystalline stone as its core projects, pursuing green, circular and low-carbon development.',
    factoryBody2:
      'It has always adhered to the development concept of “Learning, Research and Innovation” set out by its founder, and actively explores the extension of the industrial chain — contributing to the national green ecological industry and circular economy.',
    pillars: ['Green tech', 'Materials R&D', 'Circular economy', 'Value chain'],
    factoryFigures: [
      { value: '1988', label: 'Year Jiaocheng Yiwang Ferroalloy Co., Ltd. was founded' },
      { value: '1000+', label: 'Acres covered by the plant' },
      { value: '1,500+', label: 'Employees on site' },
      { value: '700,000 t', label: 'Annual ferroalloy production capacity' },
      { value: '4bn+', label: 'Annual output value (RMB)' },
      { value: '8 Million', label: 'Annual Rock Mineral Panel production capacity' },
    ],
    researchEyebrow: 'Research & standards',
    researchTitle: 'A provincial R&D centre with a CNAS-certified lab',
    distributorIntro:
      'ZhenWang Enterprise is the general distributor for MinewayTech Rock Mineral Panel in Singapore. We hold the product knowledge, the test documentation and the supply relationship, so architects, main contractors and joinery subcontractors can specify and buy RMP locally.',
    distributorImageAlt: 'Panelised facade rising against a clear sky',
    roleLabel: 'Role',
    roleValue: 'General Distributor, Singapore',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
  },

  contact: {
    heroEyebrow: 'Contact',
    heroTitle: 'Talk to the distributor',
    heroIntro:
      'Samples, test reports, panel sizes, finishes and lead times for Singapore delivery — send us the project and we will come back with the detail.',
    heroImageAlt: 'Curved architectural facade with banded shadows',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    manufacturerLabel: 'Manufacturer',
    sampleTitle: 'Ask for a physical sample',
    sampleBody:
      'The panel is easier to judge in the hand than on a screen. Tell us the thickness and finish you are considering and we will arrange a sample.',
    formEyebrow: 'Enquiry',
    formTitle: 'Send us the project',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      interest: 'I am interested in',
      project: 'Project name or estimated quantity',
      projectPlaceholder: 'e.g. 400 m² of 12 mm panel, hotel fit-out, Q3',
      message: 'Message',
      messagePlaceholder:
        'Tell us about the fire requirement, the finish you have in mind and your programme.',
      submit: 'Compose enquiry email',
      hint: 'This opens your own email client with the enquiry pre-filled and addressed to {email} — nothing is sent until you press send.',
      sent: 'Your mail client should now be open with the enquiry ready to send to {email}. If nothing happened, email us directly.',
      subject: 'RMP enquiry',
      fieldName: 'Name',
      fieldCompany: 'Company',
      fieldEmail: 'Email',
      fieldPhone: 'Phone',
      fieldInterest: 'Interest',
      fieldProject: 'Project / quantity',
      interests: [
        'Interior finishing panel',
        'Cabinet body material',
        'Floor panel',
        'Customised furniture',
        'Public / commercial project',
        'Distribution & trade enquiry',
      ],
    },
  },

  footer: {
    body: 'Redefining Panels with the Power of Stone. Rock Mineral Panel (RMP) is a rock fibre inorganic density panel that brings the hardness, fire resistance and water resistance of stone to the workability of wood.',
    rights: 'All rights reserved.',
    manufacturedBy: 'MinewayTech Rock Mineral Panel is manufactured by {manufacturer}.',
  },

  cta: {
    title: 'Specifying Rock Mineral Panel on a project?',
    body: 'Send us the drawings, the fire requirement and the finish you have in mind. We will come back with panel sizes, finishes and lead times for Singapore delivery.',
  },

  notFound: {
    title: 'This page is not part of the range',
    body: 'The page you asked for does not exist. Head back to the panel, or tell us what you were looking for.',
  },

  coreAdvantages: {
    fire: {
      title: 'A2 fire resilience',
      body: 'Classified A2 to GB/T 8624-2012 — non-combustible, with no fire hazard from the sawdust.',
    },
    eco: {
      title: 'Extreme eco-friendliness',
      body: 'Grade E0 formaldehyde emission (ENF grade in China), with TVOC at one sixth of the national limit.',
    },
    water: {
      title: 'Waterproof & moisture-proof',
      body: '0.5% water absorption and expansion rate, so the panel does not swell in wet service.',
    },
    stability: {
      title: 'Shape stability',
      body: 'Warp resistant and dimensionally stable — no deformation and no cracking over time.',
    },
    mould: {
      title: 'Mould & insect resistance',
      body: 'Inorganic through and through, so it resists mould, insects and corrosion.',
    },
    radionuclides: {
      title: 'Low radionuclides',
      body: '70% below the regulatory limits for radionuclides in building materials.',
    },
    noise: {
      title: 'Noise reduction',
      body: 'The fibre structure works as an absorption system, cutting transmitted noise.',
    },
    screw: {
      title: 'Strong screw holding',
      body: 'Screw holding capability over 1200N — fixings hold like they would in dense timber.',
    },
    patents: {
      title: 'Self-owned patents',
      body: 'Over 10 core patents behind the process, breaking the long-standing technology monopoly.',
    },
    dimensions: {
      title: 'Customisable dimensions',
      body: 'Panels made to order in thickness and format, from a 1220 × 2440 mm base sheet.',
    },
  },

  enterpriseFigures: [
    { value: 'TOP 1', label: 'Fully self-developed product, China’s first production line' },
    { value: '4.0', label: 'Intelligent Industry 4.0 model: higher efficiency, lower costs' },
    { value: '5×', label: 'Lower TVOC and formaldehyde emissions vs. industry peers' },
    { value: '8 Million', label: 'Annual production capacity' },
    { value: '10+', label: 'Core patents' },
    { value: '1000+', label: 'Acre smart manufacturing and R&D base' },
  ],

  specifications: [
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
  ],

  processStages: [
    {
      title: 'Raw materials & pre-processing',
      body: 'Rock and ore feedstock — slag recovered from ferroalloy smelting — is melted in an electric furnace above 1450 °C into a magma state, and residual metal impurities are extracted.',
    },
    {
      title: 'Fibre formation & mixing',
      body: 'The molten magma is passed through a centrifuge and drawn into Φ 4 µm mineral fibre. Phenolic resin is then co-polymerised into the fibre to lock in the fire-proof and low-emission behaviour.',
    },
    {
      title: 'Panel forming & processing',
      body: 'The fibre-resin mixture is compacted and driven through a continuous high-temperature press into a 4–18 mm board, then cured, cut and anti-counterfeit marked on fully intelligent CNC equipment.',
    },
    {
      title: 'Packaging & delivery',
      body: 'Finished panels are packed and held in an intelligent warehousing system. Acceptance sampling clears each batch before it is released to the customer.',
    },
  ],

  flow: [
    { label: 'Rock / ore raw materials', detail: 'Electric furnace' },
    { label: 'Molten minerals', detail: '1450 °C' },
    { label: 'Mineral fibre', detail: 'Φ 4 µm, centrifuge' },
    { label: 'Fibre & resin mixture', detail: 'Phenolic resin' },
    { label: 'Hot press', detail: 'Continuous, high temperature' },
    { label: 'Finished panel', detail: '4 – 18 mm · 1220 × 2440 mm' },
  ],

  interiorApplications: [
    { title: 'Interior finishing panel', body: 'Full-height wall linings and feature panels.' },
    { title: 'Cabinet body material', body: 'Carcasses and doors for joinery and fitted storage.' },
    { title: 'Floor panel', body: 'Substrate and finished floor panels in dry and wet areas.' },
    {
      title: 'Customised furniture',
      body: 'Bespoke pieces machined on standard woodworking equipment.',
    },
  ],

  publicApplications: {
    factory: {
      title: 'Factory',
      body: 'Hard-wearing, non-combustible linings for industrial and logistics interiors.',
    },
    hospital: {
      title: 'Hospital',
      body: 'Low-emission, mould-resistant surfaces for clinical and care environments.',
    },
    airport: {
      title: 'Airport',
      body: 'Large-format wall and ceiling systems for high-traffic transport terminals.',
    },
    school: {
      title: 'School',
      body: 'Safe, durable joinery and wall panels for classrooms and libraries.',
    },
  },

  processingAdvantages: [
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
  ],

  finishes: [
    { name: 'Melamine paper', note: 'Woodgrain, stone and solid decors' },
    { name: 'PET film', note: 'High-gloss and matt surfaces' },
    { name: 'PU paint', note: 'Sprayed, fully bespoke colour' },
    { name: 'Metal film', note: 'Brushed and mirror metallics' },
    { name: 'Digital printing', note: 'Any artwork, printed direct to panel' },
  ],

  intellectualProperty: [
    {
      title: 'Invention patent — mineral fibre panel production',
      body: 'The core process patent covering the high-temperature melt fibrization production line.',
    },
    {
      title: 'Utility model — mineral fibre panel data acquisition',
      body: 'Instrumentation and data capture across the continuous production line.',
    },
    {
      title: 'Utility model — single-cylinder pneumatic conveying system',
      body: 'Materials handling for the raw feedstock stage.',
    },
    {
      title: 'Software copyright — digital energy management system',
      body: 'The plant-wide energy and emissions management platform, V1.0.',
    },
  ],

  accreditation: [
    'CNAS laboratory capability certification for the in-house R&D lab',
    'Provincial new material research and development technology centre',
    'Active participant in the drafting of several national standards',
    'A2 fire classification tested to GB/T 8624-2012',
  ],
};

/*
 * Deliberately not `as const`. Const assertions would make every value a string
 * *literal* type, so another locale would have to repeat the English wording
 * verbatim to satisfy the type. Widened to `string`, the type still pins down
 * the key structure — which is the part worth enforcing.
 */
export type Dictionary = typeof en;
