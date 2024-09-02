import Charts from './Charts';
import Stats from './Stats';

const ChartAndStats = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-4 pb-24">
      <Stats />
      <Charts />
    </div>
  );
};

export default ChartAndStats;
