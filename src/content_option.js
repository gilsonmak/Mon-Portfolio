const logotext = "Gilson Makanounou";
const meta = {
    title: "Développeur Web Full Stack",
    description: "Bienvenu sur mon portfolio",
};

const introdata = {
    title: "Bonjour ! ravi de vous rencontrer",
    animated: {
        first: "Développeur web full stack",
        second: "Passionné du développement web et ses technologies",
        third: "Je prends plaisir à concevoir des sites et applications où le design rencontre la performance",
        fourth: "Chaque nouveau projet est une occasion d'apprendre, de progresser et de découvrir de nouvelles technologies"
    },
    description: "Développeur Web Full Stack fraichement diplômé d'une formation Bac+2 chez OpenClassrooms.",
    your_img_url: require("./assets/images/Gil.png"),
};

const technologies = [{
    title: "Frontend",
    description: "Maîtrise des langages essentiels pour la création d’interfaces dynamiques et réactives : HTML, CSS, JavaScript, React, Sass. Capacité à structurer des pages web performantes et ergonomiques en respectant les bonnes pratiques de développement.",
},
{
    title: "Backend",
    description: "Bases solides en Node.js, Express.js pour construire des API robustes et gérer la logique serveur d’une application web. Compréhension des bases de données avec MongoDB et manipulation des données via des requêtes optimisées.",
},
{
    title: "Intégration & Responsive Design",
    description: "Utilisation des préprocesseurs et frameworks CSS (Sass) pour garantir un affichage optimal sur tous les écrans. Veille à l’accessibilité et aux performances pour offrir une expérience utilisateur fluide.",
},
{
    title: "Développement Full-Stack avec MERN",
    description: "Capacité à créer des applications complètes en utilisant MongoDB, Express.js, React et Node.js, en assurant la communication entre le front-end et le back-end de manière efficace.",
},
{
    title: "Versioning & Collaboration",
    description: "Utilisation de Git & GitHub pour gérer les versions du code et collaborer efficacement avec d’autres développeurs sur des projets en équipe.",
},
{
    title: "Optimisation et Debugging",
    description: "Débuggage du code avec Chrome DevTools, amélioration des performances et gestion des erreurs.",
},
];

const formation = [{
    title: "Développeur Web Full Stack",
    description: "Openclassrooms / Paris"
},

{
    title: " DUT Génie Industriel et Maintenance",
    description: "IUT Jean Monnet / Roanne"
}


];

const softSkills = [{
    title: "Communication & Esprit d'équipe",
    description: "Habitué à collaborer en mode agile, je communique efficacement avec tous les membres d’un projet."
},

{
     
    title: "Autonomie & Rigueur",
    description: "Je me forme seul et m’adapte rapidement aux nouvelles technologies."
},

{
    title: "Organisation",
    description: "Je planifie, priorise et respecte les délais avec rigueur."
},

];


const langues = [{
    title: "Français",
    description: "Langue maternelle"
}];

const dataportfolio = [


    {
        img: require('./assets/images/Booki.webp'),
        Projet: "Création de la Page D'accueil d'une Agence de Voyage avec HTML & CSS.",
        Contexte: "Développement de la page d’accueil d’un site de recherche d’hébergements et d’activités. En étroite collaboration avec Sarah, la CTO, et Loïc, l'UI designer, intégration des maquettes Figma en HTML/CSS (versions desktop, tablette et mobile). Le projet comprenait l'utilisation d'une base de code initiale, le respect des spécifications techniques, et le versionnement via Git. Mon travail a permis de créer une interface utilisateur responsive et intuitive, alignée avec les designs fournis par l'équipe.",
        Technologies: ["HTML"," CSS"],
      },


    {
        img: require("./assets/images/SophieBluel.webp"),
        Projet: "Portfolio Dynamique d'une Architecte.",
        Contexte: "Pour ArchiWebos, j'ai renforcé l'équipe en tant que développeur front-end sur le projet du site portfolio d'une architecte d'intérieur. J'ai intégré la page de présentation des travaux existante en utilisant les données dynamiques fournies par le backend, développé la page de connexion administrateur à partir de zéro, et créé une modale d'upload de médias. En suivant les designs Figma et en collaborant étroitement avec l'équipe, j'ai contribué à rendre le site fonctionnel, répondant ainsi aux besoins spécifiques du projet et aux attentes de nôtre cliente.",
        Technologies: ["HTML"," CSS", " JavaScript"],
      },

    {
        img: require("./assets/images/NinaCarducci.webp"),
        Projet: "Optimisation et Débogage du Site de Nina Carducci.",
        link: "https://gilsonmak.github.io/P4-Nina-Carducci/",
        Contexte: "Optimisation et débogage du site d’une photographe pour améliorer ses performances et son référencement. Utilisation d’audits Lighthouse et Wave pour identifier les axes d’amélioration. Application des bonnes pratiques SEO et accessibilité pour une meilleure visibilité et expérience utilisateur.",
        Technologies: ["Lighthouse"," Wave", " Google Snippets"],
       
    },

    {
        img: require("./assets/images/Kasa.webp"),
        Projet: "Création d'une Application Web de Location Kasa.",
        Contexte: "Développement de l'application en React à partir de la maquette Figma fournies. En attendant le Backend, utilisation d'un fichier JSON pour afficher les logements. Création des composants, mise en place du Router et intégration des fonctionnalités commee la galerie d'images et les menus déroulants interactifs.",
        Technologies: ["React", " SASS"],

    },

    {
        img: require("./assets/images/VieuxGrimoire.webp"),
        Projet: "Développer le Back-end d'un Site de notation de livres.",
        Contexte: "Développement du back-end pour une plateforme de notation de livres, collaboration avec un développeur front-end (React), respect des bonnes pratiques de développement et du Green Code. ",
        Technologies: ["Node.JS", " MongoDB", " Express"],
    },

    
  
];

const contactConfig = {
    YOUR_EMAIL: "giloulegrand@gmail.com",
    YOUR_FONE: "(+33) 6 60 06 60 06",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_USER_ID,
};

const socialprofils = {
    github: "https://github.com/gilsonmak",
   
};
export {
    meta,
    dataportfolio,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    technologies,
    formation,
    softSkills,
    langues
};