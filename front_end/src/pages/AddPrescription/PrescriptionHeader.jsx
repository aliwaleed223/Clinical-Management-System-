import { Link } from 'react-router-dom';
import back_arrow from '../../images/back-arrow.svg'

const PrescriptionHeader = () => {
  return (
    <div className='flex py-5 text-center items-center mt-4'>
      <Link>
        <button className='bg-white p-4 rounded-full' onClick={() => window.history.back()}>
          <img src={back_arrow} alt="go back button" />
        </button>
      </Link>
      <h1 className='text-center w-full text-5xl'>اضافة وصفة</h1>
    </div>
  );
}



export default PrescriptionHeader;