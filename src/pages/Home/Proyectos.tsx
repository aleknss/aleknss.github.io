import Wrapper from "../../layouts/Wrapper";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useLanguage } from "../../contexts/LanguageContext";
import Title from "../../components/ui/Title";
import ProjectCard from "../../components/ui/ProjectCard";

import tonelaImg from "../../assets/proyectos/tonela.webp";
import tfgImg from "../../assets/proyectos/tfg.webp";
import animepolImg from "../../assets/proyectos/animepol.webp";

const projectConfigs: Record<string, any> = {
  tonela: {
    image: tonelaImg,
    gradientFrom: "from-[#2d2621]",
    gradientTo: "to-[#57514d]",
    borderColor: "border-[#6D4C41]",
    hoverBorderColor: "border-[#8D6E63]",
    buttonColor: "bg-[#6D4C41]",
    buttonHoverColor: "bg-[#8D6E63]",
  },
  ordenna: {
    image: tfgImg,
    gradientFrom: "from-[#1a2238]",
    gradientTo: "to-[#2d3a58]",
    borderColor: "border-[#3e5c8a]",
    hoverBorderColor: "border-[#5c7eb5]",
    buttonColor: "bg-[#3e5c8a]",
    buttonHoverColor: "bg-[#5c7eb5]",
  },
  animepol: {
  image: animepolImg,
  gradientFrom: "from-[#020617]", 
  gradientTo: "to-[#0f172a]",    
  borderColor: "border-[#1e293b]",
  hoverBorderColor: "border-[#3b82f6]", 
  buttonColor: "bg-[#1e293b]",     
  buttonHoverColor: "bg-[#334155]", 
}
};

export default function Proyectos() {
  const { language, portfolioData } = useLanguage();
  const projects = portfolioData.projects || [];

  return (
    <div id="projects" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <AiOutlineFundProjectionScreen />
            {language === "es" ? "Proyectos" : "Projects"}
          </Title>
          <div className="gap-4 grid grid-cols-1">
            {projects.map((project: any, index: number) => {
              const config =
                projectConfigs[project.logo] || projectConfigs.tonela;
              return (
                <ProjectCard
                  key={index}
                  data={project}
                  image={config.image}
                  gradientFrom={config.gradientFrom}
                  gradientTo={config.gradientTo}
                  borderColor={config.borderColor}
                  hoverBorderColor={config.hoverBorderColor}
                  buttonColor={config.buttonColor}
                  buttonHoverColor={config.buttonHoverColor}
                  linkLabel={language === "es" ? "Visitar" : "Visit"}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
