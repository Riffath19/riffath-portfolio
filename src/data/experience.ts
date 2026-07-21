export interface LeadershipItem {
  title: string
  org: string
  period: string
  description: string
}

export const leadership: LeadershipItem[] = [
  {
    title: 'Football Team Captain',
    org: 'School Football Team',
    period: 'Leadership',
    description:
      'Led the school football team on and off the field, coordinating training schedules and representing the team at inter-school tournaments.',
  },
  {
    title: 'Mathematics Department Coordinator',
    org: 'School Mathematics Department',
    period: 'Academic',
    description:
      'Coordinated department activities and peer study sessions, supporting fellow students in problem-solving and exam preparation.',
  },
  {
    title: 'Iftar Volunteer',
    org: 'IIT Colombo',
    period: 'Community',
    description:
      'Volunteered in organizing and running Iftar events for students and staff during Ramadan at IIT Colombo.',
  },
  {
    title: 'School Prefect',
    org: 'School Prefects\u2019 Board',
    period: 'Leadership',
    description:
      'Served on the school prefects\u2019 board, upholding discipline and supporting the smooth running of school activities and events.',
  },
]

export interface Certification {
  title: string
  issuer: string
  year?: string
}

export const certifications: Certification[] = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
  },
  {
    title: 'National Entrepreneurship Development Programme',
    issuer: 'University of Moratuwa',
  },
  {
    title: 'IIT Foundation Certificate',
    issuer: 'Informatics Institute of Technology',
  },
]
