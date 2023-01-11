import React, { useCallback, useMemo, useRef } from 'react';
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


  const expensiveCalculation = useMemo(() => {
    console.log("calculating...")
    let num = 0;
    for (let i = 0; i < 1000000000; i++) {
      num += i;
    }

    return num;
  }, [])

  // const expensiveCalculation = () => {
  //   console.log("calculating...")
  //   let num = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     num += i;
  //   }

  //   return num;
  // }


  return (
    <div>
      <Input type="text" value="nothing" ref={inputRef} />
      <Title />
      {expensiveCalculation && count % 2 === 0 ? "even" : "odd"}
      <ShowCount count={count} title="increment" />
      <Button count={count} handleClick={increment}>
        Increment
      </Button>
      <hr />
      <ShowCount title="decrement" />
      <Button handleClick={decrement} >
        Decrement
      </Button>
    </div>
  );
}





export default App;
