import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  type: "circle" | "square" | "ring" | "dot";
  opacity: number;
  color: "primary" | "accent";
}

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const [elements] = useState<ParallaxElement[]>(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 300,
      size: Math.random() * 80 + 20,
      speed: Math.random() * 0.5 + 0.1,
      type: ["circle", "square", "ring", "dot"][Math.floor(Math.random() * 4)] as ParallaxElement["type"],
      opacity: Math.random() * 0.15 + 0.05,
      color: Math.random() > 0.5 ? "primary" : "accent",
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {elements.map((element) => (
        <ParallaxItem key={element.id} element={element} scrollY={scrollY} />
      ))}
    </div>
  );
};

interface ParallaxItemProps {
  element: ParallaxElement;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}

const ParallaxItem = ({ element, scrollY }: ParallaxItemProps) => {
  const y = useTransform(scrollY, [0, 3000], [element.y, element.y - 1000 * element.speed]);
  
  const getShape = () => {
    const baseClass = element.color === "primary" 
      ? "bg-primary" 
      : "bg-accent";
    
    switch (element.type) {
      case "circle":
        return (
          <div 
            className={`rounded-full ${baseClass} blur-xl`}
            style={{ 
              width: element.size, 
              height: element.size,
              opacity: element.opacity 
            }}
          />
        );
      case "square":
        return (
          <div 
            className={`rounded-lg ${baseClass} blur-lg rotate-45`}
            style={{ 
              width: element.size * 0.7, 
              height: element.size * 0.7,
              opacity: element.opacity 
            }}
          />
        );
      case "ring":
        return (
          <div 
            className={`rounded-full border-2 ${element.color === "primary" ? "border-primary" : "border-accent"}`}
            style={{ 
              width: element.size, 
              height: element.size,
              opacity: element.opacity * 2
            }}
          />
        );
      case "dot":
        return (
          <div 
            className={`rounded-full ${baseClass}`}
            style={{ 
              width: element.size * 0.3, 
              height: element.size * 0.3,
              opacity: element.opacity * 3
            }}
          />
        );
    }
  };

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${element.x}%`,
        y,
      }}
    >
      {getShape()}
    </motion.div>
  );
};
