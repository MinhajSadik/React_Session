import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';

function App() {
  const user = sessionStorage.getItem("user")
  const userInfo = JSON.parse(user)
  const [loggedInUser, setLoggedInUser] = useState(false)

  useEffect(() => {
    if (userInfo) {
      setLoggedInUser(true)
    }
  }, [userInfo])

  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}





export default App;
