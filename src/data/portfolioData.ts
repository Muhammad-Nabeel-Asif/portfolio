import { Company, Skill } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammad Nabeel Asif",
  title: "Senior Backend & Systems Engineer",
  email: "nabeel.asif362@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-nabeel-asif",
  location: "Lahore, Pakistan (Open to Remote / Hybrid / Relocation)",
  bio: "Senior Backend Engineer with 4 years of experience building high-performance, fault-tolerant systems. I design real-time pipelines, stateful workflow orchestration, and AI-agent integrations — with a focus on latency, reliability, and clean infrastructure.",
  stats: [
    { label: "Years of Experience", value: "4+" },
    { label: "Production Apps Shipped", value: "8+" },
    { label: "Routine support inquiries Automated", value: "80%" },
    { label: "Response Latency Reduced", value: "99.9%" }, // From 24-48h to 10s
    { label: "Average Deploy Time Slashed", value: "80%" },
  ]
};

export const SKILLS: Skill[] = [
  // Core Languages & runtimes
  { name: "Node.js", level: 95, category: 'core', description: "V8-powered asynchronous runtime, event loop diagnostic, memory budgeting & CPU profiling", yearsOfExperience: 4 },
  { name: "NestJS / Express", level: 93, category: 'frameworks', description: "Enterprise architecture patterns, dependency injection containers, interceptors, custom decorators & guards", yearsOfExperience: 3.5 },
  { name: "TypeScript", level: 94, category: 'core', description: "Advanced type system, discriminated unions, utility types, compile-time validation & decorators", yearsOfExperience: 4 },
  { name: "Python (FastAPI / Django)", level: 85, category: 'core', description: "Asynchronous handlers, automated OpenAPI schema generation, dependency injection & clean scripting", yearsOfExperience: 2.5 },
  
  // Distributed systems & messaging
  { name: "Temporal.io", level: 90, category: 'messaging', description: "Orchestrating stateful, multi-step asynchronous business workflows with transparent retries & compensations", yearsOfExperience: 1.5 },
  { name: "Bull MQ / Redis Queue", level: 92, category: 'messaging', description: "Distributed queue systems, delayed jobs, priority lanes, concurrency gating & Redis cluster integrations", yearsOfExperience: 3 },
  { name: "Google Cloud Pub/Sub", level: 88, category: 'messaging', description: "At-least-once message delivery, pull/push subscriptions, dead-letter topics & event-driven decoupling", yearsOfExperience: 2 },
  { name: "Kafka (Basics & Streams)", level: 75, category: 'messaging', description: "Distributed streaming platforms, partitions, replication factors & event bus paradigms", yearsOfExperience: 1 },

  // Databases & Caching
  { name: "PostgreSQL", level: 92, category: 'databases', description: "Schema blueprints, transaction isolations, index optimization (B-Tree, GIN), query tuning, Neon DB & Knex.js", yearsOfExperience: 4 },
  { name: "Redis", level: 91, category: 'databases', description: "High-speed caching, distributed locks (Redlock), puberty publish-subscribe, rate limiters, session stores", yearsOfExperience: 3.5 },
  { name: "MongoDB", level: 85, category: 'databases', description: "Document aggregates, index compound planning, batch updates & scale structures", yearsOfExperience: 2.5 },

  // DevOps & Cloud
  { name: "Docker", level: 90, category: 'infra', description: "Multi-stage image compiles, composable sandboxing, volume maps & runtime resource limits", yearsOfExperience: 4 },
  { name: "AWS (S3, RDS, EC2)", level: 87, category: 'infra', description: "Provisioning instances, security definitions, programmatic SDKs, bucket controls & database storage tuning", yearsOfExperience: 3 },
  { name: "Nginx / Reverse Proxies", level: 86, category: 'infra', description: "Caching proxies, SSL setups, load balancer rules & request limit throttling", yearsOfExperience: 3 },
  { name: "GitLab CI / Github Actions", level: 88, category: 'infra', description: "Automated test stages, semantic releases, container image register flows & EC2 host deployments", yearsOfExperience: 3 },

  // Web3 & Advanced APIS
  { name: "Solidity / Web3.js / Ethers.js", level: 80, category: 'other', description: "Token definitions (ERC-20, ERC-721), event queries, contract integrations & secure gas estimates", yearsOfExperience: 1.5 },
  { name: "Agentic AI / GenAI Integration", level: 85, category: 'other', description: "Cognitive workflows, system prompts, email parsing, router classifications, tool-use calls & structured JSON formatting", yearsOfExperience: 1.5 }
];

export const COMPANIES: Company[] = [
  {
    name: "Proto IT Consultants",
    role: "Backend Engineer",
    duration: "September 2025 - Present (10 months)",
    location: "Islamabad, Pakistan (Remote)",
    description: "Architected and developed 'Delight Desk', an AI-powered customer service platform designed to parse emails, classify issues via intelligent agents, orchestrate complex refund/management workflows, and slash support overhead for enterprise e-commerce businesses.",
    coreTech: ["Node.js", "NestJS", "PostgreSQL (Neon)", "Bull MQ", "Redis", "Temporal.io", "Google Pub/Sub", "Microsoft Graph API", "Docker", "AWS", "Nginx"],
    achievements: [
      "Engineered real-time email processing pipelines using Google Cloud Pub/Sub and MS Graph subscription triggers for instant processing.",
      "Engineered custom data pipelines executing natural language classification, sentiment scoring, and routing to specialized AI agents.",
      "Implemented distributed workflow orchestration via Temporal.io for multi-step automations (subscription edits, order locks, complex refund logic) ensuring complete recovery and transaction safety on failure.",
      "Designed high-concurrency Bull MQ systems with Redis cluster to throttle, batch, and queue emails safely under deep load spikes.",
      "Reduced average response times for e-commerce customers from 24-48 hours to 10-20 seconds while automating 80% of routine inquiries."
    ],
    keyProjects: [
      {
        id: "delight_desk",
        title: "Delight Desk Automation Engine",
        tagline: "Automated 80% of routine e-commerce queries with robust distributed architecture and LLM agents.",
        description: "An intelligent support processing engine connecting email servers, distributed event nodes, workflow managers, and agentic AI systems to analyze and act upon client requests autonomously.",
        techStack: ["NestJS", "Temporal.io", "Redis", "Bull MQ", "Google Pub/Sub", "PostgreSQL", "OpenAI/Gemini APIs"],
        role: "Lead Systems Architect & Core Developer",
        impactMetrics: ["80% ticket automation rate", "Response delay dropped from days to 12s", "Zero lost states via Temporal orchestration"],
        achievements: [
          "Developed resilient Pub/Sub event hooks processing webhook data within 200ms.",
          "Constructed Temporal.io state-machine routes that handle long-running flows with multi-day escalation policies if AI agents or customer parameters fail verification."
        ]
      }
    ]
  },
  {
    name: "MindRind",
    role: "Backend Engineer",
    duration: "August 2023 - August 2025 (2 years 1 month)",
    location: "Lahore, Pakistan (Hybrid)",
    description: "Led backend engineering cycles for over 8 high-activity applications across Logistics, AI, E-Commerce, Education, and Fintech verticals. Championed strict CI/CD pipelines, integrated dense external services, and designed real-time engines.",
    coreTech: ["Node.js", "NestJS", "Python (FastAPI, Django)", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Nginx", "GitLab CI/CD", "WebSockets"],
    achievements: [
      "Architected rest APIs and real-time streaming sockets supporting thousands of active synchronous connections.",
      "Built resilient, automated CI/CD configurations in GitLab and GitHub Actions, slicing host deploy overhead by 80% and stopping error escapes.",
      "Engineered multi-calendar bidirectional schedules with Google Calendar and MS Outlook GraphQL models, featuring microsecond conflict maps.",
      "Designed Cron-driven systems managing mass notification batches, database indexing cleanup runs, and business reports."
    ],
    keyProjects: [
      {
        id: "bookmeet",
        title: "Bookmeet - Bidirectional Calendar Engine",
        tagline: "Ultra-fast OAuth scheduling engine syncing availability lists under multiple calendar frameworks.",
        description: "An availability synchronization solution featuring deep webhooks, delta token tracking, and custom interval intersections to map and resolve booking schedules across distinct Google and Microsoft instances.",
        techStack: ["Node.js", "NestJS", "PostgreSQL", "OAuth 2.0", "Redis", "Custom Conflict Shading Algorithms"],
        role: "Primary Backend Engineer",
        impactMetrics: ["100k+ calendar synchronization updates/day", "<50ms overlap assessment latency", "Multi-tenant OAuth token vault security"],
        achievements: [
          "Crafted delta-token pooling workers which query only updated nodes, reducing outgoing API budget by 72%.",
          "Managed token storage encryption using AES-256 GCM models guarding corporate account credentials."
        ]
      },
      {
        id: "chatful",
        title: "Chatful.ai - Audio and Sockets AI Characters",
        tagline: "Low-latency voice conversations powered by real-time WebSockets and ElevenLabs generative audio engines.",
        description: "An AI roleplay and voice interaction service where end users stream spoken payloads and receive split-second auditory outputs.",
        techStack: ["NestJS", "WebSockets", "Redis Pub/Sub", "ElevenLabs SDK", "Stripe Subscription Engines", "Python"],
        role: "Core API Designer & Infrastructure Developer",
        impactMetrics: ["Adaptive socket buffering", "Sub-600ms verbal feedback latency", "Complex transaction routing"],
        achievements: [
          "Optimized audio byte buffers over raw sockets, avoiding packet fragment freezes during active speech feeds."
        ]
      }
    ]
  },
  {
    name: "VIVID Technologies Ltd",
    role: "Node JS Developer",
    duration: "August 2022 - August 2023 (1 year 1 month)",
    location: "Lahore, Pakistan",
    description: "Developed and fortified cloud infrastructure and decentralized protocols for a prominent US-based blockchain transportation application, focusing on security, payments, and distributed asset audits.",
    coreTech: ["Node.js", "Solidity", "Ethers.js / Web3.js", "PostgreSQL", "Stripe", "Twilio", "AWS (S3, RDS, EC2)", "GitLab CI", "VoximPlant SDK", "Knex.js"],
    achievements: [
      "Programmed ERC-20 payment layers and ERC-721 token smart contracts for credentials and cryptographic asset logging on EVM chains.",
      "Designed and deployed dual-payment (fiat via Stripe + crypto via multi-sig, Ethers.js) pipelines with atomic feedback hooks.",
      "Embedded microservices measuring SEO performance metrics calling Chrome PageSpeed APIs to automate daily system audits.",
      "Maintained AWS infrastructure storing terabytes of decentralized digital identity proofs securely under custom IAM policies."
    ],
    keyProjects: [
      {
        id: "web3_payment",
        title: "Web3 Identity & Payment Pipeline",
        tagline: "Cryptographic credential minting, Twilio 2FA, and dual-rail transaction workflows.",
        description: "A highly secure portal allowing organizations to mint professional certificates while making payment with standard cards or cryptocurrency assets dynamically.",
        techStack: ["Node.js", "Solidity (Smart Contracts)", "Ethers.js", "Stripe API", "AWS RDS Postgres", "Twilio 2FA"],
        role: "Lead Smart Contract & Backend Integrator",
        impactMetrics: ["15,000+ Verified Trust-Bound Credentials Minted", "0 double-spend occurrences", "Robust Twilio verification rates"],
        achievements: [
          "Optimized Solidity assembly storage blocks, lowering client gas budgets by 22% during bulk certificate batch mints."
        ]
      }
    ]
  }
];
