// UseMemo and UseCallback bane same j che
//Memo returns Memoized value whereas Callback returns memoized Function
import React, { useState, useMemo, useCallback } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Example of useMemo: Memoizing a calculated value
  const squaredValue = useMemo(() => {
    console.log("Calculating squared value...");
    return count * count;
  }, [count]); // Only recalculate when count changes

  // Example of useCallback: Memoizing a function
  const handleInputChange = useCallback(
    (event) => {
      console.log("Handling input change...");
      setInputValue(event.target.value);
    },
    [] // No dependencies, the function is constant
  );

  return (
    <div>
      <h1>useMemo and useCallback Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Squared Value: {squaredValue}</p>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default Demo;
