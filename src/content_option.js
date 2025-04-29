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
    description: "Développeur web junior tout juste diplômé d'une formation Bac+2 chez OpenClassrooms.",
    your_img_url: require("./assets/images/Gilou.jpeg"),
};

const formation = [{
    title: "Développeur Web Full Stack",
    description: "Openclassrooms / Paris"
},

{
    title: " DUT Génie Industriel et Maintenance",
    description: "IUT Jean Monnet / Roanne"
}


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
    
  
];

const contactConfig = {
    YOUR_EMAIL: "giloulegrand@gmail.com",
    YOUR_FONE: "(+33) 6 60 06 60 06",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
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
    formation,
    langues
};