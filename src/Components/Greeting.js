import { useState } from "react";

function Greeting() {
  const [name, setName] = useState(""); // State for the name input
  let Greeting;
  if (name == "Erica") {
    Greeting = "Hello Erica!!"
  } else if (name == "Jake") {
    Greeting = "Hello Jake!!"
  } else if (name == "") {
    Greeting = " "
  } else {
    Greeting = `${name} is a bad name!`
  }

  return (
    <div>
      {/*<h2 className="redHead">Hello, {name || "Stranger"}!</h2> {/* Display name or default */}
      {/*<h2 className="redHead">{name == 'Jake' ? "Hello, Jake" : "That's a bad name!"}</h2>*/}
      
      <input 
        type="text" 
        placeholder="Type your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <h2 className="whiteHead">{Greeting}</h2>
      {/* Updates state as user types */}
    </div>
  );
}

export default Greeting;