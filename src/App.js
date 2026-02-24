import Counter from "./Components/Counter";
import Greeting from "./Components/Greeting";
import Logo from "./Components/Image1";
import ColorTest from "./Components/ColorTest";
import "./App.css";

// Import the Provider so we can wrap the app
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    /*
      Wrapping the app here means:
      Counter state is available everywhere below
    */
    <CounterProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>My First Interactive React App</h1>

        {/* Uses local state (useState) */}
        <Greeting />

        {/* Uses global state (Context + Reducer) */}
        <Counter />

        {/* Stateless components using props */}
        <Logo colorClass="whiteClass" />
        <Logo colorClass="greenClass" />

        <ColorTest />
      </div>
    </CounterProvider>
  );
}

export default App;
