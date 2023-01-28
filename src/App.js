import React, { useReducer } from 'react';
import './App.css';

const initState = {
  count: 0,
  text: ""
}

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }

    case "DECREMENT":
      return {
        count: state.count - 1,
      }

    case "INPUT_CHANGE":
      return {
        ...state,
        text: action.payload.value
      }
    default:
      return state
  }
}
function App() {
  const [counter, dispatch] = useReducer(counterReducer, initState)

  function onInputChange(e) {
    const { name, value } = e.target
    dispatch({ type: "INPUT_CHANGE", payload: { name, value } })
  }

  console.log(counter)

  return (
    <div>
      <input type="text" onChange={onInputChange} />
      {counter.count}
      <br />
      <button onClick={() => dispatch({
        type: "INCREMENT"
      })}>
        Increment
      </button>

      <button type='button' onClick={() => dispatch({
        type: "DECREMENT"
      })}>
        Decrement
      </button>

    </div>
  );
}





export default App;
