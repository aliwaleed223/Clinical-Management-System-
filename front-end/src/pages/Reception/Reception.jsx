import Nav from '../Homepage/nav/nav';
import OptionList from './OpitonList';
import Cart from '../components/Cart';

const Reception = () => {
  return (
    <div className="bg-[#B7EBF7] h-[100vh] w-[100vw] flex flex-col items-center">
      <Nav />
      <OptionList />
    </div>
  );
};

export default Reception;
