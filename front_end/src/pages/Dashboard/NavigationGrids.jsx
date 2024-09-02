import { Link } from 'react-router-dom';
import records from '../../images/Records.png';
import employe_list from '../../images/group-employe.svg';
import add_employe from '../../images/addemploy.svg';
import reports from '../../images/dashboard-reports.svg';

const NavigationGrids = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      <Grid gridImg={records} gridText={'السجلات'} />
      <Grid gridImg={reports} gridText={'التقارير'} />
      <Grid gridImg={employe_list} gridText={'قائمة الموظفين'} />
      <Grid gridImg={add_employe} gridText={'اضافة موظف'} />
    </div>
  );
};

const Grid = ({ gridImg, gridText }) => {
  return (
    <Link>
      <div className="bg-white p-4 rounded-md grid place-items-center h-40 lg:h-48 2xl:h-56 w-full hover:shadow-2xl transition-shadow">
        <img src={gridImg} alt="icon" className="h-12 sm:h-14 2xl:h-20" />
        <p className="text-lg sm:text-xl lg:text-2xl">{gridText}</p>
      </div>
    </Link>
  );
};

export default NavigationGrids;
