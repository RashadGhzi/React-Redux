import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "../features/counter/CounterSlice";
export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>This is Home and this state is {count}</div>
      <button
        type="button"
        onClick={() => {
          dispatch(incrementByAmount(count));
        }}
      >
        add doble
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(decrementByAmount(count / 2));
        }}
      >
        remove half
      </button>
    </>
  );
}
