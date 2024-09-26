import { useState } from 'react';
import FilterMethod from './Components/FilterMethod';
import HeaderBtn from './Components/HeaderBtn';
import HeaderButtons from './Components/HeaderButtons';
import Report from './Components/Report';
import ReportsHeader from './Components/ReportsHeader';
import FilterSection from './FilterSection';

const Records = () => {
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="bg-[#14B6DA] w-[100%] h-[100vh] overflow-auto pb-10">
      <ReportsHeader headerTitle={'تقارير الفواتير '} />
      <HeaderButtons>
        <HeaderBtn headerBtnText={'المبيعات السنوية '} />
        <HeaderBtn headerBtnText={'المبيعات الشهرية '} />
        <HeaderBtn headerBtnText={'المبيعات الاسبوعية '} />
        <HeaderBtn headerBtnText={'المبيعات اليومية'} />
      </HeaderButtons>
      <FilterSection setShowReport={() => setShowReport(!showReport)}>
        <FilterMethod filterMethodHeader='البند'/>
        <FilterMethod filterMethodHeader='فاتورة'/>
        <FilterMethod filterMethodHeader='حالة الفاتورة '/>
        <FilterMethod filterMethodHeader='التصنيف'/>
        <FilterMethod filterMethodHeader='المخزن'/>
        <FilterMethod filterMethodHeader='الماركة'/>
        <FilterMethod filterMethodHeader='المريض'/>
        <FilterMethod filterMethodHeader='الفترة من/الى '/>
        <FilterMethod filterMethodHeader='العملة '/>
      </FilterSection> 
      {showReport && <Report />}
    </div>
  );
};

export default Records;
