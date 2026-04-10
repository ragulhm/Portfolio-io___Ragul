# 🌌 Astral Architect IO - Portfolio System

A high-performance, dark-mode-first developer portfolio built with **Django 5.0**, **Three.js**, and **GSAP**. This project focuses on high-end visual aesthetics (glassmorphism) and seamless integration with developer ecosystems like GitHub and Medium.

![Portfolio Preview](https://github.com/ragulhm/Portfolio-io___Ragul/raw/Django-Backend/static/images/hero_preview.webp)

## 🚀 Live Demo
[astral-architect-io.onrender.com](https://astral-architect-io.onrender.com)

## ✨ Unique Features
- **Astral System UI**: Premium glassmorphic interface with interactive 3D elements powered by Three.js.
- **Medium Integration**: Automated blog ingestion via the Medium RSS API, showcasing latest articles.
- **GitHub Pulse**: Real-time activity feed showing your most recent open-source contributions.
- **Dynamic Projects**: Manage your portfolio projects and technical skills directly through the Django Admin.
- **Bento Grid Layout**: Responsive project layout optimized for both desktop and mobile viewing.

## 🛠️ Technology Stack
- **Backend**: Django 5.0 (Python 3.11)
- **Frontend**: Tailwind CSS, Alpine.js
- **Animations**: GSAP (GreenSock Animation Platform), ScrollTrigger
- **Graphics**: Three.js (WebGL Globe Integration), Lucide Icons
- **Deployment**: Render, Gunicorn, WhiteNoise

## 📦 Local Setup

1. **Clone the project**
   ```bash
   git clone https://github.com/ragulhm/Portfolio-io___Ragul.git
   cd django_portfolio
   ```

2. **Setup Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure Environment**
   Create a `.env` file based on `.env.example`:
   ```env
   SECRET_KEY=your_secret_key
   DEBUG=True
   GITHUB_TOKEN=your_github_pat_token
   MEDIUM_USERNAME=@your_username
   ```

4. **Initialize Database**
   ```bash
   python manage.py migrate
   python populate_data.py  # Optional: Seed initial projects/skills
   python manage.py runserver
   ```

## 🌐 Deployment (Render)
This project is pre-configured for **Render** using a Blueprint (`render.yaml`).

1. Connect your GitHub repository to Render.
2. The `build.sh` script will automatically:
   - Install dependencies.
   - Run migrations.
   - Collect static files.
   - Ingest data from external APIs.
3. Add the required **Environment Variables** in the Render dashboard.

## 🤝 Contributing
Feel free to fork this project and submit PRs for any improvements!

---
Developed by **[Ragul M](https://github.com/ragulhm)** - AI & MERN Stack Developer.
