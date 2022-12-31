import React, { createContext } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Posts from './Components/Posts/Posts';
import Login from './Components/Users/Login';


export const SwitchThemeContext = createContext()
export const UserContext = createContext()
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [theme, setTheme] = React.useState("light")

  const userInfo = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn
  }

  const themeInfo = {
    theme: theme,
    setTheme: setTheme,
  }

  const { REACT_APP_API_URL } = process.env

  console.log({ REACT_APP_API_URL })

  return (
    <div className={theme === 'light' ? 'lightTheme' : 'darkTheme'}>
      <UserContext.Provider value={userInfo}>
        <SwitchThemeContext.Provider value={themeInfo}>
          <Layout>
            <Posts />
            <Login />
          </Layout>
        </SwitchThemeContext.Provider>
      </UserContext.Provider>
    </div >
  );
}





export default App;
