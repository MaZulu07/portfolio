import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  Icon: React.ElementType;
  color: string;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const iconTypes = [Heart, Sparkles, Star];
    const colors = [
      'text-purple-200', 
      'text-violet-200', 
      'text-fuchsia-200', 
      'text-purple-300',
      'text-indigo-200'
    ];
    
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, 
      delay: Math.random() * 20, 
      duration: 15 + Math.random() * 15, 
      size: 12 + Math.random() * 20, 
      Icon: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute -bottom-10 ${p.color} opacity-30 animate-[floatUp_linear_infinite]`}
          style={{
            left: `${p.x}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <p.Icon size={p.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;