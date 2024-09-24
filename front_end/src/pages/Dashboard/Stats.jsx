import axios from 'axios';
import { async } from 'q';
import { useContext, useEffect, useState } from 'react';
import { ClinicalContext } from '../auth/contextFile';
import StatsGrid from './StatsGrid'
// import token from '../../token';

const Stats = () => {
  const { token } = useContext(ClinicalContext);
  const [numberOfPatients, setNumberOfPatients] = useState(0);
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetching the patients & employyes
        const patientsResponse = axios.get(
          'http://localhost:4000/api/patient/patients',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const employeesRespone = axios.get(
          'http://localhost:4000/api/auth/users ',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // waiting for promisses to resolve
        const [patients, employees] = await Promise.all([
          patientsResponse,
          employeesRespone,
        ]);

        // setting the values to fetched data
        console.log(employees.data);
        setNumberOfEmployees(employees.data.length);
        setNumberOfPatients(patients.data.length);

        // setting the loading state to false.
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    // calling the fetching function
    fetchData();
  }, []);

  return (
    <>
      <StatsGrid statsGridText={'عدد الحالات الجديدة'} statsValue={200} />
      <StatsGrid
        statsGridText={'عدد المرضى الكلي'}
        statsValue={numberOfPatients}
        isLoading={isLoading}
      />
      <StatsGrid
        statsGridText={'عدد الموظفين الكلي'}
        statsValue={numberOfEmployees}
        isLoading={isLoading}
      />
    </>
  );
};



export default Stats;
