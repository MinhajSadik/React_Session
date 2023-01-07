import React, { useCallback, useRef } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import ShowCount from './Components/ShowCount';
import Title from './Components/Title';

function App() {
  const [count, setCount] = React.useState(0);
  const inputRef = useRef()

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [])

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, [])

  return (
    <div>
      <Input type="text" value="nothing" ref={inputRef} />
      <Title />
      <ShowCount count={count} title="increment" />
      <Button handleClick={increment}>
        Increment
      </Button>
      <hr />
      <ShowCount title="decrement" />
      <Button handleClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}





export default App;
