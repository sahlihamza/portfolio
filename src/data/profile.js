/**
 * Informations personnelles et liens du portfolio.
 * Modifier ce fichier suffit à mettre à jour l'en-tête, le hero et le contact.
 */
export const profile = {
  name: 'Sahli Hamza',
  firstName: 'Hamza',
  role: 'Développeur Full Stack — Ingénieur Logiciel, IA & DevOps',
  roles: ['Développeur Full Stack', 'Ingénieur IA', 'Ingénieur DevOps'],
  location: 'Menzel Jemil, Bizerte, Tunisie',
  email: 'sehli7hamza@gmail.com',
  phone: '+216 28 79 56 79',
  linkedin: 'https://linkedin.com/in/hamza-sahli-b325a1295',
  github: 'https://github.com/sahlihamza',
  cv: '/cv/CV_Sahli_Hamza_ATS.pdf',
  photo: '/images/profile.jpg',
  availability: 'Disponible pour un stage de fin d’études (PFE) 2026-2027',
  pitch:
    'Ingénieur en formation à ESPRIT, je conçois des applications web complètes qui integrent l’IA — chatbots, moteurs de recommandation, scoring prédictif — et la chaîne DevOps qui les industrialise.',
  intro:
    'Trois stages réalisés en entreprise, six projets livrés : de la plateforme SIRH aux moteurs de recommandation, chaque réalisation va de la modélisation des données jusqu’au déploiement en conteneur. Je recherche un PFE 2026-2027 à l’intersection du développement Full Stack, de l’IA et du DevOps.',
}

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Téléphone', href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: 'phone' },
]

export const navLinks = [
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '3', label: 'stages en entreprise', icon: 'briefcase' },
  { value: '6', label: 'projets livrés', icon: 'layers' },
  { value: '20+', label: 'technologies maîtrisées', icon: 'code' },
  { value: '2', label: 'ans de développement', icon: 'zap' },
]
