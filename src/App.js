import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar/Navbar';
import DataProvider from './contexts/DataProvider';
import StylesProvider from './contexts/StylesProvider';


function App() {
  return (
    <StylesProvider>
      <DataProvider>
        <Header>
          <Navbar />
        </Header>
      </DataProvider>
    </StylesProvider>
  );
}





export default App;
