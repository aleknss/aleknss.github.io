import Wrapper from "../../layouts/Wrapper";
import {
  FaGraduationCap,
  FaCalendar,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";

import bach from "../../assets/bach.jpg";
import fp from "../../assets/fp.webp";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import SecondaryTitle from "../../components/ui/SecondaryTitle";

import { useLanguage } from "../../contexts/LanguageContext";
import dayjs from "dayjs";

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
            <Card className="flex flex-col gap-4 py-8 px-6">
              <img
                src={bach}
                alt={educationData.bach?.grado || "Bachillerato"}
                loading="lazy"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <SecondaryTitle>
                {educationData.bach?.grado || "Loading..."}
              </SecondaryTitle>
              <p className="flex items-center gap-1 text-sm">
                <span className="flex items-center gap-1 font-bold">
                  <FaMapMarkerAlt />
                  {language === "es" ? "Ciudad:" : "City:"}
                </span>
                {educationData.bach?.ciudad || "N/A"}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span className="flex items-center gap-1 font-bold">
                  <FaCertificate />
                  {language === "es" ? "Grado:" : "Degree:"}
                </span>
                {educationData.bach?.modalidad || "N/A"}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span className="flex items-center gap-1 font-bold">
                  <FaCalendar />
                  {language === "es" ? "Graduado en:" : "Graduated in:"}
                </span>
                {educationData.bach?.graduacion
                  ? dayjs(educationData.bach.graduacion).format("MMMM YYYY")
                  : "N/A"}
              </p>
            </Card>
            <Card className="flex flex-col gap-4 py-8 px-6">
              <img
                src={fp}
                alt={educationData.fp?.grado || "Formación Profesional"}
                loading="lazy"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <SecondaryTitle>
                {educationData.fp?.grado || "Loading..."}
              </SecondaryTitle>
              <p className="flex items-center gap-1 text-sm">
                <span className="flex items-center gap-1 font-bold">
                  <FaMapMarkerAlt />
                  {language === "es" ? "Ciudad:" : "City:"}
                </span>
                {educationData.fp?.ciudad || "N/A"}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span className="flex items-center gap-1 font-bold">
                  <FaCertificate />
                  {language === "es" ? "Grado:" : "Degree:"}
                </span>
                {educationData.fp?.modalidad || "N/A"}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span className="flex items-center gap-1 font-bold">
                  <FaCalendar />
                  {language === "es" ? "Graduado en:" : "Graduated in:"}
                </span>
                {educationData.fp?.graduacion
                  ? dayjs(educationData.fp.graduacion).format("MMMM YYYY")
                  : "N/A"}
              </p>
            </Card>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
