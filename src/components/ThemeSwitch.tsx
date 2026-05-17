import { useTheme } from "../contexts/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="text-xl p-3 rounded bg-primary text-white dark:text-background fixed bottom-8 right-4 sm:right-6 md:right-12 hover:bg-accent transition-colors duration-300 ease-in-out z-50 overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
