import  { ReactNode } from 'react';

const Card = ({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content: ReactNode;
  imageUrl: string;
}) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Card;
