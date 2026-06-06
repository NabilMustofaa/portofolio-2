export interface Link {
  type: string;
  url: string;
}

export interface CaseStudy {
  challenge: string;
  approach: string;
  architecture: string;
  results: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  role: string;
  company?: string;
  description: string;
  image: string;
  stack: string[];
  metrics: string[];
  link?: Link[];
  caseStudy: CaseStudy;
}

export const works: Project[] = [
  {
    id: 8,
    slug: "stock-opname-mobile",
    title: "Stock Opname Mobile App",
    year: "2024",
    role: "Backend & Mobile Developer (React Native)",
    description:
      "Developed a cross-platform stock opname mobile application to replace inefficient PWA workflows in low-connectivity warehouse environments. Implemented offline-first architecture with local database caching and optimized synchronization logic",
    image: "/stock-opname-mobile.png",
    stack: ["React Native", "Expo", "Nativewind", "SQLite"],
    metrics: [
      "Simple Integration",
      "30% Faster Item Registration",
      "Offline-First System",
    ],
    caseStudy: {
      challenge:
        "Warehouse operators struggled with PWA-based stock opname tools due to poor signal coverage inside distribution centers. Frequent session timeouts and delayed API responses led to data inconsistencies and operational inefficiencies.",

      approach:
        "Designed an offline-first mobile architecture using React Native and Expo. Implemented a local SQLite database to cache inventory data and queue transactions. Built a synchronization mechanism to safely push data to the backend when connectivity is restored, and integrated barcode scanning for faster item input.",

      architecture:
        "Mobile App (React Native + Expo) with local SQLite storage, barcode scanning module, and a REST-based synchronization layer handling queued transactions and conflict resolution.",

      results:
        "Eliminated data loss caused by session timeouts, and increased item registration speed by approximately 30%, improving overall warehouse efficiency.",
    },
  },
  {
    id: 6,
    slug: "scoutition-ai",
    title: "Scoutition AI",
    year: "2024",
    role: "Fullstack Website Developer",
    description:
      "Developed a dynamic football scouting and training recommendation platform. Leveraged machine learning models to analyze player attributes and automatically suggest optimal pitch roles along with tailored developmental exercises.",
    image: "/scoutition.png",
    stack: ["React", "Next.js", "Tailwind CSS", "Flask", "Scikit-Learn"],
    metrics: [
      "85% Prediction Accuracy",
      "ML-driven Recommendations",
      "15+ Training Modules",
    ],
    caseStudy: {
      challenge:
        "Amateur and youth players often lack access to professional coaching feedback to identify their optimal field positions and personalized training plans.",
      approach:
        "Designed a multi-page Next.js dashboard with a Python/Flask machine learning backend. Collected player performance metrics, processed them via a trained classification model, and displayed interactive career progression paths.",
      architecture:
        "Next.js frontend, Tailwind CSS styling, Flask ML API, and Scikit-learn classification engine.",
      results:
        "Achieved 85% accuracy in position recommendation based on test player cohorts, and received positive reviews from amateur academy coaches for its structured module delivery.",
    },
  },
  {
    id: 7,
    slug: "financing-analyst-system",
    title: "Financing Analyst System",
    year: "2024",
    role: "Software Engineer",
    description:
      "Engineered a Credit Assessment Application integrating machine learning classifiers to evaluate customer loan eligibility. The platform processes financial statements, calculates automated credit grades (A-C), and outputs detailed credit scoring reports.",
    image: "/fas.png",
    stack: ["Laravel", "Tailwind CSS", "jQuery", "Flask", "Python"],
    metrics: [
      "Automated Credit Scoring",
      "A-C Customer Grading",
      "PDF Report Exports",
    ],
    caseStudy: {
      challenge:
        "Financial assessment analysts spent hours manually calculating credit scores and cross-checking applicant histories, resulting in loan approvals taking up to 3 business days.",
      approach:
        "Built a secure Laravel portal equipped with Python-driven credit scoring models. The system evaluates input ratios (debt-to-income, asset valuation) and generates PDF credit summaries in under 5 seconds.",
      architecture:
        "Laravel (admin panel & forms), Flask (ML inference service), jQuery, and Dompdf (report compilation).",
      results:
        "Shifted credit evaluation time from hours to seconds, streamlining customer grading (A-C) workflows and supporting hundreds of concurrent assessments.",
    },
  },
  {
    id: 1,
    slug: "easy-stock-opname",
    title: "Easy Stock Opname",
    year: "2023",
    role: "Fullstack Website Developer",
    company: "PT Borwita Citra Prima",
    description:
      "Developed a comprehensive, web-based inventory management system to replace manual pen-and-paper stock takes at PT Borwita Citra Prima. Delivered real-time inventory adjustments, discrepancy tracking, and CSV reports.",
    image: "/stock-opname.png",
    stack: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
    metrics: [
      "35% Time Saved",
      "99% Data Accuracy",
      "100% Digitized Workflows",
    ],
    caseStudy: {
      challenge:
        "Manual stock opname led to high operational errors, misplaced paper spreadsheets, and hours of manual data entry in central databases.",
      approach:
        "Formulated a Laravel MVC web platform with rapid search filters, custom CSV/Excel upload/download mechanisms, and real-time reconciliation logs.",
      architecture:
        "Laravel, Bootstrap CSS, jQuery, and MySQL relational database.",
      results:
        "Reduced manual stock-counting errors by 99% and saved over 35% of standard labor hours required for monthly inventory Audits.",
    },
  },
  {
    id: 2,
    slug: "project-tracker",
    title: "Project Tracker",
    year: "2023",
    role: "Fullstack Website Developer",
    company: "PT Borwita Citra Prima",
    description:
      "Constructed an internal project management application for PT Borwita Citra Prima to coordinate engineering tasks. Implemented timeline tracking, personnel allocation, and automated email alerts to improve delivery success.",
    image: "/project-tracker.png",
    stack: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
    metrics: [
      "20+ Active Projects",
      "100% Task Visibility",
      "Automated Deadlines",
    ],
    caseStudy: {
      challenge:
        "Lack of central coordination for IT initiatives led to delayed deployments and miscommunication across departments.",
      approach:
        "Deployed a collaborative task dashboard with automated email notifications, task status progress meters, and dynamic resource allocation charts.",
      architecture: "Laravel, Bootstrap CSS, jQuery, and MySQL.",
      results:
        "Boosted project transparency across the organization, enabling teams to meet 100% of their core milestone deadlines on schedule.",
    },
  },
  {
    id: 3,
    slug: "amerta-unair",
    title: "AMERTA UNAIR",
    year: "2022",
    role: "Front End Website Developer",
    company: "Universitas Airlangga",
    description:
      "Crafted the official student orientation portal for Universitas Airlangga, servicing thousands of freshmen. Designed a responsive web interface optimized for low network traffic, ensuring smooth access to orientation guides.",
    image: "/amerta.png",
    stack: ["Tailwind CSS", "jQuery", "HTML5", "CSS3"],
    metrics: [
      "5,000+ Active Users",
      "Zero Down-time",
      "Statically Optimized Layout",
    ],
    caseStudy: {
      challenge:
        "The student orientation portal had to handle sudden traffic spikes of over 5,000 students accessing resources simultaneously without crashing or lagging.",
      approach:
        "Developed highly optimized, static-focused frontend layouts using Tailwind and lightweight jQuery, minimizing payload sizes and caching static assets.",
      architecture:
        "HTML5, Tailwind CSS, lightweight jQuery, and statically optimized assets.",
      results:
        "Handled peak concurrent orientation sign-ins with zero server crashes and achieved sub-second load times on mobile connections.",
    },
  },
  {
    id: 4,
    slug: "abaya-salma-scm",
    title: "Abaya Salma SCM",
    year: "2023",
    role: "Back End Website Developer",
    company: "Abaya Salma",
    description:
      "Architected a custom Supply Chain Management system for Abaya Salma to manage apparel raw materials and distribution. Built features for procurement tracking, supplier coordination, and automated order notifications.",
    image: "/abaya-salma.png",
    stack: ["Laravel", "Tailwind CSS", "jQuery", "MySQL"],
    metrics: [
      "20% Lead Time Cut",
      "Centralized Purchase Orders",
      "Automated Stock alerts",
    ],
    caseStudy: {
      challenge:
        "Fragile communications and spreadsheet-based tracking with fabric suppliers led to fabric delays, production bottlenecks, and incorrect order quantities.",
      approach:
        "Engineered a Laravel-based supplier communication portal and purchase order workflow, complete with automatic inventory replenishment calculations.",
      architecture: "Laravel, Tailwind CSS, jQuery, and MySQL.",
      results:
        "Reduced order cycle lead times by 20%, improved supplier response rates, and eliminated material supply shortages during high-season garment production.",
    },
  },
];
