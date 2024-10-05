import { useState } from "react";

const FilterRequests = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <section className="bg-white py-4 px-4 mt-4 rounded-lg flex flex-row-reverse justify-between text-xl">
      {/* filter based on keywords */}
      <SearchMedicineByName />

      {/* left side (filter on date, cancel filter, respond to request) */}
      <div className="flex flex-row-reverse gap-2">
        <FilterOnDate
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <CancelFilter />
        <ResponeRequest />
      </div>

    </section>
  );
}


const SearchMedicineByName = () => {
  return (
    <input type="text" placeholder="اختر اسم الدواء" className="border-[1px] border-[#B7EBF7] py-2 px-4 rounded-lg" />
  )
}

const FilterOnDate = ({ startDate, endDate, setStartDate, setEndDate, filterByDate }) => {
  return (
    <div className="border-[1px] border-[#B7EBF7] py-2 px-4 rounded-lg flex flex-row-reverse gap-2 text-gray-400">
      <p>من</p>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className={`${startDate ? 'text-black' : ''}`}
      />
      <p>الى</p>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className={`${endDate ? 'text-black' : ''}`}
      />
      {/* <button onClick={filterByDate}>Filter</button> */}
    </div>
  );
};

const CancelFilter = () => {
  return (
    <button className="py-2 px-6 bg-[#B7EBF7] rounded-lg border-[1px] border-[#14B6DA]">
      الغاء الفلترة
    </button>
  )
}


const ResponeRequest = () => {
  return (
    <button className="py-2 px-10 bg-[#14B6DA] rounded-lg text-white">
      استجابة الطلبات
    </button>
  )
}


export default FilterRequests;