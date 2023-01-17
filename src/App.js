import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Service from './Components/Service';
import ThemeProvider from './contexts/ThemeProvider';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';

const INCREMENT = "increment"

const initState = {
  counter: 3
}

const counterReducer = (state, action) => {

  switch (action.type) {
    case INCREMENT:
      console.log(action.data);
      return {
        counter: state.counter + 2
      }
    case "decrement":
      console.log(action.data)
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}


function App() {
  const [count, dispatch] = useReducer(counterReducer, initState)

  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <div>
            {count.counter}
            <button onClick={() => dispatch({
              type: "increment",
              data: "increment"
            })}>
              Increment
            </button>

            <button onClick={() => dispatch({
              type: "decrement",
              data: "decrement"
            })}>
              Decrement
            </button>

          </div>

          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/contact/:value' element={<Contact />} />
            </Routes>
          </Router>
        </UserProvider>
      </ThemeProvider >
    </>
  );
}





export default App;
