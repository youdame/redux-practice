import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialCounterState = { counter: 0, showCounter: true };

// action 부분
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,

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
      state.counter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// createStore는 하나의 reducer만 받을 수 있음
// configureStore는 여러 개의 리듀서를 하나의 리듀서로 합칠 수 있음

const store = configureStore({
  // reducer: counterSlice.reducer,

  // 아래처럼 key value로 하면 모든 리듀서를 하나의 리듀서로 합쳐줌
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// 사용하는 쪽에서는 이렇게 .으로 chaining해서 접근하기 때문에 action type 오타에 대해 생각할 필요가 없어짐
// counterSlice.actions.decrement();

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;
