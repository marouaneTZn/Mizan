
# ⚖️ Mizan

### Tableau de bord des prix de l'or et de l'argent

Mizan est une application web qui permet de consulter les prix de l'or et de l'argent en temps réel.

Ce projet a été réalisé dans le cadre de ma formation en développement web Full-Stack à **YouCode**.

🌐 **Démo en ligne :** [Mizan](https://marouanetzn.github.io/Mizan/)

## 🚀 Fonctionnalités

### 🥇 Prix de l'or et de l'argent

- Affichage des prix de l'or et de l'argent par gramme.
- Récupération des prix depuis l'API XAUS.
- Affichage des variations de prix en valeur et en pourcentage.
- Indicateurs de variation avec des flèches et des couleurs.
- Actualisation des prix avec le bouton « Actualiser ».

### 💱 Choix de la devise

- Choix entre MAD, USD et EUR.
- Mise à jour des prix sans recharger la page.
- Sauvegarde de la devise choisie avec localStorage.
- Conservation du choix après l'actualisation de la page.

### 💍 Estimateur de bijou

- Choix du métal : or ou argent.
- Saisie du poids en grammes.
- Calcul de la valeur estimée du bijou.
- Affichage du résultat dans la devise sélectionnée.
- Vérification des données saisies.

**Formule utilisée :**

Valeur estimée = Poids (g) × Prix du métal par gramme

**Remarque :** Le résultat est une estimation de la valeur du métal. Il ne comprend pas les frais de fabrication ou les autres coûts.

### 🔄 État de l'API

- Message pendant le chargement des prix.
- Message de succès après le chargement.
- Message d'erreur en cas de problème.
- Affichage de la date de dernière mise à jour.

## 🛠️ Technologies utilisées

- **HTML5** : Structure de l'application.
- **Tailwind CSS** : Design et mise en page responsive.
- **JavaScript ES6** : Logique de l'application.
- **Fetch API** : Récupération des données.
- **XAUS API** : Prix de l'or et de l'argent.
- **localStorage** : Sauvegarde de la devise.
- **Git et GitHub** : Gestion des versions.
- **GitHub Pages** : Hébergement du site.

## 📁 Structure du projet

```text
Mizan/
├── index.html
├── js/
│   ├── api.js
│   ├── main.js
│   └── ui.js
└── README.md
```

### Description des fichiers

- `index.html` : Structure HTML et interface utilisateur.
- `api.js` : Appels API, conversion des prix et calcul des variations.
- `main.js` : Gestion des événements et des interactions.
- `ui.js` : Affichage des prix, des cartes et des résultats.

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/marouaneTZn/Mizan.git
```

### 2. Ouvrir le dossier

```bash
cd Mizan
```

### 3. Lancer l'application

Ouvrir `index.html` avec un serveur local, par exemple avec l'extension **Live Server** de VS Code.

Aucune installation de dépendances n'est nécessaire.

## 🌐 API utilisée

L'application utilise l'API XAUS pour récupérer les prix des métaux.

**URL de base :**

```text
https://xaus.com/api/v1
```

| Endpoint | Description |
|----------|-------------|
| `/spot` | Prix actuels de l'or et de l'argent |
| `/history` | Historique des prix de l'or |
| `/chart` | Historique des prix de l'argent |

### Conversion des prix

Les prix sont récupérés en dollars américains par once, puis convertis en prix par gramme.

**Formule :**

```text
Prix par gramme = (Prix USD/once × Taux de change) / 31.1035
```

## 📌 Avancement du projet

| User Story | Description | Statut |
|------------|-------------|--------|
| US-01 | Connexion à l'API | ✅ Terminée |
| US-02 | Cartes de prix dynamiques | ✅ Terminée |
| US-03 | Choix de la devise | ✅ Terminée |
| US-04 | Graphique historique des prix | ⏳ Non réalisée |
| US-05 | Estimateur de bijou | ✅ Réalisée |
| US-06 | Gestion du chargement et des erreurs | 🔄 Partiellement réalisée |
| US-07 | Journal des requêtes (Bonus) | ⏭️ Non réalisée |

## ⚠️ Limitations

- L'estimation du bijou ne se met pas à jour automatiquement après un changement de devise. Il faut cliquer de nouveau sur « Calculer ».
- La valeur calculée est une estimation et non un prix de vente final.
- Une connexion Internet est nécessaire pour récupérer les prix.
- Le fonctionnement dépend de la disponibilité de l'API.

## 👨‍💻 Auteur

**Marouane Touzani**

Apprenant en développement web Full-Stack à **YouCode**.

GitHub : [@marouaneTZn](https://github.com/marouaneTZn)

## 📄 À propos

Projet réalisé à des fins pédagogiques pour pratiquer JavaScript, les appels API, la manipulation du DOM et la gestion des événements.
