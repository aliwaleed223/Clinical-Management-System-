import CaretBtn from './CaretBtn';
import Status from './Status';
import UserInfo from './UserInfo'
import PatientDetails from './PatientDetails'
import DisorderInfo from './DisorderInfo'

import { useRef } from 'react';

const PatientBar = ({ patient, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);

  return (
    <div>
      <div className="bg-white grid grid-cols-4 place-items-center p-4 shadow-md lg:text-xl 2xl:text-3xl text-right rounded-t-md mt-2">
        <CaretBtn isOpen={isOpen} toggleAccordion={toggleAccordion} />
        <Status subscriptionStatus={patient.subscriptionStatus} />
        <DisorderInfo disorder={patient.disorder} />
        <UserInfo name={patient.name} />
      </div>

      <PatientDetails
        contactInfo={patient.contactInfo}
        isOpen={isOpen}
        contentRef={contentRef}
      />
    </div>
  );
};


export default PatientBar;
