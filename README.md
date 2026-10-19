# Portfolio — Sahli Hamza

Portfolio professionnel monopage de **Sahli Hamza**, développeur Full Stack & ingénieur IA / DevOps.
Site statique (React + Vite), thème clair/sombre, animations Framer Motion, 100 % responsive.

- **Auteur** : Sahli Hamza — Menzel Jemil, Bizerte, Tunisie
- **E-mail** : sehli7hamza@gmail.com
- **GitHub** : https://github.com/sahlihamza
- **LinkedIn** : https://linkedin.com/in/hamza-sahli-b325a1295

---

## 1. Stack technique

| Élément | Choix |
| --- | --- |
| Framework | React 18 |
| Bundler | Vite 6 |
| Style | Tailwind CSS 3 (thème `class`) |
| Animations | Framer Motion 11 |
| Icônes | lucide-react |
| Déploiement | Vercel / Netlify (build statique) |

Aucune dépendance inutile : tout le site tient dans ~312 Ko de JS (99 Ko gzip) et ~36 Ko de CSS.

---

## 2. Arborescence

```text
portfolio/
├── public/                     # fichiers servis tels quels (copiés dans dist/)
│   ├── cv/
│   │   └── CV_Sahli_Hamza_ATS.pdf
│   ├── images/
│   │   ├── profile.jpg         # photo de profil (900x900)
│   │   └── projects/
│   │       ├── deepskyn-1-hero.jpg         # landing DeepSkyn
│   │       ├── deepskyn-2-profil-peau.jpg  # profil de peau « propulsé par l'IA »
│   │       ├── deepskyn-3-skin-test.jpg    # skin test en 5 questions
│   │       ├── deepskyn-4-parcours.jpg     # carte d'expérience
│   │       ├── heatalert.jpg              # capture de la démo HeatAlert
│   │       ├── sofiagen-2-dashboard.jpg    # back-office SofiaGen
│   │       ├── sofiagen-11-products.jpg
│   │       ├── sofiagen-6-orders.jpg
│   │       ├── sofiagen-3-subscription.jpg
│   │       ├── sofiagen-9-email-notification.jpg
│   │       ├── sofiagen-12-themes.jpg
│   │       ├── workhub-sofia-1-planning.jpg # planning SIRH
│   │       ├── workhub-sofia-2-conges.jpg   # demandes de congé
│   │       └── workhub-sofia-3-login.jpg    # connexion SofiaTech
│   ├── og-image.png            # aperçu réseaux sociaux (1200x630)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.jsx            # section « À propos » + chiffres animés
│   │   ├── AnimatedNumber.jsx   # compteur animé à l'entrée dans le viewport
│   │   ├── Contact.jsx          # formulaire validé + liens directs
│   │   ├── Experience.jsx       # timeline formation / expériences
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx             # hero : titre animé, CTA, photo inclinée (3D)
│   │   ├── Navbar.jsx           # nav fixe, menu mobile, lien actif
│   │   ├── Particles.jsx        # fond de particules du hero (canvas)
│   │   ├── ProjectArtwork.jsx   # illustration de repli sans capture
│   │   ├── ProjectCard.jsx      # carte + survol animé + ouverture de la galerie
│   │   ├── ProjectLightbox.jsx  # galerie plein écran (flèches, clavier, vignettes)
│   │   ├── Projects.jsx         # grille + filtres Web / IA / DevOps
│   │   ├── Reveal.jsx           # enveloppe d'apparition au scroll
│   │   ├── ScrollTools.jsx      # barre de progression + bouton « retour en haut »
│   │   ├── SectionTitle.jsx
│   │   ├── Skills.jsx           # compétences par catégorie + bandeau défilant
│   │   ├── SocialLinks.jsx
│   │   └── ThemeToggle.jsx      # bascule clair / sombre
│   ├── data/
│   │   ├── experience.js        # formation + stages
│   │   ├── profile.js           # identité, liens, navigation, stats
│   │   ├── projects.js          # ⭐ catalogue des projets
│   │   └── skills.js            # catégories de compétences
│   ├── hooks/
│   │   ├── useActiveSection.js  # met en évidence le lien de la section visible
│   │   ├── useTheme.js          # thème clair/sombre persisté
│   │   └── useTypewriter.js     # effet machine à écrire
│   ├── assets/
│   │   └── .gitkeep
│   ├── App.jsx
│   ├── index.css                # design system (Tailwind + composants)
│   └── main.jsx
├── index.html                   # meta SEO / Open Graph / typographies
├── tailwind.config.js           # palette, polices, animations
├── postcss.config.js
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 3. Installer et lancer

### À partir de zéro (nouveau projet)

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### Dans ce dossier (le projet est déjà prêt)

```bash
npm install      # installe les dépendances
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # prévisualise le build sur http://localhost:4173
```

---

## 4. Personnaliser le contenu

### Modifier / ajouter un projet

Tout se passe dans **`src/data/projects.js`** :

```js
{
  id: 'mon-projet',
  title: 'Mon projet',
  period: '2026',
  summary: 'Description courte affichée sur la carte.',
  highlights: ['Point fort 1', 'Point fort 2'],
  stack: ['React', 'NestJS', 'PostgreSQL'],
  categories: ['web'],              // 'web' | 'ia' | 'devops' — plusieurs valeurs possibles
  github: 'https://github.com/…',   // laisser vide pour masquer le bouton
  demo: 'https://…',                // laisser vide pour masquer le bouton
  images: [                         // galerie : la 1re image est la couverture
    '/images/projects/mon-projet-1.jpg',
    '/images/projects/mon-projet-2.jpg',
  ],
  image: '/images/projects/mon-projet-1.jpg', // repli mono-image
  accent: 'from-cyan-500/25 via-blue-500/20 to-indigo-500/25', // dégradé de l'illustration de repli
}
```

- Le bouton **Code** n'apparaît que si `github` est renseigné.
- Le bouton **Démo en ligne** n'apparaît que si `demo` est renseigné.
- Si `images` est vide, une illustration générée aux couleurs du projet est affichée à la place.
- Pour ajouter un filtre, complétez `projectFilters` dans le même fichier.

### Galerie plein écran (lightbox)

Un projet qui contient **plusieurs captures** ouvre une visionneuse plein écran :

- **clic sur l'image** de la carte (ou sur le bouton **Galerie**) → ouverture de la visionneuse ;
- **← / →** au clavier pour passer d'une capture à l'autre (transition décalée dans le sens du
  déplacement) ;
- **Échap** ou clic sur le fond pour fermer (le défilement de la page est verrouillé pendant
  l'ouverture) ;
- **vignettes** en bas pour sauter directement à une capture ;
- compteur « capture 2 / 4 » en haut à droite de la carte.

La composant concernée est `src/components/ProjectLightbox.jsx`.

### Ajouter une image

1. Déposez le fichier dans `public/images/projects/` (ex. `mon-projet.jpg`).
2. Référencez-le dans `projects.js` : `image: '/images/projects/mon-projet.jpg'`, ou ajoutez-le au
   tableau `images:` pour alimenter la galerie.
3. Format recommandé : **16/10**, largeur 1280 px, poids < 250 Ko (le build n'optimise pas les images).

### Changer les couleurs

La palette est définie à deux endroits :

- **`tailwind.config.js`** → `theme.extend.colors` (`accent.cyan`, `accent.violet`) et
  `theme.extend.backgroundImage` (`accent-gradient`, `accent-gradient-soft`).
- **`src/index.css`** → variables de thème dans `@layer base` et classes utilitaires
  (`.btn-primary`, `.chip`, `.glass`, `.gradient-text`, `.eyebrow`…).

Exemple : passer d'un dégradé cyan/violet à un dégradé orange/rose ne demande que deux lignes
dans `tailwind.config.js` :

```js
backgroundImage: {
  'accent-gradient': 'linear-gradient(120deg, #fb923c 0%, #f43f5e 50%, #a855f7 100%)',
},
```

### Modifier le CV

Remplacez `public/cv/CV_Sahli_Hamza_ATS.pdf` (le chemin est défini dans `src/data/profile.js`,
champ `cv`).

### Activer la reception des messages dans le formulaire

Sans configuration, le formulaire **ouvre le client e-mail** de l'utilisateur avec un message
pré-rempli (aucune dépendance externe). Pour envoyer les messages via un service tiers :

```bash
# .env.local
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/VOTRE_ID
```

ou avec EmailJS / Web3Forms, adaptez la fonction `handleSubmit` dans `src/components/Contact.jsx`.

---

## 5. Déployer gratuitement

### Vercel (recommandé)

```bash
npm i -g vercel
vercel            # aperçu de déploiement
vercel --prod     # déploiement en production
```

Ou via l'interface : **vercel.com** → *Add New… → Project* → importer le dépôt GitHub →
framework preset **Vite** → *Deploy*. Aucun réglage supplémentaire n'est nécessaire
(build : `npm run build`, output : `dist`).

### Netlify

1. pushed le dépôt sur GitHub ;
2. [app.netlify.com](https://app.netlify.com) → *Add new site* → *Import an existing project* ;
3. **Build command** : `npm run build` — **Publish directory** : `dist` ;
4. *Deploy site*.

### GitHub Pages

Pour un dépôt nommé `username.github.io` :

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

Puis, dans `vite.config.js`, remplacer `base: '/'` par `base: './'` et adaptez les chemins
`/images/…` et `/cv/…` de `src/data/profile.js` en chemins relatifs.

---

## 6. Animations

| Effet | Où |
| --- | --- |
| Machine à écrire (Full Stack / IA / DevOps) | hero |
| Particules en canvas reliées par des lignes | hero |
| Parallaxe au défilement + photo inclinée en 3D au survol | hero |
| Apparition au scroll (fade + translation, décalée) | toutes les sections |
| Compteurs qui s'incrémentent (3, 6, 20+, 2) | « À propos » |
| Badges de compétences révélés en cascade | « Compétences » |
| Halo, zoom d'image, pastille « Voir les N captures » | cartes projet |
| Visionneuse plein écran avec transition décalée | galeries projet |
| Pastilles qui pulsent le long de la frise | « Parcours » |
| Barre de progression + bouton « retour en haut » | toute la page |
| Bandeau de technologies défilant | fin de « Compétences » |

Toutes ces animations sont pilotées par Framer Motion et se neutralisent si l'utilisateur a
demandé `prefers-reduced-motion: reduce`.

---

## 7. Accessibilité, performance et SEO

- Un seul `<h1>`, hiérarchie de titres `h2`/`h3` cohérente, `alt` sur toutes les images.
- Lien d'évitement « Aller au contenu principal », navigation au clavier, `aria-expanded` sur le
  menu mobile, `aria-pressed` sur les filtres.
- Visionneuse : `role="dialog"`, `aria-modal`, fermeture au clavier, libellés sur chaque commande.
- `prefers-reduced-motion` respecté : les animations, les particules et la machine à écrire sont
  désactivées si l'utilisateur l'a demandé.
- Meta tags SEO + Open Graph + Twitter Card dans `index.html`, aperçu `og-image.png` (1200×630).
- Thème sombre par défaut, mémorisé dans le `localStorage`.

---

## 8. Vérifications effectuées

- `npm run build` : aucune erreur, build de ~5 s.
- Aucune erreur console au chargement (Chrome headless).
- Audit structurel : 1 `<h1>`, 5 `<h2>`, 0 image sans `alt`, 0 lien externe sans `rel="noreferrer"`.
- Visionneuse testée : ouverture au clic, navigation `←`/`→`, saut par vignette, fermeture `Échap`
  avec restauration du défilement de la page.
- Rendus contrôlés en 1440×900 (thème sombre et clair) et 390×844 (mobile, menu hamburger).
