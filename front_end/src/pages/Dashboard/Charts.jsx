import InvoiceBarChart from './InvoiceBarChart';
import MedicinePieChart from './MedicinePieChart';
import PatientLineChart from './PatientLineChart';
import PaymentAreaChart from './PaymentAreaChart';

const Charts = () => {
  return (
    <>
      <div className="col-span-3 grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white h-[400px] p-4 border border-black rounded-lg">
          <h4 className="text-3xl text-center mb-4">إحصائيات المرضى</h4>
          <PatientLineChart />
        </div>
        <div className="bg-white h-[400px] rounded-lg grid place-items-center p-4  border border-black">
          <h4 className="text-3xl text-center mb-4">إحصائيات الدواء</h4>
          <MedicinePieChart />
        </div>
      </div>
      <div className="h-[400px] bg-white col-span-3 p-4  border border-black rounded-lg">
        <h4 className="text-3xl text-center mb-4 mt-2">إحصائيات الفواتير</h4>
        <InvoiceBarChart />
      </div>
      <div className="h-[400px] bg-white col-span-3 p-4 border border-black rounded-lg ">
        <h4 className="text-3xl text-center mb-4 mt-2">إحصائيات المدفوعات</h4>
        <PaymentAreaChart />
      </div>
    </>
  );
};

export default Charts;
