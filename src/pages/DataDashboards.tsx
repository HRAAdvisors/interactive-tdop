import NavbarPlain from '@/components/NavbarPlain';
import DataDashBoardPages from './Report';
import SideNav from '@/components/SIdeNav';

const DataDashboards = () => {
  return (
    <div className='flex flex-col'>
      <NavbarPlain />
      <SideNav />
      <div className='pl-72 pt-16 bg-white'>
        <DataDashBoardPages />
      </div>
    </div>
  );
};

export default DataDashboards;
