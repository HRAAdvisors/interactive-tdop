import React, { useState } from 'react';

const FlipCard = ({ img, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCardStyles = {
    container: {
      perspective: '1000px',
    },
    flipper: {
      position: 'relative',
      width: '100%',
      height: '100%',
      // textAlign: 'center',
      transition: 'transform 0.5s',
      transformStyle: 'preserve-3d',
      cursor: 'pointer',
    },
    front: {
      position: 'relative',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
    },
    back: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      top: 0,
      left: 0,
      overflowY: 'auto', // Enable scrolling
    },
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={flipCardStyles.container} className="w-full h-full">
      <div
        style={{
          ...flipCardStyles.flipper,
          transform: isFlipped ? 'rotateY(180deg)' : '',
        }}
        className="md:hover:scale-105"
        onClick={handleClick}
      >
        {/* Front of the card */}
        <div style={flipCardStyles.front} className="bg-white shadow-sm md:hover:shadow-md">
          <img src={img} alt={title} className="w-full h-[30vh] object-cover" />
          <div className="p-4">
            <p className="text-md">{title}</p> {/* Updated this line */}
          </div>
        </div>

        {/* Back of the card */}
        <div style={flipCardStyles.back} className="bg-[white] shadow-sm">
          <div className="p-8 h-full items-center justify-center">
          <p className='text-md font-medium my-4'>{title}</p> {/* Updated this line */}
            <p className='text-sm mb-4'>{description}</p>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
