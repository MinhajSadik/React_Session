import React, { useCallback, useRef } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Counter from './Components/ShowCount';
import Title from './Components/Title/Title';
import WellComponent from './Components/WellComponent';


function App() {
  const inputRef = useRef({
    value: "inputRef",
  })
  const [count, setCount] = React.useState(0);
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count])

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, [])

  // const expensiveCalculation = useMemo(() => {
  //   console.log('calculating...');

  //   let num = 0
  //   for (let i = 0; i < 1000000000; i++) {
  //     num += i
  //   }
  //   return num
  // }, [])

  // const handleIncrement = () => {
  //   setCount((prevCount) => prevCount + 1);
  // }
  // const handleDecrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // }

  return (
    <>
      <Input ref={inputRef} />
      <Title />
      <WellComponent />
      <Counter title="counter" count={count} />
      <Button onClick={handleIncrement}>Increment + </Button>
      <hr />
      <Counter title="counter" count={count} />
      <Button onClick={handleDecrement}>Decrement - </Button>
    </>
  );
}





export default App;
