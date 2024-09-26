import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import filter_icon from '../../images/filter.svg';

const Filter = ({ range, onSetRange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="relative">
      <div
        className="bg-[#079CEE] flex items-center justify-between gap-10 p-2 px-9 2xl:px-16 border-2 border-white rounded-md cursor-pointer"
        onClick={toggleDatePicker}
      >
        <img src={filter_icon} alt="filter icon" className="2xl:h-12" />
        <p className="text-3xl 2xl:text-5xl text-white">فلتر</p>
      </div>

      {/* DateRangePicker Tooltip */}
      {showDatePicker && (
        <div className="absolute top-13 left-0 z-50">
          <DateRangePicker
            ranges={range}
            onChange={(item) => onSetRange([item.selection])}
            className="w-60"
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
