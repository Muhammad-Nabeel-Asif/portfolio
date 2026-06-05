import { Company, Skill, SystemArchitecture, ApiTestCase } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammad Nabeel Asif",
  title: "Senior Backend & Systems Engineer",
  subtitle: "Specializing in Distributed Systems, Workflows, High-Throughput Pipelines & Agentic AI Architectures",
  email: "nabeel.asif362@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-nabeel-asif",
  github: "https://github.com", // Placeholder - standard professional link
  location: "Lahore, Pakistan (Open to Remote / Hybrid / Relocation)",
  bio: "Senior Backend Engineer with 4 years of experience architecting and building high-performance, fault-tolerant B2B and B2C products. I design real-time pipelines, implement stateful workflow orchestration, and integrate specialized AI agents. I look beyond 'making it work' to emphasize latency optimization, telemetry, transaction atomicity, and infrastructure automation. Known for bringing rigor to microservice environments and system design challenges.",
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
        ],
        systemArchitectureId: "delight_desk"
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
        ],
        systemArchitectureId: "bookmeet"
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
        ],
        systemArchitectureId: "web3_payment"
      }
    ]
  }
];

export const SYSTEM_ARCHITECTURES: Record<string, SystemArchitecture> = {
  delight_desk: {
    id: "delight_desk",
    name: "Delight Desk Email & AI Pipeline",
    description: "A fault-tolerant distributed system that processes incoming customer emails in real time, routes them to AI agents, and manages transactional state via Temporal.io workflows.",
    kpis: [
      { label: "Throughput", value: "10,000 emails/hour", color: "emerald" },
      { label: "Avg Latency", value: "12 seconds total", color: "blue" },
      { label: "Task Isolation", value: "99.99% Queue Success", color: "indigo" }
    ],
    nodes: [
      {
        id: "email_hook",
        label: "MS Graph / PubSub Hub",
        type: "trigger",
        description: "Receives cloud webhooks, extracts raw headers/payloads, and validates web headers dynamically.",
        tech: "NodeJS / MS Graph Subscriptions",
        coords: { x: 5, y: 50 },
        metrics: [{ label: "Webhook RT", value: "15ms" }, { label: "Ingest Rate", value: "120/sec" }],
        codeSnippet: `// Webhook Receiver Controller
@Post('webhook/mail')
async handleIncomingNotification(@Headers('validation-token') clientToken: string) {
  if (clientToken) return clientToken; // Handling MS Graph subscription lease handshake
  await this.pubsubService.publishToTopic('raw-emails', req.body);
  return { status: 'buffered' };
}`
      },
      {
        id: "pubsub",
        label: "GCP Pub/Sub Topics",
        type: "queue",
        description: "Decouples entry servers from worker threads. Publishes messages safely and provides persistent delivery flags.",
        tech: "Google Cloud Pub/Sub Topic",
        coords: { x: 25, y: 50 },
        metrics: [{ label: "Buffer SLA", value: "99.999%" }, { label: "Retention", value: "7 days" }],
        codeSnippet: `// Publishing client message packet safely
const dataBuffer = Buffer.from(JSON.stringify(emailPayload));
const messageId = await pubSubClient
  .topic('incoming-emails')
  .publishMessage({ data: dataBuffer });
console.log(\`Buffered message: \${messageId}\`);`
      },
      {
        id: "bullmq_dispatch",
        label: "BullMQ Priority Queue",
        type: "queue",
        description: "Distributes classification processing tasks inside Redis. Controls rate limits, retry policies, and priority scales.",
        tech: "Redis Cluster / BullMQ Engine",
        coords: { x: 45, y: 35 },
        metrics: [{ label: "Active Workers", value: "32 concurrent" }, { label: "Queue Latency", value: "1.2ms" }],
        codeSnippet: `// BullMQ Processor Setup
const emailQueue = new Queue('incoming-emails-queue', { connection: redisPool });
await emailQueue.add('analyze-intent', emailPayload, {
  attempts: 3,
  backoff: { type: 'exponential', delay: 1000 },
  priority: payload.isVip ? 1 : 10
});`
      },
      {
        id: "temporal_workflow",
        label: "Temporal.io Orchestrator",
        type: "orchestration",
        description: "Coordinates stateful, long-running processes (e.g., locking balances, confirming refunds, sending emails, escalation timings). Keeps state across crashes.",
        tech: "Temporal SDK",
        coords: { x: 65, y: 20 },
        metrics: [{ label: "Active Workflows", value: "1,500 state-bound" }, { label: "State Durability", value: "Infinite" }],
        codeSnippet: `// Temporal.io Durable Workflow Def
export async function processCustomerRefundWorkflow(refundDetails: RefundDetails) {
  // Activity: Securely lock e-commerce cart inventory
  await activities.lockOrderState(refundDetails.orderId);
  
  try {
    const aiReview = await activities.evaluatePolicyWithAI(refundDetails);
    if (aiReview.approved) {
      await activities.disburseStripeRefund(refundDetails);
      await activities.sendSuccessfulEmail(refundDetails);
    } else {
      // Escalates task dynamically to human client workspace without losing workflow state
      await workflow.sleep('2h'); 
      await activities.requestManualReview(refundDetails);
    }
  } catch (err) {
    await activities.rollbackOrderState(refundDetails.orderId);
    throw err;
  }
}`
      },
      {
        id: "ai_agent_pool",
        label: "Specialized AI Agent Pool",
        type: "logic",
        description: "An AI system utilizing structured tools to identify the user's intent, parse parameters, and write JSON responses.",
        tech: "Gemini / Node SDK",
        coords: { x: 65, y: 65 },
        metrics: [{ label: "Acc Tracker", value: "94.2%" }, { label: "Token/Sec", value: "85 tokens" }],
        codeSnippet: `// AI Intent Classification Call
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const response = await ai.models.generateContent({
  model: 'gemini-1.5-flash',
  contents: 'Classify this email. Return strictly JSON with keys: category, entities, urgency.',
  config: { responseMimeType: 'application/json' }
});`
      },
      {
        id: "neon_db",
        label: "Neon Serverless Postgres",
        type: "storage",
        description: "Primary relational storage. Scalable instance pool holding relational metadata, log steps, and system parameters.",
        tech: "PostgreSQL with Neon branching",
        coords: { x: 90, y: 50 },
        metrics: [{ label: "Pool Size", value: "64 conns" }, { label: "Read Latency", value: "<10ms" }],
        codeSnippet: `// Batch data logging using Transaction Blocks
await db.transaction(async (trx) => {
  await trx.insert(ticketsTable).values({
    id: emailId,
    sentiment: aiSentiment,
    category: aiCategory,
    status: 'AutoResolved'
  });
  await trx.insert(auditLogsTable).values({
    ticketId: emailId,
    action: 'AI_CLASSIFIED',
    metadata: { routeUsed: 'FastPath' }
  });
});`
      }
    ],
    edges: [
      { from: "email_hook", to: "pubsub", label: "Reliable Publish", animated: true, type: "async" },
      { from: "pubsub", to: "bullmq_dispatch", label: "Job Queueing", animated: true, type: "async" },
      { from: "bullmq_dispatch", to: "temporal_workflow", label: "Orchestrate (Complex)", animated: false, type: "event" },
      { from: "bullmq_dispatch", to: "ai_agent_pool", label: "Classify (Simple)", animated: true, type: "sync" },
      { from: "ai_agent_pool", to: "temporal_workflow", label: "Submit Parameters", animated: true, type: "sync" },
      { from: "temporal_workflow", to: "neon_db", label: "Commit Results/State", animated: true, type: "event" },
      { from: "ai_agent_pool", to: "neon_db", label: "Log Analytics", animated: false, type: "async" }
    ]
  },
  bookmeet: {
    id: "bookmeet",
    name: "Multi-Calendar Real-Time Sync Engine",
    description: "An event-driven architectural flow designed to synchronize calendar events bidirectionally between Google Workspace, Microsoft Graph, and internal company scheduling databases in real time.",
    kpis: [
      { label: "Active Schedulers", value: "45,000 synchronizations", color: "blue" },
      { label: "Collision Rate", value: "0.01% overlap overlaps", color: "indigo" },
      { label: "Outgoing Call Savings", value: "72% delta requests", color: "emerald" }
    ],
    nodes: [
      {
        id: "webhook_ingress",
        label: "API Gateway (Fastify/Nginx)",
        type: "trigger",
        description: "Receives raw calendar syncing webhooks from Google (Push Notifications) and Microsoft Graph subscription nodes.",
        tech: "Express / Nginx / SSL Routing",
        coords: { x: 5, y: 50 },
        metrics: [{ label: "HTTPS RT", value: "8ms" }],
        codeSnippet: `// Calendar webhooks dispatcher
app.post('/api/sync/webhooks/google', async (req, res) => {
  const channelId = req.headers['x-goog-channel-id'];
  const resourceState = req.headers['x-goog-resource-state']; // sync, exists, delete
  await syncQueue.add('process-sync-delta', { channelId, platform: 'google' });
  return res.status(200).send();
});`
      },
      {
        id: "redis_sync_lock",
        label: "Redis Lock (Redlock)",
        type: "logic",
        description: "Prevents duplicate scheduling updates and calendar race-conditions using high-speed transactional locks.",
        tech: "Redis In-Memory Key Store",
        coords: { x: 30, y: 35 },
        metrics: [{ label: "Lock SLA", value: "<1ms lookup" }],
        codeSnippet: `// Mutual Exclusion Locker using Redis Redlock
const resourceKey = \`calendar:lock:\${userId}:event:\${eventId}\`;
const acquired = await redisClient.set(resourceKey, 'locked', 'NX', 'PX', 5000);
if (!acquired) {
  // Prevent dual execution triggers
  throw new Error('Task holds lock under another thread. Terminating run.');
}`
      },
      {
        id: "overlap_resolver",
        label: "Interval Tree Overlap Engine",
        type: "logic",
        description: "Finds and flags timeline conflicts. Calculates busy/free intersections over corporate hierarchies.",
        tech: "TypeScript / Node Core",
        coords: { x: 60, y: 50 },
        metrics: [{ label: "Search Latency", value: "<0.5ms resolution" }],
        codeSnippet: `// Custom Interval Overlap Vector Matching
export function checkIntervalCollision(intervals: Interval[], target: Interval): boolean {
  for (const interval of intervals) {
    if (interval.start < target.end && target.start < interval.end) {
      return true; // Overlap confirmed!
    }
  }
  return false;
}`
      },
      {
        id: "db_postgres",
        label: "Relational Index DB",
        type: "storage",
        description: "Stores OAuth tokens (encrypted with AES-256 GCM), mappings, synced dates, and calendar relationships.",
        tech: "PostgreSQL DB / Knex Query Pool",
        coords: { x: 90, y: 50 },
        metrics: [{ label: "AES-256 GCM", value: "Strict Encryptions" }],
        codeSnippet: `// Querying and encrypting credentials safely
const encryptedSecret = crypto.createCipheriv('aes-256-gcm', encKey, iv);
let tokenPayload = encryptedSecret.update(freshAccessToken, 'utf8', 'hex');
tokenPayload += encryptedSecret.final('hex');`
      }
    ],
    edges: [
      { from: "webhook_ingress", to: "redis_sync_lock", label: "Check Concurrent Access", animated: true, type: "sync" },
      { from: "redis_sync_lock", to: "overlap_resolver", label: "Fetch Schedules", animated: true, type: "async" },
      { from: "overlap_resolver", to: "db_postgres", label: "Persist Resolved Blocks", animated: true, type: "event" }
    ]
  },
  web3_payment: {
    id: "web3_payment",
    name: "Web3 Identity & Credential Pipeline",
    description: "Architectural structure connecting secure payment rails with the EVM chain. Dispatches automatic twilio prompts and mints ERC-721 credential tokens securely.",
    kpis: [
      { label: "Mint Count", value: "15,000+ Credentials", color: "indigo" },
      { label: "Gas Saved", value: "22% custom structs", color: "emerald" },
      { label: "Tx Atomicity", value: "100% Relational Checks", color: "blue" }
    ],
    nodes: [
      {
        id: "ingress_trigger",
        label: "Stripe API Webhook Gate",
        type: "trigger",
        description: "Monitors paid invoices, triggers checks, and dispatches Twilio Multi-factor identification to the recipient immediately.",
        tech: "Stripe SDK / Express API",
        coords: { x: 5, y: 50 },
        metrics: [{ label: "Webhook Latency", value: "12ms" }],
        codeSnippet: `// Stripe webhook validation gate
app.post('/stripe-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  if (event.type === 'invoice.payment_succeeded') {
    await queueTwilioVerification(event.data.object);
  }
  return res.sendStatus(200);
});`
      },
      {
        id: "twilio_auth",
        label: "Twilio 2FA Verification",
        type: "actor",
        description: "Delivers custom authentication codes. Blocks minting pipelines until identity checks succeed on mobile.",
        tech: "Twilio REST Client",
        coords: { x: 35, y: 25 },
        metrics: [{ label: "Confirm SLA", value: "99.8% Success" }],
        codeSnippet: `// Sending custom verification triggers
const verification = await twilioClient.verify.v2.services(verifyServiceId)
  .verifications
  .create({ to: userPhoneNumber, channel: 'sms' });`
      },
      {
        id: "ethers_minter",
        label: "Ethers.js Smart Contract Relay",
        type: "logic",
        description: "Processes ERC-721 and ERC-20 transactions over EVM networks. Manages nonce queuing and handles gas spikes gracefully.",
        tech: "Ethers.js SDK v6",
        coords: { x: 65, y: 50 },
        metrics: [{ label: "Gas Limit", value: "Auto-managed" }, { label: "Nonce Queue", value: "Strict Queue" }],
        codeSnippet: `// Ethers.js credential issuance trigger
const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, CREDENTIALS_ABI, wallet);

// Execute secure token issuance
const tx = await contract.mintCertificate(recipientAddress, ipfsMetadataUrl, {
  gasLimit: 150000,
  maxFeePerGas: ethers.parseUnits('45', 'gwei'),
  maxPriorityFeePerGas: ethers.parseUnits('1.5', 'gwei')
});
const receipt = await tx.wait(); // Waits for block confirmation`
      },
      {
        id: "postgres_db",
        label: "AWS Relational Core",
        type: "storage",
        description: "Commits blockchain transaction hashes, status fields, and user phone logs in Postgres.",
        tech: "AWS RDS PostgreSQL / Knex.js",
        coords: { x: 90, y: 50 },
        metrics: [{ label: "Query RT", value: "<4ms write" }],
        codeSnippet: `// Updating Relational state following block confirm
await db('users_credentials')
  .where({ phone: userPhone })
  .update({
    mint_tx_hash: txReceipt.hash,
    token_id: txEvents.tokenId,
    minted_at: new Date()
  });`
      }
    ],
    edges: [
      { from: "ingress_trigger", to: "twilio_auth", label: "Verify Phone", animated: true, type: "sync" },
      { from: "twilio_auth", to: "ethers_minter", label: "Identity OK -> Send", animated: true, type: "event" },
      { from: "ethers_minter", to: "postgres_db", label: "Write Block Hash", animated: true, type: "async" }
    ]
  }
};

export const API_TEST_CASES: ApiTestCase[] = [
  {
    id: "delight_classify",
    method: "POST",
    path: "/api/v1/delight/process-email",
    description: "Submits a raw customer support email, routes it through NestJS and GCP Pub/sub, performs AI NLP intent labeling, and maps the structured JSON parameters.",
    requestBody: `{
  "sender": "customer@e-store.com",
  "subject": "Exchange request for Order #90214",
  "body": "Hi, I received my shirt is in Large size but it is too small. I would like to exchange it for an Extra Large. Can you confirm?",
  "receivedAt": "${new Date().toISOString()}"
}`,
    expectedResponse: `{
  "status": "QUEUED_AND_CLASSIFIED",
  "ticketId": "tick_67a21f8a8",
  "classification": {
    "intent": "order_exchange_request",
    "detectedEntities": {
      "orderId": "90214",
      "originalSize": "Large",
      "targetSize": "Extra Large",
      "productCategory": "apparel"
    },
    "sentiment": "Neutral/Polite",
    "urgency": "high"
  },
  "pipelineMetas": {
    "pubsubMessageId": "gcp_pubsub_msg_9951ad7",
    "bullMqJobId": "bull_job_8125",
    "workerPoolId": "nest_node_02"
  },
  "actionStarted": {
    "workflowType": "ExchangeWorkflow",
    "temporalId": "temp_wf_exchange_90214"
  }
}`,
    logs: [
      "[17:45:34.002] INGRESS: POST /api/v1/delight/process-email authenticated via gateway IP",
      "[17:45:34.015] PUBSUB: Publishing payload to topic 'raw-emails' (MessageId: gcp_pubsub_msg_9951ad7)",
      "[17:45:34.020] DISPATCH: BullMQ Ingestion worker picked up email (JobId: bull_job_8125)",
      "[17:45:34.022] REDIS: Active locks verified. No duplicate processing for sender",
      "[17:45:34.045] AI_NLP: Dispatching structured payload parameters to Gemini API router...",
      "[17:45:34.780] AI_NLP: Model analysis parsed with 98% intent confidence. Category: Exchange",
      "[17:45:34.790] TEMPORAL: Triggering state-machine process 'ExchangeWorkflow' (WorkflowId: temp_wf_exchange_90214)",
      "[17:45:34.805] POSTGRES: Creating entry ticket ID tick_67a21f8a8 with classified schemas",
      "[17:45:34.812] RESPONSE: Returning 201 Created to gateway hook"
    ]
  },
  {
    id: "calendar_overlap",
    method: "POST",
    path: "/api/v1/sync/calendar/availability",
    description: "Inspects conflicting timelines over Multi-Calendar APIs (Google Calendar / Microsoft O365 Graph) utilizing a custom interval overlap checker.",
    requestBody: `{
  "userId": "usr_9921c5",
  "targetMeetingTime": {
    "start": "2026-06-10T14:30:00Z",
    "end": "2026-06-10T15:30:00Z"
  },
  "timezones": ["America/New_York", "Europe/London"]
}`,
    expectedResponse: `{
  "userId": "usr_9921c5",
  "platformSchedulesReviewed": ["GoogleCalendar", "MicrosoftExchange365"],
  "hasCollision": true,
  "overlappingEvent": {
    "summary": "Distributed System Architecture Panel",
    "start": "2026-06-10T14:00:00Z",
    "end": "2026-06-10T15:00:00Z",
    "sourcePlatform": "MicrosoftExchange365"
  },
  "resolvedCalendarMap": {
    "totalScannedIntervals": 14,
    "intervalIntersectionTimeMs": "0.38ms",
    "tokensRotated": 1
  }
}`,
    logs: [
      "[17:45:35.105] GATEWAY: POST /api/v1/sync/calendar/availability started",
      "[17:45:35.115] DECRYPT: Slicing user tokens using AES-256 decrypted buffer credentials",
      "[17:45:35.140] HTTP: Fetching MS Graph /me/calendar/calendarView delta updates",
      "[17:45:35.290] HTTP: Fetching Google Calendar busy schedules",
      "[17:45:35.312] ANALYSIS: Constructing active Interval Matcher tree for 14 nodes...",
      "[17:45:35.313] COLLISION: Detected overlap with 'Distributed System Architecture Panel' in MS Graph",
      "[17:45:35.320] LOGGER: Conflict state committed in Redis cache view",
      "[17:45:35.322] RESPONSE: Flow complete. Returning conflict payload in 217ms"
    ]
  },
  {
    id: "web3_mint",
    method: "POST",
    path: "/api/v1/web3/mint-credential",
    description: "Triggers Stripe checking, processes Twilio MFA verification codes, and initiates gas-efficient ERC-721 smart contract block minting.",
    requestBody: `{
  "invoiceId": "in_st_8841295",
  "recipientName": "Muhammad Nabeel Asif",
  "mfaVerificationCode": "402919"
}`,
    expectedResponse: `{
  "status": "BLOCKCHAIN_TRANSACTION_SUBMITTED",
  "invoiceId": "in_st_8841295",
  "mfaStatus": "APPROVED",
  "transactionMeta": {
    "hash": "0x5c421712aefbc686ad7cc9231f82522bbdcbc12eabc2a67e91d84fbbdd8a002a",
    "nonce": 412,
    "blockNumberPending": 18274192,
    "gasUsedEstimated": 118402,
    "gasPriceGwei": "45.2 Gwei"
  },
  "assetMetadata": {
    "tokenId": "781",
    "name": "Senior Backend Specialist Certification",
    "ipfs_uri": "ipfs://QmYwAPzwh3pC_fake_hash/781.json"
  }
}`,
    logs: [
      "[17:45:36.502] GATEWAY: POST /api/v1/web3/mint-credential",
      "[17:45:36.510] STRIPE: Confirming payment status for invoice in_st_8841295 -> PAID",
      "[17:45:36.515] TWILIO: Submitting OTP 402919 comparison against Twilio Auth pool...",
      "[17:45:36.890] TWILIO: Code comparison validated successfully",
      "[17:45:36.902] BLOCKCHAIN: Preparing secure certificate data structures on IPFS storage",
      "[17:45:37.105] CONTRACT: Constructing EVM transaction on Ethers.js ... Address: 0x8a92... (Nonce: 412)",
      "[17:45:37.382] NETWORK: Broadcasted transaction to node pools. Transaction Hash: 0x5c421712ae...",
      "[17:45:37.395] DATABASE: Committing pending status and transaction hashes securely",
      "[17:45:37.400] RESPONSE: Returning transaction descriptor response"
    ]
  }
];
