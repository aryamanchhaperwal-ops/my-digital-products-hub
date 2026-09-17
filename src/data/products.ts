import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'ai-career-blueprint',
    slug: 'ai-career-blueprint',
    name: 'AI Career Blueprint',
    price: 299,
    category: 'Career & Learning',
    format: 'PDF',
    description: 'A practical career resource designed to explore AI-ready career paths, understand emerging opportunities, and navigate the changing world of work.',
    shortDescription: 'Explore AI-ready career paths, key high-leverage roles, and skills needed for the AI transformation.',
    resourceUrl: 'https://drive.google.com/file/d/12ToDrvknHKkjfTbLLDvERcoOtdfpyrRd/view?usp=drivesdk',
    paymentUrl: null,
    featured: true,
    fileCountOrMetric: 'Comprehensive Career Guide',
    highlights: [
      'Comprehensive breakdown of high-demand emerging AI career paths',
      'Step-by-step roadmap from baseline skill acquisition to career transition',
      'Actionable strategies to future-proof your career and stay ahead of automation',
      'Curated frameworks for building portfolio proof-of-work in AI domains'
    ],
    whatsIncluded: [
      'Full PDF Career Roadmap & Strategy Guide',
      'High-Impact AI Roles & Skill Matrices',
      'Portfolio & Proof-of-Work Playbook',
      'Curated Career Transition Checklists'
    ],
    whoIsThisFor: [
      'Professionals wanting to transition into AI-enhanced roles',
      'Students looking to position their skillsets for future employer demand',
      'Engineers, product managers, and operators navigating AI disruption'
    ],
    visualConcept: 'Career roadmap + AI + professional growth',
    theme: {
      gradientFrom: 'from-blue-600',
      gradientVia: 'via-indigo-600',
      gradientTo: 'to-violet-700',
      accentColor: '#3b82f6',
      tagBg: 'bg-blue-50 border-blue-200',
      tagText: 'text-blue-700',
      iconName: 'Compass'
    }
  },
  {
    id: 'ai-workflows',
    slug: 'ai-workflows',
    name: 'AI Workflows Playbook',
    price: 99,
    category: 'AI & Technology',
    format: 'PDF',
    description: 'A practical collection of AI workflows designed to help turn repetitive tasks and ideas into structured AI-powered processes.',
    shortDescription: 'Turn repetitive daily tasks and complex ideas into structured, automated AI-powered workflows.',
    resourceUrl: 'https://drive.google.com/file/d/1HoUVDS7U_HykIk8UtHkvYuGzgm86WNAF/view?usp=drivesdk',
    paymentUrl: null,
    featured: false,
    fileCountOrMetric: 'Step-by-Step AI Workflows',
    highlights: [
      'Ready-to-implement workflows for content creation, research, and analysis',
      'Automation setups connecting LLMs with daily productivity tools',
      'Process mapping blueprints to eliminate 10+ hours of manual weekly tasks',
      'Input-to-output templates engineered for reliable generation'
    ],
    whatsIncluded: [
      'Interactive PDF Workflows Playbook',
      'Step-by-step process flowcharts and logic sequences',
      'Tool connection guides (LLM + Zapier/Make/Notion)',
      'Prompt templates tailored for each workflow node'
    ],
    whoIsThisFor: [
      'Knowledge workers drowning in repetitive operational tasks',
      'Freelancers and creators looking to scale their client output',
      'Teams wanting standardized AI process documentation'
    ],
    visualConcept: 'Connected workflow nodes + automation + AI',
    theme: {
      gradientFrom: 'from-indigo-600',
      gradientVia: 'via-purple-600',
      gradientTo: 'to-pink-600',
      accentColor: '#8b5cf6',
      tagBg: 'bg-indigo-50 border-indigo-200',
      tagText: 'text-indigo-700',
      iconName: 'GitMerge'
    }
  },
  {
    id: 'ai-agents-database',
    slug: 'ai-agents-database',
    name: 'AI Agents Database',
    price: 99,
    category: 'AI & Technology',
    format: 'Excel / Google Sheets',
    description: 'A curated database of AI agents, frameworks, and autonomous AI systems designed to help users discover and explore modern agentic AI resources.',
    shortDescription: 'Curated database of AI agents, frameworks, and autonomous systems to build and explore.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1c2Z5a2vjO4AvQWIJM9bngAtGYpRx6eoe/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: false,
    fileCountOrMetric: 'Curated Agent Frameworks & Systems',
    highlights: [
      'Categorized overview of top autonomous agent frameworks and tools',
      'Direct links, repos, use-cases, and architecture types',
      'Filtered by open-source status, deployment difficulty, and capability',
      'Regularly structured Google Sheet with multi-criteria sorting'
    ],
    whatsIncluded: [
      'Structured Google Sheet & downloadable Excel file',
      'Framework comparisons (CrewAI, AutoGen, LangGraph, etc.)',
      'Use-case taxonomy and capability tags',
      'Direct documentation and repository reference links'
    ],
    whoIsThisFor: [
      'Developers building multi-agent autonomous applications',
      'Technical founders exploring agentic product ideas',
      'AI researchers analyzing agent architectures and capabilities'
    ],
    visualConcept: 'AI agent/network visualization + autonomous systems',
    theme: {
      gradientFrom: 'from-cyan-600',
      gradientVia: 'via-blue-600',
      gradientTo: 'to-indigo-700',
      accentColor: '#06b6d4',
      tagBg: 'bg-cyan-50 border-cyan-200',
      tagText: 'text-cyan-800',
      iconName: 'Bot'
    }
  },
  {
    id: 'ai-atlas',
    slug: 'ai-atlas',
    name: 'AI Atlas',
    price: 99,
    category: 'AI & Technology',
    format: 'Excel / Google Sheets',
    description: 'A comprehensive AI tool resource containing 500 AI tools organized to help users discover useful tools across different categories and use cases.',
    shortDescription: '500 organized AI tools categorized to find the exact software for your task or workflow.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/193Minlk8iELWjiP9_qFmHhmstYAuWLwl/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: true,
    fileCountOrMetric: '500 Curated AI Tools',
    highlights: [
      '500 categorized AI tools covering writing, image, video, audio, dev, and research',
      'Pricing models clearly tagged (Free, Freemium, Open Source, Paid)',
      'Specific practical use-case tagging for rapid filtering',
      'Saves dozens of hours searching through marketing noise'
    ],
    whatsIncluded: [
      'Complete 500+ Tool Google Sheet with Excel download option',
      'Categorized tabs and filterable columns',
      'Direct links, key features, and pricing breakdown',
      'Curated recommendations for best-in-class picks'
    ],
    whoIsThisFor: [
      'Designers, marketers, writers, and builders seeking the best AI tools',
      'Small business owners looking to reduce software costs with AI',
      'Curious creators wanting a bird-eye map of the AI landscape'
    ],
    visualConcept: 'Digital map/atlas concept + AI tools',
    theme: {
      gradientFrom: 'from-sky-500',
      gradientVia: 'via-blue-600',
      gradientTo: 'to-violet-600',
      accentColor: '#0284c7',
      tagBg: 'bg-sky-50 border-sky-200',
      tagText: 'text-sky-800',
      iconName: 'Map'
    }
  },
  {
    id: 'book-summary-vault',
    slug: 'book-summary-vault',
    name: 'Book Summary Vault',
    price: 99,
    category: 'Learning',
    format: 'Excel / Google Sheets',
    description: 'A curated collection of 200 book summaries designed to help readers quickly explore important ideas, concepts, and lessons from books.',
    shortDescription: '200 concise, impactful book summaries capturing key ideas from top non-fiction titles.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1Xd8PYrRADLERENPyKareg8AOcsCoVvaw/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: false,
    fileCountOrMetric: '200 Book Summaries',
    highlights: [
      '200 high-impact non-fiction books condensed into core takeaways',
      'Covers psychology, business, strategy, mental models, and personal growth',
      'Actionable principles highlighted for each title to apply in daily life',
      'Filterable by theme, author, difficulty, and reading time'
    ],
    whatsIncluded: [
      'Interactive Google Sheet & downloadable Excel spreadsheet',
      'Core insight summary & actionable takeaway column for each book',
      'Key quotes, overarching thesis, and recommended pairing titles',
      'Categorized book list sorted by domain and impact rating'
    ],
    whoIsThisFor: [
      'Avid learners who want to grasp key concepts without 20 hours per book',
      'Professionals looking for mental models and strategic business ideas',
      'Students and thinkers expanding their intellectual breadth'
    ],
    visualConcept: 'Books + knowledge + summary/notes concept',
    theme: {
      gradientFrom: 'from-amber-500',
      gradientVia: 'via-orange-600',
      gradientTo: 'to-red-600',
      accentColor: '#f59e0b',
      tagBg: 'bg-amber-50 border-amber-200',
      tagText: 'text-amber-800',
      iconName: 'BookOpen'
    }
  },
  {
    id: 'ai-certificate-vault',
    slug: 'ai-certificate-vault',
    name: 'AI Certificate Vault',
    price: 99,
    category: 'Career & Learning',
    format: 'Excel / Google Sheets',
    description: 'A curated database of 500 AI-related certificates and learning opportunities to help users discover courses and credentials.',
    shortDescription: '500 AI certificates and courses to build credible credentials and upgrade your resume.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1QGd4Bs2R-WbpdtaYRuS7ia__OUqMpGYy/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: false,
    fileCountOrMetric: '500 AI Certificates & Courses',
    highlights: [
      '500 curated courses and certifications from top universities & tech giants',
      'Filtered by free audit vs. verified certificate options',
      'Level categorized: Beginner, Intermediate, Advanced Machine Learning',
      'Direct enrollment links and estimated completion hours'
    ],
    whatsIncluded: [
      'Comprehensive Google Sheet and Excel format',
      'Provider breakdown (Google, DeepLearning.AI, Stanford, Microsoft, etc.)',
      'Prerequisite guides and credential recognition metrics',
      'Direct links for streamlined course registration'
    ],
    whoIsThisFor: [
      'Job seekers wanting resume-boosting credentials in AI',
      'Self-taught learners looking for high-quality structured curriculum',
      'Managers seeking upskilling materials for their engineering or product teams'
    ],
    visualConcept: 'Certificates + AI + learning credentials',
    theme: {
      gradientFrom: 'from-emerald-500',
      gradientVia: 'via-teal-600',
      gradientTo: 'to-cyan-700',
      accentColor: '#10b981',
      tagBg: 'bg-emerald-50 border-emerald-200',
      tagText: 'text-emerald-800',
      iconName: 'Award'
    }
  },
  {
    id: 'founder-os',
    slug: 'founder-os',
    name: 'Founder OS',
    price: 199,
    category: 'Business & Founder Resources',
    format: 'Excel / Google Sheets',
    description: 'A practical founder resource designed to organize startup ideas, entrepreneurial thinking, and business exploration in one structured system.',
    shortDescription: 'Structured operating system to validate startup ideas, organize strategy, and manage early traction.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1pCtyVWU20yfSj7gxcQ9ztAw5nsPp9n_t/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: true,
    fileCountOrMetric: 'Complete Founder System',
    highlights: [
      'Startup idea validation scoring matrices and problem-market fit tracker',
      'Lean business model canvases and customer interview logs',
      'Competitor breakdown and value proposition structuring tools',
      'Milestone roadmaps and go-to-market execution trackers'
    ],
    whatsIncluded: [
      'Multi-tab comprehensive Google Sheets & Excel system',
      'Startup validation calculator and decision matrices',
      'Early traction and customer discovery templates',
      'Financial unit economics & runway planning models'
    ],
    whoIsThisFor: [
      'Aspiring entrepreneurs evaluating new business or micro-SaaS ideas',
      'Solopreneurs seeking structured operating rhythm and clarity',
      'Early-stage founders executing idea validation and initial launch'
    ],
    visualConcept: 'Startup/founder operating system + business strategy',
    theme: {
      gradientFrom: 'from-violet-600',
      gradientVia: 'via-indigo-600',
      gradientTo: 'to-purple-800',
      accentColor: '#7c3aed',
      tagBg: 'bg-violet-50 border-violet-200',
      tagText: 'text-violet-800',
      iconName: 'Briefcase'
    }
  },
  {
    id: 'github-repository-vault',
    slug: 'github-repository-vault',
    name: 'AI GitHub Repository Vault',
    price: 99,
    category: 'AI & Technology',
    format: 'Excel / Google Sheets',
    description: 'A curated collection of AI and technology GitHub repositories designed to help users discover useful open-source projects, frameworks, tools, and learning resources.',
    shortDescription: 'Curated open-source AI repositories, GitHub tools, and frameworks for builders and coders.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1x8in6excm41sVf-NecHVxxqqLDzoAgWc/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: false,
    fileCountOrMetric: 'Curated Open Source Repos',
    highlights: [
      'Vetted open-source AI projects categorized by tech stack and functionality',
      'Starred frameworks for LLM fine-tuning, RAG pipelines, and local models',
      'Repository links, language specifications, and licensing tags',
      'Filters for beginner-friendly codebases vs. production-grade infrastructure'
    ],
    whatsIncluded: [
      'Organized Google Sheets & Excel repository database',
      'Direct GitHub links, star counts, and active maintenance indicators',
      'Architectural category tags (Vision, NLP, Agents, Audio, Vector DBs)',
      'Quick-start notes on getting repositories running locally'
    ],
    whoIsThisFor: [
      'Developers building modern AI and LLM-powered applications',
      'Open-source enthusiasts searching for impactful repositories to learn from',
      'Technical architects benchmarking tools before building proprietary tech'
    ],
    visualConcept: 'Code repository + GitHub-inspired developer ecosystem visual',
    theme: {
      gradientFrom: 'from-slate-700',
      gradientVia: 'via-blue-800',
      gradientTo: 'to-indigo-900',
      accentColor: '#334155',
      tagBg: 'bg-slate-100 border-slate-300',
      tagText: 'text-slate-800',
      iconName: 'Code'
    }
  },
  {
    id: 'productivity-vault',
    slug: 'productivity-vault',
    name: 'Productivity Vault',
    price: 99,
    category: 'Productivity',
    format: 'Excel / Google Sheets',
    description: 'A curated collection of 100 productivity systems and ideas designed to help users organize their work, time, goals, and personal productivity.',
    shortDescription: '100 tested productivity systems, focus frameworks, and daily execution methods.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1jzxjsnVCjwPdyhSIUvN3h1ZUYsn3JfJL/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: false,
    fileCountOrMetric: '100 Productivity Systems',
    highlights: [
      '100 practical productivity frameworks from world-class performers and thinkers',
      'Clear explanations on time-blocking, deep work, energy management, and prioritization',
      'Scored by implementation difficulty and daily effort requirement',
      'Structured templates you can immediately paste into your daily workflow'
    ],
    whatsIncluded: [
      'Interactive Google Sheet & downloadable Excel dashboard',
      'Step-by-step implementation guide for all 100 frameworks',
      'Categorized by goal (Focus, Time Management, Delegation, Goal Setting)',
      'Template prompts for reviewing and tracking your weekly progress'
    ],
    whoIsThisFor: [
      'Anyone overwhelmed by multitasking and modern digital distractions',
      'Knowledge workers wanting to double their deep work output',
      'Students and creators striving for consistent personal discipline'
    ],
    visualConcept: 'Calendar + checklist + organized productivity system',
    theme: {
      gradientFrom: 'from-fuchsia-600',
      gradientVia: 'via-purple-600',
      gradientTo: 'to-blue-600',
      accentColor: '#c026d3',
      tagBg: 'bg-fuchsia-50 border-fuchsia-200',
      tagText: 'text-fuchsia-800',
      iconName: 'CheckCircle2'
    }
  },
  {
    id: 'prompt-vault',
    slug: 'prompt-vault',
    name: 'Prompt Vault',
    price: 99,
    category: 'AI & Technology',
    format: 'Excel / Google Sheets',
    description: 'A curated collection of AI prompts designed for practical use across different tasks, workflows, learning, productivity, content, and AI applications.',
    shortDescription: 'Battle-tested prompts engineered for high-accuracy outputs across writing, coding, and thinking.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1W2uQtG1-ktyi2W0bKF6EKWw5-kUS5yG7/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: true,
    fileCountOrMetric: 'Curated High-Performance Prompts',
    highlights: [
      'Engineered prompts with contextual variable placeholders ([ROLE], [TASK], [CONSTRAINTS])',
      'Covers copywriting, strategic ideation, research synthesis, and code generation',
      'Designed to reduce hallucinations and ensure high-accuracy responses',
      'Copy-paste ready for ChatGPT, Claude, Gemini, and open-source models'
    ],
    whatsIncluded: [
      'Structured Google Sheet & Excel spreadsheet with copyable prompt blocks',
      'Categorized task taxonomy with prompt formula breakdown',
      'Tips on fine-tuning temperature and prompt chaining',
      'Examples of before vs. after prompt optimization'
    ],
    whoIsThisFor: [
      'Content creators, writers, marketers, and researchers using LLMs daily',
      'Engineers looking to build reliable system prompts for AI tools',
      'Anyone tired of vague, generic responses from AI chatbots'
    ],
    visualConcept: 'AI prompt/chat interface + prompt cards',
    theme: {
      gradientFrom: 'from-blue-600',
      gradientVia: 'via-teal-500',
      gradientTo: 'to-emerald-600',
      accentColor: '#0ea5e9',
      tagBg: 'bg-teal-50 border-teal-200',
      tagText: 'text-teal-800',
      iconName: 'Sparkles'
    }
  },
  {
    id: 'stock-research-vault',
    slug: 'stock-research-vault',
    name: 'Stock Research Vault',
    price: 99,
    category: 'Research',
    format: 'Excel / Google Sheets',
    description: 'A structured stock research resource designed for learning and organizing company research, financial information, and investment research workflows.',
    shortDescription: 'Organize company research, financial models, and fundamental analysis workflows in one clean system.',
    resourceUrl: 'https://docs.google.com/spreadsheets/d/1uYpi1p2SioaQPGeA2Li5c8sF7hJstTU3/edit?usp=drivesdk&ouid=117437069259993864502&rtpof=true&sd=true',
    paymentUrl: null,
    featured: false,
    fileCountOrMetric: 'Structured Research System',
    disclaimer: 'Important Notice: The Stock Research Vault is exclusively an educational and research organization framework. It is strictly for personal research workflows and does NOT constitute financial advice, investment advisory, or a recommendation to buy or sell securities.',
    highlights: [
      'Structured financial metric tracking sheets and valuation checklists',
      'Organized framework for quarterly earnings notes and business moats',
      'Standardized checklists for assessing business risks and competitive advantage',
      'Clear templates to synthesize 10-K, annual reports, and investor presentations'
    ],
    whatsIncluded: [
      'Multi-tab Google Sheets & Excel template',
      'Company research canvas & financial statement logging sheets',
      'Competitive moat analysis matrix and valuation checklist',
      'Comprehensive educational glossary of key financial ratios'
    ],
    whoIsThisFor: [
      'Curious learners studying fundamental business analysis and corporate finance',
      'Researchers wanting to organize their company notes in a structured workspace',
      'Students of finance looking for organized research methodologies'
    ],
    visualConcept: 'Charts + company research + analytical dashboard concept',
    theme: {
      gradientFrom: 'from-emerald-600',
      gradientVia: 'via-teal-700',
      gradientTo: 'to-slate-800',
      accentColor: '#059669',
      tagBg: 'bg-emerald-50 border-emerald-200',
      tagText: 'text-emerald-800',
      iconName: 'TrendingUp'
    }
  }
];

export const CATEGORIES = [
  'All',
  'AI & Technology',
  'Productivity',
  'Career & Learning',
  'Research',
  'Business & Founder Resources'
] as const;

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'All': 'Browse the complete collection of 11 practical digital resources built for modern professionals.',
  'AI & Technology': 'Curated databases, prompt libraries, workflow playbooks, and repositories for the modern AI ecosystem.',
  'Productivity': 'Systems, frameworks, and actionable templates designed to streamline work and maximize daily output.',
  'Career & Learning': 'Roadmaps, curated courses, certifications, and book summaries to accelerate your knowledge.',
  'Research': 'Structured methodologies and financial research templates for organizing deep analytical work.',
  'Business & Founder Resources': 'Complete operating systems, startup validation frameworks, and entrepreneurial planning models.'
};
