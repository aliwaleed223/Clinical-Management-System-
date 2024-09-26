import back_arrow from '../../images/back-arrow.svg'
import ministry_icon from '../../images/Health.png'

const ReceptionNav = () => {
  return (
    <nav className='w-[70%] mt-4'>
      <ul className='flex justify-between items-center'>
        <li>
          <button className='bg-white p-5 rounded-full'>
            <img src={back_arrow} className=''/>
          </button>
        </li>
        <li>
          <h1 className='font-bold text-6xl'>عيادة الامراض المزمنة</h1>
        </li>
        <li>
          <img src={ministry_icon} className=''/>
        </li>
      </ul>
    </nav>
  );
}

export default ReceptionNav;