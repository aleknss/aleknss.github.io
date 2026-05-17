import { FaPeopleCarry } from "react-icons/fa";
import Wrapper from "../../layouts/Wrapper";

import ADCLogo from "../../assets/participaciones/AgentesDelCambio.svg";
import WCLogo from "../../assets/participaciones/WordCamp25.webp";
import BALogo from "../../assets/participaciones/BancoAlimentos.webp";
import HACKLogo from "../../assets/participaciones/Hackaton.webp";

import Card from "../../components/ui/Card";
import Title from "../../components/ui/Title";
import SecondaryTitle from "../../components/ui/SecondaryTitle";

import { useLanguage } from "../../contexts/LanguageContext";

interface ParticipacionItem {
  name: string;
  description: string;
  clave: string;
}

export default function Participaciones() {
  const { portfolioData, language } = useLanguage();

  const participacionData = (portfolioData.participaciones ||
    []) as ParticipacionItem[];

  return (
    <div id="attendee" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <FaPeopleCarry />
            {language === "es" ? "Participaciones" : "Atendee"}
          </Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {participacionData.map((participation: ParticipacionItem) => (
              <Card
                key={participation.name}
                className="flex flex-col gap-6 px-4"
              >
                <div className="flex flex-col justify-start items-center gap-4">
                  <img
                    src={
                      participation.clave === "ADC"
                        ? ADCLogo
                        : participation.clave === "WC"
                        ? WCLogo
                        : participation.clave === "BA"
                        ? BALogo
                        : HACKLogo
                    }
                    alt={participation.name}
                    loading="lazy"
                    className="w-24 h-24 mx-auto"
                  />
                  <SecondaryTitle>{participation.name}</SecondaryTitle>
                </div>
                <div>
                  <p className="text-sm">{participation.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
