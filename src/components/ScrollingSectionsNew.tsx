import React, { useState, useEffect, useRef } from 'react';

interface ScrollingSectionContent {
  img: string;
  content: React.ReactNode;
}

interface ScrollingSectionProps {
  id: string;
  contents: ScrollingSectionContent[];
  containerClassNames?: string;
}

const ScrollingSectionNew = ({ contents, containerClassNames, id }: ScrollingSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [contents]);

  return (
    <div
      id={id}
      className={`w-screen relative z-20 overflow-hidden ${containerClassNames}`}
      style={{ height: '100vh' }}
    >
      <div
        className='fixed top-0 left-0 w-screen h-screen bg-cover bg-center transition-opacity duration-500 ease-in-out'
        style={{ backgroundImage: `url("${contents[activeIndex].img}")` }}
      />
      {contents.map((content, i) => (
        <div
          ref={(el) => (sectionRefs.current[i] = el)}
          key={i}
          className='h-screen w-screen flex justify-center items-center'
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className='text-white bg-black p-4 md:p-8'>{content.content}</div>
        </div>
      ))}
    </div>
  );
};

export default ScrollingSectionNew;
