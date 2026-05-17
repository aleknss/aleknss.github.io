import { motion } from "motion/react";

export default function SkillItem({name, icon}: {name: string, icon: string}) {

  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 hover:bg-lime-200 dark:hover:bg-neutral-700 transition rounded p-2 cursor-pointer"
    >
      <img src={icon} alt={name} loading="lazy" className="w-12" />
      <p>{name}</p>
    </motion.div>
  );
}
;