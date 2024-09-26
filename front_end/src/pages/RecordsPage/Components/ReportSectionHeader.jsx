import print_icon from '../../../images/blue-printer.svg';
import search_icon from '../../../images/blue-search.svg';
import summary_icon from '../../../images/navList-icon-white.svg';

const ReportSectionHeader = ({ reportTitle, date, userName, city}) => {
  return (
    <div className="">
      {/* buttons section */}
      <div className="bg-[#B7EBF7] p-4 flex flex-row-reverse justify-between">
        {/* left btns */}
        <div className="flex gap-4">
          <ReportBtn btnText="التفاصيل" btnImgLink={search_icon} />
          <ReportBtn btnText="الملخص" btnImgLink={summary_icon} />
        </div>
        {/* print btn */}
        <ReportBtn btnText="طباعة" btnImgLink={print_icon} />
      </div>

      {/* report title */}
      <div className="bg-white flex justify-between p-4">
        <ReportTitle
          mainTitle={reportTitle}
          subTitle={date}
        />
        <ReportTitle mainTitle={userName} subTitle={city} />
      </div>
    </div>
  );
};

const ReportTitle = ({ mainTitle, subTitle }) => {
  return (
    <div className="p-4 text-center">
      <h3 className="text-4xl 2xl:text-4xl mb-2">{mainTitle}</h3>
      <p className="text-gray-500 text-xl 2xl:text-2xl">{subTitle}</p>
    </div>
  );
};

const ReportBtn = ({ btnText, btnImgLink }) => {
  return (
    <button
      className={`flex gap-4 items-center bg-[#14B6DA] px-4 rounded-lg ${
        btnText === 'طباعة' ? 'bg-white' : ''
      }`}
    >
      <p className="text-2xl">{btnText}</p>
      <img
        src={btnImgLink}
        className={`h-12 w-12 ${btnText === 'طباعة' ? 'h-9' : ''}`}
      />
    </button>
  );
};

export default ReportSectionHeader;
