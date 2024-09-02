import arrow from '../../images/back-arrow.svg';

const DoctorHeader = ({ doctorName, proffession }) => {
  return (
    <section className="flex justify-between items-center  py-10 w-[75%] m-auto">
      <div className='w-14 h-14 grid place-items-center border border-black rounded-full group'>
        <button className='group-hover:-translate-x-1 transition'>
          <img src={arrow} alt="go back" onClick={() => window.history.back()}/>
        </button>
      </div>
      <div className='text-right'>
        <h1 className='text-5xl mb-3'>د. أحمد محمد مصطفى</h1>
        <h2 className='text-xl'>اختصاص أمراض القلب و الشرايين</h2>
      </div>
    </section>
  );
};

export default DoctorHeader;
