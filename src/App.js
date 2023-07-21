import logo from './logo.svg';
import './App.css';
import { useState,useRef,useMemo, useCallback} from 'react';
import HookComponent from "./HookComponent";

function App() {
  const [showHook, setShowHook] = useState(false);
  const [value, setValue] = useState(0)

  const myVar = useCallback(() => [],[[]])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showHook ?<HookComponent prop={myVar()}/>:null}
        <p>{value}</p>

        <button onClick={() => setShowHook(!showHook)}>Show hook</button>
        <button onClick={() => setValue(value + 1)}>Re-render</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
