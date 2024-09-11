import BillingChart from './BillingChart';

const ReportChart = () => {
  const title = 'المبيعات الاسبوعية د.ع';

  return (
    <div className="bg-white mt-4 p-4 rounded-xl">
      <h3 className="text-center text-3xl font-bold">{title}</h3>
      <div className=' mx-auto min-h-[60%] mt-4 overflow-x-auto'>
        <BillingChart />
      </div>
    </div>
  );
};

export default ReportChart;
