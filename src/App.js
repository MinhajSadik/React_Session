import './App.css';
import { First } from './Components/First/First';
import Welcome from './Components/First/Welcome';

function App() {
  const messages = "Times It firm"
  return (
    <div className="App">
      <Welcome message={messages} >
        <First />
      </Welcome>
    </div >
  );
}

export default App;
