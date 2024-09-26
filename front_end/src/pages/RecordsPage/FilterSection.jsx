import ShowReportsBtn from "./Components/ShowReportsBtn";

const FilterSection = ({ children, setShowReport}) => {
  return (
    <section
      className="bg-white rounded-xl border-4 border-[#B7EBF7] h-[70%] w-[90%] mx-auto grid grid-cols-4 grid-rows-3 place-items-center"
      style={{
        direction: 'rtl',
      }}
    >
      {children}
      {/* button to show render the report when pressed */}
      <ShowReportsBtn onShowReport={setShowReport}/>
    </section>
  );
};

export default FilterSection;
