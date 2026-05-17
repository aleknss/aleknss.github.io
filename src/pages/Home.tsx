import { Suspense, lazy } from "react";
import ThemeSwitch from "../components/ThemeSwitch";
import LanguageSwitch from "../components/LanguageSwitch";
import { motion, useReducedMotion } from "motion/react";

const Bio = lazy(() => import("./Home/Bio"));
const Experiencia = lazy(() => import("./Home/Experiencia"));
const Proyectos = lazy(() => import("./Home/Proyectos"));
const Participaciones = lazy(() => import("./Home/Participaciones"));
const Educacion = lazy(() => import("./Home/Educacion"));
const Habilidades = lazy(() => import("./Home/Habilidades"));
const Contacto = lazy(() => import("./Home/Contacto"));

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const;

function SectionSkeleton() {
  return (
    <div className="w-full py-24 flex justify-center">
      <div className="h-64 w-full max-w-[1440px] mx-8 rounded-xl bg-primary-muted animate-pulse" />
    </div>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
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
}

export default function Home() {
  return (
    <div id="home" className="w-full">
      <ThemeSwitch />
      <LanguageSwitch />
      <Suspense fallback={<SectionSkeleton />}><AnimatedSection><Bio /></AnimatedSection></Suspense>
      <Suspense fallback={<SectionSkeleton />}><AnimatedSection><Experiencia /></AnimatedSection></Suspense>
      <Suspense fallback={<SectionSkeleton />}><AnimatedSection><Proyectos /></AnimatedSection></Suspense>
      <Suspense fallback={<SectionSkeleton />}><AnimatedSection><Participaciones /></AnimatedSection></Suspense>
      <Suspense fallback={<SectionSkeleton />}><AnimatedSection><Educacion /></AnimatedSection></Suspense>
      <Suspense fallback={<SectionSkeleton />}><AnimatedSection><Habilidades /></AnimatedSection></Suspense>
      <Suspense fallback={<SectionSkeleton />}><AnimatedSection><Contacto /></AnimatedSection></Suspense>
    </div>
  );
}
