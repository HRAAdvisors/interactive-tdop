import { Link } from 'react-router-dom';

type ButtonLightProps = {
  text: string;
  link: string;
  className?: string;
};

function ButtonLight({ text, link, className = '' }: ButtonLightProps) {
  return (
    <Link to={link} className={`button-light ${className}`}>
      <div className='button-light__container'>
        <div className='button-light__btn'>{text}</div>
      </div>
    </Link>
  );
}

export default ButtonLight;
