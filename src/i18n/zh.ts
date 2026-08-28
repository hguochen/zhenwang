import type { Dictionary } from './en';

/**
 * Simplified Chinese copy.
 *
 * Terminology follows the client's own Chinese brochure (`生产商简介.pdf`)
 * wherever it supplies a term — 岩矿板, 智造工厂, 循环经济, 交城义望铁合金有限责任公司,
 * “学习，研究，创新” — rather than back-translating from the English.
 *
 * Two deliberate choices:
 *
 * 1. `ZHEN WANG CONSTRUCTION PTE LTD` stays in English. It is a registered
 *    Singapore entity and the brochures give no Chinese name; inventing one
 *    would put a company name on the site that exists nowhere else.
 * 2. Plant size reads 千亩 here and "1000+ acres" in English, because that is
 *    what each brochure says. They are not the same figure (一亩 ≈ 1/6 acre) —
 *    the discrepancy is in the source material, not introduced here.
 */
export const zh: Dictionary = {
  nav: {
    home: '首页',
    product: '产品',
    technology: '技术',
    applications: '应用场景',
    about: '关于我们',
    contact: '联系我们',
  },

  common: {
    requestQuote: '索取报价',
    contactZhenWang: '联系 ZhenWang',
    productSpecification: '产品规格',
    exploreThePanel: '了解产品',
    readFullSpec: '查看完整规格',
    seeAllApplications: '查看全部应用场景',
    getInTouch: '与我们联系',
    backToHome: '返回首页',
    contactUs: '联系我们',
    skipToContent: '跳至正文',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    mainNav: '主导航',
    mobileNav: '移动端导航',
    switchLanguage: '切换语言',
    generalDistributor: '总代理',
    sitemap: '网站导航',
    manufacturer: '生产商',
  },

  meta: {
    home: {
      title: '米纳威岩矿板 | ZHEN WANG CONSTRUCTION PTE LTD',
      description:
        'ZHEN WANG CONSTRUCTION PTE LTD 是米纳威岩矿板在新加坡的总代理。岩矿板为矿物纤维无机密度板，具备 A2 级不燃、E0 级甲醛释放量与优异的防水性能。',
    },
    product: {
      title: '岩矿板 — 产品与技术规格',
      description:
        '米纳威岩矿板完整规格：A2 级不燃、吸水膨胀率 0.5%、E0 级甲醛释放量，标准板面 1220 × 2440 mm，厚度 4–18 mm。',
    },
    technology: {
      title: '生产工艺与专利',
      description:
        '岩矿板的制造过程：岩矿原料 1450 ℃ 以上高温熔融，经离心机纤维化至 Φ4 µm，与酚醛树脂共聚后连续高温热压成 4–18 mm 板材。',
    },
    applications: {
      title: '应用场景',
      description:
        '岩矿板的应用范围：室内墙面饰面板、柜体板、地板与定制家具，以及工厂、医院、机场与学校等公共空间。',
    },
    about: {
      title: '关于 ZhenWang 与生产商',
      description:
        'ZHEN WANG CONSTRUCTION PTE LTD 是米纳威岩矿板在新加坡的总代理，产品由始创于 1988 年的交城义望铁合金有限责任公司生产。',
    },
    contact: {
      title: '联系我们',
      description:
        '联系米纳威岩矿板新加坡总代理 ZHEN WANG CONSTRUCTION PTE LTD。电话 +65 9457 8218，邮箱 zhenwang8@hotmail.com。',
    },
  },

  brand: {
    tagline: '以石之力，重塑板材',
    productName: '岩矿板',
    legalName: 'ZHEN WANG CONSTRUCTION PTE LTD',
    manufacturerName: '交城义望铁合金有限责任公司',
    manufacturerLocation: '中国 山西',
    logoAlt: '米纳威 — 矿物纤维板',
  },

  headlineClaims: ['不燃材料', 'E0 级甲醛释放量', '优异防水性能'],

  home: {
    heroEyebrow: '新加坡总代理',
    heroTitleLines: ['以石之力', '重塑板材'],
    heroBody:
      '岩矿板（RMP）是一种岩矿纤维无机密度板，兼具石材的硬度、防火与防水性能，以及木材的柔韧性与可加工性——可直接使用木工车间现有设备加工。',
    heroImageAlt: '以岩矿板作墙面与柜体饰面的现代深色客厅',
    strip: [
      { term: '防火等级', detail: 'A2 级不燃' },
      { term: '吸水膨胀率', detail: '0.5%' },
      { term: '甲醛释放量', detail: 'E0 / ENF 级' },
      { term: '握螺钉力', detail: '1200 N 以上' },
    ],
    introEyebrow: '产品介绍',
    introTitle: '革新性的岩矿纤维无机密度板',
    introBody1:
      '岩矿板诞生于中国首条全栈自主研发的生产线，依托优化的自有工艺，达到 GB/T 8624-2012 A2 级防火等级，吸水膨胀率仅 0.5%，可有效防止板材变形与开裂。',
    introBody2:
      '产品甲醛释放量达 E0 级（中国 ENF 级），TVOC 释放量仅为国家标准限值的六分之一。独有的纤维化技术使其弹性模量与韧性优于硅酸钙板、水泥板、菱镁板等传统无机板材，可直接在木工设备上加工。',
    introImageAlt: '层状玄武岩特写，矿物纤维的原料来源',
    introBadgeEyebrow: '矿物纤维',
    introBadgeLines: ['无机', '密度板'],
    fourWords: ['坚硬', '不燃', '防水', '环保'],
    advantagesTitleLines: ['大核心优势', '打破技术垄断'],
    enterpriseEyebrow: '企业实力',
    enterpriseTitle: '千亩智能制造基地作为支撑',
    enterpriseIntro:
      '岩矿板以铁合金冶炼产生的矿渣为原料，整条生产线实现 100% 零排放，真正形成固废回收、节能降耗与环境保护的闭环。',
    applicationsEyebrow: '应用场景',
    applicationsTitle: '从私宅室内到高人流公共建筑',
    applicationsIntro:
      '一种板材即可覆盖墙面饰面、柜体、地板与定制家具；A2 级防火等级更让它胜任规范最为严格的场合。',
    interiorSpaceLabel: '室内空间',
    publicSpaceLabel: '公共空间',
    interiorImageAlt: '采用岩矿板墙板、柜门与地板的室内起居空间',
  },

  product: {
    heroEyebrow: '产品',
    heroTitle: '岩矿板',
    heroIntro:
      '兼具石材的硬度、防火与防水，以及木材的柔韧与易加工。一种无机板材，锯切、开槽、钻孔、粘接均可在车间现有设备上完成。',
    heroImageAlt: '断裂的灰色矿岩板块',
    advantagesEyebrow: '产品优势',
    advantagesTitle: '不是又一块水泥板，而是革新的无机板材',
    advantagesBody1:
      '米纳威岩矿板兼具石材般的硬度与木材般的柔韧。依托自主研发的高温熔融纤维化技术与智能制造，在结构性能、环保表现与装饰适配性上突破了传统材料的局限。',
    advantagesBody2:
      '岩矿板以铁合金冶炼过程中产生的矿渣为原料，使整条生产线实现 100% 零排放，真正做到固废循环利用、节能降耗与环境保护的完美闭环。',
    pillars: [
      {
        title: '性能毫不妥协',
        body: 'A2 级防火、超低吸水率与高弹性模量，使岩矿板在各项指标上均处于同类领先水平——这正是它能够胜任商业空间、高端室内设计与高度定制项目的原因。',
      },
      {
        title: '真正的绿色健康',
        body: 'TVOC 与甲醛释放量远低于 ENF 国家标准，岩矿板是名副其实的绿色健康建材，而非勉强达标的产品。',
      },
      {
        title: '对刀具与工序友好',
        body: '岩矿板适配标准木工刀具，刀具磨损率降低 15%。可配套三聚氰胺纸、PET 膜、PU 漆、金属膜与数码打印等饰面，为设计师提供最丰富的组合可能。',
      },
    ],
    specEyebrow: '技术参数',
    specTitle: '产品规格',
    specTableCaption: '岩矿板技术规格',
    specColProperty: '项目',
    specColValue: '参数',
    specNote:
      '以上数据引自米纳威岩矿板产品手册。板材尺寸与饰面均可定制——如需针对具体项目的技术数据表与检测报告，请联系 ZHEN WANG CONSTRUCTION PTE LTD。',
    fireEyebrow: '防火性能',
    fireTitle: '卓越的防火性能',
    fireIntro:
      '安全始终是首要考量，绝不妥协。岩矿板具备极高的施工安全性与 A2 级防火等级；由于原料本身为无机材料，加工产生的粉屑亦无火灾隐患。对于高层建筑与高风险项目而言，这是明智之选。',
    fireScaleLabel: 'A2 级防火等级',
    fireScaleAria: '防火等级标尺，A1 至 F',
    nonCombustible: '不燃',
    combustible: '易燃',
    fireImageAlt: '表面结壳的熔岩，呼应板材 1450 ℃ 的熔融工艺',
    processingEyebrow: '加工优势',
    processingTitle: '为加工而生，不止于安装',
    finishesEyebrow: '设计自由度',
    finishesTitle: '全面的饰面适配性',
    finishesIntro:
      '可从标准花色中选择，也可指定专属设计，并支持定制尺寸，加工环节保持高度灵活。与切割木质板材相比，岩矿板可将刀具磨损降低 15%，施工效率更高，切割浪费更少。',
    finishesNote:
      '色卡样板由第三方供应商提供。如需更多饰面样式，我们的团队可应要求提供更完整的视觉资料。',
    finishesImageAlt: '手锯平顺切开金色饰面矿物纤维板',
  },

  technology: {
    heroEyebrow: '技术',
    heroTitle: '生产工艺',
    heroIntro:
      '岩矿原料 1450 ℃ 以上高温熔融，离心成四微米纤维，经酚醛树脂结合后热压成板——出自中国首条全栈自主研发的矿物纤维板生产线。',
    heroImageAlt: '破碎的矿石原料，熔炉的进料',
    processEyebrow: '制造工艺',
    processTitle: '从矿渣到成品板材的四道工序',
    processIntro:
      '原料在 1450 ℃ 以上熔融，经离心机纤维化至 Φ4 µm。与酚醛树脂共聚以提升性能，纤维与树脂的混合料再通过连续高温热压系统压制成 4–18 mm 板材。冷却后由数控设备加工并进行防伪处理，最终经抽样检验合格后方可出厂。全过程遵循环保与安全生产标准。',
    flowEyebrow: '工艺流程',
    flowTitle: '完整产线一览',
    step: '工序',
    ipEyebrow: '知识产权',
    ipTitle: '自主专利，打破垄断',
    ipIntro:
      '生产线背后拥有十余项核心专利，涵盖纤维化工艺、产线仪表与全厂能源管理平台。',
    accreditationTitle: '检测与资质',
    ipImageAlt: '带有深色水平阴影带的白色弧形建筑立面',
    ctaTitle: '需要检测报告？',
    ctaBody:
      '防火、甲醛、TVOC 与放射性核素检测文件，以及各项专利证书，均可应设计与规范方要求提供。',
  },

  applications: {
    heroEyebrow: '应用',
    heroTitle: '应用场景',
    heroIntro:
      '一种板材贯通室内饰面、柜体、地板与家具；A2 级防火等级，足以应对规范最为严苛的建筑类型。',
    heroImageAlt: '仰视明亮天空下的板材幕墙',
    interiorEyebrow: '室内空间',
    interiorTitle: '墙面、柜体、地板与家具，一板通用',
    interiorIntro:
      '由于岩矿板可在标准木工设备上加工，一种指定板材即可贯穿整个装修工程，无需为每个部位另选基材。',
    interiorImageAlt: '采用深色岩矿板墙面、通高柜门与木纹地板的现代起居空间',
    publicEyebrow: '公共空间',
    publicTitle: '防火性能不容妥协的场合',
    publicIntro:
      '不燃、低释放、防霉——这正是公共建筑所要求的组合，而这块板材同时还能承载装饰饰面。',
    serviceEyebrow: '使用表现',
    serviceTitle: '一次选定，长久稳定',
    serviceIntro:
      '0.5% 的吸水膨胀率使板材在新加坡的潮湿气候中不膨胀、不翘曲、不开裂；无机基材本身可在整个装修使用周期内抵抗霉变、虫蛀与腐蚀。',
    serviceImageAlt: '暮色中由内透光的木饰面现代住宅',
    serviceItems: [
      { term: '潮湿区域', detail: '卫浴、厨房与洗衣空间，无需担心基材膨胀。' },
      { term: '高层建筑', detail: 'A2 级不燃板材，适用于塔楼与高风险项目。' },
      { term: '医疗空间', detail: 'E0 级释放量与防霉性能，契合医疗室内环境。' },
      { term: '声学表现', detail: '纤维结构本身即可作为构造中的吸声层。' },
    ],
    ctaTitle: '还有未列出的应用场景？',
    ctaBody:
      '请告诉我们建筑类型、防火要求与饰面需求，我们会判断岩矿板是否适合作为该场景的基材。',
  },

  about: {
    heroEyebrow: '公司',
    heroTitle: '公司介绍',
    heroIntro:
      '一家新加坡代理商与一家山西生产商，因同一条产品线而联结：以冶炼固废为原料的绿色、循环、低碳建材。',
    heroImageAlt: '低角度金色光线下的层状岩石',
    factoryEyebrow: '智造工厂',
    factoryBody1:
      '交城义望铁合金有限责任公司始创于 1988 年，已发展为行业内具有领航优势的现代化循环经济企业。公司以铁合金、岩矿板、岩棉与微晶石为核心项目，推进绿色、循环、低碳的多维发展目标。',
    factoryBody2:
      '公司始终坚持创始人所题“学习，研究，创新”的企业发展理念，并积极探索产业链延伸，为国家绿色生态产业与循环经济道路的发展贡献力量。',
    pillars: ['绿色技术', '材料研发', '循环经济', '产业链价值'],
    factoryFigures: [
      { value: '1988', label: '交城义望铁合金有限责任公司创立年份' },
      { value: '千亩', label: '厂区占地面积' },
      { value: '1500+', label: '在岗职工人数' },
      { value: '70 万吨', label: '铁合金产品年综合产能' },
      { value: '40 亿元', label: '年产值（人民币）' },
      { value: '800 万', label: '岩矿板年产能' },
    ],
    researchEyebrow: '研发与标准',
    researchTitle: '省级研发中心，实验室通过 CNAS 认证',
    distributorIntro:
      'ZhenWang 是米纳威岩矿板在新加坡的总代理。我们掌握产品技术资料、检测文件与供应渠道，便于建筑师、总承包商与木作分包商在本地完成选型与采购。',
    distributorImageAlt: '晴空下高耸的板材幕墙',
    roleLabel: '角色',
    roleValue: '新加坡总代理',
    addressLabel: '地址',
    phoneLabel: '电话',
    emailLabel: '邮箱',
  },

  contact: {
    heroEyebrow: '联系',
    heroTitle: '联系总代理',
    heroIntro:
      '样品、检测报告、板材尺寸、饰面选择与新加坡交货周期——请把项目信息发给我们，我们会提供详细方案。',
    heroImageAlt: '带有条状阴影的弧形建筑立面',
    phoneLabel: '电话',
    emailLabel: '邮箱',
    addressLabel: '地址',
    manufacturerLabel: '生产商',
    sampleTitle: '索取实物样品',
    sampleBody:
      '板材的质感，上手远比看屏幕直观。请告知您考虑的厚度与饰面，我们将安排样品寄送。',
    formEyebrow: '询价',
    formTitle: '把项目告诉我们',
    form: {
      name: '姓名',
      company: '公司',
      email: '邮箱',
      phone: '电话',
      interest: '我想了解',
      project: '项目名称或预估用量',
      projectPlaceholder: '例如：12 mm 板材 400 m²，酒店装修，第三季度',
      message: '留言',
      messagePlaceholder: '请说明防火要求、期望的饰面以及项目工期。',
      submit: '生成询价邮件',
      hint: '此操作会打开您自己的邮件客户端，并预填好发送至 {email} 的询价内容——在您点击发送前不会发出任何信息。',
      sent: '您的邮件客户端应已打开，询价内容已准备好发送至 {email}。若未自动打开，请直接给我们发送邮件。',
      subject: '岩矿板询价',
      fieldName: '姓名',
      fieldCompany: '公司',
      fieldEmail: '邮箱',
      fieldPhone: '电话',
      fieldInterest: '意向',
      fieldProject: '项目／用量',
      interests: [
        '室内饰面板',
        '柜体板材',
        '地板',
        '定制家具',
        '公共／商业项目',
        '经销与贸易咨询',
      ],
    },
  },

  footer: {
    body: '以石之力，重塑板材。岩矿板（RMP）是一种岩矿纤维无机密度板，将石材的硬度、防火与防水性能，带入木材的可加工性之中。',
    rights: '版权所有。',
    manufacturedBy: '米纳威岩矿板由{manufacturer}生产。',
  },

  cta: {
    title: '正在为项目选用岩矿板？',
    body: '请把图纸、防火要求与期望的饰面发给我们，我们会提供板材尺寸、饰面方案与新加坡交货周期。',
  },

  notFound: {
    title: '该页面不在产品范围内',
    body: '您访问的页面不存在。可返回首页，或直接告诉我们您想找什么。',
  },

  coreAdvantages: {
    fire: {
      title: 'A2 级防火',
      body: '依据 GB/T 8624-2012 判定为 A2 级不燃，加工粉屑亦无火灾隐患。',
    },
    eco: {
      title: '极致环保',
      body: '甲醛释放量达 E0 级（中国 ENF 级），TVOC 仅为国家标准限值的六分之一。',
    },
    water: {
      title: '防水防潮',
      body: '吸水膨胀率仅 0.5%，在潮湿环境中使用不会膨胀变形。',
    },
    stability: {
      title: '尺寸稳定',
      body: '抗翘曲、尺寸稳定，长期使用不变形、不开裂。',
    },
    mould: {
      title: '防霉防虫',
      body: '通体无机材质，可抵抗霉变、虫蛀与腐蚀。',
    },
    radionuclides: {
      title: '低放射性',
      body: '放射性核素含量低于建材限值 70%。',
    },
    noise: {
      title: '降噪吸声',
      body: '纤维结构形成吸声体系，有效降低声音传递。',
    },
    screw: {
      title: '握钉力强',
      body: '握螺钉力达 1200N 以上，紧固效果堪比高密度实木。',
    },
    patents: {
      title: '自主专利',
      body: '十余项核心专利支撑工艺，打破长期存在的技术垄断。',
    },
    dimensions: {
      title: '尺寸可定制',
      body: '以 1220 × 2440 mm 标准板面为基础，厚度与规格均可按需定制。',
    },
  },

  enterpriseFigures: [
    { value: 'TOP 1', label: '全栈自主研发产品，中国首条生产线' },
    { value: '4.0', label: '工业 4.0 智能制造模式：效率更高，成本更低' },
    { value: '5×', label: 'TVOC 与甲醛释放量优于同业水平' },
    { value: '800 万', label: '年产能' },
    { value: '10+', label: '核心专利' },
    { value: '千亩', label: '智能制造与研发基地' },
  ],

  specifications: [
    { property: '产品类型', value: '岩矿纤维无机密度板（矿物纤维板）' },
    { property: '标准板面尺寸', value: '1220 mm × 2440 mm' },
    { property: '厚度范围', value: '4 – 18 mm' },
    { property: '纤维直径', value: 'Φ 4 µm' },
    { property: '熔融温度', value: '1450 ℃ 以上' },
    { property: '结合剂', value: '酚醛树脂共聚' },
    { property: '防火等级', value: 'A2 级不燃（GB/T 8624-2012）' },
    { property: '吸水膨胀率', value: '0.5%' },
    { property: '甲醛释放量', value: 'E0 级（中国 ENF 级）' },
    { property: 'TVOC', value: '国家标准限值的 1/6' },
    { property: '放射性核素', value: '低于限值 70%' },
    { property: '握螺钉力', value: '1200 N 以上' },
    { property: '刀具磨损（对比木质板材）', value: '降低 15%' },
    { property: '专利', value: 'CN117779342A 及十余项核心专利' },
  ],

  processStages: [
    {
      title: '原料与预处理',
      body: '以铁合金冶炼回收的矿渣等岩矿原料，在电炉中经 1450 ℃ 以上高温熔融为岩浆状态，并提取其中残余金属杂质。',
    },
    {
      title: '成纤与混合',
      body: '熔融岩浆通过离心机纤维化，制成 Φ 4 µm 矿物纤维，再与酚醛树脂共聚，锁定防火与低释放性能。',
    },
    {
      title: '成型与加工',
      body: '纤维与树脂的混合料经压实后，通过连续高温热压系统压制成 4–18 mm 板材，固化后由全智能数控设备完成裁切与防伪标识。',
    },
    {
      title: '包装与交付',
      body: '成品板材由智能仓储系统完成包装与存放，每批次均需抽样检验合格后方可发往客户。',
    },
  ],

  flow: [
    { label: '岩矿原料', detail: '电炉' },
    { label: '熔融矿液', detail: '1450 ℃' },
    { label: '矿物纤维', detail: 'Φ 4 µm，离心成纤' },
    { label: '纤维树脂混合料', detail: '酚醛树脂' },
    { label: '热压成型', detail: '连续高温热压' },
    { label: '成品板材', detail: '4 – 18 mm · 1220 × 2440 mm' },
  ],

  interiorApplications: [
    { title: '室内饰面板', body: '通高墙面饰面与造型墙板。' },
    { title: '柜体板材', body: '木作与定制储物的柜体与门板。' },
    { title: '地板', body: '干区与湿区的地板基材及成品地板。' },
    { title: '定制家具', body: '可在标准木工设备上加工的定制家具部件。' },
  ],

  publicApplications: {
    factory: {
      title: '工厂',
      body: '适用于工业与物流室内的耐用不燃饰面。',
    },
    hospital: {
      title: '医院',
      body: '低释放、防霉的表面材料，契合诊疗与护理环境。',
    },
    airport: {
      title: '机场',
      body: '适用于高人流交通枢纽的大幅面墙面与吊顶系统。',
    },
    school: {
      title: '学校',
      body: '安全耐用的木作与墙板，适用于教室与图书馆。',
    },
  },

  processingAdvantages: [
    {
      title: '加工适配性强',
      body: '岩矿板可锯切、开槽、钻孔、粘接，能够直接融入现有木作工序，适配各类设计与应用。',
    },
    {
      title: '防火性能卓越',
      body: 'A2 级防火等级，原料为无机材质，加工粉屑亦无火灾隐患——高层与高风险项目的稳妥之选。',
    },
    {
      title: '饰面适配全面',
      body: '可配套三聚氰胺纸、PET 膜、PU 漆、金属膜与数码打印等饰面。色卡样板由第三方供应商提供，如需更完整的资料请与我们联系。',
    },
    {
      title: '设计自由度高',
      body: '可选用标准花色，也可指定专属设计与定制尺寸。切割时刀具磨损较木质板材降低 15%，加工成本更低，切割浪费更少。',
    },
  ],

  finishes: [
    { name: '三聚氰胺纸', note: '木纹、石纹与纯色饰面' },
    { name: 'PET 膜', note: '高光与哑光表面' },
    { name: 'PU 漆', note: '喷涂工艺，颜色完全定制' },
    { name: '金属膜', note: '拉丝与镜面金属质感' },
    { name: '数码打印', note: '任意图案，直接打印于板面' },
  ],

  intellectualProperty: [
    {
      title: '发明专利 — 矿物纤维板生产',
      body: '涵盖高温熔融纤维化生产线的核心工艺专利。',
    },
    {
      title: '实用新型 — 矿物纤维板数据采集',
      body: '面向连续生产线的仪表配置与数据采集系统。',
    },
    {
      title: '实用新型 — 单筒气力输送系统',
      body: '用于原料段的物料输送装置。',
    },
    {
      title: '软件著作权 — 数字化能源管理系统',
      body: '覆盖全厂的能源与排放管理平台 V1.0。',
    },
  ],

  accreditation: [
    '自有研发实验室通过 CNAS 实验室能力认证',
    '拥有省级新材料研发技术中心',
    '积极参与多项国家标准的制定',
    '防火性能依据 GB/T 8624-2012 检测判定为 A2 级',
  ],
};
