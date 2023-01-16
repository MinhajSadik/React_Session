import React, { useEffect, useReducer } from 'react';
import { getPosts } from './actions/postAction';
import { postsReducer } from './reducers/postReducer';


function App() {
  const [products, dispatch] = useReducer(postsReducer)

  useEffect(() => {
    dispatch(getPosts())
  }, [products])

  console.log({ products })


  return (
    <div>

    </div>
  );
}





export default App;
