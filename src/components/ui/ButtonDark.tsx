import { Button } from '@mantine/core';

function ButtonDark({ text }: { text: string; className?: string }) {
  return (
    <Button color='#111' radius={0} className='uppercase text-xs italic tracking-widest'>
      {text}
    </Button>
  );
}

export default ButtonDark;
