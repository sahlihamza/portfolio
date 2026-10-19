/**
 * Compétences regroupées par catégorie.
 * `icon` référence une icône de lucide-react (voir Skills.jsx).
 */
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    description: 'Interfaces modernes, accessibles et responsives',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Tailwind', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    description: 'APIs REST, architecture MVC et services métier',
    skills: ['PHP', 'Laravel', 'Symfony', 'Django', 'FastAPI', 'Java', 'Spring Boot', 'NestJS', 'Node.js', 'Express.js', 'API REST'],
  },
  {
    id: 'data',
    title: 'Bases de données',
    icon: 'database',
    description: 'Modélisation relationnelle et NoSQL',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Prisma ORM', 'TypeORM'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: 'container',
    description: 'Conteneurisation, CI/CD et qualité de code',
    skills: ['Docker', 'Kubernetes', 'Jenkins CI/CD', 'GitHub Actions', 'SonarQube', 'Git', 'GitHub'],
  },
  {
    id: 'ia',
    title: 'IA / Machine Learning',
    icon: 'brain',
    description: 'LLM, modèles prédictifs et traitement du langage',
    skills: [
      'IA générative',
      'LLM',
      'Prompt engineering',
      'Machine learning',
      'Random Forest',
      'NLP',
      'Chatbot',
      'Moteur de recommandation',
      'Scoring prédictif',
      'Python',
    ],
  },
  {
    id: 'auth',
    title: 'Auth & Temps réel',
    icon: 'key',
    description: 'Sécurité, habilitations et communication instantanée',
    skills: ['JWT', 'Keycloak', 'OAuth', 'WebSocket', 'Stripe'],
  },
]

/** Bandeau de technologies qui défile en bas de la section. */
export const marqueeTech = [
  'React',
  'Angular',
  'TypeScript',
  'Node.js',
  'NestJS',
  'Laravel',
  'Spring Boot',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Tailwind',
  'Python',
  'GitHub Actions',
]
