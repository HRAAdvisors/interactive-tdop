import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function ButtonDark({ text, link }: { text: string; link: string; className?: string }) {
  return (
    <Link to={link}>
      <div
        className='bg-[#FFFDF6;] p-1' // This creates the offset with a blue background
        style={{
          display: 'inline-block',
          padding: '0px', // Adjust the padding for the desired offset
          boxShadow: '4px 4px 0 #dc2626', // This creates the red shadow effect
        }}
      >
        <Button
          color='#111'
          radius={0}
          className='uppercase text-xs tracking-widest bg-[#111] border-black shadow-md'
          styles={{
            root: {
              backgroundColor: '#111', // Button color
              borderWidth: 0, // Removes border
            },
            label: {
              color: 'white', // Text color
              fontWeight: 700, // Makes the font bold
            },
          }}
        >
          {text}
        </Button>
      </div>
    </Link>
  );
}

export default ButtonDark;
