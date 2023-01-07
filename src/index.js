import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(
  <App />
);


const myReact = {
  state: null,
  stateInitialized: false,
  setState(newState) {
    this.state = newState;
  },
  useState(initialValue) {
    if (!this.stateInitialized) {
      this.state = initialValue;
      this.stateInitialized = true;
    }
    return [this.state, this.setState]
  }
}

// const MyReact = {
//   stateArr: [],
//   currentStateIndex: 0,
//   Component: null,
//   useState(initialValue) {
//     // if we reached beyond the last element of the array
//     // We will need create a new state
//     if (this.currentStateIndex === this.stateArr.length) {
//       const statePair = {
//         value: initialValue,
//         setState(newValue) {
//           statePair.value = newValue;
//           MyReact.currentStateIndex = 0;
//           root.render(<MyReact.Component />);
//         }
//       };

//       this.stateArr.push(statePair);
//     }
//     // get the current state and setState before incrementing the index
//     const currentStatePair = this.stateArr[this.currentStateIndex];
//     this.currentStateIndex += 1;
//     return [currentStatePair.value, currentStatePair.setState];
//   },
//   render(component, rootElement) {
//     this.component = component;
//     this.rootElement = rootElement;
//     root.render(<this.component />);
//   }
// };




// const Counter = () => {
//   const [count1, setCount1] = myReact.useState(0);
//   const [count2, setCount2] = myReact.useState(0);
//   return (
//     <>
//       <div>
//         The first count is: {count1}
//         <button onClick={() => setCount1(count1 + 1)}>+</button>
//       </div>
//       <div>
//         The second count is: {count2}
//         <button onClick={() => setCount2(count2 + 1)}>+</button>
//       </div>
//     </>
//   )
// }

// root.render(<Counter />)

