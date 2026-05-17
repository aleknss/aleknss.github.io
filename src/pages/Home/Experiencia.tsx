import Wrapper from "../../layouts/Wrapper";
import { FaAward } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import dayjs from "dayjs";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import SecondaryTitle from "../../components/ui/SecondaryTitle";
import { FaBuilding } from "react-icons/fa";
import { useState } from "react";

interface ExperienceItem {
  from: number;
  to: number | null;
  company: string;
  role: string;
  logo: string;
  descriptions: string[];
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="max-w-[4.5rem] max-h-[4.5rem] w-full h-[4.5rem] flex items-center justify-center rounded bg-primary-muted text-primary">
        <FaBuilding size={24} />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="max-w-[4.5rem] max-h-[4.5rem] object-contain rounded"
    />
  );
}

export default function Experience() {
  const { portfolioData, language } = useLanguage();

  const experienceData = (portfolioData.experience || []) as ExperienceItem[];

  return (
    <div id="experience" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <FaAward />
            {language === "es" ? "Experiencia" : "Experience"}
          </Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {experienceData.map((experience: ExperienceItem) => (
              <Card key={experience.from} className="flex flex-col gap-6">
                <div className="flex flex-col justify-start items-center gap-4">
                  <LogoImage src={experience.logo} alt={experience.company} />
                  <SecondaryTitle>{experience.company}</SecondaryTitle>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-accent font-semibold">
                      {experience.role}
                    </p>
                    <p className="text-sm text-accent">
                      {dayjs(experience.from).format("MMMM YYYY")} ~{" "}
                      {experience.to === null
                        ? language === "es"
                          ? "Presente"
                          : "Present"
                        : dayjs(experience.to).format("MMMM YYYY")}
                    </p>
                  </div>
                  <ul className="text-sm mt-3 pl-4 leading-relaxed">
                    {experience.descriptions.map((description, index) => (
                      <li
                        key={`${experience.from}-${index}`}
                        className="list-disc"
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
