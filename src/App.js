import React, { useReducer } from 'react';
import './App.css';


function counterReducer(state, action) {
  switch (action) {
    case "INCREMENT":
      return state = state + 1;

    case "DECREMENT":
      return state = state - 1;
  }
}
function App() {
  const [counter, dispatch] = useReducer(counterReducer, 0)

  return (

    <div>
      {counter}
      <button type='button' onClick={() => dispatch("INCREMENT")}>
        Increment
      </button>

      <button type='button' onClick={() => dispatch("DECREMENT")}>
        Decrement
      </button>
    </div>
  );
}





export default App;
