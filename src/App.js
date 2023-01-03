import React, { createContext, useEffect, useState } from 'react';
import Hooks from './Components/Hooks';

export const StylesContext = createContext('black')
export const DataContext = createContext()
function App() {
  const [showMe, setShowMe] = useState(true)

  const [posts, setPosts] = useState([])

  const styles = {
    color: "red",
    fontSize: "42px",
    backgroundColor: "hotpink",
  }

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])



  return (
    <div className="App" >
      <StylesContext.Provider value={styles}>
        <DataContext.Provider value={posts}>
          {/* <Header >
            <Navbar />
          </Header> */}
        </DataContext.Provider>
      </StylesContext.Provider>

      {
        showMe && <Hooks />
      }

      <button onClick={() => setShowMe((prevShow) => !prevShow)}>
        {showMe ? "Hide Component" : "Show Compoent"}
      </button>
    </div >
  );
}





export default App;
