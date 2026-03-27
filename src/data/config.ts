const config = {
  title: "Lautaro Carrere | Lead Developer & Systems Analyst",
  description: {
    long: "Explore the portfolio of Lautaro Carrere, a systems analyst and lead developer specializing in large-scale provincial systems, real-time access control, and BI dashboards. Discover my latest work, including the OnAPB management system and electronic voting platforms. Let's build something impactful together!",
    short:
      "Discover the portfolio of Lautaro Carrere, a lead developer creating high-impact systems and innovative solutions.",
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
