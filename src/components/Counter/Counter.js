import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../../store/section1';
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.showCounter());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(10));
    /* {type : SOME_UNIQUE_IDENTIFIER, payload : 10}으로 변환되며
    payload가 아닌 다른 key 값을 사용해서는 안됨
    */
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>showCounter Counter</button>
    </main>
  );
};

export default Counter;
