import type { ReactNode } from "react";
import { motion } from "motion/react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`border border-border hover:border-accent p-4 hover:shadow-xl shadow-primary/10 dark:shadow-primary/10 rounded-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
