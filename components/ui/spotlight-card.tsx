"use client";

import { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(20, 184, 166, 0.12)' }: any) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      <div className="card-spotlight-content">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
