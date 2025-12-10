import { useState } from "react"; // Import useState to hold component state

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state at 0

  return (
    <div>
      <h2 className="whiteHead">Kittens you should have: {count}</h2> {/* Display the current count */}
      <button onClick={() => setCount(count + 1)}>Increase</button> 
      {/* Button updates count using setCount */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter; // Export so other files can import it