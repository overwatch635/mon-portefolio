/**
 * JEU 5 : QUIZ INTERACTIF
 * 
 * OBJECTIF PÉDAGOGIQUE :
 * - Comprendre les objets complexes et les tableaux imbriqués
 * - Maîtriser les méthodes de tableau (filter, map, reduce)
 * - Gérer l'état d'une application complexe
 * - Manipuler le temps avec setInterval et Date
 * - Créer des transitions entre différents écrans
 */

// ============================================================================
// SECTION 1 : BASE DE DONNÉES DE QUESTIONS
// ============================================================================

/**
 * QUESTIONS - Base de données complète
 * 
 * STRUCTURE D'UNE QUESTION :
 * {
 *   id: number,               // Identifiant unique
 *   question: string,         // Texte de la question
 *   options: string[],        // Tableau des 4 options
 *   correctAnswer: number,    // Index (0-3) de la bonne réponse
 *   explanation: string,      // Explication détaillée
 *   category: string,         // Catégorie (javascript, html, css, web)
 *   difficulty: string,       // Difficulté (easy, medium, hard)
 *   hint: string             // Indice pour aider le joueur
 * }
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez vos propres questions
 * 2. Créez de nouvelles catégories
 * 3. Changez les niveaux de difficulté
 */

const questionsDatabase = [
    // ============ CATÉGORIE JAVASCRIPT ============
    {
        id: 1,
        question: "Quel est le résultat de l'expression typeof null en JavaScript ?",
        options: ["null", "object", "undefined", "number"],
        correctAnswer: 1,
        explanation: "En JavaScript, typeof null retourne 'object'. C'est un bug historique qui est conservé pour la compatibilité.",
        category: "javascript",
        difficulty: "easy",
        hint: "Pensez à la façon dont JavaScript traite les valeurs null historiquement."
    },
    {
        id: 2,
        question: "Quelle méthode utilise-t-on pour convertir une chaîne en nombre entier ?",
        options: ["parseFloat()", "Number()", "parseInt()", "toString()"],
        correctAnswer: 2,
        explanation: "parseInt() convertit une chaîne en nombre entier, tandis que parseFloat() convertit en nombre à virgule flottante.",
        category: "javascript",
        difficulty: "easy",
        hint: "Cherchez la méthode spécifique pour les entiers."
    },
    {
        id: 3,
        question: "Qu'est-ce qu'une closure en JavaScript ?",
        options: [
            "Une fonction qui n'a pas de nom",
            "Une fonction qui a accès à son scope parent même après l'exécution",
            "Un moyen de fermer une application",
            "Un type de boucle"
        ],
        correctAnswer: 1,
        explanation: "Une closure est une fonction qui 'se souvient' de son environnement lexical, même après que la fonction externe ait terminé son exécution.",
        category: "javascript",
        difficulty: "medium",
        hint: "Pensez à la portée des variables et à la mémoire."
    },
    {
        id: 4,
        question: "Quelle est la différence entre == et === en JavaScript ?",
        options: [
            "Il n'y a aucune différence",
            "== compare les valeurs, === compare les valeurs et les types",
            "== compare les types, === compare les valeurs",
            "=== est une version plus rapide de =="
        ],
        correctAnswer: 1,
        explanation: "== effectue une conversion de type avant la comparaison (coercion), tandis que === compare sans conversion de type.",
        category: "javascript",
        difficulty: "medium",
        hint: "L'un compare strictement, l'autre de manière plus souple."
    },
    {
        id: 5,
        question: "Qu'affiche console.log(1 + '1') en JavaScript ?",
        options: ["2", "11", "undefined", "NaN"],
        correctAnswer: 1,
        explanation: "En JavaScript, l'opérateur + avec une chaîne effectue une concaténation, donc 1 + '1' donne '11'.",
        category: "javascript",
        difficulty: "easy",
        hint: "Pensez à la concaténation de chaînes."
    },
    {
        id: 6,
        question: "Qu'est-ce que le hoisting en JavaScript ?",
        options: [
            "Une méthode pour optimiser les performances",
            "Le comportement de remonter les déclarations au début du scope",
            "Un type de fonction asynchrone",
            "Une fonction qui s'appelle elle-même"
        ],
        correctAnswer: 1,
        explanation: "Le hoisting est le mécanisme par lequel les déclarations de variables et de fonctions sont 'remontées' au début de leur scope avant l'exécution.",
        category: "javascript",
        difficulty: "medium",
        hint: "Pensez à l'ordre d'exécution du code."
    },
    {
        id: 7,
        question: "Comment déclare-t-on une variable constante en JavaScript ?",
        options: ["var", "let", "const", "static"],
        correctAnswer: 2,
        explanation: "const permet de déclarer une variable dont la référence ne peut pas être réaffectée. Introduit en ES6.",
        category: "javascript",
        difficulty: "easy",
        hint: "Recherchez le mot-clé pour les constantes."
    },
    {
        id: 8,
        question: "Quelle méthode utilise-t-on pour ajouter un élément à la fin d'un tableau ?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
        explanation: "push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau.",
        category: "javascript",
        difficulty: "easy",
        hint: "Le contraire de pop()."
    },
    {
        id: 9,
        question: "Qu'est-ce qu'une Promise en JavaScript ?",
        options: [
            "Une fonction qui retourne immédiatement une valeur",
            "Un objet représentant une opération asynchrone qui sera complétée plus tard",
            "Une variable globale",
            "Un type de boucle"
        ],
        correctAnswer: 1,
        explanation: "Une Promise est un objet qui représente l'éventuel achèvement (ou échec) d'une opération asynchrone et sa valeur résultante.",
        category: "javascript",
        difficulty: "hard",
        hint: "Pensez aux opérations asynchrones comme les requêtes API."
    },
    {
        id: 10,
        question: "Que fait la méthode Array.prototype.map() ?",
        options: [
            "Filtre les éléments d'un tableau",
            "Crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément",
            "Trie les éléments d'un tableau",
            "Réduit le tableau à une seule valeur"
        ],
        correctAnswer: 1,
        explanation: "map() crée un nouveau tableau en appliquant une fonction à chaque élément du tableau original.",
        category: "javascript",
        difficulty: "medium",
        hint: "C'est une méthode de transformation de tableau."
    },

    // ============ CATÉGORIE HTML ============
    {
        id: 11,
        question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
        explanation: "La balise <a> (anchor) est utilisée pour créer des liens hypertextes avec l'attribut href.",
        category: "html",
        difficulty: "easy",
        hint: "C'est la première lettre de l'alphabet."
    },
    {
        id: 12,
        question: "Quel attribut HTML est obligatoire pour les images ?",
        options: ["title", "src", "alt", "width"],
        correctAnswer: 1,
        explanation: "L'attribut src (source) est obligatoire car il spécifie le chemin de l'image. L'attribut alt est fortement recommandé pour l'accessibilité.",
        category: "html",
        difficulty: "easy",
        hint: "C'est l'attribut qui contient le chemin de l'image."
    },
    {
        id: 13,
        question: "Quelle balise HTML est utilisée pour définir un tableau ?",
        options: ["<table>", "<tab>", "<grid>", "<matrix>"],
        correctAnswer: 0,
        explanation: "La balise <table> est utilisée pour créer un tableau, avec <tr> pour les lignes et <td> pour les cellules.",
        category: "html",
        difficulty: "easy",
        hint: "Le nom est évident en anglais."
    },
    {
        id: 18,
        question: "Quelle balise HTML5 est utilisée pour définir un en-tête de document ou de section ?",
        options: ["<header>", "<head>", "<section>", "<top>"],
        correctAnswer: 0,
        explanation: "La balise <header> définit un en-tête pour un document ou une section. À ne pas confondre avec <head> qui contient les métadonnées.",
        category: "html",
        difficulty: "easy",
        hint: "C'est une balise sémantique HTML5."
    },
    {
        id: 19,
        question: "Quel attribut HTML permet de rendre un champ de formulaire obligatoire ?",
        options: ["required", "mandatory", "validate", "important"],
        correctAnswer: 0,
        explanation: "L'attribut 'required' force l'utilisateur à remplir un champ avant de soumettre le formulaire.",
        category: "html",
        difficulty: "easy",
        hint: "Le nom est explicite en anglais."
    },
    {
        id: 20,
        question: "Quelle balise est utilisée pour créer une liste ordonnée (numérotée) ?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: 1,
        explanation: "<ol> crée une liste ordonnée (ordered list), tandis que <ul> crée une liste non ordonnée.",
        category: "html",
        difficulty: "easy",
        hint: "Pensez à l'abréviation anglaise."
    },
    {
        id: 21,
        question: "Quelle version de HTML a introduit les éléments sémantiques comme <article> ou <nav> ?",
        options: ["HTML 4.01", "XHTML", "HTML5", "HTML 3.2"],
        correctAnswer: 2,
        explanation: "HTML5 (2014) a introduit de nouvelles balises sémantiques pour mieux structurer le contenu.",
        category: "html",
        difficulty: "medium",
        hint: "C'est la version majeure la plus récente."
    },
    {
        id: 22,
        question: "Que signifie l'attribut 'defer' dans une balise <script> ?",
        options: [
            "Exécute le script immédiatement",
            "Diffère l'exécution jusqu'à ce que le HTML soit entièrement chargé",
            "Empêche l'exécution du script",
            "Charge le script en parallèle"
        ],
        correctAnswer: 1,
        explanation: "L'attribut 'defer' retarde l'exécution du script jusqu'à ce que le parsing du HTML soit terminé.",
        category: "html",
        difficulty: "medium",
        hint: "Cela diffère l'exécution."
    },
    {
        id: 23,
        question: "Quelle balise est utilisée pour définir une ligne dans un tableau HTML ?",
        options: ["<td>", "<tr>", "<th>", "<table-row>"],
        correctAnswer: 1,
        explanation: "<tr> (table row) définit une ligne dans un tableau. <td> définit une cellule normale, <th> une cellule d'en-tête.",
        category: "html",
        difficulty: "easy",
        hint: "Row = ligne en anglais."
    },
    {
        id: 24,
        question: "Quelle est la différence entre <span> et <div> ?",
        options: [
            "<span> est pour les blocs, <div> pour les éléments en ligne",
            "<span> est en ligne, <div> est un bloc",
            "Ils sont identiques",
            "<span> est obsolète en HTML5"
        ],
        correctAnswer: 1,
        explanation: "<span> est un conteneur en ligne (inline), tandis que <div> est un conteneur bloc (block-level).",
        category: "html",
        difficulty: "medium",
        hint: "Pensez au type d'affichage CSS par défaut."
    },

    // ============ CATÉGORIE CSS ============
    {
        id: 14,
        question: "Quelle propriété CSS est utilisée pour changer la couleur du texte ?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: 2,
        explanation: "La propriété 'color' est utilisée pour définir la couleur du texte en CSS.",
        category: "css",
        difficulty: "easy",
        hint: "Le nom le plus simple et direct."
    },
    {
        id: 15,
        question: "Quelle unité CSS est relative à la taille de police de l'élément parent ?",
        options: ["px", "em", "rem", "%"],
        correctAnswer: 1,
        explanation: "L'unité 'em' est relative à la taille de police de l'élément parent, tandis que 'rem' est relative à la taille de police de l'élément racine.",
        category: "css",
        difficulty: "medium",
        hint: "Pensez aux unités relatives à la police."
    },
    {
        id: 25,
        question: "Quelle propriété CSS permet d'arrondir les coins d'un élément ?",
        options: ["border-round", "corner-radius", "border-radius", "box-radius"],
        correctAnswer: 2,
        explanation: "border-radius permet de définir le rayon des coins pour arrondir les bordures d'un élément.",
        category: "css",
        difficulty: "easy",
        hint: "Le nom inclut 'border' et 'radius'."
    },
    {
        id: 26,
        question: "Quelle valeur de 'display' permet de cacher un élément sans supprimer l'espace qu'il occupe ?",
        options: ["none", "hidden", "invisible", "visibility: hidden"],
        correctAnswer: 3,
        explanation: "visibility: hidden cache l'élément mais conserve l'espace. display: none le supprime du flux.",
        category: "css",
        difficulty: "medium",
        hint: "C'est une propriété différente de display."
    },
    {
        id: 27,
        question: "Quelle règle CSS permet d'appliquer des styles conditionnels à la taille d'écran ?",
        options: ["@media", "@viewport", "@screen", "@responsive"],
        correctAnswer: 0,
        explanation: "Les media queries (@media) permettent d'appliquer des styles en fonction des caractéristiques de l'appareil (largeur d'écran, etc.).",
        category: "css",
        difficulty: "medium",
        hint: "C'est une règle qui commence par '@'."
    },
    {
        id: 28,
        question: "Que fait la propriété 'z-index' ?",
        options: [
            "Contrôle la taille de l'élément",
            "Définit l'ordre d'empilement des éléments",
            "Change la couleur",
            "Applique une rotation"
        ],
        correctAnswer: 1,
        explanation: "z-index définit la position d'un élément dans l'axe Z (profondeur). Une valeur plus haute place l'élément au-dessus.",
        category: "css",
        difficulty: "medium",
        hint: "Z comme axe de profondeur en 3D."
    },
    {
        id: 29,
        question: "Quelle unité CSS est relative à 1% de la hauteur de la fenêtre ?",
        options: ["vw", "vh", "%", "em"],
        correctAnswer: 1,
        explanation: "1vh équivaut à 1% de la hauteur (height) de la fenêtre. 1vw équivaut à 1% de la largeur.",
        category: "css",
        difficulty: "medium",
        hint: "h pour height (hauteur)."
    },
    {
        id: 30,
        question: "Quelle propriété permet de créer des animations en CSS ?",
        options: ["transition", "animate", "keyframes", "@animation"],
        correctAnswer: 2,
        explanation: "La règle @keyframes définit les étapes d'une animation, puis animation permet de l'appliquer.",
        category: "css",
        difficulty: "hard",
        hint: "Elle définit les étapes clés de l'animation."
    },
    {
        id: 31,
        question: "Que signifie 'CSS Grid' ?",
        options: [
            "Un framework CSS",
            "Un système de mise en page bidimensionnel",
            "Une grille de calcul",
            "Un type de sélecteur"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid est un système de mise en page qui permet de créer des grilles complexes en 2 dimensions (lignes et colonnes).",
        category: "css",
        difficulty: "hard",
        hint: "Grid = grille en anglais."
    },
    {
        id: 32,
        question: "Comment centrer horizontalement un élément bloc avec une largeur fixe en CSS ?",
        options: ["text-align: center", "margin: 0 auto", "padding: auto", "align: center"],
        correctAnswer: 1,
        explanation: "margin: 0 auto; centre l'élément en définissant des marges automatiques à gauche et à droite.",
        category: "css",
        difficulty: "medium",
        hint: "Utilisez les marges automatiques."
    },

    // ============ CATÉGORIE WEB GÉNÉRAL ============
    {
        id: 16,
        question: "Quel protocole est utilisé pour transférer des pages web ?",
        options: ["FTP", "HTTP", "SMTP", "TCP"],
        correctAnswer: 1,
        explanation: "HTTP (HyperText Transfer Protocol) est le protocole utilisé pour transférer des pages web sur internet.",
        category: "web",
        difficulty: "easy",
        hint: "C'est le protocole qui commence souvent par 'http://'."
    },
    {
        id: 17,
        question: "Qu'est-ce que le DOM ?",
        options: [
            "Un langage de programmation",
            "Une base de données",
            "Une représentation structurée d'un document HTML",
            "Un framework JavaScript"
        ],
        correctAnswer: 2,
        explanation: "Le DOM (Document Object Model) est une interface de programmation qui représente la structure d'un document HTML/XML sous forme d'arbre d'objets.",
        category: "web",
        difficulty: "medium",
        hint: "C'est lié à la structure des documents web."
    },
    {
        id: 33,
        question: "Que signifie l'acronyme HTTPS ?",
        options: [
            "HyperText Transfer Protocol Secure",
            "Hyper Transfer Text Protocol Secure",
            "High Text Transfer Protocol",
            "Hyper Transfer Protocol Security"
        ],
        correctAnswer: 0,
        explanation: "HTTPS est la version sécurisée du HTTP, utilisant le chiffrement TLS/SSL pour protéger les données.",
        category: "web",
        difficulty: "easy",
        hint: "S pour Secure (sécurisé)."
    },
    {
        id: 34,
        question: "Quel est le rôle principal des cookies HTTP ?",
        options: [
            "Stocker des données côté serveur",
            "Améliorer les performances",
            "Maintenir un état de session côté client",
            "Compresser les ressources"
        ],
        correctAnswer: 2,
        explanation: "Les cookies permettent de stocker des informations sur le client pour maintenir l'état (comme la connexion) entre les requêtes.",
        category: "web",
        difficulty: "medium",
        hint: "Ils 'se souviennent' de vous."
    },
    {
        id: 35,
        question: "Quelle méthode HTTP est utilisée pour envoyer des données lors de la soumission d'un formulaire ?",
        options: ["GET", "POST", "PUT", "FETCH"],
        correctAnswer: 1,
        explanation: "POST est utilisé pour envoyer des données au serveur (comme un formulaire). GET récupère des données et les paramètres sont visibles dans l'URL.",
        category: "web",
        difficulty: "easy",
        hint: "C'est la méthode la plus courante pour les formulaires."
    },
    {
        id: 36,
        question: "Qu'est-ce qu'une API REST ?",
        options: [
            "Un langage de programmation",
            "Un style d'architecture pour les services web",
            "Une base de données",
            "Un protocole de transfert"
        ],
        correctAnswer: 1,
        explanation: "REST (Representational State Transfer) est un style d'architecture qui utilise les méthodes HTTP pour manipuler des ressources.",
        category: "web",
        difficulty: "hard",
        hint: "C'est une architecture basée sur HTTP."
    },
    {
        id: 37,
        question: "Quel code HTTP signifie 'Page non trouvée' ?",
        options: ["200", "403", "404", "500"],
        correctAnswer: 2,
        explanation: "Le code 404 Not Found indique que le serveur n'a pas trouvé la ressource demandée.",
        category: "web",
        difficulty: "easy",
        hint: "Un code célèbre sur le web."
    },
    {
        id: 38,
        question: "Que signifie CORS (Cross-Origin Resource Sharing) ?",
        options: [
            "Un protocole de sécurité",
            "Un mécanisme permettant de demander des ressources d'un autre domaine",
            "Un format de données",
            "Un type de cookie"
        ],
        correctAnswer: 1,
        explanation: "CORS est un mécanisme qui autorise les requêtes vers des serveurs d'un domaine différent du domaine d'origine.",
        category: "web",
        difficulty: "hard",
        hint: "Cela concerne les requêtes entre domaines."
    },
    {
        id: 39,
        question: "Quel est le langage de requête utilisé pour interagir avec une base de données relationnelle ?",
        options: ["SQL", "NoSQL", "GraphQL", "JSON"],
        correctAnswer: 0,
        explanation: "SQL (Structured Query Language) est le langage standard pour gérer les bases de données relationnelles.",
        category: "web",
        difficulty: "medium",
        hint: "C'est le langage historique des bases relationnelles."
    },
    {
        id: 40,
        question: "Quel outil permet de suivre l'évolution du code source dans un projet ?",
        options: ["Git", "Webpack", "Docker", "npm"],
        correctAnswer: 0,
        explanation: "Git est un système de contrôle de version distribué qui permet de gérer les versions du code source.",
        category: "web",
        difficulty: "medium",
        hint: "C'est le plus utilisé, développé par Linus Torvalds."
    }
];

// ============================================================================
// SECTION 2 : ÉTAT DU QUIZ ET CONFIGURATION
// ============================================================================

/**
 * ÉTAT DU QUIZ (quizState)
 * 
 * Cet objet stocke toutes les informations sur la partie en cours.
 * 
 * CONCEPT IMPORTANT : Gestion d'état centralisée
 * - Toutes les données variables sont dans un seul objet
 * - Facilite le suivi et le débogage
 * - Permet de sauvegarder/charger l'état facilement
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez de nouvelles propriétés (ex: "powerUps", "theme", "musicEnabled")
 * 2. Changez les valeurs initiales
 * 3. Ajoutez des statistiques avancées
 */

let quizState = {
    // Paramètres du quiz
    category: "javascript",
    difficulty: "easy",
    questionsPerRound: 10,
    timePerQuestion: 30, // en secondes
    
    // État de la partie en cours
    currentQuestionIndex: 0,
    score: 0,
    timeLeft: 300, // 5 minutes en secondes
    streak: 0,
    maxStreak: 0,
    answeredQuestions: 0,
    correctAnswers: 0,
    
    // Questions sélectionnées pour cette partie
    selectedQuestions: [],
    
    // Réponses de l'utilisateur
    userAnswers: [], // Tableau d'objets {questionId, selectedOption, isCorrect, timeSpent}
    
    // Vies et bonus
    lifelines: {
        fiftyFifty: 1,
        extraTime: 1,
        skipQuestion: 1
    },
    
    // État du jeu
    gameActive: false,
    timerInterval: null,
    currentScreen: "start" // "start", "quiz", "results"
};

// ============================================================================
// SECTION 3 : FONCTIONS UTILITAIRES
// ============================================================================

/**
 * FONCTION : getQuestionsByCategoryAndDifficulty(category, difficulty, count)
 * 
 * OBJECTIF : Sélectionner aléatoirement des questions selon les critères
 * 
 * ALGORITHME :
 * 1. Filtrer la base de données par catégorie
 * 2. Filtrer par difficulté
 * 3. Mélanger aléatoirement le tableau
 * 4. Prendre les N premières questions
 * 
 * CONCEPTS :
 * - Array.filter() : filtre les éléments selon une condition
 * - Array.sort() : trie (ou mélange) les éléments
 * - Math.random() : génère un nombre aléatoire
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Changez l'algorithme de mélange
 * 2. Ajoutez un système de pondération (questions difficiles rapportent plus)
 * 3. Assurez-vous qu'il n'y a pas de questions en double
 */

function getQuestionsByCategoryAndDifficulty(category, difficulty, count) {
    // 1. Filtrer par catégorie
    let filteredQuestions = questionsDatabase.filter(q => q.category === category);
    
    // 2. Filtrer par difficulté
    filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    
    // Si pas assez de questions, prendre toutes les difficultés de la catégorie
    if (filteredQuestions.length < count) {
        filteredQuestions = questionsDatabase.filter(q => q.category === category);
    }
    
    // 3. Mélanger aléatoirement (algorithme de Fisher-Yates)
    for (let i = filteredQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
    }
    
    // 4. Prendre les N premières questions
    return filteredQuestions.slice(0, count);
}

/**
 * FONCTION : formatTime(seconds)
 * 
 * OBJECTIF : Convertir des secondes en format MM:SS
 * 
 * EXEMPLE : 125 → "02:05"
 * 
 * CONCEPTS :
 * - Math.floor() : arrondit à l'entier inférieur
 * - toString().padStart() : formate les nombres avec des zéros
 * - Template literals : concaténation de chaînes
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez les heures si le temps dépasse 60 minutes
 * 2. Changez le format (ex: "2m 5s")
 * 3. Ajoutez un format décimal pour les millisecondes
 */

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * FONCTION : calculateScore(isCorrect, timeLeft, difficulty, streak)
 * 
 * OBJECTIF : Calculer les points gagnés pour une question
 * 
 * FORMULE : 
 * - Base : 10 points si correct, 0 sinon
 * - Bonus temps : 1 point par seconde restante (max 10)
 * - Multiplicateur difficulté : facile×1, moyen×1.5, difficile×2
 * - Bonus série : 5 points par question consécutive correcte
 * 
 * CONCEPTS :
 * - Objets comme tables de recherche
 * - Opérateurs ternaires
 * - Multiplication de valeurs
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Changez la formule de calcul
 * 2. Ajoutez des pénalités pour les mauvaises réponses
 * 3. Implémentez un système de "combos"
 */

function calculateScore(isCorrect, timeLeft, difficulty, streak) {
    if (!isCorrect) return 0;
    
    // Points de base
    let points = 10;
    
    // Bonus pour le temps restant (max 10 points)
    const timeBonus = Math.min(Math.floor(timeLeft / 3), 10);
    points += timeBonus;
    
    // Multiplicateur de difficulté
    const difficultyMultiplier = {
        easy: 1,
        medium: 1.5,
        hard: 2
    };
    points *= difficultyMultiplier[difficulty];
    
    // Bonus de série (streak)
    const streakBonus = Math.min(streak * 2, 10); // max 10 points
    points += streakBonus;
    
    return Math.round(points);
}

/**
 * FONCTION : updateLocalStorage()
 * 
 * OBJECTIF : Sauvegarder les statistiques et préférences dans localStorage
 * 
 * DONNÉES SAUVEGARDÉES :
 * - Meilleurs scores par catégorie
 * - Préférences utilisateur
 * - Historique des parties
 * 
 * CONCEPTS :
 * - localStorage.setItem() : sauvegarde une paire clé-valeur
 * - JSON.stringify() : convertit un objet en chaîne JSON
 * - try/catch : gère les erreurs de sauvegarde
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez plus de statistiques à sauvegarder
 * 2. Implémentez un système de sauvegarde multiple
 * 3. Ajoutez une date d'expiration aux sauvegardes
 */

function updateLocalStorage() {
    try {
        const stats = {
            lastPlayed: new Date().toISOString(),
            category: quizState.category,
            difficulty: quizState.difficulty,
            score: quizState.score,
            correctAnswers: quizState.correctAnswers,
            totalQuestions: quizState.answeredQuestions
        };
        
        // Récupérer les anciennes statistiques
        const oldStats = JSON.parse(localStorage.getItem('quizStats') || '{}');
        
        // Mettre à jour les meilleurs scores
        if (!oldStats.bestScores) oldStats.bestScores = {};
        const key = `${quizState.category}_${quizState.difficulty}`;
        
        if (!oldStats.bestScores[key] || quizState.score > oldStats.bestScores[key].score) {
            oldStats.bestScores[key] = {
                score: quizState.score,
                date: new Date().toISOString(),
                correctAnswers: quizState.correctAnswers,
                totalQuestions: quizState.answeredQuestions
            };
        }
        
        // Ajouter aux historiques
        if (!oldStats.history) oldStats.history = [];
        oldStats.history.unshift(stats);
        
        // Garder seulement les 10 dernières parties
        if (oldStats.history.length > 10) {
            oldStats.history = oldStats.history.slice(0, 10);
        }
        
        // Sauvegarder
        localStorage.setItem('quizStats', JSON.stringify(oldStats));
        
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
    }
}

// ============================================================================
// SECTION 4 : FONCTIONS D'AFFICHAGE
// ============================================================================

/**
 * FONCTION : showScreen(screenName)
 * 
 * OBJECTIF : Basculer entre les différents écrans du quiz
 * 
 * ÉCRANS DISPONIBLES :
 * - "start" : Écran de démarrage avec choix des paramètres
 * - "quiz" : Écran du quiz avec questions
 * - "results" : Écran des résultats finaux
 * 
 * CONCEPTS :
 * - document.querySelectorAll() : sélection multiple
 * - classList.remove() / add() : manipulation des classes CSS
 * - Gestion des transitions entre vues
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez des animations de transition entre les écrans
 * 2. Créez un écran "pause"
 * 3. Ajoutez un écran "aide" ou "règles"
 */

function showScreen(screenName) {
    // Cacher tous les écrans
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Afficher l'écran demandé
    const targetScreen = document.getElementById(`${screenName}Screen`);
    if (targetScreen) {
        targetScreen.classList.add('active');
        quizState.currentScreen = screenName;
    }
    
    // Initialiser l'écran si nécessaire
    if (screenName === 'quiz') {
        initializeQuizScreen();
    } else if (screenName === 'results') {
        initializeResultsScreen();
    }
}

/**
 * FONCTION : initializeQuizScreen()
 * 
 * OBJECTIF : Initialiser l'écran du quiz avec la première question
 * 
 * ACTIONS :
 * 1. Réinitialiser les variables du quiz
 * 2. Sélectionner les questions aléatoirement
 * 3. Démarrer le timer
 * 4. Afficher la première question
 * 
 * CONCEPTS :
 * - Réinitialisation d'état
 * - Initialisation de timer avec setInterval()
 * - Génération de contenu dynamique
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez un compte à rebours avant le début
 * 2. Implémentez un système de vies
 * 3. Ajoutez une musique de fond
 */

function initializeQuizScreen() {
    // Réinitialiser l'état du quiz
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.timeLeft = 300; // 5 minutes
    quizState.streak = 0;
    quizState.maxStreak = 0;
    quizState.answeredQuestions = 0;
    quizState.correctAnswers = 0;
    quizState.userAnswers = [];
    quizState.gameActive = true;
    
    // Réinitialiser les vies
    quizState.lifelines = {
        fiftyFifty: 1,
        extraTime: 1,
        skipQuestion: 1
    };
    
    // Sélectionner les questions
    quizState.selectedQuestions = getQuestionsByCategoryAndDifficulty(
        quizState.category,
        quizState.difficulty,
        quizState.questionsPerRound
    );
    
    // Mettre à jour l'affichage initial
    updateProgressBar();
    updateStatsDisplay();
    updateLifelinesDisplay();
    
    // Démarrer le timer
    startTimer();
    
    // Afficher la première question
    loadQuestion(0);
}

/**
 * FONCTION : updateProgressBar()
 * 
 * OBJECTIF : Mettre à jour la barre de progression du quiz
 * 
 * CALCUL : 
 * Progression = (question actuelle / total questions) * 100
 * 
 * CONCEPTS :
 * - Element.style.width : modification du style CSS
 * - Template literals pour l'affichage texte
 * - Calcul de pourcentage
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez une animation fluide de la barre
 * 2. Changez la couleur selon la progression
 * 3. Ajoutez des marqueurs pour chaque question
 */

function updateProgressBar() {
    const progress = ((quizState.currentQuestionIndex + 1) / quizState.selectedQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    document.getElementById('currentQuestion').textContent = quizState.currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = quizState.selectedQuestions.length;
}

/**
 * FONCTION : updateStatsDisplay()
 * 
 * OBJECTIF : Mettre à jour toutes les statistiques affichées
 * 
 * STATISTIQUES AFFICHÉES :
 * - Temps restant
 * - Score actuel
 * - Série de bonnes réponses
 * 
 * CONCEPTS :
 * - Mise à jour multiple d'éléments DOM
 * - Formatage des données pour l'affichage
 * - Gestion des états conditionnels
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez d'autres statistiques (ex: précision, temps moyen)
 * 2. Changez le style selon les valeurs (ex: score en rouge si bas)
 * 3. Ajoutez des animations pour les changements
 */

function updateStatsDisplay() {
    // Temps
    document.getElementById('timer').textContent = formatTime(quizState.timeLeft);
    
    // Score
    document.getElementById('score').textContent = quizState.score;
    
    // Série
    document.getElementById('streak').textContent = quizState.streak;
    
    // Catégorie et difficulté
    const categoryNames = {
        javascript: "JavaScript",
        html: "HTML",
        css: "CSS",
        web: "Web Général"
    };
    
    const difficultyNames = {
        easy: "Facile",
        medium: "Intermédiaire",
        hard: "Difficile"
    };
    
    document.getElementById('questionCategory').textContent = categoryNames[quizState.category];
    document.getElementById('questionDifficulty').textContent = difficultyNames[quizState.difficulty];
    document.getElementById('questionDifficulty').className = `question-difficulty ${quizState.difficulty}`;
}

/**
 * FONCTION : updateLifelinesDisplay()
 * 
 * OBJECTIF : Mettre à jour l'affichage des vies/bonus disponibles
 * 
 * BONUS DISPONIBLES :
 * - 50/50 : Élimine deux mauvaises réponses
 * - +30s : Ajoute 30 secondes au timer
 * - Passer : Passe à la question suivante sans pénalité
 * 
 * CONCEPTS :
 * - Désactivation des boutons quand le bonus n'est pas disponible
 * - Mise à jour des compteurs visuels
 * - Gestion des états des boutons
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez de nouveaux types de bonus
 * 2. Implémentez un système de récupération de bonus
 * 3. Changez le coût d'utilisation des bonus
 */

function updateLifelinesDisplay() {
    // Bouton 50/50
    const fiftyFiftyBtn = document.getElementById('fiftyFiftyBtn');
    const fiftyFiftyCount = fiftyFiftyBtn.querySelector('.lifeline-count');
    
    if (quizState.lifelines.fiftyFifty > 0) {
        fiftyFiftyBtn.disabled = false;
        fiftyFiftyCount.textContent = quizState.lifelines.fiftyFifty;
    } else {
        fiftyFiftyBtn.disabled = true;
        fiftyFiftyCount.textContent = '0';
    }
    
    // Bouton +30s
    const extraTimeBtn = document.getElementById('extraTimeBtn');
    const extraTimeCount = extraTimeBtn.querySelector('.lifeline-count');
    
    if (quizState.lifelines.extraTime > 0) {
        extraTimeBtn.disabled = false;
        extraTimeCount.textContent = quizState.lifelines.extraTime;
    } else {
        extraTimeBtn.disabled = true;
        extraTimeCount.textContent = '0';
    }
    
    // Bouton Passer
    const skipQuestionBtn = document.getElementById('skipQuestionBtn');
    const skipQuestionCount = skipQuestionBtn.querySelector('.lifeline-count');
    
    if (quizState.lifelines.skipQuestion > 0) {
        skipQuestionBtn.disabled = false;
        skipQuestionCount.textContent = quizState.lifelines.skipQuestion;
    } else {
        skipQuestionBtn.disabled = true;
        skipQuestionCount.textContent = '0';
    }
}

/**
 * FONCTION : loadQuestion(questionIndex)
 * 
 * OBJECTIF : Afficher une question spécifique avec ses options
 * 
 * ACTIONS :
 * 1. Récupérer la question à l'index donné
 * 2. Générer le HTML pour la question et les options
 * 3. Réinitialiser l'interface (cacher l'indice, désélectionner les options)
 * 4. Mettre à jour les boutons (suivant désactivé)
 * 
 * CONCEPTS :
 * - Création dynamique d'éléments DOM
 * - Gestion des événements sur des éléments générés
 * - Réinitialisation d'état d'interface
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez des images aux questions
 * 2. Implémentez un système de questions à réponse libre
 * 3. Ajoutez des effets sonores
 */

function loadQuestion(questionIndex) {
    const question = quizState.selectedQuestions[questionIndex];
    if (!question) return;
    
    // Mettre à jour la barre de progression
    updateProgressBar();
    
    // Afficher le texte de la question
    document.getElementById('questionText').textContent = question.question;
    
    // Cacher l'indice
    document.getElementById('questionHint').classList.remove('visible');
    document.getElementById('questionHint').querySelector('span').textContent = question.hint;
    
    // Générer les options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    const optionLetters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.dataset.index = index;
        
        optionBtn.innerHTML = `
            <div class="option-letter">${optionLetters[index]}</div>
            <div class="option-text">${option}</div>
            <div class="option-feedback">
                ${index === question.correctAnswer ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>'}
            </div>
        `;
        
        // Ajouter l'événement de clic
        optionBtn.addEventListener('click', () => selectOption(index, question));
        
        optionsContainer.appendChild(optionBtn);
    });
    
    // Désactiver le bouton suivant
    document.getElementById('nextBtn').disabled = true;
    
    // Réactiver tous les boutons d'option
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('selected', 'correct', 'wrong');
    });
    
    // Mettre à jour les informations de la question
    document.getElementById('questionCategory').textContent = 
        quizState.category.charAt(0).toUpperCase() + quizState.category.slice(1);
    
    const difficultyNames = {
        easy: 'Facile',
        medium: 'Intermédiaire',
        hard: 'Difficile'
    };
    
    const difficultyEl = document.getElementById('questionDifficulty');
    difficultyEl.textContent = difficultyNames[question.difficulty];
    difficultyEl.className = `question-difficulty ${question.difficulty}`;
}

/**
 * FONCTION : selectOption(selectedIndex, question)
 * 
 * OBJECTIF : Gérer la sélection d'une option par le joueur
 * 
 * ACTIONS :
 * 1. Vérifier si la réponse est correcte
 * 2. Mettre à jour le score et les statistiques
 * 3. Afficher le feedback visuel
 * 4. Enregistrer la réponse de l'utilisateur
 * 5. Activer le bouton "suivant"
 * 
 * CONCEPTS :
 * - Comparaison de valeurs
 * - Mise à jour d'état asynchrone (setTimeout)
 * - Modification des classes CSS pour le feedback
 * - Calcul en temps réel
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez un délai avant de montrer la bonne réponse
 * 2. Implémentez un système de pénalités pour les mauvaises réponses
 * 3. Ajoutez des animations spécifiques pour correct/incorrect
 */

function selectOption(selectedIndex, question) {
    // Vérifier si une option est déjà sélectionnée
    if (!quizState.gameActive || document.querySelector('.option-btn.selected')) {
        return;
    }
    
    // Marquer l'option sélectionnée
    const selectedBtn = document.querySelector(`.option-btn[data-index="${selectedIndex}"]`);
    selectedBtn.classList.add('selected');
    
    // Désactiver toutes les options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    // Vérifier si la réponse est correcte
    const isCorrect = selectedIndex === question.correctAnswer;
    
    // Mettre à jour la série
    if (isCorrect) {
        quizState.streak++;
        if (quizState.streak > quizState.maxStreak) {
            quizState.maxStreak = quizState.streak;
        }
    } else {
        quizState.streak = 0;
    }
    
    // Calculer le score pour cette question
    const timeBonus = Math.min(Math.floor(quizState.timeLeft / 10), 5); // Bonus temps limité
    const questionScore = calculateScore(isCorrect, timeBonus, question.difficulty, quizState.streak);
    quizState.score += questionScore;
    
    // Mettre à jour les statistiques
    quizState.answeredQuestions++;
    if (isCorrect) quizState.correctAnswers++;
    
    // Enregistrer la réponse de l'utilisateur
    quizState.userAnswers.push({
        questionId: question.id,
        selectedOption: selectedIndex,
        isCorrect: isCorrect,
        timeSpent: 30 - quizState.timeLeft, // Temps utilisé pour cette question
        score: questionScore
    });
    
    // Afficher le feedback visuel après un court délai
    setTimeout(() => {
        // Montrer la bonne réponse
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
        
        // Activer le bouton suivant
        document.getElementById('nextBtn').disabled = false;
        
        // Mettre à jour l'affichage des statistiques
        updateStatsDisplay();
        
    }, 500);
}

/**
 * FONCTION : startTimer()
 * 
 * OBJECTIF : Démarrer le compte à rebours du quiz
 * 
 * MÉCANISME :
 * - Utilise setInterval pour décrémenter chaque seconde
 * - Met à jour l'affichage régulièrement
 * - Arrête le quiz quand le temps est écoulé
 * 
 * CONCEPTS :
 * - setInterval() et clearInterval()
 * - Gestion du temps en JavaScript
 * - Callback functions
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez des avertissements visuels quand le temps est bas
 * 2. Implémentez un système de "temps additionnel" pour bonnes réponses
 * 3. Ajoutez un mode "contre la montre" où le temps diminue plus vite
 */

function startTimer() {
    // Nettoyer un éventuel timer existant
    if (quizState.timerInterval) {
        clearInterval(quizState.timerInterval);
    }
    
    // Démarrer le nouveau timer
    quizState.timerInterval = setInterval(() => {
        quizState.timeLeft--;
        
        // Mettre à jour l'affichage
        updateStatsDisplay();
        
        // Changer la couleur quand le temps est bas
        const timerElement = document.getElementById('timer');
        if (quizState.timeLeft <= 30) {
            timerElement.style.color = '#f56565';
            timerElement.style.fontWeight = 'bold';
        } else {
            timerElement.style.color = '';
            timerElement.style.fontWeight = '';
        }
        
        // Vérifier si le temps est écoulé
        if (quizState.timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

// ============================================================================
// SECTION 5 : FONCTIONS DE GESTION DU QUIZ
// ============================================================================

/**
 * FONCTION : nextQuestion()
 * 
 * OBJECTIF : Passer à la question suivante
 * 
 * LOGIQUE :
 * 1. Vérifier s'il reste des questions
 * 2. Charger la question suivante
 * 3. Si c'était la dernière question, terminer le quiz
 * 
 * CONCEPTS :
 * - Incrémentation d'index
 * - Conditions de fin de parcours
 * - Transition entre états
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez un écran de transition entre les questions
 * 2. Implémentez un système de révision des questions
 * 3. Ajoutez des questions bonus après un certain score
 */

function nextQuestion() {
    quizState.currentQuestionIndex++;
    
    if (quizState.currentQuestionIndex < quizState.selectedQuestions.length) {
        loadQuestion(quizState.currentQuestionIndex);
    } else {
        endQuiz();
    }
}

/**
 * FONCTION : useLifeline(lifelineType)
 * 
 * OBJECTIF : Utiliser un bonus/vie pendant le quiz
 * 
 * TYPES DE BONUS :
 * - "fiftyFifty" : Élimine deux mauvaises réponses
 * - "extraTime" : Ajoute 30 secondes au timer
 * - "skipQuestion" : Passe à la question suivante
 * 
 * CONCEPTS :
 * - Manipulation d'objets complexes
 * - Modification conditionnelle du DOM
 * - Gestion des ressources limitées
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez de nouveaux types de bonus
 * 2. Changez les effets des bonus existants
 * 3. Implémentez un système d'achat de bonus avec les points
 */

function useLifeline(lifelineType) {
    // Vérifier si le bonus est disponible
    if (quizState.lifelines[lifelineType] <= 0) return;
    
    // Utiliser le bonus
    quizState.lifelines[lifelineType]--;
    
    // Appliquer l'effet du bonus
    switch(lifelineType) {
        case 'fiftyFifty':
            useFiftyFifty();
            break;
        case 'extraTime':
            useExtraTime();
            break;
        case 'skipQuestion':
            useSkipQuestion();
            break;
    }
    
    // Mettre à jour l'affichage des bonus
    updateLifelinesDisplay();
}

/**
 * FONCTION : useFiftyFifty()
 * 
 * OBJECTIF : Éliminer deux mauvaises réponses aléatoires
 * 
 * ALGORITHME :
 * 1. Trouver l'index de la bonne réponse
 * 2. Sélectionner deux mauvaises réponses aléatoirement
 * 3. Les masquer dans l'interface
 * 
 * CONCEPTS :
 * - Génération de nombres aléatoires
 * - Filtrage de tableaux
 * - Manipulation du style CSS
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Changez le nombre de réponses éliminées
 * 2. Faites en sorte que l'élimination soit progressive
 * 3. Ajoutez un effet visuel pour l'élimination
 */

function useFiftyFifty() {
    const currentQuestion = quizState.selectedQuestions[quizState.currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswer;
    
    // Trouver les indices des mauvaises réponses
    const wrongIndices = [0, 1, 2, 3].filter(index => index !== correctIndex);
    
    // Mélanger et prendre 2 mauvaises réponses
    for (let i = wrongIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
    }
    
    const indicesToRemove = wrongIndices.slice(0, 2);
    
    // Masquer les options sélectionnées
    indicesToRemove.forEach(index => {
        const optionBtn = document.querySelector(`.option-btn[data-index="${index}"]`);
        if (optionBtn) {
            optionBtn.style.opacity = '0.3';
            optionBtn.style.pointerEvents = 'none';
            optionBtn.querySelector('.option-text').textContent = '❓';
        }
    });
}

/**
 * FONCTION : useExtraTime()
 * 
 * OBJECTIF : Ajouter 30 secondes au timer
 * 
 * CONCEPTS :
 * - Modification de variable d'état
 * - Feedback visuel immédiat
 * - Limitation des bonus
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Changez la quantité de temps ajoutée
 * 2. Ajoutez un effet visuel quand le temps est ajouté
 * 3. Limitez le temps maximum possible
 */

function useExtraTime() {
    quizState.timeLeft += 30;
    updateStatsDisplay();
    
    // Effet visuel
    const timerElement = document.getElementById('timer');
    timerElement.style.color = '#48bb78';
    timerElement.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        timerElement.style.color = '';
        timerElement.style.transform = '';
    }, 500);
}

/**
 * FONCTION : useSkipQuestion()
 * 
 * OBJECTIF : Passer à la question suivante sans pénalité
 * 
 * CONCEPTS :
 * - Saut d'étape dans un processus
 * - Mise à jour d'état sans validation
 * - Gestion des transitions
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez une pénalité de score pour le saut
 * 2. Limitez le nombre de sauts consécutifs
 * 3. Ajoutez un message explicatif
 */

function useSkipQuestion() {
    // Enregistrer comme question non répondue
    const currentQuestion = quizState.selectedQuestions[quizState.currentQuestionIndex];
    quizState.userAnswers.push({
        questionId: currentQuestion.id,
        selectedOption: null,
        isCorrect: false,
        timeSpent: 0,
        score: 0
    });
    
    quizState.answeredQuestions++;
    
    // Passer à la question suivante
    nextQuestion();
}

/**
 * FONCTION : showHint()
 * 
 * OBJECTIF : Afficher l'indice pour la question courante
 * 
 * CONCEPTS :
 * - Manipulation de classes CSS
 * - Affichage conditionnel
 * - Gestion des ressources (limite d'indices)
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Limitez le nombre d'indices par partie
 * 2. Ajoutez différents types d'indices (ex: indice visuel)
 * 3. Faites payer les indices avec des points
 */

function showHint() {
    const hintElement = document.getElementById('questionHint');
    hintElement.classList.add('visible');
}

// ============================================================================
// SECTION 6 : FIN DU QUIZ ET RÉSULTATS
// ============================================================================

/**
 * FONCTION : endQuiz()
 * 
 * OBJECTIF : Terminer le quiz et afficher les résultats
 * 
 * ACTIONS :
 * 1. Arrêter le timer
 * 2. Calculer les statistiques finales
 * 3. Sauvegarder les résultats
 * 4. Afficher l'écran des résultats
 * 
 * CONCEPTS :
 * - Nettoyage des intervalles
 * - Calcul de moyennes et pourcentages
 * - Transition entre écrans
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez un écran de fin avec animation
 * 2. Implémentez un classement des meilleurs scores
 * 3. Proposez de rejouer avec les mêmes paramètres
 */

function endQuiz() {
    // Arrêter le timer
    if (quizState.timerInterval) {
        clearInterval(quizState.timerInterval);
        quizState.timerInterval = null;
    }
    
    // Marquer la fin du jeu
    quizState.gameActive = false;
    
    // Calculer le temps total utilisé
    const totalTimeUsed = 300 - quizState.timeLeft; // 5 minutes initiales
    
    // Calculer la précision
    const accuracy = quizState.answeredQuestions > 0 
        ? Math.round((quizState.correctAnswers / quizState.answeredQuestions) * 100)
        : 0;
    
    // Sauvegarder les résultats
    updateLocalStorage();
    
    // Afficher l'écran des résultats
    showScreen('results');
}

/**
 * FONCTION : initializeResultsScreen()
 * 
 * OBJECTIF : Initialiser et afficher les résultats détaillés
 * 
 * STATISTIQUES AFFICHÉES :
 * - Score final
 * - Nombre de réponses correctes
 * - Temps total utilisé
 * - Précision (pourcentage)
 * - Détails par catégorie
 * - Revue des questions
 * 
 * CONCEPTS :
 * - Agrégation de données
 * - Création dynamique de contenu complexe
 * - Formatage de données pour l'affichage
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez des graphiques pour visualiser les résultats
 * 2. Implémentez un système de partage des résultats
 * 3. Ajoutez des badges/médailles selon la performance
 */

function initializeResultsScreen() {
    // Calculer les statistiques
    const totalQuestions = quizState.selectedQuestions.length;
    const correctAnswers = quizState.correctAnswers;
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const totalTimeUsed = 300 - quizState.timeLeft;
    
    // Mettre à jour les statistiques principales
    document.getElementById('finalScore').textContent = quizState.score;
    document.getElementById('correctAnswers').textContent = `${correctAnswers}/${totalQuestions}`;
    document.getElementById('timeSpent').textContent = formatTime(totalTimeUsed);
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    
    // Mettre à jour le sous-titre
    const categoryNames = {
        javascript: "JavaScript",
        html: "HTML",
        css: "CSS",
        web: "Web Général"
    };
    
    const difficultyNames = {
        easy: "Facile",
        medium: "Intermédiaire",
        hard: "Difficile"
    };
    
    document.getElementById('resultsSubtitle').textContent = 
        `Catégorie : ${categoryNames[quizState.category]} | Difficulté : ${difficultyNames[quizState.difficulty]}`;
    
    // Générer les statistiques par catégorie
    generateCategoryBreakdown();
    
    // Générer la revue des questions
    generateQuestionReview();
}

/**
 * FONCTION : generateCategoryBreakdown()
 * 
 * OBJECTIF : Générer les statistiques détaillées par catégorie
 * 
 * CALCULS :
 * - Nombre de questions par catégorie
 * - Pourcentage de réussite par catégorie
 * - Temps moyen par catégorie
 * 
 * CONCEPTS :
 * - Array.reduce() : agrégation de données
 * - Regroupement par propriété
 * - Calcul de moyennes
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez plus de métriques par catégorie
 * 2. Créez un graphique visuel pour les pourcentages
 * 3. Comparez avec les performances moyennes
 */

function generateCategoryBreakdown() {
    const breakdownElement = document.getElementById('categoryBreakdown');
    
    // Grouper les questions par catégorie
    const categories = {};
    
    quizState.selectedQuestions.forEach((question, index) => {
        const category = question.category;
        const userAnswer = quizState.userAnswers[index];
        
        if (!categories[category]) {
            categories[category] = {
                total: 0,
                correct: 0,
                timeSpent: 0
            };
        }
        
        categories[category].total++;
        if (userAnswer && userAnswer.isCorrect) {
            categories[category].correct++;
        }
        if (userAnswer) {
            categories[category].timeSpent += userAnswer.timeSpent;
        }
    });
    
    // Générer le HTML
    let html = '';
    
    for (const [category, stats] of Object.entries(categories)) {
        const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        const avgTime = stats.total > 0 ? Math.round(stats.timeSpent / stats.total) : 0;
        
        html += `
            <div class="category-stats">
                <div class="category-name">${category.toUpperCase()}</div>
                <div class="category-details">
                    <span>${stats.correct}/${stats.total} correctes</span>
                    <span>${percentage}% de réussite</span>
                    <span>${avgTime}s en moyenne</span>
                </div>
            </div>
        `;
    }
    
    breakdownElement.innerHTML = html || '<p>Aucune donnée disponible</p>';
}

/**
 * FONCTION : generateQuestionReview()
 * 
 * OBJECTIF : Afficher la liste de toutes les questions avec les réponses
 * 
 * POUR CHAQUE QUESTION :
 * - Texte de la question
 * - Réponse de l'utilisateur (correcte/incorrecte)
 * - Bonne réponse
 * - Explication
 * 
 * CONCEPTS :
 * - Boucle sur deux tableaux synchronisés
 * - Application conditionnelle de styles
 * - Affichage d'explications détaillées
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez la possibilité de revoir les explications
 * 2. Filtrez les questions (seulement les incorrectes)
 * 3. Ajoutez des liens pour approfondir les sujets
 */

function generateQuestionReview() {
    const reviewElement = document.getElementById('reviewList');
    
    let html = '';
    
    quizState.selectedQuestions.forEach((question, index) => {
        const userAnswer = quizState.userAnswers[index];
        const isCorrect = userAnswer ? userAnswer.isCorrect : false;
        const userAnswerText = userAnswer && userAnswer.selectedOption !== null 
            ? question.options[userAnswer.selectedOption]
            : "Non répondue";
        
        const correctAnswerText = question.options[question.correctAnswer];
        
        html += `
            <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                <div class="review-question">
                    <strong>Q${index + 1}:</strong> ${question.question}
                </div>
                <div class="review-answer ${isCorrect ? 'correct' : 'wrong'}">
                    <strong>Votre réponse:</strong> ${userAnswerText}
                </div>
                ${!isCorrect ? `
                    <div class="review-answer correct">
                        <strong>Bonne réponse:</strong> ${correctAnswerText}
                    </div>
                    <div class="review-explanation">
                        <strong>Explication:</strong> ${question.explanation}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    reviewElement.innerHTML = html || '<p>Aucune question à revoir</p>';
}

// ============================================================================
// SECTION 7 : INITIALISATION ET ÉVÉNEMENTS
// ============================================================================

/**
 * FONCTION : setupEventListeners()
 * 
 * OBJECTIF : Configurer tous les écouteurs d'événements
 * 
 * TYPES D'ÉVÉNEMENTS GÉRÉS :
 * - Clics sur les boutons
 * - Sélection de catégorie/difficulté
 * - Raccourcis clavier
 * - Événements de formulaire
 * 
 * CONCEPTS :
 * - addEventListener() pour différents types d'événements
 * - Gestion des événements de formulaire
 * - Délégation d'événements
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez des raccourcis clavier avancés
 * 2. Gérez les événements tactiles pour mobile
 * 3. Ajoutez des événements pour le glisser-déposer
 */

function setupEventListeners() {
    // ============ ÉCRAN DE DÉMARRAGE ============
    
    // Bouton de démarrage
    document.getElementById('startBtn').addEventListener('click', () => {
        showScreen('quiz');
    });
    
    // Sélection de catégorie
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            quizState.category = this.dataset.category;
        });
    });
    
    // Sélection de difficulté
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            quizState.difficulty = this.dataset.difficulty;
        });
    });
    
    // ============ ÉCRAN DU QUIZ ============
    
    // Bouton indice
    document.getElementById('hintBtn').addEventListener('click', showHint);
    
    // Bouton passer
    document.getElementById('skipBtn').addEventListener('click', () => {
        if (confirm("Passer cette question ? Vous ne gagnerez pas de points.")) {
            useLifeline('skipQuestion');
        }
    });
    
    // Bouton question suivante
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    
    // Boutons des bonus
    document.getElementById('fiftyFiftyBtn').addEventListener('click', () => useLifeline('fiftyFifty'));
    document.getElementById('extraTimeBtn').addEventListener('click', () => useLifeline('extraTime'));
    document.getElementById('skipQuestionBtn').addEventListener('click', () => useLifeline('skipQuestion'));
    
    // ============ ÉCRAN DES RÉSULTATS ============
    
    // Bouton recommencer
    document.getElementById('restartBtn').addEventListener('click', () => {
        showScreen('quiz');
    });
    
    // Bouton changer paramètres
    document.getElementById('changeSettingsBtn').addEventListener('click', () => {
        showScreen('start');
    });
    
    // Bouton partager
    document.getElementById('shareResultsBtn').addEventListener('click', shareResults);
    
    // ============ RACCOURCIS CLAVIER ============
    
    document.addEventListener('keydown', (event) => {
        // Seulement si le quiz est actif
        if (!quizState.gameActive || quizState.currentScreen !== 'quiz') return;
        
        switch(event.key) {
            case '1':
            case 'a':
                selectOption(0, quizState.selectedQuestions[quizState.currentQuestionIndex]);
                break;
            case '2':
            case 'b':
                selectOption(1, quizState.selectedQuestions[quizState.currentQuestionIndex]);
                break;
            case '3':
            case 'c':
                selectOption(2, quizState.selectedQuestions[quizState.currentQuestionIndex]);
                break;
            case '4':
            case 'd':
                selectOption(3, quizState.selectedQuestions[quizState.currentQuestionIndex]);
                break;
            case ' ':
            case 'Enter':
                if (!document.getElementById('nextBtn').disabled) {
                    nextQuestion();
                }
                break;
            case 'h':
                showHint();
                break;
            case 's':
                if (confirm("Passer cette question ?")) {
                    useLifeline('skipQuestion');
                }
                break;
        }
    });
}

/**
 * FONCTION : shareResults()
 * 
 * OBJECTIF : Partager les résultats sur les réseaux sociaux
 * 
 * PLATEFORMES SUPPORTÉES :
 * - Twitter
 * - Facebook (via URL)
 * - Clipboard (copie dans le presse-papier)
 * 
 * CONCEPTS :
 * - Web Share API (navigateur)
 * - Clipboard API
 * - Génération de texte de partage
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez plus de plateformes
 * 2. Générez une image avec les résultats
 * 3. Implémentez un système de hashtags
 */

function shareResults() {
    const shareText = `🎯 J'ai obtenu ${quizState.score} points au quiz JavaScript !\n` +
                     `✅ ${quizState.correctAnswers}/${quizState.selectedQuestions.length} bonnes réponses\n` +
                     `⏱️ Temps : ${formatTime(300 - quizState.timeLeft)}\n` +
                     `#JavaScript #Quiz #Apprentissage`;
    
    // Utiliser l'API Web Share si disponible
    if (navigator.share) {
        navigator.share({
            title: 'Mes résultats au quiz JavaScript',
            text: shareText,
            url: window.location.href
        });
    } else if (navigator.clipboard) {
        // Copier dans le presse-papier
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Résultats copiés dans le presse-papier !'))
            .catch(err => console.error('Erreur de copie:', err));
    } else {
        // Fallback : afficher le texte à copier manuellement
        prompt('Copiez ce texte pour partager vos résultats:', shareText);
    }
}

/**
 * FONCTION : init()
 * 
 * OBJECTIF : Initialiser l'application au chargement de la page
 * 
 * ACTIONS :
 * 1. Charger les préférences sauvegardées
 * 2. Configurer les écouteurs d'événements
 * 3. Afficher l'écran de démarrage
 * 4. Initialiser les valeurs par défaut
 * 
 * CONCEPTS :
 * - Initialisation complète d'application
 * - Gestion des erreurs au démarrage
 * - Configuration par défaut
 * 
 * À MODIFIER POUR VOUS ENTRAÎNER :
 * 1. Ajoutez un écran de chargement
 * 2. Chargez les questions depuis une API externe
 * 3. Ajoutez des paramètres d'URL pour pré-remplir les options
 */

function init() {
    try {
        // Charger les statistiques sauvegardées
        const savedStats = localStorage.getItem('quizStats');
        if (savedStats) {
            console.log('Statistiques chargées:', JSON.parse(savedStats));
        }
        
        // Configurer les écouteurs d'événements
        setupEventListeners();
        
        // Afficher l'écran de démarrage
        showScreen('start');
        
        // Initialiser les valeurs par défaut
        quizState.category = "javascript";
        quizState.difficulty = "easy";
        
        console.log('Quiz initialisé avec succès !');
        
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
        alert('Une erreur est survenue lors du chargement du quiz. Veuillez rafraîchir la page.');
    }
}

// ============================================================================
// SECTION 8 : DÉMARRAGE DE L'APPLICATION
// ============================================================================

/**
 * DÉMARRAGE AUTOMATIQUE
 * 
 * OBJECTIF : Lancer l'application quand la page est prête
 * 
 * ÉVÉNEMENTS :
 * - DOMContentLoaded : quand le HTML est chargé
 * - load : quand toutes les ressources sont chargées
 * 
 * MEILLEURE PRATIQUE : Attendre que le DOM soit complètement chargé
 * avant de manipuler les éléments HTML.
 */

document.addEventListener('DOMContentLoaded', init);

/**
 * FONCTION : debugInfo()
 * 
 * UTILITÉ : Afficher des informations de débogage dans la console
 * 
 * À UTILISER PENDANT LE DÉVELOPPEMENT :
 * 1. Appelez debugInfo() dans la console du navigateur
 * 2. Inspectez l'état actuel du quiz
 * 3. Identifiez les problèmes
 */

window.debugInfo = function() {
    console.group('=== ÉTAT DU QUIZ (DEBUG) ===');
    console.log('État général:', quizState);
    console.log('Questions sélectionnées:', quizState.selectedQuestions);
    console.log('Réponses utilisateur:', quizState.userAnswers);
    console.log('Timer actif:', quizState.timerInterval !== null);
    console.log('Écran actuel:', quizState.currentScreen);
    console.groupEnd();
};