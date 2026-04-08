# 🌌 Astral Architect IO - Django Portfolio

### High-Performance Backend-First Portfolio with Astral 3D Aesthetics

**Astral Architect IO** is a modernized, professional portfolio designed for **Backend Developers**. Built on a high-performance **Django 5.0** monolith, it combines the robustness of a Python backend with a premium, glassmorphic UI and advanced WebGL animations.

---

## ✨ Key Features

- **🚀 Astral System 3D Core**: A custom-built Three.js engine featuring a faceted Icosahedron orb, holographic wireframe overlays, and a dynamic 1,500-point particle nebula.
- **👔 Backend-Focused Branding**: Tailored for professional backend identity with integrated SEO and institutional-grade aesthetics.
- **📱 Glassmorphism UI**: A responsive, modern design built with **Tailwind CSS**, featuring dark-mode-first styling and smooth GSAP micro-animations.
- **📂 Project Showcases**: Dynamic project grids with detailed tech stacks, feature lists, and live/source-code integration.
- **⚡ Performance Optimized**: Minimal dependencies, optimized asset pipeline via Tailwind CLI, and cache-bypassing WebGL scripts.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | Django 5.0 | Monolith application core |
| **Frontend** | Django Templates / Vanilla JS | Structure and Logic |
| **Styling** | Tailwind CSS (CLI) | Utility-first design system |
| **3D Graphics** | Three.js (ES Modules) | Astral System WebGL visualizer |
| **Animation** | GSAP / ScrollTrigger | Fluid UI transitions and micro-interactions |
| **Icons** | Lucide | Professional stroke icon system |

---

## 📡 Setup & Installation

### Prerequisites
- Python 3.11+
- Node.js (Only for Tailwind CLI, optional if using pre-compiled CSS)

### 1. Initialize Environment
```powershell
# Clone the repository
git clone https://github.com/ragulhm/Portfolio-io___Ragul.git
cd django_portfolio

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac
```

### 2. Synchronize Dependencies
```powershell
pip install -r requirements.txt
```

### 3. Database & Migrations
```powershell
python manage.py makemigrations
python manage.py migrate
```

### 4. Activation
```powershell
# Run the development server
python manage.py runserver
```
The application will be accessible at `http://127.0.0.1:8000/`.

---

## 🏗️ Project Structure

- `core/`: Project configuration and settings.
- `portfolio/`: Main app containing views, models, and business logic.
- `static/`:
    - `js/three_scene.js`: The "Astral System" WebGL engine.
    - `css/output.css`: Compiled Tailwind styles.
- `templates/`: Django HTML templates with high-end modular structuring.

---

**Status: [ACTIVE_DEVELOPMENT] | VERSION: 2.1.0 | OPERATOR: RAGUL M**
