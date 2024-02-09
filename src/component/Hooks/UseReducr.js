import React, { useReducer } from "react";
import "./hooks.css";

let inialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCR":
      return state + 1;
    case "DECR":
      return state - 1;
    default:
      return state;
  }
};
const UseReducr = () => {
  const [state, dispach] = useReducer(reducer, inialstate);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispach("DECR")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
        <div className="button2" onClick={() => dispach("INCR")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseReducr;
