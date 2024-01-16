import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Chart({ data }: { data: any[] }) {
  // console.log(data);

  return (
    <ResponsiveContainer width='100%' height={300} className='px-[0vw]'>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='year' />
        <YAxis type='number' domain={[0, 7000000]} width={100} />
        <Tooltip />
        <Legend />
        <Bar dataKey='population' fill='#666' />
      </BarChart>
    </ResponsiveContainer>
  );
}
