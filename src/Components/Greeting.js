import { useState } from "react";

function Greeting() {
  const [name, setName] = useState(""); // State for the name input
  let Greeting;
  if (name == "Erica") {
    Greeting = "Hello Erica"
  } else if (name == "Jake") {
    Greeting = "Hello Jake"
  } else {
    Greeting = "That's a bad name!"
  }

  return (
    <div>
      {/*<h2 className="redHead">Hello, {name || "Stranger"}!</h2> {/* Display name or default */}
      {/*<h2 className="redHead">{name == 'Jake' ? "Hello, Jake" : "That's a bad name!"}</h2>*/}
      <h2 className="redHead">{Greeting}</h2>
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