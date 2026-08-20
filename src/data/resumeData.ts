import { WorkExperience, EducationItem, SkillCategory, ProjectHighlight } from '../types';

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
      { name: "Selenium & WebView2" },
      { name: "SMS Gateways" },
      { name: "Postman API Testing" },
      { name: "AI Automation Scripts" },
      { name: "RESTful Web Services" }
    ]
  },
  {
    id: "cms-ecommerce",
    title: "CMS & E-Commerce",
    iconName: "ShoppingBag",
    skills: [
      { name: "WordPress Plugins & Themes", featured: true },
      { name: "WooCommerce" },
      { name: "Shopify" },
      { name: "Magento" },
      { name: "OpenCart" },
      { name: "PrestaShop" },
      { name: "Joomla" },
      { name: "Drupal" }
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
      { name: "Google AI Studio" },
      { name: "Manus & Notion AI" },
      { name: "Git & PlayStore Console" }
    ]
  },
  {
    id: "marketing-analytics",
    title: "Marketing & Utilities",
    iconName: "TrendingUp",
    skills: [
      { name: "SEO & Keyword Ranking" },
      { name: "Digital Marketing & Google Ads" },
      { name: "SMO / SMM" },
      { name: "Content Writing" },
      { name: "Crystal Reports" },
      { name: "Android Studio" },
      { name: "QA Testing & Debugging" }
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
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0a670f4a458d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const AI_CODING_ASSISTANTS = [
  "ChatGPT", "Codex", "GitHub Copilot", "Claude Code", "Cursor",
  "Gemini CLI", "FreeBuff CLI", "NotebookLM", "HiggsField", 
  "Git", "Manus", "AI Studio", "Grock", "Vercel", "Notion"
];
