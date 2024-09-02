const Stats = () => {
  return (
    <>
      <StatsGrid statsGridText={"عدد الحالات الجديدة"} statsValue={200}/>
      <StatsGrid statsGridText={"عدد المرضى الكلي"} statsValue={1255}/>
      <StatsGrid statsGridText={"عدد الموظفين الكلي"} statsValue={550}/>
    </>
  );
};

const StatsGrid = ({ statsGridText, statsValue }) => {
  return (
    <div className="bg-white p-10 border border-black rounded-lg ">
      <h3 className="text-right text-[#079CEE] text-2xl font-bold">{statsGridText}</h3>
      <p className="text-xl font-extrabold mt-2">{statsValue}</p>
    </div>
  );
};

export default Stats;
