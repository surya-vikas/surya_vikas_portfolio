import { motion } from "framer-motion";
import { useMemo } from "react";

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const SnowfallEffect = () => {
  const snowflakes = useMemo<Snowflake[]>(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white/80"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            filter: "blur(0.5px)",
          }}
          initial={{ y: -20, x: 0 }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.sin(flake.id) * 30, 0],
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
              delay: flake.delay,
            },
            x: {
              duration: flake.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: flake.delay,
            },
          }}
        />
      ))}
    </div>
  );
};
