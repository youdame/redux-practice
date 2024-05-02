import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = { counter: 0, showCounter: true };

// reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,

  // action 부분
  reducers: {
    // 현 상태를 첫 번째 파라미터인 state로 받음
    // 리덕스 툴킷이 내부적으로 새로운 객체를 리턴시킴

    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice;
