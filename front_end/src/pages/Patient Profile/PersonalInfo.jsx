const PersonalInfo = ({ patientPersonalInfo, notes }) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 grid-rows-6 py-2 sm:py-5 gap-2"
      style={{
        direction: 'rtl',
      }}
    >
      <InfoFields
        fieldName="الاسم الكامل"
        fieldInfo={patientPersonalInfo.fullName}
      />
      <InfoFields fieldName="الجنس" fieldInfo={patientPersonalInfo.gender} />
      <InfoFields
        fieldName="رقم الهاتف"
        fieldInfo={patientPersonalInfo.phoneNumber}
      />
      <InfoFields fieldName="العمر" fieldInfo={patientPersonalInfo.age} />
      <InfoFields
        fieldName="رقم الهوية"
        fieldInfo={patientPersonalInfo.idNumber}
      />
      <InfoFields
        fieldName="تاريخ التسجيل"
        fieldInfo={patientPersonalInfo.registrationDate}
      />
      <InfoFields fieldName="العنوان" fieldInfo={patientPersonalInfo.address} />
      <InfoFields
        fieldName="البريد الالكتروني"
        fieldInfo={patientPersonalInfo.email}
      />
      <InfoFields fieldName="المرض" fieldInfo={patientPersonalInfo.disorder} />
      <InfoFields fieldName="*" fieldInfo={notes[0].note} />
      <InfoFields fieldName="الملاحظات" fieldInfo={notes.note} />
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

