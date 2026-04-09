# 🌌 Astral Architect IO - Django Portfolio

### High-Performance Backend-First Portfolio with Astral 3D Aesthetics

**Astral Architect IO** is a modernized, professional portfolio designed for **Backend Developers**. Built on a high-performance **Django 5.0** monolith, it combines a robust database-driven backend with a premium, glassmorphic UI and advanced WebGL animations.

> [!TIP]
> **New to the project?** Read our in-depth [Technical Reference & Project Guide](file:///d:/Tech-stack/FastApi/Portfolio/astral-architect-io-main%20(1)/astral-architect-io-main/django_portfolio/PROJECT_GUIDE.md) for a deep dive into the 3D math and system architecture.

---

## 🏗️ Project Structure & Architecture

The project follows the standard Django monolith architecture with a focus on high-end frontend integration.

```text
django_portfolio/
├── core/                   # Project Core Repository
│   ├── settings.py         # Production Ready Settings (Dotenv, WhiteNoise)
│   ├── urls.py             # Main Route Entry Point
│   └── wsgi.py             # Server Entry (Gunicorn/Render)
├── portfolio/              # Main Logic App
│   ├── admin.py            # Dashboard Configuration for Models
│   ├── models.py           # Database Schema (Project, Skill, Post, Inquiries)
│   ├── github_api.py       # GitHub Live Pulse fetching utility
│   ├── medium_api.py       # Medium RSS Feed extractor
│   ├── urls.py             # App-level routing
│   └── views.py            # Controller Logic (Database queries & Forms)
├── static/                 # All Static Assets
│   ├── css/
│   │   └── output.css      # Compiled Tailwind CSS (Optimized)
│   ├── js/
│   │   └── three_scene.js  # The "Astral System" WebGL Code
│   └── assets/             # Media and Static Files
├── templates/              # Dynamic UI Layer
│   ├── base.html           # Main Layout Wrapper
│   └── portfolio/
│       └── index.html      # Glassmorphic Homepage (Dynamic Data)
├── build.sh                # Deployment Automation Script
├── Procfile                # Production Process Manager
├── django-distill/         # Configuration for Static Site Export
└── requirements.txt        # Backend Dependencies
```

---

## 🛠️ Detailed Component Explanation

### 1. The "Real" Backend (`portfolio/models.py`)
Unlike simple static sites, this project features a full **Relational Database Backend**.
- **`Project` Model**: Stores all your professional work. Includes support for custom grid spans (1, 2, or 3 columns) and JSON-based technology stacks.
- **`SkillCategory` & `Skill`**: Organizes your skills into logical groups linked by Foreign Keys.
- **`BlogPost` & `Category`**: Native Markdown-supported writing platform.
- **`ContactInquiry`**: Safely stores async form submissions from the frontend.

### 2. Live API Integrations
The portfolio is no longer static; it actively reaches out to external services.
- **GitHub Pulse (`github_api.py`)**: Fetches your latest repository push events to prove continuous developer activity.
- **Medium Sync (`medium_api.py`)**: Parses your public RSS feed (ignoring 1x1 tracking pixels) to beautifully render your latest articles directly on the homepage alongside your projects.

### 3. The Astral System (`static/js/three_scene.js`)
The centerpiece of the UI is the **Astral System** – a custom WebGL visualizer:
- **Core**: A faceted Icosahedron mesh rotating in 3D space.
- **Nebula**: A particle field of 1,500 points with dynamic pulsing and parallax offset based on your mouse position.
- **Hologram**: A wireframe shell that adds a futuristic "holographic" aesthetic.

### 4. Production Readiness (`core/settings.py`)
The project is "Launch Ready" out of the box:
- **Environment Management**: Securely handles `SECRET_KEY` and `DEBUG` via a `.env` file.
- **WhiteNoise Integration**: Serves static files efficiently in production environments like Render or Vercel.
- **CSRF Protection**: Pre-configured trust for modern deployment platforms.

---

## 🚀 Setup & Installation

### 1. Initialize Project
```bash
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Sync Database
```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Launch Development Server
```bash
python manage.py runserver
```

---

## 🔮 Deployment

This project supports two high-end deployment paths:
1.  **Dynamic (Render/Local Server)**: Keeps the Django Backend alive. Every change in the Admin Panel is reflected instantly.
2.  **Static (Netlify Export)**: Uses `django-distill` to "build" the site into plain HTML, making it 100% free to host on standard CDNs.

---

**STATUS: [DYNAMIC_BACKEND_LIVE] | VERSION: 2.5.0 | OPERATOR: RAGUL M**
