export const profile = {
  name: "Atul Mishra",
  role: "Full-Stack Engineer",
  tagline:
    "Building fast, scalable web apps with React, Next.js & TypeScript and shipping AI-powered features that people actually use.",
  location: "Bangalore, India",
  phone: "9839468684",
  email: "atulm1341@gmail.com",
  linkedin: "https://www.linkedin.com/in/atul-mishra-754a601a5/",
  github: "https://github.com/AtulMishra1211",
  leetcode: "https://leetcode.com/u/AtulMishra1211/",
  resumeUrl: "/Atul_Mishra_Resume.pdf",
  photo: "/atul-2.png",
};

export const loop = ["Build", "Break", "Learn", "Ship", "Repeat"];

export const craftStatement =
  "Product-first thinking, modern interface systems, and motion details that keep every screen feeling fresh.";

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
    company: "Logipod Logistics",
    period: "July 2026 — Present",
    current: true,
    points: [
      "Built and shipped the Logipod marketing website end-to-end — a Sanity CMS blog, an automated email + Google Sheets lead pipeline, and a custom Framer Motion/WebGL animation system across 10+ production routes.",
      "Working on Sharkship, an internal logistics product — building both the customer and admin panels, with a backend-heavy focus on PostgreSQL, revenue calculation, and the seller wallet system.",
      "Actively building and learning AI agent development as part of the team's AI initiatives, implementing agentic workflows in production.",
    ],
    tags: ["Next.js", "React.js", "Nest.js", "TypeScript", "PostgreSQL", "AWS Cloud", "AI Agents"],
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
  /** Shown as a muted status label when the project isn't featured. */
  kind?: string;
};

export const projects: Project[] = [
  {
    title: "Logipod Website",
    period: "2026",
    description: "Full-stack marketing platform for Logipod — CMS blog, lead pipeline, and WebGL animations.",
    points: [
      "Built a Sanity CMS blog and 10+ production marketing routes with Next.js & TypeScript.",
      "Shipped an automated email + Google Sheets lead pipeline and a custom Framer Motion/WebGL animation system, including infinite photo marquees and an interactive 3D globe.",
    ],
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Framer Motion", "WebGL"],
    liveUrl: "https://temp.logipod.in",
    featured: true,
  },
  {
    title: "Sharkship",
    period: "July 2026 — Present",
    description: "Customer + admin panels for Logipod's logistics platform, with a PostgreSQL-heavy backend.",
    points: [
      "Building both the customer and admin panels, working across frontend and backend.",
      "Designed revenue calculation logic and the seller wallet system on PostgreSQL.",
    ],
    tags: ["Next.js", "React.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://app.sharkship.in/sign-in",
    kind: "Internal tool",
  },
  {
    title: "Kazam EV Tech Website",
    period: "October 2025 — Present",
    description: "15+ product & solution pages for a B2C EV charging platform, plus an interactive quiz.",
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
    description: "A fully responsive SaaS landing page with parallax animations, scoring 95+ on Lighthouse.",
    points: [
      "Developed a fully responsive SaaS landing page (Next.js 14, Framer Motion) with parallax animations, achieving a 95+ Lighthouse score.",
    ],
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    liveUrl: "https://saas-landing-page-animated.vercel.app/",
    codeUrl: "https://github.com/AtulMishra1211/SaasLandingPage-Animated",
    kind: "Side project",
  },
  {
    title: "MOMATO — Restaurant Discovery App",
    period: "November 2024",
    description: "A responsive frontend for restaurant discovery and menu search via the Swiggy API.",
    points: [
      "Developed a responsive frontend enabling restaurant discovery and real-time menu search using the Swiggy API.",
    ],
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    codeUrl: "https://github.com/AtulMishra1211/momato",
    kind: "Side project",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++"] },
  {
    label: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "WebGL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Sanity CMS",
      "SQL",
      "AWS",
    ],
  },
  { label: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code", "SEO"] },
  {
    label: "AI-Native Development",
    skills: ["AI Agents", "Claude Code", "GitHub Copilot", "RAG"],
  },
  {
    label: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"],
  },
];

export type Education = {
  school: string;
  degree: string;
  score: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "Madan Mohan Malaviya University of Technology",
    degree: "B.Tech — Electronics and Communication Engineering",
    score: "CGPA: 7.91 / 10",
    period: "Oct 2021 — May 2025",
  },
  {
    school: "CBSE Board — Intermediate (Class XII)",
    degree: "Senior Secondary",
    score: "92.4%",
    period: "2020",
  },
  {
    school: "CBSE Board — High School (Class X)",
    degree: "Secondary",
    score: "92.64%",
    period: "2018",
  },
];

export const achievements: string[] = [
  "1st Position at Codezilla by IEEE-MMMUT (500+ participants)",
  "1st Position at Techazar in TechSrijan-2022 (500+ participants)",
  "Solved 500+ problems across LeetCode, GFG, CodeChef, and HackerRank",
];

export const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "4", label: "Production Projects Shipped" },
  { value: "50+", label: "Bugs Fixed in Prod" },
  { value: "500+", label: "DSA Problems Solved" },
];
