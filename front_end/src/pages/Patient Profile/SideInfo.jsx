import user_icon from '../../images/user-icon.svg';
import email_icon from '../../images/email.png';
import phone_icon from '../../images/phone-icon.svg';
import calender_icon from '../../images/calender.svg';

const SideInfo = ({ patientMainInfo }) => {
  return (
    <div className="bg-white min-h-[450px] min-w-[250px] flex flex-col justify-center items-center p-5 rounded-xl border border-black {responsive design -->} mb-4 sm:mb-0 order-1 sm:order-2">
      {/* img and patient name */}
      <div>
        <img src={user_icon} alt="user image" className="h-24 mx-auto" />
        <h2 className="text-right text-2xl sm:text-3xl mt-5">
          {patientMainInfo.patientName}
        </h2>
      </div>

      {/* divider */}
      <hr className="w-[75%] mx-auto border-[#4985BC] mt-4 border-2" />

      {/* patient contact info */}
      <div className="mt-5">
        <Contact iconLink={email_icon} contactText={patientMainInfo.email} />
        <Contact
          iconLink={phone_icon}
          contactText={patientMainInfo.phone}
        />
        <Contact
          iconLink={calender_icon}
          contactText={patientMainInfo.age}
        />
      </div>
    </div>
  );
};

const Contact = ({ iconLink, contactText }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 mt-5">
      <img src={iconLink} alt="" className="h-6 sm:h-10" />
      <p className="text-lg sm:text-xl">{contactText}</p>
    </div>
  );
};

export default SideInfo;
