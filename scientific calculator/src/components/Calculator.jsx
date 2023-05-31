/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import "./Calculator.css"

export const Calculator = () => {
  const [screenValue, setScreenValue] = useState("")

  const handleMultiply = () => {
    if (screenValue.slice(-1) !== "*") {
      setScreenValue((prevValue) => prevValue + "*")
    }
  }

  const handleNumber = (number) => {
    setScreenValue((prevValue) => prevValue + number)
  }

  const handleDecimal = () => {
    if (!screenValue.includes(".")) {
      setScreenValue((prevValue) => prevValue + ".")
    }
  }

  const handleBackspace = () => {
    setScreenValue(screenValue.substr(0, screenValue.length - 1))
  }

  return (
    <div className="container">
      <div className="display">
        <input id="screen" type="text" placeholder="0" value={screenValue} />
      </div>

      <div className="btns">
        <div className="row">
          <button id="ce" onClick={handleBackspace}>
            CE
          </button>
          <button>x!</button>
          <button className="btn">(</button>
          <button className="btn">)</button>
          <button className="btn">%</button>
          <button
            id="ac"
            onClick={() => {
              setScreenValue("")
            }}
          >
            AC
          </button>
        </div>

        <div className="row">
          <button>sin</button>
          <button>π</button>
          <button className="btn" onClick={() => handleNumber("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleNumber("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleNumber("9")}>
            9
          </button>
          <button className="btn">
            <span style={{ fontSize: "25px" }}>÷</span>
          </button>
        </div>

        <div className="row">
          <button>cos</button>
          <button>log</button>
          <button className="btn" onClick={() => handleNumber("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleNumber("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleNumber("6")}>
            6
          </button>
          <button className="btn" onClick={handleMultiply}>
            <span style={{ fontSize: "17.5px" }}>x</span>
          </button>
        </div>

        <div className="row">
          <button>tan</button>
          <button>√</button>
          <button className="btn" onClick={() => handleNumber("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleNumber("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleNumber("3")}>
            3
          </button>
          <button className="btn">
            <span style={{ fontSize: "25px" }}>-</span>
          </button>
        </div>

        <div className="row">
          <button>e</button>
          <button>
            x <span style={{ position: "relative", bottom: ".5em", right: ".1em", fontSize: "1.9vh" }}>y</span>
          </button>
          <button className="btn" onClick={() => handleNumber("0")}>
            0
          </button>
          <button className="btn" onClick={handleDecimal}>
            <span style={{ fontSize: "25px" }}>.</span>
          </button>
          <button
            id="eval"
            onClick={() => {
              setScreenValue(eval(screenValue))
            }}
          >
            =
          </button>
          <button className="btn">
            <span style={{ fontSize: "25px" }}>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
