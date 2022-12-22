import React from 'react';
import './App.css';
import Products from './Components/Products/Products';

function App() {

  const width = "150px"

  const path = '/logo192.png'

  function getColors() {

  }

  return (
    <div className="App">
      <Products width={width} path={path} getColors={getColors} />
    </div >
  );
}

export default App;
