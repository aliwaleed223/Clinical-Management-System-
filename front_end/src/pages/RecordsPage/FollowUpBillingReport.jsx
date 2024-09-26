import { useState } from 'react';
import FilterMethod from './Components/FilterMethod';
import HeaderBtn from './Components/HeaderBtn';
import HeaderButtons from './Components/HeaderButtons';
import ReportsHeader from './Components/ReportsHeader';
import FilterSection from './FilterSection';
import FollowUpReport from './Components/FollowUpReport';

const FollowUpBills = () => {
  const [showReport, setShowReport] = useState(false);
  return (
    <div className="bg-[#14B6DA] w-[100%] h-[100vh] overflow-auto pb-10">
      <ReportsHeader headerTitle={'تقارير متابعة الفواتير'} />
      <HeaderButtons>
        <HeaderBtn headerBtnText={'فواتير حسب المريض'} />
        <HeaderBtn headerBtnText={'فواتير حسب الموظف'} />
      </HeaderButtons>
      <FilterSection setShowReport={() => setShowReport(!showReport)}>
        <FilterMethod filterMethodHeader="منشئ الفاتورة" />
        <FilterMethod filterMethodHeader="الحالة" />
        <FilterMethod filterMethodHeader="تصنيف المريض" />
        <FilterMethod filterMethodHeader="العملة " />
        <FilterMethod filterMethodHeader="المريض" />
        <FilterMethod filterMethodHeader="الفترة من/الى " />
      </FilterSection>
      {showReport && <FollowUpReport />}
    </div>
  );
};

export default FollowUpBills;
