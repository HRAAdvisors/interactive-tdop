import { Link as ScrollLink } from 'react-scroll';

const DotsNav = ({
  sections,
  activeSection,
  onSectionClick,
}: {
  sections: string[];
  activeSection: number;
  onSectionClick: (s: number) => void;
}) => {
  return (
    <div className='hidden md:visible md:fixed right-4 top-1/2 transform -translate-y-1/2 z-50'>
      {sections.map((_, index) => (
        <ScrollLink
          key={index}
          to={`section${index + 1}`}
          smooth={true}
          duration={500}
          className={`block w-3 h-3 mb-3 rounded-full cursor-pointer ${
            activeSection === index ? 'bg-blue-500' : 'bg-gray-400'
          }`}
          onClick={() => onSectionClick(index)}
        />
      ))}
    </div>
  );
};

export default DotsNav;
