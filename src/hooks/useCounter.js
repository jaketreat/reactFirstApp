// useContext lets us read data from a Context
import { useContext } from "react";

// Import the CounterContext we created earlier
import CounterContext from "../context/CounterContext";

/*
  This is a CUSTOM HOOK.
  It hides useContext so components stay clean.
*/
export default function useCounter() {
  // Grab the context value (state + dispatch)
  const context = useContext(CounterContext);

  /*
    This protects you from bugs.
    If someone uses this hook outside the Provider,
    React will throw a helpful error.
  */
  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }

  // Return everything the component needs
  return context;
}