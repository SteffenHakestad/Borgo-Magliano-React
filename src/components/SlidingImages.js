import React, { useState, useEffect } from 'react';

const SlidingImages = () => {
  const [counter, setCounter] = useState(1);
  // const pauseDuration = 5000;

  const handleRadioChange = (index) => {
    setCounter(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => (prevCounter >= 3 ? 1 : prevCounter + 1));
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div id="slide-container">
        <div className="slides">
          {[1, 2, 3].map(index => (
            <input
              key={index}
              type="radio"
              name="radio-btn"
              id={`radio${index}`}
              checked={counter === index}
              onChange={() => handleRadioChange(index)}
            />
          ))}

          {[1, 2, 3].map(index => (
            <div key={index} className={`slide ${index === 1 ? 'first' : ''}`}>
              <img src={process.env.PUBLIC_URL + `/assets/images/Slide${index}.jpg`} alt={`Slide-${index}`} />
            </div>
          ))}

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>
          
          <div className="navigation-manual">
            {[1, 2, 3].map(index => (
              <label key={index} htmlFor={`radio${index}`} className="manual-btn"></label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidingImages;
