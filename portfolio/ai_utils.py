import json
import os
from google import genai
from django.conf import settings

class AstralOracle:
    def __init__(self):
        # Configure Gemini using the new google-genai SDK
        api_key = getattr(settings, 'GOOGLE_API_KEY', os.environ.get('GOOGLE_API_KEY'))
        if api_key:
            self.client = genai.Client(api_key=api_key)
            self.model_id = 'gemini-2.5-flash-lite'
        else:
            self.client = None

        # Load Knowledge Base
        kb_path = os.path.join(settings.BASE_DIR, 'portfolio', 'data', 'github_knowledge.json')
        try:
            with open(kb_path, 'r') as f:
                self.knowledge_base = json.load(f)
        except Exception as e:
            print(f"Error loading knowledge base: {e}")
            self.knowledge_base = []

    def get_context(self):
        """Prepares the knowledge base as a text block for the system prompt."""
        context = "Here is a list of Ragul's top projects from GitHub:\n\n"
        for project in self.knowledge_base:
            context += f"Project: {project['name']}\n"
            context += f"Description: {project['description']}\n"
            context += f"Tech Stack: {', '.join(project['tech_stack'])}\n"
            context += f"Impact: {project['impact']}\n"
            context += f"URL: {project['url']}\n\n"
        return context

    def query(self, user_question):
        """Asks Gemini a question with project context using the new SDK."""
        if not self.client:
            return "Oracle is offline. (Missing API Key)"

        context = self.get_context()
        
        prompt = f"""
        Role: You are 'Quba AI Assistant', the dedicated elite AI concierge for Ragul's portfolio. 
        Identity: You represent 'Quba', a highly advanced intelligence designed for project analysis and user assistance.
        
        Knowledge Base (Ragul's Creations):
        {context}
        
        Voice Guidelines:
        1. Identification: Always refer to yourself as 'Quba AI Assistant'.
        2. Precision: Provide accurate, metrics-driven insights about Ragul's projects.
        3. Sophistication: Use an elegant, professional tone with subtle technical flair.
        4. Strategy: Recommend specific projects from the knowledge base that match the user's intent.
        
        User Question: {user_question}
        
        Response Architecture: 
        1. [Sophisticated Greeting]
        2. [Core Knowledge Insight]
        3. [Project Details in Points]:
           - **Tech Stack**: [list]
           - **Impact**: [description]
           - **Link**: [url]
        4. [Call to Action]
        
        Note: Use Markdown for structure (bullet points, bolding).
        """

        try:
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=prompt
            )
            return response.text
        except Exception as e:
            return f"The stars are misaligned (Error: {str(e)})"
