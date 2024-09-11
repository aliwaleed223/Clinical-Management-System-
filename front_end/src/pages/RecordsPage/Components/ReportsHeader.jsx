import { Link } from 'react-router-dom';
import back_arrow from '../../../images/back-arrow.svg';

const ReportsHeader = ({ headerTitle }) => {
  return (
    <div className="flex items-center w-[90%] mx-auto py-10">
      <Link to="/">
        <div className="border border-white p-3 rounded-full group hover:shadow-lg">
          <img
            src={back_arrow}
            alt="go back arrow"
            className="group-hover:-translate-x-2 transition-transform duration-150"
          />
        </div>
      </Link>
      <p className="text-white text-4xl 2xl:text-5xl mx-auto">{headerTitle}</p>
    </div>
  );
};

export default ReportsHeader;
