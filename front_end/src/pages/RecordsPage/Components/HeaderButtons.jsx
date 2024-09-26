/*
Header Buttons is _WRAPPER_ component that holds
the children (HeaderBtn), passed throught props
that's it's only job for now.
*/
import React from "react";
import { useState } from "react";

const HeaderButtons = ({ children }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="w-[90%] py-10 mx-auto flex justify-between">
      {children.map((child, index) =>
        React.cloneElement(child, {
          isActive: activeButton === index,
          onClick: () => handleButtonClick(index),
        })
      )}
    </div>
  );
};

export default HeaderButtons;
