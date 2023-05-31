/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './Calculator.css';

export const Calculator = () => {
  const [screenValue, setScreenValue] = useState('');

  const handleAdd = () => {
    if (screenValue.slice(-1) !== '+') {
      setScreenValue((prevValue) => prevValue + '+');
    }
  };
  
  const handleSubtract = () => {
    if (screenValue.slice(-1) !== '-') {
      setScreenValue((prevValue) => prevValue + '-');
    }
  };
  
  const handleMultiply = () => {
    if (screenValue.slice(-1) !== '*') {
      setScreenValue((prevValue) => prevValue + '*');
    }
  };
  
  const handleDivide = () => {
    if (screenValue.slice(-1) !== '/') {
      setScreenValue((prevValue) => prevValue + '/');
    }
  };

  const handleNumber = (number) => {
    setScreenValue((prevValue) => prevValue + number);
  };

  const handleSin = () => {
    // setScreenValue(Math.sin(screenValue));
  };

  const handleCos = () => {
    // setScreenValue(Math.cos(screenValue));
  };

  const handleTan = () => {
    // setScreenValue(Math.tan(screenValue));
  };

  const handlePow = () => {
    setScreenValue(Math.pow(screenValue, 2));
  };

  const handleSqrt = () => {
    setScreenValue(Math.sqrt(screenValue));
  };

  const handleLog = () => {
    // setScreenValue(Math.log(screenValue));
  };

  const handlePi = () => {
    // setScreenValue(3.14159265359);
  };

  const handleE = () => {
    // setScreenValue(2.71828182846);
  };

  const handleFact = () => {
    // let i, num, f;
    // f = 1;
    // num = parseInt(screenValue);
    // for (i = 1; i <= num; i++) {
    //   f = f * i;
    // }

    // i = i - 1;

    // setScreenValue(f);
  };

  const handleDecimal = () => {
    if (!screenValue.includes('.')) {
      setScreenValue((prevValue) => prevValue + '.');
    }
  };

  const handleBackspace = () => {
    setScreenValue(screenValue.substr(0, screenValue.length - 1));
  };

  return (
    <div className="container">
      <h1>Calculadora Univas</h1>
      <div className="display">
        <input id="screen" type="text" placeholder="0" value={screenValue} />
      </div>

      <div className="btns">
        <div className="row">
          <button id="ce" onClick={handleBackspace}>CE</button>
          <button onClick={handleFact}>T</button>
          <button className="btn">T</button>
          <button className="btn">T</button>
          <button className="btn">%</button>
          <button id="ac" onClick={() => { setScreenValue(''); }}>AC</button>
        </div>

        <div className="row">
          <button onClick={handleSin}>T</button>
          <button onClick={handlePi}>T</button>
          <button className="btn" onClick={() => handleNumber("7")}>7</button>
          <button className="btn" onClick={() => handleNumber("8")}>8</button>
          <button className="btn" onClick={() => handleNumber("9")}>9</button>
          <button className="btn" onClick={handleDivide}>
            <span style={{ fontSize: '25px' }}>÷</span>
          </button>
        </div>

        <div className="row">
          <button onClick={handleCos}>T</button>
          <button onClick={handleLog}>T</button>
          <button className="btn" onClick={() => handleNumber("4")}>4</button>
          <button className="btn" onClick={() => handleNumber("5")}>5</button>
          <button className="btn" onClick={() => handleNumber("6")}>6</button>
          <button className="btn" onClick={handleMultiply}>
            <span style={{ fontSize: '17.5px' }}>x</span>
          </button>
        </div>

        <div className="row">
          <button onClick={handleTan}>T</button>
          <button onClick={handleSqrt}>√</button>
          <button className="btn" onClick={() => handleNumber("1")}>1</button>
          <button className="btn" onClick={() => handleNumber("2")}>2</button>
          <button className="btn" onClick={() => handleNumber("3")}>3</button>
          <button className="btn" onClick={handleSubtract}>
            <span style={{ fontSize: '25px' }}>-</span>
          </button>
        </div>

        <div className="row">
          <button onClick={handleE}>T</button>
          <button onClick={handlePow}>T</button>
          <button className="btn" onClick={() => handleNumber("0")}>0</button>
          <button className="btn" onClick={handleDecimal}>
            <span style={{ fontSize: '25px' }}>.</span>
          </button>
          <button id="eval" onClick={() => { setScreenValue(eval(screenValue)); }}>=</button>
          <button className="btn" onClick={handleAdd}>
            <span style={{ fontSize: '25px' }}>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};