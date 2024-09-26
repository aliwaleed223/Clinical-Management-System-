import Nav from '../Homepage/nav/nav';
import OptionList from './OptionList';
import ReceptionNav from './ReceptionNav';

const Reception = () => {
  return (
    <div className="bg-[#B7EBF7] h-[100vh] w-[100vw] flex flex-col items-center">
      <ReceptionNav />
      <OptionList />
    </div>
  );
};

export default Reception;
