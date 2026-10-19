/**
 * Catalogue des projets affichés dans la section « Projets ».
 *
 * Pour ajouter ou modifier un projet, il suffit d'éditer ce tableau :
 *  - `id`         : identifiant unique (clé React)
 *  - `title`      : nom affiché
 *  - `summary`    : description courte affichée sur la carte
 *  - `highlights` : puces « points forts » (optionnel)
 *  - `stack`      : technologies affichées en badges
 *  - `categories` : 'web' | 'ia' | 'devops' (filtres de la section)
 *  - `github`     : lien GitHub (la carte n'affiche le bouton que s'il existe)
 *  - `demo`       : lien de démo en ligne (idem, masqué si vide)
 *  - `images`     : captures d'écran (la 1re est la couverture, les suivantes
 *                   deviennent des miniatures cliquables). Laisser vide = illustration
 *  - `image`      : repli mono-image (utilisé si `images` est vide)
 *  - `accent`     : dégradé de l'illustration générée
 */
export const projects = [
  {
    id: 'deepskyn',
    title: 'DeepSkyn',
    period: '2025 — 2026',
    summary:
      'Plateforme d’analyse de la peau par IA : skin test en 5 questions, profil de peau « propulsé par l’IA », routine de soin personnalisée générée par LLM, carte d’expérience interactive et suivi des progrès.',
    highlights: ['Profil de peau par IA', 'Routine générée par LLM', 'Carte d’expérience', 'Suivi des progrès'],
    stack: ['React', 'TypeScript', 'Tailwind', 'NestJS', 'Prisma', 'PostgreSQL', 'WebSocket', 'Docker', 'Kubernetes', 'Jenkins'],
    categories: ['ia', 'devops'],
    github: '',
    demo: 'https://deep-skyn-front-end-by-dev-masters.vercel.app/',
    images: [
      '/images/projects/deepskyn-1-hero.jpg',
      '/images/projects/deepskyn-2-profil-peau.jpg',
      '/images/projects/deepskyn-3-skin-test.jpg',
      '/images/projects/deepskyn-4-parcours.jpg',
    ],
    image: '/images/projects/deepskyn-1-hero.jpg',
    accent: 'from-fuchsia-500/30 via-violet-500/25 to-cyan-500/30',
  },
  {
    id: 'heatalert',
    title: 'HeatAlert',
    period: '2026 — 2027',
    summary:
      'Application web de prévention de la canicule et des coupures de courant : alertes météo, gestion des coupures, signalements citoyens et chatbot d’assistance, augmentés d’un modèle hybride de prédiction du risque de coupure (Random Forest).',
    highlights: ['Module Coupures', 'Signalements citoyens', 'Chatbot', 'Random Forest'],
    stack: ['Laravel', 'Blade', 'PHP', 'Random Forest', 'Docker', 'Git', 'GitHub Actions'],
    categories: ['ia', 'web', 'devops'],
    github: 'https://github.com/sahlihamza/HeatAlert',
    demo: 'https://heatalert.onrender.com/',
    images: ['/images/projects/heatalert.jpg'],
    image: '/images/projects/heatalert.jpg',
    accent: 'from-orange-500/30 via-amber-500/25 to-rose-500/30',
  },
  {
    id: 'sofiagen',
    title: 'SofiaGen',
    period: '2026',
    summary:
      'Plateforme SaaS e-commerce permettant de créer et gérer une activité de vente en ligne : back-office multi-tenant, catalogue, commandes, abonnements, moteur de notifications et passerelle de paiement.',
    highlights: ['Multi-tenant', 'Abonnements & quotas', 'Moteur de notifications', 'IA intégrée'],
    stack: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Docker'],
    categories: ['web'],
    github: 'https://github.com/sahlihamza/SofiaGen',
    demo: '',
    images: [
      '/images/projects/sofiagen-1-login.jpg',
      '/images/projects/sofiagen-2-dashboard.jpg',
      '/images/projects/sofiagen-11-products.jpg',
      '/images/projects/sofiagen-6-orders.jpg',
      '/images/projects/sofiagen-3-subscription.jpg',
      '/images/projects/sofiagen-9-email-notification.jpg',
      '/images/projects/sofiagen-12-themes.jpg',
    ],
    image: '/images/projects/sofiagen-1-login.jpg',
    accent: 'from-emerald-500/30 via-teal-500/25 to-cyan-500/30',
  },
  {
    id: 'workhub-sofia',
    title: 'WorkHub Sofia',
    period: '2025',
    summary:
      'Plateforme SIRH complète : départements, équipes, rôles, plannings (télétravail/présentiel), demandes de congés et circuit de validation, livrée en conteneurs avec pipeline CI/CD.',
    highlights: ['Circuits de validation', 'Plannings & congés', 'Docker Compose', 'Images GHCR'],
    stack: ['Angular', 'NestJS', 'MySQL', 'TypeORM', 'Docker', 'GitHub Actions'],
    categories: ['web', 'devops'],
    github: 'https://github.com/sahlihamza/Workhub-Sofia',
    demo: '',
    images: [
      '/images/projects/workhub-sofia-1-planning.jpg',
      '/images/projects/workhub-sofia-2-conges.jpg',
      '/images/projects/workhub-sofia-3-login.jpg',
    ],
    image: '/images/projects/workhub-sofia-1-planning.jpg',
    accent: 'from-sky-500/30 via-blue-600/25 to-slate-500/30',
  },
  {
    id: 'hirehub',
    title: 'Plateforme de recrutement par IA',
    period: '2024',
    summary:
      'Plateforme de recrutement intelligente : présélection automatique des candidats, questionnaires dynamiques adaptés au profil et scoring automatisé des candidatures.',
    highlights: ['Présélection automatique', 'Questionnaires dynamiques', 'Scoring automatisé'],
    stack: ['Angular', 'Symfony', 'PHP', 'TypeScript', 'MySQL'],
    categories: ['ia', 'web'],
    github: 'https://github.com/sahlihamza/HireHub',
    demo: '',
    images: [],
    image: '',
    accent: 'from-emerald-500/30 via-teal-500/25 to-cyan-500/30',
  },
  {
    id: 'eco-confort-market',
    title: 'Eco-Confort Market',
    period: '2023',
    summary:
      'Site e-commerce d’appareils électroménagers : gestion d’inventaire, catalogue produits, filtrage et parcours d’achat.',
    highlights: ['Gestion d’inventaire', 'Filtrage produits', 'API REST'],
    stack: ['Spring Boot', 'Angular', 'MySQL', 'REST'],
    categories: ['web'],
    github: 'https://github.com/sahlihamza/Eco-Confort-Market-Stage-perfectionnement',
    demo: '',
    images: [],
    image: '',
    accent: 'from-lime-500/30 via-green-500/25 to-cyan-500/30',
  },
]

/** Filtres de la section Projets. */
export const projectFilters = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Web' },
  { id: 'ia', label: 'IA' },
  { id: 'devops', label: 'DevOps' },
]
