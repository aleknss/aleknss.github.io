import Wrapper from "../../layouts/Wrapper";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useLanguage } from "../../contexts/LanguageContext";
import Title from "../../components/ui/Title";
import ProjectCard from "../../components/ui/ProjectCard";

import tonelaImg from "../../assets/proyectos/tonela.webp";
import tfgImg from "../../assets/proyectos/tfg.webp";

const projectConfigs: Record<string, {
  image: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  hoverBorderColor: string;
  buttonColor: string;
  buttonHoverColor: string;
}> = {
  tonela: {
    image: tonelaImg,
    gradientFrom: "from-[#2d2621]",
    gradientTo: "to-[#57514d]",
    borderColor: "#6D4C41",
    hoverBorderColor: "#8D6E63",
    buttonColor: "#6D4C41",
    buttonHoverColor: "#8D6E63",
  },
  ordenna: {
    image: tfgImg,
    gradientFrom: "from-[#1a2238]",
    gradientTo: "to-[#2d3a58]",
    borderColor: "#3e5c8a",
    hoverBorderColor: "#5c7eb5",
    buttonColor: "#3e5c8a",
    buttonHoverColor: "#5c7eb5",
  },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((project: { name: string; description: string; link: string; skills: string[]; logo: string }, index: number) => {
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
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
