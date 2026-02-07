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
    </div>
  </div>
);
};

export default App;
