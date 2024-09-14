import { useState } from 'react';
import carret_icon from '../../images/white-carret.svg';

const Select = ({ optionsHeader, optionsList }) => {
  const [showList, setShowList] = useState(false);
  return (
    <div
      onClick={() => setShowList(!showList)}
      className={`w-[230px]  text-center z-30 relative rounded-xl py-3 bg-[#14B6DA] flex  items-center cursor-pointer ${
        showList ? 'rounded-b-none' : ''
      }`}
    >
      <img
        src={carret_icon}
        alt=""
        className={`${
          showList ? 'rotate-0' : 'rotate-180'
        } h-4 w-4 transition-all duration-300 ml-3`}
      />
      <h2 className="text-white text-xl m-auto">{optionsHeader}</h2>
      {showList && (
        <ul className="absolute bg-white w-full right-0 top-12 rounded-b-xl border border-[#14B6DA] ">
          {optionsList.map((option) => {
            return (
              <li className="py-2  hover:bg-[#B7EBF7] border border-[#14B6DA] 2xl:text-xl">
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
