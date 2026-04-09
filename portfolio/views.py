from django.shortcuts import render
from .models import Project, SkillCategory

def index(request):
    projects = Project.objects.all()
    
    # Structure skills data for the template
    categories = SkillCategory.objects.all().prefetch_related('skills')
    skills = []
    for category in categories:
        skills.append({
            "title": category.title,
            "icon": category.icon,
            "gradient": category.gradient,
            "items": [skill.name for skill in category.skills.all()]
        })

    context = {
        'projects': projects,
        'skills': skills
    }
    return render(request, 'portfolio/index.html', context)
