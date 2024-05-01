import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment() {},
    decrement() {},
    increase() {},
    showCounter() {},
  },
});
// 액션 
const counterReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  } else if (action.type === "decrease") {
    return { counter: state.counter - 1 };
  } else if (action.type === "increment") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === "showCounter") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

const store = configureStore({
  // reducer: { counter: counterReducer.reducer },
  counter ; counterSlice.reducer}
);
export default store;
