import Wrapper from "../../layouts/Wrapper";
import { FaAward } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import dayjs from "dayjs";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import SecondaryTitle from "../../components/ui/SecondaryTitle";

interface ExperienceItem {
  from: number;
  to: number | null;
  company: string;
  role: string;
  logo: string;
  descriptions: string[];
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
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    loading="lazy"
                    className=" max-w-18 max-h-18 w-full h-full object-cover rounded"
                  />
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
                  <ul className="text-sm  mt-3 pl-4">
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
