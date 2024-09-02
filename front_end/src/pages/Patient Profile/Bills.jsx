import './cover.css';
const Bills = ({ invoices }) => {
  return (
    <div className="mt-4">
      {/* Header */}
      <div className="grid grid-cols-4  place-items-center sm:place-items-end  sm:gap-5 p-2 bg-[#F5F5F5] rounded-md text-sm sm:text-2xl 2xl:text-3xl">
        <p>تاريخ الفاتورة</p>
        <p>الحالة</p>
        <p>أسم المريض</p>
        <p>رقم الفاتورة</p>
      </div>

      {/* Scrollable Container */}
      <div className="mt-2 max-h-[400px] overflow-y-scroll rounded-md pb-24 scroll-bar">
        {invoices.map((data, index) => (
          <Bill key={index} patientBill={data} />
        ))}
      </div>
    </div>
  );
};

const Bill = ({ patientBill }) => {
  return (
    <div className="grid grid-cols-4 text-sm sm:text-xl place-items-center sm:place-items-end p-2 sm:p-4 bg-[#F5F5F5] mt-2 mb-5 border rounded-md gap-2 sm:gap-5">
      <p>{patientBill.invoiceDate}</p>
      <p>{patientBill.status}</p>
      <p>{patientBill.patientName}</p>
      <p>{patientBill.invoiceNumber}</p>
    </div>
  );
};

export default Bills;
