import './cover.css';

const MedicalPrescriptions = ({ medicalRecords }) => {
  return (
    <div className="mt-4">
      {/* Header */}
      <div className="grid grid-cols-4 place-items-end gap-2 sm:gap-5 p-2 bg-[#F5F5F5] rounded-md text-sm sm:text-2xl 2xl:text-3xl">
        <p>تاريخ الوصفة</p>
        <p>أسم الطبيب</p>
        <p>أسم المريض</p>
        <p>رقم الوصفة</p>
      </div>

      {/* Scrollable Container */}
      <div className="mt-2 max-h-[400px] overflow-y-scroll rounded-md pb-24 scroll-bar">
        {medicalRecords.map((data, index) => (
          <Bill key={index} patientRecord={data} />
        ))}
      </div>
    </div>
  );
};

const Bill = ({ patientRecord }) => {
  return (
    <div className="grid grid-cols-4 text-sm sm:text-xl place-items-center sm:place-items-end p-2 sm:p-4 bg-[#F5F5F5] mt-2 mb-5 border rounded-md gap-2 sm:gap-5 text-right">
      <p>{patientRecord.prescriptionDate}</p>
      <p>{patientRecord.doctorName}</p>
      <p>{patientRecord.patientName}</p>
      <p className='justify-self-end'>{patientRecord.prescriptionNumber}</p>
    </div>
  );
};

export default MedicalPrescriptions;
