import PersonalInfo from './PersonalInfo';
import Bills from './Bills';
import MedicalPrescriptions from './MedicalPrescriptions';
import { useState } from 'react';

const MainInfo = ({ patientData }) => {
  const [activeComponent, setActiveComponent] = useState('personalInfo');

  const components = {
    personalInfo: (
      <PersonalInfo
        patientPersonalInfo={patientData}
        notes={patientData}
      />
    ),
    bills: <Bills invoices={[]} />,
    medicalPrescriptions: (
      <MedicalPrescriptions medicalRecords={[]} />
    ),
  };

  return (
    <div className="w-full col-span-4 sm:col-span-3 bg-white px-5 py-5 rounded-xl min-h-[400px] max-h-[500px] overflow-hidden border border-black sm:order-1 order-2">
      {/* buttons */}
      <div className="flex justify-between flex-wrap">
        <InfoBtn
          changePage={() => setActiveComponent('medicalPrescriptions')}
          btnText={'الوصفات الطبية'}
          isOpen={activeComponent === 'medicalPrescriptions'}
        />
        <InfoBtn
          changePage={() => setActiveComponent('bills')}
          btnText={'الفواتير'}
          isOpen={activeComponent === 'bills'}
        />
        <InfoBtn
          changePage={() => setActiveComponent('personalInfo')}
          btnText={'المعلومات الشخصية'}
          isOpen={activeComponent === 'personalInfo'}
        />
      </div>

      <hr className="h-1 mt-4 bg-slate-300" />

      {/* actual info */}
      <div>{components[activeComponent]}</div>
    </div>
  );
};

const InfoBtn = ({ btnText, changePage, isOpen }) => {
  return (
    <button
      className={`px-2 sm:px-5 py-2 sm:py-3 text-md sm:text-2xl font-amiri rounded-2xl hover:bg-[#14B6DA] hover:text-white transition-all ${isOpen ? 'text-white bg-[#14B6DA]' : 'bg-[#B7EBF7]'
        }`}
      onClick={() => changePage()}
    >
      {btnText}
    </button>
  );
};

export default MainInfo;
