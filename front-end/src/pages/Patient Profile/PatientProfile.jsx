
import { useState } from 'react';
import patientData from './fake-patient-info';
import SideInfo from './SideInfo';
import arrow from '../../images/back-arrow.svg';
import MainInfo from './MainInfo';
import './cover.css';

const PatientProfile = () => {
  return (
    <div className="bg-[#EFEEEE] min-h-screen w-full flex justify-center items-start font-amiri flex-col add-cover">
      <div className="h-12 w-12 grid place-items-center border border-black rounded-full {responsive design --> } mx-5 sm:mx-40 mt-4 sm:mt-0">
        <button onClick={() => window.history.back()}>
          <img src={arrow} alt="go back" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-4 w-full sm:w-[75%] mx-auto h-fit p-6 sm:p-12">
          <MainInfo patientData={patientData} />
          <SideInfo patientMainInfo={patientData.personalInfo} />
      </div>
    </div>
  );
};

export default PatientProfile;
