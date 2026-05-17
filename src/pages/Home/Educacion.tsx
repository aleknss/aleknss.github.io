import Wrapper from "../../layouts/Wrapper";
import { FaGraduationCap } from "react-icons/fa";

import bach from "../../assets/bach.jpg";
import fp from "../../assets/fp.webp";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import EducationCard from "../../components/ui/EducationCard";

import { useLanguage } from "../../contexts/LanguageContext";

export default function Educacion() {
  const { portfolioData, language } = useLanguage();

  const educationData = portfolioData.education || {
    bach: undefined,
    fp: undefined,
  };

  return (
    <div id="education" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <FaGraduationCap />
            {language === "es" ? "Datos Académicos" : "Education"}
          </Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <EducationCard
                image={bach}
                alt={educationData.bach?.grado || "Bachillerato"}
                grado={educationData.bach?.grado || "Loading..."}
                ciudad={educationData.bach?.ciudad || "N/A"}
                modalidad={educationData.bach?.modalidad || "N/A"}
                graduacion={educationData.bach?.graduacion || ""}
                language={language}
              />
            </Card>
            <Card>
              <EducationCard
                image={fp}
                alt={educationData.fp?.grado || "Formación Profesional"}
                grado={educationData.fp?.grado || "Loading..."}
                ciudad={educationData.fp?.ciudad || "N/A"}
                modalidad={educationData.fp?.modalidad || "N/A"}
                graduacion={educationData.fp?.graduacion || ""}
                language={language}
              />
            </Card>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
