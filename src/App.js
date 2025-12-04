/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import Counter from "./Components/Counter"; // Import Counter component
import Greeting from "./Components/Greeting"; // Import Greeting component

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
