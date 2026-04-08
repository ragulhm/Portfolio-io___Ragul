from django.shortcuts import render

def index(request):
    projects = [
        {
            "title": "MERN Stack Chat App",
            "description": "Real-time chat application with group messaging, Socket.io integration, JWT authentication, and persistent chat history with MongoDB.",
            "technologies": ["React", "Express.js", "MongoDB", "Socket.io", "JWT"],
            "features": ["Real-time messaging", "Online/offline status", "Message timestamps"],
            "demoLink": "https://hm-chatapp.netlify.app/",
            "codeLink": "https://github.com/ragulhm/Chat_app-Backend",
            "status": "live",
            "gridSpan": 2
        },
        {
            "title": "Eduplanner – LLM-Based Multi-Agent System",
            "description": "Developed an AI-driven lesson planning system using multi-agent LLM architecture (Evaluator, Optimizer, Analyst agents) to generate, evaluate, and refine lesson plans.",
            "technologies": ["React", "Python", "FastAPI", "Ollama", "Cloud LLMs"],
            "features": ["Multi-Agent AI System", "Intelligent Lesson Generation", "Adaptive & Personalized Learning", "Hybrid LLM Processing"],
            "demoLink": "",
            "codeLink": "https://github.com/ragulhm/EDU-Planner-",
            "status": "source-only",
            "gridSpan": 1
        },
        {
            "title": "Bot vs Human Tweet Classification",
            "description": "Built a transformer-based NLP system to classify social media tweets as bot or human using BERT, RoBERTa, DistilBERT, and XLM-RoBERTa.",
            "technologies": ["React", "Python", "FastAPI", "HuggingFace Transformers", "Kaggle (GPU)", "Google Colab", "Matplotlib", "Scikit-learn"],
            "features": ["Transformer-Based NLP", "Multi-Model Approach", "Real-Time Classification", "Comprehensive Evaluation"],
            "demoLink": "",
            "codeLink": "https://github.com/ragulhm/Fine-Tuned-Understanding-Enhancing-Social-Bot-Detection-",
            "status": "source-only",
            "gridSpan": 1
        },
        {
            "title": "Plant Analysis AI",
            "description": "AI tool that analyzes plant images using Google Gemini AI to identify species, assess health, and provide care recommendations with PDF reports.",
            "technologies": ["React", "Express.js", "Gemini AI", "Multer", "PDF Generation"],
            "features": ["Image upload", "Species identification", "Health assessment", "Care recommendations"],
            "demoLink": "https://plant-analysis-tool-gemini-2-5-flask.onrender.com/",
            "codeLink": "https://github.com/ragulhm/Plant-Analysis_tool__Gemini",
            "status": "live",
            "gridSpan": 1
        },
        {
            "title": "Personal AI Workflow Automation",
            "description": "Personal AI assistant workflow using n8n to automate chat, email, and calendar management with Google Gemini integration.",
            "technologies": ["n8n", "Gemini AI", "Gmail API", "Workflow Automation"],
            "features": ["Chat automation", "Email management", "AI-driven replies", "Context memory"],
            "demoLink": "https://github.com/ragulhm/n8n-Personal-ai-workflow-",
            "codeLink": "https://github.com/ragulhm/n8n-Personal-ai-workflow-",
            "status": "source-only",
            "gridSpan": 1
        },
        {
            "title": "Cyber Security Portfolio",
            "description": "This portfolio is made by Vibe Coding, showcasing my work, skills, and projects. Built using modern web technologies and deployed on Firebase.",
            "technologies": ["React", "Framer", "TypeScript", "Firebase", "Replit.Ai", "Lovable.Ai"],
            "features": ["Responsive Design", "Modern UI", "Project Showcase"],
            "demoLink": "https://ragul-hitman-av.web.app/",
            "codeLink": "https://github.com/ragulhm/nebula-dev-hub",
            "status": "live",
            "gridSpan": 1
        },
        {
            "title": "StockScope Elite: Obsidian Monolith",
            "description": "High-performance asynchronous financial dashboard providing real-time market telemetry and neural sentiment analysis of global financial news.",
            "technologies": ["FastAPI", "yfinance", "VaderSentiment", "Redis", "MongoDB", "JWT"],
            "features": ["Zero-Latency Telemetry", "Neural Sentiment Analysis", "Fail-Safe Identity Node", "Asynchronous Market Ingestion"],
            "demoLink": "",
            "codeLink": "https://github.com/ragulhm/News_Stack_Analysis_System",
            "status": "source-only",
            "gridSpan": 1
        }
    ]

    skills = [
        {
            "title": "Languages",
            "icon": "code-2",
            "items": ["Java", "JavaScript", "Python", "HTML/CSS"],
            "gradient": "from-violet-500 to-purple-600"
        },
        {
            "title": "Frameworks",
            "icon": "layers",
            "items": ["React", "Express", "Flask", "Node.js"],
            "gradient": "from-purple-500 to-fuchsia-500"
        },
        {
            "title": "Database & Cloud",
            "icon": "database",
            "items": ["MongoDB", "MySQL", "Supabase", "AWS", "Render", "Docker"],
            "gradient": "from-fuchsia-500 to-pink-500"
        },
        {
            "title": "Developer Tools",
            "icon": "wrench",
            "items": ["Git", "Postman", "VS Code", "Linux/Ubuntu", "IntelliJ", "Eclipse"],
            "gradient": "from-purple-600 to-violet-500"
        },
        {
            "title": "Certifications",
            "icon": "award",
            "items": ["Pre Security (TryHackMe)", "Cybersecurity Essentials (CISCO)", "Building Effective Agentic Systems with Generative AI"],
            "gradient": "from-violet-600 to-purple-500"
        }
    ]

    context = {
        'projects': projects,
        'skills': skills
    }
    return render(request, 'portfolio/index.html', context)
