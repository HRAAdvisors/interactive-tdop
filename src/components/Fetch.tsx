import { useState, useEffect } from 'react';
import Chart from './Chart';

const Fetch = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const requestBody = [
        {
          geoId: '48',
          id: '654d5449886c8eda0686e97c',
        },
      ];

      const res = await fetch(
        'https://api.hra-dashtest.com/v3/reports/6509fa55a9a3fc8b698e0cba/output/charts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody), // Add the body here
        },
      );
      const data = await res.json();
      // console.log(data);
      // console.log(data.charts[0].dataView.data[0]);
      setData(data?.charts[0].dataView.data);
    };
    fetchDatas();
  }, []);

  return (
    <div>
      <Chart data={data as any} />
    </div>
  );
};
export default Fetch;
