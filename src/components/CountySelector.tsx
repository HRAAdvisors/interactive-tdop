const CountySelector = ({
  counties,
  selectedCounty,
  onCountySelect,
}: {
  counties: string[];
  selectedCounty: string;
  onCountySelect: (c: string) => void;
}) => {
  // Check if counties is defined and has length
  if (!counties || counties.length === 0) {
    // Render a loading state or a default message
    return <div>Loading counties...</div>;
  }
  return (
    <select
      value={selectedCounty}
      onChange={(e) => onCountySelect(e?.target?.value)}
      className='your-select-class'
    >
      <option value=''>Select a county</option>
      {counties.map((county, index) => (
        <option key={index} value={county}>
          {county}
        </option>
      ))}
    </select>
  );
};

export default CountySelector;
