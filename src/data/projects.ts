export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  demoLink: string;
  codeLink: string;
  featured: boolean;
  gridSpan: 1 | 2 | 3;
  status: "live" | "source-only";
}

export const projects: Project[] = [
  {
    title: "MERN Stack Chat App",
    description:
      "Real-time chat application with group messaging, Socket.io integration, JWT authentication, and persistent chat history with MongoDB.",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "JWT"],
    features: [
      "Real-time messaging",
      "Online/offline status",
      "Message timestamps",
    ],
    demoLink: "https://hm-chatapp.netlify.app/",
    codeLink: "https://github.com/ragulhm/Chat_app-Backend",
    featured: true,
    gridSpan: 2,
    status: "live",
  },
  {
    title: "Eduplanner – LLM-Based Multi-Agent System",
    description:
      "Developed an AI-driven lesson planning system using multi-agent LLM architecture (Evaluator, Optimizer, Analyst agents) to generate, evaluate, and refine lesson plans.",
    technologies: ["React", "Python", "FastAPI", "Ollama", "Cloud LLMs"],
    features: [
      "Multi-Agent AI System",
      "Intelligent Lesson Generation",
      "Adaptive & Personalized Learning",
      "Hybrid LLM Processing",
    ],
    demoLink: "",
    codeLink: "https://github.com/ragulhm/EDU-Planner-",
    featured: false,
    gridSpan: 1,
    status: "source-only",
  },
  {
    title: "Bot vs Human Tweet Classification",
    description:
      "Built a transformer-based NLP system to classify social media tweets as bot or human using BERT, RoBERTa, DistilBERT, and XLM-RoBERTa.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "HuggingFace Transformers",
      "Kaggle (GPU)",
      "Google Colab",
      "Matplotlib",
      "Scikit-learn",
    ],
    features: [
      "Transformer-Based NLP",
      "Multi-Model Approach",
      "Real-Time Classification",
      "Comprehensive Evaluation",
    ],
    demoLink: "",
    codeLink:
      "https://github.com/ragulhm/Fine-Tuned-Understanding-Enhancing-Social-Bot-Detection-",
    featured: false,
    gridSpan: 1,
    status: "source-only",
  },
  {
    title: "Plant Analysis AI",
    description:
      "AI tool that analyzes plant images using Google Gemini AI to identify species, assess health, and provide care recommendations with PDF reports.",
    technologies: [
      "React",
      "Express.js",
      "Gemini AI",
      "Multer",
      "PDF Generation",
    ],
    features: [
      "Image upload",
      "Species identification",
      "Health assessment",
      "Care recommendations",
    ],
    demoLink:
      "https://plant-analysis-tool-gemini-2-5-flask.onrender.com/",
    codeLink: "https://github.com/ragulhm/Plant-Analysis_tool__Gemini",
    featured: true,
    gridSpan: 1,
    status: "live",
  },
  {
    title: "Personal AI Workflow Automation",
    description:
      "Personal AI assistant workflow using n8n to automate chat, email, and calendar management with Google Gemini integration.",
    technologies: ["n8n", "Gemini AI", "Gmail API", "Workflow Automation"],
    features: [
      "Chat automation",
      "Email management",
      "AI-driven replies",
      "Context memory",
    ],
    demoLink: "https://github.com/ragulhm/n8n-Personal-ai-workflow-",
    codeLink: "https://github.com/ragulhm/n8n-Personal-ai-workflow-",
    featured: false,
    gridSpan: 1,
    status: "source-only",
  },
  {
    title: "Cyber Security Portfolio",
    description:
      "This portfolio is made by Vibe Coding, showcasing my work, skills, and projects. Built using modern web technologies and deployed on Firebase.",
    technologies: [
      "React",
      "Framer",
      "TypeScript",
      "Firebase",
      "Replit.Ai",
      "Lovable.Ai",
    ],
    features: ["Responsive Design", "Modern UI", "Project Showcase"],
    demoLink: "https://ragul-hitman-av.web.app/",
    codeLink: "https://github.com/ragulhm/nebula-dev-hub",
    featured: false,
    gridSpan: 1,
    status: "live",
  },
];
