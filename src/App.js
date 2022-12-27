import React, { createContext } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Posts from './Components/Posts/Posts';


export const SwitchThemeContext = createContext()
export const UserContext = createContext()
function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [theme, setTheme] = React.useState('white')

  const userCredential = {
    isLoggedIn: isLoggedIn
  }

  const themeProperties = {
    theme: theme,
    color: 'black',
    backgorundColor: 'white',
    setTheme: setTheme
  }


  return (
    <div className=''>
      <UserContext.Provider value={userCredential}>
        <SwitchThemeContext.Provider value={themeProperties}>
          <Layout>
            <Posts />
          </Layout>
        </SwitchThemeContext.Provider>
      </UserContext.Provider>
    </div >
  );
}





export default App;
