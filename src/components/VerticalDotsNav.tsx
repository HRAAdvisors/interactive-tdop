const VerticalDotsNav = ({
  sectionData,
  currentSection,
  onDotClick,
}: {
  sectionData: any[];
  currentSection: number;
  onDotClick: (index: number) => void;
}) => {
  return (
    <div className='vertical-dots-nav'>
      {sectionData.map((_section, index) => (
        <div
          key={index}
          className={`dot ${currentSection === index ? 'active' : ''}`}
          onClick={() => onDotClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default VerticalDotsNav;
