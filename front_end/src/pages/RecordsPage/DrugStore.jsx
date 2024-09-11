import { useState } from 'react';
import FilterMethod from './Components/FilterMethod';
import ReportsHeader from './Components/ReportsHeader';
import FilterSection from './FilterSection';
import DrugStoreReport from './Components/DrugStoreReport';

const DrugStore = () => {
  const [showReport, setShowReport] = useState(false);
  return (
    <div className="bg-[#14B6DA] w-[100%] h-[100vh] overflow-auto pb-10">
      <ReportsHeader headerTitle="المخزن الطبي " />
      <FilterSection setShowReport={() => setShowReport(!showReport)}>
        <FilterMethod filterMethodHeader="الدواء" />
        <FilterMethod filterMethodHeader="الحالة" />
        <FilterMethod filterMethodHeader="الفترة من/الى " />
      </FilterSection>
      {showReport && <DrugStoreReport />}
    </div>
  );
};

export default DrugStore;
