import { useState } from 'react';
import Filter from './Filter';
import ChartAndStats from './ChartsAndStats';

const Statistics = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className="mt-16">
      {/* statistics header */}
      <div className="flex justify-between flex-row-reverse items-center mb-10">
        <h2 className="text-right text-4xl 2xl:text-5xl">الاحصائيات</h2>
        {/* filter */}
        <Filter range={range} onSetRange={setRange}/>
      </div>

      {/* charts & stats */}
      <ChartAndStats />

    </div>
  );
};

export default Statistics;
