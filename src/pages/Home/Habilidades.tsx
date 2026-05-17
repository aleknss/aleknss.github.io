import Wrapper from "../../layouts/Wrapper";
import { FaBrain } from "react-icons/fa";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import SecondaryTitle from "../../components/ui/SecondaryTitle";
import SkillItem from "../../components/ui/SkillItem";
import { languages, frameworks, herramientas } from "../../configs/skillsData";

import { useLanguage } from "../../contexts/LanguageContext";

export default function Habilidades() {
  const { language } = useLanguage();

  return (
    <div id="skills" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <FaBrain />
            {language === "es" ? "Habilidades" : "Skills"}
          </Title>
          <Card className="flex flex-col gap-4 py-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div id="col1" className="flex flex-col gap-4">
                <SecondaryTitle>
                  {language === "es" ? "Lenguajes" : "Languages"}
                </SecondaryTitle>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 m-auto">
                  {languages.map((language, index) => (
                    <SkillItem
                      key={index}
                      name={language.name}
                      icon={language.icon}
                    />
                  ))}
                </div>
              </div>
              <div
                id="col2"
                className="lg:border-x lg:border-border flex flex-col gap-4 px-4 m-auto"
              >
                <SecondaryTitle>Frameworks</SecondaryTitle>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 m-auto">
                  {frameworks.map((framework, index) => (
                    <SkillItem
                      key={index}
                      name={framework.name}
                      icon={framework.icon}
                    />
                  ))}
                </div>
              </div>
              <div id="col3" className="flex flex-col gap-4">
                <SecondaryTitle>
                  {language === "es" ? "Herramientas" : "Tools"}
                </SecondaryTitle>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 m-auto">
                  {herramientas.map((herramienta, index) => (
                    <SkillItem
                      key={index}
                      name={herramienta.name}
                      icon={herramienta.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Wrapper>
    </div>
  );
}
