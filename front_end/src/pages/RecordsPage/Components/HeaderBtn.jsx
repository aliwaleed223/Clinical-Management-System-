import { useState } from 'react';

const HeaderBtn = ({ headerBtnText, onClick, isActive}) => {
  return (
    <button
      className={`bg-[#B7EBF7] text-3xl 2xl:text-4xl p-4 rounded-2xl transition-transform duration-300 transform ${
        isActive ? 'bg-white scale-110' : ''
      }`}
      onClick={onClick}
    >
      {headerBtnText}
    </button>
  );
};

export default HeaderBtn;
