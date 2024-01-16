// ScrollingCard.tsx
import React from 'react';

interface ScrollingCardProps {
  children: React.ReactNode;
}

const ScrollingCard: React.FC<ScrollingCardProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,.9)', // This should be the main color of the card
        position: 'relative', // Needed to position the pseudo-element
        padding: '2rem',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollingCard;
