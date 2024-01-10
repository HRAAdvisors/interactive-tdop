import { Button } from '@mantine/core';

function ButtonLight({ text }: { text: string; className?: string }) {
  return (
    <Button
      color='#FFFDF6'
      radius={0}
      className='uppercase text-xs italic tracking-widest border-2 border-black shadow-md'
      styles={{ label: { color: 'black' } }}
    >
      {text}
    </Button>
  );
}

export default ButtonLight;
