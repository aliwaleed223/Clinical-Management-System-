import FollowUpPieChart from './FollowUpPieChart';
import data from '../follow-up-fake.json';

import FollowUpBar from './FollowUpBar';

const FollowUpCharts = () => {
  const title = 'تقرير حسب المريض مختصر للفواتير';

  return (
    <div className="bg-white mt-4 p-4 rounded-xl">
      <h3 className="text-center text-3xl font-bold">{title}</h3>
      <div className=" mx-auto min-h-[60%] mt-4 flex">
        <FollowUpPieChart data={data} />
        <FollowUpBar data={data} />
      </div>
    </div>
  );
};

export default FollowUpCharts;
