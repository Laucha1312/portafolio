import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  oracle: {
    title: "Oracle DB",
    bg: "black",
    fg: "white",
    icon: <GrOracle />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "onapb",
    category: "Sports Management",
    title: "OnAPB Platform",
    src: "/assets/projects-screenshots/onapb/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://onapb.com/",
    github: "https://github.com/Laucha1312/portafolio", // Using his current repo as placeholder
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            OnAPB = Complete Management for Basketball Associations
          </TypographyP>
          <TypographyP className="font-mono ">
            Lideré la refactorización completa del sistema de la Asociación Paranaense de Básquet. 
            Desde la gestión de credenciales y pagos hasta un sistema de notificaciones en tiempo real.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Access Control</TypographyH3>
          <p className="font-mono mb-2">
            Implementé un sistema de control de accesos vía QR que redujo los errores de entrada a cero, 
            permitiendo una validación instantánea y segura en cada partido.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/onapb/qr-system.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "voting-platform",
    category: "Government / E-Voting",
    title: "Electronic Voting Platform",
    src: "/assets/projects-screenshots/voting/landing.png",
    screenshots: ["landing.png"],
    live: "https://modernizacion.entrerios.gov.ar/", // Placeholder
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.oracle,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Plataforma de votación electrónica a escala provincial, adoptada por múltiples concejos deliberantes municipales.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Este sistema permitió modernizar los procesos legislativos municipales, asegurando transparencia y velocidad en el conteo de votos.
          </p>
          <SlideShow images={[`${BASE_PATH}/voting/system.png`]} />
          <TypographyH3 className="my-4 mt-8">BI Dashboards</TypographyH3>
          <p className="font-mono mb-2">
            Construcción de tableros de Business Intelligence en Looker Studio para visualizar métricas provinciales en tiempo real, 
            facilitando la toma de decisiones basada en datos.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/voting/dashboard.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "talleres-access",
    category: "Club Management",
    title: "CAT Access Control",
    src: "/assets/projects-screenshots/talleres/landing.png",
    screenshots: ["1.png"],
    live: "https://catalleres.pga.com.ar/", // Placeholder
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Sistema integral de control de accesos para el Club Atlético Talleres. 
            Diseñado e implementado desde cero para la validación instantánea de socios.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/talleres/access-1.png`,
              `${BASE_PATH}/talleres/access-2.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
