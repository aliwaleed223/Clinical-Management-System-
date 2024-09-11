import wait_icon from '../../images/wait.svg';
import check_icon from '../../images/check.svg';
// import check from '../../images/image 59.png';
import { Link } from 'react-router-dom';
const Status = ({ subscriptionStatus }) => {
  return (
    <div className="flex items-center space-x-4 gap-4 justify-self-end">
      <img src={wait_icon} alt="Wait" className="h-10 cursor-pointer" />
      <Link to="/patient-profile">
        <img src={check_icon} alt="Check" className="min-h-10 min-w-10 cursor-pointer w-full" />
      </Link>
      <div>
        <p className="w-[200px] text-center">{subscriptionStatus}</p>
      </div>
    </div>
  );
};

export default Status;
