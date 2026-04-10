import os
import requests
import json
import django

# Setup Django environment for settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.conf import settings

def test_extraction():
    username = 'ragulhm'
    token = getattr(settings, 'GITHUB_TOKEN', os.environ.get('GITHUB_TOKEN'))
    headers = {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
    }
    if token:
        headers['Authorization'] = f'Bearer {token}'
    
    url = f'https://api.github.com/users/{username}/repos?per_page=100&sort=updated'
    
    print(f"Fetching repos for {username}...")
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(f"Error: {response.status_code}")
        return
    
    repos = response.json()
    print(f"Found {len(repos)} repositories.")
    
    extracteddata = []
    for repo in repos:
        if repo['fork']: continue # Skip forks for better accuracy
        
        # Get languages
        lang_url = repo['languages_url']
        lang_resp = requests.get(lang_url, headers=headers)
        languages = list(lang_resp.json().keys()) if lang_resp.status_code == 200 else []
        
        extracteddata.append({
            "name": repo['name'],
            "description": repo['description'] or "Innovative software project by Ragul.",
            "tech_stack": languages + (repo['topics'] or []),
            "category": "Software Engineering",
            "url": repo['html_url'],
            "impact": f"Actively maintained repository with {repo['stargazers_count']} stars.",
            "stars": repo['stargazers_count'],
            "updated_at": repo['updated_at']
        })
    
    with open('portfolio/data/github_knowledge_test.json', 'w') as f:
        json.dump(extracteddata, f, indent=2)
    
    print(f"Extracted {len(extracteddata)} non-fork repositories to github_knowledge_test.json")

if __name__ == "__main__":
    test_extraction()
