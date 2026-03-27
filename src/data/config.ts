const config = {
  title: "Lautaro Carrere | Analista de Sistemas y Desarrollador Full Stack",
  description: {
    long: "Explora el portafolio de Lautaro Carrere, analista de sistemas y desarrollador especializado en sistemas provinciales de gran escala, control de accesos en tiempo real y tableros de BI. Descubre mis proyectos, incluyendo el sistema OnAPB y plataformas de voto electrónico. ¡Trabajemos juntos!",
    short:
      "Descubre el portafolio de Lautaro Carrere, desarrollador de sistemas de alto impacto y soluciones innovadoras.",
  },
  keywords: [
    "Lautaro Carrere",
    "portfolio",
    "lead developer",
    "systems analyst",
    "web development",
    "OnAPB",
    "voting platforms",
    "real-time systems",
    "PHP",
    "JavaScript",
    "Python",
    "SQL",
    "Next.js",
    "Docker",
  ],
  author: "Lautaro Carrere",
  email: "carrerelautaro@gmail.com",
  site: "https://laucha1312.github.io",

  // for github stars button
  githubUsername: "Laucha1312",
  githubRepo: "portafolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Laucha1312", // Placeholder as I don't have his twitter
    linkedin: "https://www.linkedin.com/in/lautaro-carrere/", // Placeholder but likely correct format
    instagram: "https://www.instagram.com/lautaro_carrere", // Placeholder
    facebook: "https://www.facebook.com/lautaro.carrere", // Placeholder
    github: "https://github.com/Laucha1312",
  },
};
export { config };
