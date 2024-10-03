const PersonalInfo = ({ patientPersonalInfo }) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 grid-rows-6 py-2 sm:py-5 gap-2"
      style={{
        direction: 'rtl',
      }}
    >
      <InfoFields
        fieldName="الاسم الكامل"
        fieldInfo={patientPersonalInfo.patientName}
      />
      <InfoFields fieldName="الجنس" fieldInfo={patientPersonalInfo.gender} />
      <InfoFields
        fieldName="رقم الهاتف"
        fieldInfo={patientPersonalInfo.phone}
      />
      <InfoFields fieldName="العمر" fieldInfo={patientPersonalInfo.age} />
      <InfoFields
        fieldName="رقم الهوية"
        fieldInfo={patientPersonalInfo.idNumber}
      />
      <InfoFields
        fieldName="تاريخ التسجيل"
        fieldInfo={new Date(patientPersonalInfo.registrationDate).toLocaleDateString('en-CA')}
      />
      <InfoFields fieldName="العنوان" fieldInfo={patientPersonalInfo.address} />
      <InfoFields
        fieldName="البريد الالكتروني"
        fieldInfo={patientPersonalInfo.email}
      />
      <InfoFields fieldName="المرض" fieldInfo={patientPersonalInfo.disease} />
      <InfoFields fieldName="*" fieldInfo={patientPersonalInfo.diseaseType} />
      <InfoFields fieldName="الملاحظات" fieldInfo={patientPersonalInfo.notes} />
    </div>
  );
};

const InfoFields = ({ fieldName, fieldInfo }) => {
  return (
    <div className=" sm:p-4 text-sm sm:text-xl flex sm:gap-2">
      <p className="text-[#636363]">{fieldName}:</p>
      <p>{fieldInfo}</p>
    </div>
  );
};

export default PersonalInfo;

