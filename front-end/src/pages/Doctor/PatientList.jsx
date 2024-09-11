import PatientBar from './PatientBar';
import patientsData from './patientsData.js';
import { useState } from 'react';

const PatientList = () => {
  const [openIndex, setOpenIndex] = useState({});


  const toggleAccordion = (date, index) => {
    setOpenIndex((prevState) => ({
      ...prevState,
      [date]: prevState[date] === index ? null : index,
    }));
  };

  return (
    <div className='w-[75%] m-auto'>
      {Object.keys(patientsData).map((date) => (
        <div key={date}>
          <h2 className="text-3xl font-bold my-4 text-right">{date}</h2>
          {patientsData[date].map((patient, index) => (
            <PatientBar
              key={index}
              patient={patient}
              isOpen={openIndex[date] === index}
              toggleAccordion={() => toggleAccordion(date, index)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PatientList;
