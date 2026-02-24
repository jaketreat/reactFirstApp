// createContext lets us make a global state container
// useReducer is an alternative to useState for more complex logic
import { createContext, useReducer } from "react";

// This creates the Context object itself
// Think of this as the "pipe" that data flows through
const CounterContext = createContext();

/*
  This reducer function controls HOW state changes.
  It receives:
  - current state
  - an action object (usually with a "type")
*/
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      // Return a NEW state object
      // Never mutate state directly
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    case "random":
      // Add a random number to the count
      return { count: state.count + Math.floor(Math.random() * 250) };

    default:
      // If the action type is unknown, return current state
      return state;
  }
}

/*
  This component wraps parts of your app
  and PROVIDES access to the counter state.
*/
export function CounterProvider({ children }) {
  /*
    useReducer returns:
    - state → the current state object
    - dispatch → a function used to trigger changes
  */
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    /*
      Any component inside this Provider
      can access state + dispatch
    */
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// Export the context itself so other files can use it
export default CounterContext;