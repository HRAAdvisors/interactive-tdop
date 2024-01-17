const ScrollableTitle = ({ img, title }: { img: string; altText?: string; title: string }) => {
  return (
    <div
      className='relative w-screen h-screen bg-[#FFFDF6] z-100'
      // style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <img src={img} className='w-[50%] mx-auto'></img>
      <h1 className='w-[50%] mx-auto md:text-6xl text-2xl uppercase tracking-widest'>{title}</h1>
    </div>
  );
};

export default ScrollableTitle;
