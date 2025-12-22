import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

const getVariants = (direction: string): Variants => {
  const directions: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 60 },
    down: { x: 0, y: -60 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  const { x, y } = directions[direction] || directions.up;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
