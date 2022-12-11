import './App.css';
import Users from './Components/User/Users';
import Welcome from './Components/Welcome';

function App() {
  const users = [1, 2, 3, 4, 5]

  return (
    <div className="App">
      {
        users.map((user, index) => <Users key={index} />)
      }
      <Welcome />
    </div >
  );
}

export default App;
