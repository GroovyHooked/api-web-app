import React, { useState } from "react";

export function Test() {
  const [result, setResult] = useState(0);
  const [double, setDouble] = useState(0);

  const increment = () => {
    setResult(result + 1);
    setDouble((result + 1) * (result + 1));
  };

  const initialValue = () => {
    setResult(0);
    setDouble(0);
  };

  const decrement = () => {
    setResult(result - 1);
    setDouble((result - 1) * (result - 1));
  };

  return (
    <div className="test">
      Value: {result} ( double: {double} )
      <div>
        <button onClick={increment}>increase</button>
        <button onClick={initialValue}>initialValue</button>
        <button onClick={decrement}>initialValue</button>
      </div>
    </div>
  );
}
