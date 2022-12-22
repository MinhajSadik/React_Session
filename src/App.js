import React from 'react';

function App({ color }) {

  const [posts, setPosts] = React.useState([])


  React.useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
      setPosts(data)
    })
  }, [])

  return (
    <div className="App" style={{ color }}>
      {posts.map((post) => (
        <div>
          {post.title} {post.description}
        </div>
      ))}
    </div >
  );
}





export default App;
