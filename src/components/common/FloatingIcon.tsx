import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingIconProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingIcon = ({ children, className, delay = 0 }: FloatingIconProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0 }}
      animate={{
        y: [0, 20, 10, 0, -20, 0],
        rotate: [0, 20, -10, 6, 16, -6, 14, 4, -10, 0, -20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 15,
        y: -40,
        x: 5,
        transition: {
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      whileTap={{
        scale: 0.9,
        rotate: -5,
        y: 10,
        transition: {
          duration: 0.15,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
};
