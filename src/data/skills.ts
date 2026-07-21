export interface SkillGroup {
  category: string
  note: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    note: 'Core',
    skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    note: 'Interfaces',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Flutter'],
  },
  {
    category: 'Backend',
    note: 'Services',
    skills: ['Node.js', 'NestJS', 'Spring Boot', 'Express.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Databases',
    note: 'Storage',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    note: 'Infrastructure',
    skills: ['Docker', 'Docker Compose', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana', 'Cloudflare'],
  },
]
