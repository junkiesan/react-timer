import logo from './logo.svg';
import './App.css';
import React , { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [response, setResponse] = useState(null);

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      setResponse(data[0].url)
    })
    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Time on page: { timer }</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
