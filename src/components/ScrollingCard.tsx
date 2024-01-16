const ScrollingCard = ({ children }: { children: string }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,.9)', // This should be the main color of the card
        // boxShadow: '0.75rem 0.75rem 0 #002768', // This shadow color should match the offset color
        position: 'relative', // Needed to position the pseudo-element
        padding: '2rem',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollingCard;
