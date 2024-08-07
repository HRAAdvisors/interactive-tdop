const ScrollableTitle = ({
  img,
  title,
  altText,
}: {
  img: string;
  altText: string;
  title: string;
}) => {
  return (
    <div className='relative w-screen h-full pt-20 pb-10 bg-[#ececec] z-100'>
      <img src={img} alt={altText} className='w-[90%] md:w-[50%] mx-auto shadow-lg'></img>
      <h1 className='w-[90%] md:w-[50%] my-10 mx-auto md:text-4xl text-2xl uppercase tracking-widest'>
        {title}
      </h1>
    </div>
  );
};

export default ScrollableTitle;

//bg-[#FFFDF6]
