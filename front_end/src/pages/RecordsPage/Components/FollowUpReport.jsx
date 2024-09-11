import ReportSectionHeader from "./ReportSectionHeader";
import data from '../follow-up-fake.json'
import FollowUpCharts from "./FollowUpChart";
import FollowUpTable from "./FollowUpDataTable";


const FollowUpReport = () => {
  console.log(data);
  return (
    <div className="bg-gray-100 w-[90%] mx-auto mt-16 rounded-xl h-fit">
      <ReportSectionHeader
        reportTitle="تقرير حسب المريض للفواتير"
        date="من 07/07/2024  الى  14/07/2024"
        userName="Ahmed Joad"
        city="Baghadad"
      />
      <FollowUpCharts />
      <FollowUpTable data={data}/>
    </div>
  );
};

export default FollowUpReport;
