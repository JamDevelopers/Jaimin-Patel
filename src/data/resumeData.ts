import { WorkExperience, EducationItem, SkillCategory, ProjectHighlight, DevelopedWebsite, GalleryAsset } from '../types';

export const PERSONAL_INFO = {
  name: "Jaimin R Patel",
  title: "Full-Stack Developer | API & Automation Specialist",
  subTitle: "Flutter + Laravel + Node.js | 10+ Yrs Exp in GST, Accounting, WhatsApp & Web/Mobile Apps",
  address: "23, Om Sai Row House, Opp Shrenik Residency, Vesu, Surat - 395007",
  city: "Surat, Gujarat, India",
  phone: "+91 8160763069",
  whatsapp: "918160763069",
  email: "jamdevelopersurat@gmail.com",
  github: "https://github.com/JamDevelopers",
  linkedin: "https://www.linkedin.com/in/jaiminpatelsurat/",
  facebook:"https://www.facebook.com/patel.jaimin.4249",
  instagram:"https://www.instagram.com/jaiminpatel4249",
  githubHandle: "JamDevelopers",
  linkedinHandle: "jaiminpatelsurat",
  tagline: "Flutter Developer | Problem Solver | Consistent Builder",
  yearsOfExperience: "10+",
  closingDeclaration: "Yours Faithfully,",
};

export const EXPERIENCES: WorkExperience[] = [
  {
    id: "jsm-infotech",
    company: "JSM INFOTECH SERVICES",
    location: "Ring Road, Surat",
    role: "Full-Stack Developer & Automation Lead",
    period: "2018 - 2026",
    yearsRange: "7 Years",
    summary: "Architected end-to-end enterprise systems including TaxPro GST eInvoicing, WhatsApp automation engines, Laravel/Node.js backend APIs, and production mobile applications in Flutter.",
    highlights: [
      "(2025 - 2026) Built Flutter Cross Platform with PHP API and AI configured for Production with Auto Entry Automations.",
      "(2024 - 2025) Android Application built in Flutter with PHP API configured for Production Unit, OMS (Order Management System), & Agencies.",
      "(2023 - 2024) WhatsApp API Laravel project integrated with Node.js microservice architecture.",
      "(2021 - 2023) Built a WhatsApp sending desktop application integrated with Soft Accounting Software (Adajan, Surat) & others.",
      "(2018 - 2021) Built-in API integrations with TaxPro API for eInvoice, eWaybill, GST Filing, SMS & Digital Token APIs."
    ],
    techStack: ["Flutter", "Dart", "Laravel", "Node.js", "PHP APIs", "TaxPro API", "WhatsApp API", "eInvoice / eWaybill", "Android Studio", "Automations"]
  },
  {
    id: "jsm-software",
    company: "JSM SOFTWARE SOLUTION",
    location: "Ring Road, Surat",
    role: "Software & Web Developer",
    period: "2016 - 2018",
    yearsRange: "2 Years",
    summary: "Engineered desktop accounting software for GST compliance and developed custom ASP.NET e-commerce portals with comprehensive bug resolution.",
    highlights: [
      "Worked with VB.NET Model architecture for desktop accounting tools.",
      "Built E-Commerce Websites on ASP.NET with full shopping cart & payment flow functionality.",
      "Conducted extensive VB.NET bug finding & structural analysis.",
      "Developed a desktop GST Accounting Application in VB.NET."
    ],
    techStack: ["VB.NET", "ASP.NET", ".NET Framework", "C#", "SQL Server", "GST Accounting", "E-Commerce"]
  },
  {
    id: "infoshield",
    company: "INFOSHIELD SOLUTION",
    location: "Adajan, Surat",
    role: "WordPress Web Developer & Analytics Lead",
    period: "2015 - 2016",
    yearsRange: "1 Year",
    summary: "Led web development team and delivered specialized CRM management systems for industrial clients alongside custom payment plugin integrations.",
    highlights: [
      "Worked with WordPress websites and built custom payment gateway integration plugins.",
      "Served as Team Manager leading 6 team members on complex client deliverables.",
      "Developed custom CRM Application for CNG & LPG Bottle Management System."
    ],
    techStack: ["WordPress", "PHP", "Payment Gateways", "CRM", "MySQL", "Team Leadership", "Web Analytics"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "bca",
    degree: "B.C.A (Bachelor Of Computer Application)",
    institution: "C.B Patel Computer College",
    location: "New Citylight Road, Surat",
    score: "62.57 %",
    passingYear: "2015",
    board: "Gujarat Board / Veer Narmad South Gujarat University"
  },
  {
    id: "12th",
    degree: "12th (Higher Secondary Certificate)",
    institution: "Sir J.J Gujarati Medium School",
    location: "Shahpore, Surat",
    score: "64 %",
    passingYear: "2011",
    board: "Gujarat Board (HSC)"
  },
  {
    id: "10th",
    degree: "10th (Secondary School Certificate)",
    institution: "Sir J.J Gujarati Medium School",
    location: "Shahpore, Surat",
    score: "57 %",
    passingYear: "2009",
    board: "Gujarat Board (SSC)"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "core-stack",
    title: "Full-Stack & Mobile",
    iconName: "Code2",
    skills: [
      { name: "Flutter", featured: true },
      { name: "Dart", featured: true },
      { name: "Node.js", featured: true },
      { name: "Laravel", featured: true },
      { name: "PHP APIs", featured: true },
      { name: "VB.NET", featured: true },
      { name: "ASP.NET / .NET Core" },
      { name: "C# / C++" },
      { name: "Java" },
      { name: "SQL / MySQL" },
      { name: "JavaScript / jQuery" },
      { name: "HTML5 / CSS3" }
    ]
  },
  {
    id: "automation-apis",
    title: "APIs & Automation",
    iconName: "Zap",
    skills: [
      { name: "WhatsApp API", featured: true },
      { name: "TaxPro API (eInvoice & GST)", featured: true },
      { name: "eWaybill & Digital Token APIs", featured: true },
      { name: "Payment Gateways Integration", featured: true },
      { name: "Puppeteer Sharp & WebScraper", featured: true },
      { name: "Selenium & WebView2",featured: true },
      { name: "SMS Gateways" },
      { name: "Postman API Testing" },
      { name: "AI Automation Scripts" },
      { name: "RESTful Web Services",featured: true }
    ]
  },
  {
    id: "cms-ecommerce",
    title: "CMS & E-Commerce",
    iconName: "ShoppingBag",
    skills: [
      { name: "WordPress Plugins & Themes", featured: true },
      { name: "WooCommerce" },
      { name: "Shopify",featured: true },
      { name: "Magento",featured: true },
      { name: "OpenCart" },
      { name: "PrestaShop"},
      { name: "Joomla" },
      { name: "Drupal",featured: true }
    ]
  },
  {
    id: "ai-assistants",
    title: "AI Coding Assistants & Tools",
    iconName: "Bot",
    skills: [
      { name: "ChatGPT & Codex", featured: true },
      { name: "Claude Code & Cursor", featured: true },
      { name: "GitHub Copilot", featured: true },
      { name: "Gemini CLI", featured: true },
      { name: "FreeBuff CLI" },
      { name: "NotebookLM" },
      { name: "HiggsField" },
      { name: "Google AI Studio",featured: true },
      { name: "Manus & Notion AI" },
      { name: "Git & PlayStore Console",featured: true }
    ]
  },
  {
    id: "marketing-analytics",
    title: "Marketing & Utilities",
    iconName: "TrendingUp",
    skills: [
      { name: "SEO & Keyword Ranking", featured: true},
      { name: "Digital Marketing & Google Ads" },
      { name: "SMO / SMM",featured: true },
      { name: "Content Writing" },
      { name: "Crystal Reports",featured: true },
      { name: "Android Studio" },
      { name: "QA Testing & Debugging",featured: true }
    ]
  }
];

export const PROJECT_HIGHLIGHTS: ProjectHighlight[] = [
  {
    id: "taxpro-gst",
    title: "GST eInvoice & eWaybill API Suite",
    category: "Government & Tax Automation",
    tagline: "Govt-Compliant GST eInvoicing, IRN Generation & Digital Token Authentication Engine",
    description: "End-to-end tax compliance software integrating TaxPro APIs for instant eInvoicing, eWaybill creation, GST return filing, automated SMS alerts, and Digital Token security signatures.",
    impact: "Automated tax billing for 100+ accounting & manufacturing firms across Gujarat with 100% GSP compliance.",
    tech: ["TaxPro API", "VB.NET", "C#", "JSON REST", "Digital Tokens", "SQL Server", "PDF Generator"],
    icon: "Receipt",
    metrics: [
      { label: "Tax Clients Served", value: "100+" },
      { label: "eInvoices Generated", value: "250K+" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Sync Speed", value: "< 1.2s" }
    ],
    architecture: [
      { title: "Billing Software Trigger", description: "ERP / Soft Accounting emits invoice payload upon sale approval", badge: "Source" },
      { title: "JSON Schema Validator & Token Signer", description: "Formats invoice to GST NSDL/NIC schema & signs with USB DSC Token", badge: "Core Engine" },
      { title: "TaxPro GSP Gateway Sync", description: "Encrypts & transmits payload to TaxPro API endpoint via REST", badge: "GSP Gateway" },
      { title: "IRN & QR Code Injection", description: "Receives 64-character IRN, Signed QR, & eWaybill number to print on Tax Invoice", badge: "Output" }
    ],
    features: [
      { name: "Instant IRN Generation", description: "Real-time Tax Invoice Registration Number fetch directly from NIC Govt server.", tag: "API Engine" },
      { name: "Automated eWaybill Creation", description: "Auto-populates transport vehicle details & distance route calculations.", tag: "Logistics" },
      { name: "USB Digital Token Signature", description: "Direct hardware token integration for tamper-proof digital signing.", tag: "Security" },
      { name: "Batch GST Reconciliation", description: "One-click GSTR-1 & GSTR-3B data import and tax liability calculation.", tag: "Filing" }
    ],
    demoType: "taxpro",
    imageUrl: "/assets/gallery-13.png",
    galleryImages: [
      "/assets/gallery-13.png",
      "/assets/gallery-11.png",
      "/assets/gallery-12.png"
    ]
  },
  {
    id: "whatsapp-crm",
    title: "WhatsApp Multi-Channel Messaging Engine",
    category: "Desktop & Cloud Automation",
    tagline: "High-Volume Automated WhatsApp Dispatcher & ERP Notification Gateway",
    description: "Desktop automation suite and Laravel/Node.js cloud backend for automated WhatsApp message dispatching, ledger sharing, and PDF invoice dispatch synchronized with Soft Accounting Software.",
    impact: "Dispatched over 500,000+ automated invoices, ledgers, and payment reminders with 98%+ delivery rate.",
    tech: ["WhatsApp API", "Laravel", "Node.js", "VB.NET", "Puppeteer", "MySQL", "Redis Queue"],
    icon: "MessageSquare",
    metrics: [
      { label: "Messages Sent", value: "500,000+" },
      { label: "Delivery Rate", value: "98.8%" },
      { label: "Time Saved/Day", value: "3.5 Hrs" },
      { label: "ERP Integrations", value: "5+ Systems" }
    ],
    architecture: [
      { title: "ERP Event Listener", description: "Soft Accounting emits trigger on payment due, invoice creation, or ledger request", badge: "Trigger" },
      { title: "Node.js Queue Handler", description: "Redis backed queue manages rate limits & retry policies for bulk dispatching", badge: "Queue Engine" },
      { title: "WhatsApp Cloud Gateway", description: "Connects via official WhatsApp Business API & WebView2 Session Session Engine", badge: "Gateway" },
      { title: "Delivery Confirmation & Webhook", description: "Logs sent, delivered, & read receipts back to accounting database", badge: "Analytics" }
    ],
    features: [
      { name: "PDF Ledger & Invoice Auto-Attach", description: "Generates customer ledger statement PDF on the fly and attaches to WhatsApp message.", tag: "Automation" },
      { name: "Multi-Session Session Switcher", description: "Supports multiple WhatsApp Business phone numbers with auto-failover.", tag: "Reliability" },
      { name: "Custom Template Variable Engine", description: "Replaces variables like {{CustomerName}}, {{InvoiceNo}}, {{AmountDue}} dynamically.", tag: "Messaging" },
      { name: "Automated Payment Reminders", description: "Schedules automated gentle payment reminders 3 days before and on due date.", tag: "Finance" }
    ],
    demoType: "whatsapp",
    imageUrl: "/assets/gallery-16.png",
    galleryImages: [
      "/assets/gallery-16.png",
      "/assets/gallery-17.png",
      "/assets/gallery-12.png"
    ]
  },
  {
    id: "flutter-oms",
    title: "Flutter Production OMS & Android App",
    category: "Mobile Application",
    tagline: "Cross-Platform Enterprise Order Management System for Textile & Manufacturing Units",
    description: "Production-grade Android application built in Flutter with PHP REST API backend tailored for manufacturing plants, Order Management Systems (OMS), and wholesale agencies.",
    impact: "Streamlined order creation to delivery workflow for 50+ sales representatives & agencies.",
    tech: ["Flutter", "Dart", "PHP REST APIs", "Android Studio", "MySQL", "PlayStore", "Provider / Riverpod"],
    icon: "Smartphone",
    metrics: [
      { label: "Active Field Users", value: "250+" },
      { label: "Orders Processed", value: "45,000+" },
      { label: "Offline Sync Speed", value: "< 2s" },
      { label: "Crash-Free Rate", value: "99.4%" }
    ],
    architecture: [
      { title: "Flutter Mobile Frontend", description: "Reactive Flutter UI with dark/light mode and offline SQLite caching", badge: "Mobile App" },
      { title: "PHP REST API Layer", description: "JWT authenticated PHP endpoints for catalogue, cart, and order lifecycle", badge: "API Server" },
      { title: "Manufacturing Floor OMS", description: "Production status pipeline tracking (Raw Material -> Loom -> Dyeing -> Packing)", badge: "Backend ERP" },
      { title: "Agency Portal & Alerts", description: "Push notifications via Firebase FMC for order dispatch & dispatch tracking", badge: "Notifications" }
    ],
    features: [
      { name: "Offline-First Order Drafts", description: "Sales agents can place orders in remote areas without internet; syncs automatically.", tag: "Offline UX" },
      { name: "Live Production Status Tracker", description: "Visual progress bar showing fabric weaving, dyeing, packing, and dispatch stage.", tag: "Factory OMS" },
      { name: "Custom Rate Cards per Agency", description: "Dynamic pricing calculator based on agency tier, volume discounts, and GST tax.", tag: "Pricing" },
      { name: "PDF Dispatch Note Generator", description: "One-tap generation and sharing of transport delivery receipts via WhatsApp/Email.", tag: "Docs" }
    ],
    demoType: "flutter",
    imageUrl: "/assets/gallery-10.jpeg",
    galleryImages: [
      "/assets/gallery-10.jpeg",
      "/assets/gallery-9.jpeg",
      "/assets/gallery-8.jpeg"
    ]
  },
  {
    id: "cng-lpg-crm",
    title: "CNG & LPG Cylinder Logistics CRM",
    category: "Industrial Web Portal",
    tagline: "Industrial Cylinder Inventory, Deposit Management & Logistics Distribution Portal",
    description: "Custom web CRM and logistics portal for industrial gas suppliers, tracking bottle deposits, cylinder refilling turnarounds, customer accounts, and online invoice payments.",
    impact: "Architected and managed by a 6-developer team for regional gas cylinder distribution.",
    tech: ["WordPress", "PHP", "MySQL", "Razorpay / CCAvenue", "CRM Analytics", "jQuery", "Bootstrap"],
    icon: "Flame",
    metrics: [
      { label: "Cylinders Tracked", value: "15,000+" },
      { label: "Refill Cycles", value: "120K+" },
      { label: "Team Members Led", value: "6 Devs" },
      { label: "Payment Success", value: "99.1%" }
    ],
    architecture: [
      { title: "Gas Distributor Portal", description: "Web console for managing cylinder serial numbers & customer security deposits", badge: "Dashboard" },
      { title: "Barcoding & Logistics App", description: "Scans cylinder QR/barcodes at filling station & distribution trucks", badge: "Field App" },
      { title: "Payment Gateway Sync", description: "Automated online deposit refund & refill payment collection via CCAvenue/Razorpay", badge: "Payments" },
      { title: "Refill Warning Engine", description: "Calculates customer gas consumption burn rates & prompts scheduled refills", badge: "AI Analytics" }
    ],
    features: [
      { name: "Cylinder Serial Barcode Tracking", description: "Tracks individual gas cylinder lifecycle from safety testing to refilling.", tag: "Inventory" },
      { name: "Security Deposit Management", description: "Automatic tracking of bottle holding fees, deposit receipts, and refund claims.", tag: "Accounting" },
      { name: "Custom Payment Gateway Plugin", description: "Bespoke PHP payment plugin supporting net banking, UPI, and card payments.", tag: "Fintech" },
      { name: "Refill Due Date Predictor", description: "Predictive engine calculating next cylinder delivery date based on usage trends.", tag: "Logistics" }
    ],
    demoType: "crm",
    imageUrl: "/assets/gallery-6.jpeg",
    galleryImages: [
      "/assets/gallery-6.jpeg",
      "/assets/gallery-7.jpeg",
      "/assets/gallery-8.jpeg"
    ]
  },
  {
    id: "profitmaker-share-market",
    title: "ProfitMaker Share Market Tips Platform",
    category: "Fintech Web Portal",
    tagline: "Real-Time Stock Market Tips, Trading Signals & Investor Intelligence Platform",
    description: "Custom web platform for providing stock market tips, trading calls, investment insights, subscription plans, performance tracking, and member-based access to market recommendations.",
    impact: "Designed and developed a scalable investor platform for delivering paid and premium share market tips with automated subscriber management and performance analytics.",
    tech: [
      "Firebase",
      "Flutter",
      "REST API",
      "Payment Gateway",
      "Reports Analytics",
      "Subscription Management"
    ],
    icon: "TrendingUp",
    metrics: [
      { label: "Market Calls", value: "10K+" },
      { label: "Subscribers", value: "5K+" },
      { label: "Trading Categories", value: "25+" },
      { label: "Payment Success", value: "99%+" }
    ],
    architecture: [
      {
        title: "Investor Dashboard",
        description: "Personalized dashboard showing active tips, trading signals, subscription status, call history and market performance.",
        badge: "Dashboard"
      },
      {
        title: "Trading Tips Engine",
        description: "Central system for publishing BUY, SELL, TARGET and STOP LOSS recommendations across multiple market segments.",
        badge: "Market Tips"
      },
      {
        title: "Subscription & Payment Portal",
        description: "Manages premium membership plans, online payments, renewals and automated subscriber access.",
        badge: "Payments"
      },
      {
        title: "Performance Analytics",
        description: "Tracks historical calls, target achievements, stop losses and overall tip performance for transparent reporting.",
        badge: "Analytics"
      }
    ],
    features: [
      {
        name: "Live Share Market Tips",
        description: "Publishes actionable BUY, SELL, TARGET and STOP LOSS recommendations with entry price and trading timeframe.",
        tag: "Trading"
      },
      {
        name: "Premium Subscription Plans",
        description: "Creates multiple paid membership plans with controlled access to premium market calls and investment research.",
        tag: "Subscription"
      },
      {
        name: "Call Performance Tracking",
        description: "Automatically records completed calls and calculates target hits, stop losses and historical performance.",
        tag: "Analytics"
      },
      {
        name: "Online Payment Integration",
        description: "Integrated secure payment processing for purchasing and renewing premium market-tip subscriptions.",
        tag: "Fintech"
      },
      {
        name: "Member CRM",
        description: "Manages investors, subscriptions, renewals, communication history and account activity from a centralized CRM.",
        tag: "CRM"
      },
      {
        name: "Market Segment Management",
        description: "Supports configurable categories such as Intraday, Equity, Futures, Options and positional trading calls.",
        tag: "Management"
      }
    ],
    demoType: "crm",
    imageUrl: "/assets/gallery-14.png",
    galleryImages: [
      "/assets/gallery-14.png",
      "/assets/gallery-15.png",
      "/assets/gallery-18.png"
    ]
  }
];

export const AI_CODING_ASSISTANTS = [
  "ChatGPT", "Codex", "GitHub Copilot", "Claude Code", "Cursor",
  "Gemini CLI", "FreeBuff CLI", "NotebookLM", "HiggsField", 
  "Git", "Manus", "AI Studio", "Grock", "Vercel", "Notion"
];

export const DEVELOPED_WEBSITES: DevelopedWebsite[] = [
  {
    id: "uphotoshoot-studio",
    title: "U Photoshoot Digital Studio",
    tagline: "Surat's Premier Photography Studio, Portfolio & Google Search Optimization",
    category: "Studio & Photography SEO",
    client: "U Photoshoot Digital Studio",
    period: "2021 - Present",
    developedBy: "Jaimin R Patel (JAM Developers)",
    liveUrlOrLocation: "Adajan & Pal Gam, Surat, Gujarat",
    summary: "Complete digital presence, high-performance portfolio showcase, and Google Local SEO strategy for Surat's top photography studio specializing in newborn, wedding, maternity, and birthday photoshoots.",
    techStack: ["WordPress", "Local SEO & Keyword Ranking", "Google Business Profile", "Instagram API", "Responsive CSS3", "WhatsApp Booking"],
    keyHighlights: [
      "Ranked #1 on Google for keywords 'uphotoshoot', 'Best Photography in Surat', and 'Newborn/Maternity Studio Near Me'.",
      "Integrated 4.9★ Google Business Profile rating with 371+ verified customer reviews.",
      "High-speed image showcase gallery for Maternity, Pre-Wedding, Baby, and Event Photography.",
      "Direct 1-tap WhatsApp booking flow for fast client consultation and calendar booking."
    ],
    metrics: [
      { label: "Google Rating", value: "4.9 ★ (371+)" },
      { label: "Instagram Fans", value: "5K+ Followers" },
      { label: "Search Ranking", value: "Page 1 Top" },
      { label: "Inquiry Growth", value: "+320%" }
    ],
    accentColor: "from-rose-500 to-amber-500",
    bgGradient: "bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950",
    websiteType: "seo_portfolio",
    mainImage: "/assets/gallery-3.jpeg",
    galleryImages: [
      "/assets/gallery-3.jpeg",
    ],
    mockupDetails: {
      heroHeading: "U Photoshoot Digital Studio",
      subHeading: "Best Photography | Newborn | Wedding, Maternity, Birthday Photoshoots Studio in Surat",
      badges: ["4.9 ★ Top Rated", "Google #1 Rank", "Surat, Gujarat", "5K+ Community"],
      sections: [
        { title: "Google Search Dominance", desc: "Top SERP ranking for Surat photography searches with rich snippet knowledge panel.", icon: "Search" },
        { title: "Portfolio Categories", desc: "High-resolution photo galleries for Pre-Wedding, Baby Shower, Newborn, and Events.", icon: "Camera" },
        { title: "Client Booking Hotline", desc: "Direct phone and WhatsApp instant inquiry integration with location directions.", icon: "Phone" }
      ],
      footerCredit: "Shop No B 14, Monarch Pal, Gaurav Path Road, Adajan, Pal Gam, Surat 395009",
      stats: [
        { label: "Rating", val: "4.9/5.0" },
        { label: "Google Reviews", val: "371+" },
        { label: "Weddings Shot", val: "30+ Year" }
      ]
    }
  },
  {
    id: "godfatherr-solutions",
    title: "Godfatherr Solutions Web Platform",
    tagline: "Global Digital Marketing, Lead Generation, E-Commerce & Web Development Agency",
    category: "Agency & E-Commerce Web",
    client: "Godfatherr Solutions",
    period: "2020 - 2024",
    developedBy: "Jaimin R Patel (Lead Developer)",
    liveUrlOrLocation: "Global / Worldwide Agency Portal",
    summary: "High-impact corporate web platform for a global agency offering end-to-end digital business solutions: E-Commerce, SEO, SMM, Lead Generation, and Custom CMS systems.",
    techStack: ["WordPress", "Colibri / PHP", "WooCommerce", "Lead Generation CRM", "jQuery", "Payment Gateway", "SEO / SMM"],
    keyHighlights: [
      "Hero presentation: 'Do Your Business Worldwide, Get Customers From World, Get Best Business Experience'.",
      "Interactive multi-service modules: Lead Generation, Web Development, Email Marketing, Customer Contact, CMS & E-Commerce.",
      "Integrated client testimonials slider featuring international business executives.",
      "Social media integration and rapid response lead capture funnel with 1-business-day turnaround guarantee."
    ],
    metrics: [
      { label: "Client Retain", value: "95%+" },
      { label: "Service Modules", value: "6 Core Verticals" },
      { label: "Response Time", value: "< 24 Hrs" },
      { label: "Global Reach", value: "10+ Countries" }
    ],
    accentColor: "from-sky-500 to-indigo-500",
    bgGradient: "bg-gradient-to-br from-sky-950/40 via-slate-900 to-slate-950",
    websiteType: "agency_ecommerce",
    mainImage: "/assets/gallery-4.jpeg",
    galleryImages: [    
      "/assets/gallery-4.jpeg",
    ],
    mockupDetails: {
      heroHeading: "DO YOUR BUSINESS WORLDWIDE ON WWW",
      subHeading: "Get Customers From World, Get Best Business Experience With Godfatherr Solutions",
      badges: ["Global Provider", "E-Commerce Suite", "Lead Generation", "Digital Marketing"],
      sections: [
        { title: "Discover Our Expertise", desc: "Expertise in Search Engine Optimization, Lead Gen, SMM and Web Development.", icon: "Sparkles" },
        { title: "Full Range Marketing", desc: "Better visibility in world of internet, high retention rate, and affordable pricing.", icon: "TrendingUp" },
        { title: "Client Testimonials", desc: "Proven track record with worldwide clients (Roland Schoettle, Tracey Awere, etc.)", icon: "Users" }
      ],
      footerCredit: "© 2024 GodFatherr Solutions. Created using WordPress & Custom PHP Architecture",
      stats: [
        { label: "Expertise", val: "SEO & SMM" },
        { label: "Turnaround", val: "1-Day SLA" },
        { label: "E-Commerce", val: "Multi-Store" }
      ]
    }
  },
  {
    id: "cng-point",
    title: "CNG POINT Web Platform",
    tagline: "Let's Make Our City Clean, Green & Safe — CNG Conversion & Hydro Testing Facility",
    category: "Green Energy & Automotive Portal",
    client: "M/s CNG POINT (Tripura)",
    period: "2017 - Present",
    developedBy: "Infoshield Solutions (Jaimin R Patel)",
    liveUrlOrLocation: "Agartala, Tripura, North-East India",
    summary: "Official web portal and interactive fuel savings calculator for Tripura's premier PESO-approved Periodical CNG Cylinder Testing & Automotive Conversion Center.",
    techStack: ["PHP", "JavaScript", "Custom Savings Engine", "Bootstrap", "HTML5 / CSS3", "PESO Standards"],
    keyHighlights: [
      "Custom 'Check Your Monthly Saving With CNG and Petrol' interactive calculator engine.",
      "PESO Govt. of India approved Periodical CNG Cylinder Hydro Testing Facility specifications.",
      "Detailed automotive conversion guide: Gasoline Electro Valve, Reducer CN-04, Reducer TN1.",
      "Dual branch directory with direct contact: Reshambagan Office & Budhjunanagar TSR Camp Plant."
    ],
    metrics: [
      { label: "Vehicles Converted", value: "5,000+ Nos" },
      { label: "Fuel Savings", value: "> 50% vs Petrol" },
      { label: "PESO Approval", value: "Govt. of India" },
      { label: "State Region", value: "Tripura NE" }
    ],
    accentColor: "from-emerald-500 to-teal-500",
    bgGradient: "bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950",
    websiteType: "cng_energy",
    mainImage: "/assets/gallery-5.jpeg",
    galleryImages: [
      "/assets/gallery-5.jpeg",
    ],
    mockupDetails: {
      heroHeading: "LETS MAKE OUR CITY CLEAN, GREEN & SAFE",
      subHeading: "We are Green Society Heroes — PESO Govt. Approved CNG Conversion & Periodical Cylinder Hydro Testing",
      badges: ["Green Society Heroes", "PESO Approved", "5000+ Vehicles", "Hydro Testing Lab"],
      sections: [
        { title: "CNG Conversion Centre", desc: "Equipped with advanced Gasoline Electro Valve, CN-04 and TN1 Reducers for cars & 3-wheelers.", icon: "Zap" },
        { title: "Hydro Testing Facility", desc: "First periodical CNG Cylinder testing unit in North East India approved by PESO, GOVT OF INDIA.", icon: "ShieldCheck" },
        { title: "Monthly Savings Calculator", desc: "Interactive tool showing monthly fuel budget comparison between Petrol and CNG.", icon: "Calculator" }
      ],
      footerCredit: "Design and coding by Infoshield Solutions • Kashipur & Budhjunanagar, Agartala, Tripura",
      stats: [
        { label: "PESO Cert", val: "Govt. Approved" },
        { label: "Conversions", val: "5000+ Autos" },
        { label: "Testing Lab", val: "1st in NE" }
      ]
    }
  },
  {
    id: "clean-fuel-projects",
    title: "Clean Fuel Projects (Safe Society)",
    tagline: "PESO CNG/LPG/Hydrogen Cylinder Testing & Online Certificate Verification Portal",
    category: "Safety & Online Certificate Portal",
    client: "Clean Fuel Projects (CFP)",
    period: "2014 - Present",
    developedBy: "Infoshield Solutions (Jaimin R Patel)",
    liveUrlOrLocation: "Surat, Rajkot & Ankleshwar, Gujarat",
    summary: "Pioneering online verification portal for cylinder testing certificates (for RTO, insurance officers, and filling stations) plus industrial SS 316 fittings and spare parts distribution.",
    techStack: ["PHP", "MySQL", "Online Verification Engine", "Bootstrap", "jQuery", "PESO Rules 2016"],
    keyHighlights: [
      "Online Certificate Verification Engine: Step-by-step guide for RTO officers, Insurance inspectors, and gas station attendants to verify cylinder fitness directly on the web.",
      "Multi-Plant Operations: Surat CTF Division (Barbodhan), Rajkot CTF Division (Aniyala), and Ankleshwar GIDC Plant.",
      "Industrial SS 316 Tube Fittings Catalog (1\", 3/4\", 5/8\", 1/2\", 3/8\", 1/4\", 1/8\") and dispenser parts.",
      "CNG Cascade retesting protocol & safety standards alignment with Petroleum & Explosives Safety Organization."
    ],
    metrics: [
      { label: "Certificates Verified", value: "50,000+" },
      { label: "Active Plants", value: "3 Major Divisions" },
      { label: "ISO & URS Cert", value: "ISO 9001:2015" },
      { label: "Safety Standard", value: "PESO Rule 2016" }
    ],
    accentColor: "from-amber-500 to-orange-500",
    bgGradient: "bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950",
    websiteType: "gas_safety",
    mainImage: "/assets/gallery-6.jpeg",
    galleryImages: [
      "/assets/gallery-6.jpeg"
    ],
    mockupDetails: {
      heroHeading: "SAFE SOCIETY — CNG, LPG & HYDROGEN CYLINDER TESTING",
      subHeading: "Our mission is to provide safety to CNG Stations and to CNG & Hydrogen cylinders through certified testing.",
      badges: ["Safe Society", "Online Certificate Check", "3 Plant Divisions", "SS 316 Spares"],
      sections: [
        { title: "Online Certificate Portal", desc: "Instant online search for Gas Cylinder Rules 2016 certificates for RTO & insurance agents.", icon: "FileCheck" },
        { title: "Testing Services", desc: "CNG, LPG & Hydrogen cylinder testing, cascade retesting, and spare parts supply.", icon: "Shield" },
        { title: "SS 316 Fittings Catalog", desc: "Comprehensive supply of corrosion-resistant SS 316 double ferrule tube fittings.", icon: "Wrench" }
      ],
      footerCredit: "DEVELOPED BY INFOSHIELD SOLUTIONS • Surat, Rajkot, Ankleshwar (Chief Controller of Explosives Approved)",
      stats: [
        { label: "PESO CCOE", val: "Approved Lab" },
        { label: "Divisions", val: "Surat/Rajkot/Ankleshwar" },
        { label: "Fittings", val: "SS 316 Grade" }
      ]
    }
  },
  {
    id: "original-fuel-system",
    title: "Original Fuel System Pvt. Ltd.",
    tagline: "Eco-Friendly E-Rickshaw Manufacturing, CNG/LPG/H2 Cylinders & Computerized PUC Portal",
    category: "Eco-Mobility & Automotive Web",
    client: "Original Fuel System Pvt. Ltd.",
    period: "2016 - Present",
    developedBy: "Infoshield Solutions (Jaimin R Patel)",
    liveUrlOrLocation: "Narol-Vishala Rd Ahmedabad & Nadiad, Gujarat",
    summary: "Comprehensive corporate website featuring eco-friendly electric vehicles (Passenger E-Rickshaw, Cargo Carrier, Municipality Waste collection), Lovato & Tomasetto Achille CNG kits, and computerized PUC testing centers.",
    techStack: ["PHP", "JavaScript", "HTML5 / CSS3", "Bootstrap", "PUC Center Network", "Vehicle Showcase"],
    keyHighlights: [
      "Eco-Friendly E-Rickshaw Showcase: Passenger vehicle, Cargo good carrier, Eco Safari, and Municipal waste collector.",
      "Computerized PUC Center module: Emission testing protocols across Petrol, CNG, Diesel, and LPG.",
      "Lovato & Tomasetto Achille CNG kit dealer portal detailing 50%+ fuel expense savings.",
      "Ground clearance kit catalog for suspension damping and multi-branch network across Ahmedabad and Anand."
    ],
    metrics: [
      { label: "E-Rickshaws Built", value: "1,500+" },
      { label: "Govt. Registered", value: "RoC Ahmedabad" },
      { label: "PUC Tests Done", value: "25,000+" },
      { label: "CNG Brands", value: "Lovato & Tomasetto" }
    ],
    accentColor: "from-blue-600 to-indigo-600",
    bgGradient: "bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950",
    websiteType: "eco_automotive",
    mainImage: "/assets/gallery-7.jpeg",
    galleryImages: [
      "/assets/gallery-7.jpeg",
    ],
    mockupDetails: {
      heroHeading: "ECO FRIENDLY E-RICKSHAW & GAS CYLINDER SYSTEMS",
      subHeading: "Original Fuel System Pvt. Ltd. — Passenger Vehicle, Cargo Good Carrier, Municipal Waste & CNG Systems",
      badges: ["Eco-Friendly E-Rickshaw", "Computerized PUC", "Lovato & Tomasetto", "Ahmedabad Factory"],
      sections: [
        { title: "Electric Mobility Vehicles", desc: "Robust E-Rickshaws for passenger transport, cargo delivery, eco safaris and city sanitation.", icon: "Zap" },
        { title: "Computerized PUC Center", desc: "Automated emission inspection center for Petrol > CNG > Diesel > LPG engines.", icon: "CheckCircle" },
        { title: "Lovato & Tomasetto Achille Kits", desc: "Authorised kit fitment saving over 50% fuel cost compared to conventional petrol.", icon: "Award" }
      ],
      footerCredit: "Developed by Infoshield Solutions • Narol-Vishala Rd & Piplaj Factory, Ahmedabad",
      stats: [
        { label: "Inc. Year", val: "Since 2012" },
        { label: "Kit Savings", val: "> 50% Fuel" },
        { label: "PUC Types", val: "Petrol/CNG/Diesel" }
      ]
    }
  }
];

export const GALLERY_ASSETS: GalleryAsset[] = [
  {
    id: "gallery-1",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-1.png",
    title: "ProfitMaker — Share Market Tips & Calls App",
    category: "Flutter Application",
    associatedSiteId: "profitmaker-flutter",
    caption: "Real-time stock market recommendation mobile application built in Flutter with live call notifications, target/stop-loss tracking, and market analytics."
  },
  {
    id: "gallery-2",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-2.png",
    title: "JSM App — Accounting & Financial Reporting",
    category: "Flutter Application",
    associatedSiteId: "jsm-app",
    caption: "Enterprise accounting and reporting mobile application in Flutter for balance sheets, ledger statements, receivables, and real-time business metrics."
  },
  {
    id: "gallery-3",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-3.jpeg",
    title: "U Photoshoot Digital Studio — Google Search #1 & Local SEO",
    category: "SEO & Digital Marketing",
    associatedSiteId: "uphotoshoot-studio",
    caption: "Top #1 Google SERP ranking, 4.9★ (371+ verified reviews), and Google Business Profile optimization for Surat's premier photography studio."
  },
  {
    id: "gallery-4",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-4.jpeg",
    title: "Godfatherr Solutions — Global Web & Agency Portal",
    category: "Websites & Portals",
    associatedSiteId: "godfatherr-solutions",
    caption: "Worldwide business solutions website with digital marketing services, custom web development, lead generation workflows, and client case studies."
  },
  {
    id: "gallery-5",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-5.jpeg",
    title: "CNG POINT — Green Society Heroes & Conversion Portal",
    category: "Websites & Portals",
    associatedSiteId: "cng-point",
    caption: "Official web portal for PESO-approved CNG cylinder testing facility, conversion center, and interactive fuel savings calculator."
  },
  {
    id: "gallery-6",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-6.jpeg",
    title: "Clean Fuel Projects — Safe Society & Hydro Testing",
    category: "Websites & Portals",
    associatedSiteId: "clean-fuel-projects",
    caption: "Online cylinder testing verification portal, safety compliance database for RTO/insurance, and industrial SS 316 fittings catalog."
  },
  {
    id: "gallery-7",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-7.jpeg",
    title: "Original Fuel System — Eco-Friendly E-Rickshaw & Gas Systems",
    category: "Websites & Portals",
    associatedSiteId: "original-fuel-system",
    caption: "Electric mobility platform showcasing passenger e-rickshaws, cargo loaders, municipal waste vehicles, and computerized PUC testing center."
  },
  {
    id: "gallery-8",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-8.jpeg",
    title: "JSM Software — GST Compliance & New Update Blogs",
    category: "Websites & Portals",
    associatedSiteId: "jsm-blogs",
    caption: "Official knowledge base and blog portal covering statutory GST notifications, e-Waybill rules, software feature releases, and accounting guides."
  },
  {
    id: "gallery-9",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-9.jpeg",
    title: "Short Film Mantra — Film Submission & Festival Platform",
    category: "Websites & Portals",
    associatedSiteId: "short-film-mantra",
    caption: "Online film festival entry portal for independent filmmakers, video submissions, jury review workflows, and festival awards showcase."
  },
  {
    id: "gallery-10",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-10.jpeg",
    title: "Vardan Coco Room — Inquiry & Bulk Order Portal",
    category: "Websites & Portals",
    associatedSiteId: "vardan-coco-room",
    caption: "Agricultural coco peat product showcase, substrate bulk order quoting system, and commercial inquiry management pipeline."
  },
  {
    id: "gallery-11",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-11.png",
    title: "WhatsApp Desktop Application — Invoicing & Dispatch",
    category: "Desktop Applications",
    associatedSiteId: "whatsapp-desktop",
    caption: "Desktop automation application for sending ERP tax invoices, outstanding payment alerts, and account statements directly to clients via WhatsApp."
  },
  {
    id: "gallery-12",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-12.png",
    title: "CTF Billing — Industrial Gas & Cylinder Desktop Application",
    category: "Desktop Applications",
    associatedSiteId: "ctf-billing",
    caption: "Custom desktop billing software designed for CNG/LPG hydro testing stations with PESO-compliant invoicing and customer record management."
  },
  {
    id: "gallery-13",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-13.png",
    title: "e-Way / e-Invoice Utility — GST Desktop Application",
    category: "Desktop Applications",
    associatedSiteId: "eway-einvoice-utility",
    caption: "Direct GST portal integration desktop tool generating IRN QR codes, JSON payloads, NIC e-Way bills, and USB digital token signing."
  },
  {
    id: "gallery-14",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-14.png",
    title: "DCDF Trust — Non-Profit Foundation Website",
    category: "Websites & Portals",
    associatedSiteId: "dcdf-trust",
    caption: "Charitable trust portal with donor engagement, social welfare activity highlights, news updates, and volunteer registration."
  },
  {
    id: "gallery-15",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-15.png",
    title: "JSM App Intro — Mobile Accounting App Landing Website",
    category: "Websites & Portals",
    associatedSiteId: "jsm-app-intro",
    caption: "Feature walkthrough landing page demonstrating JSM's real-time mobile ERP synchronization, financial dashboards, and download links."
  },
  {
    id: "gallery-16",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-16.png",
    title: "WhatsApp API Manager — Cloud Management Website",
    category: "Websites & Portals",
    associatedSiteId: "whatsapp-api-manage",
    caption: "Cloud dashboard for configuring WhatsApp business templates, monitoring outbound delivery logs, quota management, and webhook routing."
  },
  {
    id: "gallery-17",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-17.png",
    title: "Showcase Hub — Catalogue Manager",
    category: "Catalogue Manager",
    associatedSiteId: "showcase-hub",
    caption: "Interactive digital product catalog management system with category filtering, instant price list downloads, and inquiry cart builder."
  },
  {
    id: "gallery-18",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-18.png",
    title: "JSM Software — Official Company Website",
    category: "Websites & Portals",
    associatedSiteId: "jsm-website",
    caption: "Corporate software company portal highlighting enterprise ERP solutions, TaxPro GST modules, client testimonials, and pricing."
  },
  {
    id: "gallery-19",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-19.png",
    title: "Simple Count — POS Application",
    category: "POS & Retail",
    associatedSiteId: "simple-count-pos",
    caption: "Fast touch-screen point of sale system with barcode scanning, instant thermal receipt printing, daily cash register closing, and stock tracking."
  },
  {
    id: "gallery-20",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-20.png",
    title: "CNG Fabrication — Desktop Application",
    category: "Desktop Applications",
    associatedSiteId: "cng-fabrication",
    caption: "Specialized desktop application for tracking cylinder hydro testing inspection cycles, hydrostatic stretch data, and PESO certificate printing."
  },
  {
    id: "gallery-21",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-21.png",
    title: "Digital Products — Selling",
    category: "Websites & Portals",
    associatedSiteId: "digital-products",
    caption: "digital products include all-in-one storefront platforms & custome pricing."
  },
  {
    id: "gallery-22",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-22.png",
    title: "Task Flow — Perfect for local service providers",
    category: "Websites & Portals",
    associatedSiteId: "task-flow",
    caption: "TaskFlow helps service businesses manage jobs, attendance, technicians, customer updates, and billing in one place.."
  },
  {
    id: "gallery-23",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-23.png",
    title: "Flutex — All In One Business Compainer",
    category: "Flutter Application",
    associatedSiteId: "flutex-flutter",
    caption: "Manage Supplier Orders,Payments , Outstanding , Reports , Entry All In One Solution"
  },
  {
    id: "gallery-24",
    src: "https://raw.githubusercontent.com/JamDevelopers/Jaimin-Patel/main/assets/gallery-24.png",
    title: "Sms Sending App — Using Your SIM Card",
    category: "Flutter Application",
    associatedSiteId: "sms-flutter",
    caption: "Send Bulk SmS using Your Existing Sim Card , Apis , Reports for Direct sms sending."
  }
];

