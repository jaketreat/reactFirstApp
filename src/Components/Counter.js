import { useState } from "react"; // Import useState to hold component state

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state at 0
  

  // Function that creates large random number generator
  function pushForCats() {
        return <button onClick={() => setCount(count + Math.floor(Math.random() * 250))}>Push for More Cats</button>;
    }

  return (
    <>
    <div className="counterSection">
      <h2 className="whiteHead">Cats allowed in your house: <span className="greenHead">{count}</span></h2> {/* Display the current count */}
      <button onClick={() => setCount(count + 1)}>Increase</button> 
      {/* Button updates count using setCount */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {pushForCats()}
    </div>
    </>
  );

    
}

export default Counter; // Export so other files can import it