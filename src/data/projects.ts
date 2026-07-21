export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  stack: string[]
  category: string[]
  github: string
  demo?: string
  metric: string
}

export const projects: Project[] = [
  {
    id: 'distributed-task-engine',
    title: 'Distributed Task Engine',
    tagline: 'Task scheduling at scale',
    description:
      'A distributed task processing platform built around Redis Streams for durable queuing, with dedicated microservices for scheduling, processing, monitoring, and real-time analytics. Prometheus and Grafana give live visibility into throughput and failures.',
    stack: ['Redis Streams', 'PostgreSQL', 'Docker', 'WebSockets', 'Prometheus', 'Grafana'],
    category: ['Backend', 'Distributed Systems', 'DevOps'],
    github: 'https://github.com/Riffath19',
    demo: undefined,
    metric: 'Microservices architecture',
  },
  {
    id: 'smart-harvest',
    title: 'Smart Harvest',
    tagline: 'AI-assisted crop management',
    description:
      'A cross-platform crop management application that gives farmers AI-backed crop recommendations alongside day-to-day farm management tools, secured with Firebase Authentication and JWT.',
    stack: ['Flutter', 'Flask', 'Firebase Auth', 'Firestore', 'JWT'],
    category: ['Full-Stack', 'Mobile', 'AI'],
    github: 'https://github.com/Riffath19',
    demo: undefined,
    metric: 'AI crop recommendations',
  },
  {
    id: 'mos-burgers-pos',
    title: 'MOS Burgers POS System',
    tagline: 'Enterprise point-of-sale',
    description:
      'An enterprise-grade point-of-sale system covering inventory management, order processing, and customer management for a multi-outlet restaurant operation.',
    stack: ['React', 'Node.js', 'MySQL'],
    category: ['Full-Stack', 'Backend'],
    github: 'https://github.com/Riffath19',
    demo: undefined,
    metric: 'Inventory + order + CRM',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    tagline: 'Clinical operations desktop app',
    description:
      'A desktop application for managing patient records, appointments, and administrative workflows, built on JavaFX with a Hibernate ORM layer over MySQL.',
    stack: ['JavaFX', 'Hibernate', 'Maven', 'MySQL'],
    category: ['Desktop', 'Backend'],
    github: 'https://github.com/Riffath19',
    demo: undefined,
    metric: 'Patient + appointment records',
  },
]

export const allCategories = Array.from(
  new Set(projects.flatMap((p) => p.category))
).sort()
