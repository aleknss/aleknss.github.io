import { PrimaryButton, SecondaryButton } from "../../components/ui/Button";
import { useLanguage } from "../../contexts/LanguageContext";
import Wrapper from "../../layouts/Wrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

export default function Bio() {
  const { portfolioData, language } = useLanguage();

  return (
    <div id="bio" className="w-full">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-4 xl:w-2/3 pr-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-primary-muted text-primary text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {language === "es"
                  ? "Disponible para trabajo"
                  : "Available for work"}
              </div>
              <h1 className="font-serif font-semibold text-4xl text-secondary">
                {language === "es"
                  ? `¡Encantado! Soy ${portfolioData.name}`
                  : `Nice to meet you! I'm ${portfolioData.name}`}
              </h1>
              <h2 className="font-serif font-semibold text-2xl text-accent">
                {portfolioData.subtitle}
              </h2>
            </div>
            <div>
              <p className="w-full leading-relaxed">{portfolioData.bio}</p>
              <div className="flex mt-4 gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}cv.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PrimaryButton
                    label={
                      language === "es"
                        ? "Currículum Vitae"
                        : "Curriculum Vitae"
                    }
                    icon={<FaFileDownload />}
                  />
                </a>
                <SecondaryButton
                  href={portfolioData.contacts?.github}
                  label="GitHub"
                  icon={<FaGithub className="w-5 h-5" />}
                />
                <SecondaryButton
                  href={portfolioData.contacts?.linkedin}
                  label="LinkedIn"
                  icon={<FaLinkedin className="w-5 h-5" />}
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block w-48 h-48 md:w-64 md:h-64 rounded-full md:rounded-2xl border-4 border-primary dark:border-accent overflow-hidden hover:shadow-xl shadow-primary/30 dark:shadow-accent/10 transition duration-300 ease-in-out shrink-0">
            <img src="./alek.webp" alt="Foto personal" className="w-full h-full object-cover" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
