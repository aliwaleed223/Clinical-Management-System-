import { Link } from 'react-router-dom';
import back_arrow from '../../images/back-arrow.svg';

const LogsHeader = () => {
  return (
    <div className=" py-7 2xl:py-9 flex items-center">
      <Link to="/">
        <img src={back_arrow} alt="back arrow" className='bg-white p-1 rounded-full h-12 w-12'/>
      </Link>
      <h1 className="text-5xl 2xl:text-6xl m-auto">السجلات</h1>
    </div>
  );
};

export default LogsHeader;
