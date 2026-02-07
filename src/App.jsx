import React from "react";
import { useState } from "react";

const App = () => {
  const [expression, setExpression] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const handleInput = (e) => {
    setExpression(e.target.value);
  };

  const calculate = () => {
      setExpression(eval(expression).toString());
  };

  const handleClear = () => {
    setExpression("");
  };

  const handlePercentage = () => {
    setExpression((eval(expression) / 100).toString());
  };

  const handleBackspace = () => {
    setExpression(expression.slice(0, -1));
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center transition-colors
        ${isDark ? "bg-gray-900" : "bg-gray-100"}
      `}
    >
      <div
        className={`w-80 rounded-xl p-5 shadow-lg
          ${isDark ? "bg-gray-800 text-white" : "bg-gray-200"}
        `}
      >
        {/* Header with Toggle */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Calculator</h2>

          {/* 🔘 Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className={`w-12 h-6 rounded-full p-1 flex items-center
              transition-colors duration-300
              ${isDark ? "bg-green-500" : "bg-gray-400"}
            `}
          >
            <span
              className={`w-4 h-4 rounded-full bg-white shadow
                transform transition-transform duration-300
                ${isDark ? "translate-x-6" : "translate-x-0"}
              `}
            />
          </button>
        </div>

        {/* Display */}
        <input
          type="text"
          value={expression}
          onChange={handleInput}
          placeholder="0"
          className={`mb-4 w-full rounded border p-3 text-right text-xl
            ${isDark ? "bg-gray-700 text-white" : "bg-white "}
          `}
        />

        <div
  className={`grid grid-cols-4 gap-2 ${
    isDark ? "bg-gray-800 text-black" : "bg-gray-200"
  }`}
>
        
          <button onClick={handleClear} className="calc-btn bg-gray-100 w-12 p-3 rounded-full font-bold">AC</button>
          <button onClick={handlePercentage} className="calc-btn bg-gray-100 w-12 p-3 rounded-full font-bold">%</button>
          <button onClick={handleBackspace} className="calc-btn bg-gray-100 w-12 p-3 rounded-full font-bold">X</button>
          <button onClick={() => handleClick("/")} className="calc-btn bg-gray-100 w-12 p-3 rounded-full font-bold">/</button>

          <button onClick={() => handleClick("7")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">7</button>
          <button onClick={() => handleClick("8")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">8</button>
          <button onClick={() => handleClick("9")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">9</button>
          <button onClick={() => handleClick("*")} className="calc-btn bg-gray-100 w-12 p-3 rounded-full font-bold">*</button>

          <button onClick={() => handleClick("4")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">4</button>
          <button onClick={() => handleClick("5")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">5</button>
          <button onClick={() => handleClick("6")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">6</button>
          <button onClick={() => handleClick("-")} className="calc-btn bg-gray-100 w-12 p-3 rounded-full font-bold">-</button>

          <button onClick={() => handleClick("1")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">1</button>
          <button onClick={() => handleClick("2")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">2</button>
          <button onClick={() => handleClick("3")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">3</button>
          <button onClick={() => handleClick("+")} className="calc-btn bg-gray-100 w-12 p-3 rounded-full font-bold">+</button>

          <button onClick={() => handleClick("00")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">00</button>
          <button onClick={() => handleClick("0")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">0</button>
          <button onClick={() => handleClick(".")} className="calc-btn bg-white w-12 p-3 rounded-full font-bold">.</button>
          <button onClick={calculate} className="calc-btn bg-orange-500 w-12 p-3 rounded-full font-bold text-white">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
