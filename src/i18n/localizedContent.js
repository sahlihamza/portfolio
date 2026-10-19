export const profileByLanguage = {
  fr: {
    role: 'Développeur Full Stack — Ingénieur Logiciel, IA & DevOps',
    roles: ['Développeur Full Stack', 'Ingénieur IA', 'Ingénieur DevOps'],
    location: 'Menzel Jemil, Bizerte, Tunisie',
    availability: 'Disponible pour un stage de fin d’études (PFE) 2026-2027',
    pitch: 'Ingénieur en formation à ESPRIT, je conçois des applications web complètes qui intègrent l’IA — chatbots, moteurs de recommandation, scoring prédictif — et la chaîne DevOps qui les industrialise.',
    intro: 'Trois stages réalisés en entreprise, six projets livrés : de la plateforme SIRH aux moteurs de recommandation, chaque réalisation va de la modélisation des données jusqu’au déploiement en conteneur. Je recherche un PFE 2026-2027 à l’intersection du développement Full Stack, de l’IA et du DevOps.',
  },
  en: {
    role: 'Full Stack Developer — Software, AI & DevOps Engineer',
    roles: ['Full Stack Developer', 'AI Engineer', 'DevOps Engineer'],
    location: 'Menzel Jemil, Bizerte, Tunisia',
    availability: 'Available for a final-year internship (2026–2027)',
    pitch: 'I am a software engineering student at ESPRIT who builds end-to-end web applications with AI features — chatbots, recommendation engines, predictive scoring — and the DevOps pipelines that bring them to production.',
    intro: 'Three industry internships and six delivered projects: from HR platforms to recommendation engines, I work across the full path from data modeling to containerized deployment. I am looking for a 2026–2027 final-year internship at the intersection of Full Stack development, AI, and DevOps.',
  },
}

export const statsByLanguage = {
  fr: ['stages en entreprise', 'projets livrés', 'technologies maîtrisées', 'ans de développement'],
  en: ['industry internships', 'delivered projects', 'technologies used', 'years of development'],
}

export const skillsByLanguage = {
  fr: {
    frontend: ['Frontend', 'Interfaces réactives et accessibles'],
    backend: ['Backend', 'APIs, sécurité et temps réel'],
    data: ['Bases de données', 'Modélisation et stockage'],
    devops: ['DevOps & Cloud', 'Conteneurs, CI/CD et orchestration'],
    ia: ['IA / Machine Learning', 'LLM, modèles prédictifs et traitement du langage'],
    auth: ['Auth & Temps réel', 'Sécurité, habilitations et communication instantanée'],
  },
  en: {
    frontend: ['Frontend', 'Responsive and accessible interfaces'],
    backend: ['Backend', 'APIs, security, and real-time systems'],
    data: ['Databases', 'Data modeling and storage'],
    devops: ['DevOps & Cloud', 'Containers, CI/CD, and orchestration'],
    ia: ['AI / Machine Learning', 'LLMs, predictive models, and natural language processing'],
    auth: ['Auth & Real-time', 'Security, permissions, and instant communication'],
  },
}

export const educationByLanguage = {
  en: [
    ['2024–present', 'ESPRIT — Engineering Degree, Software Engineering', '3rd year — Software development, AI, and distributed systems', 'Tunis, Tunisia'],
    ['2021–2024', 'ISET Bizerte — Bachelor’s Degree in Information Systems Development', 'Computer science, databases, and networking', 'Bizerte, Tunisia'],
    ['2020–2021', 'Menzel Jemil High School — Technical Sciences Baccalaureate', 'Information technology and systems track', 'Menzel Jemil, Tunisia'],
  ],
}

export const experiencesByLanguage = {
  en: [
    {
      title: 'Full Stack Developer — Summer Internship',
      period: 'Jun–Aug 2026',
      description: 'Designed and developed SofiaGen, a SaaS e-commerce platform for creating and managing an online business.',
      points: ['Built the full stack: React interface, Express.js REST API, and MongoDB storage.', 'Designed a service-oriented architecture with data isolation for each storefront.'],
    },
    {
      title: 'Full Stack Developer — Summer Internship',
      period: 'Summer 2025',
      description: 'Developed an HR platform with departments, teams and roles, work schedules, and an employee leave approval workflow.',
      points: ['Built a NestJS backend with JWT authentication, refresh tokens, guards, and role-based access control.', 'Created a Docker stack with MySQL, backend, and Nginx frontend; published images to GitHub Container Registry.'],
    },
    {
      title: 'Full Stack Developer — Final-Year Project Internship',
      period: 'Feb–May 2024',
      description: 'Developed an intelligent recruitment platform with automatic candidate pre-screening, dynamic questionnaires, and automated profile scoring.',
      points: ['Built a scoring engine that combines business criteria and skill-based weighting.', 'Generated dynamic questionnaires from each candidate’s profile.'],
    },
    {
      title: 'Full Stack Developer — Professional Development Internship',
      period: 'Jun 2023',
      description: 'Built an appliance e-commerce website with inventory management, product filtering, and a complete shopping flow.',
      points: ['Created a Spring Boot REST API for inventory and product catalog management.', 'Built a responsive Angular interface with filters and detailed product pages.'],
    },
  ],
}

export const projectsByLanguage = {
  en: {
    deepskyn: {
      summary: 'AI-powered skin analysis platform featuring a five-question skin test, an AI-powered skin profile, an LLM-generated personalized skincare routine, an interactive experience map, and progress tracking.',
      highlights: ['AI skin profile', 'LLM-generated routine', 'Experience map', 'Progress tracking'],
    },
    heatalert: {
      summary: 'Heatwave and power outage prevention web app with weather alerts, outage management, community reports, and an assistance chatbot, enhanced by a hybrid Random Forest outage-risk prediction model.',
      highlights: ['Outage management', 'Community reports', 'Chatbot', 'Random Forest'],
    },
    sofiagen: {
      summary: 'SaaS e-commerce platform for launching and managing an online business, with a multi-tenant back office, catalog, orders, subscriptions, notification engine, and payment gateway.',
      highlights: ['Multi-tenant', 'Subscriptions & quotas', 'Notification engine', 'Integrated AI'],
    },
    'workhub-sofia': {
      summary: 'Complete HR platform for departments, teams, roles, hybrid schedules, and leave requests with approval workflows, delivered in containers through a CI/CD pipeline.',
      highlights: ['Approval workflows', 'Schedules & leave', 'Docker Compose', 'GHCR images'],
    },
    hirehub: {
      title: 'JobLupa — AI-powered recruitment platform',
      summary: 'Intelligent recruitment platform with automatic candidate pre-screening, profile-based dynamic questionnaires, and automated application scoring.',
      highlights: ['Automatic pre-screening', 'Dynamic questionnaires', 'Automated scoring'],
    },
    'eco-confort-market': {
      summary: 'Home appliance e-commerce website with inventory management, product catalog, filtering, and a complete shopping flow.',
      highlights: ['Inventory management', 'Product filtering', 'REST API'],
    },
  },
}
