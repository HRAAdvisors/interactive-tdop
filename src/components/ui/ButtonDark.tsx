import { Link } from 'react-router-dom';

type ButtonDarkProps = {
  text: string;
  link: string;
  className?: string;
};

function ButtonDark({ text, link, className = '' }: ButtonDarkProps) {
  return (
    <Link to={link} className={`button-dark ${className}`}>
      <div className='button-dark__container'>
        <div className='button-dark__btn'>{text}</div>
      </div>
    </Link>
  );
}

export default ButtonDark;
