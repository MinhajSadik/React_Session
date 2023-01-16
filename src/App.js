import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Service from './Components/Service';
import ThemeProvider from './contexts/ThemeProvider';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';

const initState = 2
function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1
    default:
      return state;
  }
}

function App() {

  const [countState, setCount] = useState(0);
  const [countReducer, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <div>
            {countReducer}
            <button onClick={() => dispatch("increment")}>
              Increment
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
