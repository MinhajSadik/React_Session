import React, { createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Posts from './Components/Posts/Posts';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';


export const SwitchThemeContext = createContext()
export const UserContext = createContext()
function App() {

  const [theme, setTheme] = React.useState("light")

  const sessionUser = sessionStorage.getItem('user')

  const user = JSON.parse(sessionUser)
  const userInfo = {
    user,
  }

  const themeInfo = {
    theme: theme,
    setTheme: setTheme,
  }

  return (
    <Router>
      <div className={theme === 'light' ? 'lightTheme' : 'darkTheme'}>
        <UserContext.Provider value={userInfo}>
          <SwitchThemeContext.Provider value={themeInfo}>
            <Layout>
              <Register />
              <br />
              <Login />
              <Posts />
            </Layout>
          </SwitchThemeContext.Provider>
        </UserContext.Provider>
      </div >

    </Router>
  );
}





export default App;
