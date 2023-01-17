import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ThemeProvider from './contexts/ThemeProvider';
import UserProvider from './contexts/UserProvider';

const initState = 2
const countReducer = (state = 0, action) => {
  console.log(state)
}


function App() {
  const [countReducer, dispatch] = useReducer(countReducer, initState)

  return (
    <>
      <ThemeProvider>
        <UserProvider>


          <Router>
            <Routes>

            </Routes>
          </Router>
        </UserProvider>
      </ThemeProvider >
    </>
  );
}





export default App;
