import Wrapper from "../../layouts/Wrapper";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Arduino from "../../assets/arduino.jpg";
import Ordenna from "../../assets/ordenna.jpg";
import Tonela from "../../assets/tonela.jpg";

import { useLanguage } from "../../contexts/LanguageContext";

import Title from "../../components/ui/Title";
import SecondaryTitle from "../../components/ui/SecondaryTitle";
import Card from "../../components/ui/Card";

interface ProyectItem {
  name: string;
  link: string;
  logo: string;
  description: string;
  skills: string[];
}

export default function Proyectos() {
  const { portfolioData, language } = useLanguage();

  const projectData = (portfolioData.projects || []) as ProyectItem[];

  return (
    <div id="projects" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <AiOutlineFundProjectionScreen />
            {language === "es" ? "Proyectos" : "Projects"}
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectData.map((project: ProyectItem) => (
              <Card
                key={project.name}
                className="flex lg:flex-row flex-col items-center"
              >
                <img
                  src={
                    project.logo === "arduino"
                      ? Arduino
                      : project.logo === "ordenna"
                      ? Ordenna
                      : project.logo === "tonela"
                      ? Tonela
                      : project.logo
                  }
                  alt={project.name}
                    loading="lazy"
                    className="lg:w-1/3 ml-4 my-2 w-2/3 h-36 lg:h-full object-cover rounded"
                />
                <div className="flex flex-col justify-between items-center gap-6 p-6 rounded-lg overflow-hidden">
                  <div className="flex flex-col justify-start items-center gap-2">
                    <SecondaryTitle>{project.name}</SecondaryTitle>
                    <a
                      href={project.link}
                      className="text-sm text-lime-600 dark:text-lime-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link}
                    </a>
                    <p className="text-sm">{project.description}</p>
                  </div>
                  <div className="w-full flex flex-wrap justify-start gap-1">
                    {project.skills?.map((skill) => (
                      <p
                        key={skill}
                        className="text-[12px] border border-zinc-800 bg-lime-200 hover:bg-lime-300 dark:bg-stone-950 dark:hover:bg-black transition-colors duration-300 ease-in-out px-3 py-1 rounded-full cursor-pointer"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
