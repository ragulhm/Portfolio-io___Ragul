import os
import django
from datetime import date

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Achievement

cert_dir = 'media/certificates'
badge_dir = 'achievements/badges'

data = [
    {
        'title': 'Agentic Systems with GenAI',
        'issuer': 'DeepLearning.AI',
        'file': 'Building Effective Agentic Systems with Generative AI.pdf',
        'badge': 'badge_ai_3d.png',
        'category': 'AI'
    },
    {
        'title': 'Claude 101 Mastery',
        'issuer': 'Anthropic',
        'file': 'Claude 101_certificate-.pdf',
        'badge': 'badge_ai_3d.png',
        'category': 'AI'
    },
    {
        'title': 'Cybersecurity Essentials',
        'issuer': 'Cisco',
        'file': 'Cybersecurity_Essentials_certificate_ragul-mr3391-gmail-com_048c0406-f08a-4596-a2ed-194c70a092b1.pdf',
        'badge': 'badge_security_3d.png',
        'category': 'CyberSecurity'
    },
    {
        'title': 'Generative AI Foundations',
        'issuer': 'Google',
        'file': 'Generative_AI.pdf',
        'badge': 'badge_ai_3d.png',
        'category': 'AI'
    },
    {
        'title': 'DevOps Engineering',
        'issuer': 'Naan Mudhalvan',
        'file': 'NM-Devops (1).pdf',
        'badge': 'badge_devops_3d.png',
        'category': 'DevOps'
    },
    {
        'title': 'Spring Boot Framework',
        'issuer': 'Naan Mudhalvan',
        'file': 'NM-Spring (1).pdf',
        'badge': 'badge_devops_3d.png',
        'category': 'Backend'
    },
    {
        'title': 'MERN Stack Development',
        'issuer': 'Naan Mudhalvan',
        'file': 'NM_Certificate (MernStack).pdf',
        'badge': 'badge_ai_3d.png', 
        'category': 'Web Development'
    },
    {
        'title': 'Technical Achievement',
        'issuer': 'Naan Mudhalvan',
        'file': 'NM_Certificate (3).pdf',
        'badge': 'badge_devops_3d.png',
        'category': 'Achievement'
    },
    {
        'title': 'Pre-Security Mastery',
        'issuer': 'TryHackMe',
        'file': 'TRY HACK ME pre security.png',
        'badge': 'badge_security_3d.png',
        'category': 'CyberSecurity'
    },
    {
        'title': 'Prompt Engineering',
        'issuer': 'DeepLearning.AI',
        'file': 'prompt Engineering_CER.pdf',
        'badge': 'badge_ai_3d.png',
        'category': 'AI'
    }
]

for item in data:
    if not Achievement.objects.filter(title=item['title']).exists():
        Achievement.objects.create(
            title=item['title'],
            issuer=item['issuer'],
            date=date(2024, 1, 1),
            doc_file=f"certificates/{item['file']}",
            badge_icon=f"{badge_dir}/{item['badge']}",
            category=item['category']
        )

print("Achievements populated successfully!")
