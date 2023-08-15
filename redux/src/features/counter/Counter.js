import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterSlice";
import "./module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counter">
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="count">{count}</span>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="btn dec-by-amount"
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          10+
        </button>
      </div>
    </>
  );
}
