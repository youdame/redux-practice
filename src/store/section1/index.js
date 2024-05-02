import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterSlice from './counter';

// createStore는 하나의 reducer만 받을 수 있음
// configureStore는 여러 개의 리듀서를 하나의 리듀서로 합칠 수 있음

const store = configureStore({
  // reducer: counterSlice.reducer,

  // 아래처럼 key value로 하면 모든 리듀서를 하나의 리듀서로 합쳐줌
  // selector의 state.다음 부분은 key 값을 따라감
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// 사용하는 쪽에서는 이렇게 .으로 chaining해서 접근하기 때문에 action type 오타에 대해 생각할 필요가 없어짐
// counterSlice.actions.decrement();

export const authAction = authSlice.actions;
export default store;
