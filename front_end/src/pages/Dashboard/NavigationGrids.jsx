import { Link, useNavigation } from 'react-router-dom';
import records from '../../images/Records.png';
import employe_list from '../../images/emp_group.svg';
import add_employe from '../../images/add_employee.svg';
import reports from '../../images/dash_reports.svg';

const NavigationGrids = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      <Grid gridImg={records} gridText={'السجلات'} link="/logs"/>
      <Grid gridImg={reports} gridText={'التقارير'} link={'/'}/>
      <Grid gridImg={employe_list} gridText={'قائمة الموظفين'} link='/'/>
      <Grid gridImg={add_employe} gridText={'اضافة موظف'} link={'/'}/>
    </div>
  );
};

const Grid = ({ gridImg, gridText, link}) => {
  return (
    <Link to={`${link}`}>
      <div className="bg-white p-4 rounded-md grid place-items-center h-40 lg:h-48 2xl:h-56 w-full hover:shadow-2xl transition-shadow">
        <img src={gridImg} alt="icon" className="h-12 sm:h-14 2xl:h-20" />
        <p className="text-lg sm:text-xl lg:text-2xl">{gridText}</p>
      </div>
    </Link>
  );
};

export default NavigationGrids;
