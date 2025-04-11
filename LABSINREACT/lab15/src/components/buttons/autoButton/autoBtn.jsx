import React, { useState, useEffect } from 'react';


const AutoBtn = ({ setAutoCounting }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active) {
      setActive(false);
      setAutoCounting(false);
    } else {
      setActive(true);
      setAutoCounting(true);
    }
  };

  let buttonText = 'start auto counting';
  let buttonClass = 'auto-btn';

  if (active) {
    buttonText = 'stop auto counting';
    buttonClass += ' active';
  }

  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default AutoBtn;
