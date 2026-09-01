/**
 * All portfolio content lives here — edit this file to update the site.
 */

export const personal = {
  name: 'Yashfa Waseem',
  role: 'Student | Prompt Engineer | AI & Data Enthusiast',
  tagline:
    'I build practical AI solutions using LLMs, RAG pipelines, NLP, and data-driven workflows.',
  email: 'yashfawaseem2006@gmail.com',
  location: 'Lahore, Pakistan',
  // Replace with your hosted resume URL if you prefer; the file ships in /public.
  resumeUrl: './Yashfa_Waseem_Resume.pdf',
}

export const socials = {
  linkedin: 'https://www.linkedin.com/in/yashfa-waseem-7653a6355',
  github: 'https://github.com/bint-e-waseem',
  kaggle: 'https://www.kaggle.com/yashfawaseem',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  paragraphs: [
    "I'm a student at IBIT, building my way into the world of AI — somewhere between a well-crafted prompt and a well-cleaned dataset. Generative AI fascinates me: how a few lines of instructions can turn a language model into a genuinely useful tool.",
    'My focus is practical. I design prompt workflows, build RAG pipelines that answer questions from real documents, and use NLP and data analysis to turn raw information into decisions. I don\'t just collect skills — I connect them to solve real problems.',
    "Everything I learn, I build with. My GitHub is my lab notebook: machine learning models, EDA notebooks, C++ systems, and my growing collection of LLM experiments. I'm currently in build mode and always open to collaborating on data and AI projects.",
  ],
  facts: [
    {
      icon: 'Target',
      label: 'Currently working on',
      value: 'Machine learning models & NLP projects',
    },
    {
      icon: 'BookOpen',
      label: 'Currently learning',
      value: 'Deep Learning, Advanced Pandas & Scikit-Learn',
    },
    {
      icon: 'Users',
      label: 'Open to collaborate on',
      value: 'Data analytics & AI projects',
    },
    {
      icon: 'Sparkles',
      label: 'Fun fact',
      value: 'I build logic in C++, solve problems in SQL, and visualize in Python',
    },
  ],
}

export type SkillGroup = {
  icon: string
  title: string
  blurb: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    icon: 'Code2',
    title: 'Programming',
    blurb: 'Strong fundamentals, clean logic.',
    skills: ['Python', 'SQL', 'C++'],
  },
  {
    icon: 'BarChart3',
    title: 'Data',
    blurb: 'From messy data to clear insight.',
    skills: ['Data Cleaning', 'Data Analysis', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    icon: 'Brain',
    title: 'AI & LLMs',
    blurb: 'Where my curiosity lives.',
    skills: [
      'NLP',
      'LLMs',
      'RAG',
      'Fine-tuning',
      'LangChain',
      'Prompt Engineering',
      'Scikit-Learn',
      'NLTK / spaCy',
    ],
  },
  {
    icon: 'Layers',
    title: 'Concepts',
    blurb: 'The foundations everything stands on.',
    skills: ['OOP', 'Inheritance & Polymorphism', 'EDA', 'Problem Solving'],
  },
  {
    icon: 'Wrench',
    title: 'Tools',
    blurb: 'My daily drivers.',
    skills: ['Git & GitHub', 'Jupyter Notebooks', 'VS Code', 'Kaggle'],
  },
]

export type Project = {
  icon: string
  title: string
  description: string
  tech: string[]
  /** Set to the repo URL once published; falls back to GitHub profile. */
  github: string
  /** Set to the deployed demo URL; falls back to GitHub profile. */
  demo: string
  status: 'Featured' | 'In progress'
}

/**
 * Featured projects — currently curated placeholders.
 * Swap `github` / `demo` for real URLs as you publish them.
 */
export const featuredProjects: Project[] = [
  {
    icon: 'Bot',
    title: 'RAG Document Assistant',
    description:
      'Chat with PDFs and documents — ingest, chunk, and embed files, retrieve the most relevant passages from a vector store, and generate grounded, cited answers with an LLM.',
    tech: ['Python', 'LangChain', 'RAG', 'Vector DB', 'LLM'],
    github: '',
    demo: '',
    status: 'In progress',
  },
  {
    icon: 'BarChart3',
    title: 'Data Cleaning & Analysis Dashboard',
    description:
      'An end-to-end data workflow: clean a messy real-world dataset, explore trends, and visualize the insights that matter — from raw CSV to decision-ready charts.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: '',
    demo: '',
    status: 'In progress',
  },
  {
    icon: 'MessageSquare',
    title: 'NLP Text Classification',
    description:
      'Classify sentiment and topics from raw text — preprocessing, feature extraction, and model evaluation to measure how well a machine can read between the lines.',
    tech: ['Python', 'Scikit-Learn', 'NLTK', 'spaCy', 'NLP'],
    github: '',
    demo: '',
    status: 'In progress',
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Fine-Tuned LLM Assistant',
    description:
      'A domain-specific assistant: fine-tune a language model on curated data so it speaks the language of one field fluently and answers with precision.',
    tech: ['Python', 'LLMs', 'Fine-tuning', 'Prompt Engineering'],
    github: '',
    demo: '',
    status: 'In progress',
  },
]

export type Repo = {
  name: string
  description: string
  language: string
  url: string
  demo?: string
}

/** Every public project repository from github.com/bint-e-waseem */
export const githubRepos: Repo[] = [
  {
    name: 'pinecone-vector-db-tutorial',
    description: 'Hands-on exploration of Pinecone vector databases — the retrieval backbone of RAG systems.',
    language: 'Jupyter Notebook',
    url: 'https://github.com/bint-e-waseem/pinecone-vector-db-tutorial',
  },
  {
    name: 'LLM_image_model',
    description: 'Prompt-to-image generator using Stable Diffusion XL via Hugging Face diffusers.',
    language: 'Python',
    url: 'https://github.com/bint-e-waseem/LLM_image_model',
  },
  {
    name: 'LLM_short_model',
    description: 'Qwen 2.5 1.5B Instruct — LLM inference and prompt-to-answer pipeline in Colab.',
    language: 'Jupyter Notebook',
    url: 'https://github.com/bint-e-waseem/LLM_short_model',
  },
  {
    name: 'Resume_analysis',
    description: 'AI-powered extraction of key skills and insights from resumes.',
    language: 'Jupyter Notebook',
    url: 'https://github.com/bint-e-waseem/Resume_analysis',
  },
  {
    name: 'AI-Task-Manager',
    description: 'OOP-based task management system for multiple AI agents and their assigned tasks.',
    language: 'Python',
    url: 'https://github.com/bint-e-waseem/AI-Task-Manager',
  },
  {
    name: 'Iris-classification-pipeline-KNN-',
    description: 'Machine learning pipeline classifying Iris samples with KNN.',
    language: 'Python',
    url: 'https://github.com/bint-e-waseem/Iris-classification-pipeline-KNN-',
  },
  {
    name: 'Tech-Stack-Recommender',
    description: 'A recommender that suggests technology stacks based on project needs.',
    language: 'Python',
    url: 'https://github.com/bint-e-waseem/Tech-Stack-Recommender',
  },
  {
    name: 'E-commerce-Performance-RFM',
    description: 'RFM analysis of e-commerce performance on real transaction data.',
    language: 'Python',
    url: 'https://github.com/bint-e-waseem/E-commerce-Performance-RFM',
  },
  {
    name: 'Dataset-1',
    description: 'Foundational data processing project involving cleaning and manipulation.',
    language: 'Jupyter Notebook',
    url: 'https://github.com/bint-e-waseem/Dataset-1',
  },
  {
    name: 'Dataset_2',
    description: 'Exploratory data analysis on a real-world dataset to uncover trends.',
    language: 'Jupyter Notebook',
    url: 'https://github.com/bint-e-waseem/Dataset_2',
  },
  {
    name: 'Dataset_3',
    description: 'Exploratory data analysis on a real-world dataset to uncover trends.',
    language: 'Jupyter Notebook',
    url: 'https://github.com/bint-e-waseem/Dataset_3',
  },
  {
    name: 'sql_queries',
    description: 'Library management system in SQL — schema design, CRUD, JOINs, subqueries, views & indexes.',
    language: 'SQL',
    url: 'https://github.com/bint-e-waseem/sql_queries',
  },
  {
    name: 'Smart-Password-Generator',
    description: 'A secure and customizable password generator written in Python.',
    language: 'Python',
    url: 'https://github.com/bint-e-waseem/Smart-Password-Generator',
  },
  {
    name: 'bank-system',
    description: 'A robust banking system simulation built with advanced C++ OOP concepts.',
    language: 'C++',
    url: 'https://github.com/bint-e-waseem/bank-system',
  },
  {
    name: 'oop',
    description: 'Deep dives into C++ OOP — inheritance, polymorphism, pointers, and more.',
    language: 'C++',
    url: 'https://github.com/bint-e-waseem/oop',
  },
  {
    name: 'cpp.basics',
    description: 'Deep dives into C++ fundamentals and problem solving.',
    language: 'C++',
    url: 'https://github.com/bint-e-waseem/cpp.basics',
  },
  {
    name: 'python-file-',
    description: 'Python scripting and automation experiments.',
    language: 'Python',
    url: 'https://github.com/bint-e-waseem/python-file-',
  },
  {
    name: 'PORTFOLIO',
    description: 'An earlier version of my personal portfolio, built with TypeScript and deployed on Vercel.',
    language: 'TypeScript',
    url: 'https://github.com/bint-e-waseem/PORTFOLIO',
    demo: 'https://portfolio-yashfa3.vercel.app',
  },
  {
    name: 'Game',
    description: 'Tic-Tac-Toe — an interactive web-based game.',
    language: 'HTML',
    url: 'https://github.com/bint-e-waseem/Game',
  },
  {
    name: 'birthday',
    description: 'A personal web project with a live GitHub Pages demo.',
    language: 'HTML',
    url: 'https://github.com/bint-e-waseem/birthday',
    demo: 'https://bint-e-waseem.github.io/birthday/',
  },
  {
    name: 'sales_tracker',
    description: 'A sales tracking web project.',
    language: 'HTML',
    url: 'https://github.com/bint-e-waseem/sales_tracker',
  },
  {
    name: 'practice_001',
    description: 'Early HTML & CSS practice experiments.',
    language: 'HTML',
    url: 'https://github.com/bint-e-waseem/practice_001',
  },
]

export const journey = {
  education: {
    school: 'IBIT',
    detail: 'Student — building foundations toward Data Science & AI',
    note: 'Pursuing my degree while shipping projects, notebooks, and LLM experiments in public.',
  },
  /** "Currently" callout */
  current: {
    learning: 'Deep Learning, Advanced Pandas, Scikit-Learn',
    building: 'Machine learning models & NLP projects',
  },
  phases: [
    {
      phase: 'Phase 01',
      title: 'Foundations — Logic First',
      description:
        'Started with C++ and OOP: pointers, inheritance, polymorphism. Paired it with SQL — joins, subqueries, complex queries. Logic became a habit.',
      tags: ['C++', 'OOP', 'SQL'],
    },
    {
      phase: 'Phase 02',
      title: 'Data — From Raw to Insight',
      description:
        'Moved into Python for data: cleaning messy datasets, exploratory analysis, and visualizations across multiple real-world datasets, including e-commerce RFM analysis.',
      tags: ['Python', 'Pandas', 'EDA'],
    },
    {
      phase: 'Phase 03',
      title: 'Machine Learning & NLP',
      description:
        'Built classification pipelines, resume analysis tools, and recommender systems with Scikit-Learn, NLTK, and spaCy — learning how models actually behave on real data.',
      tags: ['Scikit-Learn', 'NLP', 'ML Pipelines'],
    },
    {
      phase: 'Phase 04',
      title: 'Generative AI — Now',
      description:
        'Deep in the LLM stack: prompt engineering, RAG pipelines, vector databases (Pinecone), LangChain workflows, and fine-tuning. Building AI people can actually use.',
      tags: ['LLMs', 'RAG', 'LangChain', 'Fine-tuning'],
    },
  ],
}

export type Certificate = {
  name: string
  issuer: string
  year: string
  url?: string
  placeholder?: boolean
}

/**
 * Certifications — placeholders for now.
 * Replace with your real certificates (name, issuer, year, link) as you earn them.
 */
export const certificates: Certificate[] = [
  {
    name: 'Certificate Name',
    issuer: 'Issuer (e.g., Coursera, DataCamp, DeepLearning.AI)',
    year: '2026',
    placeholder: true,
  },
  {
    name: 'Certificate Name',
    issuer: 'Issuer (e.g., Google, Microsoft, Kaggle)',
    year: '2026',
    placeholder: true,
  },
  {
    name: 'Certificate Name',
    issuer: 'Issuer (e.g., freeCodeCamp, IBM)',
    year: '2026',
    placeholder: true,
  },
]
