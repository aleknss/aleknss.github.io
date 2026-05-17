import Wrapper from "../../layouts/Wrapper";
import profile from "../../configs/portfolio.json";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import LR from "../../assets/LR.svg";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Contacts() {
  const { language } = useLanguage();

  return (
    <footer id="contact" className="w-full">
      <div className="w-full h-full bg-lime-900">
        <Wrapper>
          <div className="flex flex-col gap-4">
            <p className="flex gap-2 items-center font-serif font-bold text-2xl text-lime-300">
              <FaPaperPlane />
              {language === "es" ? "Contacto" : "Contact"}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <a
                href={`mailto:${profile.contacts.email}`}
                className="flex items-center gap-4 text-lime-100 hover:text-lime-200"
              >
                <FaEnvelope size={20} className="text-lime-300" />
                {profile.contacts.email}
              </a>
              <a
                href={`tel:${profile.contacts.phone}`}
                className="flex items-center gap-4 text-lime-100 hover:text-lime-200"
              >
                <FaPhone size={20} className="text-lime-300" />
                {profile.contacts.phone}
              </a>
              <a
                className="flex items-center gap-4 text-lime-100 hover:text-lime-200"
                href={profile.contacts.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} className="text-lime-300" />
                {profile.contacts.twitter}
              </a>
              <a
                href={profile.contacts.linkedin}
                className="flex items-center gap-4 text-lime-100 hover:text-lime-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="text-lime-300" />
                {profile.contacts.linkedin}
              </a>
              <a
                href={profile.contacts.github}
                className="flex items-center gap-4 text-lime-100 hover:text-lime-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} className="text-lime-300" />
                {profile.contacts.github}
              </a>
              <div className="flex items-center gap-4 text-lime-100 hover:text-lime-200">
                <HiLocationMarker size={20} className="text-lime-300" />
                {profile.contacts.location}
                <img src={LR} alt="Bandera de La Rioja." loading="lazy" className="h-5" />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
