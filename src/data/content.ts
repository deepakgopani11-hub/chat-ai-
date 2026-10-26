import { ServiceDetail, CaseStudy, Testimonial, FAQItem } from '../types/index.ts';

export const HERO_IMAGE = '/src/assets/images/hero_arves_studio_1792997679357.jpg';
export const ABOUT_TEAM_IMAGE = '/src/assets/images/about_arves_team_1792997681453.jpg';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'ai-video',
    title: 'AI Video Creation',
    shortDesc: 'Cinematic commercials, 3D product visualizers, multilingual avatars, and automated high-velocity social video pipelines.',
    fullDesc: 'We replace costly weeks-long traditional video production with proprietary generative AI pipelines that yield broadcast-quality commercial footage, dynamic localized avatars, and automated batch content engines in days.',
    image: '/src/assets/images/service_ai_video_1792997680083.jpg',
    features: [
      'Commercial broadcast-grade generative cinematography',
      'Hyper-realistic multilingual AI digital brand ambassadors',
      'High-velocity programmatic social video pipelines (Reels, TikTok, YouTube Shorts)',
      'Product rendering & photorealistic CGI scene substitution',
      'Personalized dynamic video engines for VIP account-based sales',
      'Automated neural voice cloning, sound design & precision audio mixing'
    ],
    deliverables: [
      'Master 4K broadcast cuts with custom motion graphics',
      'Modular 9:16 vertical reels with embedded burned-in captions',
      'Localized language adaptations across 28+ dialects',
      'Editable project source files and raw generative model prompts'
    ],
    metrics: [
      { label: 'Turnaround Time', value: '48h' },
      { label: 'Cost Reduction vs Traditional Sets', value: '72%' },
      { label: 'Monthly Video Output Capacity', value: '500+ Assets' }
    ],
    processSteps: [
      { title: 'Concept & Narrative Scripting', description: 'Storyboarding and frame prompt architecture tuned to your brand guidelines.' },
      { title: 'Generative Synthesis & LoRA Tuning', description: 'Generating high-resolution shots with custom style models trained on your visual assets.' },
      { title: 'Neural Upscaling & Color Finishing', description: 'Multi-pass resolution enhancement, temporal consistency stabilization, and audio scoring.' }
    ]
  },
  {
    id: 'ai-website',
    title: 'AI Website Building',
    shortDesc: 'Ultra-fast, high-converting digital platforms engineered with intelligent adaptive interfaces, generative CMS, and autonomous SEO.',
    fullDesc: 'We design and construct next-generation web presences that adapt in real time to visitor behavior, load in under 400 milliseconds, and run on modern serverless edge architecture with seamless generative AI content management.',
    image: '/src/assets/images/service_ai_website_1792997680654.jpg',
    features: [
      'Sub-500ms global edge delivery with modern React/TypeScript stacks',
      'Context-aware dynamic personalization based on visitor traffic source',
      'Automated generative CMS for instant landing page and blog scaling',
      'Conversion-rate optimized design system adhering to strict typography discipline',
      'Continuous algorithmic SEO metadata generation and structured schema deployment',
      'Interactive WebGL/3D product stages & fluid micro-interactions'
    ],
    deliverables: [
      'Production-ready codebase with complete intellectual property transfer',
      'Custom headless CMS with autonomous drafting and copy optimization',
      'Figma design system token library and responsive component hierarchy',
      'Analytics, heatmapping, and conversion event instrumentation'
    ],
    metrics: [
      { label: 'Average Page Load Time', value: '380ms' },
      { label: 'Conversion Rate Lift', value: '+3.4x' },
      { label: 'Google Lighthouse Score', value: '99/100' }
    ],
    processSteps: [
      { title: 'Architecture & UX Wireframing', description: 'Information architecture and conversion flow mapping built for zero dead clicks.' },
      { title: 'Component Engineering & AI Integration', description: 'Modular frontend development with edge-rendered dynamic personalization.' },
      { title: 'Load Stress & Conversion Auditing', description: 'Rigorous cross-device testing, WCAG AA accessibility compliance, and edge deployment.' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automations',
    shortDesc: 'Autonomous multi-agent orchestration, intelligent lead qualification, document synthesis, and self-healing enterprise pipelines.',
    fullDesc: 'We construct autonomous software pipelines that liberate your team from mechanical operations. From incoming lead enrichment to complex multi-system document extraction, our agentic workflows execute with 99.8% precision.',
    image: '/src/assets/images/service_ai_automation_1792997681017.jpg',
    features: [
      'Multi-agent workflow orchestration with human-in-the-loop audit gates',
      'Instantaneous CRM lead qualification, research briefing, and CRM sync',
      'Multimodal unstructured document parsing (PDFs, contracts, invoices, balance sheets)',
      'Automated customer support resolution agents with strict guardrails',
      'Bidirectional integrations across HubSpot, Salesforce, Slack, Notion, and custom ERPs',
      'Self-healing error detection and fallback escalation triggers'
    ],
    deliverables: [
      'Fully orchestrated automation runtime with custom webhooks and APIs',
      'Interactive executive observability dashboard and execution telemetry',
      'Standard operating procedure (SOP) documentation and human handoff protocols',
      'Enterprise data privacy isolation with zero training leakage guarantees'
    ],
    metrics: [
      { label: 'Manual Hours Saved Weekly', value: '120+ hrs' },
      { label: 'Lead Response Latency', value: '< 90 sec' },
      { label: 'Execution Accuracy', value: '99.8%' }
    ],
    processSteps: [
      { title: 'Workflow Audit & Bottleneck Mapping', description: 'Deep audit of existing manual spreadsheets, handoffs, and operational delays.' },
      { title: 'Agent Pipeline Construction', description: 'Engineering specialized LLM agent nodes with deterministic tool validation.' },
      { title: 'Parallel Shadow Run & Full Rollout', description: 'Rigorous testing alongside human operators before transitioning to fully autonomous mode.' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'veloce-mobility',
    client: 'Veloce Mobility',
    industry: 'Electric Vehicles & Fleet Tech',
    service: 'AI Video Creation',
    serviceId: 'ai-video',
    headline: '42 Cinematic Commercial Ads Produced in 14 Days',
    challenge: 'Launching a multi-region electric scooter campaign required dozens of hyper-targeted localized video variants across 6 European markets, but traditional studio filming was quoted at $180,000 and 10 weeks.',
    solution: 'Arves built a custom generative video pipeline featuring photo-matched 3D vehicle models in authentic Parisian, Berlin, and Milan cityscapes, complete with native linguistic voiceovers.',
    impactMetrics: [
      { value: '4.2x', label: 'Return on Ad Spend (ROAS)' },
      { value: '78%', label: 'Budget Saved vs Traditional' },
      { value: '14 Days', label: 'Total Brief-to-Live Time' }
    ]
  },
  {
    id: 'kinetix-bio',
    client: 'Kinetix Bio',
    industry: 'HealthTech & Preventive Diagnostics',
    service: 'AI Website Building',
    serviceId: 'ai-website',
    headline: 'Conversion Engine with 380ms Edge Performance',
    challenge: 'A clinical diagnostic startup was suffering from an 82% bounce rate on their legacy WordPress site, struggling to educate clinic directors while capturing enterprise consultation requests.',
    solution: 'Arves redesigned and engineered a bespoke web platform utilizing edge-rendered dynamic personalization, custom interactive lab tour animations, and a sub-second diagnostic intake funnel.',
    impactMetrics: [
      { value: '+240%', label: 'Qualified Enterprise Inquiries' },
      { value: '380ms', label: 'Median Worldwide Page Load' },
      { value: '100%', label: 'Lighthouse Accessibility' }
    ]
  },
  {
    id: 'veritas-capital',
    client: 'Veritas Financial Advisory',
    industry: 'Private Equity & M&A',
    service: 'AI Automations',
    serviceId: 'ai-automation',
    headline: '120 Weekly Analyst Hours Automated with Agentic Data Extraction',
    challenge: 'Investment analysts were spending over 25 hours per week manually extracting balance sheet line items, debt schedules, and covenants from disparate 80-page quarterly PDFs.',
    solution: 'Arves deployed an autonomous document processing pipeline with verified schema checking, automated financial red-flag tagging, and one-click financial model population.',
    impactMetrics: [
      { value: '120 hrs', label: 'Analyst Time Saved Weekly' },
      { value: '99.8%', label: 'Deterministic Data Extraction' },
      { value: '4 min', label: 'Deal Teaser Turnaround' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Arves completely reframed how we think about production speed. Their AI video pipeline gave us cinematic creative that rivaled our $200k agency productions, delivered in 48 hours.',
    author: 'Elena Rostova',
    role: 'Chief Marketing Officer',
    company: 'Veloce Mobility',
    metric: '4.2x ROAS'
  },
  {
    id: 't-2',
    quote: 'The website Arves built for us is the fastest in our entire vertical. Within 60 days of launch, inbound enterprise demo bookings increased by over 200%. The quality is impeccable.',
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Kinetix Bio',
    metric: '+240% Pipeline'
  },
  {
    id: 't-3',
    quote: 'Their automation engineers did what our internal engineering team estimated would take six months. Our deal intake pipeline runs autonomously without human error.',
    author: 'David H. Miller',
    role: 'Managing Partner',
    company: 'Veritas Advisory',
    metric: '120 hrs/wk saved'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Julian Arves',
    role: 'Founder & Principal Creative Technologist',
    bio: 'Former senior creative director and machine learning engineer with 12 years directing commercial campaigns and engineering generative visual workflows.'
  },
  {
    name: 'Soren Lindqvist',
    role: 'Head of AI Engineering & Agents',
    bio: 'Specialist in multi-agent orchestration, deterministic schema verification, and low-latency LLM inference architectures.'
  },
  {
    name: 'Aria Chen',
    role: 'Director of Digital Experience & Architecture',
    bio: 'Pioneered sub-second edge web development and conversion-engineered typography systems across top venture-backed scaleups.'
  },
  {
    name: 'Tarek Mansour',
    role: 'Lead Generative Cinematographer',
    bio: 'Commercial 3D compositor and visual effects supervisor translating traditional film techniques into promptable neural representations.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Ownership & Security',
    question: 'Who owns the intellectual property of the videos, websites, and automations?',
    answer: 'You retain 100% full intellectual property ownership. All custom code, generated video master files, prompts, LoRA weights, and workflow configurations are transferred unconditionally upon project delivery.'
  },
  {
    category: 'Services',
    question: 'How do you ensure AI video doesn\'t have strange artifacts or hallucinations?',
    answer: 'We employ a hybrid neural-and-human production framework. Generative video is stabilized using custom control nets, temporal consistency filters, and finished by veteran human colorists and motion designers before delivery.'
  },
  {
    category: 'Process',
    question: 'What is the typical turnaround timeline for an Arves project?',
    answer: 'AI Video sprints typically deliver master cuts in 48 to 72 hours. Bespoke AI web platforms range between 2 to 3 weeks. Complex multi-system automation architectures typically deploy within 10 to 14 business days.'
  },
  {
    category: 'Services',
    question: 'Can you integrate AI automations with our existing tools (Slack, HubSpot, ERP)?',
    answer: 'Yes. We specialize in building deterministic connectors using standard REST APIs, webhooks, and secure cloud functions without requiring you to replace your existing software stack.'
  },
  {
    category: 'Ownership & Security',
    question: 'Is client proprietary data ever used to train public AI models?',
    answer: 'Never. We operate exclusively with enterprise zero-data-retention APIs and dedicated isolated virtual private environments. Your documents, transcripts, and assets remain strictly confidential.'
  }
];

export const PRICING_TIERS = [
  {
    id: 'sprint',
    name: 'Production Sprint',
    bestFor: 'Targeted service delivery with immediate turnaround',
    price: '$4,800',
    timeline: '3–5 Business Days',
    deliverables: [
      'Single focused deliverable (e.g. 5x AI Video Ads or 1 Custom Web Funnel)',
      'Full source files and 100% commercial IP rights',
      'Two rounds of creative refinement',
      'Dedicated project manager and direct Slack channel'
    ]
  },
  {
    id: 'studio-retainer',
    name: 'Dedicated AI Studio',
    bestFor: 'High-growth companies needing continuous video, web, and automation velocity',
    price: '$9,500',
    period: '/ month',
    highlighted: true,
    timeline: 'Continuous Weekly Sprints',
    deliverables: [
      'Up to 20 monthly 4K AI video deliverables',
      'Ongoing web platform development, CMS updates & A/B tests',
      'Active automation maintenance and new agent workflows',
      'Weekly strategy review with Principal Architect',
      'Guaranteed 24-hour turnaround on priority requests'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Architecture',
    bestFor: 'Custom multi-department AI operational deployment',
    price: 'Custom',
    timeline: '4–8 Weeks Scope',
    deliverables: [
      'Full enterprise operational workflow discovery and systems mapping',
      'Bespoke multi-agent autonomous infrastructure with SOC2-grade security',
      'Custom fine-tuned visual models for internal brand consistency',
      'Team enablement workshops and ongoing SLA support'
    ]
  }
];
