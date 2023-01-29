import React from 'react';
import './App.css';
import { useMyReducer } from './hooks/useMyReducer';

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
  const [counter, dispatch] = useMyReducer(counterReducer, initState)

  function onInputChange(e) {
    const { value } = e.target
    dispatch({ type: "INPUT_CHANGE", payload: { value } })
  }


  return (
    <div>
      {counter.text}
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
