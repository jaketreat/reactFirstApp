import Counter from "./Components/Counter"; // Import Counter component
import Greeting from "./Components/Greeting"; // Import Greeting component
import Logo from "./Components/Image1"; // Import logo image file
import ColorTest from "./Components/ColorTest"; //Import Color test
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My First Interactive React App</h1>
      <Greeting /> {/* Render the Greeting component */}
      <Counter />  {/* Render the Counter component */}
      <Logo colorClass="whiteClass"/>
      <Logo colorClass="greenClass"/>
      <ColorTest />
    </div>
  );
}

export default App;
