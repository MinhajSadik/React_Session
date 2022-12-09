import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const user = {
  id: "1",
  name: "minhajsadik",
  profession: "programmer",
  jobType: "full-time"
}

export const UserContext = createContext(undefined)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);

