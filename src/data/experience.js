/**
 * Parcours : formation et expériences professionnelles (stages).
 */
export const education = [
  {
    period: '2024 — présent',
    title: 'ESPRIT — Cycle Ingénieur, Génie Logiciel',
    detail: '3ᵉ année — Développement logiciel, IA et systèmes distribués',
    place: 'Tunis, Tunisie',
  },
  {
    period: '2021 — 2024',
    title: 'ISET Bizerte — Licence en Développement des Systèmes d’Information',
    detail: 'Licence en informatique, bases de données et réseaux',
    place: 'Bizerte, Tunisie',
  },
  {
    period: '2020 — 2021',
    title: 'Lycée Menzel Jemil — Baccalauréat en Sciences Techniques',
    detail: 'Filière Sciences et Technologies de l’informatique',
    place: 'Menzel Jemil, Tunisie',
  },
]

export const experiences = [
  {
    period: '06/2026 — 08/2026',
    title: 'Développeur Full Stack — Stage d’été',
    company: 'SofiaTech',
    place: 'Tunis, Tunisie',
    stack: ['React', 'Express.js', 'Node.js', 'MongoDB'],
    description:
      'Conception et développement de SofiaGen, plateforme SaaS e-commerce permettant de créer et gérer une activité de vente en ligne.',
    points: [
      'Réalisation full stack : interface React, API REST Express.js et stockage MongoDB.',
      'Architecture orientée services avec cloisonnement des données par boutique.',
    ],
  },
  {
    period: 'Été 2025',
    title: 'Développeur Full Stack — Stage d’été',
    company: 'SofiaTech',
    place: 'Tunis, Tunisie',
    stack: ['Angular', 'NestJS', 'MySQL'],
    description:
      'Développement d’une plateforme SIRH : structuration des départements, équipes et rôles, gestion des plannings et circuit de validation des congés.',
    points: [
      'Backend NestJS et authentification JWT (refresh token, guards, contrôle d’accès par rôle).',
      'Chaîne Docker (MySQL, backend, frontend Nginx) et publication des images sur GitHub Container Registry.',
    ],
  },
  {
    period: '02/2024 — 05/2024',
    title: 'Développeur Full Stack — Stage de Projet de Fin d’Études',
    company: 'MEDIALAB FACTORY',
    place: 'Bizerte, Tunisie',
    stack: ['Angular', 'Symfony', 'PHP', 'TypeScript', 'MySQL'],
    description:
      'Développement d’une plateforme de recrutement intelligente : présélection automatique des candidats, questionnaires dynamiques et scoring automatisé des profils.',
    points: [
      'Moteur de scoring : agrégation de critères métier et pondération par compétences.',
      'Questionnaires dynamiques générés à partir du profil du candidat.',
    ],
  },
  {
    period: '06/2023',
    title: 'Développeur Full Stack — Stage de Perfectionnement',
    company: 'Dynamix Services',
    place: 'Bizerte, Tunisie',
    stack: ['Spring Boot', 'Angular', 'MySQL'],
    description:
      'Site e-commerce d’appareils électroménagers : gestion d’inventaire, filtrage produits et parcours d’achat.',
    points: [
      'API REST Spring Boot avec gestion des stocks et catalogue produits.',
      'Interface Angular responsive avec filtres et fiches produits détaillées.',
    ],
  },
]
