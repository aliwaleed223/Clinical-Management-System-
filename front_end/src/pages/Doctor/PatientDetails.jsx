import male_sign from '../../images/male-sign.svg';
import female_sign from '../../images/female-sign.svg';
import calender from '../../images/calender.svg';
import phone from '../../images/phone-icon.svg';
import address_icon from '../../images/location.svg';


const PatientDetails = ({ contactInfo, isOpen, contentRef }) => {
  return (
    <div
      ref={contentRef}
      className="overflow-hidden transition-all duration-500 ease-in-out"
      style={{
        maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="bg-[#F5F5F5] p-5 xl:text-xl 2xl:text-2xl rounded-b-md shadow-inner mt-0 grid grid-cols-4 place-items-end text-right text-[#323232] pr-10">
        <div className="">
          <p>رقم الهاتف</p>
          <div className="flex gap-4 mt-4">
            <p>{contactInfo.phone}</p>
            <img src={phone} alt="phone number" />
          </div>
        </div>

        <div className="">
          <p>تاريخ الميلاد</p>
          <div className="flex gap-4 mt-4">
            <p>{contactInfo.birthDate}</p>
            <img src={calender} alt="birth icon" />
          </div>
        </div>

        <div className="">
          <p>العنوان</p>
          <div className="flex gap-4 mt-4">
            <p>{contactInfo.address}</p>
            <img src={address_icon} alt="address icon" />
          </div>
        </div>

        <div className="">
          <p>الجنس</p>
          <div className="flex gap-4 mt-4">
            <p>{contactInfo.gender}</p>
            <img
              src={contactInfo.gender === 'ذكر' ? male_sign : female_sign}
              alt="gender icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;