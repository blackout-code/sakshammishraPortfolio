export const personalInfo = {
  name: "Saksham Mishra",
  role: "Senior Backend Engineer",
  tagline: "Architecting resilient enterprise systems. Scaling microservices. Engineering the future of backend infrastructure.",
  description:
    "Senior Backend Engineer with 5+ years of experience designing and modernizing enterprise-grade applications. Specializing in Java, Spring Boot, REST APIs, Microservices, Azure cloud-native architecture, and AI-driven automation. Passionate about system design, distributed systems, and building platforms that scale.",
  email: "sakshamm97@gmail.com",
  location: "Ahmedabad, Gujarat, India",
  status: "available" as const,
  resumeUrl: "#",
  social: [
    { name: "GitHub", url: "https://github.com/sakshamm97", icon: "github" as const },
    { name: "LinkedIn", url: "https://linkedin.com/in/sakshamm97", icon: "linkedin" as const },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" as const },
  ],
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "APIs Modernized", value: "20+" },
    { label: "Projects Delivered", value: "12+" },
    { label: "Microservices", value: "15+" },
  ],
};

export const skills = [
  {
    category: "Backend Engineering",
    icon: "server",
    skills: [
      { name: "Java", level: 92 },
      { name: "Spring Boot", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "SOAP Services", level: 80 },
      { name: "JUnit / Mockito", level: 78 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Microsoft Azure", level: 85 },
      { name: "Docker / Containerization", level: 78 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Git / Version Control", level: 85 },
      { name: "UrbanCode Deploy", level: 72 },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "Oracle SQL", level: 82 },
      { name: "PL/SQL", level: 78 },
      { name: "Azure Cosmos DB", level: 75 },
      { name: "MongoDB", level: 55 },
    ],
  },
  {
    category: "Monitoring & Observability",
    icon: "brain",
    skills: [
      { name: "Splunk", level: 72 },
      { name: "AppDynamics", level: 70 },
      { name: "Azure Monitor", level: 65 },
    ],
  },
  {
    category: "Tools & Productivity",
    icon: "code",
    skills: [
      { name: "Postman", level: 85 },
      { name: "SOAPUI", level: 80 },
      { name: "Bruno", level: 70 },
      { name: "Jira / Confluence", level: 78 },
      { name: "ServiceNow", level: 75 },
    ],
  },
  {
    category: "Currently Leveling Up",
    icon: "brain",
    skills: [
      { name: "System Design", level: 40 },
      { name: "Distributed Systems", level: 35 },
      { name: "Generative AI / LLMs", level: 50 },
      { name: "Node.js / TypeScript", level: 30 },
      { name: "Kubernetes", level: 25 },
    ],
  },
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Senior Backend Engineer",
    period: "March 2022 — Present",
    description:
      "Leading enterprise backend modernization initiatives at scale. Architecting cloud-native microservices on Azure, migrating legacy SOAP systems to modern REST APIs, and building AI-assisted workflow automation components.",
    highlights: [
      "Spearheaded enterprise backend modernization initiative, migrating 20+ production APIs from SOAP to REST with zero downtime",
      "Architected scalable microservices on Azure, reducing deployment time by 60% through automated CI/CD pipelines",
      "Implemented comprehensive security remediation and compliance improvements across 15+ enterprise services",
      "Built AI-assisted workflow components using Spring Boot and Azure Cognitive Services, reducing manual processing by 40%",
      "Optimized centralized logging strategy with Splunk, reducing operational costs by 30%",
      "Mentored 4 junior engineers on microservices architecture, code quality standards, and Azure best practices",
    ],
    metrics: [
      { label: "APIs Modernized", value: "20+" },
      { label: "Cost Reduction", value: "30%" },
      { label: "Team Mentored", value: "4 engineers" },
      { label: "Deployment Speed", value: "2x faster" },
    ],
    technologies: ["Java", "Spring Boot", "Azure", "Microservices", "REST APIs", "Splunk", "Docker"],
  },
  {
    company: "Hi-Tech iSolutions LLP",
    role: "Software Engineer",
    period: "March 2020 — February 2022",
    description:
      "Developed enterprise backend solutions for aerospace operations. Built ETL pipelines, workflow automation systems, and RESTful APIs that improved operational efficiency and data processing capabilities.",
    highlights: [
      "Developed enterprise backend solutions for aerospace operations, serving 500+ daily active users",
      "Built ETL pipelines and workflow automation systems handling 1M+ records monthly",
      "Improved operational efficiency by 35% through process automation and API integration",
      "Designed and implemented RESTful APIs for real-time data processing and analytics",
      "Owned the full software development lifecycle: requirements, design, development, testing, deployment, and production support",
    ],
    metrics: [
      { label: "Users Served", value: "500+" },
      { label: "Records/Month", value: "1M+" },
      { label: "Efficiency Gain", value: "35%" },
    ],
    technologies: ["Java", "Spring Boot", "Oracle SQL", "REST APIs", "ETL", "Git"],
  },
];

export const architectureProjects = [
  {
    title: "Enterprise Microservices Architecture",
    subtitle: "Cloud-Native Migration & Modernization",
    description:
      "Architected a greenfield microservices ecosystem on Azure to replace monolithic SOAP-based enterprise systems. Designed service boundaries, API gateways, event-driven communication patterns, and observability stack from the ground up.",
    tags: ["System Design", "Microservices", "Azure", "Event-Driven Architecture"],
    diagram: "microservices",
    impact: ["60% faster deployments", "Zero-downtime migration", "3x scalability improvement"],
  },
  {
    title: "API Gateway & Orchestration Layer",
    subtitle: "Enterprise Integration Platform",
    description:
      "Designed a unified API gateway that bridges legacy SOAP services with modern REST APIs. Implemented request routing, protocol transformation, rate limiting, and centralized authentication using Spring Cloud Gateway.",
    tags: ["API Gateway", "Spring Cloud", "Security", "Integration"],
    diagram: "gateway",
    impact: ["Unified API surface", "Reduced latency by 40%", "Centralized auth & rate limiting"],
  },
  {
    title: "Observability & Monitoring Stack",
    subtitle: "Enterprise Observability Platform",
    description:
      "Architected a comprehensive observability platform combining centralized logging (Splunk), application performance monitoring (AppDynamics), and custom dashboards for real-time system health tracking across 15+ services.",
    tags: ["Observability", "Splunk", "AppDynamics", "Azure Monitor"],
    diagram: "observability",
    impact: ["MTTR reduced by 50%", "Centralized logging", "Proactive alerting"],
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    credentialUrl: "#",
    category: "Cloud",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "cloud",
  },
  {
    name: "Oracle Certified Professional: Java SE",
    issuer: "Oracle",
    date: "2022",
    credentialUrl: "#",
    category: "Backend",
    gradient: "from-orange-500/20 to-red-500/20",
    icon: "code",
  },
  {
    name: "Spring Professional Certification",
    issuer: "VMware",
    date: "2023",
    credentialUrl: "#",
    category: "Backend",
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "server",
  },
  {
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#",
    category: "Architecture",
    gradient: "from-violet-500/20 to-purple-500/20",
    icon: "brain",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "#",
    category: "Cloud",
    gradient: "from-amber-500/20 to-yellow-500/20",
    icon: "cloud",
  },
];

export const projects = [
  {
    title: "Enterprise Claims Modernization Platform",
    subtitle: "Insurance System Modernization",
    description:
      "Architected and executed the modernization of legacy SOAP-based insurance systems into scalable, cloud-native Spring Boot microservices on Azure. Successfully migrated 20+ production APIs while maintaining 100% business continuity. Implemented CI/CD pipelines, automated testing, and comprehensive monitoring.",
    tags: ["Java", "Spring Boot", "Azure", "Microservices", "REST APIs", "CI/CD"],
    image: "/projects/claims.jpg",
    gradient: "from-indigo-500/20 via-indigo-400/10 to-cyan-500/20",
    gradientBorder: "from-indigo-500 to-cyan-500",
    links: {
      live: "#",
      github: "#",
    },
    featured: true,
    metrics: [
      { label: "APIs Migrated", value: "20+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Saved", value: "30%" },
    ],
  },
  {
    title: "AI-Powered Claims Assistant",
    subtitle: "Smart Insurance Assistant",
    description:
      "Integrated AI-driven chatbot capabilities into insurance claim workflows using Azure Cognitive Services and Spring Boot. Enabled intelligent document processing, automated claim triage, and real-time status updates — reducing manual support effort by 40%.",
    tags: ["Java", "Spring Boot", "AI/ML", "Azure", "NLP"],
    image: "/projects/ai-assistant.jpg",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-pink-500/20",
    gradientBorder: "from-violet-500 to-fuchsia-500",
    links: {
      live: "#",
      github: "#",
    },
    featured: true,
    metrics: [
      { label: "Manual Work Reduced", value: "40%" },
      { label: "Accuracy", value: "95%" },
      { label: "Response Time", value: "<1s" },
    ],
  },
  {
    title: "Secure Third-Party Access Portal",
    subtitle: "Enterprise Admin Portal",
    description:
      "Designed and developed an enterprise-grade Admin Portal with role-based access control, JWT authentication, comprehensive audit logging, and secure third-party onboarding. Serves 200+ internal users with granular permission management.",
    tags: ["Spring Boot", "JWT", "Oracle SQL", "Azure", "Security"],
    image: "/projects/portal.jpg",
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    gradientBorder: "from-amber-500 to-orange-500",
    links: {
      live: "#",
      github: "#",
    },
    featured: true,
    metrics: [
      { label: "Users", value: "200+" },
      { label: "Audit Events/Month", value: "50K+" },
      { label: "Security Score", value: "A+" },
    ],
  },
  {
    title: "Enterprise API Orchestration Engine",
    subtitle: "Integration & Middleware Platform",
    description:
      "Developed a sophisticated orchestration layer that bridges legacy SOAP systems with modern REST APIs. Enables seamless communication across disparate enterprise platforms through protocol transformation, message routing, and intelligent fallback mechanisms.",
    tags: ["Java", "Spring Boot", "Microservices", "SOAP", "REST"],
    image: "/projects/orchestration.jpg",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    gradientBorder: "from-emerald-500 to-teal-500",
    links: {
      live: "#",
      github: "#",
    },
    featured: false,
    metrics: [
      { label: "Integrations", value: "15+" },
      { label: "Throughput", value: "10K/min" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
];