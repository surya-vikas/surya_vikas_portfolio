import { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const roles = [
    'Full Stack Developer',
    'DSA Enthusiast', 
    'Aspiring Student',
    'Passionate Problem Solver'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentRoleIndex, isTyping, roles]);
  
  return (
    <span className="inline-block min-w-[200px] text-left font-orbitron font-bold text-glow">
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypewriterEffect;