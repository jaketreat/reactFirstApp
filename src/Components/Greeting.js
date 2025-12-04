import { useState } from "react";

function Greeting() {
  const [name, setName] = useState(""); // State for the name input

  return (
    <div>
      <h2>Hello, {name || "Stranger"}!</h2> {/* Display name or default */}
      <input 
        type="text" 
        placeholder="Type your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      {/* Updates state as user types */}
    </div>
  );
}

export default Greeting;