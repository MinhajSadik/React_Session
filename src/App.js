import React, { useRef } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import ShowCount from './Components/ShowCount';
import Title from './Components/Title';

function App() {
  const [count, setCount] = React.useState(0);
  const inputRef = useRef()

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
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
      <Input type="text" value="nothing" ref={inputRef} />
    </div>
  );
}





export default App;
