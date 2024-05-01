import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const showCounterCounterHandler = () => {
    dispatch({ type: "showCounter" });
  };

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={showCounterCounterHandler}>showCounter Counter</button>
    </main>
  );
};

export default Counter;
