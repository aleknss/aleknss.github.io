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
import ContactForm from "../../components/ContactForm";

export default function Contacts() {
  const { language } = useLanguage();

  return (
    <footer id="contact" className="w-full">
      <div className="w-full h-full bg-primary dark:bg-neutral-950 pb-24">
        <Wrapper>
          <div className="flex flex-col gap-6">
            <h2 className="flex gap-2 items-center font-serif font-bold text-2xl text-accent">
              <FaPaperPlane />
              {language === "es" ? "Contacto" : "Contact"}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />
              <div className="grid grid-cols-1 gap-4 content-start">
                <a
                  href={`mailto:${profile.contacts.email}`}
                  className="flex items-center gap-4 text-white hover:text-accent"
                >
                  <FaEnvelope size={20} className="text-accent" />
                  {profile.contacts.email}
                </a>
                <a
                  href={`tel:${profile.contacts.phone}`}
                  className="flex items-center gap-4 text-white hover:text-accent"
                >
                  <FaPhone size={20} className="text-accent" />
                  {profile.contacts.phone}
                </a>
                <a
                  className="flex items-center gap-4 text-white hover:text-accent"
                  href={profile.contacts.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={20} className="text-accent" />
                  {profile.contacts.twitter}
                </a>
                <a
                  href={profile.contacts.linkedin}
                  className="flex items-center gap-4 text-white hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} className="text-accent" />
                  {profile.contacts.linkedin}
                </a>
                <a
                  href={profile.contacts.github}
                  className="flex items-center gap-4 text-white hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} className="text-accent" />
                  {profile.contacts.github}
                </a>
                <div className="flex items-center gap-4 text-white">
                  <HiLocationMarker size={20} className="text-accent" />
                  {profile.contacts.location}
                  <img src={LR} alt="Bandera de La Rioja." loading="lazy" className="h-5" />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
