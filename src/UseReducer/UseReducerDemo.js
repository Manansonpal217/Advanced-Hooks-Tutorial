import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return state.count === 0
        ? { count: state.count }
        : { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h1>useReducer Demo</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default UseReducerDemo;
