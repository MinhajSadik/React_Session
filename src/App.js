import React, { createContext } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Posts from './Components/Posts/Posts';


export const SwitchThemeContext = createContext()
export const UserContext = createContext()
function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [theme, setTheme] = React.useState('white')

  const userInfo = {
    isLoggedIn: isLoggedIn
  }

  const themeInfo = {
    theme: theme,
    color: 'black',
    backgorundColor: 'white',
    setTheme: setTheme
  }

  const { REACT_APP_API_URL } = process.env

  console.log(REACT_APP_API_URL)

  return (
    <div style={{ color: theme === "white" ? 'white' : 'black', backgroundColor: theme === 'white' ? 'black' : 'white' }}>
      <UserContext.Provider value={userInfo}>
        <SwitchThemeContext.Provider value={themeInfo}>
          <Layout>
            <Posts />
          </Layout>
        </SwitchThemeContext.Provider>
      </UserContext.Provider>
    </div >
  );
}





export default App;
