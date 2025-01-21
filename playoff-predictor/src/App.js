import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Please pick one of the games and we will predict who will win:
        </p>
        <button>NFC Championship</button>
        <button>AFC Championship</button>
      </header>
    </div>
  );
}

export default App;
