export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
  gradient: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    items: ["Java", "JavaScript", "Python", "HTML/CSS"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Frameworks",
    icon: "Layers",
    items: ["React", "Express", "Flask", "Node.js"],
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "Database & Cloud",
    icon: "Database",
    items: ["MongoDB", "MySQL", "Supabase", "AWS", "Render", "Docker"],
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    items: ["Git", "Postman", "VS Code", "Linux/Ubuntu", "IntelliJ", "Eclipse"],
    gradient: "from-purple-600 to-violet-500",
  },
  {
    title: "Certifications",
    icon: "Award",
    items: [
      "Pre Security (TryHackMe)",
      "Cybersecurity Essentials (CISCO)",
      "Building Effective Agentic Systems with Generative AI",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
];
