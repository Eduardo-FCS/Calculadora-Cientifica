// eslint-disable-next-line no-unused-vars
import React from "react";
import './Calculator.css';

export const Calculator = () => {
  function backspc() {
  // Implemente a lógica desejada
}

function fact() {
  // Implemente a lógica desejada
}

function sin() {
  // Implemente a lógica desejada
}

function pi() {
  // Implemente a lógica desejada
}

function cos() {
  // Implemente a lógica desejada
}

function log() {
  // Implemente a lógica desejada
}

function tan() {
  // Implemente a lógica desejada
}

function sqrt() {
  // Implemente a lógica desejada
}

function e() {
  // Implemente a lógica desejada
}

function pow() {
  // Implemente a lógica desejada
}


  return (
    <div className="container">
      <div className="display">
        <input id="screen" type="text" placeholder="0" />
      </div>

      <div className="btns">
        <div className="row">
          <button id="ce" onClick={backspc}>CE</button>
          <button onClick={fact}>x!</button>
          <button className="btn">(</button>
          <button className="btn">)</button>
          <button className="btn">%</button>
          <button id="ac" onClick={() => { screen.value = ''; }}>AC</button>
        </div>

        <div className="row">
          <button onClick={sin}>sin</button>
          <button onClick={pi}>π</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn"><span style={{ fontSize: '25px' }}>÷</span></button>
        </div>

        <div className="row">
          <button onClick={cos}>cos</button>
          <button onClick={log}>log</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn"><span style={{ fontSize: '17.5px' }}>x</span></button>
        </div>

        <div className="row">
          <button onClick={tan}>tan</button>
          <button onClick={sqrt}>√</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn"><span style={{ fontSize: '25px' }}>-</span></button>
        </div>

        <div className="row">
          <button onClick={e}>e</button>
          <button onClick={pow}>x <span style={{ position: 'relative', bottom: '.5em', right: '.1em', fontSize: '1.9vh' }}>y</span></button>
          <button className="btn">0</button>
          <button className="btn"><span style={{ fontSize: '25px' }}>.</span></button>
          <button id="eval" onClick={() => { screen.value = eval(screen.value); }}>=</button>
          <button className="btn"><span style={{ fontSize: '25px' }}>+</span></button>
        </div>
      </div>
    </div>
  );
};