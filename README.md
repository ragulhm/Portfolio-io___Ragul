# 🌌 Astral Architect IO - Portfolio System

A high-performance, developer portfolio built with **Django 5.0**, **Three.js**, and **Gemini 2.5 Flash**. This project features a cutting-edge **Spatial 3D Holographic UI**, a **Quba AI Assistant**, and seamless automation for GitHub and Medium integrations.

![Portfolio Preview](https://github.com/ragulhm/Portfolio-io___Ragul/raw/Django-Backend/static/images/hero_preview.webp)

## 🚀 Live Demo
(https://portfolio-io-ragul.onrender.com/)

## ✨ Unique Features

### 🤖 Quba AI Assistant (New)
- **Premium AI Concierge**: Built with **Gemini-2.5-flash-lite** via the `google-genai` SDK.
- **Context Aware**: Automatically analyzes your GitHub projects to suggest the best repositories to visitors.
- **Structured Interaction**: Delivers structured, point-based answers with Markdown support for a high-end chat experience.
- **Auto-Engagement**: Automatically opens after 3 seconds to greet new visitors.

### 🎨 Design & Interaction
- **Spatial 3D Aesthetic**: High-end, VisionOS-inspired floating glass cards and deep layered backdrop blurs (`blur-50px`).
- **Holographic Gradients**: Fluid cyan-to-violet meshes, extreme translucent bevels (1px borders), and Z-axis lift effects.
- **Motion Orchestration**: Seamless 3D depth-based transitions leveraging GSAP and ScrollTrigger.
- **Quba Neural Terminal**: Interactive, premium terminal with continuous glowing pulse effects.

### ⚙️ Automation
- **GitHub Pulse**: Real-time integration showcasing the latest commits and open-source activities.
- **Medium Sync**: Automated blog ingestion via the Medium RSS API.

## 🛠️ Technology Stack
- **Backend**: Django 5.0 (Python 3.11)
- **AI Engine**: Google Gemini 2.0 Flash (`google-genai` SDK)
- **Frontend**: Alpine.js, Tailwind CSS
- **3D Graphics**: Three.js (WebGL Globe)
- **Styling**: Vanilla CSS (Custom Glassmorphism Tokens)
- **Deployment**: Render, Gunicorn, WhiteNoise

## 🏗 Architecture & System Design
The portfolio employs a high-performance, monolithic Python architecture designed to eliminate the overhead of Javascript runtimes (like Node.js) while maintaining a deeply interactive "Spatial 3D" interface.

- **Core Application Server (Django Monolith)**: Powered by Django 5.0, it handles all routing, database management (SQLite), and Server-Side Rendering (SSR). This eliminates client-side loading states for pure SEO visibility and immediate content delivery.
- **Automated Data Ingestion Loop**: Included scripts (`ingest_data.py` and `extract_knowledge.py`) automatically fetch data from GitHub (Commits/PRs) and Medium (RSS feeds) via cron or build-time commands.
- **AI Intelligence Layer (Google Gemini)**: Utilizing the `google-genai` SDK, the server dynamically proxies intelligence chat requests directly to a persistent Gemini 2.5 Flash model pre-seeded with local GitHub repository intelligence logs.
- **Lightweight State & Motion**: Instead of React or Vue, the client-side leverages **Alpine.js** for reactive data mapping alongside **GSAP** and **Three.js** for hardware-accelerated scroll animations and 3D globe visualizations.
- **Production Asset Pipeline**: The deployment is perfectly orchestrated for Render (`render.yaml`). A custom `build.sh` script handles package installation, `collectstatic`, and database migrations natively in the Render container, utilizing **WhiteNoise** for heavily compressed static asset delivery.

## 📦 Local Setup

1. **Clone and Install**
   ```bash
   git clone https://github.com/ragulhm/Portfolio-io___Ragul.git
   cd django_portfolio
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. **Environment Variables**
   Create a `.env` file:
   ```env
   SECRET_KEY=your_secret_key
   DEBUG=True
   GITHUB_TOKEN=your_github_pat
   GOOGLE_API_KEY=your_gemini_api_key
   ```

3. **Launch**
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

## 🤝 Contributing
Developed by **[Ragul M](https://github.com/ragulhm)** - AI & Python Developer.
