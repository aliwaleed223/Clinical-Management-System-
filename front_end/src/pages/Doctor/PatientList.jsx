import { useEffect, useState } from 'react';
import axios from 'axios';
import PatientBar from './PatientBar';

const PatientList = () => {
  const [patientsData, setPatientsData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:4000/api/patient/patients', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setPatientsData(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    getPatients();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-[75%] m-auto">
      {patientsData.map((patient, index) => (
        <PatientBar
          key={patient._id}
          patient={patient}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default PatientList;



// import axios from 'axios';
// import PatientBar from './PatientBar';
// // import patientsData from './patientsData.js';
// import { useEffect, useState } from 'react';

// const PatientList = () => {
//   const { token } = localStorage.getItem("token");
//   const [patientsData, setPatientsData] = useState([]);
//   const [openIndex, setOpenIndex] = useState({});

//   useEffect(() => {
//     try {
//       const getPatients = async () => {
//         const respone = await axios.get('http://localhost:4000/api/patient/patients', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         const data = respone.data;
//         setPatientsData(data);
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   })


//   const toggleAccordion = (date, index) => {
//     setOpenIndex((prevState) => ({
//       ...prevState,
//       [date]: prevState[date] === index ? null : index,
//     }));
//   };

//   return (
//     <div className='w-[75%] m-auto'>
//       {Object.keys(patientsData).map((date) => (
//         <div key={date}>
//           <h2 className="text-3xl font-bold my-4 text-right">{date}</h2>
//           {patientsData[date].map((patient, index) => (
//             <PatientBar
//               key={index}
//               patient={patient}
//               isOpen={openIndex[date] === index}
//               toggleAccordion={() => toggleAccordion(date, index)}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PatientList;
