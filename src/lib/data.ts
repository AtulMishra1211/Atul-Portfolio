export const profile = {
  name: "Atul Mishra",
  role: "Full-Stack Engineer",
  tagline:
    "Building fast, scalable web apps with React, Next.js & TypeScript — and shipping AI-powered features that people actually use.",
  location: "India",
  phone: "9839468684",
  email: "atulm1341@gmail.com",
  linkedin: "https://www.linkedin.com/in/atul-mishra-754a601a5/",
  github: "https://github.com/AtulMishra1211",
  resumeUrl: "/Atul_Mishra_Resume.pdf",
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  points: string[];
  tags: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "SDE 1",
    company: "Logipod",
    period: "July 2026 — Present",
    current: true,
    points: [
      "Working on Sharkship, an internal product, owning the customer-facing panel — contributed UI improvements including shipping label customisation features using React.js.",
      "Actively building and learning AI agent development as part of the team's AI initiatives, implementing agentic workflows in production.",
    ],
    tags: ["React.js", "AI Agents", "Product"],
  },
  {
    role: "SDE 1",
    company: "Kazam EV Tech",
    period: "September 2025 — June 2026",
    points: [
      "Built and shipped 15+ production pages for the B2C EV charging platform using Next.js, React.js and TypeScript, driving 6.8K+ monthly visitors and 10.3K+ page views with steady 10% MoM growth.",
      "Created and connected REST APIs (Express.js, MongoDB) with the frontend to power charger discovery and session management.",
      "Owned the website's SEO from scratch — added dynamic meta tags, structured data, and SSR, taking the site from zero search visibility to ranking on target keywords within 3 months.",
      "Integrated an AI-powered chatbot into the platform, building the entire frontend interface including conversation UI, real-time message streaming, and state management.",
      "Fixed 50+ production bugs and shipped updates weekly, working closely with product and backend teams.",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "SEO"],
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant",
    period: "May 2025 — August 2025",
    points: [
      "Developed and optimized low-latency software modules adhering to OOP principles using Java.",
      "Built automated API test suites (Postman, Selenium) covering 30+ endpoints, reducing manual QA effort by ~20 hours/sprint and catching regressions pre-deployment.",
    ],
    tags: ["Java", "Postman", "Selenium"],
  },
  {
    role: "Machine Learning Intern",
    company: "IRDE-DRDO",
    period: "May 2024 — June 2024",
    points: [
      "Developed a real-time object detection system using YOLO models, training on a dataset of 1200+ images and achieving 92% mAP with YOLOv5s and 75.2% mAP with YOLOv8s.",
    ],
    tags: ["YOLO", "Computer Vision", "Python"],
  },
];

export type Project = {
  title: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Kazam EV Tech Website",
    period: "October 2025 — Present",
    description:
      "15+ product & solution pages for a B2C EV charging platform, plus an interactive quiz that routes visitors to the right product.",
    points: [
      "Owned design & development of 15+ product pages (Careers, About Us, LEVDC Pro, Zip, Zoom, Zap Pro, CMS, BSMS, RMS, Energy Intelligence, Roaming, Revenue Management, Charger Health Checkup) and key solution pages.",
      "Built the Kazam Solution Finder, a multi-step interactive quiz that routes visitors to the right product based on use-case (CPO, fleet, leasing, energy management), reducing sales-team triage on inbound leads.",
      "Designed a unified form-overlay system integrated with HubSpot across product and solution pages.",
    ],
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion"],
    liveUrl: "https://kazam.energy",
    featured: true,
  },
  {
    title: "SaaS Landing Page — Animated",
    period: "August 2025",
    description:
      "A fully responsive SaaS landing page with parallax scroll animations, scoring 95+ on Lighthouse.",
    points: [
      "Developed a fully responsive SaaS landing page (Next.js 14, Framer Motion) with parallax animations, achieving a 95+ Lighthouse score.",
    ],
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    liveUrl: "https://saas-landing-page-animated.vercel.app/",
    codeUrl: "https://github.com/AtulMishra1211/SaasLandingPage-Animated",
    featured: true,
  },
  {
    title: "MOMATO — Restaurant Discovery App",
    period: "November 2024",
    description:
      "A responsive frontend for restaurant discovery and real-time menu search, powered by the Swiggy API.",
    points: [
      "Developed a responsive frontend enabling restaurant discovery and real-time menu search using the Swiggy API.",
    ],
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    codeUrl: "https://github.com/AtulMishra1211/momato",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "C", "C++"] },
  {
    label: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Backend & Database",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
  },
  { label: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code"] },
  {
    label: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"],
  },
];

export const education = {
  school: "Madan Mohan Malaviya University of Technology",
  degree: "B.Tech — Electronics and Communication Engineering",
  cgpa: "7.91 / 10",
  period: "Oct 2021 — May 2025",
};

export const achievements: string[] = [
  "1st Position at Codezilla by IEEE-MMMUT (500+ participants)",
  "1st Position at Techazar in TechSrijan-2022 (500+ participants)",
  "Solved 500+ problems across LeetCode, GFG, CodeChef, and HackerRank",
];

export const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "15+", label: "Production Pages Shipped" },
  { value: "50+", label: "Bugs Fixed in Prod" },
  { value: "500+", label: "DSA Problems Solved" },
];
