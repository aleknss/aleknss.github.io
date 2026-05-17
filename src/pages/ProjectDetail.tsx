import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Wrapper from "../layouts/Wrapper";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

import tonelaImg from "../assets/proyectos/tonela.webp";
import tfgImg from "../assets/proyectos/tfg.webp";

interface ProjectConfig {
  image: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  buttonColor: string;
}

const projectConfigs: Record<string, ProjectConfig> = {
  tonela: {
    image: tonelaImg,
    gradientFrom: "from-[#2d2621]",
    gradientTo: "to-[#57514d]",
    borderColor: "border-[#6D4C41]",
    buttonColor: "bg-[#6D4C41]",
  },
  ordenna: {
    image: tfgImg,
    gradientFrom: "from-[#1a2238]",
    gradientTo: "to-[#2d3a58]",
    borderColor: "border-[#3e5c8a]",
    buttonColor: "bg-[#3e5c8a]",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { portfolioData, language } = useLanguage();

  const projects = portfolioData.projects || [];
  const project = projects.find(
    (p: { logo: string }) => p.logo === slug
  );

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">
            {language === "es" ? "Proyecto no encontrado" : "Project not found"}
          </h1>
          <Link to="/" className="text-primary hover:underline">
            {language === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>
      </div>
    );
  }

  const config = projectConfigs[project.logo] || projectConfigs.tonela;

  return (
    <div className="w-full min-h-screen">
      <div className={`bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} py-16`}>
        <Wrapper>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <FaArrowLeft />
            {language === "es" ? "Volver a proyectos" : "Back to projects"}
          </Link>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img
              src={config.image}
              alt={project.name}
              className="w-full lg:w-1/2 rounded-lg object-cover aspect-video shadow-2xl"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white">
                {project.name}
              </h1>
              <p className="text-white/90 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {(project.skills || []).map((skill: string) => (
                  <span
                    key={skill}
                    className={`${config.buttonColor} text-white text-sm px-4 py-1.5 rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${config.buttonColor} hover:opacity-90 text-white px-6 py-3 rounded-lg w-fit mt-4 transition-opacity`}
              >
                <FaExternalLinkAlt />
                {language === "es" ? "Visitar proyecto" : "Visit project"}
              </a>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
