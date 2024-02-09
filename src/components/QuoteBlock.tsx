const QuoteBlock = ({ quote }: { quote: string }) => {
  return (
    <div className='relative mx-auto max-w-4xl shadow-lg'>
      {/* Outer card (colored background) */}
      <div className='absolute inset-0 transform translate-y-1 translate-x-1 bg-[#BE0B31] z-0'></div>

      {/* Inner card (white foreground) */}
      <div className='relative bg-[#FFFDF6] p-8 z-10 border-4 border-[#002768]'>
        {/* Quotation marks */}
        <span className='absolute top-0 left-0 text-6xl text-[#BE0B31] transform translate-y-2 translate-x-2'>
          “
        </span>
        <p className='text-lg lg:text-xl my-4 mx-4 relative'>{quote}</p>
        <span className='absolute bottom-0 right-0 text-6xl text-[#BE0B31] -translate-x-4 translate-y-4'>
          ”
        </span>
      </div>
    </div>
  );
};

export default QuoteBlock;
