// Import the custom hook instead of useContext directly
import useCounter from "../hooks/useCounter";

function Counter() {
  /*
    useCounter gives us:
    - state → { count }
    - dispatch → function to send actions to reducer
  */
  const { state, dispatch } = useCounter();

  // Pull count out to make JSX cleaner
  const count = state.count;

  /*
    This is just UI logic.
    It does NOT touch state.
  */
  function catLevel() {
    if (count < 5) return "Beginner Cat Owner";
    if (count < 20) return "Crazy Cat Person";
    return "Cat Overlord 🐱";
  }

  return (
    <div className="counterSection">
      <h2 className="whiteHead">
        Cats allowed in your house:{" "}
        <span className="greenHead">{count}</span>
      </h2>

      {/* Derived value based on state */}
      <p className="whiteHead">{catLevel()}</p>

      {/* Each button dispatches an ACTION */}
      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

      <button onClick={() => dispatch({ type: "random" })}>
        Push for More Cats
      </button>
    </div>
  );
}

export default Counter;


//My version of the counter:
//-------------------------------------------------
//-------------------------------------------------
/*
import { useState } from "react"; // Import useState to hold component state
//test comment

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state at 0
  

  // Function that creates large random number generator
  function pushForCats() {
        return <button onClick={() => setCount(count + Math.floor(Math.random() * 250))}>Push for More Cats</button>;
    }

  return (
    <>
    <div className="counterSection">
      <h2 className="whiteHead">Cats allowed in your house: <span className="greenHead">{count}</span></h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> 
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {pushForCats()}
    </div>
    </>
  );
}

export default Counter; // Export so other files can import it
*/