import './App.css';
import Welcome from './Components/First/Welcome';

function App() {
  const messages = "Times It firm"
  return (
    <div className="App">
      <Welcome message={messages} />
    </div >
  );
}

export default App;
