import { useState, useEffect } from 'react';
import ScrollContainer from './ScrollContainer';
import MapContainer from './MapContainer';

const ParentComponent = () => {
  const [data, setData] = useState(null);
  // const [selectedCounty, setSelectedCounty] = useState('');

  useEffect(() => {
    const fetchDatas = async () => {
      const requestBody = [
        {
          geoId: '48',
          id: '654d5449886c8eda0686e97c',
        },
      ];

      const res = await fetch(
        'https://api.hra-dashtest.com/v3/reports/6509fa55a9a3fc8b698e0cba/output/region-boundaries',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody), // Add the body here
        },
      );
      const data = await res.json();
      // console.log(data.charts[0].dataView.data[0]);
      setData(data?.boundaries[2021]);
    };
    fetchDatas();
  }, []);
  console.log(data);

  // const handleCountySelect = (county) => {
  //   setSelectedCounty(county);
  // };

  // const counties = data ? Object.values(data).map((item) => item.feature.properties.NAME) : [];

  return (
    <div>
      <ScrollContainer
        title='Your Title'
        text='Your Text'
        buttonText='Your Button Text'
        imgHolder='Your Image Holder'
        // counties={counties}
        // selectedCounty={selectedCounty}
        // onCountySelect={handleCountySelect}
      />
      <MapContainer />
    </div>
  );
};

export default ParentComponent;
