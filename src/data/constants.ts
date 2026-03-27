// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  PHP = "php",
  PYTHON = "python",
  CPP = "cpp",
  ELIXIR = "elixir",
  R = "r",
  ORACLE = "oracle",
  MYSQL = "mysql",
  SQLSERVER = "sqlserver",
  LOOKER = "looker",
  FLASK = "flask",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "tirando código al DOM desde el '95, ¡sin mentir! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "el primo aplicado de JavaScript que siempre está presumiendo 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "el abuelo de internet, ¡sigue siendo el jefe! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "estilo con el flow máximo, sin duda 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "las clases de utilidad pegan diferente, en serio 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript dijo 'sike, ahora soy backend', ¡de una! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "haciendo que tu código no sea un desastre, ¡gracias, siguiente! 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "the grandpa of CMS, still rocking that cane 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "¡La mejor contenedorización! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "La compañía del triángulo, ¡te ayuda a desplegar y salir a tomar aire! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.PHP]: {
    id: 26,
    name: "php",
    label: "PHP",
    shortDescription: "El OG de la web, ¡todavía alimenta a medio internet! 🐘⚡",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 27,
    name: "python",
    label: "Python",
    shortDescription: "Simple, potente, ¡y la serpiente favorita de todos! 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 28,
    name: "cpp",
    label: "C++",
    shortDescription: "Performance is king, but the syntax is a battle! ⚔️🚀",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.ELIXIR]: {
    id: 29,
    name: "elixir",
    label: "Elixir",
    shortDescription: "Scalability and fault tolerance with functional vibes! 💧✨",
    color: "#4e2a8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
  },
  [SkillNames.R]: {
    id: 30,
    name: "r",
    label: "R",
    shortDescription: "Stats, data, and charts that hit different! 📊📉",
    color: "#276dc3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
  [SkillNames.ORACLE]: {
    id: 31,
    name: "oracle",
    label: "Oracle DB",
    shortDescription: "Enterprise-grade data, reliable and robust! 🏛️💾",
    color: "#f80000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 32,
    name: "mysql",
    label: "MySQL",
    shortDescription: "The world's most popular open-source database! 🐬💾",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.SQLSERVER]: {
    id: 33,
    name: "sqlserver",
    label: "SQL Server",
    shortDescription: "Microsoft's heavy lifter for data! 🏗️💾",
    color: "#a91d22",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  [SkillNames.LOOKER]: {
    id: 34,
    name: "looker",
    label: "Looker Studio",
    shortDescription: "Visualizing data insights like a pro! 📊✨",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", // Placeholder for Looker Studio
  },
  [SkillNames.FLASK]: {
    id: 35,
    name: "flask",
    label: "Flask",
    shortDescription: "Lightweight and powerful Python web framework! 🧪🔥",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2025",
    endDate: "2026", // Assuming end of the period shown on CV
    title: "Software Developer (Intern)",
    company: "Secretaría de Modernización — Entre Ríos",
    description: [
      "Desarrollé y desplegué una plataforma de votación electrónica utilizada por concejos deliberantes municipales.",
      "Modernicé procedimientos internos, reduciendo significativamente los tiempos de procesamiento en organismos municipales.",
      "Construí tableros de BI en tiempo real en Looker Studio para métricas provinciales.",
    ],
    skills: [
      SkillNames.PHP,
      SkillNames.JS,
      SkillNames.ORACLE,
      SkillNames.LOOKER,
    ],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "Present",
    title: "Lead Developer",
    company: "OnAPB — Asociación Paranaense de Básquet",
    description: [
      "Lideré la refactorización completa del sistema de gestión OnAPB (credenciales, pagos, notificaciones).",
      "Implementé un sistema de control de accesos en tiempo real basado en QR, reduciendo los errores de entrada a cero.",
    ],
    skills: [
      SkillNames.PHP,
      SkillNames.JS,
      SkillNames.MYSQL,
      SkillNames.PYTHON,
      SkillNames.FLASK, // Note: I need to add FLASK to enum if I use it
    ],
  },
  {
    id: 3,
    startDate: "2023",
    endDate: "2023",
    title: "Developer · Automation & Access",
    company: "Club Atlético Paracao",
    description: [
      "Diseñé e implementé desde cero un sistema de control de accesos basado en QR para la validación instantánea de socios.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FLASK,
      SkillNames.MYSQL,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "¡Advertencia: El modo claro emite un trillón de lúmenes de pura radiación!",
    "¡Precaución: Modo claro por delante! Por favor, no intentes esto en casa.",
    "Solo profesionales entrenados pueden manejar tanto brillo. ¡Procede con gafas de sol!",
    "¡Prepárate! El modo claro está a punto de brillar más que tu futuro.",
    "Cambiando al modo claro... ¿Estás seguro de que tus ojos están listos?",
  ],
  dark: [
    "¿Modo claro? Pensé que te habías vuelto loco... ¡pero bienvenido de nuevo al lado oscuro!",
    "Cambiando al modo oscuro... ¿Cómo fue la vida en el lado brillante?",
    "¡Modo oscuro activado! Te lo agradezco desde el fondo de mi corazón, y mis ojos también.",
    "Bienvenido de nuevo a las sombras. ¿Cómo fue la vida allá afuera en la luz?",
    "¡Modo oscuro activado! Finalmente, alguien que entiende la verdadera sofisticación.",
  ],
};

