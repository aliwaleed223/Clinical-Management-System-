import axios from 'axios';
import { async } from 'q';
import { useEffect, useState } from 'react';
import token from '../../token';

const Stats = () => {
  // TODO: change the token.
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

const StatsGrid = ({ statsGridText, statsValue, isLoading }) => {
  return (
    <div className="bg-white p-10 border border-black rounded-lg ">
      <h3 className="text-right text-[#079CEE] text-2xl font-bold">
        {statsGridText}
      </h3>
      {isLoading ? '' : <IncreasingNumber number={statsValue} />}
    </div>
  );
};

const IncreasingNumber = ({ number }) => {
  const [increasingValue, setIncreasingValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIncreasingValue((prevValue) => {
        if (prevValue < number) return prevValue + 1;
        else {
          clearInterval(interval);
          return prevValue;
        }
      });
    }, 10); // Change the interval duration here (e.g., 100ms)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <p className="text-xl font-extrabold mt-2">{increasingValue}</p>
    </div>
  );
};

export default Stats;
