import Counter from "./Components/Counter"; // Import Counter component
import Greeting from "./Components/Greeting"; // Import Greeting component
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My First Interactive React App</h1>
      <Greeting /> {/* Render the Greeting component */}
      <Counter />  {/* Render the Counter component */}
    </div>
  );
}

export default App;
