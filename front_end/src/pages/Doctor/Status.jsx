import wait_icon from '../../images/wait.svg';
import check_icon from '../../images/check.svg';
import { useNavigate } from 'react-router-dom';

const Status = ({ subscriptionStatus, patientId }) => {
  const navigate = useNavigate();

  const goToPatientProfile = () => {
    navigate(`/patient-profile/${patientId}`);
  }

  return (
    <div className="flex items-center space-x-4 gap-4 justify-self-end">
      <img src={wait_icon} alt="Wait" className="h-10 cursor-pointer" />
      <button onClick={goToPatientProfile}>
        <img src={check_icon} alt="Check" className="min-h-10 min-w-10 cursor-pointer w-full" />
      </button>
      <div>
        <p className="w-[200px] text-center">{subscriptionStatus}</p>
      </div>
    </div>
  );
};

export default Status;
