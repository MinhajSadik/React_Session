import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Posts from './Components/Posts/Posts';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';
import ThemeProvider from './contexts/ThemeProvider';
import UserProvider from './contexts/UserProvider';


function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <Register />
          <br />
          <Login />
          <Posts />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}





export default App;
