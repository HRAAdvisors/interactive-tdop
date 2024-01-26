const QuoteBlock = ({ quote }: { quote: string }) => {
  return (
    <div className='relative mx-auto shadow-sm border-b-4 border-t-4 bg-[#002768] border-b-[#BE0B31] border-t-[#ececec] text-white'>
      {/* Outer card (colored background) */}
      <div className='absolute inset-0 transform translate-y-6 translate-x-6 bg-[] z-0'></div>
      {/* Inner card (white foreground) */}
      {/* <span className='absolute top-0 left-0 text-4xl lg:text-6xl translate-y-4 translate-x-4'>
          “
        </span> */}
      <p className='text-lg lg:text-lg my-8 relative p-10'>"{quote}"</p>
      {/* <span className='absolute bottom-1 right-4 text-4xl lg:text-6xl'>”</span> */}
    </div>
  );
};

export default QuoteBlock;
