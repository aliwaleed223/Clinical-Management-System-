import records_icon from '../../../images/reports.png';

const ShowReportsBtn = ({ onShowReport }) => {
  return (
    <button
      className="bg-[#B7EBF7] px-5 py-2 rounded-3xl flex gap-2 justify-center items-center col-end-5 justify-self-end ml-8 2xl:ml-24 border border-[#14B6DA]"
      onClick={() => onShowReport()}
    >
      <img src={records_icon} alt="show report" className="h-10 w-10" />
      <p className="text-2xl">عرض التقرير</p>
    </button>
  );
};

export default ShowReportsBtn;
