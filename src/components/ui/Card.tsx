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
      className={`border border-primary hover:border-accent card p-4 hover:shadow-xl shadow-primary/20 dark:shadow-primary/5 rounded ${className}`}
    >
      {children}
    </motion.div>
  );
}
