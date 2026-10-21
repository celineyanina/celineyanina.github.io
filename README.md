# Portfolio Professionnel — Celine Yanina

> Site web portfolio 100 % statique (HTML5, CSS3, JavaScript natif ES6+), optimisé pour les recruteurs et hébergé gratuitement sur **GitHub Pages**.

🔗 **URL du site en ligne :** [https://celineyanina.github.io](https://celineyanina.github.io)

---

## 🎯 Objectif du site

Mettre en valeur le profil de **Celine Yanina**, étudiante en 2ᵉ année de **BUT Science des Données** (parcours EMS - Exploration et Modélisation Statistiques) à l'IUT d'Aurillac (Université Clermont Auvergne), pour décrocher un **stage de 12 semaines minimum à partir du 5 avril 2027** dans les domaines :
- **Data & Traitement de données**
- **Statistiques & Modélisation**
- **Business Intelligence (BI) & Tableaux de bord décisionnels**
- **Mobilité géographique :** Partout en France (titulaire du Permis B)

---

## 🎨 Caractéristiques & Atouts Techniques

- **Vitesse & Légèreté :** 100 % statique, aucun framework lourd, aucun outil de compilation (`npm`, `webpack` ou `vite` non requis), chargement instantané.
- **Lisible en 30 secondes :** En-tête percutant, badge de disponibilité clignotant, encadré des 4 faits clés essentiels pour les recruteurs.
- **Charte graphique soignée :** Palette inspirée du CV avec dominante Bleu Marine (`#1F2D52`) et Bleu Clair (`#D0DFF5`), touches d'accentuation et contrastes vérifiés (normes d'accessibilité WCAG AA).
- **Mode Sombre / Mode Clair :** Bouton de bascule en haut à droite avec sauvegarde automatique dans `localStorage` et détection de la préférence du système.
- **Projets avec filtres dynamiques :** Filtres par domaine (*Statistiques*, *Business Intelligence*, *SQL*, *Python & R*) pour une navigation fluide.
- **Expérience Recruteur optimale :**
  - Bouton « Copier mon adresse e-mail » en un clic avec notification toast.
  - Bouton « M'écrire un e-mail » avec objet et corps de texte pré-remplis (`mailto:`).
  - Bouton direct pour visualiser / télécharger le CV au format PDF.
- **SEO & Référencement :** Balises Open Graph, Twitter Cards, balises méta complètes, `sitemap.xml`, `robots.txt` et données structurées Schema.org (`Person` en JSON-LD).
- **Responsive Mobile-First :** Affichage adapté sur smartphone, tablette et grand écran d'ordinateur.
- **Prêt pour l'impression :** Feuille de style dédiée `@media print` pour les recruteurs qui souhaitent imprimer la page en PDF.

---

## 📁 Structure des fichiers

```text
celineyanina.github.io/
├── index.html               # Page unique du portfolio (structure sémantique et contenu)
├── css/
│   └── style.css            # Styles modernes, variables CSS, dark mode, responsive
├── js/
│   └── main.js              # Script JS natif (thème, filtres, copie e-mail, menu)
├── assets/
│   ├── photo.jpg            # Photo de profil de Celine
│   ├── photo.png            # Copie de sauvegarde du format source
│   └── CV_Celine_Yanina.pdf # CV au format PDF téléchargeable
├── favicon.svg              # Favicon vectoriel moderne avec monogramme CY
├── sitemap.xml              # Plan du site pour l'indexation par Google
├── robots.txt               # Directives pour les moteurs de recherche
└── README.md                # Guide complet d'utilisation et de déploiement
```

---

## 🚀 Guide pas-à-pas pour la publication sur GitHub Pages

### 1. Prérequis
- Un compte GitHub au nom de **`celineyanina`**.
- Un dépôt public créé sur GitHub nommé exactement : **`celineyanina.github.io`**.

---

### 2. Commandes Git pour publier le site

Ouvre un terminal (PowerShell, Invite de commandes ou Git Bash) dans le dossier de ton projet, puis exécute les commandes suivantes :

```bash
# 1. Vérifier la branche principale
git branch -M main

# 2. Associer le dépôt distant GitHub (si ce n'est pas déjà fait)
git remote add origin https://github.com/celineyanina/celineyanina.github.io.git

# 3. Préparer tous les fichiers pour l'envoi
git add .

# 4. Créer le commit initial
git commit -m "feat: portfolio professionnel Celine Yanina pour GitHub Pages"

# 5. Pousser les fichiers vers GitHub
git push -u origin main
```

---

### 3. Activer GitHub Pages sur ton dépôt

1. Rends-toi sur GitHub sur la page de ton dépôt : `https://github.com/celineyanina/celineyanina.github.io`.
2. Clique sur l'onglet **Settings** (Paramètres) en haut à droite.
3. Dans le menu de gauche, clique sur **Pages** (dans la section *Code and automation*).
4. Sous la section **Build and deployment** :
   - **Source** : choisis `Deploy from a branch`.
   - **Branch** : sélectionne `main` et le dossier `/ (root)`.
   - Clique sur **Save**.
5. Patiente 1 à 2 minutes. GitHub affichera un message vert avec l'URL en ligne :  
   👉 **`https://celineyanina.github.io/`**

---

## ✏️ Guide de personnalisation pour Celine

### 1. Remplacer ou mettre à jour la photo de profil
- Dépose ta nouvelle photo dans le dossier `assets/` en la nommant `photo.jpg`.
- Le site l'affichera automatiquement. Si la photo est absente ou inaccessible, un fallback propre avec tes initiales **« CY »** s'affichera à la place.

### 2. Mettre à jour le CV en PDF
- Remplace simplement le fichier `assets/CV_Celine_Yanina.pdf` par ta version la plus récente en conservant exactement le même nom de fichier.

### 3. Compléter les cartes de projets académiques
Ouvre le fichier `index.html` avec un éditeur de texte (VS Code, Notepad, etc.) et rends-toi à la section `<section id="projets">` (vers la ligne 280) :
- Remplace le titre du projet, le contexte, les outils utilisés et les résultats obtenus.
- Ajoute le lien vers ton dépôt GitHub dédié dans l'attribut `href="..."`.
- Une fois le projet finalisé, tu pourras retirer le badge `⚠️ Modèle à compléter`.

### 4. Activer l'affichage public du numéro de téléphone (Optionnel)
Par défaut et par souci de confidentialité, ton numéro de téléphone est placé en commentaire dans le code.  
Si tu souhaites le rendre visible sur le site :
1. Ouvre `index.html`.
2. Va à la section `<section id="contact">` (vers la ligne 480).
3. Repère le bloc `<!-- TELEPHONE (Optionnel) -->`.
4. Supprime les balises `<!--` et `-->` entourant le bloc.
5. Sauvegarde et effectue un commit / push Git :
   ```bash
   git add index.html
   git commit -m "feat: affichage du numéro de téléphone sur la section contact"
   git push
   ```

---

## 📋 Checklist pour Celine

- [x] Structure HTML5 / CSS3 / JS natif sans dépendance externe.
- [x] Intégration de la photo de profil (`assets/photo.jpg`).
- [x] Intégration du CV PDF (`assets/CV_Celine_Yanina.pdf`).
- [x] Charte graphique bleu marine & bleu ciel inspirée du CV avec mode sombre.
- [x] Respect de toutes les données réelles (sans invention de chiffres ni de pourcentages).
- [x] Données structurées SEO (JSON-LD Schema Person, Open Graph, Twitter Cards).
- [ ] Vérifier le rendu sur [https://celineyanina.github.io](https://celineyanina.github.io).
- [ ] Remplir les cartes de projets dans `index.html` au fil de ta formation.
- [ ] Décider si tu souhaites décommenter ton numéro de téléphone dans la section contact.

---

© 2026 Celine Yanina — Tous droits réservés.
