import add_product from '../../images/add_product.svg';
import delete_patient from '../../images/delete_patient.svg';
import delete_invoice from '../../images/delete_invoice.svg';
import cancel_prescription from '../../images/cancel_prescription.svg';
import printer from '../../images/printer.svg';
import make_id from '../../images/make_id.svg';
import give_prescription from '../../images/give_prescription.svg';
import add_medical_prescription from '../../images/add_medical_prescription.svg';
import login from '../../images/login.svg';
import add_patient from '../../images/add_patient.svg';
import add_invoice from '../../images/add_invoice.svg';
import add_employee from '../../images/add_employee.svg';

const statesStyles = {
  معلق: {
    icon_bgColor: 'bg-[#FFFCDF]',
    activityClr: '#FFE500',
    acitvityBgClr: '#FFFCDF',
  },
  مكتمل: {
    icon_bgColor: 'bg-[#A8E6CF]',
    activityClr: '#2E8B57',
    acitvityBgClr: '#A8E6CF',
  },
  فشل: {
    icon_bgColor: 'bg-[#FFCDD2]',
    activityClr: '#E91E63',
    acitvityBgClr: '#FFCDD2',
  },
};


const activityIcons = {
  'اضافة منتج': add_product,
  'حذف مريض': delete_patient,
  'حذف فاتورة': delete_invoice,
  'الغاء وصفة': cancel_prescription,
  'طباعة فاتورة': printer,
  'اصدار هوية': make_id,
  'صرف وصفة': give_prescription,
  'أضافة وصفة طبية': add_medical_prescription,
  'تسجيل دخول': login,
  'أضافة مريض': add_patient,
  'أنشاء فاتورة': add_invoice,
  'اضافة موظف': add_employee,
};

const LogBar = ({ log }) => {
  return (
    <div className="flex flex-row-reverse py-2 pb-0 items-center mb-2">
      <LogBarCircle
        activityType={log.activityType}
        activityResult={log.activityResult}
      />
      <Triangle bgClr={statesStyles[log.activityResult].acitvityBgClr} />
      <LogContent log={log} />
    </div>
  );
};

const LogBarCircle = ({ activityType, activityResult }) => {
  return (
    <div
      className={`${statesStyles[activityResult].icon_bgColor} rounded-full p-2 2xl:p-4 grid place-items-center relative`}
    >
      <img
        src={activityIcons[activityType]}
        alt="activity icon"
        className="h-7 w-7 2xl:h-10 2xl:w-10"
      />
      <div className=""></div>
    </div>
  );
};

const Triangle = ({ bgClr }) => {
  return (
    <div
      className={`relative w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent `}
      style={{ borderLeft: `20px solid ${bgClr}` }}
    ></div>
  );
};

const Rectangle = ({ bgClr }) => {
  return (
    <div
      className="absolute w-[20px] h-full rounded-r-xl right-0"
      style={{ backgroundColor: bgClr }}
    ></div>
  );
};

// This log content components
const LogContent = ({ log }) => {
  const [time, date] = log.dateTime.split(" ")
  return (
    <div className="bg-white p-2  grid grid-cols-6 w-full rounded-xl place-items-end items-center gap-10 pr-10 relative hover:bg-[#E5F8FC] hover:shadow-md shadow-sm transition-all">
      <TimeAndDate time={time} date={date} />
      <Activity activityResult={log.activityResult} />
      <LogContentPar text={log.relatedUser} />
      <LogContentPar text={log.activityType} />
      <LogContentPar text={log.userName} />
      <LogContentPar text={log.role} />
      <Rectangle bgClr={statesStyles[log.activityResult].acitvityBgClr} />
    </div>
  );
};

const LogContentPar = ({ text }) => {
  return <p className="text-2xl w-fit">{text}</p>;
};

const Activity = ({ activityResult }) => {
  const activityArabic = {
    Pending: 'معلق',
    Completed: 'مكتمل',
    Fail: 'فشل',
  };

  return (
    <div
      className={` grid grid-cols-2 place-items-center 2xl:py-4 py-1 2xl:w-[150px] border rounded-lg
      w-[120px]
       `}
      style={{
        backgroundColor: statesStyles[activityResult].acitvityBgClr,
        borderColor: statesStyles[activityResult].activityClr,
      }}
    >
      <p
        className="2xl:px-2 justify-self-end text-xl"
        style={{ color: statesStyles[activityResult].activityClr }}
      >
        {activityResult}
      </p>
      <div
        className={`w-[20px] h-[20px] bg-red-400 rounded-full ${
          activityArabic[activityResult] == 'معلق' ? 'animate-ping' : ''
        }`}
        style={{
          backgroundColor: statesStyles[activityResult].activityClr,
        }}
      ></div>
    </div>
  );
};

const TimeAndDate = ({ time, date }) => {
  return (
    <div>
      <p className="text-right text-2xl">{date}</p>
      <p className="text-right text-xl">{time}</p>
    </div>
  );
};

export default LogBar;
