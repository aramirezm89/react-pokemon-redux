import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,incrementByAmount } from "./store/slices/counter";
import "./App.css";
import { useState } from "react";

function App() {

  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        count is {counter}
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <hr />
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <hr />
        <h6>Increment by amount</h6>
        <input onChange={(e) => setIncrementAmount(e.target.value)}></input>
        <button
          type="button"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Amount
        </button>
      </header>
    </div>
  );
}

export default App;
