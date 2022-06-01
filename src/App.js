import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current env variables:</p>
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
