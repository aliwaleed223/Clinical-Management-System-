import DrugDataTable from './DrugDataTable';
import ReportSectionHeader from './ReportSectionHeader';
import drugData from '../drug-store-data.json';

const DrugStoreReport = () => {
  return (
    <div className="bg-gray-100 w-[90%] mx-auto mt-16 rounded-xl h-fit">
      <ReportSectionHeader
        userName="Ahmed Jawad"
        city="Baghdad"
        reportTitle="تقرير المخزن الطبي "
        date="من 07/08/2024  الى  30/08/2024"
      />
      <DrugDataTable data={drugData} />
    </div>
  );
};

export default DrugStoreReport;
