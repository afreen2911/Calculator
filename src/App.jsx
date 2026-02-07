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

  return <div>Logic Ready</div>;
};

export default App;
