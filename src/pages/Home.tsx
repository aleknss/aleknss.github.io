import Bio from "./Home/Bio";
import Educacion from "./Home/Educacion";
import Proyectos from "./Home/Proyectos";
import Experiencia from "./Home/Experiencia";
import Habilidades from "./Home/Habilidades";
import Contacto from "./Home/Contacto";
import ThemeSwitch from "../components/ThemeSwitch";
import Participaciones from "./Home/Participaciones";
import LanguageSwitch from "../components/LanguageSwitch";
import { motion, useReducedMotion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const;

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const Section = ({ children }: { children: React.ReactNode }) => {
    if (prefersReducedMotion) return <>{children}</>;
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div id="home" className="w-full">
      <ThemeSwitch />
      <LanguageSwitch />
      <Section><Bio /></Section>
      <Section><Experiencia /></Section>
      <Section><Proyectos /></Section>
      <Section><Participaciones /></Section>
      <Section><Educacion /></Section>
      <Section><Habilidades /></Section>
      <Section><Contacto /></Section>
    </div>
  );
}
