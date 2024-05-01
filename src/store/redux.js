import { createStore } from 'redux';
const initialState = { counter: 0, showCounter: true };

/* 1. action type은 컴포넌트에서 호출할 문자열과 조금만 달라도 작동하지 않음 -> 오타에 정말 유의해야함
따라서 이러한 타입 값을 한 번에 정의해두고 그걸 사용하면 좋을 거 같음 
주로 타입을 상수변수로 따로 지정해서 사용하곤 함 
*/
/* 2. 항상 새로운 객체를 반환해야하기 때문에 중첩된 복잡한 객체가 될 수록 더 헷갈림 */

// 이 모든 걸 해결해주는 게 리덕스 툴킷

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increase') {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  } else if (action.type === 'decrease') {
    return { counter: state.counter - 1 };
  } else if (action.type === 'increment') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === 'showCounter') {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

// createStore는 하나의 reducer만 받을 수 있음

const store = createStore(counterReducer);
export default store;
