import type { ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  header?: boolean;
}

export function PrimaryButton({ label, icon, href }: ButtonProps) {
  const commonProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-white dark:text-background bg-primary hover:bg-accent rounded transition-colors duration-300 ease-in-out"
  };

  return href ? (
    <motion.a
      href={href}
      {...commonProps}
    >
      {icon}
      {label}
    </motion.a>
  ) : (
    <motion.button {...commonProps}>
      {icon}
      {label}
    </motion.button>
  );
}

export function SecondaryButton({
  label,
  icon,
  href,
  onClick,
  header = false,
}: ButtonProps) {
  const commonProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: "flex justify-center items-center gap-2 text-sm px-1 sm:px-3 py-2 cursor-pointer text-primary hover:text-accent transition-colors duration-300 ease-in-out"
  };

  return href ? (
    <motion.a
      href={href}
      {...commonProps}
    >
      {icon}
      <span className={`${header ? "hidden md:block" : ""}`}>{label}</span>
    </motion.a>
  ) : (
    <motion.button
      onClick={onClick}
      {...commonProps}
    >
      {icon}
      <span className={`${header ? "hidden lg:block" : ""}`}>{label}</span>
    </motion.button>
  );
}
