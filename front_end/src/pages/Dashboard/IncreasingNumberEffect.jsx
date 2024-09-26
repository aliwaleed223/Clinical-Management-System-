import { useState, useEffect } from 'react';

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

export default IncreasingNumber;
