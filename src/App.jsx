import React, { useState } from "react";

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
    try {
      setExpression(eval(expression).toString());
    } catch {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  const handlePercentage = () => {
    try {
      setExpression((eval(expression) / 100).toString());
    } catch {
      setExpression("Error");
    }
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
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Calculator</h2>

<input
  type="text"
  value={expression}
  onChange={handleInput}
  placeholder="0"
  className={`mb-4 w-full rounded border p-3 text-right text-xl
    ${isDark ? "bg-gray-700 text-white" : "bg-white"}
  `}
/>

        <button
          onClick={() => setIsDark(!isDark)}
          className={`w-12 h-6 rounded-full p-1 flex items-center
            ${isDark ? "bg-green-500" : "bg-gray-400"}
          `}
        >
          <span
            className={`w-4 h-4 bg-white rounded-full transition-transform
              ${isDark ? "translate-x-6" : ""}
            `}
          />
        </button>

      </div>
      <div className="grid grid-cols-4 gap-2">
  <button onClick={handleClear}>AC</button>
  <button onClick={handlePercentage}>%</button>
  <button onClick={handleBackspace}>X</button>
  <button onClick={() => handleClick("/")}>/</button>

  <button onClick={() => handleClick("7")}>7</button>
  <button onClick={() => handleClick("8")}>8</button>
  <button onClick={() => handleClick("9")}>9</button>
  <button onClick={() => handleClick("*")}>*</button>

  <button onClick={() => handleClick("4")}>4</button>
  <button onClick={() => handleClick("5")}>5</button>
  <button onClick={() => handleClick("6")}>6</button>
  <button onClick={() => handleClick("-")}>-</button>

  <button onClick={() => handleClick("1")}>1</button>
  <button onClick={() => handleClick("2")}>2</button>
  <button onClick={() => handleClick("3")}>3</button>
  <button onClick={() => handleClick("+")}>+</button>

  <button onClick={() => handleClick("00")}>00</button>
  <button onClick={() => handleClick("0")}>0</button>
  <button onClick={() => handleClick(".")}>.</button>
  <button onClick={calculate}>=</button>
</div>
    </div>
  </div>
);
};

export default App;
